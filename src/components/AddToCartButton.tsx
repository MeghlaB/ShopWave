"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ShoppingCart, Check, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";

interface Props {
  product: Product;
  variant?: "card" | "detail";
  className?: string;
}

const AddToCartButton = ({ product, variant = "card", className = "" }: Props) => {
  const { user } = useAuth();
  const { addItem, isInCart } = useCart();
  const router = useRouter();
  const pathname = usePathname();
  const [adding, setAdding] = useState(false);

  const inCart = isInCart(product.id);

  const handleClick = async () => {
    if (!user) {
      toast(
        (t) => (
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-gray-900">
              Login required to add items to cart
            </p>
            <button
              onClick={() => {
                toast.dismiss(t.id);
                router.push(`/login?from=${encodeURIComponent(pathname)}`);
              }}
              className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors w-fit"
            >
              Go to Login →
            </button>
          </div>
        ),
        { duration: 4000, icon: "🔒" }
      );
      return;
    }

    if (inCart) {
      toast.success("Already in cart!", { icon: "🛒" });
      return;
    }

    setAdding(true);
    await new Promise((r) => setTimeout(r, 300));
    addItem(product);
    toast.success(`${product.title.slice(0, 25)}… added to cart`, {
      icon: "✅",
      duration: 2500,
    });
    setAdding(false);
  };

  if (variant === "detail") {
    return (
      <button
        onClick={handleClick}
        disabled={adding}
        className={`flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-xl transition-all active:scale-[0.98] disabled:opacity-70 ${
          inCart
            ? "bg-green-600 hover:bg-green-700 text-white"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        } ${className}`}
      >
        {adding ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : inCart ? (
          <Check className="w-5 h-5" />
        ) : (
          <ShoppingCart className="w-5 h-5" />
        )}
        {adding ? "Adding…" : inCart ? "In Cart" : "Add to Cart"}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={adding}
      aria-label={inCart ? "Already in cart" : "Add to cart"}
      className={`flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all active:scale-[0.97] disabled:opacity-70 ${
        inCart
          ? "bg-green-600 hover:bg-green-700 text-white"
          : "bg-blue-600 hover:bg-blue-700 text-white"
      } ${className}`}
    >
      {adding ? (
        <Loader2 className="w-3.5 h-3.5 animate-spin" />
      ) : inCart ? (
        <Check className="w-3.5 h-3.5" />
      ) : (
        <ShoppingCart className="w-3.5 h-3.5" />
      )}
      {adding ? "Adding…" : inCart ? "In Cart" : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;
