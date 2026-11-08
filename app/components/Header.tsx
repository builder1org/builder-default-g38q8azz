"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

const mobileNav = [
  { href: "/", label: "خانه", short: "خانه", icon: "🏠" },
  { href: "/products", label: "همه محصولات", short: "محصولات", icon: "🛒" },
  { href: "/categories", label: "دسته‌بندی‌ها", short: "دسته‌ها", icon: "📂" },
  { href: "/about", label: "درباره ما", short: "درباره", icon: "ℹ️" },
];

function UserIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.5-6 8-6s8 2 8 6" />
    </svg>
  );
}

const menuLinks = [
  { href: "/", label: "خانه" },
  { href: "/categories/whey-protein", label: "مکمل‌ها" },
  { href: "/products", label: "پروتئین وی" },
  { href: "/about", label: "تماس با ما" },
  { href: "/about", label: "پشتیبانی" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  return (
    <>
      <header className="shop-header">
        <div className="shop-header__bar">
          <div className="shop-header__actions">
            <Link href="/account" className="shop-header__icon-btn" aria-label="اطلاعات کاربری">
              <UserIcon />
            </Link>
            <Link href="/products" className="shop-header__icon-btn" aria-label="سبد خرید">
              🛒
            </Link>
            <Link href="/about" className="shop-header__auth">
              ورود | ثبت‌نام
            </Link>
          </div>

          <form className="shop-search" action="/products" role="search">
            <input
              type="search"
              name="q"
              className="shop-search__input"
              placeholder="جستجوی محصول، دسته، برند..."
              aria-label="جستجو"
            />
            <button type="submit" className="shop-search__btn" aria-label="جستجو">
              🔍
            </button>
          </form>

          <Link href="/" className="shop-brand">
            <span className="shop-brand__title">پروتئین‌استور</span>
            <span className="shop-brand__sub">مرکز تخصصی مکمل و پروتئین</span>
          </Link>

          <button
            type="button"
            className="site-nav-toggle"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="site-nav-toggle__bars" aria-hidden />
            <span className="visually-hidden">{menuOpen ? "بستن منو" : "باز کردن منو"}</span>
          </button>
        </div>

        <nav className="shop-header__menu" aria-label="منو">
          <ul>
            {menuLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          id={menuId}
          className={`site-nav-panel${menuOpen ? " site-nav-panel--open" : ""}`}
          hidden={!menuOpen}
        >
          <nav className="site-nav site-nav--mobile" aria-label="منوی موبایل">
            <ul className="site-nav-panel__list">
              {mobileNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {menuOpen && (
        <button
          type="button"
          className="site-nav-backdrop"
          aria-label="بستن منو"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav className="mobile-tab-bar" aria-label="ناوبری سریع موبایل">
        <ul className="mobile-tab-bar__list">
          {mobileNav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link href={item.href} className={active ? "is-active" : undefined}>
                  <span className="mobile-tab-bar__icon" aria-hidden>
                    {item.icon}
                  </span>
                  <span className="mobile-tab-bar__label">{item.short}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
