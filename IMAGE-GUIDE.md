# Image replacement guide

The build currently uses licensed stock photography as **illustrative placeholders**. When AI-image credits are available again, or when the kitchen has its own photo session, replace the files below. Keep the same filenames, aspect ratios, and art direction so the layout and crops stay stable.

## Art direction

- Warm, editorial food photography—close, natural, and quietly styled.
- Natural window light, soft shadows, a warm ivory/chocolate/caramel palette.
- Real Indonesian home cooking: banana leaf, sambal, turmeric rice, rendang, layered cakes, simple ceramics, worn wood, linen.
- No people’s faces, no hands, no text, no logos, no packaging brands, no fake awards or menus.
- Leave breathing room around the subject for the image frames and thumbnails.
- Do not generate an image that claims to document a specific D’titans Food order unless the dish is actually photographed by the business.

## Prompts and file targets

### Hero — `src/assets/images/hero/hero.jpg`, 4:5 portrait

> Editorial overhead photograph of an abundant Indonesian homemade catering table on a dark weathered wood surface. A spread of turmeric rice, rendang, grilled chicken, banana-leaf parcels, sambal, cucumber, tomato, and fresh herbs, with warm ivory linen and simple brass serving spoons. Soft window light, rich chocolate and caramel tones, natural imperfections, appetizing and intimate, no people, no text, no logos, no packaging. Shot on medium format, shallow depth of field, premium Indonesian food magazine.

### Nasi Goreng Kampung — `src/assets/images/products/nasi-goreng.jpg`, 3:4 portrait

> Close editorial photograph of freshly cooked Indonesian nasi goreng kampung in a dark ceramic bowl: caramelized rice, egg, shallots, green vegetables, a lime wedge, and a small spoon of sambal. Warm side light, steam, rustic wooden table, no people, no text, no logos. Premium food magazine styling, warm ivory and chocolate palette.

### Ayam Bakar Bumbu Rujak — `src/assets/images/products/ayam-bakar.jpg`, 3:4 portrait

> Close photograph of Indonesian ayam bakar bumbu rujak, grilled chicken glazed with sticky sweet-spicy spice paste, charred edges, served on a simple ceramic plate with cucumber and a small bowl of sambal. Warm natural light, smoky atmosphere, dark wood, no people, no text, no logos.

### Nasi Kuah Kampung — `src/assets/images/products/nasi-kuah.jpg`, 3:4 portrait

> Warm editorial photograph of a comforting Indonesian meal: a mound of steamed white rice beside a small bowl of clear golden chicken broth with scallions and fried shallots. Hand-thrown ceramics, linen napkin, dark wooden table, soft window light, intimate and calm, no people, no text, no logos.

### Lapis Legit — `src/assets/images/products/lapis-legit.jpg`, 3:4 portrait

> Close editorial photograph of a slice of Indonesian lapis legit layer cake on a small ivory plate, showing many thin golden-brown layers, buttery crumbs, and a dusting of chocolate. A glass of tea in the soft background, warm side light, quiet chocolate and caramel palette, no people, no text, no logos, premium home bakery styling.

### Bolu Cokelat — `src/assets/images/products/bolu-cokelat.jpg`, 3:4 portrait

> Rustic yet refined photograph of a whole Indonesian chocolate sponge cake with a soft ganache and simple hand-piped chocolate curls, sitting on a pedestal plate on a dark wood table. Warm afternoon light, no people, no text, no logos, intimate home-kitchen atmosphere.

### Puding Cokelat — `src/assets/images/products/puding.jpg`, 3:4 portrait

> Editorial photograph of a dark chocolate pudding in a small glass, topped with soft cream, biscuit crumbs, and a slow drizzle of chocolate sauce. Warm ivory linen, a few scattered biscuits, low natural light, rich chocolate and caramel palette, no people, no text, no logos.

### Tumpeng — `src/assets/images/catering/tumpeng.jpg`, 4:5 portrait

> Authentic Indonesian tumpeng: a tall cone of turmeric-yellow rice with a banana-leaf tip, surrounded by side dishes—fried chicken, shredded omelette, tempeh, tofu, vegetables, sambal—arranged on banana leaves on a simple wooden table. Warm celebration atmosphere, natural window light, refined home-catering styling, no people, no text, no logos, no branded packaging.

### Custom Cakes — `src/assets/images/catering/custom-cakes.jpg`, 4:5 portrait

> An elegant custom layer cake with neutral buttercream and a restrained caramel-and-cream palette, styled on a wooden cake stand with a linen cloth and a single flower. Soft editorial side light, celebration mood, no people, no text, no logos, no branded decorations. Premium Indonesian home bakery.

### Catering — `src/assets/images/catering/catering.jpg`, 4:5 portrait

> Warm editorial photograph of a long Indonesian catering table with an array of homemade dishes in simple chafing dishes and ceramic platters, banana leaves, white flowers, and candlelight. Guests are absent, the table is ready to receive them. Neutral ivory, chocolate, and caramel tones, natural light, no text, no logos, no branded packaging.

### Our Story — `src/assets/images/story/rempah.jpg`, 4:3 landscape

> Cinematic flat lay of Indonesian spices and cooking ingredients on a pale wood table: whole nutmeg, cinnamon, cloves, star anise, coriander seeds, fresh ginger, garlic, shallots, red chillies, turmeric, and bay leaves. Warm directional daylight, quiet negative space, rich earthy colors, no people, no text, no logos. The kind of table a family kitchen prepares before cooking.

### Gallery — `src/assets/images/gallery/*.jpg`

Use a mix of authentic kitchen moments and food close-ups:

- `sup.jpg` — 1:1: a warm bowl of Indonesian vegetable soup or sayur, with fresh herbs.
- `ayam-pan.jpg` — 3:4: chicken gently simmering in a rich spice sauce in a black pan, steam rising.
- `kue.jpg` — 3:4: a slice of layered cake with cream and fresh fruit on a simple plate.
- `puding.jpg` — 3:4: chocolate pudding with cream and biscuit.

## After the shoot or generation

1. Crop to the ratios above and place the files at the same paths.
2. Update the `alt` strings in `src/data/products.ts`, `src/data/services.ts`, and `src/data/gallery.ts` to describe the real photographs.
3. Remove the `placeholder: true` flags and any `credit` that no longer applies.
4. Remove the gallery illustration footnote and the footer illustration note from `src/data/content.ts`.
5. Update `CREDITS.md` with the photographer/source and licence.
6. Rebuild and recapture the screenshots in `docs/screenshots/`.
