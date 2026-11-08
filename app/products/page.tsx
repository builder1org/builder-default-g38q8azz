import { products } from "@/lib/data";
import { CatalogPage } from "../components/CatalogPage";

export const metadata = {
  title: "همه محصولات | پروتئین‌استور",
};

export default function ProductsPage() {
  return (
    <CatalogPage
      title="همه محصولات"
      description="لیست مکمل و پروتئین — مشابه فروشگاه مرجع با فیلتر و مرتب‌سازی."
      breadcrumbs={[{ href: "/", label: "صفحه اصلی" }, { label: "همه محصولات" }]}
      products={products}
    />
  );
}
