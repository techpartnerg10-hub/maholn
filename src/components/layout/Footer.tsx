import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-display font-bold tracking-tight">
                FURNIQ
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              대한민국 30개 프리미엄 가구 조합이 함께하는
              <br />
              품격 있는 가구 마켓플레이스
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">쇼핑</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/category/living" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  리빙
                </Link>
              </li>
              <li>
                <Link to="/category/dining" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  다이닝
                </Link>
              </li>
              <li>
                <Link to="/category/bedroom" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  침실
                </Link>
              </li>
              <li>
                <Link to="/category/office" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  오피스
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  브랜드
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">고객지원</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/support/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link to="/support/shipping" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  배송 안내
                </Link>
              </li>
              <li>
                <Link to="/support/returns" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  교환/반품
                </Link>
              </li>
              <li>
                <Link to="/support/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">회사소개</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FURNIQ 소개
                </Link>
              </li>
              <li>
                <Link to="/about/cooperative" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  조합 안내
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  이용약관
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2026 FURNIQ. 대한민국 가구 조합. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground">
                고객센터 1588-0000
              </span>
              <span className="text-xs text-muted-foreground">
                평일 09:00 - 18:00
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
