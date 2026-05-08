# Mages CYOA — Project Context

## File Map

```
C:\Users\CIRILO\Desktop\Coding Shenanigans\Mages\
├── index.html                    (830+ lines) — Single-page app entry, all 5 pages + modal
├── css/
│   └── styles.css                (1200+ lines) — All styles, CSS custom properties, animations
└── js/
    ├── data.js                   (562 lines)  — Game data: difficulties, ranks, classes, perks, materials, device shapes
    ├── device-shapes.js          (460 lines)  — 60 device shape descriptions (3 classes × 20 each)
    ├── state.js                  (420+ lines) — gameState object, pointTracker, saveSystem, initializeState, getProficiencyCost, getTotalSpellCost
    ├── utils.js                  (542 lines)  — Generic utilities (formatDescription, escapeHtml, storage, etc.)
    ├── spells-physical.js        (1066 lines) — 30 Physical spells: 5 base + 15 batch2 + 10 batch3
    ├── spells-elemental.js       (1133 lines) — 31 Elemental spells: 5 base + 13 batch1 + 13 batch2
    ├── spells-esoteric.js        (718 lines)  — 34 Esoteric spells: 5 base + 20 batch1 + 9 batch2
    ├── navigation.js             (1030+ lines)— Page nav, form binding, DOM↔state sync, build summary, tier progress
    ├── custom-selects.js         (160+ lines) — Custom select component: enhances native <select> elements
    └── app.js                    (310+ lines) — Entry point: init state, difficulty setup, modal, spell details, accordion
```

## Script Load Order (critical!)

1. `data.js` — All data objects (global)
2. `device-shapes.js` — Shape descriptions + init merge into deviceShapes
3. `state.js` — gameState, pointTracker, saveSystem, getProficiencyCost, getTotalSpellCost (global)
4. `utils.js` — Utility functions (global)
5. `spells-physical.js` — spellData.physical (global, var-initialized)
6. `spells-elemental.js` — spellData.elemental concatenation
7. `spells-esoteric.js` — spellData.esoteric concatenation
8. `navigation.js` — navigation object (global), NOW INITIALIZED BY APP.JS ONLY
9. `custom-selects.js` — Custom select enhancement (global, IIFE)
10. `app.js` — DOMContentLoaded → initializeApplication → navigation.init()

## Architecture

- **Vanilla JS** — No frameworks, no bundler, no npm, no package.json
- **All globals** — ~40+ variables on `window` (gameState, pointTracker, navigation, spellData, all data objects, all utility functions)
- **Single-page** — 5 `<section>` pages toggled via `.active` class
- **Point system** — Two currencies: Aether Points (AP) for core attributes + spells, Personalization Points (PP) for body perks, barrier jacket, device material/perks
- **Data flow** — User DOM interaction → navigation.js event handlers → update gameState → pointTracker.spend/refund → updateDisplay()
- **Persistence** — localStorage key `magesCYOA_save`, JSON serialization of gameState

### Key Global Objects

| Variable | File | Purpose |
|----------|------|---------|
| `gameState` | state.js | Central state (character, perks, spells, device, points) |
| `pointTracker` | state.js | Point validation, spend/refund, afford checks, display |
| `saveSystem` | state.js | localStorage save/load/export/clear |
| `navigation` | navigation.js | Page transitions, form bindings, DOM generation |
| `spellData` | spells-*.js | `{ physical: [...], elemental: [...], esoteric: [...] }` |
| `deviceShapes` | data.js | `{ knight: [...], bombardment: [...], thaumaturge: [...] }` |
| `deviceShapeDescriptions` | device-shapes.js | Nested shape descriptions by class |
| `difficultyConfig` | data.js | Easy (250AP/200PP), Medium (200AP/150PP), Hard (150AP/100PP) |
| `manaReactorRanks` | data.js | 10 Kabbalistic ranks (malkuth→keter), costs 10-100 PP |
| `deviceGenerations` | data.js | 5 generations, costs 10-50 PP |
| `classes` | data.js | knight, bombardment, thaumaturge |
| `barrierJacketStyles` | data.js | 10 styles, all cost 5 PP |
| `bodyPerkTiers` | data.js | 6 perks (speed/strength/sense/dexterity/intelligence/wisdom), tiers 0-10 |
| `deviceMaterials` | data.js | 5 materials, costs 10-50 PP |
| `devicePerkTiers` | data.js | 4 perks (processing/weave/barrier/structural), tiers 0-10 |

### Key Functions

| Function | File | Purpose |
|----------|------|---------|
| `getProficiencyCost(spellCost, proficiency)` | state.js | Calculates AP surcharge for proficiency level (0x/0.5x/1x/2x/3x) |
| `getTotalSpellCost(spellCost, proficiency)` | state.js | Returns base cost + proficiency surcharge |
| `initializeApplication()` | app.js | Entry: state → difficulty → modal → navigation.init |
| `selectDifficulty(difficulty, button)` | app.js | Sets points from config, updates tracker |
| `showSpellDetails(spellId, category)` | app.js | Populates modal with proficiency tabs, learn/unlearn |
| `initializeState()` | state.js | Checks localStorage, prompts restore, updates tracker |
| `navigation.init()` | navigation.js | Binds prev/next buttons, progress indicators, keyboard nav |
| `navigation.goToPage(n)` | navigation.js | Switches page, calls initializePageN, updates UI |
| `navigation.initializePage2()` | navigation.js | loadCharacterData + setupPage2EventListeners |
| `navigation.setupPage2EventListeners()` | navigation.js | Binds ALL page 2 form handlers (one-time with guard) |
| `navigation.toggleSpell(id, name, category)` | navigation.js | Learn/unlearn a spell, manages AP |
| `navigation.generateBuildSummary()` | navigation.js | Generates all page 5 content |
| `formatDescription(text)` | utils.js | Splits `\n\n` into `<p>` tags |
| `escapeHtml(text)` | utils.js | XSS-safe HTML escaping via textContent |
| `saveSystem.generateBuildReport()` | state.js | ASCII text export of full build |
| `saveSystem.load()` | state.js | Object.assign merge from localStorage |
| `pointTracker.updateDisplay()` | state.js | Updates DOM with remaining/total point display |
| `updateDeviceShapesWithDescriptions()` | device-shapes.js | Merges descriptions into deviceShapes on load |

---

## Applied Fixes (2026-05-01)

### Fix #1 — Perk dropdown clip
**File:** `css/styles.css` line 598
**Change:** Removed `overflow: hidden` from `.perk-card`
**Why:** Native `<select>` dropdowns were clipped by Chrome/Edge on Windows, making them appear non-functional.

### Fix #2 — Double navigation initialization
**File:** `js/navigation.js` lines 946-951
**Change:** Deleted the self-init block (`if (document.readyState...)`) at the bottom of the file.
**Why:** Both navigation.js and app.js called `navigation.init()`, doubling all navigation event listeners (Next advanced 2 pages, spell toggles fired twice, keyboard nav skipped pages).

### Fix #3 — Event listener accumulation
**File:** `js/navigation.js`
**Change:** Added `_listenersSetup: { page2: false, page3: false, page4: false, page5: false }` to navigation object. Added `if (this._listenersSetup.pageN) return; this._listenersSetup.pageN = true;` guards to `setupPage2EventListeners`, `setupSpellEventListeners`, `setupDeviceEventListeners`, `setupPage5Buttons`.
**Why:** `goToPage()` → `initializePageN()` called setup functions every visit without checking if listeners were already bound. On revisits, listeners accumulated (2×, 3×, 4×...), causing multi-fired point refunds/spends.

### Fix #4 — Missing base spells (Phenomena + Esoteric)
**File:** `js/spells-phenomena.js` — Added `basePhenomenaSpells` (Fireball, Ice Shard, Lightning Bolt, Wind Blade, Earth Spike) prepended to `spellData.phenomena`.
**File:** `js/spells-esoteric.js` — Added `baseEsotericSpells` (Mind Shield, Teleport, Time Dilation, Soul Bind, Dimensional Rift) prepended to `spellData.esoteric`.
**Why:** Physical had `basePhysicalSpells` (spells 1-5) but Phenomena and Esoteric started from spell 6. 10 spells were missing.

### Fix #5 — Keyboard nav interferes with selects
**File:** `js/navigation.js` line 44
**Change:** Added `const tag = document.activeElement && document.activeElement.tagName; if (tag === 'SELECT' || tag === 'INPUT' || tag === 'TEXTAREA') return;`
**Why:** Arrow key document listeners fired during `<select>` option navigation, causing unintended page changes.

### Fix #6 — Start Over leaves save data
**File:** `js/navigation.js` line 952
**Change:** Added `localStorage.removeItem(saveSystem.saveKey);` before `location.reload()`.
**Why:** Reload detected saved data in localStorage and prompted "restore?" — defeating "start over."

### Fix #7 — Load navigates to wrong page
**File:** `js/navigation.js` line 937
**Change:** `this.goToPage(1)` → `this.goToPage(5)`, removed `this.loadCharacterData()` and `this.loadDeviceData()` calls.
**Why:** Loading a save navigated to page 1 and tried to populate device data on DOM elements that don't exist there.

### Fix #8 — pointTracker null-safety
**File:** `js/state.js` lines 63-91
**Change:** Wrapped all `document.getElementById()` accesses in null checks before accessing `.textContent` and `.style`.
**Why:** Called before DOM ready or on pages missing the elements would throw silently.

### Fix #10 — Duplicate formatDescription
**File:** `js/app.js` lines 278-281
**Change:** Deleted the duplicate function definition.
**Why:** Identical to `utils.js:4`, shadowed it via later load order.

### Fix #11 — XSS protection in build summary
**File:** `js/navigation.js` lines 819-826
**Change:** Wrapped all user-provided string values (sex, bodyShape, timeKnownMagic, skin/eye/hair colors) in `escapeHtml()` with null guards.
**Why:** User data from localStorage could contain XSS payloads when injected into innerHTML.

### Fix #12 — Reduced motion support
**File:** `css/styles.css` after line 82
**Change:** Added `@media (prefers-reduced-motion: reduce) { .starfield { animation: none; } }`
**Why:** Infinite starfield animation drains battery on mobile/laptops; respects OS accessibility preference.

### Fix #13 — Perk card ::before click interception
**File:** `css/styles.css` line 619
**Change:** Added `pointer-events: none;` to `.perk-card::before`
**Why:** The 200% sized absolute pseudo-element overlay was intercepting mouse clicks on the `<select>` dropdowns inside perk cards, preventing user interaction with the tier selectors.

### Fix #14 — Missing base physical spells merge
**File:** `js/spells-physical.js` after line 345
**Change:** Added `spellData.physical = basePhysicalSpells.concat(spellData.physical)` merge block.
**Why:** `basePhysicalSpells` (spells 1-5: Combat Reflex Enhancement, Iron Skin, Muscle Overcharge, Martial Arts Mastery, Pain Suppression) was defined but never pushed into `spellData.physical`. Only `additionalPhysicalSpells2` (6-20) and `additionalPhysicalSpells3` (21-30) were concatenated. Same bug as Fix #4 for the other categories.

### Fix #15 — Spell cards open modal (proficiency descriptions unreachable)
**File:** `js/navigation.js` lines 598-607
**Change:** Spell card click now calls `showSpellDetails(spellId, spellCategory)` instead of `this.toggleSpell(spellId, spellName, spellCategory)`.
**Why:** `showSpellDetails` was defined and exported but never called by any UI element. Clicking a spell card used to silently learn/unlearn the spell without opening the modal. This meant proficiency descriptions (5 paragraphs per level) and the proficiency-level selector dropdown were completely inaccessible. Users could learn spells but never read descriptions or change proficiency.

---

## Notes for Future Sessions

- Append new findings and fixes below this line with date stamps.
- The spell count is asymmetric: Physical=30, Elemental=31, Esoteric=34 — the extra spells are bonus content in the original `additional*Spells2` arrays.
- `deviceGenerations` uses numeric keys `{1: ..., 2: ..., 3: ..., 4: ..., 5: ...}` but HTML select values are strings. JS coerces these correctly for property access.
- `saveSystem.load()` uses `Object.assign` (shallow merge). If `gameState` structure changes, stale nested properties may persist in loaded saves.
- `saveSystem.exportToText()` creates a Blob download — the `URL.revokeObjectURL()` is called synchronously before the download starts in some browsers. May need a setTimeout wrapper.
- No build step, no lint, no typecheck. Open `index.html` directly in browser to test.
- The `window.MagesCYOA` export in `app.js` is unused by any other code — all globals are already accessible.
- `window.onerror` and `unhandledrejection` handlers exist in `app.js` but only `console.error` — no user-facing error messages.
- Proficiency now costs AP: beginner=0x, apprentice=+0.5x, adept=+1x, expert=+2x, master=+3x (multiplier on base spell cost). Total spell cost = baseCost + proficiency surcharge. Learned spells store `baseCost` and `totalCost` (not `cost`).
- Save migration: `saveSystem.load()` auto-converts old `spell.cost` → `spell.baseCost` + `spell.totalCost`, and `spell.category === 'phenomena'` → `'elemental'`.

---

### Fix #16 — Physical spells syntax error (entire file broken)
**File:** `js/spells-physical.js` line 332
**Change:** Replaced `"` (double quote) with `` ` `` (backtick) at end of `adept` proficiency template literal for Weapon Bond spell.
**Why:** The mismatched quote caused a `SyntaxError: Unexpected identifier` that prevented the entire `spells-physical.js` from parsing. Zero Physical spells loaded — displayed "No spells available for this category yet."

### Fix #17 — Mojibake em dashes (â€" instead of —)
**Files:** `js/spells-physical.js` (429 instances), `js/spells-elemental.js` (239 instances), `js/spells-esoteric.js` (339 instances)
**Change:** Replaced all 3-character mojibake sequences `â€"` (U+00E2 + U+20AC + U+201D) with proper em dash `—` (U+2014).
**Why:** The original UTF-8 em dash bytes (E2 80 94) were misinterpreted as Windows-1252 and re-encoded as UTF-8, producing double-encoded mojibake. Every em dash in spell descriptions displayed as `â€"` in the browser.

### Fix #18 — Missing Elemental batch1 spells (only 5 base spells loaded)
**File:** `js/spells-elemental.js` (formerly `spells-phenomena.js`)
**Change:** Added `elementalSpellsBatch1` array containing 13 new spells (Water Whip, Mist Veil, Frost Nova, Chain Lightning, Magma Surge, Vortex, Quicksand, Flash Freeze, Inferno, Hailstorm, Whirlpool, Vacuum Sphere, Crystal Formation) with full 5-level proficiency descriptions. Added merge blocks for base and batch1 arrays.
**Why:** The merge block referenced `phenomenaSpellsBatch1` which was never defined, throwing a `ReferenceError` that prevented batch2 from loading. Only 5 base spells (Fireball through Earth Spike) were accessible.

### Fix #19 — Category rename: Phenomena → Elemental
**Files:** `index.html`, `js/spells-phenomena.js` (renamed to `spells-elemental.js`), `js/spells-physical.js`, `js/spells-esoteric.js`, `js/state.js`, `js/data.js`
**Change:** Renamed all `phenomena` property keys to `elemental`, renamed `spells-phenomena.js` to `spells-elemental.js`, updated HTML tab button label, updated `data.js` display label, updated `state.js` categories object.
**Why:** "Elemental" better describes the category's content (fire, ice, lightning, wind, earth, water, steam, plasma, etc.) than "Phenomena".

### Fix #20 — Proficiency point cost system
**Files:** `js/state.js`, `js/navigation.js`, `js/app.js`, `css/styles.css`
**Change:** Added `getProficiencyCost()` and `getTotalSpellCost()` functions. Modified `toggleSpell()` to track `baseCost` and `totalCost` (base + proficiency surcharge). Modified spell modal to show proficiency costs on tabs, display "Upgrade" button with AP cost to next level, and show total AP on the "Unlearn" button. Added CSS for `.upgrade-proficiency-btn` and `.current-prof-label`. Save migration converts old `cost` field.
**Why:** Proficiency was previously a free, informational-only toggle. Now upgrading proficiency costs additional AP (beginner=0x, apprentice=+0.5x, adept=+1x, expert=+2x, master=+3x of base cost), making it a meaningful strategic choice.

### Fix #21 — Option description paragraph spacing
**File:** `css/styles.css`
**Change:** Added `.option-description p { margin-bottom: var(--spacing-md); }` rule.
**Why:** CSS universal reset `* { margin: 0 }` stripped default `<p>` margins. `formatDescription()` wraps text in `<p>` tags, but without margins, paragraphs had zero whitespace between them.

### Fix #22 — Difficulty point rebalance
**File:** `js/data.js` lines 4-22
**Change:** Easy: 250→400 AP, 200→350 PP. Normal: 200→280 AP, 150→230 PP. Hard: 150→175 AP, 100→140 PP. Updated descriptions to match new balance feel.
**Why:** Old values were far too tight. Even on Easy, a mid-range core pick (Tiferet+3rdGen+Rare+Jacket=115 PP) left only 85 PP for all 10 perk tracks. On Hard, after mandatory minimums you had ~65 PP — not enough for any meaningful specialization. AP side similarly cramped: 200 AP on Normal could barely afford 8-10 spells at apprentice. New values allow Easy to "buy most with ease," Normal to "budget without feeling tight," and Hard to "really need to budget but still build something viable."

### Fix #23 — Body perk tier tone-down (Tiers 7-10)
**File:** `js/data.js` bodyPerkTiers (speed, strength, sense, dexterity, intelligence, wisdom)
**Change:** Rewrote all 6 perks' tiers 7-10 (24 descriptions) + wisdom tiers 5-6. Removed: "break sound barrier," "outrun hypersonic aircraft," "perceive quantum fluctuations," "balance on air molecules," "dodge lasers between photons," "develop new scientific theories in afternoons," "perceive patterns across reality itself," "intuition borders on precognition," "sense probable futures," "see all magical forces across a continent." Replaced with soft-anime/Nanoha-tier grounded descriptions bounded by device processing, mana throughput, and physical constraints.
**Why:** High-tier body perks described effects that were physically impossible nonsense (quantum perception by eye, molecular dexterity, continental-scale senses) or implied godhood ("perceive patterns across reality itself"). New descriptions maintain impressive superhuman capability within a consistent magitech framework.

### Fix #24 — Device perk tier tone-down (Tiers 7-10)
**File:** `js/data.js` devicePerkTiers (processing, weave, barrier, structural)
**Change:** Rewrote all 4 perks' tiers 7-10 (16 descriptions). Processing: removed autonomous counter-spells, virtual combat simulation, "faster than thought" auto-win. Weave: scaled from 5x/10x/20x to 3x/4x/near-optimal, removed enemy mana siphoning, removed "cast Tier 8 with Tier 2 cost." Barrier: removed city-block invulnerability and strategic-weapon deflection, now resists specific tier ranges with stated strain levels and degrades gracefully. Structural: removed "shattered into pieces reassembles," "reduced to dust reconstructs atom by atom," now takes minutes from near-destruction rather than seconds.
**Why:** Device perks at high tiers described god-mode capabilities (indestructible devices, infinite mana, auto-winning combat) that broke the setting's magitech framework.

### Fix #25 — Esoteric spell renames and effect nerfs
**File:** `js/spells-esoteric.js`
**Change:** Renamed 3 spells: "Omniscience"→"Information Synthesis", "Omnipotence"→"Direct Manifestation", "Apotheosis"→"Transcendent Enhancement" (ids unchanged). Rewrote expert+master proficiency for 8 spells: Existence Erasure (can no longer erase abstract concepts), Conceptual Magic (cannot rewrite physical laws), Probability Manipulation (cannot make impossible things happen), Causality Manipulation (cannot reverse cause-effect, forward-causal only), Fate Manipulation (creates tendencies not certainties), Name Magic (cannot learn names of fundamental cosmic forces), Power Nullification (suppresses mortal magic, not divine; "magic suppression" not "absolute nullification"), Possession (not true immortality — all vessels destroyed = death).
**Why:** These spells described effects approaching omnipotence at expert/master levels. Names like "Omniscience" and "Omnipotence" implied godhood. Effects like erasing abstract concepts, rewriting physical laws, and guaranteeing impossible outcomes broke the tier system and the setting's internal consistency.

### Fix #26 — Elemental/Physical spell stray language cleanup
**Files:** `js/spells-physical.js`, `js/spells-elemental.js`
**Change:** 4 minor fixes: physical "instantaneous and absolute"→"instantaneous and total"; elemental "absolute nothingness"→"near-total nothingness"; elemental "infinitely sharp"→"razor-sharp"; elemental "unlimited number"→"any number, limited only by mana throughput".
**Why:** Stray instances of absolute/infinite language in non-ceiling contexts. Most of these files were already well-bounded.

---

## UI Polish (2026-05-06)

### Design Direction
- More vibrant/colorful with category-specific color coding throughout
- Collapsible lore accordion on Page 1
- Custom selects replacing native `<select>` elements
- Equal mobile/desktop priority

### CSS Foundation (`css/styles.css`)
- Expanded `:root` custom properties with category accent colors:
  - Physical: `--physical-accent: #ff6b35` (warm red/orange)
  - Elemental: `--elemental-accent: #00b4d8` (cool blue/cyan)
  - Esoteric: `--esoteric-accent: #a855f7` (violet/magenta)
- Difficulty colors: `--easy-accent`, `--medium-accent`, `--hard-accent`
- Added RGB variants for all accent colors (enables `rgba()` usage)
- Added semantic colors: `--success`, `--warning`, `--danger`, `--info`
- Added text hierarchy: `--text-primary`, `--text-secondary`, `--text-muted`, `--text-dark`
- Added transition tokens: `--transition-fast`, `--transition-base`, `--transition-slow`, `--transition-spring`
- Enhanced background with colored radial gradient overlays
- Improved starfield with varied star colors (blue/white/warm tints)
- Reduced border thickness from 2px to 1px for subtler UI
- Added `--focus-ring` for accessibility focus states
- Comprehensive `prefers-reduced-motion` support

### Navigation Bar
- Added page labels under step circles (Intro, Character, Spells, Device, Summary)
- Added connecting progress line between steps (fills cyan when completed)
- Added `.nav-step-wrapper` wrappers with `.active`/`.completed` classes
- Steps now scale up (1.1x) when active
- Smoother transitions throughout

### Point Tracker
- Made collapsible (click header to toggle, uses `.collapsed` class)
- Added progress bars (`.point-bar-fill`) for AP (cyan) and PP (gold)
- Added color-coded warnings: normal → warning (yellow, ≤30%) → danger (red, ≤15%)
- Added pulsing animation when in danger state
- `pointTracker.updateDisplay()` now updates bars and applies warning classes
- Toggle JS in `app.js` via `setupPointTrackerToggle()`

### Custom Select Component (`js/custom-selects.js`)
- New IIFE module that enhances all `<select class="select-input">` and `<select class="tier-select">`
- Creates custom dropdown with `.custom-select`, `.select-trigger`, `.select-options`, `.select-option`
- Separates option label and point cost into distinct spans
- Supports keyboard (Enter/Space to open, Escape to close)
- Auto-closes when clicking outside
- Perk-tier selects get cyan accent instead of gold
- `enhanceAllSelects()` called from `app.js` after navigation init
- `updateCustomSelect(select)` called after all programmatic `.value =` changes and revert scenarios
- Native selects hidden with `display: none` and `.enhanced` class

### Lore Section (Page 1)
- Converted from flat `<h2>` + `<p>` sections to collapsible accordion
- Each section wrapped in `.accordion-item` with `.accordion-header` button
- First section ("The Star Light Project") open by default (`.open` class)
- Smooth expand/collapse using `grid-template-rows: 0fr/1fr` transition
- Chevron indicator rotates on toggle
- JS toggle in `app.js` via `setupAccordion()`

### Difficulty Cards
- Per-difficulty color coding: Easy (green), Medium (amber), Hard (red)
- Top gradient accent bar (3px, increases to 4px on hover)
- H3 headings colored per difficulty
- Selected states use difficulty-specific colors and glows
- Removed old `selectedPulse` animation (was too distracting)
- Updated point values in HTML to match Fix #22 rebalance

### Form Groups & Option Buttons
- Thinner, subtler borders (from 2px solid gold to 2px solid rgba-gold at 0.25 opacity)
- Improved hover states with subtle translate and shadow
- Better selected state (gradient fill instead of pulsing glow)
- Custom slider with filled track, larger thumb, hover scale effect
- Color picker: smaller (60px), with preview row layout support

### Perk Cards
- Top accent gradient bar (cyan→gold)
- Tier progress pips (10 pips per card, filled up to current tier)
  - Created dynamically by `updateTierProgress()` and `updateDeviceTierProgress()`
  - Cyan fill for tiers 1-6, gold fill for tiers 7+ (`.high` class)
- Subtler borders and hover effects (no more scale transform)
- Removed old `.perk-card::before` radial gradient overlay

### Spell Cards & Tabs
- Category-specific color coding throughout:
  - Physical tabs/cards: red/orange borders, accents, selected states
  - Elemental tabs/cards: blue/cyan borders, accents, selected states
  - Esoteric tabs/cards: purple/magenta borders, accents, selected states
- Top accent color bar on each card (3px)
- Tier badges (`.spell-tier-badge`, shows "T1"-"T10")
- Proficiency badges (`.spell-proficiency-badge`, category-colored)
- Spell count on tab buttons: "Physical (2/30)" format
- `updateTabCounts()` method refreshes counts after learn/unlearn
- `.spell-info` now uses flexbox instead of separate `<p>` tags

### Shape Cards
- Top accent gradient bar (purple)
- Subtler borders, hover, and selected states
- White text on selected (instead of dark on purple)

### Modal
- Slide+scale entrance animation (0.25s spring easing)
- Semi-transparent backdrop (0.7 opacity instead of 0.8)
- Rounded close button with hover background
- Proficiency tabs styled with active cyan highlight
- Proficiency panels with dark background
- Modal actions: flexbox with gap, top border separator
- Learn button: green accent; Unlearn button: red accent
- Upgrade button: teal/cyan gradient
- `.learned-badge` styling for proficiency indicator

### Build Summary (Page 5)
- Spell list items with flexbox layout
- Category-colored proficiency badges
- Tier badges (small, muted)
- Point bars showing spent/total for AP (cyan) and PP (gold)
- Color preview swatches (small circles)
- Key-value pairs with justify-between layout

### Responsive
- Improved 768px breakpoint with better stacking and sizing
- Added 480px breakpoint for very small screens
- Mobile nav step labels at 0.6rem
- Point tracker spans full width on mobile
- Custom select dropdowns work on mobile
- Touch-friendly targets (min-height 44px)
- Modal at 95% width on mobile

### Accessibility
- `:focus-visible` styles on all interactive elements
- `::selection` styling
- Custom select has `role`, `aria-expanded`, `aria-haspopup` attributes
- Comprehensive `prefers-reduced-motion` that kills ALL animations

---

## Class Adaptations System (2026-05-07)

### New File: `js/class-adaptations.js` (~1.1MB, 2626 lines)
- Provides class-specific text for body perks, device perks, and spell proficiencies across Knight, Bombardment, and Thaumaturge
- Contains `classAdaptations` global object with three class keys, each containing:
  - `bodyPerks`: class-specific perk descriptions (6 perks × 11 tiers = 66 per class)
  - `devicePerks`: class-specific device perk descriptions (4 perks × 11 tiers = 44 per class)
  - `spellRenames`: class-specific spell name overrides (95 spells per class)
  - `spellAdaptations`: class-specific proficiency text (95 spells × 5 levels = 475 per class, 1,425 total)
- Exports `getClassAdaptedText(spellId, level, cls)` helper function
- Loaded between `spells-esoteric.js` and `navigation.js` in script order

### Integration Points
- `js/navigation.js`: perk rendering uses `classAdaptations[cls].bodyPerks`/`devicePerks`, spell display uses class-adapted text
- `js/app.js`: spell modal title uses `classAdaptations[cls].spellRenames[spellId]`, proficiency text uses `getClassAdaptedText()`
- `index.html`: added `<script src="js/class-adaptations.js">` tag
- Class change handler in `navigation.js` re-renders perks and spells when user switches class

### Content Structure
- Body perks: 198 total entries (66 × 3 classes), single paragraph each, NO `\n\n` breaks
- Device perks: 132 total entries (44 × 3 classes), single paragraph each, NO `\n\n` breaks
- Spell proficiencies: 1,425 total entries (475 × 3 classes), two paragraphs separated by `\n\n`
  - Paragraph 1: shared across classes (original spell description, class-specific nouns swapped)
  - Paragraph 2: unique per class (tactical implications framed by class role)

---

## Applied Fixes — Session 2 (2026-05-08)

### Fix #27 — God-mode language in class-adapted spell proficiencies
**File:** `js/class-adaptations.js`
**Change:** 88 replacements across 1,425 entries. "absolute precision/devotion" → softer synonyms, "impossible to defeat" → "extremely difficult to defeat", "unlimited" → "vast/boundless", "flawless" → "near-perfect/seamless", "impenetrable" → "formidable". 36 remaining "absolute" uses are legitimate (mental states: certainty, clarity, commitment; physics: silence, cold, stability).
**Why:** Template-generated proficiencies contained absolute/infinite language that broke the setting's internal consistency at lower proficiency levels.

### Fix #28 — Formulaic master-level openings
**File:** `js/class-adaptations.js`
**Change:** 220/285 master entries previously started with "[Name] operates at the spell's theoretical maximum for [framing]" → replaced with 10 varied opening templates per class cycling via modulo. 0 identical master openings remain.
**Why:** 77% of master-level descriptions shared the same opening sentence, making the content feel mass-generated.

### Fix #29 — Formulaic paragraph 2 openings (6 passes)
**File:** `js/class-adaptations.js`
**Change:** Multiple passes (fix3a through fix3f + targeted regex). Max repetition of any paragraph 2 opening reduced from 31× to 9×. Unique openings increased from 317 to 772. ~1,235 script-generated entries diversified with combinatorial approach and targeted regex.
**Why:** The combinatorial paragraph 2 generator used the same subject×verb×consequence pool across all entries, producing highly repetitive opening sentences.

### Fix #30 — Cross-class perk shared phrasing
**File:** `js/class-adaptations.js`
**Change:** Differentiated ~15 worst cross-class duplicates: Knight Strength T8/T9/T10, Knight Sense T8/T9, Knight Wisdom T6/T7/T8, Structural T6/T8 all three classes. Replaced shared phrases with class-specific framing (blade/melee for Knight, cannon/ranged for Bombardment, grimoire/formation for Thaumaturge).
**Why:** Body/device perk descriptions were originally generated with class-specific noun swaps but identical sentence structure, making Knight/Bombardment/Thaumaturge versions read as find-replace copies.

### Fix #31 — Paragraph 2 overhaul (stubs, garbled text, cross-class duplication)
**File:** `js/class-adaptations.js`
**Change:** Replaced 1,191 of 1,425 (84%) spell proficiency paragraph 2s. Applied in 5 batches:
  - v1: Simple string replacement — 473 applied (failed on duplicate stubs)
  - v3: Line-based regex matching — 399 applied (single-line entries)
  - Remaining: Same approach for 204 entries with missing spell contexts
  - Cross-class: Regenerated 124 entries with 40+ char shared substrings across classes
  - Final: 30 entries with old "creating opportunities" phrase + 2 stragglers
**Why:** 84% of paragraph 2s were broken: garbled fragments like `"engagementsmbardment exchange"` (74), stubby one-liners under 120 chars (1,117), or text copy-pasted across classes. Bombardment/Thaumaturge were at 97%/96% bad. The combinatorial paragraph generator from Phase 5 produced broken output for non-Knight classes.

**Results:**
| Metric | Before | After |
|--------|--------|-------|
| Good p2 (80+ chars) | 234 (16%) | 1,425 (100%) |
| Stubs (<80 chars) | 1,117 | 0 |
| Garbled text | 74 | 0 |
| Cross-class shared 40+ char substrings | 124 | 0 |
| "creating opportunities" pattern | 149 | 0 |
| Min p2 length | ~20 chars | 145 chars |

### Paragraph 2 generation approach
- 10 template structures with class-specific vocabulary:
  - Knight: blade/melee/close-quarters domain, fighter/combatant roles
  - Bombardment: ranged/artillery/bombardment domain, artillery mage/ranged specialist roles
  - Thaumaturge: support/formation/healing domain, support mage/formation anchor roles
- 95 spell-specific tactical implications (3 class variants each)
- Level-specific intensity words (beginner: noticeable/measurable → master: transcendent/unmatched)
- Deterministic hash for template selection (spell+level+class as seed)

---

## Notes for Future Sessions (updated 2026-05-08)

- `class-adaptations.js` is ~1.1MB (2626 lines) — the largest file in the project by far
- The spell count is 95 total (30 Physical + 31 Elemental + 34 Esoteric)
- Paragraph 2 generation is template-based and functional but still somewhat formulaic within each class — the 10 templates repeat every 10 entries within a class. A future pass could hand-write more unique paragraph 2s for high-profile spells.
- Body perks (198) and device perks (132) intentionally have NO `\n\n` paragraph breaks — they're single-paragraph entries by design
- `saveSystem.load()` uses `Object.assign` (shallow merge). If `gameState` structure changes, stale nested properties may persist in loaded saves.
- `saveSystem.exportToText()` creates a Blob download — the `URL.revokeObjectURL()` is called synchronously before the download starts in some browsers. May need a setTimeout wrapper.
- No build step, no lint, no typecheck. Open `index.html` directly in browser to test.
- Character encoding gotcha: source file uses `'` (char 39, straight apostrophe) and `—` (char 8212, em dash) in body/device perk text; replacement scripts must use exact char codes to match
- Another encoding gotcha: checking for `\n\n` paragraph breaks in scripts must use literal char code 10+10, not `\\n\\n` (escaped) — the latter matches the literal string backslash-n, not actual newlines