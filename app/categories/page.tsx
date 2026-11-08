import { categories, getProductsByCategory } from "@/lib/data";
import { CategoryCard } from "../components/CategoryCard";

export const metadata = {
  title: "دسته‌بندی‌ها | پروتئین‌استور",
};

export default function CategoriesPage() {
  return (
    <main className="site-main site-main--page">
      <header className="page-header">
        <h1>دسته‌بندی محصولات</h1>
        <p>هر دایره را انتخاب کنید تا محصولات همان دسته نمایش داده شود.</p>
      </header>
      <div className="category-circles category-circles--page">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.slug}
            category={cat}
            productCount={getProductsByCategory(cat.slug).length}
          />
        ))}
      </div>
    </main>
  );
}
