# Postrboard CSS

Quiet CSS for loud products. Postrboard is a CSS-only design system for product interfaces that need range without losing coherence.

[![npm version](https://img.shields.io/npm/v/postrboard-css)](https://www.npmjs.com/package/postrboard-css)
[![License: MIT](https://img.shields.io/badge/License-MIT-coral.svg)](./LICENSE)

[Documentation](https://burkeholland.github.io/postrboard-design/)

## Install

```bash
npm install postrboard-css
```

Or use the hosted files:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Serif:wght@600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://burkeholland.github.io/postrboard-design/postrboard.min.css">
```

Postrboard has no JavaScript runtime. Add application code for focus management, keyboard behavior, state changes, and announcements in interactive widgets.

## Set a direction

The component contract stays stable while six inherited axes change the visual direction. Set them on `<html>` or scope them to a container. Keep `data-mode` on `<html>`; for an opposite-mode island, set its mode, accent, and surface together.

```html
<html
  data-mode="light"
  data-accent="slate"
  data-surface="outline"
  data-geometry="sharp"
  data-density="compact"
  data-type="mono-lede"
  data-ambient="grid">
```

| Axis | Values |
|---|---|
| Accent | `coral`, `azure`, `sage`, `violet`, `amber`, `slate` |
| Surface | `flat`, `outline`, `raised`, `glass` |
| Geometry | `compact`, `sharp`, `soft` |
| Density | `comfortable`, `compact`, `roomy` |
| Display voice | `neutral`, `sans-tight`, `mono-lede`, `editorial` |
| Ambience | `none`, `noise`, `grid`, `gradient` |

The default is `coral / flat / compact / comfortable / neutral / none`. It is quiet by design.

## Compose native parts

Use native classes before you add product-specific CSS.

```html
<main class="container section stack">
  <header class="page-header">
    <div>
      <h1 class="page-title">Deployment queue</h1>
      <p class="page-summary">Review blocked releases before you promote a build.</p>
    </div>
    <div class="page-actions">
      <button class="btn btn-primary">Start deployment</button>
    </div>
  </header>

  <dl class="stat-strip">
    <div class="stat-item">
      <dt class="stat-label">Blocked</dt>
      <dd class="stat-value">2</dd>
      <dd class="stat-detail">Needs review</dd>
    </div>
  </dl>

  <section class="panel">
    <header class="panel-header">
      <h2 class="panel-title">Ready builds</h2>
    </header>
    <div class="panel-content">Your work surface</div>
  </section>
</main>
```

The public API includes page and section headers, panels, buttons, forms, navigation, status badges, alerts, tables, lists, description lists, progress, timelines, code surfaces, dialogs, and responsive layout primitives. See the [live reference](https://burkeholland.github.io/postrboard-design/) for exact markup.

## Use with an AI agent

The bundled [`skill/postrboard/SKILL.md`](skill/postrboard/SKILL.md) tells an agent how to:

- Ground a design in the user and primary artifact.
- Map surfaces to native Postrboard components.
- Choose independent axes from product signals.
- Avoid common AI design patterns and invented proof.
- Verify states, accessibility, responsive behavior, and framework use.

## Upgrade from 1.x

Version 2.0 changes the default from glass, soft, and ambient to flat, compact, and quiet. It also changes the font roles from Inter and Space Mono to IBM Plex Sans, Serif, and Mono.

Legacy class names remain as compatibility aliases, but new work must use `.panel`, `.stat-strip`, `.badge-status`, `.page-header`, and the documented navigation variants. Decorative gradient, feature, testimonial, and CTA classes now use restrained treatments. Review surfaces that depend on the old glass default, then set `data-surface="glass"`, `data-geometry="soft"`, or `data-ambient="gradient"` only where those choices still have meaning.

## License

[MIT](./LICENSE) (c) Burke Holland
