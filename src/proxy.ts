

import { NextRequest, NextResponse } from "next/server";


/** Cookie name written after a successful Firebase sign-in. */
const SESSION_COOKIE = "sw_session";

const PROTECTED_PATHS = ["/items/add", "/items/manage"];
const AUTH_PATH = "/login";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const hasSession = (req: NextRequest): boolean =>
  Boolean(req.cookies.get(SESSION_COOKIE)?.value);

const isProtected = (pathname: string): boolean =>
  PROTECTED_PATHS.some((p) => pathname.startsWith(p));

const addSecurityHeaders = (res: NextResponse): NextResponse => {
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("X-XSS-Protection", "1; mode=block");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );
  return res;
};

// ─── Proxy function ───────────────────────────────────────────────────────────

export const proxy = (req: NextRequest): NextResponse => {
  const { pathname } = req.nextUrl;
  const authenticated = hasSession(req);

  // Redirect unauthenticated users away from protected pages
  if (isProtected(pathname) && !authenticated) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = AUTH_PATH;
    loginUrl.searchParams.set("from", pathname);
    return addSecurityHeaders(NextResponse.redirect(loginUrl));
  }

  // Redirect already-authenticated users away from /login
  if (pathname === AUTH_PATH && authenticated) {
    const homeUrl = req.nextUrl.clone();
    homeUrl.pathname = "/";
    homeUrl.search = "";
    return addSecurityHeaders(NextResponse.redirect(homeUrl));
  }

  return addSecurityHeaders(NextResponse.next());
};


export const config = {
  matcher: [
    
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|woff2?|ttf|eot)).*)",
  ],
};
