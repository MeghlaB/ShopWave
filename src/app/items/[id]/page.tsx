import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProductById, STATIC_PRODUCTS } from "@/lib/products";
import { Star, ArrowLeft, Package, CheckCircle, Tag } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import AddToCartButton from "@/components/AddToCartButton";

const STARS = [0, 1, 2, 3, 4];

export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) notFound();

  const related = STATIC_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const discount = Math.round(((product.price * 0.2) / (product.price * 1.2)) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Back */}
        <Link
          href="/items"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </Link>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

          {/* Image */}
          <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 aspect-square">
            <Image
              src={product.imageUrl}
              alt={product.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute top-4 left-4 px-3 py-1 bg-rose-500 text-white text-xs font-bold rounded-full shadow-sm">
              -{discount}%
            </span>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                <Tag className="w-3 h-3" />
                {product.category}
              </span>
            </div>

            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
              {product.brand}
            </p>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center gap-0.5">
                {STARS.map((i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-gray-200 fill-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
              <span className="text-sm text-gray-400">({product.stock} in stock)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-5 pb-5 border-b border-gray-100">
              <span className="text-4xl font-extrabold text-gray-950">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-base line-through text-gray-400">
                ${(product.price * 1.2).toFixed(2)}
              </span>
              <span className="px-2.5 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                Save {discount}%
              </span>
            </div>

            {/* Short desc */}
            <p className="text-gray-600 leading-relaxed mb-5">{product.shortDescription}</p>

            {/* Stock */}
            <div className="flex items-center gap-2 mb-8">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm text-green-600 font-semibold">
                In Stock · {product.stock} units available
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <AddToCartButton product={product} variant="detail" className="flex-1" />
              <button className="flex-1 py-3.5 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 active:scale-[0.98] transition-all">
                Buy Now
              </button>
            </div>

            {/* Meta grid */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl text-center">
              {[
                { label: "Category", value: product.category },
                { label: "Brand", value: product.brand },
                { label: "Added", value: product.createdAt },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                  <p className="text-sm font-semibold text-gray-900 truncate">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description + Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Product Description</h2>
            <p className="text-gray-600 leading-relaxed">{product.fullDescription}</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-900">Specifications</h2>
            </div>
            <dl className="space-y-3">
              {Object.entries(product.specs).map(([key, value]) => (
                <div
                  key={key}
                  className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2 border-b border-gray-50 last:border-0"
                >
                  <dt className="text-sm text-gray-500">{key}</dt>
                  <dd className="text-sm font-semibold text-gray-900 sm:text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              More in {product.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
