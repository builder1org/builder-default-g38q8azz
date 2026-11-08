import { Vazirmatn } from "next/font/google";
import "./globals.css";
import "./shop.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "پروتئین‌استور | فروشگاه محصولات پروتئینی",
  description: "فروشگاه موبایل وی، گینر، اسنک پروتئینی، کراتین و مکمل‌های ورزشی",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "پروتئین‌استور",
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} app-body`}>
        <div className="app-shell">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
