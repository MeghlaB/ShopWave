import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Banner from "@/components/Banner";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Features />
      <Testimonials />
      <Banner />
    </main>
  );
}
