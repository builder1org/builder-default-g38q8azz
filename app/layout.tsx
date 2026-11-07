import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "پروتئین‌استور | فروشگاه محصولات پروتئینی",
  description: "پودر وی، گینر، اسنک پروتئینی، کراتین و مکمل‌های ورزشی",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
