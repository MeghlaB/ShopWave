import Link from "next/link";
import { Headphones, Smartphone, Watch, Camera, Gamepad2, Zap } from "lucide-react";

const CATEGORIES = [
  { name: "Electronics", icon: Smartphone, color: "bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white", count: 24 },
  { name: "Audio", icon: Headphones, color: "bg-blue-50 text-blue-700 hover:bg-blue-700 hover:text-white", count: 18 },
  { name: "Wearables", icon: Watch, color: "bg-blue-50 text-blue-500 hover:bg-blue-500 hover:text-white", count: 12 },
  { name: "Photography", icon: Camera, color: "bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white", count: 9 },
  { name: "Gaming", icon: Gamepad2, color: "bg-blue-50 text-blue-800 hover:bg-blue-800 hover:text-white", count: 15 },
  { name: "Accessories", icon: Zap, color: "bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white", count: 32 },
];

export default function Categories() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Browse by type
          </p>
          <h2 className="michroma text-3xl md:text-4xl font-bold text-gray-900">Shop by Category</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Explore our curated selection of premium tech across all major categories
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map(({ name, icon: Icon, color, count }) => (
            <Link
              key={name}
              href={`/items?category=${name}`}
              className={`flex flex-col items-center gap-3 p-6 rounded-2xl border border-transparent transition-all duration-300 group ${color}`}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-current/10 group-hover:bg-white/20 transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-sm">{name}</p>
                <p className="text-xs opacity-70 mt-0.5">{count} items</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
