import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const brands = [
  { id: "hansem", name: "한샘", description: "프리미엄 홈 퍼니싱" },
  { id: "iloom", name: "일룸", description: "스마트 라이프 가구" },
  { id: "ace", name: "에이스침대", description: "수면 전문 브랜드" },
  { id: "desker", name: "데스커", description: "워크 라이프 솔루션" },
  { id: "fursys", name: "퍼시스", description: "오피스 가구 전문" },
  { id: "casamia", name: "까사미아", description: "이탈리안 디자인" },
  { id: "living", name: "리바트", description: "토탈 인테리어" },
  { id: "enex", name: "에넥스", description: "맞춤형 가구" },
];

export function BrandShowcase() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Our Partners
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            30개 프리미엄 브랜드
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            대한민국을 대표하는 가구 브랜드들이 함께합니다.
            <br />
            각 브랜드의 고유한 철학과 디자인을 만나보세요.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/brand/${brand.id}`}
              className="group p-8 bg-card border border-border rounded-sm hover:border-primary/50 hover:shadow-glow transition-all duration-300"
            >
              <div className="text-center">
                <h3 className="font-display font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                  {brand.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {brand.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/brands">
            <Button variant="hero" size="lg">
              전체 브랜드 보기
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
