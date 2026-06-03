# Literacy for Kids — Image Production Brief

## How to Use This Document

This file is the authoritative inventory of all imagery needed across the Literacy for Kids GitHub organization. It is organized by site. Each entry specifies the filename (matching what the code actually references), the required dimensions and format, where the image is used, a description specific enough to generate or commission the image, and a priority level.

**Priority levels:**
- **High** — blocking or visibly broken (empty favicon, missing og:image)
- **Medium** — present but placeholder-quality, or needed to match the pattern the code expects
- **Low** — enhancement; code doesn't break without it

Work high-priority items first. All 9 curriculum sites share a common visual language; establish the hub palette and logo standards before generating per-site assets.

---

## Design Direction (Global)

**Target audience:** Children ages 8–12 and their adult facilitators (parents, teachers, homeschool families, community educators).

**Tone:** Approachable and intelligent — "curious kid" not "cartoon mascot." The curriculum content is substantive; the visual design should feel like a well-designed children's reference book, not an edutainment app. Think clear line art over bright gradients.

**Color palette — extracted from existing codebase:**

| Site | Accent color (hex) | Usage |
|------|--------------------|-------|
| Hub (literacy_for_kids) | No established color — recommend a warm neutral or slate | Hub-wide |
| Computer Literacy | `#4a90d9` (blue) | CSS primary (light mode) |
| Financial Literacy | `#4a90d9` (blue, placeholder — recommend gold/green) | CSS primary |
| Decision Literacy | `#4a90d9` (blue, placeholder — recommend orange/amber) | CSS primary |
| Media Literacy | `#4a90d9` (blue, placeholder — recommend red/orange) | CSS primary |
| Civic Literacy | `#4a90d9` (blue, placeholder — recommend indigo/navy) | CSS primary |
| Legal Literacy | `#b45309` (amber/brown) | Logo + CSS primary |
| Emotional & Social Literacy | `#7c3aed` (purple) | Logo + CSS primary |
| Environmental Systems | `#166534` (dark green) | Logo + CSS primary |
| Health Systems | `#0e7490` (teal/cyan) | Logo + CSS primary |

Note: The original five curricula (Computer, Financial, Decision, Media, Civic) share a single placeholder blue (#4a90d9) and identical placeholder logos. When creating proper logos for these sites, assign each a distinct accent color so the nine curricula are visually distinguishable.

**Style guidance:**
- Flat illustration or clean line art — not photorealistic stock photography
- Icons and logos: geometric, minimal, readable at 32px
- Hero images: scene-based, showing a child or children in a relevant setting (not abstract)
- Consistent line weight and illustration style across all sites
- SVG for all logos and icons; PNG at 2× resolution for raster images
- OG images: include the curriculum title text as part of the image composition

**File format requirements:**
- `favicon.ico`: multi-size ICO file (16×16, 32×32, 48×48) — or a 32×32 PNG named `favicon.png` if the site config is updated
- `logo.svg`: 200×200 viewBox, scalable, no embedded raster content
- `hero-image.png`: export at 1600×900 (displays at ~800×450), PNG, compressed
- `roadmap.png`: export at 1600×900 (displays at ~800×450), PNG, compressed
- `og-image.png`: 1200×630, PNG — no transparency (social platforms fill transparent areas unpredictably)

---

## Per-Site Image Inventory

---

### Hub — literacy_for_kids

**Site URL:** https://literacy-for-kids.github.io/literacy_for_kids/
**Existing images:** `static/img/og-image.png` ✅, `static/img/logo.svg` ✅ — navbar `logo:` field wired in config
**Theme color:** Not yet established

**Image status:**

---

**File name:** `static/img/og-image.png`
**Dimensions:** 1200×630 px
**Used in:** Social media preview (og:image). `image: 'img/og-image.png'` is set in `themeConfig` in `docusaurus.config.js`.
**Description:** A wide horizontal composition showing all nine curriculum subjects represented as small illustrated icons arranged around a central open book or lit lightbulb. Icons should include: a laptop (Computer), a dollar sign or wallet (Financial), a branching decision tree (Decision), a newspaper or magnifying glass (Media), a government building or ballot box (Civic), a balance scale (Legal), two interlocking puzzle pieces or a heart (Emotional & Social), a globe showing continents (Environmental), and a stethoscope or heart rate line (Health). Clean flat illustration style on a warm off-white or light slate background. The title "Literacy for Kids" appears at top or bottom in a bold, friendly sans-serif typeface.
**Priority:** High
**Status:** ✅ Done

---

**File name:** `static/img/logo.svg`
**Dimensions:** 200×200 viewBox
**Used in:** Navbar logo, browser bookmarks
**Description:** A compact square icon — either a stylized open book with small icons of each curriculum subject on the pages, or a nine-square grid of the nine curriculum accent colors (one per subject). Clean lines, readable at 32px. Should feel like an organization mark rather than a single-curriculum logo. Background: warm neutral or slate. Text or wordmark: none (used at small sizes alongside the text title "Literacy for Kids").
**Priority:** Medium
**Status:** ✅ Done

---

### Computer Literacy — computer_literacy_for_kids

**Site URL:** https://literacy-for-kids.github.io/computer_literacy_for_kids/
**Existing images:**
- `favicon.ico` — ✅ replaced with custom icon
- `logo.svg` — ✅ replaced with custom logo
- `hero-image.png` — 2.3 MB, real image (exists and renders)
- `roadmap.png` — 1.9 MB, real image (exists and renders)

**Image status:**

---

**File name:** `website/static/img/favicon.ico`
**Priority:** High
**Status:** ✅ Done

---

**File name:** `website/static/img/logo.svg`
**Dimensions:** 200×200 viewBox
**Used in:** Navbar logo (displayed at ~32×32 px), og:image fallback
**Description:** A laptop or desktop monitor icon with a small circuit or wifi symbol integrated into the screen. Primary fill: #4a90d9 (blue). White details on the screen. Clean geometric shapes, no gradients, readable at 32px.
**Priority:** Medium
**Status:** ✅ Done

---

### Financial Literacy — financial_literacy_for_kids

**Site URL:** https://literacy-for-kids.github.io/financial_literacy_for_kids/
**Existing images:**
- `favicon.ico` — ✅ replaced with custom icon
- `logo.svg` — ✅ replaced with custom logo
- `hero-image.png` — 2.3 MB, real image
- `roadmap.png` — 2.6 MB, real image

**Image status:**

---

**File name:** `website/static/img/favicon.ico`
**Priority:** High
**Status:** ✅ Done

---

**File name:** `website/static/img/logo.svg`
**Dimensions:** 200×200 viewBox
**Used in:** Navbar logo
**Description:** A stylized coin stack, piggy bank, or dollar sign composed of clean geometric shapes. Recommended accent color: gold/olive (#ca8a04) or forest green (#16a34a). No gradients; one or two flat fill colors. Readable at 32px.
**Priority:** Medium
**Status:** ✅ Done

---

### Decision Literacy — decision_literacy_for_kids

**Site URL:** https://literacy-for-kids.github.io/decision_literacy_for_kids/
**Existing images:**
- `favicon.ico` — ✅ replaced with custom icon
- `logo.svg` — ✅ replaced with custom logo
- `hero-image.png` — 2.5 MB, real image
- `roadmap.png` — 2.9 MB, real image

**Image status:**

---

**File name:** `website/static/img/favicon.ico`
**Priority:** High
**Status:** ✅ Done

---

**File name:** `website/static/img/logo.svg`
**Dimensions:** 200×200 viewBox
**Used in:** Navbar logo
**Description:** A simple branching decision-tree diagram — one node splitting into two or three paths — or a brain outline with a small fork/path overlaid. Recommended accent: orange/amber (#ea580c). Clean, geometric, two flat colors.
**Priority:** Medium
**Status:** ✅ Done

---

### Media Literacy — media_literacy_for_kids

**Site URL:** https://literacy-for-kids.github.io/media_literacy_for_kids/
**Existing images:**
- `favicon.ico` — ✅ replaced with custom icon
- `logo.svg` — ✅ replaced with custom logo
- `hero-image.png` — 2.8 MB, real image
- `roadmap.png` — 3.2 MB, real image

**Image status:**

---

**File name:** `website/static/img/favicon.ico`
**Priority:** High
**Status:** ✅ Done

---

**File name:** `website/static/img/logo.svg`
**Dimensions:** 200×200 viewBox
**Used in:** Navbar logo
**Description:** A newspaper front page folded in half, or a magnifying glass over a document. Recommended accent: red-orange (#dc2626). Clean, geometric, no small text. Two flat fill colors.
**Priority:** Medium
**Status:** ✅ Done

---

### Civic Literacy — civic_literacy_for_kids

**Site URL:** https://literacy-for-kids.github.io/civic_literacy_for_kids/
**Existing images:**
- `favicon.ico` — ✅ replaced with custom icon
- `logo.svg` — ✅ replaced with custom logo
- `hero-image.png` — 2.5 MB, real image
- `roadmap.png` — 1.9 MB, real image

**Image status:**

---

**File name:** `website/static/img/favicon.ico`
**Priority:** High
**Status:** ✅ Done

---

**File name:** `website/static/img/logo.svg`
**Dimensions:** 200×200 viewBox
**Used in:** Navbar logo
**Description:** A simplified government building or capitol dome with three columns, or a ballot box with a paper being inserted. Recommended accent: indigo (#4338ca). Clean, flat, geometric. No fine details that disappear at 32px.
**Priority:** Medium
**Status:** ✅ Done

---

### Legal Literacy — legal_literacy_for_kids

**Site URL:** https://literacy-for-kids.github.io/legal_literacy_for_kids/
**Existing images:**
- `favicon.ico` — ✅ replaced with custom icon
- `logo.svg` — ✅ replaced with custom logo
- `hero-image.png` — ✅ 2.5 MB, real image
- `roadmap.png` — ✅ added

**Image status:**

---

**File name:** `website/static/img/favicon.ico`
**Priority:** High
**Status:** ✅ Done

---

**File name:** `website/static/img/logo.svg`
**Dimensions:** 200×200 viewBox
**Used in:** Navbar logo, og:image fallback (`image: 'img/logo.svg'` in config)
**Description:** A balance scale icon drawn with clean geometric lines — two pans suspended from a central bar on a triangular fulcrum. Primary fill: amber (#b45309). Details in white or a lighter amber tone. Clean geometric paths, not emoji-based.
**Priority:** Medium
**Status:** ✅ Done

---

**File name:** `website/static/img/hero-image.png`
**Dimensions:** 1600×900 px (displays at ~800×450)
**Used in:** Homepage hero banner (if/when index.js is updated to match the pattern used by the original five sites). Not currently referenced in code.
**Description:** A flat illustration showing a child (age 8–12) at a table with a document that has stamps, signatures, or a scale of justice visible. The setting is neutral — a library or kitchen table — with soft warm amber tones matching the site's accent color (#b45309). The child looks curious and engaged, not intimidated by the legal material. Style consistent with an illustrated reference book.
**Priority:** Low
**Status:** ✅ Done (not yet wired into index.js)

---

**File name:** `website/static/img/roadmap.png`
**Dimensions:** 1600×900 px (displays at ~800×450)
**Used in:** Curriculum roadmap section. HomepageFeatures wired to display it.
**Description:** A horizontal visual roadmap showing the 18-week Legal Literacy curriculum arc: starting from "What are rules?" through contracts, rights, courts, and dispute resolution. Illustrated as a winding path with milestone markers. Amber accent color scheme. Flat, clear, legible at half-size.
**Priority:** Low
**Status:** ✅ Done

---

### Emotional & Social Literacy — emotional_and_social_literacy_for_kids

**Site URL:** https://literacy-for-kids.github.io/emotional_and_social_literacy_for_kids/
**Existing images:**
- `favicon.ico` — ✅ replaced with custom icon
- `logo.svg` — ✅ replaced with custom logo
- `hero-image.png` — ✅ 2.8 MB, real image
- `roadmap.png` — ✅ added

**Image status:**

---

**File name:** `website/static/img/favicon.ico`
**Priority:** High
**Status:** ✅ Done

---

**File name:** `website/static/img/logo.svg`
**Dimensions:** 200×200 viewBox
**Used in:** Navbar logo, og:image fallback
**Description:** Two interlocking puzzle pieces — one slightly larger (representing self-awareness) clicking into a second (representing social connection). Primary fill: purple (#7c3aed). Details in lavender or white. Clean geometric paths, no emoji characters.
**Priority:** Medium
**Status:** ✅ Done

---

**File name:** `website/static/img/hero-image.png`
**Dimensions:** 1600×900 px
**Used in:** Homepage hero banner (not currently referenced in code)
**Description:** A flat illustration showing two or three children of different backgrounds sitting together — one appears to be sharing a feeling (thought bubble showing a wavy emotional symbol), the others are listening attentively. Warm, inclusive, calm scene. Purple accent tones in clothing or background elements. Conveys empathy and genuine listening without being cartoonish.
**Priority:** Low
**Status:** ✅ Done (not yet wired into index.js)

---

**File name:** `website/static/img/roadmap.png`
**Dimensions:** 1600×900 px
**Used in:** Curriculum roadmap section. HomepageFeatures wired to display it.
**Description:** A visual roadmap for the 18-week Emotional & Social Literacy curriculum: from identifying internal emotional signals through understanding social networks, empathy, conflict, and collaboration. Illustrated as an interconnected path or web rather than a straight line, to reflect the non-linear nature of social learning. Purple color scheme.
**Priority:** Low
**Status:** ✅ Done

---

### Environmental Systems Literacy — Environmental_system_literacy_for_kids

**Site URL:** https://literacy-for-kids.github.io/Environmental_system_literacy_for_kids/
**Existing images:**
- `favicon.ico` — ✅ replaced with custom icon
- `logo.svg` — ✅ replaced with custom logo
- `hero-image.png` — ✅ 2.9 MB, real image
- `roadmap.png` — ✅ added

**Image status:**

---

**File name:** `website/static/img/favicon.ico`
**Priority:** High
**Status:** ✅ Done

---

**File name:** `website/static/img/logo.svg`
**Dimensions:** 200×200 viewBox
**Used in:** Navbar logo, og:image fallback
**Description:** A globe outline (circle with a few simplified continental shapes) or a stylized leaf with vein lines suggesting systems and interconnection. Primary fill: dark green (#166534). Details in lighter green or white. Clean geometric paths — no emoji.
**Priority:** Medium
**Status:** ✅ Done

---

**File name:** `website/static/img/hero-image.png`
**Dimensions:** 1600×900 px
**Used in:** Homepage hero banner (not currently referenced in code)
**Description:** A flat illustration showing a child examining a cross-section diagram of Earth's systems — water cycle, soil layers, or weather patterns visible as labeled layers in the background. The child is curious and analytical, using a magnifying glass or pointing at a diagram. Dark green and earth-tone palette. Conveys scientific curiosity about planetary systems, not environmental alarm or doom.
**Priority:** Low
**Status:** ✅ Done (not yet wired into index.js)

---

**File name:** `website/static/img/roadmap.png`
**Dimensions:** 1600×900 px
**Used in:** Curriculum roadmap section. HomepageFeatures wired to display it.
**Description:** A visual roadmap of the 18-week Environmental Systems curriculum, from basic Earth systems (water, carbon, energy cycles) through ecosystems, human infrastructure, and waste systems. Illustrated as a layered diagram (like a cross-section of Earth) with milestone labels at each layer. Dark green color scheme.
**Priority:** Low
**Status:** ✅ Done

---

### Health Systems Literacy — health_literacy_for_kids

**Site URL:** https://literacy-for-kids.github.io/health_literacy_for_kids/
**Existing images:**
- `favicon.ico` — ✅ replaced with custom icon
- `logo.svg` — ✅ replaced with custom logo
- `hero-image.png` — ✅ 2.8 MB, real image
- `roadmap.png` — ✅ added

**Image status:**

---

**File name:** `website/static/img/favicon.ico`
**Priority:** High
**Status:** ✅ Done

---

**File name:** `website/static/img/logo.svg`
**Dimensions:** 200×200 viewBox
**Used in:** Navbar logo, og:image fallback
**Description:** A stethoscope — the circular head and curved tubing — drawn as clean geometric paths. Primary fill: teal (#0e7490). Earpiece tips and diaphragm rim in white or lighter teal. Alternatively: a heart outline with a single heartbeat line (ECG waveform) running through it. No emoji characters.
**Priority:** Medium
**Status:** ✅ Done

---

**File name:** `website/static/img/hero-image.png`
**Dimensions:** 1600×900 px
**Used in:** Homepage hero banner (not currently referenced in code)
**Description:** A flat illustration showing a child taking their own pulse or looking at a simple diagram of the human body's major systems (circulatory, respiratory, digestive shown as overlapping loops). The child has a notebook and is tracking observations — conveying scientific self-observation, not medical fear. Teal and warm neutral palette. Clean, calm, curious tone.
**Priority:** Low
**Status:** ✅ Done (not yet wired into index.js)

---

**File name:** `website/static/img/roadmap.png`
**Dimensions:** 1600×900 px
**Used in:** Curriculum roadmap section. HomepageFeatures wired to display it.
**Description:** A visual roadmap of the 18-week Health Systems curriculum, from basic body system overviews (circulatory, digestive, immune) through feedback loops, measurement, nutrition, and long-term maintenance. Illustrated as a looping path with milestone markers shaped like body system icons. Teal color scheme with warm neutral backgrounds.
**Priority:** Low
**Status:** ✅ Done

---

## Summary Table

| Site | Existing images | Broken images | High priority needed | Medium priority needed | Low priority needed |
|------|-----------------|---------------|---------------------|----------------------|-------------------|
| Hub (literacy_for_kids) | og-image.png ✅, logo.svg ✅ | — | — | — | — |
| Computer Literacy | favicon ✅, logo ✅, hero-image, roadmap | — | — | — | — |
| Financial Literacy | favicon ✅, logo ✅, hero-image, roadmap | — | — | — | — |
| Decision Literacy | favicon ✅, logo ✅, hero-image, roadmap | — | — | — | — |
| Media Literacy | favicon ✅, logo ✅, hero-image, roadmap | — | — | — | — |
| Civic Literacy | favicon ✅, logo ✅, hero-image, roadmap | — | — | — | — |
| Legal Literacy | favicon ✅, logo ✅, hero-image ✅, roadmap ✅ | — | — | — | — |
| Emotional & Social | favicon ✅, logo ✅, hero-image ✅, roadmap ✅ | — | — | — | — |
| Environmental Systems | favicon ✅, logo ✅, hero-image ✅, roadmap ✅ | — | — | — | — |
| Health Systems | favicon ✅, logo ✅, hero-image ✅, roadmap ✅ | — | — | — | — |
| **Totals** | **all images done** | **0** | **0** | **0** | **0** |

**All images complete.** No remaining production work.
