import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import categoryLiving from "@/assets/category-living.jpg";
import categoryDining from "@/assets/category-dining.jpg";
import categoryBedroom from "@/assets/category-bedroom.jpg";
import categoryOffice from "@/assets/category-office.jpg";

const products = [
  {
    id: "1",
    name: "노블레스 모듈 소파",
    brand: "한샘 프리미엄",
    price: 3890000,
    originalPrice: 4500000,
    image: categoryLiving,
    category: "소파",
    isNew: true,
  },
  {
    id: "2",
    name: "밀라노 다이닝 테이블",
    brand: "일룸",
    price: 2190000,
    originalPrice: null,
    image: categoryDining,
    category: "다이닝 테이블",
    isNew: false,
  },
  {
    id: "3",
    name: "코지 퀸 침대 프레임",
    brand: "에이스침대",
    price: 1890000,
    originalPrice: 2100000,
    image: categoryBedroom,
    category: "침대",
    isNew: true,
  },
  {
    id: "4",
    name: "모던 워크 데스크",
    brand: "데스커",
    price: 890000,
    originalPrice: null,
    image: categoryOffice,
    category: "책상",
    isNew: false,
  },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat("ko-KR").format(price);
}

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Featured
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              인기 상품
            </h2>
          </div>
          <Link
            to="/products"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden md:block"
          >
            전체 보기 →
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              {/* Image Container */}
              <Link
                to={`/product/${product.id}`}
                className="relative block aspect-square overflow-hidden rounded-sm bg-muted mb-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badges */}
                {product.isNew && (
                  <span className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold tracking-wide">
                    NEW
                  </span>
                )}

                {/* Quick Actions */}
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

              {/* Info */}
              <div>
                <p className="text-xs text-muted-foreground mb-1">
                  {product.brand}
                </p>
                <Link
                  to={`/product/${product.id}`}
                  className="block text-sm font-medium hover:text-primary transition-colors mb-2"
                >
                  {product.name}
                </Link>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">
                    ₩{formatPrice(product.price)}
                  </span>
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

        {/* Mobile Link */}
        <div className="mt-8 text-center md:hidden">
          <Link to="/products">
            <Button variant="outline">전체 상품 보기</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
