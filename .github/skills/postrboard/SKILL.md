---
name: postrboard
description: >
  Apply the Postrboard design language — a refined, airy, code-native aesthetic — when building any website, landing page, UI component, or web app. Use this skill whenever the user asks to design, style, or build a frontend and wants it to feel polished, modern, and developer-native. This skill teaches how to use the Postrboard CSS framework correctly and how to avoid common AI design tells that make generated sites look generic.
---

# Postrboard Design Language

You are building with **Postrboard CSS** — a token-first, zero-JavaScript CSS framework with an opinionated aesthetic. Your job is to produce frontends that feel like they were made by a designer with a clear point of view — not averaged from 10,000 SaaS templates.

---

## Generation Checklist (read first, every time)

Before writing any markup, confirm:

1. ✅ Fonts loaded before stylesheet (preconnect + Google Fonts, then `postrboard.min.css`)
2. ✅ `data-mode` set on `<html>` (or omitted for system preference)
3. ✅ Layout uses `container` + `stack` or `cluster` — no bare `<div>` soup
4. ✅ At most one accent color dominates (coral for action, azure for info, sage for success)
5. ✅ Copy is specific — names the action, input, output, and consequence
6. ✅ No generic SaaS layout (Hero→Features→Testimonials→CTA→Footer)
7. ✅ Every custom `style=""` attribute is a deliberate layout override, not a token replacement
8. ✅ Responsive: grids collapse on mobile, nav simplifies, nothing overflows

---

## Philosophy

> **If you remember only five things:**
> 1. Use tokens, never raw values.
> 2. The terminal is a visual element, not just a code block.
> 3. Most of the page should be neutral — color is earned.
> 4. Left-align heroes. Mix mono + sans. Vary font weights aggressively.
> 5. If you can't say why an element is there, remove it.

- **Quiet CSS for loud products.** The framework recedes; the content speaks.
- **Restraint over excess.** Ship fewer, better screens. Every element earns its place.
- **Opinionated, not generic.** This is a design language, not a utility framework.
- **Code-native.** Monospace type, terminal windows, and developer aesthetics are first-class.
- **Token-first.** Every value flows from design tokens. Hardcode hex values only when defining/overriding token variables in `:root` — component CSS consumes variables.

---

## Setup

Always include in this order:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://burkeholland.github.io/postrboard-design/postrboard.min.css">
```

Color mode on `<html>`:
```html
<html data-mode="light">  <!-- or "dark", or omit for system preference -->
```

---

## Design Tokens

### Core Colors

| Token | Value | Use |
|-------|-------|-----|
| `--coral` | #ff7f50 | Brand accent — decoration, highlights, not for text backgrounds |
| `--coral-surface` | #c2410c | Filled coral buttons/backgrounds (white text passes WCAG) |
| `--coral-text` | #c4460a (light) / #fb923c (dark) | Coral-colored text that meets contrast |
| `--azure` | #0ea5e9 | Secondary accent, links, info states |
| `--azure-text` | #0369a1 (light) / #38bdf8 (dark) | Azure text with contrast |
| `--sage` | #84cc16 | Success, positive states |
| `--sage-text` | #4d7c0f (light) / #a3e635 (dark) | Success text |
| `--danger` | #dc2626 | Error, destructive |
| `--danger-text` | #991b1b (light) / #f87171 (dark) | Error text |
| `--warning` | #f59e0b | Warning state |
| `--warning-text` | #92400e (light) / #fbbf24 (dark) | Warning text |
| `--on-accent` | #ffffff | Text on filled accent backgrounds |

### Tints (subtle backgrounds for badges/alerts)

`--coral-tint`, `--azure-tint`, `--sage-tint`, `--danger-tint`, `--warning-tint`

### Surface & Layout (adapt to light/dark automatically)

| Token | Use |
|-------|-----|
| `--bg` | Page background |
| `--bg-gradient` | Page background gradient overlay |
| `--surface` | Card/component solid background |
| `--surface-glass` | Translucent glass background |
| `--text` | Primary text |
| `--text-muted` | Secondary text |
| `--text-meta` | Tertiary/label text |
| `--border` | Default borders |
| `--border-glass` | Glass element borders |
| `--input-border` | Form control borders |
| `--code-bg` | Code blocks, subtle fills |
| `--nav-bg` | Navbar translucent background |

### Spacing Scale

`--space-1` (4px) → `--space-8` (64px). Aliases: `--sp-1` → `--sp-8`.

| Step | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|------|---|---|---|---|---|---|---|---|
| px | 4 | 8 | 12 | 16 | 24 | 32 | 48 | 64 |

### Radius

| Token | Value | Use |
|-------|-------|-----|
| `--r-pill` | 9999px | Buttons, badges, pills |
| `--r-soft` | 16px | Cards, panels, modals |
| `--r-compact` | 8px | Inputs, small components |
| `--r-sharp` | 4px | Tight elements, code blocks |

### Elevation

| Token | Use |
|-------|-----|
| `--shadow-subtle` | Cards at rest |
| `--shadow-medium` | Dropdowns, hover states |
| `--shadow-high` | Modals, overlays |
| `--shadow-terminal` | Terminal windows |
| `--shadow-coral` | Coral button glow (resting) |
| `--shadow-coral-surface` | Primary button shadow |
| `--shadow-coral-surface-hover` | Primary button shadow on hover |
| `--shadow-azure` | Azure element glow |

### Typography

| Token | Font | Use |
|-------|------|-----|
| `--sans` | Inter | Body text, headings |
| `--mono` | JetBrains Mono | Code, data display, form helpers |
| `--mono-display` | Space Mono | Wordmarks, decorative monospace, large display |

### Motion

| Token | Value | Use |
|-------|-------|-----|
| `--ease` | `0.2s ease` | Full shorthand: `transition: color var(--ease)` |
| `--duration-fast` | 100ms | Tooltips, micro-feedback |
| `--duration-normal` | 200ms | Most interactions |
| `--duration-slow` | 300ms | Drawers, modals |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Combine: `transition: transform var(--duration-normal) var(--ease-out)` |

### Controls

| Token | Value |
|-------|-------|
| `--control-height-sm` | 32px |
| `--control-height` | 40px |
| `--control-height-lg` | 48px |
| `--focus-ring` | `0 0 0 3px rgba(255,127,80,0.12)` |

---

## Layout

```html
<main class="container stack">        <!-- 1200px max + vertical flow -->
<div class="container-sm">             <!-- 720px narrow -->
<div class="container-lg">             <!-- 1440px wide -->
<div class="cluster">                  <!-- Horizontal flex-wrap with gap -->
<section class="section">              <!-- padding-block: 64px -->
<div class="grid-auto">                <!-- auto-fit, min 240px columns -->
<div class="grid-two">                 <!-- 2 equal columns (collapses on mobile) -->
<div class="grid-sidebar">             <!-- 260px + fluid (collapses on mobile) -->
<div class="feature-grid">             <!-- 3 columns (collapses on mobile) -->
<div class="stat-grid">                <!-- auto-fit, min 180px -->
<div class="pricing-grid">             <!-- 3 columns (collapses on mobile) -->
<div class="footer-grid">              <!-- 2fr + 3×1fr columns -->
```

`stack` creates vertical rhythm via `margin-top` on child elements. Variants: `stack-sm` (12px), `stack-lg` (48px).

**Responsive behavior:** Major fixed grids (`grid-two`, `grid-sidebar`, `feature-grid`, `pricing-grid`) collapse to single-column below 768px. `footer-grid` becomes 2 columns below 1024px and single-column below 768px. `stat-grid` and `grid-auto` auto-fit naturally (minimum 180px / 240px columns). Use `.hide-sm`/`.show-sm` sparingly for responsive visibility.

---

## Typography

```html
<h1 class="text-display">         <!-- clamp(2.5rem, 6vw, 3.5rem), weight 800, -0.06em -->
<h1 class="text-h1">              <!-- 56px, weight 800, -2px tracking -->
<h2 class="text-h2">              <!-- clamp(2rem, 4vw, 3rem), weight 700 -->
<h3 class="text-card">            <!-- 24px, weight 700 -->
<p class="text-body">             <!-- 17px, line-height 1.75 -->
<span class="text-meta">          <!-- 13px UPPERCASE, tracked, Inter (sans), muted color -->
<code class="text-mono">          <!-- JetBrains Mono, 14px -->
<span class="gradient-text">      <!-- coral→azure gradient fill -->
```

Note: `text-meta` uses `--sans` (Inter) with uppercase + letter-spacing. For monospace labels, use `text-mono` or set `font-family: var(--mono)` directly.

**Important:** Use framework type classes (`text-display`, `text-h1`, etc.) by default — they handle sizing, weight, and tracking correctly. The extreme hero styles (9.5rem, -0.075em tracking) shown in Signature Patterns are one-off overrides for flagship landing pages only. Don't apply them everywhere.

---

## Components

### Buttons

Size variants are modifiers on a style class:

```html
<a class="btn btn-primary" href="#">Ship it</a>
<a class="btn btn-primary btn-sm" href="#">Small primary</a>
<a class="btn btn-secondary btn-lg" href="#">Large secondary</a>
<a class="btn btn-ghost" href="#">Cancel</a>
<a class="btn btn-gradient" href="#">Gradient</a>
<a class="btn btn-danger" href="#">Delete</a>
<button class="btn btn-primary" disabled>Disabled</button>
```

Button groups: `<div class="button-group"><button class="btn btn-secondary">Left</button><button class="btn btn-secondary">Right</button></div>`

FAB: `<button class="fab">+</button>` (fixed bottom-right, circular)

### Cards (required child structure)

```html
<!-- Base glass card -->
<div class="card">
  <h3 class="card-title">Title</h3>
  <p class="card-body">Description text</p>
</div>

<!-- Interactive (adds hover lift) -->
<div class="card card-interactive">...</div>

<!-- Feature card -->
<div class="feature-card">
  <div class="feature-icon">⚡</div>
  <h4 class="feature-title">Fast builds</h4>
  <p class="feature-body">Compiles in under 2 seconds.</p>
</div>

<!-- Stat card -->
<div class="stat-card">
  <div class="stat-value">2.3s</div>
  <div class="stat-label">Avg. build time</div>
  <div class="stat-trend up">↑ 14% faster</div>
</div>

<!-- Pricing card -->
<div class="pricing-card popular">
  <h3>Pro</h3>
  <div class="stat-value">$29</div>
  <ul class="styled-list">...</ul>
  <a class="btn btn-primary w-full" href="#">Choose Pro</a>
</div>

<!-- Testimonial -->
<div class="testimonial-card">
  <p class="testimonial-quote">"Direct quote from a real person."</p>
  <div class="cluster mt-4">
    <span class="avatar avatar-sm">JD</span>
    <span class="text-meta">Jane Doe, Acme Corp</span>
  </div>
</div>

<!-- CTA Band -->
<div class="cta-band">
  <h2 class="cta-title">Ready to ship?</h2>
  <p class="cta-body">Deploy your first build in 30 seconds.</p>
  <a class="btn" href="#">Start free</a>
</div>
```

### Forms (required structure)

```html
<form class="form-stack">
  <div class="form-field">
    <label class="form-label" for="email">Email</label>
    <input class="input" id="email" type="email" placeholder="you@company.com">
    <span class="form-helper">We'll never share your email.</span>
  </div>
  <div class="form-field">
    <label class="form-label" for="pass">Password</label>
    <input class="input is-error" id="pass" type="password">
    <span class="form-message is-error">Password must be 8+ characters.</span>
  </div>
  <button class="btn btn-primary" type="submit">Sign in</button>
</form>
```

Additional form elements: `.input-sm`, `.input-lg`, `.textarea`, `.select`, `.checkbox`, `.radio`, `.radio-group`, `.switch` + `.switch-track`, `.input-group` + `.input-affix`, `.floating-field` + `.floating-input` + `.floating-label`, `.segmented-control`, `.dropzone`.

### Navigation

```html
<nav class="navbar">
  <div class="container cluster nav-inner">
    <a class="nav-logo" href="#">Brand</a>
    <div class="cluster nav-links">
      <a class="nav-link active" href="#">Docs</a>
      <a class="nav-link" href="#">Pricing</a>
      <a class="btn btn-primary btn-sm" href="#">Get started</a>
    </div>
  </div>
</nav>
```

Additional nav: `.tabs` + `.tab`, `.breadcrumb`, `.pagination` + `.page-link`, `.sidebar-nav`, `.dropdown` + `.dropdown-menu`, `.stepper` + `.step` + `.step-circle` + `.step-line`.

### Terminal (signature component)

```html
<div class="terminal">
  <div class="terminal-bar">
    <span class="terminal-dot red"></span>
    <span class="terminal-dot yellow"></span>
    <span class="terminal-dot green"></span>
  </div>
  <div class="terminal-body">
    <span class="prompt">$</span> <span class="cmd">npm install postrboard-css</span>
    <br><span class="dim">added 1 package in 0.4s</span>
  </div>
</div>
```

### Feedback & Overlays

```html
<div class="badge badge-coral">New</div>
<div class="badge badge-azure">Info</div>
<div class="badge badge-sage">Live</div>
<div class="version-badge">v1.0.0</div>
<div class="cmd-pill"><span class="dollar">$</span> npm start</div>

<div class="alert alert-info">...</div>
<div class="alert alert-success">...</div>
<div class="alert alert-warning">...</div>
<div class="alert alert-danger">...</div>

<div class="toast"><span class="toast-title">Deployed</span><span class="toast-body">Build #47 is live.</span></div>
<div class="banner">...</div>
<div class="progress"><div class="progress-fill" style="--value:72%"></div></div>
<div class="spinner"></div>
<div class="skeleton" style="width:200px"></div>
```

Modal: `.modal` > `.modal-card` > `.modal-head` + `.modal-body` + `.modal-actions`

```html
<div class="modal is-active">
  <div class="modal-card">
    <div class="modal-head">
      <h3 class="modal-title">Confirm deploy</h3>
      <button class="close-button"><span class="icon">×</span></button>
    </div>
    <div class="modal-body">
      <p>This will deploy build #47 to production. Continue?</p>
    </div>
    <div class="modal-actions">
      <button class="btn btn-ghost">Cancel</button>
      <button class="btn btn-primary">Deploy</button>
    </div>
  </div>
</div>
```

Drawer: `.drawer-toggle` + `.drawer-backdrop` + `.drawer-panel` > `.drawer-head`

```html
<input type="checkbox" class="drawer-toggle" id="drawer1">
<label class="drawer-backdrop" for="drawer1"></label>
<div class="drawer-panel">
  <div class="drawer-head">
    <h3>Settings</h3>
    <label class="close-button" for="drawer1"><span class="icon">×</span></label>
  </div>
  <!-- drawer content here -->
</div>
```

Dropdown:

```html
<div class="dropdown">
  <button class="btn btn-secondary">Options</button>
  <div class="dropdown-menu">
    <a href="#">Edit</a>
    <a href="#">Duplicate</a>
    <button>Delete</button>
  </div>
</div>
```

Alert:

```html
<div class="alert alert-warning">
  <svg class="icon">...</svg>
  <div>
    <strong class="alert-title">Rate limit approaching</strong>
    <p class="alert-body">You've used 90% of your API calls this month.</p>
  </div>
  <button class="close-button"><span class="icon">×</span></button>
</div>
```

Tooltip: `<span class="tooltip" data-tip="Hint">Hover me</span>`
Command palette: `.command-palette` > `.input` + `.command-group` > `.command-group-label` + `.command-item`

### Data Display

```html
<div class="table-wrap">
  <table class="data-table">
    <thead><tr><th>Name</th><th>Status</th></tr></thead>
    <tbody><tr><td>Build #47</td><td><span class="badge badge-sage">Live</span></td></tr></tbody>
  </table>
</div>

<ul class="list-group">
  <li class="list-item"><span class="list-title">Deploy</span><span class="list-meta">2m ago</span></li>
</ul>

<span class="avatar avatar-sm">BH</span>
<span class="avatar avatar-md">BH</span>
<span class="avatar avatar-lg">BH</span>

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-title">Deployed to production</div>
    <div class="timeline-meta">2 minutes ago</div>
    <div class="timeline-body">Build #47 passed all checks.</div>
  </div>
</div>

<div class="empty-state">
  <h3>No deploys yet</h3>
  <p>Push to main to trigger your first build.</p>
  <a class="btn btn-primary" href="#">Connect repo</a>
</div>
```

Additional: `.accordion` (uses `<details>`), `.divider`, `.divider-label`, `.quote-block` + `<cite>`.

---

## Utilities

- **Display**: `.block`, `.flex`, `.grid`, `.hidden`, `.inline-flex`, `.inline-block`
- **Flex**: `.flex-col`, `.flex-wrap`, `.items-start`, `.items-center`, `.items-end`, `.justify-start`, `.justify-center`, `.justify-between`, `.justify-end`, `.flex-1`
- **Spacing**: `.mt-1`→`.mt-8`, `.mb-1`→`.mb-8`, `.p-1`→`.p-8`, `.px-1`→`.px-6`, `.py-1`→`.py-6`
- **Gap**: `.gap-1`→`.gap-8`
- **Text**: `.text-center`, `.text-left`, `.text-right`, `.text-muted`, `.text-accent`, `.text-danger`, `.text-success`, `.text-info`, `.text-warning`
- **Size**: `.w-full`, `.h-full`, `.max-w-sm` (480px), `.max-w-md` (720px), `.max-w-lg` (960px), `.max-w-xl` (1200px)
- **Border**: `.border`, `.border-top`, `.border-bottom`, `.rounded`, `.rounded-lg`, `.rounded-full`
- **Position**: `.relative`, `.absolute`, `.fixed`, `.sticky`
- **Overflow**: `.overflow-hidden`, `.overflow-auto`, `.truncate`
- **Responsive**: `.hide-sm`, `.hide-md`, `.show-sm`, `.show-md`
- **Misc**: `.m-auto`, `.mx-auto`, `.bg-surface`, `.bg-code`, `.sr-only`

---

## Accessibility

Postrboard provides these automatically — use them correctly:

- `:focus-visible` rings via `--focus-ring` on all interactive elements
- `.skip-link` class for keyboard skip navigation
- `.sr-only` for screen-reader-only text
- `@media (prefers-reduced-motion)` — respect it; don't add heavy animations

**Your responsibilities:**
- Use semantic headings (`h1`→`h6`) in order — don't skip levels
- Use `<button>` for actions, `<a>` for navigation — never swap them
- Every `<input>` needs a `<label>` (visible `.form-label` or `.sr-only`)
- Use `--coral-surface` (not `--coral`) for text-bearing backgrounds — it passes WCAG contrast
- Use `--*-text` tokens for colored text — they meet contrast requirements in both modes

---

## Signature Patterns (Postrboard-specific techniques)

### Hero Watermark (the `::after` technique)

This is NOT a framework class — it's a custom CSS pattern used on the Postrboard site itself. Apply it when you want a large, faded word behind a section:

```css
.my-hero {
  position: relative;
  isolation: isolate;  /* Creates stacking context so z-index:-1 stays behind content */
}
.my-hero::after {
  content: "yourword";
  position: absolute;
  right: max(1rem, 4vw);
  bottom: 1.5rem;
  z-index: -1;
  font-family: var(--mono-display);
  font-size: clamp(4.5rem, 15vw, 14rem);
  font-weight: 700;
  letter-spacing: -0.12em;
  color: color-mix(in srgb, var(--text) 5%, transparent);
  white-space: nowrap;
  pointer-events: none;
}
```

### CTA Band with Background Text

The `cta-band` class provides the gradient band. Add a custom `::before` for the overlapping monospace:

```css
.my-cta {
  position: relative;
  overflow: hidden;
}
.my-cta > * {
  position: relative;
  z-index: 1;
}
.my-cta::before {
  content: "$ your-command";
  position: absolute;
  right: -1rem;
  top: -1.4rem;
  font-family: var(--mono);
  font-size: clamp(3rem, 10vw, 8rem);
  font-weight: 700;
  letter-spacing: -0.08em;
  color: color-mix(in srgb, var(--azure) 8%, transparent);
}
```

### Spec Row (advanced custom pattern — deliberate inline overrides for hero stats)

```html
<div style="display:flex;justify-content:space-between;gap:var(--space-4);border-top:1px solid var(--border);padding-top:var(--space-4)">
  <div><strong style="font-size:clamp(2rem,5vw,3.6rem);letter-spacing:-0.07em">0 JS</strong><br><span class="text-meta">Runtime weight</span></div>
  <div><strong style="font-size:clamp(2rem,5vw,3.6rem);letter-spacing:-0.07em">44kb</strong><br><span class="text-meta">Minified CSS</span></div>
  <div><strong style="font-size:clamp(2rem,5vw,3.6rem);letter-spacing:-0.07em">2</strong><br><span class="text-meta">Color modes</span></div>
</div>
```

Note: Inline styles in these patterns are deliberate layout overrides for one-off hero sections — they aren't replacing tokens.

---

## AI Design Tells to Avoid

Default to restraint. Don't decorate uncertainty.

### ❌ Layout → ✅ Use Instead

| Don't | Do |
|-------|-----|
| Hero→Features→Testimonials→CTA→Footer every time | Lead with a terminal showing the install command. Or a stat row. Or a quote. Pick what matters most. |
| Split-screen hero with illustration on right | Text-dominant hero with oversized type and a watermark `::after`. The terminal IS the visual. |
| Three identical feature cards in a row | Mix `grid-two` and `feature-grid`. Let one card span wider. Use a `stat-card` alongside `feature-card`s. |
| Perfect symmetry everywhere | Rotate a card 1–2°. Offset a background element. Let one column be wider than the other. |

### ❌ Visual → ✅ Use Instead

| Don't | Do |
|-------|-----|
| Purple-to-blue gradients | Coral→azure→sage palette from tokens. Most of the page is neutral. |
| Neon glow blobs | Dark mode: radial gradients at `85% 8%` (coral) and `8% 82%` (azure). Subtle. Positioned. |
| Glass effect on every surface | Glass for `.card` and `.navbar`. Prefer solid `--surface` for data-dense UI. |
| Stock photos of smiling professionals | Terminal windows, code blocks, `cmd-pill`, monospace display text as visuals. |

### ❌ Typography → ✅ Use Instead

| Don't | Do |
|-------|-----|
| Giant centered headline + subtitle + pill button | Left-aligned `text-display` or `text-h1` with extreme tracking. Let text breathe. |
| Only Inter for everything | `--mono-display` for wordmarks and large decorative text. `--mono` for data, meta labels, terminal content. |
| Single font weight | 400 body → 600 meta/labels → 700 headings → 800 display/emphasis. Full range. |

### ❌ CSS → ✅ Use Instead

| Don't | Do |
|-------|-----|
| `border-radius: 12px` on everything | `--r-pill` buttons/badges, `--r-soft` cards, `--r-compact` inputs, `--r-sharp` small items. Deliberate. |
| `box-shadow: 0 4px 16px rgba(0,0,0,0.1)` everywhere | `--shadow-subtle` for cards. `--shadow-medium` only on hover/dropdown. Most things get no shadow. |
| `transition: all 0.3s ease` | `transition: transform var(--ease), box-shadow var(--ease)` — target specific properties. |
| Hardcoded hex colors in component CSS | Always reference `var(--token)`. Only write hex when overriding `:root` token definitions. |

### ❌ Copy → ✅ Use Instead

| Don't | Do |
|-------|-----|
| "Elevate your experience" | "Deploy to production in one command." (Name the action.) |
| "Get Started" | "Install the CLI" or "Create your first build" (Name what happens.) |
| "Trusted by 10,000+ companies" | Show a real terminal output, a real stat, or omit the section entirely. |
| "Seamless," "innovative," "cutting-edge" | State what the product does, how fast, and what it replaces. Be concrete. |

**Copy rule:** Name the concrete action, input, output, and consequence. Before: "Streamline your workflow." After: "Push to main → tests run → deploy ships. No config file."

### ❌ Interaction → ✅ Use Instead

| Don't | Do |
|-------|-----|
| `scale(1.05)` on hover | `translateY(-2px)` to `translateY(-4px)` — subtle lift only. |
| Fade-in-on-scroll for every section | Reserve motion for meaning: show a drawer opening, a toast appearing. Static content stays static. |
| Count-up number animations | Show the number immediately. Confident products don't perform for attention. |

---

## Recipes

### Landing Page Hero

```html
<section class="container section" style="position:relative">
  <span class="text-meta">Now in beta</span>
  <h1 class="text-h1 mt-3" style="max-width:700px">One command.<br>Zero config.</h1>
  <p class="text-body text-muted mt-3 max-w-md">Describe what the product does in one clear sentence without buzzwords.</p>
  <div class="cluster mt-5">
    <a class="btn btn-primary" href="#">Install CLI</a>
    <div class="cmd-pill"><span class="dollar">$</span> npx yourapp init</div>
  </div>
</section>
```

### Dashboard Stat Row

```html
<div class="stat-grid">
  <div class="stat-card">
    <div class="stat-value">1,247</div>
    <div class="stat-label">Deploys this month</div>
    <div class="stat-trend up">↑ 12%</div>
  </div>
  <div class="stat-card">
    <div class="stat-value">99.9%</div>
    <div class="stat-label">Uptime</div>
  </div>
  <div class="stat-card">
    <div class="stat-value">2.1s</div>
    <div class="stat-label">Avg. build</div>
    <div class="stat-trend up">↑ 340ms faster</div>
  </div>
</div>
```

### Auth Form

```html
<main class="container flex items-center justify-center" style="min-height:100vh">
  <div class="card max-w-sm w-full p-6">
    <h1 class="text-card mb-5">Sign in</h1>
    <form class="form-stack">
      <div class="form-field">
        <label class="form-label" for="email">Email</label>
        <input class="input" id="email" type="email" placeholder="you@company.com">
      </div>
      <div class="form-field">
        <label class="form-label" for="pass">Password</label>
        <input class="input" id="pass" type="password">
      </div>
      <button class="btn btn-primary w-full" type="submit">Sign in</button>
    </form>
    <p class="text-center text-muted mt-4" style="font-size:13px">No account? <a class="styled-link" href="#">Create one</a></p>
  </div>
</main>
```

### Docs Sidebar Layout

```html
<div class="container grid-sidebar section">
  <aside>
    <nav class="sidebar-nav">
      <a class="active" href="#">Getting started</a>
      <a href="#">Tokens</a>
      <a href="#">Components</a>
      <a href="#">Utilities</a>
    </nav>
  </aside>
  <article class="stack">
    <div class="breadcrumb">
      <a href="#">Docs</a><span class="breadcrumb-sep">/</span><span>Getting started</span>
    </div>
    <h1 class="text-h2">Getting started</h1>
    <p class="text-body text-muted">Install the framework and build your first page.</p>
    <div class="terminal">
      <div class="terminal-bar"><span class="terminal-dot red"></span><span class="terminal-dot yellow"></span><span class="terminal-dot green"></span></div>
      <div class="terminal-body"><span class="prompt">$</span> <span class="cmd">npm install postrboard-css</span></div>
    </div>
  </article>
</div>
```

### Empty State

```html
<div class="empty-state">
  <h3>No builds yet</h3>
  <p>Connect a repository to trigger your first deploy.</p>
  <a class="btn btn-primary" href="#">Connect repo</a>
</div>
```

### Pricing Section

```html
<div class="pricing-grid">
  <div class="pricing-card">
    <span class="text-meta">Starter</span>
    <div class="stat-value mt-2">Free</div>
    <p class="text-body text-muted mt-2">For side projects and experiments.</p>
    <a class="btn btn-secondary w-full mt-4" href="#">Start free</a>
  </div>
  <div class="pricing-card popular">
    <span class="badge badge-coral">Popular</span>
    <span class="text-meta mt-2">Pro</span>
    <div class="stat-value mt-2">$29<span class="text-muted" style="font-size:16px;font-weight:400">/mo</span></div>
    <p class="text-body text-muted mt-2">For teams shipping daily.</p>
    <a class="btn btn-primary w-full mt-4" href="#">Start trial</a>
  </div>
  <div class="pricing-card">
    <span class="text-meta">Enterprise</span>
    <div class="stat-value mt-2">Custom</div>
    <p class="text-body text-muted mt-2">SLA, SSO, dedicated support.</p>
    <a class="btn btn-secondary w-full mt-4" href="#">Contact sales</a>
  </div>
</div>
```

---

## Customization

Override tokens to theme for any brand:

```css
:root {
  --coral: #your-brand-color;
  --coral-surface: #your-darker-variant;  /* Must pass WCAG on white text */
  --coral-text: #your-text-variant;       /* Must pass WCAG on page background */
  --sans: 'Your Font', system-ui, sans-serif;
  --r-soft: 12px;
}
```

---

## Preflight (before shipping)

1. **Remove fake proof.** No "trusted by" without real logos. No placeholder testimonials.
2. **Reduce cards.** If 3+ cards say similar things, cut to 2 or make them different types.
3. **Verify token usage.** Search for raw hex codes in component CSS — replace with `var()`.
4. **Check mobile.** Grids collapse? Nav simplifies? Nothing overflows horizontally?
5. **Read copy aloud.** Does every sentence name something specific? Ban "seamless" and "innovative."

---

## Final Word

> The tell isn't any single pattern — it's the absence of decision-making.

Quiet CSS for loud products. Let the product speak.
