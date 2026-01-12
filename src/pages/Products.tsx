import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Heart, ShoppingBag, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import categoryLiving from "@/assets/category-living.jpg";
import categoryDining from "@/assets/category-dining.jpg";
import categoryBedroom from "@/assets/category-bedroom.jpg";
import categoryOffice from "@/assets/category-office.jpg";

const allProducts = [
  { id: "1", name: "노블레스 모듈 소파", brand: "한샘 프리미엄", price: 3890000, originalPrice: 4500000, image: categoryLiving, category: "living", material: "fabric", isNew: true },
  { id: "2", name: "밀라노 다이닝 테이블", brand: "일룸", price: 2190000, originalPrice: null, image: categoryDining, category: "dining", material: "wood", isNew: false },
  { id: "3", name: "코지 퀸 침대 프레임", brand: "에이스침대", price: 1890000, originalPrice: 2100000, image: categoryBedroom, category: "bedroom", material: "wood", isNew: true },
  { id: "4", name: "모던 워크 데스크", brand: "데스커", price: 890000, originalPrice: null, image: categoryOffice, category: "office", material: "metal", isNew: false },
  { id: "5", name: "클라우드 3인 소파", brand: "까사미아", price: 2890000, originalPrice: null, image: categoryLiving, category: "living", material: "fabric", isNew: true },
  { id: "6", name: "오크 식탁 세트", brand: "리바트", price: 1590000, originalPrice: 1800000, image: categoryDining, category: "dining", material: "wood", isNew: false },
  { id: "7", name: "에르고 오피스 체어", brand: "퍼시스", price: 780000, originalPrice: null, image: categoryOffice, category: "office", material: "fabric", isNew: false },
  { id: "8", name: "스칸딕 침대", brand: "에넥스", price: 1290000, originalPrice: 1500000, image: categoryBedroom, category: "bedroom", material: "wood", isNew: true },
];

const categories = [
  { id: "living", name: "리빙" },
  { id: "dining", name: "다이닝" },
  { id: "bedroom", name: "침실" },
  { id: "office", name: "오피스" },
];

const materials = [
  { id: "wood", name: "원목" },
  { id: "fabric", name: "패브릭" },
  { id: "leather", name: "가죽" },
  { id: "metal", name: "메탈" },
];

const brands = [
  { id: "hansem", name: "한샘 프리미엄" },
  { id: "iloom", name: "일룸" },
  { id: "ace", name: "에이스침대" },
  { id: "desker", name: "데스커" },
  { id: "casamia", name: "까사미아" },
  { id: "rivat", name: "리바트" },
  { id: "fursys", name: "퍼시스" },
  { id: "enex", name: "에넥스" },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat("ko-KR").format(price);
}

export default function Products() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam ? [categoryParam] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [sortBy, setSortBy] = useState("newest");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const filteredProducts = allProducts.filter((product) => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }
    if (selectedMaterials.length > 0 && !selectedMaterials.includes(product.material)) {
      return false;
    }
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    return true;
  });

  const toggleFilter = (array: string[], value: string, setter: (val: string[]) => void) => {
    if (array.includes(value)) {
      setter(array.filter((v) => v !== value));
    } else {
      setter([...array, value]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
              전체 상품
            </h1>
            <p className="text-muted-foreground">
              {filteredProducts.length}개의 상품
            </p>
          </div>

          <div className="flex gap-8">
            {/* Desktop Filters */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-28 space-y-8">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold mb-4">카테고리</h3>
                  <div className="space-y-3">
                    {categories.map((cat) => (
                      <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                        <Checkbox
                          checked={selectedCategories.includes(cat.id)}
                          onCheckedChange={() => toggleFilter(selectedCategories, cat.id, setSelectedCategories)}
                        />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {cat.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Materials */}
                <div>
                  <h3 className="font-semibold mb-4">소재</h3>
                  <div className="space-y-3">
                    {materials.map((mat) => (
                      <label key={mat.id} className="flex items-center gap-3 cursor-pointer group">
                        <Checkbox
                          checked={selectedMaterials.includes(mat.id)}
                          onCheckedChange={() => toggleFilter(selectedMaterials, mat.id, setSelectedMaterials)}
                        />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {mat.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold mb-4">가격</h3>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={5000000}
                    step={100000}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₩{formatPrice(priceRange[0])}</span>
                    <span>₩{formatPrice(priceRange[1])}</span>
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <h3 className="font-semibold mb-4">브랜드</h3>
                  <div className="space-y-3">
                    {brands.slice(0, 5).map((brand) => (
                      <label key={brand.id} className="flex items-center gap-3 cursor-pointer group">
                        <Checkbox
                          checked={selectedBrands.includes(brand.name)}
                          onCheckedChange={() => toggleFilter(selectedBrands, brand.name, setSelectedBrands)}
                        />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {brand.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setIsFilterOpen(true)}
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  필터
                </Button>

                {/* Sort Dropdown */}
                <div className="relative ml-auto">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    className="flex items-center gap-2"
                  >
                    정렬
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                  {isSortOpen && (
                    <div className="absolute right-0 top-full mt-2 w-40 bg-popover border border-border rounded-sm shadow-card z-10">
                      {[
                        { id: "newest", name: "최신순" },
                        { id: "price-low", name: "낮은 가격순" },
                        { id: "price-high", name: "높은 가격순" },
                        { id: "popular", name: "인기순" },
                      ].map((option) => (
                        <button
                          key={option.id}
                          className={cn(
                            "w-full text-left px-4 py-2 text-sm hover:bg-accent transition-colors",
                            sortBy === option.id && "text-primary"
                          )}
                          onClick={() => {
                            setSortBy(option.id);
                            setIsSortOpen(false);
                          }}
                        >
                          {option.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
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
                      <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
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
          </div>
        </div>

        {/* Mobile Filter Modal */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-card border-l border-border p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-lg">필터</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsFilterOpen(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold mb-4">카테고리</h3>
                  <div className="space-y-3">
                    {categories.map((cat) => (
                      <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                        <Checkbox
                          checked={selectedCategories.includes(cat.id)}
                          onCheckedChange={() => toggleFilter(selectedCategories, cat.id, setSelectedCategories)}
                        />
                        <span className="text-sm">{cat.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">소재</h3>
                  <div className="space-y-3">
                    {materials.map((mat) => (
                      <label key={mat.id} className="flex items-center gap-3 cursor-pointer">
                        <Checkbox
                          checked={selectedMaterials.includes(mat.id)}
                          onCheckedChange={() => toggleFilter(selectedMaterials, mat.id, setSelectedMaterials)}
                        />
                        <span className="text-sm">{mat.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button variant="gold" className="w-full" onClick={() => setIsFilterOpen(false)}>
                  결과 보기
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
