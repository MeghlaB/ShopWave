"use client";

import Link from "next/link";
import { Home, Search, Cpu, ArrowLeft, ShoppingBag, PhoneCall } from "lucide-react";

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-white px-6">
            <div className="max-w-3xl w-full text-center">
                {/* --- Visual Icon Section --- */}
                <div className="relative mb-8 flex justify-center">
                    <div className="absolute inset-0 bg-blue-50 blur-3xl rounded-full scale-150 opacity-50" />
                    <div className="relative">
                        <Cpu size={120} className="text-slate-200 animate-pulse" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
                            <span className="text-6xl font-black text-blue-600 tracking-tighter">404</span>
                        </div>
                    </div>
                </div>

                {/* --- Text Content --- */}
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                    System Connection Lost.
                </h1>
                <p className="text-slate-600 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                    The page you are looking for has been moved, deleted, or never existed in our database. Let&apos;s get your tech search back on track.
                </p>

                {/* --- Action Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto mb-12">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-3 p-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold transition-all active:scale-[0.98]"
                    >
                        <Home size={20} />
                        Return Home
                    </Link>
                    <Link
                        href="/shop"
                        className="flex items-center justify-center gap-3 p-4 border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 rounded-2xl font-bold transition-all active:scale-[0.98]"
                    >
                        <ShoppingBag size={20} />
                        Continue Shopping
                    </Link>
                </div>

                {/* --- Quick Links / Help Section --- */}
                <div className="border-t border-slate-100 pt-8">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Need Assistance?</p>
                    <div className="flex flex-wrap justify-center gap-8 text-slate-500">
                        <Link href="/search" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                            <Search size={18} />
                            <span className="text-sm font-medium">Search Products</span>
                        </Link>
                        <Link href="/support" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                            <PhoneCall size={18} />
                            <span className="text-sm font-medium">Contact Support</span>
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                        >
                            <ArrowLeft size={18} />
                            <span className="text-sm font-medium">Go Back</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;