---
name: D'titans Food
description: A warm kitchen-ledger design system for homemade Indonesian food and catering.
colors:
  ivory: "#F7F1E7"
  ivory-deep: "#EFE4D3"
  white: "#FFFFFF"
  chocolate: "#552D1C"
  chocolate-deep: "#3D2014"
  caramel: "#C98A48"
  caramel-ink: "#8B5A28"
  caramel-soft: "#E7C39A"
  cream-muted: "#D8C2B2"
  ink-muted: "#6B5347"
  rule: "rgba(85, 45, 28, 0.16)"
  rule-strong: "rgba(85, 45, 28, 0.34)"
  rule-light: "rgba(247, 241, 231, 0.2)"
typography:
  display:
    fontFamily: "Cormorant Garamond, Times New Roman, serif"
    fontSize: "clamp(3.15rem, 6vw, 5.5rem)"
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: "-0.032em"
  headline:
    fontFamily: "Cormorant Garamond, Times New Roman, serif"
    fontSize: "clamp(2.6rem, 5vw, 4.35rem)"
    fontWeight: 500
    lineHeight: 0.94
    letterSpacing: "-0.028em"
  title:
    fontFamily: "Cormorant Garamond, Times New Roman, serif"
    fontSize: "clamp(1.55rem, 2.8vw, 2.15rem)"
    fontWeight: 500
    lineHeight: 1.03
    letterSpacing: "-0.018em"
  body:
    fontFamily: "DM Sans, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "DM Sans, Segoe UI, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.01em"
rounded:
  sm: "2px"
  full: "9999px"
spacing:
  xxs: "0.25rem"
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "4.5rem"
  section: "clamp(4.5rem, 8vw, 7.5rem)"
  shell: "min(100% - 2.5rem, 82rem)"
components:
  button-primary:
    backgroundColor: "{colors.chocolate}"
    textColor: "{colors.ivory}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1.3rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.caramel}"
    textColor: "{colors.chocolate-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1.3rem"
    height: "3rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.chocolate}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1.3rem"
    height: "3rem"
  menu-row:
    backgroundColor: "{colors.white}"
    textColor: "{colors.chocolate}"
    typography: "{typography.body}"
    padding: "2rem 0"
    width: "100%"
  locked-platform:
    backgroundColor: "{colors.white}"
    textColor: "{colors.chocolate}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 0.5rem"
    height: "5.25rem"
---

# Design System: D'titans Food

## Overview

**Creative North Star: "The Kitchen Ledger"**

D'titans Food should feel like a warm, well-kept kitchen notebook rather than a catering brochure. The system is built from uncoated paper, chocolate ink, caramel thread, printed photographs, and generous pauses between thoughts. Its job is to make home cooking feel considered and personal, not corporate.

The page moves in alternating fields: warm ivory for editorial calm, white for the menu index, deep chocolate for catering and the recipe book, and one committed caramel field for the kitchen's principles. Typography carries the hierarchy; photography carries the appetite; rules and small tabular numbers carry the sense of a ledger kept by hand. The composition is deliberately asymmetric, but the reading order stays obvious.

Confirmed rejection: no generic SaaS dashboard styling, no equal-card feature grid, no glossy product-platform claims. Placeholder photography, draft menu copy, and unavailable platform links must be visibly identified until the real material replaces them.

**Key Characteristics:**
- Warm Ivory and White paper fields, Chocolate ink, Caramel Gold as the singular thread.
- Oversized Cormorant Garamond display paired with quiet DM Sans utility text.
- Hairline rules, menu-ledger rows, tabular numerals, and square photo plates.
- Photographs treated as printed material rather than floating rounded cards.
- One committed caramel field and two deep chocolate fields create a strong, warm rhythm.
- Motion is restrained: a single hero reveal, confident hover states, reduced-motion always honored.

## Colors

The palette is a warm food-and-paper triad with enough dusty neutrals to keep the richness from becoming heavy.

### Primary
- **Chocolate Ink** (`#552D1C`): body ink, primary buttons, header and footer fields, and the catering field. It is the voice of the brand on paper.
- **Warm Ivory** (`#F7F1E7`): the main ground for editorial reading; it carries the subtle paper grain and gives the photographs room to breathe.

### Secondary
- **Caramel Gold** (`#C98A48`): the single accent and one full-width principles field. Also used for hairline rules, the offset hero frame, hover fills, and small decorative marks.
- **Caramel Ink** (`#8B5A28`): the legibility-safe caramel for small text, indices, and numerals on light grounds.

### Tertiary
- **Caramel Soft** (`#E7C39A`): the light accent for display italics and supporting text on the chocolate fields.
- **Cream Muted** (`#D8C2B2`): secondary copy on dark fields.

### Neutral
- **Paper White** (`#FFFFFF`): the favorites and ordering fields; it separates the menu index from the ivory editorial sections.
- **Ivory Deep** (`#EFE4D3`): the service strip, image placeholders, and quiet structural fills.
- **Deep Cocoa** (`#3D2014`): body ink on caramel, where full chocolate would not hold normal-text contrast.
- **Ink Muted** (`#6B5347`): supporting copy on ivory and white.
- **Ledger Rules** (`rgba(85, 45, 28, 0.16)` / `0.34`): one-pixel separators; the darker rule closes the product index.
- **Light Rules** (`rgba(247, 241, 231, 0.2)`): separators on the chocolate fields.

**The One Warm Field Rule.** Caramel is an event. One full caramel section per page; everywhere else it is a thread, never a background wash.

**The Legibility First Rule.** Small text never sits directly in Caramel Gold on Ivory or White. Use Caramel Ink on light grounds and Caramel Soft on chocolate grounds.

## Typography

**Display Font:** Cormorant Garamond (with Times New Roman, serif)
**Body Font:** DM Sans (with Segoe UI, sans-serif)
**Label Font:** DM Sans

**Character:** Cormorant carries appetite, memory, and occasion; DM Sans carries instructions, metadata, and the practical next step. The contrast between the two should feel like an editorial page with a neatly lettered order slip clipped to it.

### Hierarchy
- **Display** (500, `clamp(3.15rem, 6vw, 5.5rem)`, 0.9): the hero promise only. Set tightly, with a single italic accent line.
- **Headline** (500, `clamp(2.6rem, 5vw, 4.35rem)`, 0.94): section openings. Keep the measure short (roughly 12–14ch) and use italic for the changing half of the thought.
- **Title** (500, `clamp(1.55rem, 2.8vw, 2.15rem)`, 1.03): menu items, services, and story subheads.
- **Body** (400, 1rem, 1.65): 55–75ch measure in editorial passages; 30–42ch in menu and card contexts. Secondary paragraphs use Ink Muted.
- **Label** (500, 0.8125rem, 0.01em): buttons, links, small metadata, and the menu index.

**The Two Voices Rule.** Cormorant never handles interface instructions, and DM Sans never carries a display headline. The hierarchy depends on keeping those roles absolute.

**The Short Thought Rule.** Display and headline text should break into two or three deliberate lines. Avoid full-width paragraphs set in serif.

## Layout

The page uses an `82rem` content shell with `min(100% - 2.5rem, 82rem)` gutters; at 768px the side gutter grows to 5rem. Sections breathe with `clamp(4.5rem, 8vw, 7.5rem)` vertical padding. The sticky header is 4.5rem tall on phones and 5.5rem on desktop.

The hero is an asymmetric 1.35fr / 1fr split at 1024px and above; below that it stacks with the photograph following the copy. Favorites uses a sticky editorial introduction beside a single-column menu ledger at 1024px. Catering is a three-column typographic triptych with intentional vertical offsets. The story is a two-column image/text spread. Why Choose Us uses a two-column rule grid inside the caramel field. The gallery is a 12-column photo mosaic that uses a 7/5 split and then a 6/6 square row; it never becomes an equal-card row. On phones the gallery drops to a four-row pair/full-width rhythm.

**The Ledger Beat Rule.** Every section opens with more space above its heading than below it, then introduces a one-pixel rule before dense repeated content. Repeated items align on a shared left edge even when imagery offsets the rhythm.

## Elevation & Depth

The system is flat by default, using paper layering rather than floating surfaces. Depth comes from the full-bleed color fields, the offset caramel block behind the hero photograph, the gap between a photograph and its matte, and the handmade book object in the e-book section. No repeated card needs a shadow.

### Shadow Vocabulary
- **Photo print** (`0 24px 60px rgba(61, 32, 20, 0.12)`): the hero photograph only; it should read as a physical print lifting off the page.
- **Book lift** (`drop-shadow(0 28px 38px rgba(0, 0, 0, 0.35))`): the single e-book cover object, establishing its physical thickness.

**The Printed Plate Rule.** Images are rectangular prints with square corners and a hairline edge. Do not turn them into floating rounded cards or apply glass effects.

## Shapes

Corners are square or nearly square: a `2px` radius is the ceiling for interactive controls. Photographs, fields, modal panels, and the platform roster use square corners. Borders are one-pixel hairlines, never decorative side stripes. The only round forms are functional dots, platform marks, and the faint arcs printed on the e-book cover. The book is the one dimensional object: spine, page block, cover, and soft cast shadow.

**The Straight Edge Rule.** If a new element needs to feel premium, reduce its radius rather than adding one. Paper does not have pills.

## Components

### Buttons
- **Shape:** 2px radius, no shadow, 3rem minimum height (2.75rem in the sticky header).
- **Primary:** Chocolate Ink fill with Warm Ivory copy; on hover, Caramel Gold fill with Deep Cocoa copy. Includes a 16px up-right arrow.
- **Outline:** Transparent field with a `rule-strong` hairline; hover flips to Chocolate fill with Ivory copy.
- **On chocolate:** Transparent field with a light hairline and Ivory copy; hover flips to Ivory with Chocolate copy.
- **Disabled / pending:** A non-interactive outline state in Cream Muted; this is used for the e-book “Segera hadir” state.
- **Focus:** 2px current-color outline with a 4px offset; the focus color is overridden for caramel and chocolate fields.

### Text Links
- **Style:** DM Sans, 0.8125rem, underlined with a 1px line offset 0.34em. The underline is a muted version of the ink until hover, then deepens.
- **Use:** secondary actions such as “Tanyakan menu ini,” “Lihat favorit,” and “Tanyakan kategori ini.” Each link names its own destination.

### Menu Ledger Row
- **Structure:** a 3:4 photograph at 6.5rem on phones and 9.5–10.5rem on larger screens, followed by a serif product title, a compact description, and a text-link CTA. One-pixel rules separate rows.
- **Index:** a small tabular Cormorant numeral in Caramel Ink sits at the top right of the copy.
- **Behavior:** the image scales to 1.035 on hover; the row itself does not lift or gain a card fill.

### Service Triptych
- **Structure:** three photographic categories with a top rule, 4:5 images, serif names, and light text-links.
- **Rhythm:** columns two and three step down on tablet and desktop. No enclosing cards.
- **Pending assets:** the tumpeng image carries a visible photo credit; all imagery is illustrative until replaced.

### Header & Dialog
- **Header:** sticky Ivory field with a hairline when scrolled; supplied logo at 5.25–6.6rem wide with multiply blending on ivory. Desktop nav is 12.5px DM Sans; the mobile header keeps a compact solid “Pesan” and a bordered “Menu.”
- **Mobile menu:** a native full-screen `<dialog>` in Warm Ivory, large serif navigation rows separated by hairlines, a solid WhatsApp CTA, and a quiet Instagram link. Focus is contained; Escape closes; links close the dialog before navigating.

### E-book Object
- **Form:** a physical book impression in Warm Ivory, with a Caramel spine, page-block edge, and one faint circular print motif. The title is set in Cormorant; the status “Sampul sementara” is explicit.
- **Action:** the CTA is a disabled outline until a valid purchase URL is configured. Never dress a placeholder as a live purchase.

### Platform Roster
- **Form:** one bordered horizontal roster of three equal cells on a White field. Each cell is a mark, platform name, and a small “Segera” state.
- **Behavior:** unconfigured URLs render as non-interactive elements, never jump to the top. When real URLs are supplied, the same cells become external links.
- **Constraint:** no platform integration or live availability is claimed until official assets and URLs exist.

## Do's and Don'ts

### Do:
- **Do** use Warm Ivory and Paper White for long reading surfaces, with Chocolate Ink as the default text.
- **Do** keep Caramel Gold to one full field, thin rules, and small deliberate accents.
- **Do** set display headings in Cormorant Garamond with italic emphasis on the second thought.
- **Do** use square photographs with hairline edges and soft print-style shadows only where a physical object is implied.
- **Do** preserve the 82rem shell, asymmetric grids, and the 7/5 gallery rhythm.
- **Do** mark synthetic or placeholder photography and keep unavailable actions visibly unavailable.
- **Do** give primary controls at least 44px of touch height and keep visible keyboard focus.
- **Do** respect `prefers-reduced-motion`; the hero reveal is the page's single authored motion moment.

### Don't:
- **Don't** introduce a second accent hue, gradient text, or a second display face.
- **Don't** turn the menu, services, or story into equal rounded cards with shadows.
- **Don't** use DM Sans for display headings or Cormorant for interface labels.
- **Don't** place small Caramel Gold text on Ivory or White; use Caramel Ink or Chocolate.
- **Don't** round photographs, book surfaces, or large fields; 2px is the interactive ceiling.
- **Don't** fill empty space with generic icon tiles, decorative sparklines, or badge rows.
- **Don't** claim a platform integration, live order link, price, package, or lead time that the business has not supplied.
- **Don't** recreate or approximate the D'titans Food logo; use the supplied asset unaltered.
