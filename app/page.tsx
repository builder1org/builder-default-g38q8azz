import Link from "next/link";
import { categories, getFeaturedProducts, getProductsByCategory, products } from "@/lib/data";
import { CategoryCard } from "./components/CategoryCard";
import { ProductCard } from "./components/ProductCard";

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <>
      <section className="hero">
        <div className="hero__inner">
          <p className="hero__eyebrow">نسخه اولیه فروشگاه</p>
          <h1 className="hero__title">تغذیه پروتئینی برای اهداف واقعی</h1>
          <p className="hero__lead">
            وی، گینر، اسنک و مکمل — دسته‌بندی شفاف، صفحه اختصاصی هر محصول، و طراحی
            موبایل‌فرند برای شروع سریع.
          </p>
          <div className="hero__actions">
            <Link href="/products" className="btn btn--primary">
              مشاهده محصولات
            </Link>
            <Link href="/categories" className="btn btn--ghost">
              دسته‌بندی‌ها
            </Link>
          </div>
        </div>
      </section>

      <main className="site-main">
        <section className="section">
          <div className="section__head">
            <h2 className="section__title">دسته‌بندی‌ها</h2>
            <Link href="/categories" className="section__more">
              همه دسته‌ها
            </Link>
          </div>
          <p className="category-circles__hint">روی هر دایره بزنید تا محصولات همان دسته را ببینید.</p>
          <div className="category-circles category-circles--scroll">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.slug}
                category={cat}
                productCount={getProductsByCategory(cat.slug).length}
              />
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section__head">
            <h2 className="section__title">محصولات ویژه</h2>
            <Link href="/products" className="section__more">
              {products.length} محصول
            </Link>
          </div>
          <div className="product-grid">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
