import type { ImageMetadata } from "astro";

import nasiGoreng from "../assets/images/products/nasi-goreng.jpg";
import ayamBakar from "../assets/images/products/ayam-bakar.jpg";
import nasiKuah from "../assets/images/products/nasi-kuah.jpg";
import lapisLegit from "../assets/images/products/lapis-legit.jpg";
import boluCokelat from "../assets/images/products/bolu-cokelat.jpg";
import puding from "../assets/images/products/puding.jpg";

export interface Product {
  slug: string;
  name: string;
  description: string;
  image: ImageMetadata;
  alt: string;
  /** Stock/generated placeholder. Replace with real product photography. */
  placeholder: boolean;
  credit?: {
    label: string;
    href: string;
  };
}

export const products: Product[] = [
  {
    slug: "nasi-goreng-kampung",
    name: "Nasi Goreng Kampung",
    description:
      "Nasi goreng dengan aroma bawang, telur, dan sayuran hijau—gurih, hangat, dan akrab di meja.",
    image: nasiGoreng,
    alt: "Ilustrasi nasi goreng kampung dengan telur dan irisan lemon.",
    placeholder: true,
  },
  {
    slug: "ayam-bakar-bumbu-rujak",
    name: "Ayam Bakar Bumbu Rujak",
    description:
      "Ayam berbumbu manis-pedas, dibakar hingga harum dengan sisi yang sedikit gosong.",
    image: ayamBakar,
    alt: "Ilustrasi ayam bakar berbumbu dengan sate dan kentang panggang.",
    placeholder: true,
  },
  {
    slug: "nasi-kuah-kampung",
    name: "Nasi Kuah Kampung",
    description:
      "Nasi hangat dengan kuah kaldu yang menenangkan—sederhana, gurih, dan mengenyangkan.",
    image: nasiKuah,
    alt: "Ilustrasi nasi putih hangat dengan semangkuk kuah kaldu.",
    placeholder: true,
  },
  {
    slug: "lapis-legit",
    name: "Lapis Legit",
    description:
      "Lapisan tipis yang lembut dan kaya mentega, dipotong kecil untuk momen yang manis.",
    image: lapisLegit,
    alt: "Ilustrasi potongan kue lapis legit dengan krim dan taburan cokelat.",
    placeholder: true,
  },
  {
    slug: "bolu-cokelat",
    name: "Bolu Cokelat",
    description:
      "Bolu cokelat lembut dengan lapisan ganache yang pekat dan tidak berlebihan.",
    image: boluCokelat,
    alt: "Ilustrasi bolu cokelat dengan ganache dan krim cokelat.",
    placeholder: true,
  },
  {
    slug: "puding-cokelat",
    name: "Puding Cokelat",
    description:
      "Puding cokelat dingin dengan krim lembut, biskuit, dan saus yang mengalir pelan.",
    image: puding,
    alt: "Ilustrasi puding cokelat dalam gelas dengan krim dan biskuit.",
    placeholder: true,
  },
];
