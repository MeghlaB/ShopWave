import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    avatar: "SC",
    rating: 5,
    text: "ShopWave has completely changed how I buy tech. The product selection is incredible and delivery was faster than expected. My Sony headphones arrived in perfect condition!",
    product: "Sony WH-1000XM5",
    color: "bg-blue-600",
  },
  {
    name: "Marcus Rodriguez",
    role: "Content Creator",
    avatar: "MR",
    rating: 5,
    text: "I've ordered from ShopWave three times now and every experience has been flawless. The detailed specs and honest descriptions help me make informed decisions. Highly recommended!",
    product: "Sony A7 IV Camera",
    color: "bg-blue-700",
  },
  {
    name: "Priya Sharma",
    role: "Product Designer",
    avatar: "PS",
    rating: 5,
    text: "Outstanding customer service. When I had a question about the Apple Watch Ultra 2, their support team responded instantly with genuinely helpful answers. 10/10.",
    product: "Apple Watch Ultra 2",
    color: "bg-blue-500",
  },
  {
    name: "James Thompson",
    role: "Game Developer",
    avatar: "JT",
    rating: 5,
    text: "Best prices I've found anywhere online. The PS5 was in stock when everywhere else was sold out. Came fully sealed and legit. ShopWave is now my go-to tech store.",
    product: "PlayStation 5",
    color: "bg-blue-800",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Customer stories
          </p>
          <h2 className="michroma text-3xl md:text-4xl font-bold text-gray-900">
            Loved by Thousands of Tech Enthusiasts
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Don&apos;t just take our word for it — hear what our customers have to say
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <Quote className="w-8 h-8 text-blue-200 mb-4" />
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">{t.text}</p>

              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>

              <div className="mt-3">
                <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
                  Bought: {t.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
