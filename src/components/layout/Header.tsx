import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  {
    name: "리빙",
    subcategories: ["소파", "라운지 체어", "TV장", "수납장", "조명"],
  },
  {
    name: "다이닝",
    subcategories: ["다이닝 테이블", "다이닝 체어", "사이드보드", "식기장"],
  },
  {
    name: "침실",
    subcategories: ["침대", "협탁", "드레서", "옷장", "매트리스"],
  },
  {
    name: "오피스",
    subcategories: ["책상", "오피스 체어", "책장", "서랍장"],
  },
  {
    name: "아웃도어",
    subcategories: ["아웃도어 소파", "가든 테이블", "가든 체어", "파라솔"],
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top Bar */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>대한민국 가구 조합 공식 마켓플레이스</span>
            <div className="flex gap-4">
              <Link to="/support" className="hover:text-foreground transition-colors">고객센터</Link>
              <Link to="/login" className="hover:text-foreground transition-colors">로그인</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-display font-bold tracking-tight">
              FURNIQ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative"
                onMouseEnter={() => setActiveCategory(category.name)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <button className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1">
                  {category.name}
                  <ChevronDown className="w-3 h-3" />
                </button>

                {/* Dropdown */}
                <div
                  className={cn(
                    "absolute top-full left-0 mt-0 w-48 bg-popover border border-border shadow-card rounded-sm overflow-hidden transition-all duration-200",
                    activeCategory === category.name
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  )}
                >
                  <div className="py-2">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub}
                        to={`/category/${category.name}/${sub}`}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <Link
              to="/brands"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              브랜드
            </Link>
            <Link
              to="/new"
              className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              신상품
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="w-5 h-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border overflow-hidden transition-all duration-300",
          isMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto px-4 py-4">
          {categories.map((category) => (
            <div key={category.name} className="py-2">
              <button
                className="w-full text-left py-2 text-lg font-medium text-foreground flex items-center justify-between"
                onClick={() =>
                  setActiveCategory(
                    activeCategory === category.name ? null : category.name
                  )
                }
              >
                {category.name}
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    activeCategory === category.name && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  activeCategory === category.name ? "max-h-48" : "max-h-0"
                )}
              >
                {category.subcategories.map((sub) => (
                  <Link
                    key={sub}
                    to={`/category/${category.name}/${sub}`}
                    className="block py-2 pl-4 text-muted-foreground hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link
            to="/brands"
            className="block py-4 text-lg font-medium text-foreground border-t border-border mt-2"
            onClick={() => setIsMenuOpen(false)}
          >
            브랜드
          </Link>
        </nav>
      </div>
    </header>
  );
}
