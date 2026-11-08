const sorts = [
  "جدیدترین‌ها",
  "پربازدیدترین‌ها",
  "محبوب‌ترین",
  "پرفروش‌ترین",
  "ارزان‌ترین",
  "گران‌ترین",
];

export function SortToolbar({ total }: { total: number }) {
  return (
    <div className="catalog-toolbar">
      <div className="catalog-toolbar__sort" role="tablist" aria-label="مرتب‌سازی">
        {sorts.map((label, i) => (
          <button
            key={label}
            type="button"
            className={`catalog-sort${i === 0 ? " is-active" : ""}`}
            role="tab"
            aria-selected={i === 0}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="catalog-toolbar__count">{total} کالا</p>
    </div>
  );
}
