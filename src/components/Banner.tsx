import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";

export default function Banner() {
  return (
    <section className="py-10 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium mb-4">
              <Tag className="w-4 h-4" />
              Limited Time Offer
            </div>
            <h2 className="michroma text-3xl md:text-4xl font-bold text-white mb-3">
              Up to 40% Off Premium Tech
            </h2>
            <p className="text-blue-100 text-lg max-w-xl">
              Shop the biggest sale of the season on top brands including Sony, Apple, Samsung, and
              more. Deals end Sunday.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <div className="flex flex-col items-center bg-white/10 border border-white/20 rounded-2xl px-8 py-4 text-white text-center">
              <span className="text-4xl font-bold">48</span>
              <span className="text-xs text-blue-200 mt-1">Hours Left</span>
            </div>
            <Link
              href="/items"
              className="flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors group self-center"
            >
              Shop the Sale
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
