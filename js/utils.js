// Utility Functions for Mages CYOA

// Format text with proper paragraph breaks
function formatDescription(text) {
    if (!text) return '';
    return text.replace(/\r\n/g, '\n').split('\n\n').map(paragraph => `<p>${paragraph.replace(/\n/g, '<br>')}</p>`).join('');
}

// Generate random ID
function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Smooth scroll to element
function scrollToElement(element, offset = 100) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Validate email format (for future use)
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validate number range
function isInRange(value, min, max) {
    return value >= min && value <= max;
}

// Clamp value between min and max
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Get color from hex value (for future use)
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Calculate color brightness (for text contrast)
function getBrightness(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return 0;
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
}

// Determine if text should be light or dark based on background
function getTextColor(backgroundColor) {
    return getBrightness(backgroundColor) > 128 ? '#333333' : '#ffffff';
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Copy text to clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error('Failed to copy text: ', err);
        return false;
    }
}

// Download file
function downloadFile(content, filename, type = 'text/plain') {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Read file
function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = (e) => reject(e);
        reader.readAsText(file);
    });
}

// Parse JSON safely
function safeJsonParse(jsonString, defaultValue = null) {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        console.error('JSON parse error:', e);
        return defaultValue;
    }
}

// Deep clone object
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// Merge objects
function mergeObjects(target, source) {
    return { ...target, ...source };
}

// Get object property by path (e.g., 'user.profile.name')
function getPropertyByPath(obj, path) {
    return path.split('.').reduce((current, prop) => current?.[prop], obj);
}

// Set object property by path
function setPropertyByPath(obj, path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const target = keys.reduce((current, key) => {
        if (!current[key]) current[key] = {};
        return current[key];
    }, obj);
    target[lastKey] = value;
}

// Remove object property by path
function removePropertyByPath(obj, path) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const target = keys.reduce((current, key) => current?.[key], obj);
    if (target) delete target[lastKey];
}

// Check if object is empty
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

// Get all keys from nested object
function getAllKeys(obj, prefix = '') {
    let keys = [];
    for (let key in obj) {
        const fullKey = prefix ? `${prefix}.${key}` : key;
        keys.push(fullKey);
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            keys = keys.concat(getAllKeys(obj[key], fullKey));
        }
    }
    return keys;
}

// Format date
function formatDate(date, format = 'YYYY-MM-DD HH:mm:ss') {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');
    
    return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day)
        .replace('HH', hours)
        .replace('mm', minutes)
        .replace('ss', seconds);
}

// Get relative time (e.g., "2 hours ago")
function getRelativeTime(date) {
    const now = new Date();
    const then = new Date(date);
    const diffMs = now - then;
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffSecs < 60) return 'just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? 's' : ''} ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? 's' : ''} ago`;
    return `${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) > 1 ? 's' : ''} ago`;
}

// Generate random color
function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

// Lighten or darken color
function adjustColor(hex, amount) {
    const rgb = hexToRgb(hex);
    if (!rgb) return hex;
    
    const adjust = (value) => clamp(value + amount, 0, 255);
    
    const r = adjust(rgb.r).toString(16).padStart(2, '0');
    const g = adjust(rgb.g).toString(16).padStart(2, '0');
    const b = adjust(rgb.b).toString(16).padStart(2, '0');
    
    return `#${r}${g}${b}`;
}

// Get contrasting color
function getContrastingColor(hex) {
    const brightness = getBrightness(hex);
    return brightness > 128 ? '#000000' : '#ffffff';
}

// Convert RGB to HSL
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    
    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }
    
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };
}

// Capitalize first letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Capitalize all words
function capitalizeWords(str) {
    return str.split(' ').map(word => capitalize(word)).join(' ');
}

// Convert string to camelCase
function toCamelCase(str) {
    return str.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
}

// Convert string to kebab-case
function toKebabCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase();
}

// Convert string to snake_case
function toSnakeCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1_$2').replace(/[\s-]+/g, '_').toLowerCase();
}

// Truncate text
function truncateText(text, maxLength, suffix = '...') {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - suffix.length) + suffix;
}

// Count words in text
function countWords(text) {
    return text.trim().split(/\s+/).length;
}

// Count characters in text
function countCharacters(text) {
    return text.length;
}

// Generate slug from text
function generateSlug(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-')
        .trim();
}

// Validate URL
function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

// Get URL parameters
function getUrlParams() {
    const params = {};
    const searchParams = new URLSearchParams(window.location.search);
    for (const [key, value] of searchParams) {
        params[key] = value;
    }
    return params;
}

// Set URL parameter
function setUrlParam(key, value) {
    const url = new URL(window.location);
    url.searchParams.set(key, value);
    window.history.replaceState({}, '', url);
}

// Remove URL parameter
function removeUrlParam(key) {
    const url = new URL(window.location);
    url.searchParams.delete(key);
    window.history.replaceState({}, '', url);
}

// Clear all URL parameters
function clearUrlParams() {
    const url = new URL(window.location);
    url.search = '';
    window.history.replaceState({}, '', url);
}

// Local storage helpers
const storage = {
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.error('Storage get error:', e);
            return defaultValue;
        }
    },
    
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Storage set error:', e);
            return false;
        }
    },
    
    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Storage remove error:', e);
            return false;
        }
    },
    
    clear() {
        try {
            localStorage.clear();
            return true;
        } catch (e) {
            console.error('Storage clear error:', e);
            return false;
        }
    }
};

// Session storage helpers
const session = {
    get(key, defaultValue = null) {
        try {
            const item = sessionStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.error('Session get error:', e);
            return defaultValue;
        }
    },
    
    set(key, value) {
        try {
            sessionStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Session set error:', e);
            return false;
        }
    },
    
    remove(key) {
        try {
            sessionStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Session remove error:', e);
            return false;
        }
    },
    
    clear() {
        try {
            sessionStorage.clear();
            return true;
        } catch (e) {
            console.error('Session clear error:', e);
            return false;
        }
    }
};

// Cookie helpers
const cookie = {
    set(name, value, days = 7) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};path=/`;
    },
    
    get(name) {
        const nameEQ = `${name}=`;
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            let c = cookie.trim();
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length);
            }
        }
        return null;
    },
    
    remove(name) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
    }
};

// Export all utilities
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatDescription,
        generateId,
        debounce,
        isInViewport,
        scrollToElement,
        isValidEmail,
        isInRange,
        clamp,
        formatNumber,
        hexToRgb,
        getBrightness,
        getTextColor,
        escapeHtml,
        copyToClipboard,
        downloadFile,
        readFile,
        safeJsonParse,
        deepClone,
        mergeObjects,
        getPropertyByPath,
        setPropertyByPath,
        removePropertyByPath,
        isEmpty,
        getAllKeys,
        formatDate,
        getRelativeTime,
        randomColor,
        adjustColor,
        getContrastingColor,
        rgbToHsl,
        capitalize,
        capitalizeWords,
        toCamelCase,
        toKebabCase,
        toSnakeCase,
        truncateText,
        countWords,
        countCharacters,
        generateSlug,
        isValidUrl,
        getUrlParams,
        setUrlParam,
        removeUrlParam,
        clearUrlParams,
        storage,
        session,
        cookie
    };
}