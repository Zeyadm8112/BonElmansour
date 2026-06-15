# Molaglora — Design System

> **Inside out confidence & wellness**
> Premium luxury beauty / medical-wellness clinic. Arabic-first (RTL), iOS + Android native feel.

---

## 1. Brand at a glance

**Name:** Molaglora (مولاجلورا)
**Tagline:** Inside out confidence and wellness
**Sector:** Luxury medical-wellness clinic — beauty, dental, dermatology, holistic care
**Audience:** Arabic-speaking premium clientele (Gulf-region tone)
**Surface scope (this system):** native mobile app, Arabic-first

**Positioning:** Where clinical excellence meets refined luxury.

**Brand pillars**
1. **Clinical Excellence** · التميز الطبي
2. **Refined Luxury** · الفخامة المصقولة
3. **Patient Trust** · ثقة المريض
4. **Holistic Wellbeing** · الرفاهية الشاملة

**Personality keywords:** Clean · Premium · Calm · Trustworthy · Expert · Refined
(نظيف · راقي · هادئ · موثوق · خبير · رفيع)

---

## 2. Sources

| File | Notes |
|---|---|
| `uploads/brand-guidelines.html` | Original Arabic+English brand book (`هوية و تعليمات البراند.html`). Master reference for colors, type, voice. |
| `uploads/molaglora_*.svg/png` | Logos — horizontal, vertical, icon. Copied to `assets/`. |

No Figma file or codebase was provided — this system is derived from the brand HTML and logo files.

---

## 3. Index

```
/
├─ README.md                    ← this file
├─ SKILL.md                     ← Agent Skill manifest
├─ colors_and_type.css          ← all design tokens (CSS vars)
│
├─ assets/
│   ├─ logo-horizontal.svg/png  ← primary lockup
│   ├─ logo-vertical.svg/png    ← stacked
│   └─ logo-icon.svg/png        ← lotus mark only
│
├─ preview/                     ← Design System tab cards
│   ├─ logos.html
│   ├─ color-primary.html
│   ├─ color-gold.html
│   ├─ color-neutrals.html
│   ├─ color-semantic.html
│   ├─ type-display.html
│   ├─ type-scale.html
│   ├─ type-arabic.html
│   ├─ spacing.html
│   ├─ radii.html
│   ├─ shadows.html
│   ├─ buttons.html
│   ├─ inputs.html
│   ├─ cards.html
│   ├─ list-items.html
│   ├─ chips-badges.html
│   ├─ navbar.html
│   ├─ tab-bar.html
│   └─ icons.html
│
└─ ui_kits/
    └─ mobile_app/              ← Arabic-first iOS/Android UI kit
        ├─ index.html           ← interactive click-thru
        ├─ README.md
        └─ components/*.jsx
```

---

## 4. Content Fundamentals

### Voice
Calm · medically confident · refined · reassuring. Treat the reader as a respected guest of a luxury clinic, not a customer being sold to.

### Tone — DO
- ✓ Calm, medically confident — هادئ، واثق طبيًا
- ✓ Premium, refined language — لغة راقية ومصقولة
- ✓ Reassuring, expert-led — مطمئن، بقيادة الخبراء
- ✓ Clear, direct, informative — واضح، مباشر، مفيد

### Tone — DON'T
- ✗ Romantic, flowery language
- ✗ Casual slang or colloquial tone
- ✗ Exaggerated beauty claims ("miracle", "instant glow")
- ✗ Aggressive sales language ("limited offer!", "don't miss out")

### Casing & punctuation
- Section titles in English: Title Case (e.g. *Our Services*, *Book an Appointment*).
- All-caps reserved for tiny eyebrow labels with wide tracking (`PREMIUM CARE · رعاية متميزة`).
- Bilingual labels separated by a middle dot `·` not a slash. EN first on EN screens, AR first on AR screens.
- Em-dash `—` used for elegant pauses ("Expert care — every visit").
- Avoid exclamation marks. One trailing period is enough.

### Pronouns
- Arabic: address the user with respectful formal verbs ("احجزي / احجز موعدك", "نحن نعتني بكِ"). Avoid overly casual `أنت` constructions for premium screens.
- English: "you / your" — never "we welcome our guests" 3rd-person filler. Plain second-person.

### Emoji & icon-glyphs
- **No emoji in product UI.** Only soft glyph accents the brand uses sparingly: `✦` (eight-point star, brand mark), `◈`, `⚕`. Even these are decorative; do not pile them on.
- Unicode middle-dot `·` is the official EN/AR connector.

### Examples of on-brand copy
- ✓ "Book an appointment — احجز موعدك"
- ✓ "Specialists who care for you, end to end."
- ✓ "Your treatment plan is ready."
- ✗ "🌸 Glow up with us today!! 🌸"
- ✗ "Get the BEST results FAST!"

---

## 5. Visual Foundations

### Colors
Primary palette is **deep clinical green** (`--g1` to `--g5`); accent is **champagne gold** (`--au1` to `--au5`); base canvas is a **warm white / beige neutral** (`--n1`, `--n2`).

- **60 / 30 / 10 ratio** — neutrals dominate (warm white surfaces), green carries brand presence, gold appears only as accent / CTA / divider.
- Never saturated — every hue is slightly desaturated, almost dusted. No neon. No web-blue.
- Gold is the *only* color used in gradients, and only on small surfaces (buttons, badges, dividers): `linear-gradient(135deg, var(--au3), var(--au2))`. Never full-page gradients.
- Dark surfaces use `--g1` (`#1a3328`), not pure black. Pair with `var(--au3)` text for editorial moments.

### Typography
- **English serif (display/headings):** Cormorant (variable, supplied by brand) — italic at the largest size, upright at H2/H3. File: `fonts/Cormorant-VariableFont_wght.ttf`.
- **English sans (body/UI):** DM Sans (variable). File: `fonts/DMSans-VariableFont_opsz_wght.ttf`.
- **Arabic display:** Tajawal (regular, supplied by brand) — primary Arabic family. File: `fonts/Tajawal-Regular.ttf`.
- **Arabic body:** Tajawal — with Noto Kufi Arabic (variable, supplied by brand) as a heavier-weight fallback. File: `fonts/NotoKufiArabic-VariableFont_wght.ttf`.
- **Hierarchy:** Display 48 → H1 32 → H2 24 → H3 20 → Body 15 → Caption 11. (Mobile values; bump 1.2× for tablet.)
- Tracking: tight on headings (`-.01em`), generous on labels (`+.18em` uppercase).

### Backgrounds
- **No photography in the system itself** — leave `<image-slot>`s for the brand to fill with their own clinical-yet-warm photography (soft lighting, neutral tones, no over-edited filters — per brand book).
- Base app background: `--n1` warm white. Hero / editorial blocks: `--g1` deep green or `--au5` cream.
- **No noisy textures.** A *very* subtle radial-gold glow (`radial-gradient(circle, rgba(212,170,78,.08) 0%, transparent 70%)`) is allowed in corners of dark hero blocks.
- Patterns: none. Hand-drawn illustrations: none. The lotus icon is the only repeating motif.

### Animation
- **Motion is minimal and slow-feeling.** 200–320 ms, `cubic-bezier(.2,.8,.2,1)` (ease-out).
- Fades + 8-px translate on enter. No bounces. No springs that overshoot. No parallax.
- Page transitions: cross-fade (iOS push allowed natively).

### Hover / press states
- **Hover** (touch devices rarely show this; relevant on web previews): card lifts `translateY(-2px)`, shadow goes from `--sh-2` to `--sh-3`, border color shifts from `--n3` to `--au3`.
- **Press / active:** 96% scale + 200ms; or background dims by `rgba(0,0,0,.04)`. No color change.
- Buttons: press = shadow softens, no shrink-and-bounce.

### Borders
- 1px hairlines only, color `--n3` (warm beige) — never `#000` or pure gray.
- Borders are **optional**: prefer separation by background tint or shadow over a visible line.
- Dark surfaces: borders become `rgba(255,255,255,.08)`.

### Shadows
- Soft, vertical, low-opacity, green-tinted (`rgba(26,51,40,.06)`).
- Five tiers: `--sh-1` resting → `--sh-4` modal. Gold buttons get `--sh-gold`.
- No inner glows. `--sh-inset` available for sunken inputs but used sparingly.

### Transparency & blur
- `backdrop-filter: blur(12px)` on floating bottom-tab-bar and modal sheets, with `rgba(255,255,255,.72)` fill.
- Dark badges over imagery: `rgba(0,0,0,.25)` + `blur(4px)`.

### Corner radii
- **Soft, smooth.** App default `--r-lg` 16. Cards 16–20. Pills 999. Buttons 8 (regular) or 999 (pill CTA). Sheets 24 (top corners only).
- Never sharp corners. Never 32+ — only 24 for full sheets.

### Cards
- White surface, 16–20px radius, `--sh-2` shadow, **no border by default**. Optional `1px solid var(--n3)` only when the card sits on white.
- Padding: `--s-5` to `--s-6` (20–24).
- Inner image area, if any, fills full bleed of the card (no inner margin).

### Layout rules
- Single-column on mobile. Generous gutters (`--s-4` minimum on screen edges, `--s-5` preferred).
- Vertical rhythm by `--s-6` (24) between sections.
- Fixed elements: status-bar safe-area top, floating tab-bar bottom, optional FAB at bottom-right (LTR) / bottom-left (RTL).
- **Spacious & minimal** — never more than 2 cards above the fold on a phone screen.

### RTL specifics
- All flex rows mirror automatically via `dir="rtl"`. Icons that imply direction (chevron, back arrow, send) flip; icons that are symbols (heart, star, lotus) do not.
- Numerals: keep Arabic-Indic where appropriate (٠١٢٣٤٥٦٧٨٩), but Latin digits are acceptable for prices and times in mixed-language UI.

---

## 6. Iconography

**Approach:** thin-stroke, rounded line icons that read as calm and clinical-luxury — never filled emoji-style, never neon-duotone.

- **Built-in icon font:** none provided in source materials.
- **Substitution:** **Lucide** (`lucide.dev`) is used as the closest match — uniform 1.5–2 px stroke, rounded line caps, generous proportion. ⚠ Flagged: this is a substitute. If Molaglora has a custom icon set, replace `<i data-lucide="…">` calls and remove the CDN line.
- **Loading:** `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()` after render.
- **Color & size:** stroke = `currentColor`. Default 20×20 inline, 24×24 in tab bars, 16×16 inline-with-text.

**Brand glyphs (NOT icons, used for decoration only):**
- `✦` eight-point star — taken from the lotus mark (the gold star at its center). Use sparingly as a divider or eyebrow accent.
- `◈` `⚕` — used in brand book section headers; treat as historical, prefer Lucide for product UI.

**Logos (in `assets/`)**
- `logo-horizontal.svg` — primary, for headers when width allows.
- `logo-vertical.svg` — stacked, for splash / login / about.
- `logo-icon.svg` — lotus mark alone, for app icon, avatars, favicon, small spaces.

**Emoji:** never in product UI. The brand book uses ✓ ✗ for DO/DON'T lists; we keep that convention only for content authoring docs, not user-facing screens.

**Photography (placeholder strategy):** every product screen with imagery uses an `<image-slot>` so the brand can drop its own photos in. We do not generate or copy stock photography.

---

## 7. Caveats

- **Arabic fonts.** The brand has supplied **Tajawal** (regular) and **Noto Kufi Arabic** (variable) — both used. ⚠ Tajawal-Regular is a single weight; supply additional weights (300/500/700) if you need richer hierarchy.
- **Icon set.** Lucide is a substitute — see above.
- **No photography or illustrations** were in the source. The system uses image-slot placeholders.
- **No Figma or codebase** was provided. The mobile UI kit is built from the brand visual language — not copied from existing screens.
