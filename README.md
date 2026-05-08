# CYOA Hub

A collection of interactive Choose Your Own Adventure character builders. Each CYOA is a self-contained single-page application — no frameworks, no build tools, just open in a browser and start creating.

---

## CYOA List

| CYOA | Description | Status |
|------|-------------|--------|
| [Mages](https://tsuki321.github.io/CYOA/) | Build a mage from the ground up — choose your reactor rank, class, spells, device, and body perks in a deep point-buy system with free tier progression. | Playable |

---

## Mages CYOA

A character builder for the **Mages** setting, where mages channel mana through Intelligent Devices to cast spells, reinforce their bodies, and shape the battlefield. Inspired by magical-girl and magitech anime.

### How It Works

You're given two point budgets — **Aether Points (AP)** for core attributes and spells, **Personalization Points (PP)** for body perks, barrier jacket, and device customization. Every choice costs points, and every point matters on harder difficulties. Higher reactor ranks and device generations grant free tiers, reducing the PP you need to spend.

### The Build Process

1. **Intro** — Read the lore, understand the world of the Star Light Project.
2. **Character** — Pick your difficulty, mana reactor rank, device generation, class, and barrier jacket style.
   - Your reactor rank grants **free body perk tiers** and a **free device generation** based on your class
   - Your device generation grants **free device perk tiers**
3. **Spells** — Choose from 95 spells across three categories:
   - **Physical** (30) — Body reinforcement, combat techniques, melee augmentation
   - **Elemental** (31) — Fire, ice, lightning, wind, earth, water, and more
   - **Esoteric** (34) — Mind, space, time, soul, dimension, and reality manipulation
   - Each spell has 5 proficiency levels (Beginner → Master) that increase AP cost
4. **Device** — Customize your Intelligent Device:
   - **Shape** — 20 class-specific forms with descriptions (Knight gets blades, Bombardment gets cannons/staves, Thaumaturge gets books/orbs/reliefs)
   - **Material** — Basic through Legendary, affects device performance
   - **Perks** — Processing, Weave, Barrier, Structural (10 tiers each, lower tiers may be free from your generation)
5. **Summary** — Review your full build, export as text, or save to localStorage.

### Mana Reactor Ranks

Reactors are rated on the Kabbalistic Tree of Life. Higher ranks grant progressively more free body perks and a free device generation:

| Rank | Cost | Free Body Perks (Primary / Secondary) | Free Device Gen |
|------|------|---------------------------------------|-----------------|
| Malkuth (Foundation) | 10 PP | T0 / T0 | None |
| Yesod (Foundation) | 20 PP | T1 / T0 (2 primary perks) | None |
| Hod (Splendor) | 30 PP | T1 / T0 | Gen 1 |
| Netzach (Eternity) | 40 PP | T2 / T1 | Gen 1 |
| Tiferet (Beauty) | 50 PP | T2 / T1 | Gen 2 |
| Geburah (Severity) | 60 PP | T3 / T2 | Gen 2 |
| Chesed (Mercy) | 70 PP | T3 / T2 | Gen 3 |
| Binah (Understanding) | 80 PP | T4 / T3 | Gen 3 |
| Chokhmah (Wisdom) | 90 PP | T5 / T4 | Gen 4 |
| Keter (Crown) | 100 PP | T6 / T5 | Gen 5 |

**Primary perks** depend on your class:
- **Knight**: Speed, Strength, Dexterity
- **Bombardment**: Sense, Intelligence, Wisdom
- **Thaumaturge**: Intelligence, Wisdom, Sense

### Device Generation Free Perks

Each device generation grants free tiers in device perks:

| Generation | Processing | Weave | Barrier | Structural |
|-----------|-----------|-------|---------|------------|
| 1st (Civilian) | T1 | T1 | T0 | T0 |
| 2nd | T1 | T1 | T1 | T1 |
| 3rd | T2 | T2 | T1 | T1 |
| 4th | T2 | T2 | T2 | T2 |
| 5th (Cutting Edge) | T3 | T3 | T2 | T2 |

### Classes

| Class | Role | Primary Body Perks |
|-------|------|-------------------|
| **Knight** | Close-quarters melee, body reinforcement, blade combat | Speed, Strength, Dexterity |
| **Bombardment** | Long-range artillery, devastating area spells | Sense, Intelligence, Wisdom |
| **Thaumaturge** | Support, healing, buffs, device hacking, formation magic | Intelligence, Wisdom, Sense |

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
- **Free tier progression** — reactor ranks grant free body perks and device generation; device generation grants free device perk tiers
- **Class adaptation system** — switching class recontextualizes all perk and spell text
- **Visual tier indicators** — green pips for free tiers, cyan/gold for paid
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
