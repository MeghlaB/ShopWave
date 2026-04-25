"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { addProduct, CATEGORIES } from "@/lib/products";
import { Package, Loader2, ArrowLeft, ImageIcon } from "lucide-react";
import toast from "react-hot-toast";
import Link from "next/link";

const RATING_OPTIONS = [3.0, 3.5, 4.0, 4.5, 4.8, 5.0];

interface FormData {
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  category: string;
  brand: string;
  stock: string;
  imageUrl: string;
  rating: string;
}

const INITIAL: FormData = {
  title: "",
  shortDescription: "",
  fullDescription: "",
  price: "",
  category: "Electronics",
  brand: "",
  stock: "10",
  imageUrl: "",
  rating: "4.5",
};

export default function AddItemPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.title.trim()) newErrors.title = "Title is required";
    if (!form.shortDescription.trim()) newErrors.shortDescription = "Short description is required";
    if (!form.fullDescription.trim()) newErrors.fullDescription = "Full description is required";
    if (!form.price || isNaN(parseFloat(form.price)) || parseFloat(form.price) <= 0)
      newErrors.price = "Enter a valid price";
    if (!form.brand.trim()) newErrors.brand = "Brand is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      addProduct({
        title: form.title,
        shortDescription: form.shortDescription,
        fullDescription: form.fullDescription,
        price: parseFloat(form.price),
        category: form.category,
        brand: form.brand,
        stock: parseInt(form.stock) || 10,
        imageUrl: form.imageUrl || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
        rating: parseFloat(form.rating),
        specs: {
          Brand: form.brand,
          Category: form.category,
          "In Stock": `${parseInt(form.stock) || 10} units`,
        },
      });
      toast.success("Product added successfully!");
      setForm(INITIAL);
      setErrors({});
      router.push("/items/manage");
    } catch {
      toast.error("Failed to add product. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const field = (
    key: keyof FormData,
    label: string,
    props: React.InputHTMLAttributes<HTMLInputElement> = {}
  ) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      <input
        {...props}
        value={form[key]}
        onChange={(e) => {
          setForm((f) => ({ ...f, [key]: e.target.value }));
          if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
        }}
        className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
          errors[key] ? "border-red-400 bg-red-50" : "border-gray-200"
        }`}
      />
      {errors[key] && <p className="mt-1 text-xs text-red-500">{errors[key]}</p>}
    </div>
  );

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/items/manage"
            className="p-2 rounded-xl border border-gray-200 bg-white hover:border-blue-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Package className="w-6 h-6 text-blue-600" />
              Add New Product
            </h1>
            <p className="text-sm text-gray-500">Fill in the details to list a new product</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 p-8 space-y-6">
          {/* Basic Info */}
          <div>
            <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Basic Information
            </h2>
            <div className="space-y-4">
              {field("title", "Product Title", { placeholder: "e.g., Sony WH-1000XM5 Headphones" })}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Short Description</label>
                <input
                  value={form.shortDescription}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, shortDescription: e.target.value }));
                    if (errors.shortDescription) setErrors((er) => ({ ...er, shortDescription: undefined }));
                  }}
                  placeholder="1-2 sentence summary"
                  maxLength={150}
                  className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.shortDescription ? "border-red-400 bg-red-50" : "border-gray-200"
                  }`}
                />
                <div className="flex justify-between mt-1">
                  {errors.shortDescription ? (
                    <p className="text-xs text-red-500">{errors.shortDescription}</p>
                  ) : <span />}
                  <p className="text-xs text-gray-400">{form.shortDescription.length}/150</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Description</label>
                <textarea
                  value={form.fullDescription}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, fullDescription: e.target.value }));
                    if (errors.fullDescription) setErrors((er) => ({ ...er, fullDescription: undefined }));
                  }}
                  placeholder="Detailed product description..."
                  rows={4}
                  className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${
                    errors.fullDescription ? "border-red-400 bg-red-50" : "border-gray-200"
                  }`}
                />
                {errors.fullDescription && (
                  <p className="mt-1 text-xs text-red-500">{errors.fullDescription}</p>
                )}
              </div>
            </div>
          </div>

          {/* Details */}
          <div>
            <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Product Details
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {field("price", "Price (USD)", { type: "number", min: "0", step: "0.01", placeholder: "0.00" })}
              {field("brand", "Brand", { placeholder: "e.g., Sony" })}
              {field("stock", "Stock Quantity", { type: "number", min: "1", placeholder: "10" })}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Rating</label>
                <select
                  value={form.rating}
                  onChange={(e) => setForm((f) => ({ ...f, rating: e.target.value }))}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {RATING_OPTIONS.map((r) => (
                    <option key={r} value={r}>{r} Stars</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
              <div className="grid grid-cols-3 gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, category: cat }))}
                    className={`py-2 px-3 text-sm rounded-lg border transition-colors ${
                      form.category === cat
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div>
            <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Product Image
            </h2>
            <div className="flex gap-4 items-start">
              {form.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={form.imageUrl}
                  alt="Preview"
                  className="w-24 h-24 object-cover rounded-xl border border-gray-200 shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              ) : (
                <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center shrink-0 border border-dashed border-gray-300">
                  <ImageIcon className="w-8 h-8 text-gray-400" />
                </div>
              )}
              <div className="flex-1">
                <input
                  type="url"
                  value={form.imageUrl}
                  onChange={(e) => setForm((f) => ({ ...f, imageUrl: e.target.value }))}
                  placeholder="https://example.com/image.jpg (optional)"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <p className="text-xs text-gray-400 mt-1.5">
                  Leave blank to use a default image. Paste an image URL from Unsplash or any public source.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
              {submitting ? "Adding Product..." : "Add Product"}
            </button>
            <button
              type="button"
              onClick={() => { setForm(INITIAL); setErrors({}); }}
              className="px-6 py-3 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
