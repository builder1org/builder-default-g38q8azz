import type { Product } from "@/lib/data";
import { formatPrice, getDiscountPercent, getProductExtraInfo, getProductRating } from "@/lib/data";

type Props = { product: Product };

export function ProductDetailExtras({ product }: Props) {
  const extra = getProductExtraInfo(product);
  const discount = getDiscountPercent(product);
  const rating = getProductRating(product);

  return (
  <section className="product-detail-extra" aria-label="جزئیات تکمیلی محصول">
    <div className="product-detail-meta">
      <span className="product-detail-meta__rating">
        ★ {rating.toFixed(2)}
      </span>
      <span>برند: {extra.brand}</span>
      <span dir="ltr">کد: {extra.sku}</span>
      <span className={extra.inStock ? "stock in-stock" : "stock out-of-stock"}>
        {extra.inStock ? "موجود در انبار" : "ناموجود"}
      </span>
      {product.expiryLabel && <span>{product.expiryLabel}</span>}
      {discount > 0 && <span className="product-detail-meta__discount">٪{discount} تخفیف</span>}
      {product.installment && <span className="product-detail-meta__installment">خرید اقساطی</span>}
    </div>

    <ul className="product-highlights">
      {extra.highlights.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>

    <details className="product-accordion" open>
      <summary>جدول ارزش غذایی و مشخصات</summary>
      <div className="product-panel">
        <table className="nutrition-table">
          <tbody>
            {extra.nutritionFacts.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>

    <details className="product-accordion">
      <summary>مواد تشکیل‌دهنده</summary>
      <div className="product-panel">
        <p>{extra.ingredients}</p>
      </div>
    </details>

    <details className="product-accordion">
      <summary>نحوه مصرف</summary>
      <div className="product-panel">
        <p>{extra.howToUse}</p>
      </div>
    </details>

    <details className="product-accordion">
      <summary>ارسال، بازگشت و قیمت</summary>
      <div className="product-panel">
        <p>
          <strong>قیمت فعلی:</strong> {formatPrice(product.price)}
          {product.compareAtPrice != null && (
            <>
              {" "}
              — <span className="line-through">{formatPrice(product.compareAtPrice)}</span>
            </>
          )}
        </p>
        <p>{extra.shipping}</p>
        <p>{extra.returnPolicy}</p>
      </div>
    </details>
  </section>
  );
}
