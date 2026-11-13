# D'titans Food — Landing Page

A premium, mobile-first landing page for **D'titans Food**, an Indonesian homemade food and catering business. The site introduces the kitchen, its favorite dishes, catering categories, and the personal WhatsApp ordering process.

Built with Astro, Tailwind CSS, and TypeScript. Static generation only: no CMS, database, authentication, cart, or payment gateway.

## Requirements

- Node.js **22.23.4 or newer** (Astro 7 requirement)
- npm 9.6.5 or newer

## Start locally

```bash
npm install
npm run dev
```

Astro will print the local URL, usually `http://localhost:4321`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the static production site into `dist/` |
| `npm run preview` | Preview the production build |
| `npm run check` | Run Astro/TypeScript diagnostics |

## Before publishing

All business placeholders are centralized in `src/data/site.ts`.

1. **Contact details** — replace `whatsappNumber` and `instagramUrl`. The WhatsApp number must be a full international number without `+` (for example `62812…`). Add a visible Instagram handle if desired.
2. **E-book purchase URL** — set `ebookPurchaseUrl` to the final `https://` URL. Until then the page renders a non-interactive “Segera hadir” state.
3. **Food app URLs** — set each URL in `foodApps` from `"#"` to its real `https://` URL. The disabled no-navigation state switches to live links automatically.
4. **Production domain** — update `site` in `astro.config.mjs` and `site.url` in `src/data/site.ts`. These values feed the canonical URL, Open Graph image URL, sitemap, and robots file.
5. **Photography** — replace the licensed stock illustrations in `src/assets/images/` with real D’titans Food photography, then update imports and alt text in `src/data/products.ts`, `src/data/services.ts`, and `src/data/gallery.ts`. See [IMAGE-GUIDE.md](IMAGE-GUIDE.md) for prompts, aspect ratios, and replacement steps. Update `CREDITS.md` and remove the illustration footnotes when real photos are supplied.
6. **Food app assets** — replace the temporary marks in `public/images/food-apps/` with the official brand assets supplied by the business. Update `foodApps` in `src/data/site.ts` if the filenames change.
7. **Copy review** — the menu names, product descriptions, and “Our Story” copy are draft content written for this build. Confirm them with the owner before launch.
8. **Logo** — the supplied `logo.png` is used directly. Replace `src/assets/images/brand/logo.png` with the official master and regenerate the favicon if needed.

## Content and configuration

| File | Owns |
| --- | --- |
| `src/data/site.ts` | Brand metadata, contact placeholders, navigation, food-app links, WhatsApp URL builder |
| `src/data/content.ts` | Section copy, headings, principles, ordering steps, e-book text, footer copy |
| `src/data/products.ts` | Favorite menu items, descriptions, imagery, alt text, placeholder flags |
| `src/data/services.ts` | Tumpeng, Custom Cakes, and Catering content and imagery |
| `src/data/gallery.ts` | Gallery images, alt text, placeholder flags, credits |
| `src/styles/global.css` | Design tokens, layout, components, motion, responsive rules |
| `src/components/` | One Astro component per page section, plus shared logo, icon, and WhatsApp link |

All WhatsApp links are generated with encoded prefilled messages. Product and category CTAs include the relevant name in the message.

When a food-app or e-book URL is still unset, the control is rendered without an anchor. Nothing navigates to `#` and the page does not jump to the top.

## Project structure

```text
src/
  assets/images/     Optimized source imagery grouped by use
  components/        Header, sections, footer, shared UI
  data/              Editable content and site configuration
  layouts/           Document head and page shell
  pages/             index.astro, robots.txt.ts
  styles/            global.css and design tokens
public/
  fonts/             Self-hosted Cormorant Garamond and DM Sans
  images/food-apps/  Temporary food-platform marks
docs/screenshots/    Responsive and section screenshots
PRODUCT.md           Product truth and unresolved decisions
DESIGN.md            Design system extracted from the built site
.impeccable/         Design-system sidecar, direction brief, and build config
CREDITS.md           Asset licenses and provenance
IMAGE-GUIDE.md       Prompts and steps for replacing stock imagery
IMPLEMENTATION.md    Delivery report, QA results, known limitations
```

## Deployment

The build is fully static. Run `npm run build` and deploy `dist/` to any static host (Vercel, Netlify, Cloudflare Pages, or a plain web server). The build environment needs Node 22.23.4+.

## Accessibility

The page targets WCAG 2.2 AA. Automated axe checks returned **0 violations** at 390px, 1440px, and with the mobile menu open. The mobile navigation uses a native `<dialog>` for focus containment, supports Escape, and respects reduced-motion settings. See the implementation report for the full QA record.

## Known limitations

The site is complete as an implementation, but is **not launch-ready until the placeholder contact details, links, and photography are replaced**. See [IMPLEMENTATION.md](IMPLEMENTATION.md) and [CREDITS.md](CREDITS.md) before publishing.
