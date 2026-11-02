# Week 10: Enhanced Portfolio with Advanced CSS & Design Systems
## Transform Your Portfolio into a Professional, Animated Experience

### 🎯 Learning Objectives
By completing this project, you will:
- Implement a complete design system using CSS variables for colors, spacing, typography, and animation timing
- Create smooth hover states and micro-interactions using CSS transitions
- Build entrance animations for sections using keyframes and intersection observers
- Apply 2D and 3D transforms for engaging visual effects
- Implement light/dark theme switching with animated transitions
- Optimize animations for 60fps performance using GPU-accelerated properties

### 📚 Prerequisites
Before starting, you should have:
- Completed Week 10 lecture on Advanced CSS & Design Systems
- Reviewed prep work Chapter 16 - CSS Animations & Transitions
- (Optional but recommended) Your portfolio from Week 9 project
- Understanding of CSS properties, flexbox/grid, and basic JavaScript

### 🏗️ Project Overview
Transform your existing portfolio (or build a new one) into a professional, animated showcase that demonstrates mastery of CSS animations, transitions, and design systems. You'll implement smooth micro-interactions, entrance animations, theme switching, and engaging visual effects - all while maintaining performance and accessibility.

### 🚀 Getting Started

**Today's core is Parts 1 to 4 (about 50 minutes after a 10-minute setup). Part 5 is the stretch. Each Part ends with a Checkpoint that says what you should see.** Nothing to install today.

#### First: Create your own copy of this template
This repository is a GitHub **template** (GitHub Classroom is not used this term). Make your own copy of it, then clone that copy.

1. On this repository's page, click the green **Use this template** button and choose **Create a new repository**. On the next screen: Owner = your own GitHub account, Repository name = `in-person-project-8-<your-github-username>`, visibility **Public**. Click **Create repository**. (Your own copy of the starter, not a fork.)
2. **Clone your new repository:**
   ```bash
   git clone https://github.com/<your-github-username>/in-person-project-8-<your-github-username>.git
   cd in-person-project-8-<your-github-username>
   ```

#### Second: Run it (nothing to install)
The starter is three plain files: `index.html`, `styles.css` and `script.js`. There is no `npm install` and no dev server. Open the folder in VS Code and start **Live Server** (right-click `index.html`, "Open with Live Server"), or from the folder run `python3 -m http.server 8000` and open `http://localhost:8000`. Every save reloads the page. Keep the browser **Console** open (F12): a JavaScript error there is the first thing to look at when something does nothing.

**What the starter gives you:** a complete one-page portfolio. `index.html` already has the theme toggle button (lines 11 to 14), `nav-link` links, sections marked `animate-on-scroll` (hero, about, projects, skills, contact) and two grids marked `stagger-children` (`.projects-grid`, `.skills-grid`). `styles.css` has the layout, a partial `:root` design system, and a `TODO` comment at every spot a Part fills in, including empty `@keyframes fadeInUp {}` and `@keyframes typing {}` placeholders and empty `.animate-on-scroll` / `.stagger-children > *` rules. `script.js` already declares `themeToggle` and `root` at the top and has smooth scrolling and a navbar shadow working; its `TODO` lines mark Part 3 and Part 4.

**Fill the TODO in place; do not paste a second copy.** Every code block below replaces or completes a stub that already exists. If a block repeats a line the starter already has (a selector, a `const`), keep the starter's line and add only what is new. Pasting a duplicate `const` gives `SyntaxError: Identifier has already been declared` in the Console and stops the whole file.

**Working in your week 9 React portfolio instead?** You can, after class: the CSS ideas carry over, but the selectors and variable names in this README are the starter's, not your IPP 7 project's, and Part 3's observer needs a `useEffect` in React. Do today's Parts in this starter and port them later.

### 📝 Step-by-Step Instructions

#### Part 1: Design System Setup (10 minutes)

1. **Create a comprehensive CSS variable system** in your main CSS file:

```css
:root {
  /* Color System */
  --color-primary: #667eea;
  --color-primary-dark: #5a67d8;
  --color-secondary: #48bb78;
  --color-accent: #f6ad55;

  --color-text-primary: #2d3748;
  --color-text-secondary: #718096;
  --color-background: #ffffff;
  --color-surface: #f7fafc;
  --color-border: #e2e8f0;

  /* Spacing System */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 4rem;

  /* Typography */
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 2rem;

  /* Animation Timing */
  --transition-fast: 150ms;
  --transition-base: 250ms;
  --transition-slow: 350ms;
  --transition-slower: 500ms;

  /* Easing Functions */
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0.0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Dark Theme Variables */
[data-theme="dark"] {
  --color-text-primary: #f7fafc;
  --color-text-secondary: #cbd5e0;
  --color-background: #1a202c;
  --color-surface: #2d3748;
  --color-border: #4a5568;
}
```

2. **Apply the design system throughout your styles:**
- Replace hard-coded colors with CSS variables
- Use spacing variables for consistent margins and padding
- Apply transition variables for all animations

What's happening here:
- CSS variables create a single source of truth for design decisions
- Theme switching becomes trivial with variable overrides
- Consistent spacing and timing creates professional polish

Common mistakes to avoid:
- Don't mix hard-coded values with variables
- The toggle is not wired until Part 4. To see the dark theme now, open DevTools, select `<html>` and add `data-theme="dark"`; until Part 4 both the sun and the moon icon show side by side, which is expected.

**Checkpoint (Part 1):** the page looks the same as before (the new tokens match the starter's values), and setting `data-theme="dark"` on `<html>` in DevTools flips the background and text colors.

#### Part 2: Smooth Transitions & Micro-interactions (15 minutes)

1. **Add hover transitions to the buttons.** The starter's `.btn` rule already has its colors and padding; fill its `TODO` with the `transition` line, then add the two state rules under it:

```css
/* inside the existing .btn rule, where the TODO is */
  transition: transform var(--transition-base) var(--ease-in-out),
              box-shadow var(--transition-base) var(--ease-in-out),
              background-color var(--transition-base);
  transform: translateY(0);

.btn:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn:active {
  transform: translateY(0);
  transition-duration: var(--transition-fast);
}
```

2. **Create smooth transitions for project cards.** The starter's `.project-card` already has its background, border and `overflow: hidden`; fill its `TODO` with the `transition` line (no padding, the card's children carry it), then add the hover rules:

```css
/* inside the existing .project-card rule, where the TODO is */
  transition: transform var(--transition-base) var(--ease-out),
              box-shadow var(--transition-base) var(--ease-out),
              border-color var(--transition-base);
  cursor: pointer;

.project-card:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--color-primary);
}

/* Image overlay effect */
.project-card .image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 0.375rem;
}

.project-card .image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.project-card:hover .image-overlay {
  opacity: 1;
}
```

3. **Add navigation link animations.** The starter's `.nav-link` already has `position: relative`; fill its `TODO` with the `transition` line and add the `::after` rules:

```css
/* inside the existing .nav-link rule, where the TODO is */
  transition: color var(--transition-fast);

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width var(--transition-base) var(--ease-out);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
```

What's happening here:
- Transform and opacity changes are GPU-accelerated for smooth 60fps, which is why these rules transition `transform` and `opacity` and name the other properties one by one instead of `all`
- Multiple properties transition together for cohesive effects
- Active states provide immediate feedback

**Checkpoint (Part 2):** hovering a button lifts it 2px with a shadow; hovering a project card scales it slightly and its image darkens from the bottom; hovering a nav link grows an underline from the left. If a block does nothing, the selector does not match your page: check the class name in `index.html`.

#### Part 3: Entrance Animations with Keyframes (15 minutes)

Order matters here: **write the JavaScript first (step 1), then the CSS (steps 2 and 3).** The CSS hides every section until the observer marks it `visible`; if the CSS lands before the script, the page goes blank.

1. **Add the IntersectionObserver.** In `script.js`, under the `INTERSECTION OBSERVER FOR ANIMATIONS` heading, replace the two `TODO` lines with:

```javascript
// Intersection Observer for entrance animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate once
    }
  });
}, observerOptions);

// Observe the sections AND the two grids (the grids carry stagger-children)
document.querySelectorAll('.animate-on-scroll, .stagger-children').forEach(el => {
  observer.observe(el);
});
```

Save and check the Console: no errors. Nothing visible changes yet.

2. **Define the keyframes.** In `styles.css` under `ANIMATIONS`, fill the empty `@keyframes fadeInUp {}` placeholder in place (do not add a second one), and add the other three below it:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInScale {
  from { opacity: 0; transform: scale(0.9); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* Staggered animation for grid children */
@keyframes fadeInStagger {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

3. **Apply them.** Fill the three empty rules the starter already has (`.animate-on-scroll`, `.animate-on-scroll.visible`, `.stagger-children > *`) and add the `.visible` stagger rules:

```css
/* Animation classes */
.animate-on-scroll {
  opacity: 0;
}

.animate-on-scroll.visible {
  animation: fadeInUp var(--transition-slower) var(--ease-out) forwards;
}

/* Grid children start hidden and fade in one after another once the grid is visible */
.stagger-children > * {
  opacity: 0;
}

.stagger-children.visible > * {
  animation: fadeInStagger var(--transition-slow) var(--ease-out) forwards;
}

.stagger-children.visible > *:nth-child(1) { animation-delay: 0ms; }
.stagger-children.visible > *:nth-child(2) { animation-delay: 100ms; }
.stagger-children.visible > *:nth-child(3) { animation-delay: 200ms; }
.stagger-children.visible > *:nth-child(4) { animation-delay: 300ms; }
.stagger-children.visible > *:nth-child(5) { animation-delay: 400ms; }
.stagger-children.visible > *:nth-child(6) { animation-delay: 500ms; }
```

What's happening here:
- `forwards` keeps the final frame, so an element stays visible after its animation
- The observer fires once per element (`unobserve`), so scrolling back up does not replay it
- The grids are observed on their own because the children's delays belong to the grid, not to the section around it

**Checkpoint (Part 3):** reload at the top of the page. The hero fades up at once; as you scroll, each section fades up, and the project cards and skill cards appear one after another with a short delay. **If the page is blank:** the observer is not running. Open the Console; a red `SyntaxError` or `ReferenceError` in `script.js` means a paste went wrong (a duplicated `const` is the usual one). Fix it and reload.

#### Part 4: Theme Switching with Smooth Transitions (10 minutes)

The toggle button already exists in `index.html` (lines 11 to 14: `<button class="theme-toggle" aria-label="Toggle theme">` with a sun and a moon span) and the starter CSS already positions it. Do not add a second button.

1. **Make the theme change fade instead of snap.** Fill the `TODO` inside the starter's `body` rule, and the `TODO` inside `.theme-toggle`:

```css
/* inside body { ... }, where the TODO is */
  transition: background-color var(--transition-slow),
              color var(--transition-slow);

/* inside .theme-toggle { ... }, where the TODO is */
  transition: transform var(--transition-base), border-color var(--transition-base);

/* add below the .theme-toggle rule */
.theme-toggle:hover {
  transform: rotate(180deg);
  border-color: var(--color-primary);
}

@keyframes spin-once {
  to { transform: rotate(360deg); }
}

.theme-toggle.spinning {
  animation: spin-once var(--transition-slow) var(--ease-in-out);
}
```

2. **Wire the toggle.** In `script.js`, the two declarations at the top (`const themeToggle = ...` and `const root = ...`, lines 6 and 7) are already there: **do not paste them again.** Replace the two `TODO` lines under them with:

```javascript
// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
  const newTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';

  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  // One full spin, then back to normal (removed when the animation ends)
  themeToggle.classList.add('spinning');
  themeToggle.addEventListener('animationend', () => themeToggle.classList.remove('spinning'), { once: true });
});
```

What's happening here:
- `data-theme` lives on `<html>` (`document.documentElement`), so the dark variables reach every element on the page, header and footer included
- `localStorage` remembers the choice, so a reload keeps the theme
- The spin is a class and a keyframe, not an inline style, so it does not fight the hover rotation

**Checkpoint (Part 4):** clicking the toggle fades the whole page between light and dark (no snap), the button spins once, only one icon shows at a time, and a reload keeps the theme you chose. **Parts 1 to 4 done is today's complete bar** (see Submission).

#### Part 5: Advanced Effects & Polish (15 minutes, stretch)

Only if Parts 1 to 4 are done and checked.

1. **Add a typing animation for your hero text.** Fill the starter's empty `@keyframes typing {}` placeholder in place, add `blink`, and fill the `TODO` inside `.hero-title` with the `overflow`, `white-space`, `border-right` and `animation` lines (the starter already sets its font size):

```css
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  50% { border-color: transparent; }
}

.hero-title {
  font-size: var(--font-size-3xl);
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid var(--color-primary);
  animation:
    typing 3s steps(30, end),
    blink 0.5s step-end infinite;
  animation-delay: 0.5s;
  animation-fill-mode: both;
}
```

2. **Create floating animations for background elements.** First give them something to animate: in `index.html`, replace the comment `<!-- TODO: Add floating shapes for background animation -->` (inside the hero) with three shapes, and make sure the hero can contain them:

```html
<div class="floating-shape" style="top: 10%; left: 10%; width: 80px; height: 80px; border-radius: 50%; background: var(--color-primary);"></div>
<div class="floating-shape" style="top: 60%; left: 80%; width: 120px; height: 120px; border-radius: 50%; background: var(--color-primary-dark);"></div>
<div class="floating-shape" style="top: 75%; left: 20%; width: 60px; height: 60px; border-radius: 30%; background: var(--color-primary);"></div>
```

Then in `styles.css`, add `position: relative; overflow: hidden;` to the `.hero` rule, fill the `float` keyframe placeholder (`/* TODO: Add float animation for background elements */`) and add the shape rules:

```css
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(-2deg);
  }
  66% {
    transform: translateY(-5px) rotate(2deg);
  }
}

.floating-shape {
  position: absolute;
  opacity: 0.1;
  animation: float 6s var(--ease-in-out) infinite;
}

.floating-shape:nth-child(1) { animation-delay: 0s; }
.floating-shape:nth-child(2) { animation-delay: 2s; }
.floating-shape:nth-child(3) { animation-delay: 4s; }
```

3. **Add a parallax scrolling effect.** In `index.html`, add `parallax` and a speed to the hero: `<section id="home" class="hero animate-on-scroll parallax" data-speed="0.3">` (keep its other classes). In `script.js`, replace the `TODO` under `PARALLAX EFFECT` with the listener below, wrapped in the `debounce` helper the starter already defines at the bottom of the file (that is also the last `TODO`):

```javascript
// Parallax effect for hero section (debounced: the helper is at the bottom of script.js)
window.addEventListener('scroll', debounce(() => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.parallax');

  parallaxElements.forEach(el => {
    const speed = el.dataset.speed || 0.5;
    const yPos = -(scrolled * speed);
    el.style.transform = `translateY(${yPos}px)`;
  });
}, 10));
```

**Checkpoint (Part 5):** the hero title types itself out on load, three faint shapes drift behind it, and the hero slides slowly as you scroll. The starter's `TODO: Create typing animation function` in `script.js` stays empty: the CSS version above replaces it.

### 🎨 Customization Ideas

**Color Schemes:**
- Try different color palettes from coolors.co
- Implement multiple theme options beyond light/dark
- Add gradient backgrounds with animated color shifts

**Animation Variations:**
- Experiment with different easing functions
- Create custom keyframe animations for your brand
- Add particle effects or animated backgrounds

**Interactive Elements:**
- Implement magnetic buttons that follow the cursor
- Add tilt effects on project cards using vanilla-tilt.js
- Create custom cursors with trailing animations

### 🏆 Challenge Extensions (if you finish early)

**Tier 1 (about 10 minutes): Respect reduced motion.** Add a `@media (prefers-reduced-motion: reduce)` block that sets `animation: none` and `transition: none` on everything and makes `.animate-on-scroll` and `.stagger-children > *` fully visible (`opacity: 1`).
- **Done when:** with your OS "reduce motion" setting on (macOS: Accessibility, Display; Windows: Settings, Accessibility, Visual effects), the page loads fully visible with nothing moving, and with the setting off everything animates as before.

**Tier 2 (about 15 minutes, after Tier 1): a 3D card flip.** Give one project card a front and a back face (`transform-style: preserve-3d`, `backface-visibility: hidden`) and flip it on hover with `rotateY(180deg)` under a `perspective` on the grid.
- **Done when:** hovering that card shows its back face (a short description or links) with a smooth flip, and the other cards still scale as in Part 2.

**Tier 3 (253A, about 20 minutes, a bounded task): a style-guide page.** Add `styleguide.html` that lists every token in your `:root` (colors as swatches, spacing as bars, each timing and easing with a small box that animates with it), using the same `styles.css`.
- **Done when:** the page renders every token from `:root` with its name and value, flips with the theme toggle, and is linked from the footer of `index.html`.

### 🐛 Troubleshooting Guide

**The page is blank (or a section never appears):**
- Part 3's CSS hides sections until the observer adds `visible`. Open the Console (F12): a red error in `script.js` means the observer never ran. The usual one is `SyntaxError: Identifier 'themeToggle' has already been declared`: a pasted `const` that the starter already declares. Delete the duplicate and reload.
- No error but still blank: check that the observer block is inside `script.js` (not `styles.css`) and that `index.html` loads `script.js` at the bottom (it does in the starter).


**Animation not smooth:**
- Check if using transform/opacity instead of position/width
- Ensure GPU acceleration with `transform: translateZ(0)`
- Reduce number of simultaneous animations

**Theme switching not persisting:**
- Verify localStorage is working
- Check for typos in data-theme attribute
- Ensure CSS variables are properly scoped

**Intersection Observer not working:**
- Check browser compatibility
- Verify threshold and rootMargin values
- Ensure elements have the correct class names

**Animations triggering too early/late:**
- Adjust rootMargin in observer options
- Modify threshold values
- Check element visibility in viewport

### 📖 Resources & References

**CSS Animation Documentation:**
- [MDN CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [MDN CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)
- [CSS Triggers](https://csstriggers.com/) - Performance reference

**Animation Libraries & Tools:**
- [Animate.css](https://animate.style/) - Ready-made animations
- [AOS Library](https://michalsnik.github.io/aos/) - Animate on scroll
- [Cubic Bezier Generator](https://cubic-bezier.com/) - Custom easing

**Design Inspiration:**
- [Awwwards](https://www.awwwards.com/) - Award-winning animations
- [CodePen](https://codepen.io/) - Animation examples
- [UI Movement](https://uimovement.com/) - UI animation patterns

### ✅ What "complete" means (complete/incomplete grade)

A pushed repository with commits made today whose page shows, in this order:
- (a) Part 1: the design-system variables in use (one `:root` block, one `[data-theme="dark"]` block)
- (b) Part 2: a hover transition you can see on a button, a card and a nav link
- (c) Part 3: sections fading up on scroll and the grid children staggering, with no blank page
- (d) Part 4: the toggle fading the theme, spinning once, and surviving a reload

Part 5 and the Tiers are optional. If you stop early, push what works: a page with (a) to (c) and a note in the commit message is worth more than a broken Part 4.

Before you leave: `git add .`, `git commit -m "In-person project 8"`, `git push`, then paste your repository URL into the bCourses assignment.
