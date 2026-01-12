import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const brands = [
  { id: "hansem", name: "한샘", description: "프리미엄 홈 퍼니싱의 선두주자", products: 156 },
  { id: "iloom", name: "일룸", description: "스마트 라이프를 위한 가구", products: 98 },
  { id: "ace", name: "에이스침대", description: "대한민국 수면 전문 브랜드", products: 67 },
  { id: "desker", name: "데스커", description: "워크 라이프 밸런스 솔루션", products: 45 },
  { id: "fursys", name: "퍼시스", description: "오피스 가구 전문 기업", products: 112 },
  { id: "casamia", name: "까사미아", description: "이탈리안 감성의 라이프스타일", products: 89 },
  { id: "rivat", name: "리바트", description: "토탈 인테리어 솔루션", products: 134 },
  { id: "enex", name: "에넥스", description: "맞춤형 가구의 정석", products: 78 },
  { id: "shinsegae", name: "신세가구", description: "프리미엄 수입 가구", products: 56 },
  { id: "nara", name: "나라가구", description: "가성비 좋은 국민 가구", products: 145 },
  { id: "gagu", name: "가구연구소", description: "디자인 중심 가구 브랜드", products: 34 },
  { id: "wood", name: "원목공방", description: "천연 원목 전문 가구", products: 67 },
];

export default function Brands() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Our Partners
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              파트너 브랜드
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              대한민국을 대표하는 30개 프리미엄 가구 브랜드가
              FURNIQ와 함께합니다.
            </p>
          </div>

          {/* Brand Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <Link
                key={brand.id}
                to={`/brand/${brand.id}`}
                className="group p-8 bg-card border border-border rounded-sm hover:border-primary/50 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {brand.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs text-muted-foreground">
                  {brand.products}개 상품
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
