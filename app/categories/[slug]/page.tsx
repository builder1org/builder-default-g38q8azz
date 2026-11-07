import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory, getProductsByCategory } from "@/lib/data";
import { ProductCard } from "@/app/components/ProductCard";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "دسته" };
  return {
    title: `${category.name} | پروتئین‌استور`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const list = getProductsByCategory(slug);

  return (
    <main className="site-main site-main--page">
      <nav className="breadcrumb" aria-label="مسیر">
        <Link href="/">خانه</Link>
        <span aria-hidden>/</span>
        <Link href="/categories">دسته‌بندی‌ها</Link>
        <span aria-hidden>/</span>
        <span className="breadcrumb__current">{category.name}</span>
      </nav>
      <header className="page-header page-header--with-icon">
        <span className="page-header__icon" aria-hidden>
          {category.icon}
        </span>
        <div>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </div>
      </header>
      {list.length === 0 ? (
        <p className="empty-state">هنوز محصولی در این دسته ثبت نشده است.</p>
      ) : (
        <div className="product-grid">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </main>
  );
}
