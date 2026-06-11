# Postrboard CSS

**Quiet CSS for loud products.**

A refined, airy, code-native CSS framework. Zero JavaScript. Zero build step. Light and dark modes. Just link and ship.

[![npm version](https://img.shields.io/npm/v/postrboard-css)](https://www.npmjs.com/package/postrboard-css)
[![License: MIT](https://img.shields.io/badge/License-MIT-coral.svg)](./LICENSE)
[![Bundle size](https://img.shields.io/badge/minified-44KB-blue)]()

→ [Live demo](https://burkeholland.github.io/postrboard-design/) · [Design system](https://burkeholland.github.io/postrboard-design/design-system.html) · [Changelog](./CHANGELOG.md)

---

## Quick start

### CDN (fastest)

```html
<link rel="stylesheet" href="https://burkeholland.github.io/postrboard-design/postrboard.min.css">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

### npm

```bash
npm install postrboard-css
```

```css
@import 'postrboard-css/postrboard.css';
```

### Direct download

Download [`postrboard.css`](https://burkeholland.github.io/postrboard-design/postrboard.css) or [`postrboard.min.css`](https://burkeholland.github.io/postrboard-design/postrboard.min.css) and add it to your project.

---

## Usage

```html
<!DOCTYPE html>
<html lang="en" data-mode="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://burkeholland.github.io/postrboard-design/postrboard.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
  <main class="container stack">
    <h1 class="text-display">Hello, Postrboard</h1>
    <p class="text-body text-muted">Ship quiet interfaces, fast.</p>
    <a class="btn btn-primary" href="#">Get started</a>
  </main>
</body>
</html>
```

---

## Dark mode

Set `data-mode` on the `<html>` element:

```html
<html data-mode="dark">   <!-- Force dark -->
<html data-mode="light">  <!-- Force light -->
<html>                     <!-- Follow system preference -->
```

---

## What's included

| Category | Components |
|----------|-----------|
| **Tokens** | Colors, spacing, radius, shadows, motion, z-index, breakpoints |
| **Typography** | Display, headings, body, meta, mono, gradient text, quotes, kbd, code |
| **Layout** | Container, stack, cluster, grid variants, section |
| **Buttons** | Primary, secondary, ghost, danger, gradient, sizes, groups, FAB |
| **Cards** | Glass-effect surfaces with optional interactive hover |
| **Forms** | Inputs, selects, textareas, checkboxes, toggles, validation |
| **Navigation** | Sticky glass navbar |
| **Overlays** | Modals, toasts, dropdowns |
| **Feedback** | Badges, progress, banners, steppers, command palette |
| **Data** | Tables, list groups, avatars, timelines |
| **Terminal** | Code-native terminal window |
| **Utilities** | Display, flex, spacing, text, colors, borders, position, responsive |

---

## Customization

Override any CSS variable to theme Postrboard:

```css
:root {
  --coral: #your-brand-color;
  --coral-surface: #your-darker-brand;
  --sans: 'Your Font', system-ui, sans-serif;
  --radius-soft: 12px;
}
```

---

## Browser support

Postrboard CSS works in all modern browsers:

- Chrome / Edge 100+
- Firefox 100+
- Safari 15.4+
- iOS Safari 15.4+

Uses `color-mix()`, `backdrop-filter`, `:has()` (progressive), `container queries` (future). Graceful degradation for older browsers.

---

## Philosophy

- **Token-first.** Every value flows from a single design token contract.
- **Zero JavaScript.** Pure CSS components that just work.
- **Opinionated aesthetic.** Not a utility framework — a design language.
- **Accessibility.** Focus-visible rings, reduced motion, semantic markup encouraged.
- **Restraint.** Ship fewer, better screens.

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

## License

[MIT](./LICENSE) © Burke Holland
