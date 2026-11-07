import Link from "next/link";
import type { Category } from "@/lib/data";

type Props = { category: Category; productCount: number };

export function CategoryCard({ category, productCount }: Props) {
  return (
    <Link href={`/categories/${category.slug}`} className="category-card">
      <span className="category-card__icon" aria-hidden>
        {category.icon}
      </span>
      <h2 className="category-card__title">{category.name}</h2>
      <p className="category-card__desc">{category.description}</p>
      <span className="category-card__count">{productCount} محصول</span>
    </Link>
  );
}
