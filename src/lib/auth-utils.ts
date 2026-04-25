/**
 * Firebase Auth utilities
 *
 * Wraps Firebase auth operations with:
 *  - Popup → redirect fallback for Google sign-in
 *  - Redirect result resolution on page load
 *  - Typed Firebase error code → friendly message mapping
 */

import {
  Auth,
  GoogleAuthProvider,
  UserCredential,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";

// ─── Environment ──────────────────────────────────────────────────────────────

export const isBrowser = typeof window !== "undefined";

/**
 * Returns true when the runtime environment reliably supports auth popups
 * (excludes Instagram, Facebook, Twitter in-app browsers, etc.).
 */
export const isPopupSupported = (): boolean => {
  if (!isBrowser) return false;
  const ua = navigator.userAgent;
  const blocked =
    ua.includes("Instagram") ||
    ua.includes("FBAN") ||
    ua.includes("FBAV") ||
    ua.includes("Twitter") ||
    ua.includes("Line/");
  return !blocked;
};

// ─── Google auth proxy ────────────────────────────────────────────────────────

/**
 * Signs in with Google using popup, falling back to redirect when the popup
 * is blocked or the environment doesn't support it.
 *
 * Callers should catch `Error("REDIRECT_INITIATED")` — it means the page is
 * about to navigate and the sign-in will complete after the redirect returns.
 */
export const signInWithGoogleProxy = async (
  auth: Auth,
  provider: GoogleAuthProvider
): Promise<UserCredential> => {
  if (!isPopupSupported()) {
    await signInWithRedirect(auth, provider);
    throw new Error("REDIRECT_INITIATED");
  }

  try {
    return await signInWithPopup(auth, provider);
  } catch (err: unknown) {
    const code = (err as { code?: string }).code ?? "";
    if (
      code === "auth/popup-blocked" ||
      code === "auth/popup-closed-by-user" ||
      code === "auth/cancelled-popup-request"
    ) {
      await signInWithRedirect(auth, provider);
      throw new Error("REDIRECT_INITIATED");
    }
    throw err;
  }
};

/**
 * Resolves any pending Google redirect sign-in.
 * Call once on AuthProvider mount before subscribing to onAuthStateChanged.
 */
export const resolveRedirectResult = async (
  auth: Auth
): Promise<UserCredential | null> => {
  try {
    return await getRedirectResult(auth);
  } catch {
    return null;
  }
};

// ─── Error messages ───────────────────────────────────────────────────────────

const ERROR_MAP: Record<string, string> = {
  "auth/user-not-found":    "No account found with this email address.",
  "auth/wrong-password":    "Incorrect password. Please try again.",
  "auth/invalid-credential":"Invalid email or password.",
  "auth/invalid-email":     "Please enter a valid email address.",
  "auth/email-already-in-use":
    "This email is already registered. Please sign in.",
  "auth/weak-password":     "Password must be at least 6 characters.",
  "auth/too-many-requests":
    "Too many failed attempts. Please wait a moment and try again.",
  "auth/network-request-failed":
    "Network error. Please check your connection.",
  "auth/user-disabled":
    "This account has been disabled. Contact support.",
  "auth/operation-not-allowed":
    "This sign-in method is not enabled. Contact support.",
  "auth/popup-blocked":
    "Popup was blocked. Redirecting to Google sign-in…",
  "auth/popup-closed-by-user":
    "Sign-in popup was closed. Please try again.",
  "auth/cancelled-popup-request":
    "Another sign-in is already in progress.",
  "auth/account-exists-with-different-credential":
    "An account already exists with this email using a different sign-in method.",
  "auth/requires-recent-login":
    "Please sign in again to complete this action.",
  "auth/configuration-not-found":
    "Firebase Authentication is not enabled. Enable it in your Firebase console.",
};

/**
 * Converts a raw Firebase Auth error into a friendly user-facing message.
 * Checks `error.code` first (Firebase SDK errors), then falls back to a
 * substring scan of the message string.
 */
export const getFriendlyAuthError = (err: unknown): string => {
  if (err instanceof Error) {
    const code = (err as { code?: string }).code ?? "";
    if (code && ERROR_MAP[code]) return ERROR_MAP[code];
    const matched = Object.keys(ERROR_MAP).find((k) => err.message.includes(k));
    if (matched) return ERROR_MAP[matched];
  }
  return "Something went wrong. Please try again.";
};

// ─── Firebase config validator ────────────────────────────────────────────────

const REQUIRED_KEYS = [
  "NEXT_PUBLIC_FIREBASE_API_KEY",
  "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
  "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
  "NEXT_PUBLIC_FIREBASE_APP_ID",
] as const;


export const validateFirebaseConfig = (): boolean => {
  if (!isBrowser) return true;

  const missing = REQUIRED_KEYS.filter((key) => {
    const val = process.env[key];
    return !val || val.startsWith("your_") || val === "undefined";
  });

  if (missing.length > 0) {
    console.warn(
      "%c[ShopWave] Firebase config is incomplete.\n" +
        "Fill in the following variables in your .env.local file:\n" +
        missing.join("\n") +
        "\n\nSee README.md → Setup & Installation for instructions.",
      "color: #f59e0b; font-weight: bold;"
    );
    return false;
  }

  return true;
};

// ─── Protected routes ─────────────────────────────────────────────────────────

export const PROTECTED_ROUTES = ["/items/add", "/items/manage"] as const;

/** Returns true when the given pathname requires an authenticated user. */
export const isProtectedRoute = (pathname: string): boolean =>
  PROTECTED_ROUTES.some((route) => pathname.startsWith(route));
