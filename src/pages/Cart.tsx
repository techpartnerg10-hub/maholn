import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X, ArrowRight } from "lucide-react";
import categoryLiving from "@/assets/category-living.jpg";
import categoryDining from "@/assets/category-dining.jpg";

interface CartItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  color: string;
  quantity: number;
}

const initialCartItems: CartItem[] = [
  {
    id: "1",
    name: "노블레스 모듈 소파",
    brand: "한샘 프리미엄",
    price: 3890000,
    image: categoryLiving,
    color: "라이트 그레이",
    quantity: 1,
  },
  {
    id: "2",
    name: "밀라노 다이닝 테이블",
    brand: "일룸",
    price: 2190000,
    image: categoryDining,
    color: "내추럴 오크",
    quantity: 1,
  },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat("ko-KR").format(price);
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">
            장바구니
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-8">장바구니가 비어있습니다.</p>
              <Link to="/products">
                <Button variant="gold">쇼핑 계속하기</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="border-b border-border pb-4 mb-4 hidden md:grid grid-cols-12 gap-4 text-sm text-muted-foreground">
                  <div className="col-span-6">상품</div>
                  <div className="col-span-2 text-center">수량</div>
                  <div className="col-span-3 text-right">가격</div>
                  <div className="col-span-1"></div>
                </div>

                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-6 border-b border-border"
                    >
                      {/* Product Info */}
                      <div className="md:col-span-6 flex gap-4">
                        <Link
                          to={`/product/${item.id}`}
                          className="w-24 h-24 shrink-0 overflow-hidden rounded-sm bg-muted"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </Link>
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground mb-1">
                            {item.brand}
                          </p>
                          <Link
                            to={`/product/${item.id}`}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.color}
                          </p>
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="md:col-span-2 flex justify-center">
                        <div className="flex items-center border border-border rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-accent transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-10 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-accent transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="md:col-span-3 text-right font-semibold">
                        ₩{formatPrice(item.price * item.quantity)}
                      </div>

                      {/* Remove */}
                      <div className="md:col-span-1 text-right">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 bg-card border border-border rounded-sm p-6">
                  <h2 className="text-lg font-semibold mb-6">주문 요약</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">상품 합계</span>
                      <span>₩{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">배송비</span>
                      <span className="text-primary">무료</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 mb-6">
                    <div className="flex justify-between">
                      <span className="font-semibold">총 결제 금액</span>
                      <span className="text-xl font-bold">₩{formatPrice(total)}</span>
                    </div>
                  </div>

                  <Button variant="gold" size="lg" className="w-full mb-3">
                    결제하기
                    <ArrowRight className="w-4 h-4" />
                  </Button>

                  <Link to="/products" className="block">
                    <Button variant="outline" className="w-full">
                      쇼핑 계속하기
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
