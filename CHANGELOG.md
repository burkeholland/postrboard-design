# Changelog

All notable changes to Postrboard CSS will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/).

## [2.0.0] - 2026-08-13

### Added

- **Preview / Markup tabs in the documentation** - Each component demo now has a two-way tab built from the framework's own `tabs` component, so the page dogfoods a real component. It is pure CSS, using radio inputs and `:has()`, and adds no JavaScript. The markup is hidden until asked for, which cut the components section from 46,714px to 26,746px
- **Human docs vs agent docs** - The showcase page keeps theme options, tokens, components, and layout guidance. AI design tells stay in the skill. The class dump is gone; agents use `components.md` and the registry, and legacy aliases live under Upgrade in the README
- **22 components restored from 1.x** - Date and time pickers, one-time code, calendar, bar chart, avatar group, sortable table, skeleton, navigation rail, context menu, hover card, toast region, alert dialog, aspect ratio, frame, figure, media embed, scroll area, logo cloud, newsletter, FAQ, and auth card. In 1.x these existed only in the documentation page's own `<style>` block, so a project that loaded `postrboard.css` got nothing for them. They are now framework CSS with registry entries
- **Component registry** - 103 components in `registry/`, each with complete copy-and-paste markup plus `Use` and `Avoid` guidance. Published as `components.md` for reading and `registry/index.json` for tooling. The documentation page renders the demo and the markup; the `Use` and `Avoid` guidance stays in `components.md` and the JSON index, which is what an agent reads. An agent now retrieves markup by name instead of inferring it from class names
- **Registry gates** - The build fails when a component uses a class the framework does not define, when a public class has no registry coverage, and when the generated documentation, `components.md`, or the JSON index drift from the source files. Coverage is total: every utility and modifier class is documented, with no exemption list
- **`--accent-ink`** - Ink that reads on the vivid `--accent` hue. The bright accents are light, so they take dark ink; violet and slate take white. The audit enforces the pairing
- **Native work-surface anatomy** - Page headers, section headers, panels, stat strips, semantic status badges, description lists, and app-shell navigation
- **Typography roles** - IBM Plex Sans, Serif, and Mono with a real editorial display axis
- **Semantic states** - `data-state` and ARIA-driven styles for status, navigation, busy, invalid, and disabled states
- **Accessibility safeguards** - Solid focus outlines, forced-colors support, and audited focus contrast
- **Agent skill** - A five-step `Ground -> Map -> Decide -> Build -> Verify` process with anti-pattern and honest-placeholder checks
- **Documentation coverage audit** - Checks for public API examples, one font contract, contrast, and quiet defaults
- **Release artifact gate** - Fails when minified CSS or its published source map is stale

### Changed

- Component demos now show the thing they name: open overlays, scrolling lists, four navbar surfaces, action button groups, richer grids, and a capped app shell in the docs frame
- List rows stack the title above the meta line, so labels stop running together
- Overlay menus accept an `is-open` class so documentation and tests can show the open state without focus
- The default direction is now coral, flat, compact, comfortable, neutral, and without ambience
- The canonical framed surface is `.panel`; `.card` remains a compatibility alias
- Display typography now routes through the selected type axis
- Ambient treatments work on scoped containers as well as the page
- Gradient text, gradient buttons, feature icons, testimonials, and CTA sections use restrained treatments
- The design reference now imports `postrboard.css` instead of duplicating framework CSS
- Canonical API names are separated from 1.x compatibility aliases
- The npm package now includes the Postrboard agent skill and source map
- The components section of the documentation is generated from the registry, so it cannot fall behind the CSS
- The agent skill now points at `components.md` for markup, and lists components by name rather than restating class names

### Breaking

- The bundled font contract now uses IBM Plex Sans, IBM Plex Serif, and IBM Plex Mono
- Pages that relied on the 1.x glass, soft, gradient default must opt in with data attributes
- CSS-only overlay and selection styles do not imply complete behavior; applications must provide keyboard, focus, and state logic

### Fixed

- The root and compact-geometry field radius was silently wired to the sharp token, so inputs, badges, tags, and tooltips rendered razor-cornered even outside `data-geometry="sharp"`; the default field radius now matches the compact surface as documented
- The radius scale was widened (sharp 4px → 8px, compact 8px → 14px, soft 16px → 22px) so every geometry option reads as an intentional curve rather than a blocky edge
- `[data-ambient="grid"]` used full-opacity lines at 32px spacing, a literal graph-paper texture; lines are now faint (`color-mix` at 40%) at 48px spacing
- The theme-options live demo defaulted to sharp corners, a visible grid, dark mode, and heavy mono type stacked together — the single most recognizable generic-AI-dashboard combination — despite the documented default being quiet, compact, and ambience-free; it now demonstrates an on-contract direction
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
- Docs demos padded single-digit counts to `08`, `00`, `07`, and `09` — the "Filler structure" tell the guardrail table warns about; counts are now real and the kickers are plain editorial categories
- `.description-list` stacked its label and value only at a viewport breakpoint, so it overflowed its own frame whenever it sat in a narrow column at desktop widths; it now uses a container query and responds to the space it is actually given
- The docs sidebar pinned a bordered footer to the bottom of a full-height rail, leaving roughly 330px of empty space bracketed by a rule and two stranded controls, and hid that footer entirely below 980px — so mobile visitors had no way to switch modes at all. The mode toggle now sits beside the brand at the top of the rail and stays available at every width
- Docs copy used oblique, writerly phrasing ("Same system. Different answers.", "Set the direction", "Compose around the work", "Behavior is not CSS") and abstract labels ("Wayfinding", "Floating disclosure", "Empty spectacle", "Fake proof") that described a mood rather than a thing. All headings, navigation labels, component names, table columns, guardrail names, and prose across the docs page, the README, and the agent skill now use plain language that says what each thing is and what to do with it
- `.navbar-bordered` was `position: sticky` with `background: transparent`, so every page using it let its own content scroll straight through the bar. The variant now paints `var(--bg)`, which is what it was already showing at rest, so it is opaque while still reading as "no bar, just a rule"

### Removed

- The `examples/dashboards/` gallery and its five mock dashboards. The docs page is now the single rendered surface, and the accessibility, vocabulary, and readability checks that used to run over the examples now run over `index.html`

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
