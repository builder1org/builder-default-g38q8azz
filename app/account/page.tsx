import Link from "next/link";

export const metadata = {
  title: "حساب کاربری | پروتئین‌استور",
};

export default function AccountPage() {
  return (
    <main className="site-main site-main--page account-page">
      <header className="page-header">
        <h1>حساب کاربری</h1>
        <p>نسخه نمایشی — پس از ورود، اطلاعات شما اینجا نمایش داده می‌شود.</p>
      </header>
      <div className="account-card">
        <div className="account-card__avatar" aria-hidden>
          👤
        </div>
        <p className="account-card__name">کاربر مهمان</p>
        <p className="account-card__meta">برای مشاهده سفارش‌ها و آدرس، وارد حساب شوید.</p>
        <Link href="/about" className="btn btn--primary btn--wide">
          ورود | ثبت‌نام
        </Link>
      </div>
    </main>
  );
}
