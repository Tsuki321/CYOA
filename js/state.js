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
    
    exportToText() {
        const buildText = this.generateBuildReport();
        
        // Create a blob and download
        const blob = new Blob([buildText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `mages_cyoa_build_${new Date().toISOString().slice(0, 10)}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    },
    
    generateBuildReport() {
        const report = [];
        
        report.push('═══════════════════════════════════════════════════════════════');
        report.push('                      MAGES CYOA - BUILD REPORT');
        report.push('═══════════════════════════════════════════════════════════════');
        report.push('');
        
        // Difficulty
        report.push('DIFFICULTY');
        report.push('───────────────────────────────────────────────────────────────');
        const diffName = gameState.difficulty ? gameState.difficulty.charAt(0).toUpperCase() + gameState.difficulty.slice(1) : 'Not Selected';
        report.push(`Selected: ${diffName}`);
        report.push(`Aether Points: ${gameState.aetherPoints} (${gameState.aetherSpent} spent)`);
        report.push(`Personalization Points: ${gameState.personalizationPoints} (${gameState.personalizationSpent} spent)`);
        report.push('');
        
        // Character Overview
        report.push('CHARACTER OVERVIEW');
        report.push('───────────────────────────────────────────────────────────────');
        report.push(`Sex: ${gameState.character.sex || 'Not Selected'}`);
        report.push(`Age: ${gameState.character.age ? gameState.character.age + ' years' : 'Not Selected'}`);
        report.push(`Height: ${gameState.character.height} cm`);
        report.push(`Body Shape: ${gameState.character.bodyShape || 'Not Selected'}`);
        report.push(`Skin Color: ${gameState.character.skinColor}`);
        report.push(`Eye Color: ${gameState.character.eyeColor}`);
        report.push(`Hair Color: ${gameState.character.hairColor}`);
        report.push(`Time Known About Magic: ${gameState.character.timeKnownMagic || 'Not Selected'}`);
        report.push('');
        
        // Core Attributes
        report.push('CORE ATTRIBUTES');
        report.push('───────────────────────────────────────────────────────────────');
        if (gameState.manaReactorRank) {
            const rank = manaReactorRanks[gameState.manaReactorRank];
            report.push(`Mana Reactor Rank: ${rank.name}`);
        } else {
            report.push('Mana Reactor Rank: Not Selected');
        }
        
        if (gameState.deviceGeneration) {
            const gen = deviceGenerations[gameState.deviceGeneration];
            report.push(`Intelligent Device Generation: ${gen.name}`);
        } else {
            report.push('Intelligent Device Generation: Not Selected');
        }
        
        if (gameState.selectedClass) {
            const cls = classes[gameState.selectedClass];
            report.push(`Class: ${cls.name}`);
        } else {
            report.push('Class: Not Selected');
        }
        
        if (gameState.barrierJacketStyle) {
            const style = barrierJacketStyles[gameState.barrierJacketStyle];
            report.push(`Barrier Jacket Style: ${style.name}`);
        } else {
            report.push('Barrier Jacket Style: Not Selected');
        }
        report.push('');
        
        // Body Enhancements
        report.push('BODY ENHANCEMENTS');
        report.push('───────────────────────────────────────────────────────────────');
        report.push(`Speed Tier: ${gameState.bodyPerks.speed}`);
        report.push(`Strength Tier: ${gameState.bodyPerks.strength}`);
        report.push(`Sense Tier: ${gameState.bodyPerks.sense}`);
        report.push(`Dexterity Tier: ${gameState.bodyPerks.dexterity}`);
        report.push(`Intelligence Tier: ${gameState.bodyPerks.intelligence}`);
        report.push(`Wisdom Tier: ${gameState.bodyPerks.wisdom}`);
        report.push('');
        
        // Spell Routines
        report.push('SPELL ROUTINES');
        report.push('───────────────────────────────────────────────────────────────');
        if (gameState.learnedSpells.length > 0) {
            const categories = { physical: [], elemental: [], esoteric: [] };
            gameState.learnedSpells.forEach(spell => {
                if (categories[spell.category]) {
                    categories[spell.category].push(spell);
                }
            });
            
            Object.keys(categories).forEach(category => {
                report.push(`${category.charAt(0).toUpperCase() + category.slice(1)} Category (${categories[category].length} spells):`);
                categories[category].forEach(spell => {
                    report.push(`  - ${spell.name} (Tier ${spell.tier}, ${spell.proficiency}, ${spell.totalCost || spell.cost} AP)`);
                });
                report.push('');
            });
        } else {
            report.push('No spells learned yet.');
            report.push('');
        }
        
        // Intelligent Device
        report.push('INTELLIGENT DEVICE');
        report.push('───────────────────────────────────────────────────────────────');
        if (gameState.device.material) {
            const material = deviceMaterials[gameState.device.material];
            report.push(`Material: ${material.name}`);
        } else {
            report.push('Material: Not Selected');
        }
        
        if (gameState.device.shape) {
            const shapeName = gameState.device.shape.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            report.push(`Shape: ${shapeName}`);
        } else {
            report.push('Shape: Not Selected');
        }
        
        report.push('Enhancements:');
        report.push(`  Processing Tier: ${gameState.device.perks.processing}`);
        report.push(`  Weave Tier: ${gameState.device.perks.weave}`);
        report.push(`  Barrier Tier: ${gameState.device.perks.barrier}`);
        report.push(`  Structural Tier: ${gameState.device.perks.structural}`);
        report.push('');
        
        // Final Statistics
        report.push('FINAL STATISTICS');
        report.push('───────────────────────────────────────────────────────────────');
        const aetherRemaining = gameState.aetherPoints - gameState.aetherSpent;
        const personalizationRemaining = gameState.personalizationPoints - gameState.personalizationSpent;
        
        report.push(`Total Aether Points: ${gameState.aetherPoints}`);
        report.push(`Aether Points Spent: ${gameState.aetherSpent}`);
        report.push(`Aether Points Remaining: ${aetherRemaining}`);
        report.push('');
        report.push(`Total Personalization Points: ${gameState.personalizationPoints}`);
        report.push(`Personalization Points Spent: ${gameState.personalizationSpent}`);
        report.push(`Personalization Points Remaining: ${personalizationRemaining}`);
        report.push('');
        
        // Power Assessment
        let totalPower = 0;
        totalPower += gameState.manaReactorRank ? parseInt(gameState.manaReactorRank === 'keter' ? 10 : 
            gameState.manaReactorRank === 'chokhmah' ? 9 :
            gameState.manaReactorRank === 'binah' ? 8 :
            gameState.manaReactorRank === 'chesed' ? 7 :
            gameState.manaReactorRank === 'geburah' ? 6 :
            gameState.manaReactorRank === 'tiferet' ? 5 :
            gameState.manaReactorRank === 'netzach' ? 4 :
            gameState.manaReactorRank === 'hod' ? 3 :
            gameState.manaReactorRank === 'yesod' ? 2 : 1) * 10 : 0;
        
        totalPower += Object.values(gameState.bodyPerks).reduce((sum, val) => sum + val, 0);
        totalPower += gameState.learnedSpells.reduce((sum, spell) => sum + spell.tier, 0);
        totalPower += Object.values(gameState.device.perks).reduce((sum, val) => sum + val, 0);
        
        let powerLevel = 'Novice';
        if (totalPower > 150) powerLevel = 'Legendary';
        else if (totalPower > 100) powerLevel = 'Master';
        else if (totalPower > 75) powerLevel = 'Expert';
        else if (totalPower > 50) powerLevel = 'Adept';
        else if (totalPower > 25) powerLevel = 'Apprentice';
        
        report.push(`Overall Power Level: ${powerLevel}`);
        report.push(`Total Power Score: ${totalPower}`);
        report.push('');
        
        // Recommended Playstyle
        let playstyle = 'Balanced';
        if (gameState.selectedClass === 'knight') {
            playstyle = 'Close-Quarters Combat Specialist';
        } else if (gameState.selectedClass === 'bombardment') {
            playstyle = 'Long-Range Destruction Specialist';
        } else if (gameState.selectedClass === 'thaumaturge') {
            playstyle = 'Support and Enhancement Specialist';
        }
        report.push(`Recommended Playstyle: ${playstyle}`);
        report.push('');
        
        report.push('═══════════════════════════════════════════════════════════════');
        report.push(`Generated: ${new Date().toLocaleString()}`);
        report.push('═══════════════════════════════════════════════════════════════');
        
        return report.join('\n');
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