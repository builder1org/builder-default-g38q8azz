export const metadata = {
  title: "درباره ما | پروتئین‌استور",
};

export default function AboutPage() {
  return (
    <main className="site-main site-main--page">
      <header className="page-header">
        <h1>درباره پروتئین‌استور</h1>
        <p>
          این نسخه اولیه برای پیش‌نمایش ساختار سایت است: خانه، دسته‌بندی، لیست محصولات و
          صفحه جزئیات هر کالا.
        </p>
      </header>
      <div className="prose-block">
        <h2>چه چیزهایی آماده است؟</h2>
        <ul>
          <li>صفحه اصلی با معرفی و محصولات ویژه</li>
          <li>شش دسته پروتئینی نمونه</li>
          <li>صفحه هر دسته و صفحه هر محصول</li>
          <li>قیمت‌گذاری به تومان و متن فارسی RTL</li>
        </ul>
        <h2>مراحل بعد (در صورت تأیید شما)</h2>
        <ul>
          <li>سبد خرید و پرداخت</li>
          <li>جستجو و فیلتر</li>
          <li>تصاویر واقعی محصول و پنل مدیریت</li>
          <li>فرم تماس و سوالات متداول</li>
        </ul>
        <p>
          برای هماهنگی: <a href="mailto:info@example.com">info@example.com</a> — شماره تماس
          نمونه: <span dir="ltr">021-00000000</span>
        </p>
      </div>
    </main>
  );
}
