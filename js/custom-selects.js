(function() {
    var initialized = false;

    function enhanceSelect(select) {
        if (select.classList.contains('enhanced')) return;

        var options = Array.from(select.options);
        var selectedOption = select.options[select.selectedIndex];
        var isTierSelect = select.classList.contains('tier-select');

        var wrapper = document.createElement('div');
        wrapper.className = 'custom-select';
        if (isTierSelect) wrapper.setAttribute('data-tier-select', 'true');

        var trigger = document.createElement('div');
        trigger.className = 'select-trigger';
        trigger.setAttribute('tabindex', '0');
        trigger.setAttribute('role', 'combobox');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.setAttribute('aria-haspopup', 'listbox');

        var valueSpan = document.createElement('span');
        valueSpan.className = 'select-value';
        if (selectedOption && selectedOption.value) {
            valueSpan.textContent = selectedOption.textContent;
            valueSpan.classList.remove('placeholder');
        } else {
            valueSpan.textContent = select.querySelector('option[value=""]') ? select.querySelector('option[value=""]').textContent : 'Select...';
            valueSpan.classList.add('placeholder');
        }

        var arrow = document.createElement('span');
        arrow.className = 'select-arrow';

        trigger.appendChild(valueSpan);
        trigger.appendChild(arrow);

        var optionsContainer = document.createElement('div');
        optionsContainer.className = 'select-options';
        optionsContainer.setAttribute('role', 'listbox');

        options.forEach(function(opt) {
            var optionEl = document.createElement('div');
            optionEl.className = 'select-option';
            optionEl.setAttribute('role', 'option');
            optionEl.setAttribute('data-value', opt.value);

            if (opt.selected && opt.value !== '') {
                optionEl.classList.add('selected');
            }

            var labelSpan = document.createElement('span');
            labelSpan.className = 'option-label';
            labelSpan.textContent = opt.textContent;

            var costMatch = opt.textContent.match(/\((\d+)\s*points?\)/);
            if (costMatch) {
                labelSpan.textContent = opt.textContent.replace(/\s*\(\d+\s*points?\)/, '');
                var costSpan = document.createElement('span');
                costSpan.className = 'option-cost';
                costSpan.textContent = costMatch[0];
                optionEl.appendChild(labelSpan);
                optionEl.appendChild(costSpan);
            } else {
                optionEl.appendChild(labelSpan);
            }

            if (!opt.value) {
                optionEl.classList.add('placeholder');
            }

            optionsContainer.appendChild(optionEl);
        });

        wrapper.appendChild(trigger);
        wrapper.appendChild(optionsContainer);

        select.parentNode.insertBefore(wrapper, select);
        select.classList.add('enhanced');
        select.style.display = 'none';

        function openDropdown() {
            wrapper.classList.add('open');
            trigger.setAttribute('aria-expanded', 'true');
        }

        function closeDropdown() {
            wrapper.classList.remove('open');
            trigger.setAttribute('aria-expanded', 'false');
        }

        function selectValue(val) {
            select.value = val;
            select.dispatchEvent(new Event('change', { bubbles: true }));

            var opt = select.options[select.selectedIndex];
            if (opt && opt.value) {
                valueSpan.textContent = opt.textContent;
                valueSpan.classList.remove('placeholder');
            } else {
                valueSpan.textContent = select.querySelector('option[value=""]') ? select.querySelector('option[value=""]').textContent : 'Select...';
                valueSpan.classList.add('placeholder');
            }

            optionsContainer.querySelectorAll('.select-option').forEach(function(o) {
                o.classList.toggle('selected', o.getAttribute('data-value') === val);
            });

            closeDropdown();
        }

        trigger.addEventListener('click', function(e) {
            e.stopPropagation();
            if (wrapper.classList.contains('open')) {
                closeDropdown();
            } else {
                document.querySelectorAll('.custom-select.open').forEach(function(s) {
                    s.classList.remove('open');
                });
                openDropdown();
            }
        });

        trigger.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                trigger.click();
            } else if (e.key === 'Escape') {
                closeDropdown();
            }
        });

        optionsContainer.addEventListener('click', function(e) {
            var optionEl = e.target.closest('.select-option');
            if (optionEl) {
                e.stopPropagation();
                selectValue(optionEl.getAttribute('data-value'));
            }
        });

        document.addEventListener('click', function(e) {
            if (!wrapper.contains(e.target)) {
                closeDropdown();
            }
        });

        select._customSelectWrapper = wrapper;
        select._customSelectValueSpan = valueSpan;
    }

    function updateCustomSelect(select) {
        if (!select._customSelectWrapper) return;
        var opt = select.options[select.selectedIndex];
        var valueSpan = select._customSelectValueSpan;
        if (opt && opt.value) {
            valueSpan.textContent = opt.textContent;
            valueSpan.classList.remove('placeholder');
        } else {
            valueSpan.textContent = select.querySelector('option[value=""]') ? select.querySelector('option[value=""]').textContent : 'Select...';
            valueSpan.classList.add('placeholder');
        }
        var wrapper = select._customSelectWrapper;
        var optionsContainer = wrapper.querySelector('.select-options');
        if (optionsContainer) {
            optionsContainer.querySelectorAll('.select-option').forEach(function(o) {
                o.classList.toggle('selected', o.getAttribute('data-value') === select.value);
            });
        }
    }

    window.enhanceAllSelects = function() {
        if (initialized) return;
        initialized = true;
        document.querySelectorAll('select.select-input, select.tier-select').forEach(enhanceSelect);
    };

    window.enhanceSelect = enhanceSelect;
    window.updateCustomSelect = updateCustomSelect;

    window.reEnhanceSelects = function() {
        document.querySelectorAll('select.select-input, select.tier-select').forEach(function(select) {
            if (!select.classList.contains('enhanced')) {
                enhanceSelect(select);
            }
        });
    };
})();
