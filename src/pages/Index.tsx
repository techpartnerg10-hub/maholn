import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CategorySection } from "@/components/home/CategorySection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BrandShowcase } from "@/components/home/BrandShowcase";
import { PromoBanner } from "@/components/home/PromoBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <BrandShowcase />
        <PromoBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
