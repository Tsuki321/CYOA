# Mages CYOA — Claude Code Guide

This is the canonical reference for the **Mages CYOA** project. It collates the verified, current state of the codebase and supersedes `CONTEXT.md` (which is stale — see *Stale-vs-current* notes and *Deletions / archival* at the end). All numbers below were verified against the source in July 2026.

When editing this project, treat this file as ground truth. `README.md` is the visitor-facing hub doc; this file is the internal map.

---

## 1. What this is

**Mages CYOA** is a single-page "Choose Your Own Adventure" character builder for a grounded magitech sci-fi setting (Lyrical Nanoha-inspired, *not* D&D fantasy). The player:

1. Picks a **difficulty** (point budget).
2. Builds a character: sex, age, height, colors, **mana reactor rank**, **intelligent device generation**, **class** (Knight / Bombardment / Thaumaturge), **barrier jacket style**, **body perks**, **spells**, and an **intelligent device** (material + shape + device perks).
3. Spends two point pools: **Aether Points (AP)** for spells, **Personalization Points (PP)** for everything else.
4. Saves the build to `localStorage`, exports it as a text report, or starts over.

### Stack
- **Vanilla JS, no framework, no bundler, no npm, no build step.** Plain `<script>` tags, global `window` variables, ES5-ish syntax (`const`/`let` used freely, arrow functions used).
- One HTML entry (`index.html`), one stylesheet (`css/styles.css`), 11 JS files in `js/`.
- State persisted to `localStorage` under key `magesCYOA_save`.
- Deployed via **GitHub Pages** (`.github/workflows/` deploy workflow).

---

## 2. Quick start

```bash
# No build. Either open the file directly, or serve the dir (avoids file:// fetch issues):
python -m http.server 8000     # then visit http://localhost:8000
# or
npx serve .
```

- **Run:** open `index.html` in a browser (or the local server above).
- **Test:** open `test-spells.html` — verifies spell counts per category and that all 155 spells load.
- **Deploy:** push to `main`; the GitHub Pages workflow publishes automatically.

There is no test runner, no linter config, no package.json. "Tests" means opening the two HTML files in a browser and checking the console + the spell counts on the Summary page.

---

## 3. Repository layout

```
.
├── index.html              # SPA entry: 5 sections (#page1..#page5), spell modal, point tracker, lore accordion
├── README.md               # Visitor-facing hub doc (point tables, class roles, features). Keep this user-friendly.
├── test-spells.html        # Smoke test: counts + last-5 spells per category, sample renames
├── css/
│   └── styles.css          # All styles, :root custom-property theme tokens at top
├── js/
│   ├── data.js             # ALL game data + helper getters (difficulty, ranks, gens, classes, jackets, perks, materials, shapes, spellCategories)
│   ├── device-shapes.js    # deviceShapeDescriptions keyed by class→shape.id; merged into deviceShapes at load
│   ├── state.js            # gameState, pointTracker, spell-cost math, saveSystem (save/load/export/clear)
│   ├── utils.js            # formatDescription, escapeHtml, storage/color/string helpers (some unused/future)
│   ├── spells-physical.js  # spellData.physical (50 spells)
│   ├── spells-elemental.js # spellData.elemental (51 spells)
│   ├── spells-abstract.js  # spellData.abstract  (54 spells)
│   ├── class-adaptations.js# Per-class bodyPerk/devicePerk/spellRename/spellAdaptation overrides + accessors
│   ├── navigation.js       # THE CONTROLLER: 5-page SPA nav, all event listeners, free-tier math, build summary
│   ├── custom-selects.js   # IIFE: rebuilds native <select> into styled dropdowns; updateCustomSelect()
│   └── app.js              # initializeApplication() boot order, difficulty select, spell detail modal
├── .github/workflows/deploy.yml   # GitHub Pages deploy workflow (push main → publish)
├── .gitignore
├── Mages Cover.png                # Cover art (referenced by README)
├── docs/
│   └── archive/            # ALL historical docs consolidated here (read for context, not load-bearing):
│       ├── OVERHAUL_GUIDE.md          # ★ Content style guide — forbidden words, tier multipliers, spell naming (see §10)
│       ├── REVIEW_REPORT.md           # 2026-06-16 review: 95-spell overhaul declared production-ready
│       ├── OVERHAUL_COMPLETE.md        # Overhaul completion log
│       ├── COMPLETION_SUMMARY.md      # Spell-expansion completion log
│       ├── COUNCIL_IMPLEMENTATION.md  # Lore: 10-seat High Thaumaturgic Council roster (see §11)
│       ├── CONTEXT.md                 # STALE pre-CLAUDE.md project context — superseded by this file
│       ├── FINAL_STATUS.md            # Spell-expansion final-status log
│       └── SPELL_EXPANSION_COMPLETE.md# Spell-expansion completion log
└── docs/archive/ holds nothing load-bearing — CLAUDE.md + README.md are the live references
```

---

## 4. Script load order (MATTERS)

`index.html` loads these at the bottom (lines 938–949), in this exact order:

```
data.js          → defines all data tables + helper getters
device-shapes.js → merges shape descriptions into deviceShapes (data.js already loaded)
state.js         → gameState, pointTracker, getProficiencyCost/getTotalSpellCost, saveSystem
utils.js         → formatDescription, escapeHtml
spells-physical.js
spells-elemental.js
spells-abstract.js   ← each guards `if (typeof spellData === 'undefined')` so only the first inits it
class-adaptations.js  ← MUST precede navigation.js & app.js (they call its global accessors)
navigation.js
custom-selects.js
app.js            → initializeApplication() boots everything
```

**Why order matters:** several functions called by `navigation.js` / `app.js` are **global function declarations** defined in `class-adaptations.js` (`getSpellDisplayName`, `getSpellProficiencyText`, `getBodyPerkDescription`, `getDevicePerkDescription`, `applyClassAdaptations`). Because globals are function-scoped at parse time, load order is load-bearing: if `class-adaptations.js` loaded after a caller, the caller would see `undefined`. Keep the order above.

---

## 5. Architecture & data flow

```
index.html (DOM sections + native <select>s)
  └─ app.js initializeApplication()
       ├─ state.js initializeState()     → check localStorage → optional restore
       ├─ setupDifficultySelection()
       ├─ setupModal()                    → spell detail modal (proficiency tabs)
       ├─ setupPointTrackerToggle()
       ├─ setupAccordion()                → lore accordion
       ├─ class-adaptations accessors (global fns)
       ├─ navigation.init()                → nav buttons, progress dots, keyboard arrows
       └─ enhanceAllSelects()              → custom-selects.js rebuilds all <select>

navigation.js controls the whole UI:
  goToPage(n) → initializePage(n) → page-specific load + one-time event binding (_listenersSetup guard)
  Every select/input → writes to gameState → pointTracker recalculates AP/PP spent → updateDisplay()
  Free-tier math in applyReactorRankFreebies() + applyDeviceGenFreebies()

gameState (state.js) is the single source of truth → saveSystem writes it to localStorage.
GenerateBuildSummary() reads it back for page 5; exportToText() emits an ASCII report.
```

### The 5 pages
- **Page 1 — Difficulty:** pick Easy/Medium/Hard (sets AP + PP budget).
- **Page 2 — Character:** sex, age, height slider, body shape, 3 color pickers, time-known-magic, **mana reactor rank**, **device generation**, **class**, **barrier jacket style**, 6 body perk tier-selects.
- **Page 3 — Spells:** 3 category tabs (Physical / Elemental / Abstract), spell cards grouped by tier; click → modal with 5 proficiency tabs (beginner→master), learn/unlearn/upgrade.
- **Page 4 — Device:** material select, shape cards (depend on class), 4 device perk tier-selects.
- **Page 5 — Summary:** character overview, core attrs, perks, spells, device, remaining points, export/save/load/modify/start-over.

**Page gating** (`canGoToPage`): page ≥2 requires `gameState.difficulty`; page ≥3 requires `isPage2Complete()` = sex ✓ age ✓ manaReactorRank ✓ deviceGeneration ✓ selectedClass.

---

## 6. Global objects & data (canonical values)

All data lives in `js/data.js` as top-level `const`s → exposed as globals. Spell data is assembled in the `spells-*.js` files into the global `spellData`. Class adaptations live in `class-adaptations.js` as `var classAdaptations`.

### 6.1 Difficulty & point budgets
| Difficulty | Aether (AP) | Personalization (PP) |
|---|---|---|
| easy   | 400 | 350 |
| medium | 280 | 230 |
| hard   | 175 | 140 |

`difficultyConfig[difficulty]` = `{ name, aetherPoints, personalizationPoints, description }`. `selectDifficulty()` (app.js) writes these into `gameState` and calls `pointTracker.updateDisplay()`.

### 6.2 Mana reactor ranks (Kabbalistic Tree of Life)
`manaReactorRanks[id]` = `{ name, cost (PP), freeBodyPerks:{primary,secondary}, freeBodyPerksByClass, freeDeviceGen, description }`.

| id | name | cost PP | free body perks (primary/secondary) | free device gen |
|---|---|---|---|---|
| malkuth  | Malkuth (Foundation) | 10  | 0/0 | null |
| yesod    | Yesod (Foundation)  | 20  | 1/0 | null |
| hod      | Hod (Splendor)       | 30  | 1/0 | 1 |
| netzach  | Netzach (Eternity)    | 40  | 2/1 | 1 |
| tiferet  | Tiferet (Beauty)      | 50  | 2/1 | 2 |
| geburah  | Geburah (Severity)    | 60  | 3/2 | 2 |
| chesed   | Chesed (Mercy)        | 70  | 3/2 | 3 |
| binah    | Binah (Understanding) | 80  | 4/3 | 3 |
| chokhmah | Chokhmah (Wisdom)      | 90  | 5/4 | 4 |
| keter    | Keter (Crown)         | 100 | 6/5 | 5 |

**`freeBodyPerksByClass`** = which perks get the **primary** free tier (the other 3 perks get **secondary**). Standard pattern (applies to malkuth + hod…keter):
- knight: `['speed','strength','dexterity']`
- bombardment: `['sense','intelligence','wisdom']`
- thaumaturge: `['intelligence','wisdom','sense']`

Exception — **yesod** lists only 2 primaries per class (its `secondary` is 0 anyway): knight `['speed','strength']`, bombardment `['sense','intelligence']`, thaumaturge `['intelligence','wisdom']`.

`getFreeBodyPerks(rankId, classId)` returns `{speed,str,sense,dex,int,wis}` where each perk = `base.primary` if the perk is in that class's list, else `base.secondary`. -> The selected **rank + class together** determine free body-perk tiers.

### 6.3 Classes
`classes[id]` = `{ name, description }` only — **no perk data** (`id ∈ knight, bombardment, thaumaturge`). The "free Tier 1 perks in X and Y" lines in the class descriptions are **lore text only**; the actual free tiers come from `manaReactorRanks[].freeBodyPerksByClass` keyed by the selected class. Do not add free-perk fields to the class object.

| id | name | role |
|---|---|---|
| knight | Knight | Close-quarters, body reinforcement, blade-enhanced |
| bombardment | Bombardment | Long-range, artillery-style, area control |
| thaumaturge | Thaumaturge | Support, healing, buffs, formation anchoring |

### 6.4 Intelligent device generations
`deviceGenerations[1–5]` (numeric keys) = `{ name, cost (PP), freeDevicePerks:{processing,weave,barrier,structural}, description }`.

| gen | cost PP | free device perks (P/W/B/S) |
|---|---|---|
| 1 | 10 | 1/1/0/0 |
| 2 | 20 | 1/1/1/1 |
| 3 | 30 | 2/2/1/1 |
| 4 | 40 | 2/2/2/2 |
| 5 | 50 | 3/3/2/2 |

`getFreeDeviceGen(rankId)` → the device generation granted free by the reactor rank (null for malkuth/yesod). `getFreeDevicePerks(genId)` → that generation's `freeDevicePerks` object.

### 6.5 Barrier jacket styles
`barrierJacketStyles[id]` = `{ name, cost: 5, description }`. 10 styles, **all cost 5 PP**: `ballroom, military, tactical, royal, scholar, aristocratic, combat, ceremonial, street, traditional`.

### 6.6 Body perks
`bodyPerkTiers[perk]` = array of 11 description strings, tiers T0–T10. Perk keys: `speed, strength, sense, dexterity, intelligence, wisdom`.

**Per-tier multiplier progression** (the description must explicitly state the multiplier):
| Tier | Multiplier |
|---|---|
| T0 | baseline (no enhancement) |
| T1 | 10% |
| T2 | 25% |
| T3 | 50% |
| T4 | 75% |
| T5 | 100% (doubled) |
| T6 | 200% (tripled) |
| T7 | 400% (5×) |
| T8 | 900% (10×) |
| T9 | 1900% (20×) |
| T10 | practical ceiling / diminishing returns |

**Cost:** **5 PP per paid tier.** Paid tiers = `max(0, currentTier - freeTier)`. Selecting a tier < the free floor is blocked. UI shows `(T0–T{free} free)` label + a 10-pip progress bar where free pips are highlighted.

### 6.7 Device perks
`devicePerkTiers[perk]` = array of 11 description strings (T0–T10). Perk keys: `processing, weave, barrier, structural`. Same multiplier progression, same 5-PP-per-paid-tier cost, same free-tier logic via `freeDevicePerks`. (The `structural` array uses slightly different opening phrasing — "Tier N provides…" vs "Tier N: baseline…" — a cosmetic format variance, noted in REVIEW_REPORT.md.)

### 6.8 Device materials
`deviceMaterials[id]` = `{ name, cost (PP), description }`, `id ∈ basic, advanced, rare, exotic, legendary` → costs **10/20/30/40/50 PP**.

### 6.9 Device shapes
`deviceShapes[class]` = array of `{ id, name, cost: 0 }` — **20 shapes per class (60 total), all free (cost 0)**. Shape descriptions live separately in `device-shapes.js` (`deviceShapeDescriptions[class][shape.id]`), merged into the shapes at load by `updateDeviceShapesWithDescriptions()`. `getDeviceShapeDescription(classId, shapeId)` is the accessor. Shape availability on Page 4 depends on the selected class.

### 6.10 Spells
**Spell object schema** (in the `spells-*.js` arrays — verified):
```js
{
  id: 'neural_overdrive',     // lowercase snake_case, must be unique within its category
  name: 'Neural Overdrive',   // display name (overridden per-class by spellRenames)
  tier: 2,                    // integer tier 1..10 (controls display grouping + power scale)
  cost: 10,                   // base AETHER cost (AP)
  proficiency: {
    beginner:   `3-paragraph string...`,
    apprentice: `...`,
    adept:      `...`,
    expert:     `...`,
    master:     `...`
  }
}
```
- **No `category` property on the object.** Category is determined by which `spellData` array the spell is concatenated into (physical / elemental / abstract). `category` only becomes a field when a spell is copied into `gameState.learnedSpells[]`.
- Each proficiency value is a 3-paragraph string (paragraphs separated by `\n\n`).

**Spell counts (authoritative):**
| File | Category | Count |
|---|---|---|
| spells-physical.js  | physical  | 50 |
| spells-elemental.js | elemental | 51 |
| spells-abstract.js  | abstract  | 54 |
| **Total** | | **155** |

History: the 2026-06-16 overhaul shipped **95** spells (30/31/34). A later expansion added **+60** (20 per category) → 155. The comment at `data.js:552` ("90 spells (30 per category)") is **stale** — ignore it.

**Spell file structure** (each `spells-*.js`):
```js
if (typeof spellData === 'undefined') {        // guard: only the first-loaded file inits it
  var spellData = { physical: [], elemental: [], abstract: [] };
}
const baseXSpells = [ ... ];
spellData.X = baseXSpells.concat(spellData.X);  // append batch to the category array
// …repeated for each batch…
```
Batches:
- `spells-physical.js`: `basePhysicalSpells` + `additionalPhysicalSpells2/3/4`
- `spells-elemental.js`: `baseElementalSpells` + `elementalSpellsBatch1/2/3`
- `spells-abstract.js`: `baseAbstractSpells` + `additionalAbstractSpells/2/3`

### 6.11 Spell cost model (AP)
```
proficiencyCost = ceil(baseCost × multiplier)   // beginner 0, apprentice 0.5, adept 1, expert 2, master 3
totalCost = baseCost + proficiencyCost
```
- `getProficiencyCost(spellCost, proficiency)` and `getTotalSpellCost(spellCost, proficiency)` live in `state.js`.
- A learned spell stores `{ id, name, category, tier, proficiency, baseCost, totalCost }` in `gameState.learnedSpells`. New learns default to `proficiency: 'beginner'` (totalCost = baseCost). Upgrading proficiency re-spends the delta.
- **Spells cost AP. Everything else (reactor, generation, jacket, material, perks) costs PP. Shapes are free (0).**

---

## 7. Class adaptations (`class-adaptations.js`)

`var classAdaptations = { knight:{…}, bombardment:{…}, thaumaturge:{…} }`. Each class has:
- **`bodyPerks[perk][tier]`** — class-flavored body-perk description per tier. Falls back to `bodyPerkTiers[perk][tier]`.
- **`devicePerks[perk][tier]`** — class-flavored device-perk description per tier. Falls back to `devicePerkTiers[perk][tier]`.
- **`spellRenames[spellId]`** — the class-specific display name for a spell (e.g. "Neural Overdrive" → "Combat Recovery" for Knight).
- **`spellAdaptations[spellId][level]`** — class-flavored proficiency text for a spell × proficiency level. Falls back to `spell.proficiency[level]`.

**Accessor functions** (defined at the bottom of `class-adaptations.js`, ~lines 2884–2952):
- `getBodyPerkDescription(perk, tier)`
- `getDevicePerkDescription(perk, tier)`
- `getSpellDisplayName(spellId, category)` — used by navigation + app modal
- `getSpellProficiencyText(spellId, category, level)` — used by modal
- `applyClassAdaptations()` — called on class change; re-renders all perk descriptions + the active spell tab

**Content status (updated 2026-10-11):** `spellAdaptations` is now **complete for all 155 spells × 3 classes × 5 levels** (155 × 5 × 3 = **2,325** entries). The earlier gap (the 60 expansion spells had `spellRenames` only) has been filled — every spell now shows genuinely class-distinct proficiency text (verified: no level is identical across any two classes). Authored via the `tmp/adapt/` pipeline (self-contained per-spell assignment files → Opus sub-agents → deterministic merge); see the editing note in §12.

---

## 8. State, points, persistence (`state.js`)

### `gameState` shape
```js
{
  currentPage: 1,
  difficulty: null,                 // 'easy'|'medium'|'hard'
  aetherPoints: 0, personalizationPoints: 0,
  aetherSpent: 0, personalizationSpent: 0,
  character: { sex, age, height:170, bodyShape, skinColor:'#f5d0c5', eyeColor:'#4a90d9', hairColor:'#2c1810', timeKnownMagic },
  manaReactorRank: null,           // rank id
  deviceGeneration: null,          // '1'..'5' (stored as string)
  selectedClass: null,             // 'knight'|'bombardment'|'thaumaturge'
  barrierJacketStyle: null,
  bodyPerks:    { speed,str,sense,dexterity,intelligence,wisdom },         // current tier per perk
  freeBodyPerks:{ …same keys… },                                            // free tier per perk (from rank×class)
  freeDeviceGen: null,             // device gen granted free by rank
  freeDevicePerks: { processing,weave,barrier,structural },                // free tier per device perk
  learnedSpells: [],               // [{ id,name,category,tier,proficiency,baseCost,totalCost }]
  device: { material, shape, perks:{ processing,weave,barrier,structural } },
  lastModified: null
}
```

### `pointTracker`
- `updateDisplay()` — renders `X / total` text + width bars; classes `danger` (≤15% or <0) / `warning` (≤30%).
- `canAfford(cost, type)` / `spendPoints(cost, type)` / `refundPoints(cost, type)` / `getRemaining(type)` where `type ∈ 'aether','personalization'`.

### Free-tier math (in `navigation.js`, not state.js)
- `applyReactorRankFreebies()` — on rank change (or class change, since class affects which perks are "primary"): for each body perk, recompute `freeBodyPerks`, set new tier = `max(currentTier, newFreeFloor)`, refund old paid tiers, spend new paid tiers; also re-applies `freeDeviceGen` + `applyDeviceGenFreebies()`.
- `applyDeviceGenFreebies()` — on device-gen change: recompute `freeDevicePerks`, same raise-floor/refund/re-spend per device perk.

### `saveSystem`
- `saveKey: 'magesCYOA_save'`. `save()` serializes `gameState` (sets `lastModified`). `load()` does a **shallow** `Object.assign(gameState, parsed)` **plus migration shims**:
  - ensures `freeBodyPerks`, `freeDeviceGen`, `freeDevicePerks` exist (older saves predate them),
  - migrates old spell shape: `spell.cost` → `spell.baseCost` + `spell.totalCost`,
  - renames legacy category `phenomena` → `elemental`.
- `exportToText()` → `generateBuildReport()` builds an ASCII build report (with a power-level calc and recommended playstyle). `clear()` removes the key.

`initializeState()` runs on boot: if a save exists, prompts the user to restore it.

**Gotcha:** because load is a **shallow** merge, adding a new field to `gameState` requires a migration shim in `saveSystem.load()` (mirror the `freeBodyPerks` pattern) or old saves will have `undefined` for that field.

---

## 9. UI layer specifics

### `navigation.js` (the controller)
- `_listenersSetup = { page2:false, page3:false, page4:false, page5:false }` — **one-time binding guard**. Each page's setup function early-returns if already bound; load-time state is still re-read every visit via `loadCharacterData()` / `loadDeviceData()` / `loadSpellCategories()`. **Follow this pattern** when adding new listeners on a page.
- Spell learn/unlearn: `toggleSpell(spellId, …)` finds the spell in `spellData[category]`, computes `getTotalSpellCost(cost,'beginner')`, checks `canAfford(...AP)`, pushes into `learnedSpells`, re-renders the active tab.
- `displaySpells(category)` — sorts by tier, groups, renders cards with display name (`getSpellDisplayName`) and AP cost badge.
- Keyboard nav: ArrowLeft/Up = previous, ArrowRight/Down = next; ignored when focus is in SELECT/INPUT/TEXTAREA.
- Page 5 `startOver` → `localStorage.removeItem` + `location.reload()`. `load` → `saveSystem.load()` + `goToPage(5)`. `modify` → `goToPage(2)`. `export` → `saveSystem.exportToText()`.

### `custom-selects.js`
- IIFE that rebuilds native `<select class="select-input">` and `<select class="tier-select">` into styled `.custom-select` dropdowns with keyboard support (Enter/Space/Escape).
- **`updateCustomSelect(el)` MUST be called after any programmatic `.value` set** on such a `<select>`, or the visual trigger desyncs from the real value. This call appears ~20× in navigation.js.
- Exposes `enhanceAllSelects`, `enhanceSelect`, `updateCustomSelect`, `reEnhanceSelects`.

### `app.js`
- `initializeApplication()` boot order: `initializeState` → `setupDifficultySelection` → `setupModal` → `setupPointTrackerToggle` → `setupAccordion` → `navigation.init()` → `enhanceAllSelects()`.
- `selectDifficulty(difficulty, button)` writes the point budget into gameState.
- `showSpellDetails(spellId, category)` builds the modal: proficiency tabs, learn/unlearn/upgrade buttons; reads `getSpellDisplayName` / `getSpellProficiencyText` / `getProficiencyCost` / `getTotalSpellCost`.
- `window.onerror` / `unhandledrejection` handlers just `console.error` (do not surface to the user).

### `utils.js`
- `formatDescription(text)` — splits on `\n\n` → wraps each in `<p>` (used for all description boxes).
- `escapeHtml`, `formatText`-style helpers, plus a pile of storage/session/cookie/color/string utilities, many of which are **unused future scaffolding**.

### `css/styles.css` — theme tokens (`:root`)
- Background `--primary-bg #0a0e27`. Accents: gold `#ffd700`, cyan `#00d4ff`, purple `#a855f7`.
- Category accents: physical `#ff6b35`, elemental `#00b4d8`, abstract `#a855f7`.
  - ⚠️ **abstract's accent `#a855f7` is identical to the global purple accent** — they share a color. Intentional or a collision; flag when restyling.
- Difficulty colors: easy `#22c55e`, medium `#f59e0b`, hard `#ef4444`.
- Semantic: success/warning/danger/info. Text hierarchy `--text-primary/secondary/muted/dark`.
- Fonts: **Playfair Display** (display), **Lato** (body). `--focus-ring: 0 0 0 3px rgba(0,212,255,0.4)`. Spacing scale `xs…2xl`.

---

## 10. Style & tone guide (canonical — distiled from `docs/archive/OVERHAUL_GUIDE.md`)

This is the house style for all new content.

**Tone:** grounded magitech sci-fi (think Lyrical Nanoha, *not* D&D). Technical precision — specific numbers, measurable effects, device processing limits, mana throughput. **Bounded power**: every capability has limits. Show, don't tell.

**Forbidden unless explicitly justified:** `perfect`, `flawless`, `absolute`, `infinite`, `unlimited`, `omnipotent`, `omniscient`, `godlike`, `invincible`, `unstoppable`, `impossible to defeat`, `instantly`, `immediately` (use *reflexive*, *sub-second*, or specific timings), `forever`, `eternal`, `permanent` (unless magically bound with a stated duration).

**Spell naming:** technical/tactical nomenclature, **no** generic fantasy names (no "Fireball"/"Ice Shard"/"Lightning Bolt"). Good: *Thermal Lance*, *Cognitive Fortress*, *Spatial Displacement*, *Neural Overdrive*, *Dermal Lattice*.

**Spell proficiency structure (each of the 5 levels):** 3 paragraphs —
1. Mechanics: how the device constructs it, mana cost, cast time.
2. Performance: range, output, casts-per-cycle per reactor tier, limitations.
3. Tactical application: what it does in combat + the ceiling and boundaries.
Progression: beginner (basic/slow/costly) → apprentice (~2× range) → adept (professional, ~4× range) → expert (multi-target, ~6–8× range) → master (theoretical optimum for the tier, reflexive, **still bounded by tier limits**).

**Reactor rank description must include:** capacity multiplier vs Malkuth, recovery time from depletion, max concurrent effects, unique capability, failure mode/vulnerability. Scaling: 1× (Malkuth) → 2× (Yesod) → 3.5× (Hod) → 6× (Netzach) → 10× (Tiferet) → 15× (Geburah & Chesed) → 25× (Binah) → 40× (Chokhmah) → 70× (Keter).

**Perk tier description must include:** the multiplier stated explicitly, 2–3 concrete measurable examples, tactical/practical impact, and Tier 10 must say **"practical ceiling"** + **"diminishing returns"**.

**Spell tier → power scale:** T1 room-scale/single-target ≈ conventional weapons; T2 building-scale; T3 city-block; T4–5 multi-block/vehicle-destroying; T6–7 district-scale; T8–9 city-scale WMD; T10 continental/reality-warping (theoretical).

---

## 11. Lore canon (from `index.html` accordion + `docs/archive/COUNCIL_IMPLEMENTATION.md`)

- **Star Light Project** (2012–2015): origin effort. **Discovery of Mana: October 31, 2015.** Mana-reactor awakening mechanism; intelligent devices are a necessity, not an option.
- **DARPA** managed the project after the discovery; **The Helix Group** is the scientist team.
- **Five device generations** of intelligent devices (Civilian 1st → cutting-edge 5th).
- **High Thaumaturgic Council** (formed ~2016 after the DARPA handover; formerly "Council for Dimensional Research and Strategic Applications"). Answerable to the President but can intervene against presidential abuse; **First Seat has final authority** (unanimous vote to override). 10 seats — keep the roster consistent when touching lore:

| Seat | Member | Rank | Specialization | Device |
|---|---|---|---|---|
| First  | Archmage Seraphine Winslow | Keter   | Abstract / dimensional theory     | 5G grimoire "Akashic Index" |
| Second | Master Chen Zhao           | Chokhmah | Elemental / battlefield control   | 5G staff "Heaven's Mandate" |
| Third  | Dr. Yuki Takamura          | Binah    | Healing / cellular manipulation   | 5G hybrid "Caduceus Protocol" |
| Fourth | Cdr. Victor Reyes          | Chesed   | Law enforcement / anti-mage        | 4G "Justicar's Edge" |
| Fifth  | Prof. Amara Okonkwo        | Geburah  | Spatial / teleportation            | 5G "Tesseract Engine" |
| Sixth  | Magister Klaus Reinhardt   | Chesed   | Defensive barriers / diplomacy     | 4G "Aegis Eternal" |
| Seventh| Archon Dmitri Volkov       | Binah    | Strategic bombardment / WMD         | 5G "Tsar Protocol" |
| Eighth | Sage Priya Sharma          | Chokhmah | Enhancement / mass awakening        | 4G "Lotus Mandala" |
| Ninth  | Artificer Kenji Matsumoto  | Geburah  | Magitech engineering / device design| 5G "Forge of Hephaestus" |
| Tenth  | Oracle Fatima Al-Rashid    | Chesed   | Divination / threat assessment     | 4G "All-Seeing Eye" |

Geographic diversity across the seats (US, China-defector, Japan×2, Nigeria, Germany, Russia, India, Saudi Arabia).

---

## 12. Editing guides

### Add a spell to a category
1. Open the relevant `js/spells-{physical,elemental,abstract}.js`.
2. Append a new spell object to the **last** batch array in that file (or create a new batch `const` and add a `.concat(spellData.X)` line before the closing). Follow the schema in §6.10: `id` must be lowercase snake_case and unique within the category; set `tier`, `cost` (AP), and all 5 proficiency strings (3 paragraphs each).
3. (Recommended) Add class-specific names: an entry under `spellRenames` for each class in `class-adaptations.js` (knight ~line 137, bombardment ~1097, thaumaturge ~2057). Without this, all classes show the base `name`.
4. (Optional, big lift) Add `spellAdaptations[spellId]` for each class×5 levels (~920-word content block). Without this the spell falls back to the generic base proficiency text — see §7.
5. The `test-spells.html` page will count the new spell automatically; `navigation.displaySpells` sorts by `tier` and renders it.

### Add a device shape
1. Append `{ id, name, cost: 0 }` to `deviceShapes[class]` in `data.js` (id lowercase snake_case, unique within that class).
2. Add a description: `deviceShapeDescriptions[class][shape.id] = { description: '...' }` in `device-shapes.js`. `updateDeviceShapesWithDescriptions()` merges it at load; `loadDeviceShapes()` renders the card on Page 4.

### Add a barrier jacket style
1. Add `barrierJacketStyles[newId] = { name, cost: 5, description }` in `data.js`. Add the matching `<option>` in `index.html`'s barrier-jacket `<select>`. The Page 2 change handler in `navigation.js` reads cost and spends PP generically — no JS change needed.

### Add a device material
1. Add `deviceMaterials[newId] = { name, cost, description }` (cost 10/20/…/50) in `data.js`. Add the `<option>` in `index.html`. Page 4 handler reads cost generically.

### Add/edit a body or device perk tier description
1. Edit the relevant entry in `bodyPerkTiers[perk]` or `devicePerkTiers[perk]` in `data.js` (array index = tier 0–10). State the §6.6 multiplier; Tier 10 must include "practical ceiling" + "diminishing returns".
2. If a class needs a flavored version, set `classAdaptations[class].bodyPerks[perk][tier]` (or `devicePerks`); `getXDescription()` prefers the class entry and falls back to `bodyPerkTiers`/`devicePerkTiers`.

### Add a reactor rank
1. Add `manaReactorRanks[newId] = { name, cost (PP), freeBodyPerks:{primary,secondary}, freeBodyPerksByClass, freeDeviceGen, description }` matching §6.2 + §10. Update the `data.js` `<option>` in `index.html` and the power-level map in `state.js generateBuildReport()`. The Page 2 change handler + freebie math are generic, but verify `getFreeBodyPerks`/`getFreeDeviceGen` pick it up.

### Change the point budget per difficulty
Edit `difficultyConfig` in `data.js` and `README.md`'s tables together (keep them in sync — they're the public spec).

---

## 13. Gotchas & known issues

1. **Script load order is load-bearing** — `class-adaptations.js` must precede `navigation.js`/`app.js` (they use its global accessor functions). See §4.
2. **Don't bare-declare `var spellData = {}`** in a new `spells-*.js` file — use the `if (typeof spellData === 'undefined')` guard, or you'll wipe the categories an earlier file populated.
3. **`updateCustomSelect(el)` after every programmatic `.value` set** on a `.select-input`/`.tier-select`, or the dropdown's visible text desyncs from the real value.
4. **The data.js:552 comment "90 spells (30 per category)" is stale** — the real count is 155.
5. **`dexterity` perk array (data.js ~L411–412) uses `—` Unicode escapes** where em-dashes go, while other arrays use the literal `—` character. Both render identically — purely cosmetic inconsistency.
6. **abstract accent `#a855f7` == global purple accent** in `styles.css` — color collision to be aware of when restyling.
7. **`classes` has no perk data** — free tiers come from `manaReactorRanks[].freeBodyPerksByClass` × the selected class × `freeBodyPerks{primary,secondary}`. Class description text referencing "free Tier 1 perks in X and Y" is lore only.
8. **Shallow save merge** — new `gameState` fields need a migration shim in `saveSystem.load()` (see §8) or old saves get `undefined`.
9. **`spellAdaptations` is complete** (155 × 3 × 5) as of 2026-10-11 — the former 900-entry gap is filled (see §7). `js/class-adaptations.js` is **CRLF**; any programmatic edit must preserve `\r\n`. The last adaptation key in each class is `transcendent_enhancement` (no trailing comma).
10. **`_spellsSetup`/`_listenersSetup` guard** — when adding Page-N listeners, wrap them in the `if (this._listenersSetup.pageN) return;` early-return so they bind once.
11. **Reactor-rank downgrade edge case:** `applyReactorRankFreebies` raises a perk to `max(currentTier, newFreeFloor)` but, when the new floor is *lower* than the old one and the player can't afford the now-paid tiers, it refunds old paid tiers, **skips** the spend, and still commits `bodyPerks[perk]`/`freeBodyPerks[perk]`. Net effect on rare downgrade paths can desync spent PP from displayed tiers. Not user-facing in normal play.

---

## 14. Status & history

- **2026-06-16 overhaul** (`docs/archive/REVIEW_REPORT.md`, production-ready, 99.7%): transformed generic-fantasy content into grounded magitech sci-fi across ~3,500 content pieces — 95 spells renamed, 100 perk tiers, 10 reactor ranks, lore (Star Light Project, DARPA, High Thaumaturgic Council).
- **Spell expansion** (`docs/archive/COMPLETION_SUMMARY.md`, `docs/archive/FINAL_STATUS.md`, `docs/archive/SPELL_EXPANSION_COMPLETE.md`): +60 spells → **155 total** (50/51/54). Class `spellRenames` filled for all 60; `spellAdaptations` intentionally deferred (§7, §13).
- **Current state:** functional, production-ready, deployable. The class `spellAdaptations` content gap is **closed** (2026-10-11) — all 155 spells have 3-class-distinct proficiency text.

---

## 15. Repo cleanup (completed July 2026)

To consolidate the repo around this file:
- **Archived** → `docs/archive/`: `CONTEXT.md`, `FINAL_STATUS.md`, `SPELL_EXPANSION_COMPLETE.md` (were at root; superseded by CLAUDE.md / redundant logs). `docs/archive/` now holds all 8 historical docs.
- **Deleted** stale snapshots `js/data.js.backup`, `js/spells-abstract.js.backup`, `js/spells-elemental.js.backup` (were git-tracked; content preserved in history, fully reversible via `git checkout`).
- **Kept** at root: `CLAUDE.md` (this file), `README.md` (visitor-facing hub), `index.html`, `test-spells.html` (smoke test).
- **Kept** `docs/archive/OVERHAUL_GUIDE.md` — it's the source-of-truth style guide summarized in §10.

All cleanup changes are **unstaged working-tree moves/deletions** (consistent with the prior session's archive moves). To commit the whole cleanup as one changeset:
```bash
git add -A
git commit -m "Add CLAUDE.md; archive redundant docs; remove stale .backup files"
```
(Commit only when the user asks.)
