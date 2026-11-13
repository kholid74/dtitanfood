export const site = {
  name: "D'titans Food",
  tagline: "Homemade Food & Catering",
  description:
    "Masakan rumahan dan katering untuk meja keluarga, syukuran, dan momen istimewa. Tanyakan menu D'titans Food langsung melalui WhatsApp.",
  url: "https://dtitansfood.com",
  locale: "id_ID",
  language: "id",
  themeColor: "#F7F1E7",
  // Placeholder contact details. Replace all three before launch.
  whatsappNumber: "6281234567890",
  instagramUrl: "https://instagram.com/dtitansfood",
  // Intentionally unset until the e-book is available.
  ebookPurchaseUrl: "",
  generalMessage:
    "Halo D'titans Food, saya ingin bertanya tentang menu dan pesanan.",
  socialImage: "/og-image.jpg",
  socialImageAlt:
    "Ilustrasi hidangan panggang dengan sayuran hijau dan cabai di meja kayu.",
} as const;

export const navigation = [
  { label: "Favorit", href: "#favorit" },
  { label: "Katering", href: "#katering" },
  { label: "Cerita Kami", href: "#cerita" },
  { label: "Galeri", href: "#galeri" },
  { label: "Cara Pesan", href: "#cara-pesan" },
] as const;

export const foodApps = [
  {
    name: "GoFood",
    href: "#",
    logo: "/images/food-apps/gojek.svg",
    note: "Segera hadir",
  },
  {
    name: "ShopeeFood",
    href: "#",
    logo: "/images/food-apps/shopee.svg",
    note: "Segera hadir",
  },
  {
    name: "GrabFood",
    href: "#",
    logo: "/images/food-apps/grab.svg",
    note: "Segera hadir",
  },
] as const;

export function buildWhatsAppUrl(message: string = site.generalMessage): string {
  const number = site.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function isConfiguredUrl(value: string | null | undefined): value is string {
  return typeof value === "string" && /^(https?:\/\/|mailto:)/.test(value.trim());
}
