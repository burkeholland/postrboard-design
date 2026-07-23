# Changelog

All notable changes to Postrboard CSS will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/).

## [1.1.0] — 2026-07-22

### Added

- **Design directions** — Independent accent, surface, geometry, density, display-type, and ambience axes through inherited `data-*` attributes
- **Accent palettes** — Coral, azure, sage, violet, amber, and slate palettes with accessible surface, text, hover, tint, focus, and shadow roles
- **Layout range** — Split, thirds, asymmetric, asymmetric-reverse, holy-grail, masonry, stack-and-rail, and centered composition primitives
- **Navigation treatments** — Solid, bordered, and minimal navbar variants
- **Dense tables** — Optional `data-table is-tight` treatment
- **Agent variation process** — Product-signal design briefs, meaningful-divergence requirements, and a coherence gate
- **Design-space audit** — Automated contrast and API checks run as part of the build

### Changed

- Interactive components now consume `--accent*` role tokens instead of hardcoded coral values
- Cards and common product surfaces now consume surface, radius, and density role tokens
- The default treatment remains backward compatible with 1.0.0

## [1.0.0] — 2026-06-10

### Added

- **Design tokens** — Color, spacing, radius, shadow, motion, z-index, and breakpoint primitives
- **Color modes** — Light, dark, and automatic system preference detection via `data-mode` attribute
- **Typography** — Display, heading, body, meta, mono, gradient text, blockquotes, keyboard shortcuts, inline code, styled links and lists
- **Layout** — Container (sm/lg), stack, cluster, section, grid-auto, grid-two, grid-sidebar, feature-grid, stat-grid, pricing-grid, footer-grid
- **Buttons** — Primary, secondary, ghost, danger, gradient variants with sm/lg sizes, button groups, and FAB
- **Cards** — Glass-effect cards with optional interactive hover states
- **Forms** — Inputs, selects, textareas, checkboxes, radio buttons, toggle switches, validation states, field groups
- **Navigation** — Sticky navbar with glass blur effect
- **Overlays** — Modal dialogs, toast notifications, dropdown menus
- **Feedback** — Badges, progress bars, status indicators, banners, steppers, command palette
- **Data display** — Tables, list groups, avatars, timelines
- **Terminal** — Code-native terminal window component with bar and syntax coloring
- **Disclosure** — Accordion with animated open/close indicators
- **Dividers** — Plain and labeled dividers
- **Accessibility** — Skip links, screen-reader-only utility, focus-visible rings, prefers-reduced-motion support
- **Utilities** — Display, flex, spacing, sizing, text alignment, colors, borders, position, overflow, responsive visibility
- **Responsive** — Mobile-first breakpoints at 640px, 768px, 1024px, 1280px
- **Design system reference** — Full interactive showcase of all components (`index.html`)

[1.1.0]: https://github.com/burkeholland/postrboard-design/releases/tag/v1.1.0
[1.0.0]: https://github.com/burkeholland/postrboard-design/releases/tag/v1.0.0
