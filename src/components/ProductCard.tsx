"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, Eye } from "lucide-react";
import { Product } from "@/types";
import AddToCartButton from "./AddToCartButton";

interface Props {
  product: Product;
}

const STARS = [0, 1, 2, 3, 4];

const ProductCard = ({ product }: Props) => {
  const discount = Math.round(((product.price * 0.2) / (product.price * 1.2)) * 100);

  return (
    <article className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50 aspect-square">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur-sm text-xs font-semibold text-blue-600 rounded-full border border-blue-100 shadow-sm">
          {product.category}
        </span>

        <span className="absolute top-3 right-3 px-2 py-0.5 bg-blue-600 text-white text-xs font-bold rounded-full shadow-sm">
          -{discount}%
        </span>

        <Link
          href={`/items/${product.id}`}
          className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          aria-label={`Quick view ${product.title}`}
        >
          <span className="bg-white text-gray-900 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </span>
        </Link>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          {product.brand}
        </p>

        <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 -mt-1">
          {product.title}
        </h3>

        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {STARS.map((i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? "fill-amber-400 text-amber-400"
                    : "text-gray-200 fill-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">
            {product.rating} ({product.stock} in stock)
          </span>
        </div>

        <div className="flex items-baseline gap-2 mt-auto">
          <span className="text-xl font-extrabold text-gray-950">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-xs text-gray-400 line-through">
            ${(product.price * 1.2).toFixed(2)}
          </span>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <AddToCartButton product={product} variant="card" className="flex-1" />
          <Link
            href={`/items/${product.id}`}
            className="flex items-center justify-center px-3 py-1.5 border border-gray-200 text-gray-600 text-xs font-semibold rounded-lg hover:border-blue-400 hover:text-blue-600 transition-colors"
            aria-label="View details"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
