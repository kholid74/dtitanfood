import type { ImageMetadata } from "astro";

import tumpeng from "../assets/images/catering/tumpeng.jpg";
import customCakes from "../assets/images/catering/custom-cakes.jpg";
import catering from "../assets/images/catering/catering.jpg";

export interface Service {
  slug: string;
  name: string;
  description: string;
  image: ImageMetadata;
  alt: string;
  /** Stock/generated placeholder. Replace with real catering photography. */
  placeholder: boolean;
  credit?: {
    label: string;
    href: string;
  };
}

export const services: Service[] = [
  {
    slug: "tumpeng",
    name: "Tumpeng",
    description:
      "Susunan nasi dan lauk untuk syukuran, ulang tahun, dan acara keluarga yang ingin ditandai dengan hangat.",
    image: tumpeng,
    alt: "Ilustrasi tumpeng nasi kuning dengan lauk pendamping di atas daun pisang.",
    placeholder: true,
    credit: {
      label: "Foto: Fidii / CC BY-SA 4.0",
      href: "https://commons.wikimedia.org/wiki/File:Sega_Tumpeng.jpg",
    },
  },
  {
    slug: "custom-cakes",
    name: "Custom Cakes",
    description:
      "Kue untuk perayaan yang Anda bayangkan—dibuat untuk menjadi bagian dari momen, bukan sekadar pelengkapnya.",
    image: customCakes,
    alt: "Ilustrasi potongan kue berlapis dengan krim dan buah segar.",
    placeholder: true,
  },
  {
    slug: "catering",
    name: "Catering",
    description:
      "Pilihan hidangan untuk acara keluarga, kantor, dan pertemuan yang meja makannya lebih panjang.",
    image: catering,
    alt: "Ilustrasi meja hidangan katering dengan aneka sajian dan bunga putih.",
    placeholder: true,
  },
];
