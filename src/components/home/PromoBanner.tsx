import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-living-room.jpg";

export function PromoBanner() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium furniture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
          Special Offer
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
          신규 회원 특별 혜택
        </h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto">
          지금 가입하시면 첫 구매 시 10% 할인 쿠폰과
          <br />
          무료 배송 혜택을 드립니다.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/signup">
            <Button variant="gold" size="xl">
              회원가입하기
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
