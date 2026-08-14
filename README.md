# Postrboard CSS

A CSS framework for product interfaces. It gives you components, design tokens, and accessible states out of the box, and lets you change the color, shape, density, and typography without editing any CSS.

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

Postrboard ships no JavaScript. For interactive components you still have to write the code for focus management, keyboard support, open and close state, and screen-reader announcements.

## Theme options

Seven attributes change how everything looks. The class names and markup stay the same. Set them on `<html>`, or on any wrapper element to change just that region. Keep `data-mode` on `<html>`; if you want one section in the opposite mode, set its mode, accent, and surface together.

```html
<html
  data-mode="dark"
  data-accent="violet"
  data-surface="glass"
  data-geometry="soft"
  data-density="roomy"
  data-type="editorial"
  data-ambient="none">
```

| Attribute | Values |
|---|---|
| `data-mode` | `light`, `dark` |
| `data-accent` | `coral`, `azure`, `sage`, `violet`, `amber`, `slate` |
| `data-surface` | `flat`, `outline`, `raised`, `glass` |
| `data-geometry` | `compact`, `sharp`, `soft` |
| `data-density` | `comfortable`, `compact`, `roomy` |
| `data-type` | `neutral`, `sans-tight`, `mono-lede`, `editorial` |
| `data-ambient` | `none`, `noise`, `grid`, `gradient` |

The default is `coral / flat / compact / comfortable / neutral / none`, which is deliberately plain. Change it when the product gives you a reason to.

## Use the components

Use the built-in classes before you write any CSS of your own.

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
    <div class="panel-content">Your content goes here</div>
  </section>
</main>
```

The framework ships 75 components. Every one of them has ready-made markup in [`components.md`](components.md) — one file, with the exact HTML to copy, when to use each component, and what to avoid. The same content is in [`registry/index.json`](registry/index.json) if you want to read it as data, and rendered live in the [documentation](https://burkeholland.github.io/postrboard-design/).

Copy the markup as written. The class names are the API. Change the content, not the structure.

## Use with an AI agent

The bundled [`skill/postrboard/SKILL.md`](skill/postrboard/SKILL.md) tells an agent how to:

- Start from who uses the screen and what they are looking at.
- Look each part of the screen up in `components.md` and paste the markup, instead of guessing class names.
- Pick theme options that fit the product, instead of defaulting to one look.
- Avoid the patterns that make a page look machine-generated, and never invent fake logos, metrics, or testimonials.
- Check hover, focus, disabled, error, empty, and loading states, plus accessibility and small screens.

## Upgrade from 1.x

Version 2.0 changes the default look from glass, soft corners, and a textured background to flat, tight corners, and a plain background. It also changes the fonts from Inter and Space Mono to IBM Plex Sans, Serif, and Mono.

The old class names still work as aliases, but new work should use `.panel`, `.stat-strip`, `.badge-status`, `.page-header`, and the documented navigation classes. The gradient, feature, testimonial, and CTA classes are now much plainer. Check any page that relied on the old glass default, then set `data-surface="glass"`, `data-geometry="soft"`, or `data-ambient="gradient"` only where you actually want that look.

## License

[MIT](./LICENSE) (c) Burke Holland
