"use client";

import { useSearchParams } from "next/navigation";

export function ShopSearch() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  return (
    <form className="shop-search" action="/products" method="get" role="search">
      <input
        type="search"
        name="q"
        className="shop-search__input"
        placeholder="جستجوی محصول، دسته، برند..."
        aria-label="جستجو"
        defaultValue={query}
        enterKeyHint="search"
      />
      <button type="submit" className="shop-search__btn" aria-label="جستجو">
        🔍
      </button>
    </form>
  );
}
