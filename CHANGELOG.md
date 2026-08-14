# Changelog

All notable changes to Postrboard CSS will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/).

## [2.0.0] - 2026-08-13

### Added

- **`--accent-ink`** - Ink that reads on the vivid `--accent` hue. The bright accents are light, so they take dark ink; violet and slate take white. The audit enforces the pairing
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

### Fixed

- The root and compact-geometry field radius was silently wired to the sharp token, so inputs, badges, tags, and tooltips rendered razor-cornered even outside `data-geometry="sharp"`; the default field radius now matches the compact surface as documented
- The radius scale was widened (sharp 4px → 8px, compact 8px → 14px, soft 16px → 22px) so every geometry option reads as an intentional curve rather than a blocky edge
- `[data-ambient="grid"]` used full-opacity lines at 32px spacing, a literal graph-paper texture; lines are now faint (`color-mix` at 40%) at 48px spacing
- The theme-options live demo and the flagship deploy operations dashboard example both defaulted to sharp corners, a visible grid, dark mode, and heavy mono type stacked together — the single most recognizable generic-AI-dashboard combination — despite the documented default being quiet, compact, and ambience-free; both now demonstrate on-contract directions
- The README's own theme-options example showcased the same sharp+grid combination one line above a claim that the default is quiet by design; replaced with a distinct, non-cliché direction
- Added a "Stacked technical signals" row to the AI design tells guardrail table (docs and skill) warning against combining dark mode, sharp corners, grid texture, and heavy mono type by default
- Solid accent fills that carry white content (`.spinner`, `.range-input`, `.timeline-dot`, `.tab.active`) used the vivid `--accent` rather than the contrast-verified `--accent-surface`, so their content sat near 2.4:1. The first pass at this also darkened `.checkbox`/`.radio` checked, the `.switch` track, and `.progress-fill`, which carry no text and are the controls that made the palette recognisable — coral read as burnt brick rather than `#ff7f50`. Those four now paint the vivid hue again, bounded by an `--accent-surface` edge for the 3:1 control boundary, and the checkbox tick uses the new `--accent-ink` instead of white, which fixes the 2.5:1 tick that existed in 1.x as well
- `.btn[aria-busy="true"]` hard-coded a white spinner, making the busy state invisible on `.btn-secondary` and `.btn-ghost`; the spinner colour is now a `--btn-busy-color` custom property each variant sets
- The widened field radius turned 20px checkboxes into circles, erasing the checkbox/radio affordance distinction; small controls (`.checkbox`, `kbd`, inline `code`) now derive a proportional radius that stays square at every geometry
- `.nav-inner` had no horizontal padding, so a standalone `.navbar` rendered edge-flush; it now carries a gutter that resets inside a `.container`
- `.terminal-bar` rendered three literal macOS traffic lights — the "Decorative code" tell from the framework's own guardrail table; the bar is now a mono label slot (`.terminal-title`) and the dots are neutral
- Inline code in prose could break mid-identifier, which reads as a rendering fault; prose-level `code` no longer wraps while block listings still do
- `.skeleton` used `--code-bg` against a near-identical surface and was effectively invisible
- `.step.done` drew its ring in vivid `--sage` rather than the contrast-safe `--sage-text`
- `.combobox-list` could only be revealed by `:focus-within`, which collapses the moment a user clicks an option; it now also accepts an `.is-open` state class
- Dashboard examples and docs demos padded single-digit counts to `08`, `00`, `07`, and `09`, and the publishing example numbered its cards `01 /` … `05 /` out of order — both are the "Filler structure" tell the guardrail table warns about; counts are now real and the kickers are plain editorial categories
- The publishing example's feature headline overflowed its card and collided with the neighbouring column at desktop widths
- Deploy, care, and ledger example grids stretched short panels to match a taller sibling column, leaving large voids inside framed surfaces
- The deploy operations example combined dark mode, a colourless slate accent, and heavy mono display type; it now keeps mono as its single strong technical signal
- `.description-list` stacked its label and value only at a viewport breakpoint, so it overflowed its own frame whenever it sat in a narrow column at desktop widths; it now uses a container query and responds to the space it is actually given
- The docs sidebar pinned a bordered footer to the bottom of a full-height rail, leaving roughly 330px of empty space bracketed by a rule and two stranded controls, and hid that footer entirely below 980px — so mobile visitors had no way to switch modes at all. The mode toggle now sits beside the brand at the top of the rail and stays available at every width, and the gallery link reads as a nav destination instead of the loudest element in the sidebar
- Docs and example copy used oblique, writerly phrasing ("Same system. Different answers.", "Set the direction", "Compose around the work", "Behavior is not CSS") and abstract labels ("Wayfinding", "Floating disclosure", "Empty spectacle", "Fake proof") that described a mood rather than a thing. All headings, navigation labels, component names, table columns, guardrail names, and prose across the docs page, the dashboard gallery, the five dashboard examples, the README, and the agent skill now use plain language that says what each thing is and what to do with it
- `.navbar-bordered` was `position: sticky` with `background: transparent`, so every page using it let its own content scroll straight through the bar. On the care and ledger examples the brand mark and nav links visibly stacked on top of the stat strip. The variant now paints `var(--bg)`, which is what it was already showing at rest, so it is opaque while still reading as "no bar, just a rule"
- The dashboard gallery previews are live iframes at full scale, so scrolling the page with the cursor over a preview scrolled that preview instead, leaving each card parked at a different offset. Previews are now `pointer-events: none` thumbnails and the existing "Open full screen" link is stretched across the card, so the whole card is clickable without adding a second link to the accessibility tree
- The gallery donated every control inside all five preview iframes to the tab order, costing keyboard users roughly fifty dead stops to cross the page. `inert` on an `<iframe>` does not reach the document inside it, so the previews now mark their own body inert on load

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
