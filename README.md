# Postrboard CSS

A quiet CSS framework with enough range to stop every product from looking like the same product. No JavaScript. No runtime.

[![npm version](https://img.shields.io/npm/v/postrboard-css)](https://www.npmjs.com/package/postrboard-css)
[![License: MIT](https://img.shields.io/badge/License-MIT-coral.svg)](./LICENSE)

→ [Documentation](https://burkeholland.github.io/postrboard-design/)

---

## One system, many directions

Postrboard keeps the component contract stable and lets the visual direction move. Set the axes on `<html>` for a whole page or on any container for a scoped surface:

```html
<html
  data-mode="light"
  data-accent="azure"
  data-surface="flat"
  data-geometry="sharp"
  data-density="compact"
  data-type="neutral"
  data-ambient="grid">
```

| Axis | Values |
|---|---|
| Accent | `coral`, `azure`, `sage`, `violet`, `amber`, `slate` |
| Surface | `glass`, `flat`, `outline`, `raised` |
| Geometry | `soft`, `compact`, `sharp` |
| Density | `comfortable`, `compact`, `roomy` |
| Display type | `sans-tight`, `mono-lede`, `editorial`, `neutral` |
| Ambience | `gradient`, `noise`, `grid`, `flat`, `none` |

These axes are independent. That matters. Postrboard gives you a design space, not six new templates wearing different hats.

---

## Layout

Composition stays content-driven with primitives for split, asymmetric, sidebar, centered, masonry, stack-and-rail, thirds, and holy-grail layouts. They collapse responsively without changing the markup.

```html
<section class="grid-asymmetric">
  <article>Primary content</article>
  <aside>Context</aside>
</section>
```

---

## Install

```bash
npm install postrboard-css
```

Or link directly:

```html
<link rel="stylesheet" href="https://burkeholland.github.io/postrboard-design/postrboard.min.css">
```

The default remains the original coral, glass, soft, comfortable treatment. Existing pages do not change until an axis is set.

---

## License

[MIT](./LICENSE) © Burke Holland
