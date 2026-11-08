import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "پروتئین‌استور",
    short_name: "پروتئین",
    description: "فروشگاه موبایل محصولات پروتئینی و مکمل",
    start_url: "/",
    display: "standalone",
    background_color: "#040506",
    theme_color: "#040506",
    lang: "fa",
    dir: "rtl",
    orientation: "portrait",
  };
}
