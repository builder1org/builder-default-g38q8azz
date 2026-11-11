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
  rating?: number;
  installment?: boolean;
  expiryLabel?: string;
  brand?: string;
  sku?: string;
  inStock?: boolean;
  ingredients?: string;
  howToUse?: string;
  highlights?: string[];
  nutritionFacts?: { label: string; value: string }[];
};

export type ProductExtraInfo = {
  brand: string;
  sku: string;
  inStock: boolean;
  ingredients: string;
  howToUse: string;
  highlights: string[];
  nutritionFacts: { label: string; value: string }[];
  shipping: string;
  returnPolicy: string;
  discount: number;
  rating: number;
};

export function getProductExtraInfo(product: Product): ProductExtraInfo {
  const defaultHighlights = [
    product.proteinPerServing && product.proteinPerServing !== "—"
      ? `هر سروینگ حدود ${product.proteinPerServing} پروتئین`
      : null,
    product.flavor ? `طعم ${product.flavor}` : null,
    product.expiryLabel
      ? `انقضا: ${product.expiryLabel.replace(/^Exp:\s*/i, "")}`
      : null,
    "گارانتی اصالت و سلامت بسته‌بندی",
    product.installment ? "امکان خرید اقساطی" : null,
  ].filter(Boolean) as string[];

  const nutritionFacts = product.nutritionFacts ?? [
    { label: "پروتئین (هر سروینگ)", value: product.proteinPerServing ?? "—" },
    { label: "وزن / بسته", value: product.weight },
    ...(product.flavor ? [{ label: "طعم", value: product.flavor }] : []),
    { label: "کشور ساخت (نمونه)", value: "اروپا / آمریکا" },
    { label: "گواهی (نمونه)", value: "استاندارد GMP" },
  ];

  return {
    brand: product.brand ?? "پروتئین‌استور",
    sku: product.sku ?? `PS-${product.slug.replace(/-/g, "").slice(0, 10).toUpperCase()}`,
    inStock: product.inStock ?? true,
    ingredients:
      product.ingredients ??
      "مخلوط پروتئین وی، طعم‌دهنده، لسیتین، آنزیم‌های هضم (نمونه). ترکیب دقیق روی برچسب محصول درج شده است.",
    howToUse:
      product.howToUse ??
      "۱ اسکوپ (طبق درج روی بسته) را با ۲۵۰–۳۰۰ میلی‌لیتر آب سرد، شیر یا شیر بادام مخلوط کنید. ترجیحاً بعد از تمرین یا میان‌وعده مصرف شود.",
    highlights: product.highlights ?? defaultHighlights,
    nutritionFacts,
    shipping: "ارسال ۲ تا ۴ روز کاری در تهران؛ ۳ تا ۷ روز در سایر شهرها (پست پیشتاز / تیپاکس)",
    returnPolicy:
      "تا ۷ روز پس از تحویل، در صورت سالم بودن پلمپ و بسته‌بندی، امکان مرجوعی طبق قوانین فروشگاه وجود دارد.",
    discount: getDiscountPercent(product),
    rating: getProductRating(product),
  };
}

export function getDiscountPercent(product: Product): number {
  if (product.compareAtPrice == null || product.compareAtPrice <= product.price) return 0;
  return Math.round((1 - product.price / product.compareAtPrice) * 100);
}

export function getProductRating(product: Product): number {
  return product.rating ?? 4.2;
}

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
    rating: 4.6,
    installment: true,
    expiryLabel: "Exp: 12/2028",
    brand: "گلد نوتریشن",
    sku: "PS-GOLD-WHEY-2KG",
    highlights: [
      "۲۴ گرم پروتئین در هر اسکوپ",
      "کم‌چرب، بدون شکر افزوده",
      "مناسب بعد از تمرین",
      "حلالیت سریع در آب سرد",
    ],
    nutritionFacts: [
      { label: "پروتئین", value: "۲۴ گرم" },
      { label: "کربوهیدرات", value: "۳ گرم" },
      { label: "چربی", value: "۲ گرم" },
      { label: "کالری تقریبی", value: "۱۲۰ کیلوکالری" },
      { label: "سروینگ", value: "۱ اسکوپ ≈ ۳۰ گرم" },
      { label: "تعداد سروینگ", value: "حدود ۶۷" },
    ],
    ingredients:
      "کنسانتره پروتئین وی، کاکائو، طعم‌دهنده طبیعی و مصنوعی، لسیتین سویا، آنزیم لاکتاز، سوکرالوز (شیرین‌کننده).",
    howToUse:
      "یک اسکوپ را با ۲۵۰ تا ۳۰۰ میلی‌لیتر آب یا شیر کم‌چرب مخلوط کنید. ۳۰ دقیقه پس از پایان تمرین یا به‌عنوان میان‌وعده پروتئینی استفاده کنید.",
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
    rating: 4.4,
    installment: true,
    expiryLabel: "Exp: 06/2028",
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
    rating: 4.8,
    installment: true,
    expiryLabel: "Exp: 01/2029",
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

function normalizeForSearch(text: string): string {
  return text.trim().toLowerCase().replace(/\u200c/g, " ");
}

export function searchProducts(query: string, source: Product[] = products): Product[] {
  const normalized = normalizeForSearch(query);
  if (!normalized) return source;

  const terms = normalized.split(/\s+/).filter(Boolean);

  return source.filter((product) => {
    const categoryName = getCategory(product.categorySlug)?.name ?? "";
    const haystack = normalizeForSearch(
      [
        product.name,
        product.shortDescription,
        product.description,
        product.flavor ?? "",
        product.weight,
        categoryName,
        ...product.tags,
      ].join(" "),
    );

    return terms.every((term) => haystack.includes(term));
  });
}

export function formatPrice(toman: number): string {
  return new Intl.NumberFormat("fa-IR").format(toman) + " تومان";
}
