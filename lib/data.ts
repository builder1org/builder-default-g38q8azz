export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: string;
};

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  categorySlug: string;
  weight: string;
  flavor?: string;
  proteinPerServing?: string;
  featured?: boolean;
  tags: string[];
};

export const categories: Category[] = [
  {
    slug: "whey-protein",
    name: "پودر وی",
    description: "وی کنسانتره و ایزوله برای رشد و ریکاوری عضلات",
    icon: "🥤",
  },
  {
    slug: "mass-gainer",
    name: "گینر و حجم",
    description: "کالری و پروتئین بالا برای افزایش وزن",
    icon: "💪",
  },
  {
    slug: "snacks",
    name: "اسنک پروتئینی",
    description: "بار، چیپس و میان‌وعده‌های پرپروتئین",
    icon: "🍫",
  },
  {
    slug: "creatine",
    name: "کراتین",
    description: "قدرت، استقامت و عملکرد تمرین",
    icon: "⚡",
  },
  {
    slug: "amino",
    name: "آمینواسید",
    description: "BCAA، گلوتامین و فرمول‌های تخصصی",
    icon: "🧪",
  },
  {
    slug: "vitamins",
    name: "ویتامین و مینرال",
    description: "پشتیبانی روزانه از تغذیه و ایمنی",
    icon: "💊",
  },
];

export const products: Product[] = [
  {
    slug: "gold-whey-chocolate",
    name: "پودر وی گلد — شکلات",
    shortDescription: "۲۴ گرم پروتئین در هر اسکوپ، جذب سریع",
    description:
      "وی کنسانتره با طعم شکلات غنی، مناسب بعد از تمرین یا میان‌وعده. ترکیب کم‌چرب با پروفایل آمینواسید کامل. بدون شکر افزوده.",
    price: 2890000,
    compareAtPrice: 3200000,
    categorySlug: "whey-protein",
    weight: "۲ کیلوگرم — حدود ۶۷ اسکوپ",
    flavor: "شکلات",
    proteinPerServing: "۲۴ گرم",
    featured: true,
    tags: ["پرفروش", "وی"],
  },
  {
    slug: "isolate-vanilla",
    name: "وی ایزوله — وانیل",
    shortDescription: "پروتئین خالص‌تر، کم‌لاکتوز",
    description:
      "فیلتر میکرو برای محتوای پروتئین بالاتر و کربوهیدرات کمتر. گزینه مناسب برای رژیم‌های سخت‌گیرانه و حساسیت به لاکتوز.",
    price: 3450000,
    categorySlug: "whey-protein",
    weight: "۱.۸ کیلوگرم",
    flavor: "وانیل",
    proteinPerServing: "۲۷ گرم",
    featured: true,
    tags: ["ایزوله"],
  },
  {
    slug: "mass-choco-peanut",
    name: "گینر حجمی — شکلات بادام‌زمینی",
    shortDescription: "۱۲۵۰ کالری و ۵۰ گرم پروتئین در سروینگ",
    description:
      "ترکیب کربوهیدرات پیچیده و پروتئین برای ectomorphها و دوره‌های حجم. طعم شکلات بادام‌زمینی.",
    price: 2650000,
    categorySlug: "mass-gainer",
    weight: "۳ کیلوگرم",
    flavor: "شکلات بادام‌زمینی",
    proteinPerServing: "۵۰ گرم",
    featured: true,
    tags: ["حجم"],
  },
  {
    slug: "protein-bar-cookie",
    name: "بار پروتئینی — کوکی",
    shortDescription: "۲۰ گرم پروتئین، بدون قند اضافه",
    description: "میان‌وعده آماده با بافت نرم. مناسب کیف دستی و بعد از باشگاه.",
    price: 185000,
    categorySlug: "snacks",
    weight: "۱ عدد — ۶۵ گرم",
    flavor: "کوکی",
    proteinPerServing: "۲۰ گرم",
    tags: ["اسنک"],
  },
  {
    slug: "protein-chips-bbq",
    name: "چیپس پروتئینی — باربیکیو",
    shortDescription: "۱۵ گرم پروتئین در هر بسته",
    description: "جایگزین سالمی‌تر برای چیپس معمولی. ترد و پرطعم.",
    price: 145000,
    categorySlug: "snacks",
    weight: "۴۰ گرم",
    flavor: "باربیکیو",
    proteinPerServing: "۱۵ گرم",
    tags: ["اسنک"],
  },
  {
    slug: "creatine-mono-500",
    name: "کراتین مونوهیدرات خالص",
    shortDescription: "۵ گرم کراتین در هر اسکوپ — ۱۰۰ سروینگ",
    description:
      "پودر میکرونایز بدون طعم. قابل مخلوط با آب یا شیک. یکی از پرتحقیق‌ترین مکمل‌های ورزشی.",
    price: 890000,
    compareAtPrice: 990000,
    categorySlug: "creatine",
    weight: "۵۰۰ گرم",
    proteinPerServing: "—",
    featured: true,
    tags: ["کراتین", "پرفروش"],
  },
  {
    slug: "bcaa-tropical",
    name: "BCAA — میوه‌های استوایی",
    shortDescription: "نسبت ۲:۱:۱ لوسین، ایزولوسین، والین",
    description: "آمینواسیدهای شاخه‌دار برای حین تمرین. طعم استوایی، بدون شکر.",
    price: 1250000,
    categorySlug: "amino",
    weight: "۴۰۰ گرم — ۴۰ سروینگ",
    flavor: "استوایی",
    tags: ["BCAA"],
  },
  {
    slug: "multivitamin-sport",
    name: "مولتی‌ویتامین ورزشکار",
    shortDescription: "فرمول کامل با آنتی‌اکسیدان",
    description: "ویتامین‌ها و مواد معدنی متناسب با نیاز فعال. یک قرص روزانه با غذا.",
    price: 420000,
    categorySlug: "vitamins",
    weight: "۹۰ قرص",
    tags: ["ویتامین"],
  },
  {
    slug: "whey-strawberry",
    name: "پودر وی — توت‌فرنگی",
    shortDescription: "۲۳ گرم پروتئین، طعم تازه توت‌فرنگی",
    description: "وی blend با طعم محبوب توت‌فرنگی. مناسب شیک روزانه.",
    price: 2490000,
    categorySlug: "whey-protein",
    weight: "۹۰۰ گرم",
    flavor: "توت‌فرنگی",
    proteinPerServing: "۲۳ گرم",
    tags: ["وی"],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function formatPrice(toman: number): string {
  return new Intl.NumberFormat("fa-IR").format(toman) + " تومان";
}
