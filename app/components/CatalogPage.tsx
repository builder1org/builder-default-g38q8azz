import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { ProductFilters } from "./ProductFilters";
import { SortToolbar } from "./SortToolbar";
import type { Product } from "@/lib/data";

type Props = {
  title: string;
  description?: string;
  breadcrumbs: { href?: string; label: string }[];
  products: Product[];
  emptyMessage?: string;
};

export function CatalogPage({ title, description, breadcrumbs, products, emptyMessage }: Props) {
  return (
    <main className="catalog-page">
      <nav className="breadcrumb breadcrumb--shop" aria-label="مسیر">
        {breadcrumbs.map((crumb, i) => (
          <span key={`${crumb.label}-${i}`} className="breadcrumb__segment">
            {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span>{crumb.label}</span>}
            {i < breadcrumbs.length - 1 && <span aria-hidden>/</span>}
          </span>
        ))}
      </nav>

      <header className="catalog-page__header">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </header>

      <div className="catalog-layout">
        <ProductFilters />
        <div className="catalog-main">
          <SortToolbar total={products.length} />
          {products.length === 0 ? (
            <p className="empty-state">{emptyMessage ?? "محصولی یافت نشد."}</p>
          ) : (
            <div className="catalog-product-grid">
              {products.map((p) => (
                <ProductCard key={p.slug} product={p} variant="shop" />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
