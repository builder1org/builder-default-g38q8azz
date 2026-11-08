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
      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" className="site-logo">
            <span className="site-logo__mark" aria-hidden>
              P
            </span>
            <span className="site-logo__text">پروتئین‌استور</span>
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
