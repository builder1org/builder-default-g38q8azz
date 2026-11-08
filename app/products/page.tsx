import { products, searchProducts } from "@/lib/data";
import { CatalogPage } from "../components/CatalogPage";

export const metadata = {
  title: "همه محصولات | پروتئین‌استور",
};

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function ProductsPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const list = searchProducts(query, products);

  const title = query ? `نتایج جستجو` : "همه محصولات";
  const description = query
    ? query.length > 0
      ? `${list.length} نتیجه برای «${query}»`
      : undefined
    : "لیست مکمل و پروتئین — مشابه فروشگاه مرجع با فیلتر و مرتب‌سازی.";

  const breadcrumbs = query
    ? [
        { href: "/", label: "صفحه اصلی" },
        { href: "/products", label: "همه محصولات" },
        { label: "جستجو" },
      ]
    : [{ href: "/", label: "صفحه اصلی" }, { label: "همه محصولات" }];

  return (
    <CatalogPage
      title={title}
      description={description}
      breadcrumbs={breadcrumbs}
      products={list}
      emptyMessage={
        query
          ? `محصولی با عبارت «${query}» پیدا نشد. عبارت دیگری امتحان کنید.`
          : undefined
      }
    />
  );
}
