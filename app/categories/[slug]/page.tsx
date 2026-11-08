import { notFound } from "next/navigation";
import { categories, getCategory, getProductsByCategory } from "@/lib/data";
import { CatalogPage } from "@/app/components/CatalogPage";

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
    <CatalogPage
      title={category.name}
      description={category.description}
      breadcrumbs={[
        { href: "/", label: "صفحه اصلی" },
        { href: "/categories", label: "دسته‌بندی‌ها" },
        { label: category.name },
      ]}
      products={list}
    />
  );
}
