import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, ChevronRight } from "lucide-react";
import categoryLiving from "@/assets/category-living.jpg";
import categoryDining from "@/assets/category-dining.jpg";
import categoryBedroom from "@/assets/category-bedroom.jpg";
import categoryOffice from "@/assets/category-office.jpg";
import heroImage from "@/assets/hero-living-room.jpg";

const brandData = {
  id: "hansem",
  name: "한샘",
  slogan: "프리미엄 홈 퍼니싱의 선두주자",
  description: "1970년 설립 이래 한국 가구 산업을 이끌어온 한샘은 혁신적인 디자인과 품질로 수많은 가정에 행복한 공간을 선사해왔습니다. 고객의 라이프스타일을 이해하고, 그에 맞는 최적의 솔루션을 제공합니다.",
  heroImage: heroImage,
  products: [
    { id: "1", name: "노블레스 모듈 소파", price: 3890000, originalPrice: 4500000, image: categoryLiving, isNew: true },
    { id: "2", name: "시그니처 다이닝 테이블", price: 2190000, originalPrice: null, image: categoryDining, isNew: false },
    { id: "3", name: "럭셔리 킹 침대", price: 2890000, originalPrice: 3200000, image: categoryBedroom, isNew: true },
    { id: "4", name: "프리미엄 책상", price: 890000, originalPrice: null, image: categoryOffice, isNew: false },
  ],
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat("ko-KR").format(price);
}

export default function BrandDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={brandData.heroImage}
              alt={brandData.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/70" />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
              {brandData.name}
            </h1>
            <p className="text-xl text-muted-foreground">
              {brandData.slogan}
            </p>
          </div>
        </section>

        {/* About */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-foreground transition-colors">홈</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/brands" className="hover:text-foreground transition-colors">브랜드</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">{brandData.name}</span>
            </nav>

            <div className="max-w-2xl mx-auto text-center">
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
                About
              </p>
              <h2 className="text-3xl font-display font-bold mb-6">브랜드 스토리</h2>
              <p className="text-muted-foreground leading-relaxed">
                {brandData.description}
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
                  Products
                </p>
                <h2 className="text-3xl font-display font-bold">{brandData.name} 컬렉션</h2>
              </div>
              <Link
                to={`/products?brand=${id}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden md:block"
              >
                전체 보기 →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {brandData.products.map((product) => (
                <div key={product.id} className="group">
                  <Link
                    to={`/product/${product.id}`}
                    className="relative block aspect-square overflow-hidden rounded-sm bg-muted mb-4"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.isNew && (
                      <span className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold">
                        NEW
                      </span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex gap-2">
                        <Button variant="gold" size="sm" className="flex-1">
                          <ShoppingBag className="w-4 h-4 mr-1" />
                          담기
                        </Button>
                        <Button variant="outline" size="icon" className="shrink-0">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Link>
                  <div>
                    <Link
                      to={`/product/${product.id}`}
                      className="block text-sm font-medium hover:text-primary transition-colors mb-2"
                    >
                      {product.name}
                    </Link>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">₩{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ₩{formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
