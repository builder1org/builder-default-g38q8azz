import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "پروتئین‌استور",
    short_name: "پروتئین",
    description: "فروشگاه موبایل محصولات پروتئینی و مکمل",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    lang: "fa",
    dir: "rtl",
    orientation: "portrait",
  };
}
