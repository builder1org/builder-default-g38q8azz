import Link from "next/link";
import type { Category } from "@/lib/data";

type Props = { category: Category; productCount: number };

export function CategoryCard({ category, productCount }: Props) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="category-circle"
      aria-label={`${category.name}، ${productCount} محصول — ${category.description}`}
    >
      <span className="category-circle__ring">
        <span className="category-circle__icon" aria-hidden>
          {category.icon}
        </span>
      </span>
      <span className="category-circle__title">{category.name}</span>
    </Link>
  );
}
