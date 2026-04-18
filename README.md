# Heree Design System

## 🔗 [**Live Prototype → heree-softwarehouse.github.io/heree-prototype**](https://heree-softwarehouse.github.io/heree-prototype/)

---

**Heree** (*heree.*) is a hyperlocal Polish neighborhood mobile app — "your street · your people" (*twoja ulica · twoi ludzie*). Users sign in with a phone number, see people and reports within ~500 m of their location on a map, and post short community reports (broken glass, bus detour, lost cat, local events). The core product is a **native-feeling iOS mobile app** with a distinctive editorial + warm-coral-on-navy visual language.

## Product context

- **One product:** Heree mobile app (iOS-native styling; 390×844 device frame used in source).
- **Language:** All copy is in **Polish**.
- **Flow in source:** Splash → Phone number → SMS OTP → Verification loader → Dashboard (map + bottom sheet feed). A "Tryb demo" (demo mode) lets users explore without an account.
- **Backend:** Not attached to this design system. The `heree-softwarehouse/heree-app` GitHub repo was empty on `main`, so the canonical source here is the working HTML/JSX prototype below.

## Sources

The canonical source used to build this system (linked Claude Design project — access required):
- Project: `https://claude.ai/design/p/088ea345-c6eb-4ede-bd45-74cc973bf67b`
- Canonical file: `Heree - Rejestracja.html` (navy + coral, Newsreader serif) — copied to `source/`
- Earlier variant: `Heree - Rejestracja v1.html` (warm-beige "Liquid Glass iOS", SF Pro) — copied to `source/` for reference only. The **V2 navy system is canonical**; V1 is legacy.
- All JSX screen components + `styles.css` from V1 preserved in `source/` for reference.

GitHub repo mentioned but empty at time of build:
- `heree-softwarehouse/heree-app` @ `main` — only contained an 11-byte README. No code, tokens, or assets.

## Index

- `README.md` — this file (overview, content, visual foundations, iconography)
- `colors_and_type.css` — all color + type tokens as CSS vars, plus semantic classes
- `SKILL.md` — entry point when this folder is loaded as an Agent Skill
- `assets/` — logo components + copied source reference
- `fonts/` — webfonts (loaded from Google Fonts; see notes)
- `preview/` — individual design-system cards (registered to the Design System tab)
- `source/` — the original HTML/JSX prototype copied verbatim
- `ui_kits/mobile/` — UI kit for the Heree iOS app (components + interactive `index.html`)

---

## CONTENT FUNDAMENTALS

**Language:** Polish, exclusively. Use second-person singular ("Ty", "Cię", "akceptujesz"), never plural formal.

**Tone:** Warm, playful, minimal-words. The app talks to you like a friendly neighbor, not a corporation. Confident but never pushy. Light sentence fragments are fine.

**Casing:**
- Sentence case for headings and buttons (`Wyślij kod`, `W sąsiedztwie`), never Title Case.
- Uppercase is reserved for mono eyebrows (`JESTEŚ W`, `TWOJA ULICA · TWOI LUDZIE`) rendered in JetBrains Mono with wide letter-spacing (0.16–0.24em).

**Copy motifs (pulled from source):**
- Splash tagline: *"twoja ulica · twoi ludzie"* (lowercase, mono eyebrow).
- Phone screen heading: *"Cześć **sąsiedzie**"* — serif italic emphasis on a single warm word.
- Phone screen body: *"Daj numer — wyślemy kod SMS. Bez maili, bez haseł. Zero spamu."* — short sentences, em-dashes, anti-spam promise.
- Phone CTA: *"Wyślij kod →"* (sentence case + arrow).
- OTP screen heading: *"Kod z **SMS-a**"* (italic-serif emphasis on "SMS-a").
- OTP status: *"Kod ważny 10 min"*, *"wyślij ponownie · 0:38"* (lowercase, mono for timer).
- Loading completion: *"Zweryfikowano"* / *"Jesteś w heree."*
- Dashboard header: *"W **sąsiedztwie**"* (serif italic emphasis).
- Demo banner: *"Tryb demo · przeglądasz bez konta"* → button *"Wyjdź ✕"*.
- Chips / meta: *"szyfrowane"*, *"500 m"*, *"14 aktywnych · 38 dziś"*.

**Emphasis pattern — ESSENTIAL:** Headings are sans-serif ... **wait, no**: headings in canonical V2 are `Newsreader` serif with **one word** in **italic serif + coral** (e.g. *sąsiedzie*, *SMS-a*, *sąsiedztwie*). This "editorial pull-quote" device is the brand's signature.

**Emoji:** Used **sparingly and purposefully**:
- Flag emoji (🇵🇱) in country picker — functional.
- Category icons on report cards in the warm V1 (🧹 🚌 🐕) — small, role-marker, never decorative.
- Canonical V2 phone CTA has no emoji; V1 headings used 👋 🔑 as single-glyph end-of-line accents.
- **Avoid decorative emoji in new work unless matching legacy V1 styling.**

**Punctuation:** Em-dashes (`—`) and middle dots (`·`) as separators. Rarely exclamation marks. Arrows `→` at end of CTAs.

**Don't:**
- Formal "Państwo" or "Proszę".
- Marketing superlatives ("najlepszy", "rewolucyjny").
- Long paragraphs — max 2 short lines of body per section.
- Technical jargon in UI copy.

---

## VISUAL FOUNDATIONS

### Palette
- **Dominant:** deep navy `#060A14 → #0B1220` (app base), graduated through `--bg-2/3/4` for card elevation.
- **Warm accent:** coral `#FF7A45` — used on CTAs, active states, pins, emphasis. Soft `#FFA478`, deep `#E85F2C`, gloss top `#FFC368` for gradient buttons.
- **Secondary accents:** amber `#FFC368` (info / demo banner), teal `#5DD4B0` (success, tertiary pins).
- **Semantic:** danger `#FF6B7A`, warning = amber, success = teal, info `#9DB6FF`.
- **Text:** `#F5F7FA` (primary AAA), `#B8C2D0` (secondary AAA), `#7A8499` (tertiary AA).
- **Burgundy tint** (`#3A1220 → #2A0D16`) — used on Dashboard bottom sheet only, warming the feed area without leaving the dark palette.

### Type
- **Serif display:** `Newsreader` (Google Fonts) for headings and single-word italic emphasis (the brand signature).
- **Sans UI:** system stack (SF Pro / Inter Tight fallback) for body, buttons, inputs.
- **Mono:** `JetBrains Mono` for eyebrows (uppercase, 10px, 0.18em letter-spacing), timers, distances, meta labels, stage indicators.
- **Tabular numerals** (`.num`) for all numbers, phone digits, OTP cells, timers.

### Backgrounds
- **Layered radial gradients** on every surface — never flat fills.
- App-level: 3–4 stacked `radial-gradient()`s (faint coral top-left, teal bottom-right, navy vignette).
- Body-level: stronger navy radials with coral bleed in corners.
- Never uses photography or illustration as background; the warmth comes from gradient blooms and blur-glows.
- The Dashboard bottom sheet switches to a **burgundy gradient** — the only place warm-dark is used as a surface.

### Borders & strokes
- **0.5px** hairlines are standard (uses sub-pixel rendering on Retina).
- `--stroke` (rgba 184,194,208 / 0.14) for resting surfaces, `--stroke-strong` (0.28) for elevated/interactive.
- Active inputs: **1px coral** + a 4px coral glow halo (`box-shadow: 0 0 0 4px rgba(255,122,69,0.11)`).

### Cards & surfaces
- **Glass:** `rgba(184,194,208,0.08)` background, 20px backdrop-blur saturated 180%, 0.5px stroke, inset top-highlight + 6px / 24px outer shadow.
- **Radii:** 14–18px for inline cards; 16px for OTP cells; 28px top-corners on bottom sheets; **pill (100px)** for chips, buttons, toggles.
- **No drop-shadows on light backgrounds** — shadows are always on the dark base and tend to be sheet-scale (`0 -20px 40px`) not card-scale.

### Shadows
- **Device frame:** `0 60px 120px -20px rgba(0,0,0,0.75)` + layered inset highlights.
- **Primary CTA:** coral `0 10px 24px -4px rgba(255,122,69,0.45)` + top-white inset gloss.
- **Bottom sheet lift:** `0 -20px 40px rgba(0,0,0,0.5)` (shadow cast upward).
- **Resting cards:** pure glass — no outer shadow beyond the 6px/24px built into `.glass`.

### Blur & transparency
- `backdrop-filter: blur(20px) saturate(180%)` is the universal "glass" recipe; sheets use 30px.
- Transparency is used only on interactive UI (inputs, chips, buttons, sheets) — never on text or content.
- Behind sheets/modals: 40% navy scrim + 8px backdrop blur.

### Motion
- **Ease:** custom `cubic-bezier(.2,.7,.2,1)` for scene transitions (350ms); `cubic-bezier(.3, 1.4, .5, 1)` for pop-ins (scaleIn).
- **Entrance:** scenes ease-in a 6px `translateY` over 350ms.
- **Pulse:** splash pin pulses 2s infinite; rings `ping` 1.4s (scale 1→3, opacity 0.8→0).
- **Shake:** error OTP shakes ±8/10/7/3 px over 500ms.
- **Spinner:** coral conic-gradient arc, 1.2s linear.
- **Keyboard press:** scale(0.98), transform 120ms.
- Respect `prefers-reduced-motion` — disable scene-in only.

### Hover / press
- **Primary button:** hover `translateY(-1px)`; press `scale(0.98)`.
- **Ghost button / chip:** hover adds `rgba(184,194,208,0.08)` fill.
- **Input focus:** coral stroke + 4px coral-11%-alpha halo.
- No dark-mode-vs-light hover; the app is dark-first.

### Layout rules
- **Device-centered:** all content lives inside a 390×844 fixed canvas inside a 56px-radius device bezel.
- **Dynamic island** (124×36, pure black, top:11px) is always rendered.
- **Home indicator** (134×5, rgba white 0.45, bottom:8px) always rendered.
- **Scene padding:** top 54px (status bar) + 16–22px; horizontal 20–22px; bottom 28–30px.
- **Stage label + dots** sit OUTSIDE the device — 10px mono uppercase, chevron-progress dots.

### Corner radii system
- 100px — pills, chips, buttons, toggles
- 56px — device outer
- 46px — device inner (screen)
- 28px — bottom sheet top corners, primary button
- 22px — secondary pill button
- 18px — input shell
- 16px — OTP cell, report card
- 14px — inline status card

### Imagery vibe
- No photography in source. All "imagery" is geometric: SVG map patterns (40px grid, coral stroke 0.13 alpha), stylized streets (quadratic Béziers, white + cream), and labeled ellipses for parks/green space (teal at 10% alpha).
- Pins are solid-colored circles with colored glow and `ping` animation.
- When real imagery is added, target: **warm-tinted, cool-shadowed**, slight grain OK, avoid oversaturated.

### Signature "tells" (the brand DNA)
1. **Italic-serif single word** (`sąsiedzie`, `SMS-a`) in coral, embedded in a sans/serif heading.
2. **Mono eyebrow** with middle-dots (`JESTEŚ W ·` / `● 14 aktywnych · 38 dziś`).
3. **Coral dot after the wordmark:** `heree.` where the period is `var(--accent)`.
4. **Conic-gradient coral spinner** inside a navy disc.
5. **Progress dots outside the device** — inactive dots are 5px circles, active dot is an 18px coral capsule with glow.
6. **Pin-with-ping** layered map dots (solid color + 2px border + `ping` aura).

---

## ICONOGRAPHY

**System:** Inline hand-coded SVGs drawn at 24×24 viewBox, **1.6–2px strokeWidth**, `strokeLinecap="round"`, `strokeLinejoin="round"`. No fills on outline icons (fill="none", `stroke="currentColor"`). Small icons (14–18px) use 1.5–1.6px stroke; larger icons use 2px. **No icon font**, **no SVG sprite**, **no icon library** in source.

The canonical V2 icon set (see `source/Heree - Rejestracja.html`):
- `Arrow`, `Back` — arrows with chevron
- `Check` — checkmark (used inside coral discs on success)
- `X` — close
- `Lock` — padlock (used on "szyfrowane" chip)
- `Pin` — map pin
- `Restart` — circular-arrow reload
- `Sparkle` — 4-point star (used for "wypróbuj demo")
- `Heart` — filled heart

**Emoji as icons:** Legacy V1 Dashboard uses category emoji (🧹 🚌 🐕 🎸 🎲 ☕ 🏃 🎵 🎲 👋) as small role-markers on report cards and filter chips. Canonical V2 kept this pattern only for report categories on the Dashboard feed — the splash/phone/OTP/loading scenes have zero emoji.

**Unicode chars as icons:** `·` (middle dot, U+00B7) heavily used as separator in mono strings. `→` arrow at end of CTAs. `●` as filled-circle marker in eyebrows.

**Flags:** Emoji (🇵🇱 🇩🇪 🇬🇧 🇺🇸 🇫🇷 🇪🇸 🇮🇹 🇺🇦) in the country picker. These are correct to keep — phone-country selectors standardize on emoji flags.

**Recommended workflow for new icons:**
1. First, check the copied source icon set in `source/Heree - Rejestracja.html` (the `Ic` object). Reuse if present.
2. If missing, use **Lucide** (https://lucide.dev) — same 24×24, 2px, round-cap, round-join style; load via CDN `<script src="https://unpkg.com/lucide@latest"></script>`. Flag this as substitution if used in production.
3. Never use Heroicons solid, Material Icons, or any filled/duotone set — it clashes with the outline system.
4. Never draw "logo-like" SVGs; keep new SVGs functional.

---

## Font substitution notes

⚠️ **No local font files were included** with the source project — fonts load from Google Fonts:
- `Newsreader` (serif display / italic emphasis)
- `Inter Tight` (sans fallback under SF Pro)
- `JetBrains Mono` (mono)

These are all open-source Google Fonts, so there's no substitution — but if Heree ships with a brand-licensed custom serif or sans, **please provide the font files** and I'll swap them in under `fonts/`.

---

## Caveats

- Heree's actual codebase (`heree-softwarehouse/heree-app`) was empty; this system is built **entirely from the HTML/JSX prototype** in the linked Claude Design project. Production component code may diverge.
- The "V1 warm Liquid Glass" variant is preserved in `source/` but **not represented in the tokens or UI kit** — I've taken V2 navy as canonical. If V1 is the intended direction, say the word and I'll re-flip.
- All copy is Polish; no English strings exist. If Heree expands internationally, a string-system review will be needed.
