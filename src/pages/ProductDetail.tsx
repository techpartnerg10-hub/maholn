import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Minus, Plus, Truck, Shield, RotateCcw, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import categoryLiving from "@/assets/category-living.jpg";
import categoryDining from "@/assets/category-dining.jpg";
import categoryBedroom from "@/assets/category-bedroom.jpg";

const productData = {
  id: "1",
  name: "노블레스 모듈 소파",
  brand: "한샘 프리미엄",
  brandId: "hansem",
  price: 3890000,
  originalPrice: 4500000,
  images: [categoryLiving, categoryDining, categoryBedroom],
  category: "리빙 > 소파",
  description: "모던하고 세련된 디자인의 프리미엄 모듈 소파입니다. 고급 이탈리아 패브릭을 사용하여 부드러운 촉감과 내구성을 자랑하며, 다양한 모듈 조합으로 공간에 맞게 구성할 수 있습니다.",
  features: [
    "이탈리아 프리미엄 패브릭 사용",
    "고밀도 폼으로 편안한 착석감",
    "모듈형 구조로 다양한 배치 가능",
    "오염 방지 코팅 처리",
  ],
  specs: [
    { label: "크기", value: "W 2800 x D 1000 x H 850 mm" },
    { label: "재질", value: "패브릭, 원목 프레임" },
    { label: "색상", value: "라이트 그레이 / 챠콜 / 베이지" },
    { label: "제조국", value: "대한민국" },
  ],
  colors: [
    { id: "light-gray", name: "라이트 그레이", hex: "#9a9a9a" },
    { id: "charcoal", name: "챠콜", hex: "#3d3d3d" },
    { id: "beige", name: "베이지", hex: "#c4b7a6" },
  ],
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat("ko-KR").format(price);
}

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(productData.colors[0].id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "specs" | "shipping">("description");

  const discount = productData.originalPrice
    ? Math.round((1 - productData.price / productData.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">홈</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/products" className="hover:text-foreground transition-colors">전체 상품</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{productData.name}</span>
          </nav>

          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-sm bg-muted">
                <img
                  src={productData.images[selectedImage]}
                  alt={productData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {productData.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={cn(
                      "aspect-square overflow-hidden rounded-sm bg-muted border-2 transition-colors",
                      selectedImage === idx ? "border-primary" : "border-transparent"
                    )}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <Link
                to={`/brand/${productData.brandId}`}
                className="text-sm text-primary hover:underline mb-2 inline-block"
              >
                {productData.brand}
              </Link>
              <h1 className="text-3xl font-display font-bold mb-4">
                {productData.name}
              </h1>

              {/* Price */}
              <div className="flex items-end gap-3 mb-6">
                {discount > 0 && (
                  <span className="text-2xl font-bold text-primary">{discount}%</span>
                )}
                <span className="text-3xl font-bold">₩{formatPrice(productData.price)}</span>
                {productData.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ₩{formatPrice(productData.originalPrice)}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {productData.description}
              </p>

              {/* Color Selection */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold mb-3">컬러</h3>
                <div className="flex gap-3">
                  {productData.colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className={cn(
                        "w-10 h-10 rounded-full border-2 transition-all",
                        selectedColor === color.id
                          ? "border-primary scale-110"
                          : "border-border hover:border-muted-foreground"
                      )}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold mb-3">수량</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-sm">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-accent transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-accent transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mb-8">
                <Button variant="gold" size="xl" className="flex-1">
                  장바구니 담기
                </Button>
                <Button variant="outline" size="xl">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border">
                <div className="text-center">
                  <Truck className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">무료 배송</p>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">3년 보증</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">30일 반품</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-t border-border">
            <div className="flex gap-8 border-b border-border">
              {[
                { id: "description", label: "상품 설명" },
                { id: "specs", label: "상세 스펙" },
                { id: "shipping", label: "배송/교환/반품" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={cn(
                    "py-4 text-sm font-medium border-b-2 -mb-px transition-colors",
                    activeTab === tab.id
                      ? "border-primary text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="py-8">
              {activeTab === "description" && (
                <div className="max-w-2xl">
                  <h3 className="text-xl font-display font-bold mb-4">제품 특징</h3>
                  <ul className="space-y-3">
                    {productData.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "specs" && (
                <div className="max-w-2xl">
                  <h3 className="text-xl font-display font-bold mb-4">제품 사양</h3>
                  <dl className="divide-y divide-border">
                    {productData.specs.map((spec) => (
                      <div key={spec.label} className="py-4 flex">
                        <dt className="w-32 text-muted-foreground">{spec.label}</dt>
                        <dd className="flex-1">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {activeTab === "shipping" && (
                <div className="max-w-2xl space-y-6">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-4">배송 안내</h3>
                    <p className="text-muted-foreground">
                      주문 완료 후 2-5일 이내 배송됩니다. 대형 가구의 경우 설치 서비스가 포함됩니다.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-4">교환/반품</h3>
                    <p className="text-muted-foreground">
                      상품 수령 후 30일 이내 교환/반품이 가능합니다. 단, 고객 사유로 인한 반품 시 배송비가 부과됩니다.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
