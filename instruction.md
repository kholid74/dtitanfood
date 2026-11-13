# CODEX CLI — D'TITANS FOOD LANDING PAGE

Build a production-oriented, premium, mobile-first single-page landing page for **D'titans Food**, an Indonesian homemade food and catering business.

## Tech Stack
- Astro
- Tailwind CSS
- TypeScript where useful
- Static site generation
- No CMS
- No database
- No authentication
- No payment gateway
- No shopping cart

## Brand Identity
Brand: D'titans Food

Positioning: Homemade Food & Catering

Main headline: "Sajian Lezat untuk Setiap Momen."

Colors:
- Warm Ivory: #F7F1E7
- Chocolate Brown: #552D1C
- Caramel Gold: #C98A48
- White: #FFFFFF

Typography:
- Cormorant Garamond for editorial headings
- DM Sans for body and UI

Use the official D'titans Food logo if provided in the project assets. Do not recreate or approximate the logo.

## Page Structure

Build the following sections in order:

1. Header & Hero
2. Our Favorites
3. Catering & Special Orders
4. Our Story
5. Why Choose Us
6. Food Gallery
7. From Our Kitchen — Recipe E-book
8. How to Order
9. Available On
10. Footer

## UI Direction
- Premium artisan food editorial aesthetic
- Warm and approachable, not overly corporate
- Strong food photography
- Elegant typography and intentional whitespace
- Alternating section compositions
- Responsive editorial grid
- Accessible interactive elements
- Subtle animations and reduced-motion support
- Avoid generic SaaS dashboard styling

## Functional Requirements

### Header
- Logo
- Navigation anchors
- Mobile navigation
- WhatsApp CTA

### Favorites
- Static product data stored in a separate TypeScript module
- Product image, name, short description
- WhatsApp inquiry CTA with prefilled product name
- Do not invent prices or product variants

### Catering
- Categories: Tumpeng, Custom Cakes, Catering
- Category imagery
- WhatsApp inquiry CTA with selected category
- Do not invent package prices, serving quantities, or lead times

### Gallery
- Responsive image grid
- Image alt text
- Optimized image loading
- Placeholder imagery clearly identified in source data

### Recipe E-book
- Editorial promotional block
- E-book cover placeholder
- Configurable external purchase URL
- Do not invent a specific product purchase URL

### Available On
- Place immediately before footer
- Show GoFood, ShopeeFood, GrabFood logos in one horizontal row
- Use official supplied brand assets
- All three links initially configured as "#"
- Prevent navigation when placeholder URLs are not yet configured
- Keep spacing and logo proportions consistent
- Do not claim platform integrations or live order availability

### Footer
- Brand identity
- WhatsApp
- Instagram
- Copyright

## Architecture
Use reusable Astro components and structured static data.

Suggested structure:

src/
  components/
    Header.astro
    Hero.astro
    Favorites.astro
    Catering.astro
    OurStory.astro
    WhyChooseUs.astro
    Gallery.astro
    Ebook.astro
    HowToOrder.astro
    AvailableOn.astro
    Footer.astro
  data/
    products.ts
    services.ts
    site.ts
  pages/
    index.astro
  styles/
    global.css

public/
  images/
    products/
    catering/
    gallery/
    brand/
    food-apps/

## SEO & Performance
- Indonesian language metadata
- Unique title and meta description
- Open Graph tags
- Semantic headings
- Mobile-first responsive layout
- Image optimization
- Lazy-load below-the-fold imagery
- Prevent layout shift
- Sitemap and robots configuration
- No fabricated reviews, ratings, awards, or certifications

## Acceptance Criteria
- All sections implemented in correct order
- Fully responsive at 360px, 390px, 768px, 1024px, and 1440px
- No horizontal overflow
- Functional anchor navigation
- WhatsApp message generation works
- Food app placeholder links do not jump to top
- Content is editable through source data files
- No CMS or backend dependencies
- Production build passes
- Deliver implementation report with screenshots and known limitations

Do not add extra features beyond scope. Prioritize design quality, content hierarchy, conversion clarity, and mobile usability.
