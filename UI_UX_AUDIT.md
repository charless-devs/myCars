# UI/UX Audit: Current Website → Minimalist Interactive Showcase

## 1. Visual Hierarchy, Spacing, and Typography Flaws

- **Hero video buried under generic styling** – The `<video class="hero-video">` in `home.html` has no distinct visual treatment; it blends into the background with no emphasis.
- **Inconsistent spacing** – `home.html` uses bare `<div>` containers with no systematic spacing scale; `dashboard.html` has tight `feature-card` gaps that feel cramped.
- **Typography lacks scale** – Headings use default browser sizes; no modular scale using `clamp()` for fluid responsiveness.
- **Font Awesome dependency** – External CDN icons add weight and break offline; no fallback system.
- **Low contrast on feature cards** – White text on subtle backgrounds in `dashboard.info` section needs stronger contrast checks.
- **Social link uniformity** – All icons sized equally; no visual hierarchy (primary vs secondary networks).

## 2. Semantic HTML and Accessibility Improvements

- **`<header class="hero">`** – Missing `<nav>` wrapper semantics; nav links are `<ul>` without `<nav>` ancestor clarity.
- **`<h1>` hierarchy broken** – `home.html` has `<h1>` inside hero, then `<h2>` for film lists; `dashboard.html` uses `<h2>` for brand title and section headers inconsistently.
- **Missing `alt` text on some car images** – Some `dashboard.html` cards have generic `alt` attributes; should describe the specific car model.
- **No `<main>` element** – Neither template uses a semantic `<main>` wrapper.
- **Keyboard navigation** – Focus styles are absent; brand list `<li>` items in `dashboard.html` respond to `onclick` but not `keydown`.
- **Video controls** – `playsinline` and `muted` are present, but no `controls` for accessibility; users cannot interact with the video.
- **Color contrast not defined** – No CSS variables for accessible color schemes; light/dark mode would require recalculating contrasts.

## 3. Static Elements Upgradable via JavaScript

- **Staggered fade-up reveals** – Sections currently appear abruptly; `IntersectionObserver` can animate `.feature-card`, `.car-card` elements into view.
- **Scroll progress bar** – No indication of reading progress; a thin top border can fill based on scroll position.
- **Custom cursor & magnetic buttons** – Static pointers can become a lagging dot/ring that pulls interactive elements.
- **Project/category filtering animations** – `dashboard.html` brand filtering uses instant `display: block/none`; a Vanilla JS solution can animate layout shifts with `requestAnimationFrame`.
- **3D tilt/cards** – Project cards can respond to mouse coordinates with `--mouse-x`/`--mouse-y` custom properties for border spotlights and subtle tilt.
- **Live project preview modal** – Clicking a car card can open a drawer populated from a structured JavaScript data array (tech specs, screenshots) without page reload.
- **Theme switcher (Light/Dark)** – No preference saved; `localStorage` can persist user choice.
- **Copy-to-clipboard feedback** – Contact details (email/phone) can show a transient “copied!” message.
- **Active navigation section tracker** – As user scrolls, the corresponding nav link highlights based on `IntersectionObserver` intersection with section headers.