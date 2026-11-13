# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro + Tailwind CSS, TypeScript, static site generation. No backend, CMS, authentication, cart, or payment gateway.

## Users

Indonesian individuals and families looking for homemade food for everyday meals, small celebrations, syukuran, and gatherings; and customers seeking catering for larger events. They browse primarily on a phone, often while coordinating through WhatsApp. Their job is to understand what D'titans Food makes, feel confident in the quality and warmth of the kitchen, and start an inquiry without friction.

## Product Purpose

Introduce D'titans Food as a homemade food and catering business and turn interest into a personal WhatsApp conversation. Success means the visitor understands the offering, sees the food at its most appetizing, and knows exactly how to ask about a product, catering category, or custom order.

## Positioning

Home-cooked Indonesian food with the care and presentation of a small artisan kitchen: familiar dishes, made personal, for everyday tables and meaningful moments.

## Operating Context

Visitors arrive from social media, WhatsApp shares, and search. Inquiries happen in Bahasa Indonesia through WhatsApp, where details such as availability, price, portions, and scheduling are discussed personally. The site is a brochure and inquiry starter, not a transactional storefront.

## Capabilities and Constraints

- Single-page static landing page with anchor navigation and a mobile menu.
- Product favorites, catering categories, gallery, recipe e-book promo, order steps, and platform links.
- All commercial facts are intentionally undecided: prices, variants, package quantities, serving sizes, lead times, availability, and platform order URLs.
- The recipe e-book purchase URL is configurable and intentionally unset.
- GoFood, ShopeeFood, and GrabFood links are placeholders configured as `#`; navigation must be prevented until real URLs are supplied.
- WhatsApp number and Instagram handle are centralized placeholders in `src/data/site.ts` and must be replaced before launch.
- Official D'titans Food logo is supplied at `logo.png`; it must be used as provided, not recreated or approximated.
- No official GoFood, ShopeeFood, or GrabFood logo files were supplied at build time; temporary Simple Icons parent-brand marks stand in for them.
- Food photography in the build is licensed stock illustration, not documentary evidence of actual dishes. AI-generated imagery was unavailable because the image-generation API had no remaining credits.
- Product names, item descriptions, and the brand story are draft copy written for this build and require confirmation from the business before launch.

## Brand Commitments

- Name: D'titans Food.
- Positioning: Homemade Food & Catering.
- Main headline: "Sajian Lezat untuk Setiap Momen."
- Palette: Warm Ivory `#F7F1E7`, Chocolate Brown `#552D1C`, Caramel Gold `#C98A48`, White `#FFFFFF`.
- Cormorant Garamond for editorial headings; DM Sans for body and UI.
- Voice: warm, personal, quietly premium, rooted in Indonesian home cooking. Bahasa Indonesia is the primary language.
- Visual direction: premium artisan food editorial, warm and approachable, strong food photography, intentional whitespace, alternating compositions, no generic SaaS styling.

## Evidence on Hand

- `logo.png`: official D'titans Food logo (1536 × 1024, opaque white background).
- No real product photography, catering photography, family story, testimonials, reviews, ratings, awards, certifications, press, or platform integration evidence.
- No official food-app brand assets; the build visibly labels that availability is not yet live.
- Tumpeng placeholder photo: Fidii, “Sega Tumpeng,” CC BY-SA 4.0, Wikimedia Commons. Other placeholder photography: Unsplash.

## Product Principles

1. Make the food feel close enough to smell it; photography and material warmth carry the premium promise.
2. Every path leads to a human conversation on WhatsApp, with the selected product or category already named.
3. Never manufacture proof, specificity, or commercial detail that the business has not supplied.
4. Respect the mobile-first context: fast, legible, thumb-friendly, and calm.
5. Present the kitchen's warmth without slipping into generic catering-template language.

## Accessibility & Inclusion

Target WCAG 2.2 AA for contrast, focus visibility, semantics, keyboard operation, touch targets, and reduced-motion preferences. All decorative imagery must have meaningful alternative text where it carries content; interactive elements must have clear accessible names.
