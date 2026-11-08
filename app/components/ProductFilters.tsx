"use client";

import { useId, useState } from "react";

export function ProductFilters() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <>
      <button
        type="button"
        className="catalog-filter-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
      >
        فیلتر
      </button>

      {open && (
        <button
          type="button"
          className="catalog-filter-backdrop"
          aria-label="بستن فیلتر"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        id={panelId}
        className={`catalog-filters${open ? " catalog-filters--open" : ""}`}
        aria-label="فیلتر محصولات"
      >
        <div className="catalog-filters__head">
          <h2>فیلتر</h2>
          <button type="button" className="catalog-filters__close" onClick={() => setOpen(false)}>
            بستن
          </button>
        </div>

        <div className="filter-block">
          <p className="filter-block__title">جستجو در نتایج</p>
          <input type="search" className="filter-input" placeholder="نام محصول..." />
        </div>

        <div className="filter-block">
          <p className="filter-block__title">برند</p>
          <select className="filter-input" defaultValue="">
            <option value="">همه برندها</option>
            <option>اپتیموم</option>
            <option>فارماتک</option>
            <option>دایمتیز</option>
          </select>
        </div>

        <div className="filter-block">
          <p className="filter-block__title">محدوده قیمت مورد نظر</p>
          <div className="filter-range">
            <input type="number" className="filter-input" placeholder="از" />
            <span>تا</span>
            <input type="number" className="filter-input" placeholder="تا" />
          </div>
        </div>

        <ul className="filter-toggles">
          <li>
            <span>فقط آیتم‌های موجود</span>
            <label className="filter-switch">
              <input type="checkbox" defaultChecked />
              <span>بله</span>
            </label>
          </li>
          <li>
            <span>فقط آیتم‌های تخفیف‌دار</span>
            <label className="filter-switch">
              <input type="checkbox" />
              <span>خیر</span>
            </label>
          </li>
          <li>
            <span>فقط آیتم‌های ویژه</span>
            <label className="filter-switch">
              <input type="checkbox" />
              <span>خیر</span>
            </label>
          </li>
        </ul>

        <div className="catalog-filters__promo">
          <p>خرید اقساطی</p>
          <span>پرداخت در چند قسط — نسخه نمایشی</span>
        </div>
      </aside>
    </>
  );
}
