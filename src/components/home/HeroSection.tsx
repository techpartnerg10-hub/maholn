import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-living-room.jpg";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium furniture showroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Korea Furniture Cooperative
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            공간을 완성하는
            <br />
            프리미엄 가구
          </h1>
          <p className="text-lg text-foreground/70 mb-8 max-w-lg">
            대한민국 30개 프리미엄 가구 브랜드가 선보이는
            <br />
            품격 있는 라이프스타일을 경험하세요.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products">
              <Button variant="gold" size="xl">
                컬렉션 보기
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/brands">
              <Button variant="hero" size="xl">
                브랜드 소개
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
