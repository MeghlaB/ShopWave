import { ShoppingBag, Users, Globe, Award, Target, Heart } from "lucide-react";
import Link from "next/link";

const STATS = [
  { value: "50K+", label: "Happy Customers" },
  { value: "2,000+", label: "Products Listed" },
  { value: "99.2%", label: "Satisfaction Rate" },
  { value: "4.9★", label: "Average Rating" },
];

const TEAM = [
  { name: "Alex Morgan", role: "CEO & Founder", avatar: "AM", color: "bg-blue-600" },
  { name: "Jordan Lee", role: "Head of Product", avatar: "JL", color: "bg-blue-700" },
  { name: "Taylor Kim", role: "Lead Designer", avatar: "TK", color: "bg-blue-500" },
  { name: "Casey Patel", role: "Tech Director", avatar: "CP", color: "bg-blue-800" },
];

const VALUES = [
  { icon: Target, title: "Quality First", desc: "We source only the finest tech products from verified manufacturers worldwide." },
  { icon: Heart, title: "Customer Obsessed", desc: "Every decision we make is guided by what's best for our community of shoppers." },
  { icon: Globe, title: "Globally Connected", desc: "We partner with leading brands across the globe to bring you the best deals." },
  { icon: Award, title: "Excellence Always", desc: "Our team holds the highest standards in service, logistics, and product authenticity." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-8">
            <ShoppingBag className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="michroma text-4xl md:text-5xl font-bold mb-6 leading-tight">
            We&apos;re Building the Future of{" "}
            <span className="text-blue-400">Tech Shopping</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            ShopWave was founded with a simple mission: make premium technology accessible to
            everyone, with the transparency and trust you deserve.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="michroma text-4xl font-bold text-blue-600 mb-1">{value}</p>
                <p className="text-sm text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Our Story</p>
              <h2 className="michroma text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                From Passion to Platform
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  ShopWave started in 2022 when a group of tech enthusiasts grew frustrated with the
                  fragmented and unreliable online electronics market. We believed there was a better
                  way — one built on trust, quality, and genuine expertise.
                </p>
                <p>
                  Today, ShopWave is home to thousands of carefully curated products across
                  electronics, audio, photography, gaming, and accessories. Every product in our
                  catalog is vetted, authentic, and backed by our satisfaction guarantee.
                </p>
                <p>
                  We&apos;re not just a store — we&apos;re a community of tech enthusiasts helping
                  each other make smarter buying decisions.
                </p>
              </div>
              <Link
                href="/items"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
              >
                Explore Products
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {VALUES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">The People</p>
            <h2 className="michroma text-3xl md:text-4xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              A passionate group of technologists, designers, and customer advocates
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map(({ name, role, avatar, color }) => (
              <div key={name} className="text-center group">
                <div
                  className={`w-20 h-20 ${color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-105 transition-transform`}
                >
                  {avatar}
                </div>
                <h3 className="font-semibold text-gray-900">{name}</h3>
                <p className="text-sm text-gray-500">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-6">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h2 className="michroma text-3xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Create an account to add products, manage your listings, and be part of the ShopWave community.
          </p>
          <Link
            href="/login?tab=register"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  );
}
