import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import categoryLiving from "@/assets/category-living.jpg";
import categoryDining from "@/assets/category-dining.jpg";
import categoryBedroom from "@/assets/category-bedroom.jpg";
import categoryOffice from "@/assets/category-office.jpg";

const categories = [
  {
    id: "living",
    name: "리빙",
    description: "거실을 완성하는 소파와 수납가구",
    image: categoryLiving,
    link: "/products?category=living",
  },
  {
    id: "dining",
    name: "다이닝",
    description: "식사 시간을 특별하게",
    image: categoryDining,
    link: "/products?category=dining",
  },
  {
    id: "bedroom",
    name: "침실",
    description: "편안한 휴식을 위한 공간",
    image: categoryBedroom,
    link: "/products?category=bedroom",
  },
  {
    id: "office",
    name: "오피스",
    description: "집중과 효율의 업무 공간",
    image: categoryOffice,
    link: "/products?category=office",
  },
];

export function CategorySection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Categories
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            공간별 컬렉션
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={category.link}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-display font-bold mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  <span>자세히 보기</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
