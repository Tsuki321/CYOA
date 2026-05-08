# CYOA Hub

A collection of interactive Choose Your Own Adventure character builders. Each CYOA is a self-contained single-page application — no frameworks, no build tools, just open in a browser and start creating.

---

## CYOA List

| CYOA | Description | Status |
|------|-------------|--------|
| [Mages](https://tsuki321.github.io/CYOA/) | Build a mage from the ground up — choose your class, spells, device, and body perks in a deep point-buy system. | Playable |

---

## Mages CYOA

A character builder for the **Mages** setting, where mages channel mana through Intelligent Devices to cast spells, reinforce their bodies, and shape the battlefield. Inspired by magical-girl and magitech anime.

### How It Works

You're given two point budgets — **Aether Points (AP)** for core attributes and spells, **Personalization Points (PP)** for body perks, barrier jacket, and device customization. Every choice costs points, and every point matters on harder difficulties.

### The Build Process

1. **Intro** — Read the lore, understand the world of the Star Light Project.
2. **Character** — Pick your difficulty, mana reactor rank (Kabbalistic Tree of Life, Malkuth through Keter), device generation, class, and barrier jacket style.
3. **Spells** — Choose from 95 spells across three categories:
   - **Physical** (30) — Body reinforcement, combat techniques, melee augmentation
   - **Elemental** (31) — Fire, ice, lightning, wind, earth, water, and more
   - **Esoteric** (34) — Mind, space, time, soul, dimension, and reality manipulation
   - Each spell has 5 proficiency levels (Beginner → Master) that increase AP cost
4. **Device** — Customize your Intelligent Device:
   - **Shape** — 20 class-specific forms (Knight gets blades, Bombardment gets cannons/staves, Thaumaturge gets books/orbs/reliefs)
   - **Material** — Basic through Legendary, affects device performance
   - **Perks** — Processing, Weave, Barrier, Structural (10 tiers each)
5. **Summary** — Review your full build, export as text, or save to localStorage.

### Classes

| Class | Role | Free Perks |
|-------|------|------------|
| **Knight** | Close-quarters melee, body reinforcement, blade combat | Body Reinforcement T1, Blade Mastery T1 |
| **Bombardment** | Long-range artillery, devastating area spells | Mana Control T1, Long-Range Casting T1 |
| **Thaumaturge** | Support, healing, buffs, device hacking, formation magic | Mana Augmentation T1, Device Hacking T1 |

Each class reskins and recontextualizes all body perks, device perks, and spell proficiencies with class-specific flavor and tactical framing.

### Difficulty Tiers

| Difficulty | Aether Points | Personalization Points |
|-----------|---------------|----------------------|
| Easy | 400 | 350 |
| Medium | 280 | 230 |
| Hard | 175 | 140 |

### Features

- **95 spells** with 5 proficiency levels each (475 unique descriptions per class, 1,425 total)
- **60 device shapes** (20 per class) with detailed descriptions
- **6 body perks** × 11 tiers with grounded, internally consistent descriptions
- **4 device perks** × 11 tiers each
- **Class adaptation system** — switching class recontextualizes all perk and spell text
- **Point tracker** with color-coded warnings, progress bars, and collapsible UI
- **Custom select dropdowns** with keyboard support and accessibility attributes
- **Save/Load** via localStorage with export-to-text build report
- **Responsive** — works on desktop and mobile
- **No dependencies** — vanilla HTML/CSS/JS, no build step

### Tech Stack

- Vanilla HTML5, CSS3, JavaScript (ES6)
- CSS custom properties for theming
- No frameworks, no bundler, no npm
- GitHub Pages deployment via Actions

### Running Locally

Just open `index.html` in a browser. That's it.

---

## License

All CYOA content and code in this repository is proprietary. All rights reserved.
