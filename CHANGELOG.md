# Changelog

All notable changes to Postrboard CSS will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/).

## [2.0.0] - 2026-08-13

### Added

- **Native work-surface anatomy** - Page headers, section headers, panels, stat strips, semantic status badges, description lists, and app-shell navigation
- **Typography roles** - IBM Plex Sans, Serif, and Mono with a real editorial display axis
- **Semantic states** - `data-state` and ARIA-driven styles for status, navigation, busy, invalid, and disabled states
- **Accessibility safeguards** - Solid focus outlines, forced-colors support, and audited focus contrast
- **Agent skill** - A five-step `Ground -> Map -> Decide -> Build -> Verify` process with anti-pattern and honest-placeholder checks
- **Documentation coverage audit** - Checks for public API examples, one font contract, native example use, contrast, and quiet defaults
- **Release artifact gate** - Fails when minified CSS or its published source map is stale

### Changed

- The default direction is now coral, flat, compact, comfortable, neutral, and without ambience
- The canonical framed surface is `.panel`; `.card` remains a compatibility alias
- Display typography now routes through the selected type axis
- Ambient treatments work on scoped containers as well as the page
- Gradient text, gradient buttons, feature icons, testimonials, and CTA sections use restrained treatments
- Dashboard examples use native page headers, panels, stat strips, semantic badges, and sidebar navigation
- The design reference now imports `postrboard.css` instead of duplicating framework CSS
- Canonical API names are separated from 1.x compatibility aliases
- The npm package now includes the Postrboard agent skill and source map

### Breaking

- The bundled font contract now uses IBM Plex Sans, IBM Plex Serif, and IBM Plex Mono
- Pages that relied on the 1.x glass, soft, gradient default must opt in with data attributes
- CSS-only overlay and selection styles do not imply complete behavior; applications must provide keyboard, focus, and state logic

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

[2.0.0]: https://github.com/burkeholland/postrboard-design/releases/tag/v2.0.0
[1.1.0]: https://github.com/burkeholland/postrboard-design/releases/tag/v1.1.0
[1.0.0]: https://github.com/burkeholland/postrboard-design/releases/tag/v1.0.0
