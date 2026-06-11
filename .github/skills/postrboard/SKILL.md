---
name: postrboard
description: >
  Apply the Postrboard design language — a refined, airy, code-native aesthetic — when building any website, landing page, UI component, or web app. Use this skill whenever the user asks to design, style, or build a frontend and wants it to feel polished, modern, and developer-native. This skill teaches how to use the Postrboard CSS framework correctly and how to avoid common AI design tells that make generated sites look generic.
---

# Postrboard Design Language

You are building with **Postrboard CSS** — a token-first, zero-JavaScript CSS framework with an opinionated aesthetic. Your job is to produce frontends that feel like a human designer with a clear point of view made them, not like an AI averaged together 10,000 SaaS landing pages.

## Philosophy (internalize this)

- **Quiet CSS for loud products.** The framework recedes; the content speaks.
- **Restraint over excess.** Ship fewer, better screens. Every element earns its place.
- **Opinionated, not generic.** This is a design language, not a utility framework.
- **Code-native.** Monospace type, terminal windows, and developer-friendly aesthetics are first-class.
- **Token-first.** Every value flows from design tokens. Never hardcode colors, spacing, or radii.

---

## Setup

Always include these in the `<head>`:

```html
<link rel="stylesheet" href="https://burkeholland.github.io/postrboard-design/postrboard.min.css">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

Set color mode on `<html>`:
```html
<html data-mode="light">  <!-- or "dark", or omit for system preference -->
```

---

## Design Tokens (use ONLY these)

### Colors
| Token | Value | Use |
|-------|-------|-----|
| `--coral` | #ff7f50 | Brand accent (decoration, highlights) |
| `--coral-surface` | #c2410c | Text-bearing coral backgrounds (passes WCAG on white text) |
| `--azure` | #0ea5e9 | Secondary accent, links, info |
| `--sage` | #84cc16 | Success, positive states |
| `--text` | Contextual | Primary text (adapts to mode) |
| `--text-muted` | Contextual | Secondary text |
| `--surface` | Contextual | Card/component backgrounds |
| `--surface-glass` | Contextual | Translucent glass surfaces |
| `--border` | Contextual | Default borders |
| `--code-bg` | Contextual | Code/subtle backgrounds |

### Spacing Scale
Use `--space-1` through `--space-8` (4px → 64px). Short aliases: `--sp-1` through `--sp-8`.

### Radius
| Token | Value | Use |
|-------|-------|-----|
| `--radius-pill` / `--r-pill` | 9999px | Buttons, badges, pills |
| `--radius-soft` / `--r-soft` | 16px | Cards, panels, modals |
| `--radius-compact` / `--r-compact` | 8px | Inputs, small components |
| `--radius-sharp` / `--r-sharp` | 4px | Tight elements |

### Elevation
| Token | Use |
|-------|-----|
| `--shadow-subtle` | Cards, resting state |
| `--shadow-medium` | Dropdowns, hover states |
| `--shadow-high` | Modals, overlays |
| `--shadow-terminal` | Terminal windows |

### Typography
| Token | Font |
|-------|------|
| `--sans` | Inter (body, headings) |
| `--mono` | JetBrains Mono (code, data) |
| `--mono-display` | Space Mono (display monospace, wordmarks) |

### Motion
- `--ease`: 0.2s ease (default transitions)
- `--duration-fast`: 100ms | `--duration-normal`: 200ms | `--duration-slow`: 300ms
- `--ease-out`: cubic-bezier(0.16, 1, 0.3, 1)

---

## Layout Classes

```html
<main class="container stack">        <!-- Centered max-width + vertical flow -->
<div class="container-sm">             <!-- Narrow container (720px) -->
<div class="cluster">                  <!-- Horizontal flex-wrap with gap -->
<section class="section">              <!-- Vertical section padding -->
<div class="grid-auto">                <!-- Auto-fit responsive grid -->
<div class="grid-two">                 <!-- Two equal columns -->
<div class="grid-sidebar">             <!-- 260px sidebar + fluid content -->
<div class="feature-grid">             <!-- 3-column feature cards -->
<div class="stat-grid">                <!-- Auto-fit stat cards -->
```

The `stack` class creates vertical rhythm via `margin-top` on child elements. Variants: `stack-sm`, `stack-lg`.

---

## Typography Classes

```html
<h1 class="text-display">         <!-- Hero text: clamp(2.5rem, 6vw, 3.5rem), weight 800 -->
<h1 class="text-h1">              <!-- 56px, weight 800, tight tracking -->
<h2 class="text-h2">              <!-- clamp(2rem, 4vw, 3rem), weight 700 -->
<h3 class="text-card">            <!-- 24px card headings -->
<p class="text-body">             <!-- 17px body text, line-height 1.75 -->
<span class="text-meta">          <!-- 13px uppercase, tracked, muted -->
<code class="text-mono">          <!-- JetBrains Mono, 14px -->
<span class="gradient-text">      <!-- Coral-to-azure gradient text -->
```

---

## Components (key classes)

### Buttons
```html
<a class="btn btn-primary">Ship it</a>      <!-- Coral surface + white text -->
<a class="btn btn-secondary">Learn more</a> <!-- Surface + border -->
<a class="btn btn-ghost">Cancel</a>         <!-- Transparent, subtle -->
<a class="btn btn-gradient">Special</a>     <!-- Multi-color gradient -->
<a class="btn btn-danger">Delete</a>        <!-- Red destructive -->
<a class="btn btn-sm">Small</a>             <!-- 32px height -->
<a class="btn btn-lg">Large</a>             <!-- 48px height -->
```

### Cards
```html
<div class="card">                <!-- Glass surface, subtle shadow, soft radius -->
<div class="card card-interactive"> <!-- Adds hover lift -->
<div class="feature-card">        <!-- Solid surface, icon + title + body -->
<div class="stat-card">           <!-- Number + label + trend -->
<div class="pricing-card">        <!-- Pricing tier layout -->
<div class="testimonial-card">    <!-- Quote + attribution -->
```

### Forms
```html
<input class="input" placeholder="...">
<input class="input input-sm">
<textarea class="textarea"></textarea>
<select class="select">...</select>
<label class="checkbox"><input type="checkbox"> Label</label>
<label class="switch"><input type="checkbox"><span class="switch-track"></span> Label</label>
```

### Navigation
```html
<nav class="navbar">              <!-- Sticky glass navbar -->
  <div class="container cluster nav-inner">
    <a class="nav-logo">Brand</a>
    <div class="nav-links">
      <a class="nav-link active">Home</a>
    </div>
  </div>
</nav>
```

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
  </div>
</div>
```

### Feedback
```html
<div class="badge badge-coral">New</div>
<div class="alert alert-info">...</div>
<div class="toast">...</div>
<div class="banner">...</div>
```

### Data
```html
<div class="table-wrap"><table class="data-table">...</table></div>
<ul class="list-group"><li class="list-item">...</li></ul>
<span class="avatar avatar-md">BH</span>
<div class="timeline">...</div>
```

---

## Utilities Available

- **Display**: `.block`, `.flex`, `.grid`, `.hidden`, `.inline-flex`
- **Flex**: `.flex-col`, `.items-center`, `.justify-between`, `.flex-1`
- **Spacing**: `.mt-1` → `.mt-8`, `.mb-1` → `.mb-8`, `.p-1` → `.p-8`, `.px-*`, `.py-*`
- **Gap**: `.gap-1` → `.gap-8`
- **Text**: `.text-center`, `.text-muted`, `.text-accent`, `.text-danger`
- **Size**: `.w-full`, `.max-w-sm`, `.max-w-md`, `.max-w-lg`
- **Border**: `.border`, `.rounded`, `.rounded-lg`, `.rounded-full`
- **Responsive**: `.hide-sm`, `.hide-md`, `.show-sm`, `.show-md`

---

## ⚠️ AI Design Tells to AVOID

When generating Postrboard sites, you MUST actively avoid these patterns that scream "an AI made this":

### Layout Anti-Patterns
- ❌ **Hero → Features → Testimonials → CTA → Footer** in that exact order every time. Break the pattern. Start with a terminal. Lead with a stat. Use asymmetry.
- ❌ **Split-screen hero with illustration on right.** Postrboard uses text-dominant heroes with background typography (see `hero::after` pattern).
- ❌ **Three identical feature cards.** Vary the grid. Use 2 columns. Mix card types. Let one card span two columns.
- ❌ **Perfectly symmetrical everything.** Introduce visual tension. Offset elements. Use `transform: rotate(1.3deg)` on a card like the framework's own hero does.

### Visual Anti-Patterns
- ❌ **Purple-to-blue gradients.** Postrboard uses coral→azure→sage. Respect the palette.
- ❌ **Neon glow blobs on dark backgrounds.** Postrboard's dark mode uses subtle radial gradients at specific positions (85% 8% for coral, 8% 82% for azure), NOT generic blobs.
- ❌ **Glassmorphism on everything.** Glass is for `.card` and `.navbar` only. Not every surface needs `backdrop-filter`.
- ❌ **Generic stock photos.** Use terminal windows, code snippets, and monospace typography as visual elements instead.

### Typography Anti-Patterns
- ❌ **Giant centered headline + tiny subtitle + pill button.** Postrboard heroes use extreme tight tracking (`-0.075em`), massive scale (`clamp(4rem, 10vw, 9.5rem)`), and left-alignment.
- ❌ **Only using Inter.** Mix in `--mono-display` (Space Mono) for wordmarks, labels, and decorative text. Mix `--mono` (JetBrains Mono) for data, meta text, and code.
- ❌ **All text at the same weight.** Use the full range: 400 for body, 600 for meta, 700 for headings, 800 for display and emphasis.

### CSS Anti-Patterns
- ❌ **`border-radius: 12px` on everything.** Use the token scale deliberately: `--r-pill` for buttons/badges, `--r-soft` for cards, `--r-compact` for inputs, `--r-sharp` for small elements.
- ❌ **`box-shadow: 0 4px 16px rgba(0,0,0,0.1)` on everything.** Use the shadow tokens and only where elevation is meaningful.
- ❌ **`transition: all 0.3s ease` on hover states.** Postrboard uses `var(--ease)` (0.2s) and targets specific properties.
- ❌ **Hardcoding colors.** Always use CSS variables. Never write a hex code that isn't a token override.

### Content Anti-Patterns
- ❌ **"Elevate your experience" / "Shape the future of X" / "Get Started"** — Write specific copy. What does the product actually DO?
- ❌ **"Trusted by 10,000+ companies" with fake logos.** Either use real proof or omit it.
- ❌ **Buzzword soup.** "Seamless," "innovative," "cutting-edge" — ban these words.
- ❌ **Descriptions of UI instead of value.** "Easily manage your dashboard" → Say what the user accomplishes.

### Interaction Anti-Patterns
- ❌ **`scale(1.05)` on hover for everything.** Postrboard uses `translateY(-2px)` to `translateY(-4px)` — subtle lift, not zoom.
- ❌ **Fade-in-on-scroll for every section.** Use motion sparingly and purposefully.
- ❌ **Number count-up animations.** Just show the number. Let content breathe.

---

## ✅ What Postrboard Sites SHOULD Feel Like

### Design Principles in Practice
1. **Code-native.** Terminal windows, monospace labels, command pills (`cmd-pill`), and keyboard shortcuts (`kbd`) are visual elements — not just functional ones.
2. **Quiet confidence.** Large empty space. Not everything needs a card. Let text stand alone.
3. **Purposeful asymmetry.** The hero card rotates 1.3°. The background watermark sits at the edge. The grid isn't always equal.
4. **Typography does the work.** Extreme sizes (9.5rem headlines), extreme tracking (-0.075em), and font mixing (sans + mono-display) create visual interest without decoration.
5. **Color is earned.** Most of the page is neutral. Coral appears for emphasis and action. Azure for information. Sage for success. That's it.
6. **Dark mode is atmospheric.** Subtle radial gradients at precise positions create depth. A faint noise texture (`body::before`) adds organic feel. It's not just "invert the colors."

### Page Structure Patterns (not a formula — pick what fits)
- **Developer tool landing:** Hero with oversized mono-display type → terminal install → feature grid → comparison section → CTA band
- **Dashboard:** Glass navbar → stat grid → data table → timeline sidebar → empty states for zero-data
- **Documentation:** Sidebar nav → container-sm body → code blocks in terminals → breadcrumbs
- **Login/Auth:** Centered card on gradient background → form-stack → subtle footer

### Key Differentiators
- The `::after` watermark pattern (large faded text behind hero sections)
- `text-meta` class for uppercase monospace labels
- `cmd-pill` for showing terminal commands inline
- `cta-band` with the overlapping monospace `::before` text
- The `spec-row` pattern (key-value data with border separators)
- `quote-block` with coral left border and monospace citations

---

## Example: A Good Postrboard Page

```html
<!DOCTYPE html>
<html lang="en" data-mode="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Acme CLI — Ship from your terminal</title>
  <link rel="stylesheet" href="https://burkeholland.github.io/postrboard-design/postrboard.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
  <nav class="navbar">
    <div class="container cluster nav-inner">
      <a class="nav-logo" style="font-family:var(--mono-display);letter-spacing:-0.08em">acme</a>
      <div class="cluster nav-links">
        <a class="nav-link" href="#how">How it works</a>
        <a class="nav-link" href="#pricing">Pricing</a>
        <a class="btn btn-primary btn-sm" href="#">Install</a>
      </div>
    </div>
  </nav>

  <section class="container section">
    <span class="badge badge-sage">v2.4 — Now with git hooks</span>
    <h1 class="text-display mt-4" style="max-width:680px">Deploy in<br>three keystrokes.</h1>
    <p class="text-body text-muted mt-3" style="max-width:520px">
      Acme watches your branch, runs your tests, and ships to production.
      No YAML. No dashboard. Just your terminal.
    </p>
    <div class="cluster mt-5">
      <div class="cmd-pill"><span class="dollar">$</span> npx acme deploy</div>
    </div>
    <div class="terminal mt-6" style="max-width:600px">
      <div class="terminal-bar">
        <span class="terminal-dot red"></span>
        <span class="terminal-dot yellow"></span>
        <span class="terminal-dot green"></span>
      </div>
      <div class="terminal-body">
        <span class="prompt">$</span> <span class="cmd">acme deploy --prod</span>
        <br><span class="dim">✓ Tests passed (47 specs, 0 failures)</span>
        <br><span class="dim">✓ Built in 2.3s</span>
        <br><span class="dim">✓ Deployed to acme.app/prod</span>
        <br><br><span class="prompt">$</span> <span class="cmd">▌</span>
      </div>
    </div>
  </section>
</body>
</html>
```

---

## Customization

Override tokens to theme Postrboard for any brand:

```css
:root {
  --coral: #your-brand-color;
  --coral-surface: #your-darker-variant;
  --sans: 'Your Font', system-ui, sans-serif;
  --radius-soft: 12px;  /* Tighter? Looser? Your call. */
}
```

---

## Final Reminder

> The tell isn't any single pattern — it's the absence of decision-making.

Every element should be there because you decided it earns its place. If you can't articulate why something is on the page, remove it. Postrboard is about restraint, specificity, and letting the product speak for itself.
