// ==========================================
// STYLE GUIDE
// Lists every custom property declared in :root, with a live preview
// ==========================================

// Collect the token names from the :root rule in styles.css
function getRootTokens() {
    const names = [];

    for (const sheet of document.styleSheets) {
        let rules;
        try {
            rules = sheet.cssRules;
        } catch (e) {
            continue; // some browsers block reading stylesheets over file://
        }

        for (const rule of rules) {
            if (rule.selectorText === ':root') {
                for (const prop of rule.style) {
                    if (prop.startsWith('--')) names.push(prop);
                }
            }
        }
    }

    return names;
}

// Each group: which tokens it holds, and how to preview one
const groups = [
    {
        list: 'sg-colors',
        prefix: '--color-',
        preview: name => `<div class="sg-swatch" style="background: var(${name});"></div>`
    },
    {
        list: 'sg-spacing',
        prefix: '--spacing-',
        preview: name => `<div class="sg-bar" style="width: var(${name});"></div>`
    },
    {
        list: 'sg-type',
        prefix: '--font-size-',
        preview: name => `<span style="font-size: var(${name});">The quick brown fox</span>`
    },
    {
        list: 'sg-timing',
        prefix: '--transition-',
        preview: name => `<div class="sg-track"><div class="sg-box" style="transition-duration: var(${name}); transition-timing-function: var(--ease-in-out);"></div></div>`
    },
    {
        list: 'sg-easing',
        prefix: '--ease-',
        preview: name => `<div class="sg-track"><div class="sg-box" style="transition-duration: var(--transition-slower); transition-timing-function: var(${name});"></div></div>`
    }
];

const tokens = getRootTokens();

groups.forEach(group => {
    const list = document.getElementById(group.list);
    const names = tokens.filter(name => name.startsWith(group.prefix));

    if (names.length === 0) {
        list.innerHTML = '<li>No tokens found. Open this page through Live Server or http://localhost, not as a file.</li>';
        return;
    }

    list.innerHTML = names.map(name => `
        <li class="sg-row">
            <span class="sg-name">${name}</span>
            ${group.preview(name)}
            <span class="sg-value" data-token="${name}"></span>
        </li>
    `).join('');
});

// Show the current computed value of every token (dark theme overrides some)
function updateValues() {
    const styles = getComputedStyle(document.documentElement);
    document.querySelectorAll('.sg-value').forEach(el => {
        el.textContent = styles.getPropertyValue(el.dataset.token).trim();
    });
}

updateValues();

// Re-read the values whenever the theme toggle changes data-theme
new MutationObserver(updateValues).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
});

// Slide the timing and easing boxes back and forth so each token can be seen moving
setInterval(() => {
    document.querySelectorAll('.sg-track').forEach(track => track.classList.toggle('moved'));
}, 1200);
