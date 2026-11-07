import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatPrice,
  getCategory,
  getProduct,
  getProductsByCategory,
  products,
} from "@/lib/data";
import { ProductCard } from "@/app/components/ProductCard";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "محصول" };
  return {
    title: `${product.name} | پروتئین‌استور`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.categorySlug);
  const related = getProductsByCategory(product.categorySlug)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <main className="site-main site-main--page">
      <nav className="breadcrumb" aria-label="مسیر">
        <Link href="/">خانه</Link>
        <span aria-hidden>/</span>
        <Link href="/categories">دسته‌ها</Link>
        <span aria-hidden>/</span>
        {category && (
          <>
            <Link href={`/categories/${category.slug}`}>{category.name}</Link>
            <span aria-hidden>/</span>
          </>
        )}
        <span className="breadcrumb__current">{product.name}</span>
      </nav>

      <article className="product-detail">
        <div className="product-detail__gallery">
          <div className="product-detail__visual" aria-hidden>
            <span className="product-detail__emoji">{category?.icon ?? "📦"}</span>
          </div>
        </div>
        <div className="product-detail__info">
          <div className="product-detail__tags">
            {product.tags.map((t) => (
              <span key={t} className="pill">
                {t}
              </span>
            ))}
          </div>
          <h1>{product.name}</h1>
          <p className="product-detail__short">{product.shortDescription}</p>
          <div className="product-detail__price-block">
            <span className="product-detail__price">{formatPrice(product.price)}</span>
            {product.compareAtPrice != null && (
              <span className="product-detail__compare">{formatPrice(product.compareAtPrice)}</span>
            )}
          </div>
          <dl className="spec-list">
            <div>
              <dt>وزن / بسته‌بندی</dt>
              <dd>{product.weight}</dd>
            </div>
            {product.flavor && (
              <div>
                <dt>طعم</dt>
                <dd>{product.flavor}</dd>
              </div>
            )}
            {product.proteinPerServing && (
              <div>
                <dt>پروتئین هر سروینگ</dt>
                <dd>{product.proteinPerServing}</dd>
              </div>
            )}
            {category && (
              <div>
                <dt>دسته</dt>
                <dd>
                  <Link href={`/categories/${category.slug}`}>{category.name}</Link>
                </dd>
              </div>
            )}
          </dl>
          <p className="product-detail__description">{product.description}</p>
          <div className="product-detail__actions">
            <button type="button" className="btn btn--primary btn--wide" disabled>
              افزودن به سبد — به‌زودی
            </button>
            <p className="product-detail__note">
              در نسخه اولیه فقط نمایش محصول فعال است؛ سبد خرید و پرداخت در مراحل بعد اضافه
              می‌شود.
            </p>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section section--compact">
          <h2 className="section__title">محصولات مرتبط</h2>
          <div className="product-grid">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
