import Link from "next/link";
import { formatPrice, getCategory, type Product } from "@/lib/data";

type Props = { product: Product };

export function ProductCard({ product }: Props) {
  const category = getCategory(product.categorySlug);

  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} className="product-card__link">
        <div className="product-card__visual" aria-hidden>
          <span className="product-card__emoji">{category?.icon ?? "📦"}</span>
        </div>
        <div className="product-card__body">
          {product.tags[0] && <span className="product-card__tag">{product.tags[0]}</span>}
          <h3 className="product-card__title">{product.name}</h3>
          <p className="product-card__desc">{product.shortDescription}</p>
          <div className="product-card__price-row">
            <span className="product-card__price">{formatPrice(product.price)}</span>
            {product.compareAtPrice != null && (
              <span className="product-card__compare">{formatPrice(product.compareAtPrice)}</span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
