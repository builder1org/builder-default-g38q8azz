import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__title">پروتئین‌استور</p>
          <p className="site-footer__tagline">
            مکمل و محصولات پروتئینی با ارسال سریع — نسخه اولیه برای پیش‌نمایش.
          </p>
        </div>
        <div className="site-footer__links">
          <Link href="/products">محصولات</Link>
          <Link href="/categories">دسته‌ها</Link>
          <Link href="/about">تماس و درباره</Link>
        </div>
        <p className="site-footer__copy">© {new Date().getFullYear()} — تمام حقوق محفوظ است.</p>
      </div>
    </footer>
  );
}
