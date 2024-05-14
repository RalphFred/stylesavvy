import CategoriesSection from "@/components/CategoriesSection";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoriesSection />
      <ProductSection />
    </main>
  );
}
