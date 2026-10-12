// Main Application Logic for Mages CYOA

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    initializeApplication();
});

function initializeApplication() {
    try {
        initializeState();
    } catch (e) {
        console.error('State init failed:', e);
    }
    
    setupDifficultySelection();
    setupModal();
    setupPointTrackerToggle();
    setupAccordion();
    
    if (typeof navigation !== 'undefined') {
        navigation.init();
    }
    
    if (typeof enhanceAllSelects !== 'undefined') {
        enhanceAllSelects();
    }
    
    console.log('Mages CYOA Application Initialized');
}

// Setup difficulty selection buttons
function setupDifficultySelection() {
    const difficultyButtons = document.querySelectorAll('.difficulty-btn');
    const beginJourneyBtn = document.getElementById('beginJourney');
    
    console.log('Setting up difficulty selection...');
    console.log('Found difficulty buttons:', difficultyButtons.length);
    console.log('Difficulty buttons:', difficultyButtons);
    
    difficultyButtons.forEach((button, index) => {
        console.log(`Button ${index}:`, button, 'data-difficulty:', button.dataset.difficulty);
        button.addEventListener('click', (e) => {
            console.log('Difficulty button clicked!', e);
            const difficulty = button.dataset.difficulty;
            selectDifficulty(difficulty, button);
        });
    });
    
    console.log('Event listeners attached successfully');
    
    if (beginJourneyBtn) {
        beginJourneyBtn.addEventListener('click', () => {
            if (gameState.difficulty) {
                if (typeof navigation !== 'undefined') {
                    navigation.goToPage(2);
                }
            }
        });
    }
}

// Handle difficulty selection
function selectDifficulty(difficulty, button) {
    // Update button states
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
    
    // Update game state
    gameState.difficulty = difficulty;
    
    // Set points based on difficulty
    const config = difficultyConfig[difficulty];
    gameState.aetherPoints = config.aetherPoints;
    gameState.personalizationPoints = config.personalizationPoints;
    
    // Update point tracker display
    if (typeof pointTracker !== 'undefined') {
        pointTracker.updateDisplay();
    }
    
    // Enable begin journey button
    const beginJourneyBtn = document.getElementById('beginJourney');
    if (beginJourneyBtn) {
        beginJourneyBtn.removeAttribute('disabled');
    }
    
    console.log(`Difficulty selected: ${difficulty}`);
    console.log(`Aether Points: ${gameState.aetherPoints}`);
    console.log(`Personalization Points: ${gameState.personalizationPoints}`);
}

// Setup accordion toggles
function setupAccordion() {
    document.querySelectorAll('.accordion-header').forEach(function(header) {
        header.addEventListener('click', function() {
            var item = header.closest('.accordion-item');
            var wasOpen = item.classList.contains('open');
            item.classList.toggle('open', !wasOpen);
        });
    });
}

// Setup point tracker toggle
function setupPointTrackerToggle() {
    const tracker = document.getElementById('pointTracker');
    const header = tracker ? tracker.querySelector('.tracker-header') : null;
    if (tracker && header) {
        header.addEventListener('click', function() {
            tracker.classList.toggle('collapsed');
        });
    }
}

// Setup modal functionality
function setupModal() {
    const modal = document.getElementById('spellModal');
    const closeBtn = modal?.querySelector('.close-modal');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (modal) {
                modal.classList.remove('active');
            }
        });
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}

// Show spell details in modal
function showSpellDetails(spellId, category) {
    const modal = document.getElementById('spellModal');
    const modalTitle = document.getElementById('modalSpellName');
    const modalDetails = document.getElementById('modalSpellDetails');
    
    if (!modal || !modalTitle || !modalDetails) return;
    
    // Find spell data from actual spell database
    let spell = null;
    if (typeof spellData !== 'undefined' && spellData[category]) {
        spell = spellData[category].find(s => s.id === spellId);
    }
    
    if (!spell) {
        modalTitle.textContent = 'Spell Not Found';
        modalDetails.innerHTML = '<p>The requested spell could not be found.</p>';
        modal.classList.add('active');
        return;
    }
    
    // Check if spell is learned and get current proficiency
    const learnedSpell = gameState.learnedSpells.find(s => s.id === spellId);
    const currentProficiency = learnedSpell ? learnedSpell.proficiency : 'beginner';
    
    modalTitle.textContent = (typeof getSpellDisplayName === 'function') ? getSpellDisplayName(spellId, category) : spell.name;
    
    var proficiencyLevels = ['beginner', 'apprentice', 'adept', 'expert', 'master'];
    var proficiencyNames = ['Beginner', 'Apprentice', 'Adept', 'Expert', 'Master'];
    
    var tabsHtml = '<div class="proficiency-tabs">';
    proficiencyLevels.forEach(function(level, index) {
        var isActive = level === currentProficiency ? 'active' : '';
        var costLabel = level === 'beginner' ? ' (base)' : ' (+' + getProficiencyCost(spell.cost, level) + ' AP)';
        tabsHtml += '<button class="proficiency-tab ' + isActive + '" data-proficiency="' + level + '">' + proficiencyNames[index] + costLabel + '</button>';
    });
    tabsHtml += '</div>';
    
    var contentHtml = '<div class="spell-header">' +
        '<p><strong>Category:</strong> ' + category.charAt(0).toUpperCase() + category.slice(1) + '</p>' +
        '<p><strong>Tier:</strong> ' + spell.tier + '</p>' +
        '<p><strong>Base Cost:</strong> ' + spell.cost + ' AP</p>' +
        (learnedSpell ? '<p><strong>Current Proficiency:</strong> <span class="learned-badge">' + currentProficiency.charAt(0).toUpperCase() + currentProficiency.slice(1) + '</span> (' + learnedSpell.totalCost + ' AP total)</p>' : '<p><strong>Status:</strong> Not Learned</p>') +
        '</div><hr>' + tabsHtml + '<div class="proficiency-content">';
    
    proficiencyLevels.forEach(function(level) {
        var isActive = level === currentProficiency ? 'active' : '';
        var description = (typeof getSpellProficiencyText === 'function') ? getSpellProficiencyText(spellId, category, level) : (spell.proficiency && spell.proficiency[level] ? spell.proficiency[level] : 'Description not available for this proficiency level.');
        var totalAtLevel = getTotalSpellCost(spell.cost, level);
        contentHtml += '<div class="proficiency-panel ' + isActive + '" data-proficiency="' + level + '">' +
            '<h4>' + level.charAt(0).toUpperCase() + level.slice(1) + ' Proficiency (' + totalAtLevel + ' AP total)</h4>' +
            formatDescription(description) +
            '</div>';
    });
    
    contentHtml += '</div>';
    
    contentHtml += '<div class="modal-actions" id="modalSpellActions"></div>';

    modalDetails.innerHTML = contentHtml;

    var profTabs = modalDetails.querySelectorAll('.proficiency-tab');
    var profPanels = modalDetails.querySelectorAll('.proficiency-panel');
    var selectedProficiency = currentProficiency;

    function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

    function refreshSpellList() {
        var activeTab = document.querySelector('.tab-btn.active');
        if (typeof navigation !== 'undefined' && activeTab) {
            navigation.displaySpells(activeTab.dataset.category);
        }
    }

    function bindActions() {
        var actions = document.getElementById('modalSpellActions');
        if (!actions) return;

        var learnBtn = actions.querySelector('.learn-spell-btn');
        if (learnBtn) {
            learnBtn.addEventListener('click', function() {
                if (typeof navigation === 'undefined') return;
                navigation.toggleSpell(spell.id, spell.name, category, selectedProficiency);
                refreshSpellList();
                showSpellDetails(spell.id, category);
            });
        }

        var setBtn = actions.querySelector('.set-prof-btn');
        if (setBtn) {
            setBtn.addEventListener('click', function() {
                var learned = gameState.learnedSpells.find(function(s) { return s.id === spell.id; });
                if (!learned) return;
                var delta = getProficiencyCost(spell.cost, selectedProficiency) - getProficiencyCost(spell.cost, learned.proficiency);
                if (delta > 0 && !pointTracker.canAfford(delta, 'aether')) {
                    alert('Not enough Aether Points! Need ' + delta + ' AP.');
                    return;
                }
                if (delta > 0) pointTracker.spendPoints(delta, 'aether');
                else if (delta < 0) pointTracker.refundPoints(-delta, 'aether');
                learned.proficiency = selectedProficiency;
                learned.totalCost = getTotalSpellCost(spell.cost, selectedProficiency);
                refreshSpellList();
                showSpellDetails(spell.id, category);
            });
        }
        var unlearnBtn = actions.querySelector('.unlearn-spell-btn');
        if (unlearnBtn) {
            unlearnBtn.addEventListener('click', function() {
                if (typeof navigation === 'undefined') return;
                navigation.toggleSpell(spell.id, spell.name, category);
                modal.classList.remove('active');
                refreshSpellList();
            });
        }
    }

    function renderActions() {
        var actions = document.getElementById('modalSpellActions');
        if (!actions) return;
        var learned = gameState.learnedSpells.find(function(s) { return s.id === spell.id; });
        var html = '';
        if (!learned) {
            var learnCost = getTotalSpellCost(spell.cost, selectedProficiency);
            html += '<button class="action-btn learn-spell-btn">Learn at ' + cap(selectedProficiency) + ' (' + learnCost + ' AP)</button>';
        } else {
            html += '<span class="current-prof-label">Current: ' + cap(learned.proficiency) + ' (' + learned.totalCost + ' AP)</span>';
            if (selectedProficiency !== learned.proficiency) {
                var delta = getProficiencyCost(spell.cost, selectedProficiency) - getProficiencyCost(spell.cost, learned.proficiency);
                var sign = delta >= 0 ? '+' : '';
                html += '<button class="action-btn set-prof-btn">Set to ' + cap(selectedProficiency) + ' (' + sign + delta + ' AP)</button>';
            }
            html += '<button class="action-btn unlearn-spell-btn">Unlearn Spell (refund ' + learned.totalCost + ' AP)</button>';
        }
        actions.innerHTML = html;
        bindActions();
    }

    profTabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            var targetProf = tab.dataset.proficiency;
            profTabs.forEach(function(t) { t.classList.remove('active'); });
            profPanels.forEach(function(p) { p.classList.remove('active'); });
            tab.classList.add('active');
            var targetPanel = modalDetails.querySelector('.proficiency-panel[data-proficiency="' + targetProf + '"]');
            if (targetPanel) targetPanel.classList.add('active');
            selectedProficiency = targetProf;
            renderActions();
        });
    });

    renderActions();

    modal.classList.add('active');
}

// Export functions for use in other modules
window.MagesCYOA = {
    showSpellDetails,
    formatDescription,
    gameState,
    pointTracker,
    saveSystem
};

// Add error handling
window.addEventListener('error', (e) => {
    console.error('Application Error:', e.error);
});

// Add unhandled promise rejection handling
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled Promise Rejection:', e.reason);
});