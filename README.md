# Postrboard CSS

A light and airy design system built entirely in CSS. No JavaScript, no build step.

[![npm version](https://img.shields.io/npm/v/postrboard-css)](https://www.npmjs.com/package/postrboard-css)
[![License: MIT](https://img.shields.io/badge/License-MIT-coral.svg)](./LICENSE)

→ [Documentation](https://burkeholland.github.io/postrboard-design/)

---

## Colors

The palette is built around three signature accents on a neutral canvas:

| Token | Hex | Role |
|-------|-----|------|
| `--coral` | `#ff7f50` | Primary accent |
| `--azure` | `#0ea5e9` | Secondary accent |
| `--sage` | `#84cc16` | Success / positive |

Each accent has a soft tint variant (`--coral-tint`, `--azure-tint`, `--sage-tint`) for backgrounds, and accessible text variants for use on light surfaces.

Semantic state colors (danger, warning, success) are derived from the same system.

---

## Typography

Three typefaces at specific roles:

- **Inter** — UI text (body, headings, labels)
- **JetBrains Mono** — Code blocks, technical content
- **Space Mono** — Display accents, terminal chrome

---

## Install

```bash
npm install postrboard-css
```

Or link directly:

```html
<link rel="stylesheet" href="https://burkeholland.github.io/postrboard-design/postrboard.min.css">
```

---

## License

[MIT](./LICENSE) © Burke Holland
