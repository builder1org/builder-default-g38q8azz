import Link from "next/link";
import {
  formatPrice,
  getCategory,
  getDiscountPercent,
  getProductRating,
  type Product,
} from "@/lib/data";

type Props = { product: Product; variant?: "default" | "shop" };

export function ProductCard({ product, variant = "default" }: Props) {
  const category = getCategory(product.categorySlug);
  const discount = getDiscountPercent(product);
  const rating = getProductRating(product);

  if (variant === "shop") {
    return (
      <article className="shop-card">
        <Link href={`/products/${product.slug}`} className="shop-card__link">
          <div className="shop-card__media">
            {product.expiryLabel && (
              <span className="shop-card__expiry">{product.expiryLabel}</span>
            )}
            {discount > 0 && <span className="shop-card__discount">%{discount}</span>}
            <div className="shop-card__photo" aria-hidden>
              <span className="shop-card__photo-icon">{category?.icon ?? "📦"}</span>
            </div>
            {product.installment && (
              <span className="shop-card__installment">خرید اقساطی</span>
            )}
          </div>
          <h3 className="shop-card__title">{product.name}</h3>
          <div className="shop-card__meta">
            <span className="shop-card__rating">
              <span aria-hidden>★</span> {rating.toFixed(2)}
            </span>
            <div className="shop-card__prices">
              {product.compareAtPrice != null && (
                <span className="shop-card__compare">{formatPrice(product.compareAtPrice)}</span>
              )}
              <span className="shop-card__price">{formatPrice(product.price)}</span>
            </div>
          </div>
        </Link>
      </article>
    );
  }

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
