"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import {
  Menu, X, ChevronDown, User, Package,
  Settings, LogOut, ShoppingCart, Trash2,
} from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

const NAV_LINKS = [
  { href: "/",      label: "Home"     },
  { href: "/items", label: "Products" },
  { href: "/about", label: "About"    },
];

const Navbar = () => {
  const { user, signOut }                             = useAuth();
  const { items, totalItems, totalPrice, removeItem } = useCart();
  const pathname                                      = usePathname();
  const router                                        = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userDrop,   setUserDrop]   = useState(false);
  const [cartOpen,   setCartOpen]   = useState(false);
  const userDropRef = useRef<HTMLDivElement>(null);
  const cartRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (userDropRef.current && !userDropRef.current.contains(e.target as Node))
        setUserDrop(false);
      if (cartRef.current && !cartRef.current.contains(e.target as Node))
        setCartOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out successfully");
    setUserDrop(false);
    router.push("/");
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">

          {/* ── Brand ─────────────────────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/powersync.svg" alt="" aria-hidden="true" className="h-8 w-auto" />
            <span className="michroma text-sm sm:text-base font-bold text-white tracking-widest group-hover:text-blue-400 transition-colors">
              SHOPWAVE
            </span>
          </Link>

          {/* ── Desktop nav ───────────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(href)
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                {label}
                {isActive(href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-400 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* ── Right actions ─────────────────────────────────────────── */}
          <div className="flex items-center gap-1">

            {/* Cart */}
            <div className="relative" ref={cartRef}>
              <button
                onClick={() => setCartOpen((v) => !v)}
                aria-label={`Cart — ${totalItems} items`}
                className="relative p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </button>

              {cartOpen && (
                <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl shadow-black/40 border border-gray-100 z-50 overflow-hidden">
                  <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-gray-50">
                    <h3 className="text-sm font-bold text-gray-900">
                      Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
                    </h3>
                    <button onClick={() => setCartOpen(false)} className="text-gray-400 hover:text-gray-600">
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {items.length === 0 ? (
                    <div className="py-10 text-center">
                      <ShoppingCart className="w-10 h-10 text-gray-200 mx-auto mb-3" />
                      <p className="text-sm text-gray-500 mb-1">Your cart is empty</p>
                      <p className="text-xs text-gray-400">Add items to get started</p>
                    </div>
                  ) : (
                    <>
                      <ul className="divide-y divide-gray-50 max-h-64 overflow-y-auto">
                        {items.map((item) => (
                          <li key={item.id} className="flex items-center gap-3 px-4 py-3">
                            <div className="relative w-12 h-12 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                              <Image src={item.imageUrl} alt={item.title} fill sizes="48px" className="object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-gray-900 truncate">{item.title}</p>
                              <p className="text-xs text-gray-500">{item.quantity} × ${item.price.toFixed(2)}</p>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              aria-label="Remove item"
                              className="text-gray-300 hover:text-rose-500 transition-colors shrink-0"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </li>
                        ))}
                      </ul>
                      <div className="px-4 py-3 border-t border-gray-100 bg-gray-50/60">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-semibold text-gray-700">Total</span>
                          <span className="text-sm font-extrabold text-gray-900">${totalPrice.toFixed(2)}</span>
                        </div>
                        <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors active:scale-[0.98]">
                          Checkout
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* User (desktop) */}
            <div className="hidden md:block relative" ref={userDropRef}>
              {user ? (
                <>
                  <button
                    onClick={() => setUserDrop((v) => !v)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    <div className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden ring-2 ring-blue-500/40">
                      {user.photoURL ? (
                        <Image src={user.photoURL} alt="avatar" width={28} height={28} className="rounded-full" />
                      ) : (
                        <User className="w-3.5 h-3.5 text-gray-300" />
                      )}
                    </div>
                    <span className="text-sm font-medium max-w-24 truncate">
                      {user.displayName || user.email?.split("@")[0]}
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${userDrop ? "rotate-180" : ""}`} />
                  </button>

                  {userDrop && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl shadow-black/30 border border-gray-100 py-1 z-50">
                      <div className="px-4 py-2.5 border-b border-gray-100 bg-gray-50">
                        <p className="text-xs text-gray-400">Signed in as</p>
                        <p className="text-sm font-semibold text-gray-900 truncate">{user.email}</p>
                      </div>
                      <Link href="/items/add" onClick={() => setUserDrop(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                        <Package className="w-4 h-4 text-blue-600" /> Add Product
                      </Link>
                      <Link href="/items/manage" onClick={() => setUserDrop(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                        <Settings className="w-4 h-4 text-blue-600" /> Manage Products
                      </Link>
                      <div className="border-t border-gray-100 mt-1">
                        <button onClick={handleSignOut} className="flex items-center gap-3 px-4 py-2.5 text-sm text-rose-600 hover:bg-rose-50 transition-colors w-full">
                          <LogOut className="w-4 h-4" /> Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <Link href="/login" className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                    Login
                  </Link>
                  <Link href="/login?tab=register" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors active:scale-[0.98]">
                    Register
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ───────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-3 space-y-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(href)
                  ? "bg-blue-500/10 text-blue-400"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              {label}
            </Link>
          ))}

          {user ? (
            <>
              <div className="px-4 py-2.5 border-t border-gray-800 mt-2 bg-gray-800/50 rounded-lg">
                <p className="text-xs text-gray-500 mb-0.5">Signed in as</p>
                <p className="text-sm font-semibold text-gray-200 truncate">{user.email}</p>
              </div>
              <Link href="/items/add" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                <Package className="w-4 h-4 text-blue-400" /> Add Product
              </Link>
              <Link href="/items/manage" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                <Settings className="w-4 h-4 text-blue-400" /> Manage Products
              </Link>
              <button onClick={handleSignOut} className="flex items-center gap-3 px-4 py-2.5 text-sm text-rose-400 hover:text-rose-300 hover:bg-gray-800 rounded-lg transition-colors w-full">
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            </>
          ) : (
            <div className="flex gap-2 pt-2 border-t border-gray-800">
              <Link href="/login" onClick={() => setMobileOpen(false)} className="flex-1 text-center px-4 py-2.5 border border-gray-700 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:border-gray-600 transition-colors">
                Login
              </Link>
              <Link href="/login?tab=register" onClick={() => setMobileOpen(false)} className="flex-1 text-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-colors">
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
