import { products } from "@/lib/data";
import { ProductCard } from "../components/ProductCard";

export const metadata = {
  title: "همه محصولات | پروتئین‌استور",
};

export default function ProductsPage() {
  return (
    <main className="site-main site-main--page">
      <header className="page-header">
        <h1>همه محصولات</h1>
        <p>لیست اولیه {products.length} محصول در دسته‌های مختلف پروتئین و مکمل.</p>
      </header>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </main>
  );
}
