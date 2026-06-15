# بُنّ المنصور · ALMANSOUR — Design System

> **قهوة على أصولها** — *Coffee, by its roots.*
> Brand identity & design system for a Bedouin-coffee roastery and café.

This system powers everything Almansour puts into the world — beginning with the
**menu** and **social media** designs. It contains the brand's colors, type,
fonts, logo assets, reusable React components, and full UI-kit recreations.

---

## 1 · Brand context

**Almansour** (بُنّ المنصور) is a specialty roastery and café built on **Bedouin
coffee heritage** — Arabic coffee served "on its roots": with cardamom, saffron,
dates, and the unhurried generosity of desert hospitality. The brand voice is
**proud, warm, grounded, and unhurried**. It is **Arabic-first**, with English as
a quiet supporting layer.

The signature mark is an **illustrated Bedouin figure** in a white ghutra,
arms crossed — "the face of the house" — paired with a bold Arabic wordmark
(المنصور), the Latin lockup *ALMANSOUR*, and the tagline *قهوة على أصولها*.

### Sources provided
- `uploads/logo.jpg.jpeg` — the primary logo on the camel-brown field (**read; used as the master asset**).
- `uploads/pres.pdf` — a 19-page brand presentation. The **color palette (p.16)** and
  the **brand-strategy copy** were extracted. The image/mockup pages are heavy
  vector art and could not be rasterized in this environment.
- `uploads/logo1.ai`, `uploads/MENU.ai` — **referenced in the brief but NOT delivered to
  the project.** The vector logo and the original menu artwork are missing. → *See Caveats.*

---

## 2 · Content fundamentals — how Almansour writes

- **Language:** Arabic-first. Every customer-facing surface leads in Arabic;
  English/Latin is secondary (transliterations, eyebrows, the wordmark).
- **Tone:** heritage + hospitality. Proud but never loud; generous, calm, rooted.
  Think a host welcoming you to *majlis*, not a barista upselling.
- **Person:** speaks as "we / the house" (نحن / الدار) and invites "you" warmly
  (تعال، زورونا، اطلب). Imperatives are gracious invitations, not commands.
- **Casing:** Latin display is **ALWAYS uppercase** and letter-spaced (Cinzel).
  Body Latin is sentence case. Arabic uses natural casing.
- **Numbers:** prefer **Arabic-Indic numerals** (٠١٢٣) on Arabic surfaces
  (menus, posts); Western numerals are fine in English UI.
- **Emoji:** **not used.** Iconography is the diamond rule, the emblem, and the
  ornamental hairline — never emoji.
- **Examples:**
  - Tagline — *قهوة على أصولها* · "Coffee, by its roots."
  - Hero — *الكرم في كل فنجان* · "Hospitality in every cup."
  - Menu eyebrow — *Hot Coffee* over *قهوة ساخنة*.
  - Promo — *عرض اليوم · خصم ٢٥٪ على المشروبات الباردة*.
  - Hours — *مفتوحون الآن · يومياً ٧ص – ١٢م*.

---

## 3 · Visual foundations

**Palette.** Warm, earthen, desert-at-dusk. Four core colors from the brand deck
plus the signature *Camel* field sampled from the logo:

| Token | Hex | Role |
|---|---|---|
| Almond Cream | `#EDE0D4` | Paper, light surfaces, text-on-dark |
| Camel | `#97653F` | The logo field; warm mid-brown |
| Coffee Bean | `#7F5539` | **Primary** — buttons, prices, headers |
| Dark Slate | `#283D3B` | Ink, dark surfaces, contrast |
| Stormy Teal | `#197278` | **Accent** — eyebrows, links, "new/iced" |

Ramps extend each hue (sand 50–500, coffee 300–800, ink 600–900, teal 300–600).
Never reach for blue-grey or purple — the world is brown, cream, slate, and teal.

**Type.** Bilingual, four families:
- `--font-display` **Cinzel** — Latin Roman caps for the wordmark & eyebrows (uppercase, tracked).
- `--font-ar-display` **El Messiri** — Arabic headlines, hero words, menu titles.
- `--font-ar` **Tajawal** — Arabic body, menu descriptions, UI.
- `--font-sans` **Mulish** — Latin body, captions, form labels.

> ⚠ These are **Google-Font stand-ins** for the logo's bespoke lettering — see Caveats.

**Backgrounds.** Solid warm fields (camel, coffee, slate) and cream paper.
A subtle warm overlay sits on cream to keep it from going clinical. Product photos
sit in **radial coffee gradients** as placeholders until real imagery is dropped in.
No busy patterns; no noise except the natural grain already in the logo field.

**Imagery vibe.** Warm, low-contrast, golden — never cool or desaturated. The
emblem illustration is the hero; photography is supportive and earthy.

**Corner radii.** Restrained. Cards `8–14px`, chips/badges `2–4px`, pills for
filters & "now open" tags. Heritage, not bubbly — nothing is over-rounded.

**Borders & dividers.** Hairline `1px` in a warm coffee tint. The signature motif
is the **diamond rule** ( ─ ◆ ─ ) drawn from the logo's tagline divider, and
**dotted leader lines** between a menu item and its price.

**Shadows.** Soft and **warm-tinted** (coffee at 12–22% alpha), never grey/blue.
Elevation is gentle: xs for chips, md for cards, lg for floating panels.

**Motion.** Calm and unhurried. `220ms` ease-out for hovers, no bounce, no spring.
Hover = darker brand color or a faint sand wash; press = `translateY(1px)`.
Respect `prefers-reduced-motion`.

**Layout.** Generous breathing room, centered hero compositions, two-column menus
that collapse to one on mobile. Arabic surfaces are `dir="rtl"`.

---

## 4 · Iconography

Almansour is **icon-light by design**. There is no icon font in the brand.

- **Primary "icon" is the emblem** — the Bedouin portrait, used in a circle as
  avatar / badge / favicon (`assets/almansour-emblem.jpg`).
- **Ornament over icons:** the diamond rule and dotted leaders carry the visual
  load that icons would in other brands.
- **Emoji: never.** Unicode dingbats: never.
- **When UI icons are unavoidable** (e.g. a future ordering app: cart, location,
  clock), use **[Lucide](https://lucide.dev)** via CDN at `1.75–2px` stroke to match
  the hairline weight — and keep them in `--coffee-600` / `--text-secondary`.
  This is a **substitution** (no brand icon set was provided); flag it if used heavily.

---

## 5 · Components (`window.AlmansourDesignSystem_85db06`)

Reusable React primitives — import via the generated `_ds_bundle.js`.

**`components/core/`**
- **Button** — coffee / teal / slate-outline / ghost · sm·md·lg
- **Badge** — small uppercase label (coffee/teal/cream/slate/gold · solid·soft·outline)
- **Tag** — toggle-able pill filter chip
- **Divider** — ornamental hairline (diamond or caps label · light·onDark)
- **Input** — paper-field text input with label/hint/error, LTR & RTL

**`components/menu/`**
- **MenuItem** — bilingual price row with leader dots
- **SectionHeader** — Latin eyebrow + Arabic title + diamond rule
- **ProductCard** — drink card with photo, bilingual name, price

Each directory has a `*.card.html` specimen, and each component a `.d.ts` +
`.prompt.md`. `Button`, `MenuItem`, and `ProductCard` are also **Starting Points**.

---

## 6 · UI kits

- **`ui_kits/menu/`** — a full bilingual café **menu screen** (top bar, hero,
  category-filter tabs, two-column sections, footer). RTL, interactive tabs.
- **`ui_kits/social/`** — **Instagram templates**: brand-quote post, new-product
  post, promo post, a feed preview, and a 9:16 story. All scale via container
  units, so they export at any size.

Both are tagged as Starting Points.

---

## 7 · File index

```
styles.css                  ← global entry (consumers link THIS)
tokens/
  fonts.css                 @import for the 4 Google fonts (substitutes)
  colors.css                palette + semantic aliases
  typography.css            families, scale, weights, tracking
  spacing.css               space, radii, shadows, motion, layout
  base.css                  reset + brand helpers (.display .ar-display .eyebrow)
assets/
  almansour-logo.jpg        master logo (full, camel field)
  almansour-lockup.jpg      tight lockup crop
  almansour-emblem.jpg      portrait emblem (circle use)
  almansour-wordmark.jpg    wordmark + tagline crop
guidelines/                 16 specimen cards (Colors · Type · Spacing · Brand)
components/core/            Button · Badge · Tag · Divider · Input
components/menu/            MenuItem · SectionHeader · ProductCard
ui_kits/menu/               café menu screen
ui_kits/social/             social-media templates
SKILL.md                    Agent-Skill manifest
```

---

## 8 · Caveats & open questions

1. **Missing vector files.** `logo1.ai` and `MENU.ai` (named in the brief) were
   **not delivered**. The logo here is rasterized from the JPEG on its brown field
   — there is **no transparent / vector logo and no original menu artwork**.
   → *Please re-upload the `.ai` files so we can ship clean vector + transparent marks.*
2. **Fonts are substitutes.** The logo uses bespoke lettering. We paired
   **Cinzel / El Messiri / Tajawal / Mulish** as close Google-Font matches.
   → *Send the real brand fonts (or their names) to replace these.*
3. **Imagery.** Product shots are coffee-gradient placeholders. → *Share real
   drink/café photography (warm, golden) to drop into menu & social templates.*
4. **Strategy copy.** The Arabic strategy text in the deck didn't extract cleanly;
   the voice section is reconstructed from the readable fragments + the tagline.
   → *Confirm tone and any must-use phrases.*
