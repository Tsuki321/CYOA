// State Management for Mages CYOA

const gameState = {
    // Page navigation
    currentPage: 1,
    
    // Difficulty
    difficulty: null, // 'easy', 'medium', 'hard'
    aetherPoints: 0,
    personalizationPoints: 0,
    aetherSpent: 0,
    personalizationSpent: 0,
    
    // Character basics
    character: {
        name: '',
        sex: null,
        age: null,
        height: 170,
        bodyShape: null,
        skinColor: '#f5d0c5',
        eyeColor: '#4a90d9',
        hairColor: '#2c1810',
        timeKnownMagic: null
    },
    
    // Core attributes
    manaReactorRank: null,
    deviceGeneration: null,
    selectedClass: null,
    barrierJacketStyle: null,
    
    // General perks (body)
    bodyPerks: {
        speed: 0,
        strength: 0,
        sense: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0
    },
    
    freeBodyPerks: {
        speed: 0,
        strength: 0,
        sense: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0
    },
    
    freeDeviceGen: null,
    
    freeDevicePerks: {
        processing: 0,
        weave: 0,
        barrier: 0,
        structural: 0
    },
    
    // Spell routines
    learnedSpells: [], // Array of spell objects with proficiency and tier
    
    // Intelligent device
    device: {
        material: null,
        shape: null,
        perks: {
            processing: 0,
            weave: 0,
            barrier: 0,
            structural: 0
        }
    },
    
    // Timestamp for saves
    lastModified: null
};

// Point Tracker
const pointTracker = {
    updateDisplay() {
        const aetherRemaining = gameState.aetherPoints - gameState.aetherSpent;
        const personalizationRemaining = gameState.personalizationPoints - gameState.personalizationSpent;
        
        const aetherElement = document.getElementById('aetherPoints');
        const personalizationElement = document.getElementById('personalizationPoints');
        const aetherBar = document.getElementById('aetherBar');
        const personalizationBar = document.getElementById('personalizationBar');
        
        if (aetherElement) {
            aetherElement.textContent = `${aetherRemaining} / ${gameState.aetherPoints}`;
            aetherElement.className = 'point-value';
            if (aetherRemaining < 0) {
                aetherElement.classList.add('danger');
            } else if (aetherRemaining <= Math.floor(gameState.aetherPoints * 0.15)) {
                aetherElement.classList.add('danger');
            } else if (aetherRemaining <= Math.floor(gameState.aetherPoints * 0.3)) {
                aetherElement.classList.add('warning');
            }
        }
        if (personalizationElement) {
            personalizationElement.textContent = `${personalizationRemaining} / ${gameState.personalizationPoints}`;
            personalizationElement.className = 'point-value';
            if (personalizationRemaining < 0) {
                personalizationElement.classList.add('danger');
            } else if (personalizationRemaining <= Math.floor(gameState.personalizationPoints * 0.15)) {
                personalizationElement.classList.add('danger');
            } else if (personalizationRemaining <= Math.floor(gameState.personalizationPoints * 0.3)) {
                personalizationElement.classList.add('warning');
            }
        }
        
        if (aetherBar) {
            const aetherPct = gameState.aetherPoints > 0 ? Math.max(0, (aetherRemaining / gameState.aetherPoints) * 100) : 0;
            aetherBar.style.width = aetherPct + '%';
            aetherBar.className = 'point-bar-fill aether-bar';
            if (aetherPct <= 15) aetherBar.classList.add('danger');
            else if (aetherPct <= 30) aetherBar.classList.add('warning');
        }
        if (personalizationBar) {
            const ppPct = gameState.personalizationPoints > 0 ? Math.max(0, (personalizationRemaining / gameState.personalizationPoints) * 100) : 0;
            personalizationBar.style.width = ppPct + '%';
            personalizationBar.className = 'point-bar-fill personalization-bar';
            if (ppPct <= 15) personalizationBar.classList.add('danger');
            else if (ppPct <= 30) personalizationBar.classList.add('warning');
        }
    },
    
    canAfford(cost, type) {
        if (type === 'aether') {
            return (gameState.aetherPoints - gameState.aetherSpent) >= cost;
        } else if (type === 'personalization') {
            return (gameState.personalizationPoints - gameState.personalizationSpent) >= cost;
        }
        return false;
    },
    
    spendPoints(cost, type) {
        if (type === 'aether') {
            gameState.aetherSpent += cost;
        } else if (type === 'personalization') {
            gameState.personalizationSpent += cost;
        }
        this.updateDisplay();
    },
    
    refundPoints(cost, type) {
        if (type === 'aether') {
            gameState.aetherSpent = Math.max(0, gameState.aetherSpent - cost);
        } else if (type === 'personalization') {
            gameState.personalizationSpent = Math.max(0, gameState.personalizationSpent - cost);
        }
        this.updateDisplay();
    },
    
    getRemaining(type) {
        if (type === 'aether') {
            return gameState.aetherPoints - gameState.aetherSpent;
        } else if (type === 'personalization') {
            return gameState.personalizationPoints - gameState.personalizationSpent;
        }
        return 0;
    }
};

function getProficiencyCost(spellCost, proficiency) {
    var multipliers = {
        beginner: 0,
        apprentice: 0.5,
        adept: 1,
        expert: 2,
        master: 3
    };
    return Math.ceil(spellCost * (multipliers[proficiency] || 0));
}

function getTotalSpellCost(spellCost, proficiency) {
    return spellCost + getProficiencyCost(spellCost, proficiency);
}

// ----- Markdown export helpers -----

// Clean a body/device perk tier description for Markdown: convert inline <em>/<strong>
// to Markdown emphasis, strip any other tags, and drop the leading "Tier N:" prefix.
function stripPerkDesc(text) {
    if (!text) return '';
    return String(text)
        .replace(/<em>/gi, '*').replace(/<\/em>/gi, '*')
        .replace(/<strong>/gi, '**').replace(/<\/strong>/gi, '**')
        .replace(/<[^>]+>/g, '')
        .replace(/^\s*Tier\s*\d+\s*:\s*/i, '')
        .trim();
}

// Recursively serialize a DOM node's children to Markdown. Handles the lore
// accordion's elements: <p>, <em>/<i>, <strong>/<b>, <h4>, the roster seat blocks
// (via the lore-seat-rank / lore-seat-meta classes), and passes <div>/<span> through.
function htmlNodeToMarkdown(node) {
    var out = '';
    var kids = node.childNodes;
    for (var i = 0; i < kids.length; i++) {
        var child = kids[i];
        if (child.nodeType === 3) {
            out += child.nodeValue.replace(/\s+/g, ' ');
        } else if (child.nodeType === 1) {
            var tag = child.tagName.toLowerCase();
            var cls = (typeof child.className === 'string') ? child.className : '';
            var inner = htmlNodeToMarkdown(child);
            if (tag === 'em' || tag === 'i') {
                out += '*' + inner.trim() + '*';
            } else if (tag === 'strong' || tag === 'b') {
                out += '**' + inner.trim() + '**';
            } else if (cls.indexOf('lore-seat-rank') !== -1) {
                out += ' (' + inner.trim() + ')';
            } else if (tag === 'h4') {
                out += '\n\n#### ' + inner.trim() + '\n\n';
            } else if (cls.indexOf('lore-seat-meta') !== -1) {
                out += '*' + inner.trim() + '*\n\n';
            } else if (tag === 'p') {
                out += inner.trim() + '\n\n';
            } else if (tag === 'br') {
                out += '\n';
            } else {
                out += inner;
            }
        }
    }
    return out;
}

// Build the "World of Mages" lore section (Markdown) from the Page 1 lore accordion
// DOM. Returns '' if the accordion is not present, so export still works without it.
function buildLoreMarkdown() {
    try {
        var container = document.querySelector('.accordion');
        if (!container) return '';
        var items = container.querySelectorAll('.accordion-item');
        if (!items.length) return '';
        var parts = ['## The World of Mages', ''];
        var flavor = document.querySelector('.lore-section .flavor-text');
        if (flavor) {
            var f = htmlNodeToMarkdown(flavor).replace(/\s+/g, ' ').trim();
            if (f) { parts.push('> ' + f); parts.push(''); }
        }
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var headEl = item.querySelector('.accordion-header > span');
            var bodyEl = item.querySelector('.accordion-content');
            if (!headEl || !bodyEl) continue;
            var heading = headEl.textContent.replace(/\s+/g, ' ').trim();
            var body = htmlNodeToMarkdown(bodyEl)
                .replace(/[ \t]+\n/g, '\n')
                .replace(/\n{3,}/g, '\n\n')
                .replace(/[ \t]{2,}/g, ' ')
                .trim();
            parts.push('### ' + heading);
            parts.push('');
            parts.push(body);
            parts.push('');
        }
        return parts.join('\n').replace(/\n{3,}/g, '\n\n').trim();
    } catch (e) {
        console.error('Error building lore markdown:', e);
        return '';
    }
}

// Save/Load System
const saveSystem = {
    saveKey: 'magesCYOA_save',
    
    save() {
        gameState.lastModified = new Date().toISOString();
        try {
            localStorage.setItem(this.saveKey, JSON.stringify(gameState));
            alert('Build saved successfully!');
            return true;
        } catch (error) {
            console.error('Error saving build:', error);
            alert('Error saving build. Please try again.');
            return false;
        }
    },
    
    load() {
        try {
            const saved = localStorage.getItem(this.saveKey);
            if (saved) {
                const parsed = JSON.parse(saved);
                Object.assign(gameState, parsed);

                if (!gameState.character) {
                    gameState.character = {};
                }
                if (gameState.character.name === undefined) {
                    gameState.character.name = '';
                }
                if (!gameState.freeBodyPerks) {
                    gameState.freeBodyPerks = { speed: 0, strength: 0, sense: 0, dexterity: 0, intelligence: 0, wisdom: 0 };
                }
                if (gameState.freeDeviceGen === undefined) {
                    gameState.freeDeviceGen = null;
                }
                if (!gameState.freeDevicePerks) {
                    gameState.freeDevicePerks = { processing: 0, weave: 0, barrier: 0, structural: 0 };
                }
                
                if (gameState.learnedSpells) {
                    gameState.learnedSpells.forEach(function(spell) {
                        if (spell.cost && !spell.baseCost) {
                            spell.baseCost = spell.cost;
                            spell.totalCost = getTotalSpellCost(spell.cost, spell.proficiency || 'beginner');
                            delete spell.cost;
                        }
                        if (spell.category === 'phenomena') {
                            spell.category = 'elemental';
                        }
                    });
                }
                
                return true;
            }
            alert('No saved build found.');
            return false;
        } catch (error) {
            console.error('Error loading build:', error);
            alert('Error loading build. Please try again.');
            return false;
        }
    },
    
    exportToMarkdown() {
        const buildText = this.generateBuildReport();

        // Create a Markdown blob and download
        const blob = new Blob([buildText], { type: 'text/markdown;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        const rawName = (gameState.character.name && gameState.character.name.trim())
            ? gameState.character.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '')
            : '';
        const namePart = rawName || 'build';
        a.download = `mages_cyoa_${namePart}_${new Date().toISOString().slice(0, 10)}.md`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    },

    // Backward-compatible alias (older callers referenced exportToText).
    exportToText() {
        return this.exportToMarkdown();
    },
    
    generateBuildReport() {
        var gs = gameState;
        var c = gs.character || {};
        var md = [];

        var charName = (c.name && c.name.trim()) ? c.name.trim() : 'Unnamed Mage';

        // ---- Title ----
        md.push('# Mages CYOA — Character Build');
        md.push('');
        md.push('**' + charName + '**  ·  *Generated ' + new Date().toLocaleString() + '*');
        md.push('');
        md.push('---');
        md.push('');

        // ---- Lore (at the start) ----
        var lore = buildLoreMarkdown();
        if (lore) {
            md.push(lore);
            md.push('');
            md.push('---');
            md.push('');
        }

        md.push('## Your Character Build');
        md.push('');

        // ---- Difficulty ----
        md.push('### Difficulty');
        md.push('');
        if (gs.difficulty && typeof difficultyConfig !== 'undefined' && difficultyConfig[gs.difficulty]) {
            var dc = difficultyConfig[gs.difficulty];
            md.push('**' + dc.name + '** — ' + dc.aetherPoints + ' Aether Points · ' + dc.personalizationPoints + ' Personalization Points');
            md.push('');
            if (dc.description) md.push(dc.description);
        } else {
            md.push('*Not selected.*');
        }
        md.push('');
        // ---- Character ----
        md.push('### Character');
        md.push('');
        md.push('| Attribute | Value |');
        md.push('| --- | --- |');
        md.push('| Name | ' + charName + ' |');
        md.push('| Sex | ' + (c.sex || 'Not selected') + ' |');
        md.push('| Age | ' + (c.age ? c.age + ' years' : 'Not selected') + ' |');
        md.push('| Height | ' + (c.height != null ? c.height + ' cm' : 'Not selected') + ' |');
        md.push('| Body Shape | ' + (c.bodyShape || 'Not selected') + ' |');
        md.push('| Skin Color | ' + (c.skinColor || '—') + ' |');
        md.push('| Eye Color | ' + (c.eyeColor || '—') + ' |');
        md.push('| Hair Color | ' + (c.hairColor || '—') + ' |');
        md.push('| Time Known About Magic | ' + (c.timeKnownMagic || 'Not selected') + ' |');
        md.push('');

        // ---- Core Attributes ----
        md.push('### Core Attributes');
        md.push('');

        md.push('#### Mana Reactor Rank');
        md.push('');
        if (gs.manaReactorRank && typeof manaReactorRanks !== 'undefined' && manaReactorRanks[gs.manaReactorRank]) {
            var rank = manaReactorRanks[gs.manaReactorRank];
            md.push('**' + rank.name + '**');
            md.push('');
            if (rank.description) md.push(rank.description);
        } else {
            md.push('*Not selected.*');
        }
        md.push('');

        md.push('#### Intelligent Device Generation');
        md.push('');
        if (gs.deviceGeneration && typeof deviceGenerations !== 'undefined' && deviceGenerations[gs.deviceGeneration]) {
            var gen = deviceGenerations[gs.deviceGeneration];
            md.push('**' + gen.name + '**');
            md.push('');
            if (gen.description) md.push(gen.description);
        } else {
            md.push('*Not selected.*');
        }
        md.push('');
        md.push('#### Class');
        md.push('');
        if (gs.selectedClass && typeof classes !== 'undefined' && classes[gs.selectedClass]) {
            var cls = classes[gs.selectedClass];
            md.push('**' + cls.name + '**');
            md.push('');
            if (cls.description) md.push(cls.description);
        } else {
            md.push('*Not selected.*');
        }
        md.push('');

        md.push('#### Barrier Jacket Style');
        md.push('');
        if (gs.barrierJacketStyle && typeof barrierJacketStyles !== 'undefined' && barrierJacketStyles[gs.barrierJacketStyle]) {
            var style = barrierJacketStyles[gs.barrierJacketStyle];
            md.push('**' + style.name + '**');
            md.push('');
            if (style.description) md.push(style.description);
        } else {
            md.push('*Not selected.*');
        }
        md.push('');

        // ---- Body Enhancements ----
        md.push('### Body Enhancements');
        md.push('');
        var perkNames = { speed: 'Speed', strength: 'Strength', sense: 'Sense', dexterity: 'Dexterity', intelligence: 'Intelligence', wisdom: 'Wisdom' };
        Object.keys(perkNames).forEach(function (key) {
            var tier = (gs.bodyPerks && gs.bodyPerks[key]) || 0;
            var free = gs.freeBodyPerks ? (gs.freeBodyPerks[key] || 0) : 0;
            var paid = Math.max(0, tier - free);
            var label = perkNames[key] + ' — Tier ' + tier;
            if (free > 0) label += ' (' + free + ' free, ' + paid + ' paid)';
            md.push('#### ' + label);
            md.push('');
            var desc = (typeof getBodyPerkDescription === 'function') ? stripPerkDesc(getBodyPerkDescription(key, tier)) : '';
            md.push(desc || '*No description available.*');
            md.push('');
        });
        // ---- Spell Routines ----
        md.push('### Spell Routines');
        md.push('');
        if (gs.learnedSpells && gs.learnedSpells.length > 0) {
            var cats = { physical: [], elemental: [], abstract: [] };
            gs.learnedSpells.forEach(function (sp) {
                if (cats[sp.category]) cats[sp.category].push(sp);
            });
            var catNames = { physical: 'Physical', elemental: 'Elemental', abstract: 'Abstract' };
            Object.keys(cats).forEach(function (cat) {
                var list = cats[cat];
                if (!list.length) return;
                list.sort(function (a, b) { return a.tier - b.tier; });
                md.push('#### ' + catNames[cat] + ' (' + list.length + ')');
                md.push('');
                list.forEach(function (sp) {
                    var dispName = sp.name || ((typeof getSpellDisplayName === 'function') ? getSpellDisplayName(sp.id, sp.category) : sp.id);
                    var prof = sp.proficiency || 'beginner';
                    var profLabel = prof.charAt(0).toUpperCase() + prof.slice(1);
                    var apCost = (sp.totalCost != null ? sp.totalCost : (sp.baseCost != null ? sp.baseCost : sp.cost)) || 0;
                    md.push('##### ' + dispName);
                    md.push('');
                    md.push('*Tier ' + sp.tier + ' · ' + profLabel + ' · ' + apCost + ' AP*');
                    md.push('');
                    var ptext = (typeof getSpellProficiencyText === 'function') ? getSpellProficiencyText(sp.id, sp.category, prof) : '';
                    if (ptext) md.push(ptext);
                    md.push('');
                });
            });
        } else {
            md.push('*No spells learned.*');
            md.push('');
        }
        // ---- Intelligent Device ----
        md.push('### Intelligent Device');
        md.push('');

        md.push('#### Material');
        md.push('');
        if (gs.device && gs.device.material && typeof deviceMaterials !== 'undefined' && deviceMaterials[gs.device.material]) {
            var mat = deviceMaterials[gs.device.material];
            md.push('**' + mat.name + '**');
            md.push('');
            if (mat.description) md.push(mat.description);
        } else {
            md.push('*Not selected.*');
        }
        md.push('');

        md.push('#### Shape');
        md.push('');
        if (gs.device && gs.device.shape && gs.selectedClass) {
            var shapeName = gs.device.shape.replace(/_/g, ' ').replace(/\b\w/g, function (l) { return l.toUpperCase(); });
            md.push('**' + shapeName + '**');
            md.push('');
            var shapeDesc = (typeof getDeviceShapeDescription === 'function') ? getDeviceShapeDescription(gs.selectedClass, gs.device.shape) : '';
            if (shapeDesc && shapeDesc !== 'Description not available.') md.push(shapeDesc);
        } else {
            md.push('*Not selected.*');
        }
        md.push('');

        md.push('#### Device Enhancements');
        md.push('');
        var devPerkNames = { processing: 'Processing', weave: 'Weave', barrier: 'Barrier', structural: 'Structural' };
        Object.keys(devPerkNames).forEach(function (key) {
            var tier = (gs.device && gs.device.perks && gs.device.perks[key]) || 0;
            var free = gs.freeDevicePerks ? (gs.freeDevicePerks[key] || 0) : 0;
            var paid = Math.max(0, tier - free);
            var label = devPerkNames[key] + ' — Tier ' + tier;
            if (free > 0) label += ' (' + free + ' free, ' + paid + ' paid)';
            md.push('##### ' + label);
            md.push('');
            var desc = (typeof getDevicePerkDescription === 'function') ? stripPerkDesc(getDevicePerkDescription(key, tier)) : '';
            md.push(desc || '*No description available.*');
            md.push('');
        });
        // ---- Final Assessment ----
        md.push('### Final Assessment');
        md.push('');
        var aetherRemaining = gs.aetherPoints - gs.aetherSpent;
        var ppRemaining = gs.personalizationPoints - gs.personalizationSpent;
        md.push('| Resource | Total | Spent | Remaining |');
        md.push('| --- | --- | --- | --- |');
        md.push('| Aether Points (AP) | ' + gs.aetherPoints + ' | ' + gs.aetherSpent + ' | ' + aetherRemaining + ' |');
        md.push('| Personalization Points (PP) | ' + gs.personalizationPoints + ' | ' + gs.personalizationSpent + ' | ' + ppRemaining + ' |');
        md.push('');

        var rankScore = { malkuth: 1, yesod: 2, hod: 3, netzach: 4, tiferet: 5, geburah: 6, chesed: 7, binah: 8, chokhmah: 9, keter: 10 };
        var totalPower = 0;
        totalPower += gs.manaReactorRank ? ((rankScore[gs.manaReactorRank] || 1) * 10) : 0;
        totalPower += Object.values(gs.bodyPerks || {}).reduce(function (sum, val) { return sum + (val || 0); }, 0);
        totalPower += (gs.learnedSpells || []).reduce(function (sum, sp) { return sum + (sp.tier || 0); }, 0);
        totalPower += Object.values((gs.device && gs.device.perks) || {}).reduce(function (sum, val) { return sum + (val || 0); }, 0);

        var powerLevel = 'Novice';
        if (totalPower > 150) powerLevel = 'Legendary';
        else if (totalPower > 100) powerLevel = 'Master';
        else if (totalPower > 75) powerLevel = 'Expert';
        else if (totalPower > 50) powerLevel = 'Adept';
        else if (totalPower > 25) powerLevel = 'Apprentice';

        var playstyle = 'Balanced';
        if (gs.selectedClass === 'knight') playstyle = 'Close-Quarters Combat Specialist';
        else if (gs.selectedClass === 'bombardment') playstyle = 'Long-Range Destruction Specialist';
        else if (gs.selectedClass === 'thaumaturge') playstyle = 'Support and Enhancement Specialist';

        md.push('- **Overall Power Level:** ' + powerLevel);
        md.push('- **Total Power Score:** ' + totalPower);
        md.push('- **Recommended Playstyle:** ' + playstyle);
        md.push('');
        md.push('---');
        md.push('');
        md.push('*Generated by the Mages CYOA character builder on ' + new Date().toLocaleString() + '.*');

        return md.join('\n');
    },

    clear() {
        if (confirm('Are you sure you want to clear all saved data? This cannot be undone.')) {
            localStorage.removeItem(this.saveKey);
            alert('Saved data cleared successfully.');
            return true;
        }
        return false;
    }
};

// Initialize state on page load
function initializeState() {
    try {
        const hasSavedData = localStorage.getItem(saveSystem.saveKey) !== null;
        
        if (hasSavedData) {
            const loadSaved = confirm('A saved build was found. Would you like to load it?');
            if (loadSaved) {
                saveSystem.load();
            }
        }
    } catch (e) {
        console.error('Error checking saved data:', e);
    }
    
    pointTracker.updateDisplay();
}