import type { ImageMetadata } from "astro";

import sup from "../assets/images/gallery/sup.jpg";
import ayamPan from "../assets/images/gallery/ayam-pan.jpg";
import tumpeng from "../assets/images/catering/tumpeng.jpg";
import mejaKatering from "../assets/images/catering/catering.jpg";
import kue from "../assets/images/gallery/kue.jpg";
import puding from "../assets/images/gallery/puding.jpg";

export interface GalleryItem {
  image: ImageMetadata;
  alt: string;
  /** Stock/generated placeholder. Replace with real kitchen photography. */
  placeholder: boolean;
  credit?: {
    label: string;
    href: string;
  };
}

export const galleryItems: GalleryItem[] = [
  {
    image: sup,
    alt: "Ilustrasi semangkuk hidangan sayur dengan taburan biji dan tomat.",
    placeholder: true,
  },
  {
    image: ayamPan,
    alt: "Ilustrasi ayam dalam saus rempah yang dimasak di wajan.",
    placeholder: true,
  },
  {
    image: tumpeng,
    alt: "Ilustrasi tumpeng nasi dengan lauk pendamping dan telur dadar.",
    placeholder: true,
    credit: {
      label: "Fidii / CC BY-SA 4.0",
      href: "https://commons.wikimedia.org/wiki/File:Sega_Tumpeng.jpg",
    },
  },
  {
    image: mejaKatering,
    alt: "Ilustrasi meja katering dengan aneka hidangan dan dekorasi bunga.",
    placeholder: true,
  },
  {
    image: kue,
    alt: "Ilustrasi potongan kue berlapis dengan krim dan buah segar.",
    placeholder: true,
  },
  {
    image: puding,
    alt: "Ilustrasi puding cokelat dalam gelas dengan krim dan biskuit.",
    placeholder: true,
  },
];
