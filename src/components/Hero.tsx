import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

const Hero = () => (
  <section className="bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-10 lg:pb-12">

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

        {/* Left hero card */}
        <div className="lg:col-span-8 relative bg-gray-100 rounded-3xl overflow-hidden min-h-80 sm:min-h-110 lg:min-h-130 group">
          <Image
            src="https://images.unsplash.com/photo-1593998066526-65fcab3021a2?w=1400&q=85&auto=format&fit=crop"
            alt="Person enjoying premium wireless headphones"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-r from-gray-950/85 via-gray-950/45 to-transparent" />

          <div className="relative z-10 p-7 sm:p-12 lg:p-16 h-full flex flex-col justify-end max-w-xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 sm:mb-4">
              <span className="w-6 h-px bg-blue-400" />
              New Arrival
            </p>
            <h1 className="michroma text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight text-white mb-3 sm:mb-4">
              Experience
              <br />
              Pure Sound,
              <br />
              Everywhere.
            </h1>
            <p className="text-gray-300 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-sm">
              Discover the new noise-cancelling headphones — crafted for those
              who refuse to compromise on quality.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/items"
                className="group/btn inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/30"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white transition-colors"
              >
                Explore Features
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right stacked cards */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-4 lg:grid-cols-1">

          {/* Sony product card */}
          <div className="relative rounded-3xl overflow-hidden min-h-48 sm:min-h-64 lg:min-h-0 lg:flex-1 group col-span-1">
            <Image
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80&auto=format&fit=crop"
              alt="Sony WH-1000XM5 headphones"
              fill
              sizes="(max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-950/75 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
              <p className="text-white text-xs sm:text-sm font-bold leading-tight">Sony WH-1000XM5</p>
              <p className="text-blue-400 text-xs sm:text-sm font-extrabold">$349.99</p>
            </div>
            <Link
              href="/items/1"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 hover:bg-white transition-colors"
              aria-label="View Sony headphones"
            >
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </Link>
          </div>

          {/* Deal card */}
          <div className="relative bg-blue-950 rounded-3xl p-5 sm:p-7 flex flex-col justify-center overflow-hidden min-h-48 sm:min-h-64 lg:min-h-0 lg:flex-1 col-span-1">
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-blue-700/40 rounded-full blur-2xl" />
            <div className="absolute -left-4 -top-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl" />

            <span className="relative text-blue-400 text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2">
              Deal of the Day
            </span>
            <h2 className="michroma relative text-2xl sm:text-4xl font-black text-white mb-1">SAVE 20%</h2>
            <p className="relative text-blue-300 text-xs sm:text-sm font-medium mb-4 sm:mb-5">
              On all Gaming gear.
            </p>
            <div className="relative inline-flex items-center gap-2 sm:gap-3">
              <div className="bg-white/10 border border-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl">
                <p className="text-[10px] sm:text-xs text-blue-400 font-bold uppercase mb-0.5">Use code</p>
                <p className="text-sm sm:text-lg font-black text-white tracking-tight">WAVE20</p>
              </div>
              <Link
                href="/items?category=Gaming"
                className="p-2.5 sm:p-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
                aria-label="Shop gaming deals"
              >
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Hero;
