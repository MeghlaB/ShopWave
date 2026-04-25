"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { getProducts, deleteProduct, STATIC_PRODUCTS } from "@/lib/products";
import { Product } from "@/types";
import {
  Settings,
  Plus,
  Eye,
  Trash2,
  Loader2,
  Package,
  AlertCircle,
  Star,
} from "lucide-react";
import toast from "react-hot-toast";

export default function ManageItemsPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (user) {
      setProducts(getProducts());
    }
  }, [user]);

  const handleDelete = (id: string) => {
    const isStatic = STATIC_PRODUCTS.some((p) => p.id === id);
    if (isStatic) {
      toast.error("Cannot delete built-in products");
      setDeleteConfirm(null);
      return;
    }
    deleteProduct(id);
    setProducts(getProducts());
    toast.success("Product deleted");
    setDeleteConfirm(null);
  };

  const userProducts = products.filter((p) => p.addedByUser);
  const staticProducts = products.filter((p) => !p.addedByUser);

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Settings className="w-6 h-6 text-blue-600" />
              Manage Products
            </h1>
            <p className="text-sm text-gray-500 mt-0.5">
              {products.length} total · {userProducts.length} added by you
            </p>
          </div>
          <Link
            href="/items/add"
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Product
          </Link>
        </div>

        {/* Your Products */}
        {userProducts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Your Products ({userProducts.length})
            </h2>
            <ProductTable
              products={userProducts}
              deleteConfirm={deleteConfirm}
              setDeleteConfirm={setDeleteConfirm}
              onDelete={handleDelete}
              canDelete
            />
          </div>
        )}

        {userProducts.length === 0 && (
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8 flex items-center gap-4">
            <AlertCircle className="w-6 h-6 text-blue-500 shrink-0" />
            <div>
              <p className="text-sm font-medium text-blue-800">You haven&apos;t added any products yet</p>
              <p className="text-sm text-blue-600 mt-0.5">
                <Link href="/items/add" className="underline font-medium">Add your first product</Link> to see it here.
              </p>
            </div>
          </div>
        )}

        {/* Catalog Products */}
        <div>
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Package className="w-4 h-4 text-gray-500" />
            Catalog Products ({staticProducts.length})
          </h2>
          <ProductTable
            products={staticProducts}
            deleteConfirm={deleteConfirm}
            setDeleteConfirm={setDeleteConfirm}
            onDelete={handleDelete}
            canDelete={false}
          />
        </div>
      </div>
    </div>
  );
}

function ProductTable({
  products,
  deleteConfirm,
  setDeleteConfirm,
  onDelete,
  canDelete,
}: {
  products: Product[];
  deleteConfirm: string | null;
  setDeleteConfirm: (id: string | null) => void;
  onDelete: (id: string) => void;
  canDelete: boolean;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider py-3 px-6">Product</th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider py-3 px-4">Category</th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider py-3 px-4">Price</th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider py-3 px-4">Rating</th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider py-3 px-4">Stock</th>
              <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-12 h-12 object-cover rounded-lg border border-gray-100 shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate max-w-[200px]">
                        {product.title}
                      </p>
                      <p className="text-xs text-gray-500 truncate max-w-[200px]">
                        {product.shortDescription}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                    {product.category}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm font-semibold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-sm text-gray-700">{product.rating}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={`text-sm ${product.stock > 10 ? "text-green-600" : "text-amber-600"}`}>
                    {product.stock} units
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/items/${product.id}`}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-200 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" /> View
                    </Link>
                    {canDelete && (
                      <>
                        {deleteConfirm === product.id ? (
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => onDelete(product.id)}
                              className="px-3 py-1.5 text-xs font-medium bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                            >
                              Confirm
                            </button>
                            <button
                              onClick={() => setDeleteConfirm(null)}
                              className="px-3 py-1.5 text-xs font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setDeleteConfirm(product.id)}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" /> Delete
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden divide-y divide-gray-100">
        {products.map((product) => (
          <div key={product.id} className="p-4 flex gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-16 h-16 object-cover rounded-xl border border-gray-100 shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">{product.title}</p>
              <div className="flex items-center gap-2 mt-1 mb-2">
                <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full">{product.category}</span>
                <span className="text-sm font-bold text-gray-900">${product.price.toFixed(2)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={`/items/${product.id}`}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-200 rounded-lg"
                >
                  <Eye className="w-3.5 h-3.5" /> View
                </Link>
                {canDelete && (
                  deleteConfirm === product.id ? (
                    <>
                      <button onClick={() => onDelete(product.id)} className="px-3 py-1.5 text-xs bg-red-600 text-white rounded-lg">Confirm</button>
                      <button onClick={() => setDeleteConfirm(null)} className="px-3 py-1.5 text-xs border border-gray-200 rounded-lg">Cancel</button>
                    </>
                  ) : (
                    <button onClick={() => setDeleteConfirm(product.id)} className="flex items-center gap-1 px-3 py-1.5 text-xs text-red-600 border border-red-200 rounded-lg">
                      <Trash2 className="w-3.5 h-3.5" /> Delete
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
