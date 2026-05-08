// Navigation System for Mages CYOA

// Load spell data
if (typeof spellData !== 'undefined') {
    window.spellData = spellData;
}

const navigation = {
    pages: [1, 2, 3, 4, 5],
    currentPage: 1,
    _listenersSetup: { page2: false, page3: false, page4: false, page5: false },
    
    init() {
        this.setupNavigationButtons();
        this.setupProgressIndicators();
        this.setupKeyboardNavigation();
    },
    
    setupNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousPage());
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextPage());
        }
    },
    
    setupProgressIndicators() {
        const steps = document.querySelectorAll('.nav-step');
        steps.forEach(step => {
            step.addEventListener('click', () => {
                const page = parseInt(step.dataset.page);
                if (this.canGoToPage(page)) {
                    this.goToPage(page);
                }
            });
        });
    },
    
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            const tag = document.activeElement && document.activeElement.tagName;
            if (tag === 'SELECT' || tag === 'INPUT' || tag === 'TEXTAREA') return;
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                this.nextPage();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                this.previousPage();
            }
        });
    },
    
    goToPage(pageNumber) {
        if (!this.pages.includes(pageNumber)) {
            console.error(`Invalid page number: ${pageNumber}`);
            return;
        }
        
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Show target page
        const targetPage = document.getElementById(`page${pageNumber}`);
        if (targetPage) {
            targetPage.classList.add('active');
            this.currentPage = pageNumber;
            gameState.currentPage = pageNumber;
            
            // Update progress indicators
            this.updateProgressIndicators();
            
            // Update navigation buttons
            this.updateNavigationButtons();
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Trigger page-specific initialization
            this.initializePage(pageNumber);
        }
    },
    
    nextPage() {
        const nextPage = this.currentPage + 1;
        if (this.pages.includes(nextPage) && this.canGoToPage(nextPage)) {
            this.goToPage(nextPage);
        }
    },
    
    previousPage() {
        const prevPage = this.currentPage - 1;
        if (this.pages.includes(prevPage)) {
            this.goToPage(prevPage);
        }
    },
    
    canGoToPage(pageNumber) {
        // Page 1 is always accessible
        if (pageNumber === 1) return true;
        
        // Page 2 requires difficulty selection
        if (pageNumber === 2) {
            return gameState.difficulty !== null;
        }
        
        // Page 3 requires page 2 completion
        if (pageNumber === 3) {
            return gameState.difficulty !== null && this.isPage2Complete();
        }
        
        // Page 4 requires page 3 completion
        if (pageNumber === 4) {
            return gameState.difficulty !== null && this.isPage2Complete();
        }
        
        // Page 5 requires all previous pages
        if (pageNumber === 5) {
            return gameState.difficulty !== null && this.isPage2Complete();
        }
        
        return false;
    },
    
    isPage2Complete() {
        // Check if essential character info is set
        return gameState.character.sex !== null &&
               gameState.character.age !== null &&
               gameState.manaReactorRank !== null &&
               gameState.deviceGeneration !== null &&
               gameState.selectedClass !== null;
    },
    
    updateProgressIndicators() {
        const steps = document.querySelectorAll('.nav-step');
        steps.forEach(step => {
            const page = parseInt(step.dataset.page);
            const wrapper = step.closest('.nav-step-wrapper');
            step.classList.remove('active', 'completed');
            if (wrapper) wrapper.classList.remove('active', 'completed');
            
            if (page === this.currentPage) {
                step.classList.add('active');
                if (wrapper) wrapper.classList.add('active');
            } else if (page < this.currentPage) {
                step.classList.add('completed');
                if (wrapper) wrapper.classList.add('completed');
            }
        });
    },
    
    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (prevBtn) {
            prevBtn.disabled = this.currentPage === 1;
        }
        
        if (nextBtn) {
            nextBtn.disabled = this.currentPage === this.pages.length;
        }
    },
    
    initializePage(pageNumber) {
        switch (pageNumber) {
            case 1:
                this.initializePage1();
                break;
            case 2:
                this.initializePage2();
                break;
            case 3:
                this.initializePage3();
                break;
            case 4:
                this.initializePage4();
                break;
            case 5:
                this.initializePage5();
                break;
        }
    },
    
    initializePage1() {
        // Page 1 initialization (difficulty selection)
        const beginJourneyBtn = document.getElementById('beginJourney');
        if (beginJourneyBtn) {
            beginJourneyBtn.disabled = gameState.difficulty === null;
        }
    },
    
    initializePage2() {
        // Page 2 initialization (character creation)
        this.loadCharacterData();
        this.setupPage2EventListeners();
    },
    
    initializePage3() {
        // Page 3 initialization (spell routines)
        this.loadSpellCategories();
        this.setupSpellEventListeners();
    },
    
    initializePage4() {
        // Page 4 initialization (device customization)
        this.loadDeviceData();
        this.setupDeviceEventListeners();
    },
    
    initializePage5() {
        // Page 5 initialization (build summary)
        this.generateBuildSummary();
    },
    
    loadCharacterData() {
        // Load existing character data into form fields
        if (gameState.character.sex) {
            document.querySelectorAll('[data-field="sex"]').forEach(btn => {
                btn.classList.toggle('selected', btn.dataset.value === gameState.character.sex);
            });
        }
        
        if (gameState.character.age) {
            document.querySelectorAll('[data-field="age"]').forEach(btn => {
                btn.classList.toggle('selected', btn.dataset.value === gameState.character.age);
            });
        }
        
        if (gameState.character.height) {
            const heightSlider = document.getElementById('height');
            const heightValue = document.getElementById('heightValue');
            if (heightSlider) heightSlider.value = gameState.character.height;
            if (heightValue) heightValue.textContent = `${gameState.character.height} cm`;
        }
        
        if (gameState.character.bodyShape) {
            const bodyShapeSelect = document.getElementById('bodyShape');
            if (bodyShapeSelect) bodyShapeSelect.value = gameState.character.bodyShape;
            if (typeof updateCustomSelect === 'function' && bodyShapeSelect) updateCustomSelect(bodyShapeSelect);
        }
        
        if (gameState.character.skinColor) {
            const skinColorPicker = document.getElementById('skinColor');
            if (skinColorPicker) skinColorPicker.value = gameState.character.skinColor;
        }
        
        if (gameState.character.eyeColor) {
            const eyeColorPicker = document.getElementById('eyeColor');
            if (eyeColorPicker) eyeColorPicker.value = gameState.character.eyeColor;
        }
        
        if (gameState.character.hairColor) {
            const hairColorPicker = document.getElementById('hairColor');
            if (hairColorPicker) hairColorPicker.value = gameState.character.hairColor;
        }
        
        if (gameState.character.timeKnownMagic) {
            const timeKnownMagicSelect = document.getElementById('timeKnownMagic');
            if (timeKnownMagicSelect) timeKnownMagicSelect.value = gameState.character.timeKnownMagic;
            if (typeof updateCustomSelect === 'function' && timeKnownMagicSelect) updateCustomSelect(timeKnownMagicSelect);
        }
        
        // Load core attributes
        if (gameState.manaReactorRank) {
            const manaReactorSelect = document.getElementById('manaReactorRank');
            if (manaReactorSelect) {
                manaReactorSelect.value = gameState.manaReactorRank;
                this.updateManaReactorDescription();
                if (typeof updateCustomSelect === 'function') updateCustomSelect(manaReactorSelect);
            }
        }
        
        if (gameState.deviceGeneration) {
            const deviceGenSelect = document.getElementById('deviceGeneration');
            if (deviceGenSelect) {
                deviceGenSelect.value = gameState.deviceGeneration;
                this.updateDeviceGenerationDescription();
                if (typeof updateCustomSelect === 'function') updateCustomSelect(deviceGenSelect);
            }
        }
        
        if (gameState.selectedClass) {
            document.querySelectorAll('[data-field="class"]').forEach(btn => {
                btn.classList.toggle('selected', btn.dataset.value === gameState.selectedClass);
            });
            this.updateClassDescription();
        }
        
        if (gameState.barrierJacketStyle) {
            const barrierJacketSelect = document.getElementById('barrierJacketStyle');
            if (barrierJacketSelect) {
                barrierJacketSelect.value = gameState.barrierJacketStyle;
                this.updateBarrierJacketDescription();
                if (typeof updateCustomSelect === 'function') updateCustomSelect(barrierJacketSelect);
            }
        }
        
        const bodyPerks = ['speed', 'strength', 'sense', 'dexterity', 'intelligence', 'wisdom'];
        bodyPerks.forEach(perk => {
            const tierSelect = document.getElementById(`${perk}Tier`);
            if (tierSelect) {
                tierSelect.value = gameState.bodyPerks[perk];
                this.updatePerkDescription(perk);
                if (typeof updateCustomSelect === 'function') updateCustomSelect(tierSelect);
            }
        });
    },
    
    setupPage2EventListeners() {
        if (this._listenersSetup.page2) return;
        this._listenersSetup.page2 = true;
        
        // Sex selection
        document.querySelectorAll('[data-field="sex"]').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('[data-field="sex"]').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                gameState.character.sex = btn.dataset.value;
            });
        });
        
        // Age selection
        document.querySelectorAll('[data-field="age"]').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('[data-field="age"]').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                gameState.character.age = parseInt(btn.dataset.value);
            });
        });
        
        // Height slider
        const heightSlider = document.getElementById('height');
        const heightValue = document.getElementById('heightValue');
        if (heightSlider && heightValue) {
            heightSlider.addEventListener('input', () => {
                gameState.character.height = parseInt(heightSlider.value);
                heightValue.textContent = `${heightSlider.value} cm`;
            });
        }
        
        // Body shape
        const bodyShapeSelect = document.getElementById('bodyShape');
        if (bodyShapeSelect) {
            bodyShapeSelect.addEventListener('change', () => {
                gameState.character.bodyShape = bodyShapeSelect.value;
            });
        }
        
        // Color pickers
        const skinColorPicker = document.getElementById('skinColor');
        if (skinColorPicker) {
            skinColorPicker.addEventListener('input', () => {
                gameState.character.skinColor = skinColorPicker.value;
            });
        }
        
        const eyeColorPicker = document.getElementById('eyeColor');
        if (eyeColorPicker) {
            eyeColorPicker.addEventListener('input', () => {
                gameState.character.eyeColor = eyeColorPicker.value;
            });
        }
        
        const hairColorPicker = document.getElementById('hairColor');
        if (hairColorPicker) {
            hairColorPicker.addEventListener('input', () => {
                gameState.character.hairColor = hairColorPicker.value;
            });
        }
        
        // Time known magic
        const timeKnownMagicSelect = document.getElementById('timeKnownMagic');
        if (timeKnownMagicSelect) {
            timeKnownMagicSelect.addEventListener('change', () => {
                gameState.character.timeKnownMagic = timeKnownMagicSelect.value;
            });
        }
        
        // Mana reactor rank
        const manaReactorSelect = document.getElementById('manaReactorRank');
        if (manaReactorSelect) {
            manaReactorSelect.addEventListener('change', () => {
                const oldValue = gameState.manaReactorRank;
                const newValue = manaReactorSelect.value;
                
                // Refund old cost
                if (oldValue && manaReactorRanks[oldValue]) {
                    pointTracker.refundPoints(manaReactorRanks[oldValue].cost, 'personalization');
                }
                
                // Apply new cost
                if (newValue && manaReactorRanks[newValue]) {
                    if (pointTracker.canAfford(manaReactorRanks[newValue].cost, 'personalization')) {
                        pointTracker.spendPoints(manaReactorRanks[newValue].cost, 'personalization');
                        gameState.manaReactorRank = newValue;
                        this.updateManaReactorDescription();
                    } else {
                        manaReactorSelect.value = oldValue;
                        if (typeof updateCustomSelect === 'function') updateCustomSelect(manaReactorSelect);
                        alert('Not enough Personalization Points!');
                    }
                }
            });
        }
        
        // Device generation
        const deviceGenSelect = document.getElementById('deviceGeneration');
        if (deviceGenSelect) {
            deviceGenSelect.addEventListener('change', () => {
                const oldValue = gameState.deviceGeneration;
                const newValue = deviceGenSelect.value;
                
                // Refund old cost
                if (oldValue && deviceGenerations[oldValue]) {
                    pointTracker.refundPoints(deviceGenerations[oldValue].cost, 'personalization');
                }
                
                // Apply new cost
                if (newValue && deviceGenerations[newValue]) {
                    if (pointTracker.canAfford(deviceGenerations[newValue].cost, 'personalization')) {
                        pointTracker.spendPoints(deviceGenerations[newValue].cost, 'personalization');
                        gameState.deviceGeneration = newValue;
                        this.updateDeviceGenerationDescription();
                    } else {
                        deviceGenSelect.value = oldValue;
                        if (typeof updateCustomSelect === 'function') updateCustomSelect(deviceGenSelect);
                        alert('Not enough Personalization Points!');
                    }
                }
            });
        }
        
        // Class selection
        document.querySelectorAll('[data-field="class"]').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('[data-field="class"]').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                gameState.selectedClass = btn.dataset.value;
                this.updateClassDescription();
                if (typeof applyClassAdaptations === 'function') applyClassAdaptations();
            });
        });
        
        // Barrier jacket style
        const barrierJacketSelect = document.getElementById('barrierJacketStyle');
        if (barrierJacketSelect) {
            barrierJacketSelect.addEventListener('change', () => {
                const oldValue = gameState.barrierJacketStyle;
                const newValue = barrierJacketSelect.value;
                
                // Refund old cost
                if (oldValue && barrierJacketStyles[oldValue]) {
                    pointTracker.refundPoints(barrierJacketStyles[oldValue].cost, 'personalization');
                }
                
                // Apply new cost
                if (newValue && barrierJacketStyles[newValue]) {
                    if (pointTracker.canAfford(barrierJacketStyles[newValue].cost, 'personalization')) {
                        pointTracker.spendPoints(barrierJacketStyles[newValue].cost, 'personalization');
                        gameState.barrierJacketStyle = newValue;
                        this.updateBarrierJacketDescription();
                    } else {
                        barrierJacketSelect.value = oldValue;
                        if (typeof updateCustomSelect === 'function') updateCustomSelect(barrierJacketSelect);
                        alert('Not enough Personalization Points!');
                    }
                }
            });
        }
        
        // Body perks tiers
        const bodyPerks = ['speed', 'strength', 'sense', 'dexterity', 'intelligence', 'wisdom'];
        bodyPerks.forEach(perk => {
            const tierSelect = document.getElementById(`${perk}Tier`);
            if (tierSelect) {
                tierSelect.addEventListener('change', () => {
                    const oldTier = gameState.bodyPerks[perk];
                    const newTier = parseInt(tierSelect.value);
                    const tierCost = 5; // Each tier costs 5 points
                    
                    // Refund old cost
                    pointTracker.refundPoints(oldTier * tierCost, 'personalization');
                    
                    // Apply new cost
                    if (pointTracker.canAfford(newTier * tierCost, 'personalization')) {
                        pointTracker.spendPoints(newTier * tierCost, 'personalization');
                        gameState.bodyPerks[perk] = newTier;
                        this.updatePerkDescription(perk);
                    } else {
                        tierSelect.value = oldTier;
                        if (typeof updateCustomSelect === 'function') updateCustomSelect(tierSelect);
                        alert('Not enough Personalization Points!');
                    }
                });
            }
        });
        
        // Next button
        const page2NextBtn = document.getElementById('page2Next');
        if (page2NextBtn) {
            page2NextBtn.addEventListener('click', () => {
                if (this.isPage2Complete()) {
                    this.nextPage();
                } else {
                    alert('Please complete all required fields before proceeding.');
                }
            });
        }
    },
    
    updateManaReactorDescription() {
        const descElement = document.getElementById('manaReactorDescription');
        if (descElement && gameState.manaReactorRank && manaReactorRanks[gameState.manaReactorRank]) {
            descElement.innerHTML = formatDescription(manaReactorRanks[gameState.manaReactorRank].description);
        }
    },
    
    updateDeviceGenerationDescription() {
        const descElement = document.getElementById('deviceGenerationDescription');
        if (descElement && gameState.deviceGeneration && deviceGenerations[gameState.deviceGeneration]) {
            descElement.innerHTML = formatDescription(deviceGenerations[gameState.deviceGeneration].description);
        }
    },
    
    updateClassDescription() {
        const descElement = document.getElementById('classDescription');
        if (descElement && gameState.selectedClass && classes[gameState.selectedClass]) {
            descElement.innerHTML = formatDescription(classes[gameState.selectedClass].description);
        }
    },
    
    updateBarrierJacketDescription() {
        const descElement = document.getElementById('barrierJacketDescription');
        if (descElement && gameState.barrierJacketStyle && barrierJacketStyles[gameState.barrierJacketStyle]) {
            descElement.innerHTML = formatDescription(barrierJacketStyles[gameState.barrierJacketStyle].description);
        }
    },
    
    updatePerkDescription(perk) {
        const descElement = document.getElementById(`${perk}Description`);
        if (descElement) {
            const tier = gameState.bodyPerks[perk];
            var desc = (typeof getBodyPerkDescription === 'function') ? getBodyPerkDescription(perk, tier) : bodyPerkTiers[perk][tier];
            descElement.innerHTML = `<p>${desc}</p>`;
        }
        this.updateTierProgress(perk);
    },
    
    updateTierProgress(perk) {
        const perkCard = document.getElementById(`${perk}Tier`)?.closest('.perk-card');
        if (!perkCard) return;
        const tier = gameState.bodyPerks[perk];
        let progressEl = perkCard.querySelector('.tier-progress');
        if (!progressEl) {
            progressEl = document.createElement('div');
            progressEl.className = 'tier-progress';
            for (var i = 1; i <= 10; i++) {
                var pip = document.createElement('div');
                pip.className = 'tier-pip';
                pip.dataset.tier = i;
                progressEl.appendChild(pip);
            }
            var tierSelector = perkCard.querySelector('.tier-selector');
            if (tierSelector) tierSelector.appendChild(progressEl);
        }
        progressEl.querySelectorAll('.tier-pip').forEach(function(pip) {
            var pipTier = parseInt(pip.dataset.tier);
            pip.classList.remove('filled', 'high');
            if (pipTier <= tier) {
                pip.classList.add('filled');
                if (pipTier >= 7) pip.classList.add('high');
            }
        });
    },
    
    loadSpellCategories() {
        const spellContent = document.getElementById('spellContent');
        if (!spellContent) return;
        
        this.updateTabCounts();
        this.displaySpells('physical');
    },
    
    updateTabCounts() {
        var categories = ['physical', 'elemental', 'esoteric'];
        categories.forEach(function(cat) {
            var tab = document.querySelector('.tab-btn[data-category="' + cat + '"]');
            if (tab && spellData && spellData[cat]) {
                var total = spellData[cat].length;
                var learned = gameState.learnedSpells.filter(function(s) { return s.category === cat; }).length;
                var baseName = cat.charAt(0).toUpperCase() + cat.slice(1);
                tab.innerHTML = baseName + ' <span class="spell-count">(' + learned + '/' + total + ')</span>';
            }
        });
    },
    
    displaySpells(category) {
        const spellContent = document.getElementById('spellContent');
        if (!spellContent) return;
        
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
        });
        
        const spells = spellData && spellData[category] ? spellData[category] : [];
        
        if (spells.length === 0) {
            spellContent.innerHTML = '<p class="info-text">No spells available for this category yet.</p>';
            return;
        }

        var sorted = spells.slice().sort(function(a, b) { return a.tier - b.tier; });
        var tierGroups = {};
        sorted.forEach(function(spell) {
            if (!tierGroups[spell.tier]) tierGroups[spell.tier] = [];
            tierGroups[spell.tier].push(spell);
        });

        var tierOrder = Object.keys(tierGroups).map(Number).sort(function(a, b) { return a - b; });
        var html = '';

        tierOrder.forEach(function(tier) {
            html += '<div class="spell-tier-group">';
            html += '<h3 class="spell-tier-heading">Tier ' + tier + '</h3>';
            html += '<div class="spells-grid">';
            tierGroups[tier].forEach(function(spell) {
                var isLearned = gameState.learnedSpells.some(function(s) { return s.id === spell.id; });
                var learnedSpell = gameState.learnedSpells.find(function(s) { return s.id === spell.id; });
                var proficiency = learnedSpell ? learnedSpell.proficiency.charAt(0).toUpperCase() + learnedSpell.proficiency.slice(1) : 'Not Learned';
                var displayCost = learnedSpell ? learnedSpell.totalCost : spell.cost;
                var displayName = (typeof getSpellDisplayName === 'function') ? getSpellDisplayName(spell.id, category) : spell.name;
                
                html += '<div class="spell-card ' + (isLearned ? 'selected' : '') + '" data-spell-id="' + spell.id + '" data-spell-name="' + displayName + '" data-spell-category="' + category + '">';
                html += '<h4>' + displayName + '</h4>';
                html += '<div class="spell-info">';
                html += '<span class="spell-tier-badge">T' + spell.tier + '</span>';
                html += '<span class="spell-cost">' + displayCost + ' AP' + (learnedSpell ? ' (total)' : '') + '</span>';
                if (isLearned) html += '<span class="spell-proficiency-badge">' + proficiency + '</span>';
                html += '</div></div>';
            });
            html += '</div></div>';
        });

        spellContent.innerHTML = html;
    },
    
    setupSpellEventListeners() {
        if (this._listenersSetup.page3) return;
        this._listenersSetup.page3 = true;
        
        // Tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.displaySpells(btn.dataset.category);
            });
        });
        
        // Spell cards (delegation)
        const spellContent = document.getElementById('spellContent');
        if (spellContent) {
            spellContent.addEventListener('click', (e) => {
                const spellCard = e.target.closest('.spell-card');
                if (spellCard) {
                    const spellId = spellCard.dataset.spellId;
                    const spellCategory = spellCard.dataset.spellCategory;
                    if (typeof showSpellDetails !== 'undefined') {
                        showSpellDetails(spellId, spellCategory);
                    }
                }
            });
        }
        
        // Next button
        const page3NextBtn = document.getElementById('page3Next');
        if (page3NextBtn) {
            page3NextBtn.addEventListener('click', () => {
                this.nextPage();
            });
        }
    },
    
    toggleSpell(spellId, spellName, category) {
        var spellIndex = gameState.learnedSpells.findIndex(function(s) { return s.id === spellId; });
        
        if (spellIndex > -1) {
            var spell = gameState.learnedSpells[spellIndex];
            pointTracker.refundPoints(spell.totalCost, 'aether');
            gameState.learnedSpells.splice(spellIndex, 1);
        } else {
            var spellDataObj = spellData && spellData[category] ? spellData[category].find(function(s) { return s.id === spellId; }) : null;
            if (!spellDataObj) {
                console.error('Spell not found:', spellId);
                return;
            }
            
            var totalCost = getTotalSpellCost(spellDataObj.cost, 'beginner');
            if (pointTracker.canAfford(totalCost, 'aether')) {
                pointTracker.spendPoints(totalCost, 'aether');
                gameState.learnedSpells.push({
                    id: spellDataObj.id,
                    name: (typeof getSpellDisplayName === 'function') ? getSpellDisplayName(spellDataObj.id, category) : spellDataObj.name,
                    category: category,
                    tier: spellDataObj.tier,
                    proficiency: 'beginner',
                    baseCost: spellDataObj.cost,
                    totalCost: totalCost
                });
            } else {
                alert('Not enough Aether Points!');
                return;
            }
        }
        
        var activeTab = document.querySelector('.tab-btn.active');
        if (activeTab) {
            this.updateTabCounts();
            this.displaySpells(activeTab.dataset.category);
        }
    },
    
    loadDeviceData() {
        // Load existing device data
        if (gameState.device.material) {
            const materialSelect = document.getElementById('deviceMaterial');
            if (materialSelect) {
                materialSelect.value = gameState.device.material;
                this.updateMaterialDescription();
                if (typeof updateCustomSelect === 'function') updateCustomSelect(materialSelect);
            }
        }
        
        if (gameState.device.shape) {
            const shapeCards = document.querySelectorAll('.shape-card');
            shapeCards.forEach(card => {
                card.classList.toggle('selected', card.dataset.shape === gameState.device.shape);
            });
            this.updateShapeDescription();
        }
        
        const devicePerks = ['processing', 'weave', 'barrier', 'structural'];
        devicePerks.forEach(perk => {
            const tierSelect = document.getElementById(`${perk}Tier`);
            if (tierSelect) {
                tierSelect.value = gameState.device.perks[perk];
                this.updateDevicePerkDescription(perk);
                if (typeof updateCustomSelect === 'function') updateCustomSelect(tierSelect);
            }
        });
        
        // Load device shapes based on class
        this.loadDeviceShapes();
    },
    
    loadDeviceShapes() {
        const shapeOptions = document.getElementById('deviceShapeOptions');
        if (!shapeOptions) return;
        
        if (!gameState.selectedClass) {
            shapeOptions.innerHTML = '<p class="info-text">Please select a class on Page 2 to see available device shapes.</p>';
            return;
        }
        
        const shapes = deviceShapes[gameState.selectedClass];
        if (!shapes) return;
        
        let html = '<div class="shape-options">';
        shapes.forEach(shape => {
            const isSelected = gameState.device.shape === shape.id;
            const desc = shape.description || getDeviceShapeDescription(gameState.selectedClass, shape.id) || '';
            const preview = desc ? desc.split('\n\n')[0].substring(0, 120) + (desc.split('\n\n')[0].length > 120 ? '...' : '') : '';
            html += `
                <div class="shape-card ${isSelected ? 'selected' : ''}" data-shape="${shape.id}">
                    <h4>${shape.name}</h4>
                    ${preview ? `<p class="shape-preview">${preview}</p>` : ''}
                </div>
            `;
        });
        html += '</div>';
        html += '<div id="shapeDescription" class="option-description"></div>';
        shapeOptions.innerHTML = html;
    },
    
    setupDeviceEventListeners() {
        if (this._listenersSetup.page4) return;
        this._listenersSetup.page4 = true;
        
        // Material selection
        const materialSelect = document.getElementById('deviceMaterial');
        if (materialSelect) {
            materialSelect.addEventListener('change', () => {
                const oldValue = gameState.device.material;
                const newValue = materialSelect.value;
                
                // Refund old cost
                if (oldValue && deviceMaterials[oldValue]) {
                    pointTracker.refundPoints(deviceMaterials[oldValue].cost, 'personalization');
                }
                
                // Apply new cost
                if (newValue && deviceMaterials[newValue]) {
                    if (pointTracker.canAfford(deviceMaterials[newValue].cost, 'personalization')) {
                        pointTracker.spendPoints(deviceMaterials[newValue].cost, 'personalization');
                        gameState.device.material = newValue;
                        this.updateMaterialDescription();
                    } else {
                        materialSelect.value = oldValue;
                        if (typeof updateCustomSelect === 'function') updateCustomSelect(materialSelect);
                        alert('Not enough Personalization Points!');
                    }
                }
            });
        }
        
        // Shape selection (delegation)
        const shapeOptions = document.getElementById('deviceShapeOptions');
        if (shapeOptions) {
            shapeOptions.addEventListener('click', (e) => {
                const shapeCard = e.target.closest('.shape-card');
                if (shapeCard) {
                    const shapeId = shapeCard.dataset.shape;
                    gameState.device.shape = shapeId;
                    
                    document.querySelectorAll('.shape-card').forEach(card => {
                        card.classList.toggle('selected', card.dataset.shape === shapeId);
                    });
                    
                    this.updateShapeDescription();
                }
            });
        }
        
        // Device perks tiers
        const devicePerks = ['processing', 'weave', 'barrier', 'structural'];
        devicePerks.forEach(perk => {
            const tierSelect = document.getElementById(`${perk}Tier`);
            if (tierSelect) {
                tierSelect.addEventListener('change', () => {
                    const oldTier = gameState.device.perks[perk];
                    const newTier = parseInt(tierSelect.value);
                    const tierCost = 5; // Each tier costs 5 points
                    
                    // Refund old cost
                    pointTracker.refundPoints(oldTier * tierCost, 'personalization');
                    
                    // Apply new cost
                    if (pointTracker.canAfford(newTier * tierCost, 'personalization')) {
                        pointTracker.spendPoints(newTier * tierCost, 'personalization');
                        gameState.device.perks[perk] = newTier;
                        this.updateDevicePerkDescription(perk);
                    } else {
                        tierSelect.value = oldTier;
                        if (typeof updateCustomSelect === 'function') updateCustomSelect(tierSelect);
                        alert('Not enough Personalization Points!');
                    }
                });
            }
        });
        
        // Next button
        const page4NextBtn = document.getElementById('page4Next');
        if (page4NextBtn) {
            page4NextBtn.addEventListener('click', () => {
                this.nextPage();
            });
        }
    },
    
    updateMaterialDescription() {
        const descElement = document.getElementById('materialDescription');
        if (descElement && gameState.device.material && deviceMaterials[gameState.device.material]) {
            descElement.innerHTML = formatDescription(deviceMaterials[gameState.device.material].description);
        }
    },
    
    updateShapeDescription() {
        const descElement = document.getElementById('shapeDescription');
        if (!descElement || !gameState.device.shape || !gameState.selectedClass) return;
        const desc = getDeviceShapeDescription(gameState.selectedClass, gameState.device.shape);
        if (desc && desc !== 'Description not available.') {
            descElement.innerHTML = formatDescription(desc);
        } else {
            descElement.innerHTML = '';
        }
    },
    
    updateDevicePerkDescription(perk) {
        const descElement = document.getElementById(`${perk}Description`);
        if (descElement) {
            const tier = gameState.device.perks[perk];
            var desc = (typeof getDevicePerkDescription === 'function') ? getDevicePerkDescription(perk, tier) : devicePerkTiers[perk][tier];
            descElement.innerHTML = `<p>${desc}</p>`;
        }
        this.updateDeviceTierProgress(perk);
    },
    
    updateDeviceTierProgress(perk) {
        const perkCard = document.getElementById(`${perk}Tier`)?.closest('.perk-card');
        if (!perkCard) return;
        const tier = gameState.device.perks[perk];
        let progressEl = perkCard.querySelector('.tier-progress');
        if (!progressEl) {
            progressEl = document.createElement('div');
            progressEl.className = 'tier-progress';
            for (var i = 1; i <= 10; i++) {
                var pip = document.createElement('div');
                pip.className = 'tier-pip';
                pip.dataset.tier = i;
                progressEl.appendChild(pip);
            }
            var tierSelector = perkCard.querySelector('.tier-selector');
            if (tierSelector) tierSelector.appendChild(progressEl);
        }
        progressEl.querySelectorAll('.tier-pip').forEach(function(pip) {
            var pipTier = parseInt(pip.dataset.tier);
            pip.classList.remove('filled', 'high');
            if (pipTier <= tier) {
                pip.classList.add('filled');
                if (pipTier >= 7) pip.classList.add('high');
            }
        });
    },
    
    generateBuildSummary() {
        const aetherRemaining = gameState.aetherPoints - gameState.aetherSpent;
        const personalizationRemaining = gameState.personalizationPoints - gameState.personalizationSpent;
        var aetherPct = gameState.aetherPoints > 0 ? Math.min(100, (gameState.aetherSpent / gameState.aetherPoints) * 100) : 0;
        var ppPct = gameState.personalizationPoints > 0 ? Math.min(100, (gameState.personalizationSpent / gameState.personalizationPoints) * 100) : 0;

        const characterOverview = document.getElementById('characterOverview');
        if (characterOverview) {
            characterOverview.innerHTML = `
                <p><strong>Sex:</strong> <span>${gameState.character.sex ? escapeHtml(gameState.character.sex) : 'Not Selected'}</span></p>
                <p><strong>Age:</strong> <span>${gameState.character.age ? gameState.character.age + ' years' : 'Not Selected'}</span></p>
                <p><strong>Height:</strong> <span>${gameState.character.height} cm</span></p>
                <p><strong>Body Shape:</strong> <span>${gameState.character.bodyShape ? escapeHtml(gameState.character.bodyShape) : 'Not Selected'}</span></p>
                <p><strong>Skin:</strong> <span style="display:inline-block;width:16px;height:16px;background:${escapeHtml(gameState.character.skinColor)};border:1px solid rgba(255,255,255,0.3);border-radius:50%;vertical-align:middle;"></span></p>
                <p><strong>Eyes:</strong> <span style="display:inline-block;width:16px;height:16px;background:${escapeHtml(gameState.character.eyeColor)};border:1px solid rgba(255,255,255,0.3);border-radius:50%;vertical-align:middle;"></span></p>
                <p><strong>Hair:</strong> <span style="display:inline-block;width:16px;height:16px;background:${escapeHtml(gameState.character.hairColor)};border:1px solid rgba(255,255,255,0.3);border-radius:50%;vertical-align:middle;"></span></p>
                <p><strong>Time Known:</strong> <span>${gameState.character.timeKnownMagic ? escapeHtml(gameState.character.timeKnownMagic) : 'Not Selected'}</span></p>
            `;
        }
        
        const coreAttributes = document.getElementById('coreAttributes');
        if (coreAttributes) {
            coreAttributes.innerHTML = `
                <p><strong>Mana Reactor:</strong> <span>${gameState.manaReactorRank ? manaReactorRanks[gameState.manaReactorRank].name : 'Not Selected'}</span></p>
                <p><strong>Device Generation:</strong> <span>${gameState.deviceGeneration ? deviceGenerations[gameState.deviceGeneration].name : 'Not Selected'}</span></p>
                <p><strong>Class:</strong> <span>${gameState.selectedClass ? classes[gameState.selectedClass].name : 'Not Selected'}</span></p>
                <p><strong>Barrier Jacket:</strong> <span>${gameState.barrierJacketStyle ? barrierJacketStyles[gameState.barrierJacketStyle].name : 'Not Selected'}</span></p>
            `;
        }
        
        const bodyEnhancements = document.getElementById('bodyEnhancements');
        if (bodyEnhancements) {
            bodyEnhancements.innerHTML = `
                <p><strong>Speed:</strong> <span>Tier ${gameState.bodyPerks.speed}</span></p>
                <p><strong>Strength:</strong> <span>Tier ${gameState.bodyPerks.strength}</span></p>
                <p><strong>Sense:</strong> <span>Tier ${gameState.bodyPerks.sense}</span></p>
                <p><strong>Dexterity:</strong> <span>Tier ${gameState.bodyPerks.dexterity}</span></p>
                <p><strong>Intelligence:</strong> <span>Tier ${gameState.bodyPerks.intelligence}</span></p>
                <p><strong>Wisdom:</strong> <span>Tier ${gameState.bodyPerks.wisdom}</span></p>
            `;
        }
        
        const spellRoutines = document.getElementById('spellRoutines');
        if (spellRoutines) {
            if (gameState.learnedSpells.length > 0) {
                var html = '<p><strong>Total Spells:</strong> <span>' + gameState.learnedSpells.length + '</span></p><ul>';
                gameState.learnedSpells.forEach(function(spell) {
                    var catClass = 'summary-spell-' + spell.category;
                    var displayName = (typeof getSpellDisplayName === 'function') ? getSpellDisplayName(spell.id, spell.category) : spell.name;
                    html += '<li><span class="summary-spell-name">' + escapeHtml(displayName) + '</span><span class="summary-spell-tier">T' + spell.tier + '</span><span class="summary-spell-prof ' + catClass + '">' + spell.proficiency + '</span></li>';
                });
                html += '</ul>';
                spellRoutines.innerHTML = html;
            } else {
                spellRoutines.innerHTML = '<p>No spells learned yet.</p>';
            }
        }
        
        const intelligentDevice = document.getElementById('intelligentDevice');
        if (intelligentDevice) {
            let shapeName = 'Not Selected';
            if (gameState.device.shape) {
                const shapes = deviceShapes[gameState.selectedClass];
                if (shapes) {
                    const shape = shapes.find(s => s.id === gameState.device.shape);
                    if (shape) shapeName = shape.name;
                }
            }
            
            intelligentDevice.innerHTML = `
                <p><strong>Material:</strong> <span>${gameState.device.material ? deviceMaterials[gameState.device.material].name : 'Not Selected'}</span></p>
                <p><strong>Shape:</strong> <span>${shapeName}</span></p>
                <p><strong>Processing:</strong> <span>Tier ${gameState.device.perks.processing}</span></p>
                <p><strong>Weave:</strong> <span>Tier ${gameState.device.perks.weave}</span></p>
                <p><strong>Barrier:</strong> <span>Tier ${gameState.device.perks.barrier}</span></p>
                <p><strong>Structural:</strong> <span>Tier ${gameState.device.perks.structural}</span></p>
            `;
        }
        
        const finalStatistics = document.getElementById('finalStatistics');
        if (finalStatistics) {
            finalStatistics.innerHTML = `
                <p><strong>Aether Points:</strong> <span>${aetherRemaining} / ${gameState.aetherPoints} remaining</span></p>
                <div class="summary-point-bar"><div class="summary-point-fill aether" style="width:${aetherPct}%"></div></div>
                <p style="margin-top:var(--spacing-md)"><strong>Personalization Points:</strong> <span>${personalizationRemaining} / ${gameState.personalizationPoints} remaining</span></p>
                <div class="summary-point-bar"><div class="summary-point-fill pp" style="width:${ppPct}%"></div></div>
            `;
        }
        
        this.setupPage5Buttons();
    },
    
    setupPage5Buttons() {
        if (this._listenersSetup.page5) return;
        this._listenersSetup.page5 = true;
        
        const exportBtn = document.getElementById('exportBuild');
        const saveBtn = document.getElementById('saveBuild');
        const loadBtn = document.getElementById('loadBuild');
        const modifyBtn = document.getElementById('modifyBuild');
        const startOverBtn = document.getElementById('startOver');
        
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                saveSystem.exportToText();
            });
        }
        
        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                saveSystem.save();
            });
        }
        
        if (loadBtn) {
            loadBtn.addEventListener('click', () => {
                if (saveSystem.load()) {
                    this.goToPage(5);
                    pointTracker.updateDisplay();
                }
            });
        }
        
        if (modifyBtn) {
            modifyBtn.addEventListener('click', () => {
                this.goToPage(2);
            });
        }
        
        if (startOverBtn) {
            startOverBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to start over? All your progress will be lost.')) {
                    localStorage.removeItem(saveSystem.saveKey);
                    location.reload();
                }
            });
        }
    }
};

// Navigation is initialized from app.js after state setup