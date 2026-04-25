import { Shield, Truck, RotateCcw, Headphones, CreditCard, Award } from "lucide-react";

const FEATURES = [
  {
    icon: Truck,
    title: "Free Fast Shipping",
    description: "Free shipping on all orders over $50. Express delivery available for premium members.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Shield,
    title: "2-Year Warranty",
    description: "Every product comes with a comprehensive 2-year manufacturer warranty and our store guarantee.",
    color: "bg-blue-50 text-blue-500",
  },
  {
    icon: RotateCcw,
    title: "Easy 30-Day Returns",
    description: "Not satisfied? Return any item within 30 days for a full refund, no questions asked.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description: "Our tech specialists are available around the clock to help you with any questions.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "All transactions are encrypted and protected with industry-leading security standards.",
    color: "bg-blue-100 text-blue-800",
  },
  {
    icon: Award,
    title: "Certified Authentic",
    description: "Every product is sourced directly from manufacturers and verified for authenticity.",
    color: "bg-blue-50 text-blue-600",
  },
];

export default function Features() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Why ShopWave
          </p>
          <h2 className="michroma text-3xl md:text-4xl font-bold text-gray-900">
            Built for Your Peace of Mind
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            We&apos;ve designed every aspect of our service to give you the best shopping experience possible
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, description, color }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
