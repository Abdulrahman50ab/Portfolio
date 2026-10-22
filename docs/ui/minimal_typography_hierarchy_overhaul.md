# Minimalist Hierarchy & Typography Pairing Overhaul

## 1. Overview & Objective
In response to visual congestion and excessive text fatigue, the entire portfolio interface was systematically refactored to achieve a calm, scannable, and minimal reading hierarchy. The noisy monospace font stack was completely eliminated in favor of an authoritative, high-legibility typographic pairing (`Plus Jakarta Sans` for display/headings and `Inter` for interface and body copy).

---

## 2. Typographic Architecture & Font Pairing

### Previous Deficiencies
- Monospaced typography (`JetBrains Mono`) applied across section tags, timestamps, navigation items, metrics, and badges (`[ 01 ] // ...`).
- Wide kerning and robotic character widths created severe visual friction, giving the site a cluttered "raw terminal" appearance rather than a sleek, minimal portfolio.

### Refactored System
- **Headings & Display (`font-heading`):** `Plus Jakarta Sans` (weights 600, 700) with subtle negative optical tracking (`tracking-tight` or `-0.02em`) for geometric punch.
- **Body, UI, Metadata & Badges (`font-sans`):** `Inter` (weights 400, 500, 600) for comfortable x-height, rapid scanning, and natural reading rhythm.
- **Tabular Figures:** Preserved numerical alignment via CSS `tabular-nums` without forcing unnatural monospace glyphs.

---

## 3. Section-by-Section Simplification & Decluttering

### Header (`Header.tsx`)
- Eliminated all artificial numeric prefixes (`01`, `02`, `03`, `04`).
- Streamlined navigation to clean, intuitive anchors (`About`, `Projects`, `Skills`, `Contact`).
- Refined live availability status: discrete green indicator with clean "Available for hire" label.
- Refactored CTA into a crisp, low-profile primary button.

### Hero (`Hero.tsx`)
- Removed noisy top monospaced status strip (`[ 01 ] // Software Engineer & Mobile Specialist`).
- Replaced the verbose 4-line technical buzzword paragraph with a punchy, human 2-sentence summary.
- Transformed the heavy 4-column data strip into an airy, scannable metric row (`3+ Years Experience`, `15+ Shipped Works`, `3.93 CGPA`, `IntelliG Current Role`).
- Removed redundant bottom social channels row.
- Preserved a clean portrait frame with subtle hairline border and natural corner radius (`rounded-2xl`).

### About (`About.tsx`)
- Purged 3 redundant "Architectural Tenets" cards that were dumping repetitive blocks of text.
- Formatted narrative into two clear, readable paragraphs focusing on mobile performance and intelligent systems.
- Created an elegant, compact Academic Distinction card (`BS Computer Science · Riphah Intl. · 3.93 / 4.00 CGPA`).
- Streamlined professional work trajectory into 2 concise company entries with primary tech tags.

### Projects (`Projects.tsx`)
- Curated project descriptions to concise 1–2 sentence statements explaining purpose and real impact.
- Reduced technology tags from an overwhelming 8 tags per card down to 3–4 essential keywords.
- Standardized clean category filter pills (`All`, `Mobile`, `Generative AI`, `Web`, `Systems`) and a minimal search input.
- Clear action links: direct GitHub repository and live demo links with vector icons.

### Skills & Capabilities (`Skills.tsx`)
- Eliminated 32 redundant micro-level status badges ("Primary Specialty", "Production Deployed", "Spatial Engineering", etc.) that induced reading fatigue.
- Organized skills into 4 clean domain cards (Mobile Core, Generative AI, Web Frontend, Backend/Cloud) using lightweight, pill-style tags.

### Contact & Inquiries (`Contact.tsx`)
- Streamlined communication options: 1-click email copy, WhatsApp direct message, and location details.
- Clean, focused inquiry form with distraction-free inputs and instant feedback states.

### Footer (`Footer.tsx`)
- Removed massive colophon, redundant directory duplicates, and live seconds clock.
- Clean 1-line identity, essential navigation anchors, crisp vector social links, and a back-to-top trigger.

---

## 4. Verification & Quality Assurance
- **Lint Check (`npm run lint`):** 0 errors, 0 warnings.
- **Production Build (`npm run build`):** Clean compilation in ~4.5 seconds with optimal chunk sizing.
