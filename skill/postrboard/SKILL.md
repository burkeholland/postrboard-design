---
name: postrboard
description: "Build specific, restrained product interfaces with Postrboard CSS. Native components first; honest content; no generic AI design."
---

# Postrboard

Postrboard is quiet CSS for loud products. The framework must recede. The user's work, data, and decisions must lead.

Use this skill for pages, apps, dashboards, docs, and components built with Postrboard CSS.

## Authority

Use this order when sources disagree:

1. The user's content, users, and task.
2. This skill's behavioral rules.
3. `postrboard.css` for tokens and class names.
4. `index.html` for valid markup examples.
5. General design knowledge.

Do not invent a class from memory. Search the CSS.

## Setup

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Serif:wght@600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://burkeholland.github.io/postrboard-design/postrboard.min.css">
```

Set `data-mode="light"` or `data-mode="dark"` on `<html>` only when the use scene calls for it. Omit it to follow the system setting. For an opposite-mode island, set its mode, accent, and surface together.

## The five-step protocol

### 1. Ground

Before markup, write one internal sentence:

`[Person] needs to [job] by working with [primary artifact].`

Then identify:

- **Mode:** operate, read, persuade, or experience.
- **Posture:** workflow-led, evidence-led, data-led, editorial-led, or conversion-led.
- **Primary artifact:** table, form, queue, editor, schedule, log, comparison, media, or another real object.
- **Real content:** user-provided facts and honest placeholders only.

An app starts with the work surface, not a landing page that explains the app.

### 2. Map

Inspect `postrboard.css` and the matching examples in `index.html`. Map each major surface to a native class before you write markup.

Use this format internally:

| Surface | Native API | Custom reason |
|---|---|---|
| Main action | `.btn .btn-primary` | None |
| Work queue | `.list-group .list-item` | None |
| Product-specific timeline | `.timeline` plus token-based layout | Domain labels need one extra grid track |

A custom class is allowed only for product-specific composition or behavior that the native API cannot express. Loading Postrboard CSS without using its components does not count as using Postrboard.

### 3. Decide

Choose visual axes from the product signals, not from a favorite look.

| Axis | API | Values |
|---|---|---|
| Accent | `data-accent` | `coral`, `azure`, `sage`, `violet`, `amber`, `slate` |
| Surface | `data-surface` | `flat`, `outline`, `raised`, `glass` |
| Geometry | `data-geometry` | `compact`, `sharp`, `soft` |
| Density | `data-density` | `comfortable`, `compact`, `roomy` |
| Display voice | `data-type` | `neutral`, `sans-tight`, `mono-lede`, `editorial` |
| Ambience | `data-ambient` | `none`, `noise`, `grid`, `gradient` |

The default is:

`coral / flat / compact / comfortable / neutral / none`

For a new standalone surface, differ from the default on at least **two** of accent, surface, geometry, density, type, or composition. When you extend an existing product, preserve its established axes unless the user asks for a redesign or the product meaning changes. For a distinct variation, change one structural axis and change the accent only when brand context permits.

This is a divergence check, not a request for random settings. Product continuity overrides novelty. Every changed axis must support the use scene. Keep `glass`, `grid`, and `gradient` for cases where the material or data makes them useful. Do not stack `sharp` geometry with `grid` ambience and a dark, mono-heavy display voice by default — that combination reads as a generic dev-tool template on sight. Smooth, moderate corners are the safe baseline; reach for `sharp` only when a real technical surface calls for it, and keep it to one strong technical signal at a time.

Spend visual boldness in one place. Choose one signature detail that comes from the subject: a ledger rhythm, an editor gutter, a scheduling line, a comparison rail, or another meaningful device. Keep the rest calm.

### 4. Build

Start with the primary artifact. Add prose only where it helps a person use or understand that artifact.

Use native APIs first:

| Need | Native API |
|---|---|
| Page rhythm | `.container`, `.section`, `.stack`, `.stack-sm`, `.cluster` |
| Composition | `.grid-auto`, `.grid-split`, `.grid-asymmetric`, `.grid-sidebar`, `.grid-stack-rail`, `.grid-centered`, `.grid-masonry` |
| Headers | `.page-header`, `.page-title`, `.page-summary`, `.page-actions`, `.section-header`, `.section-title`, `.section-meta` |
| Framed work surface | `.panel`, `.panel-header`, `.panel-content`, `.panel-footer` |
| Actions | `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.btn-danger`, `.icon-button` |
| Forms | `.form-stack`, `.form-field`, `.form-label`, `.input`, `.textarea`, `.select`, `.checkbox`, `.radio`, `.switch`, `.segmented-control` |
| Status | `.badge`, `.badge-status`, `data-state`, `.alert`, `.progress` |
| Summary data | `.stat-strip`, `.stat-item`, `.stat-label`, `.stat-value`, `.stat-detail` |
| Detailed data | `.table-wrap`, `.data-table`, `.list-group`, `.list-item`, `.description-list`, `.timeline`, `.empty-state` |
| Navigation | `.navbar`, `.navbar-solid`, `.navbar-bordered`, `.navbar-minimal`, `.navbar-glass`, `.sidebar-nav`, `.tabs`, `.breadcrumb`, `.pagination` |
| Code and disclosure | `.terminal`, `.inline-code`, `.accordion` |
| Feedback | `.alert`, `.toast`, `.banner`, `.modal`, `.drawer-panel`, `.popover-panel` |

Prefer semantic state attributes when supported: `aria-current`, `aria-selected`, `aria-invalid`, `aria-busy`, `aria-disabled`, and `data-state`.

Postrboard is CSS-only. CSS can style a modal, drawer, dropdown, combobox, tabs, and popover, but it cannot supply focus trapping, Escape handling, roving focus, selection logic, or announcements. Add the required behavior in application code. Do not claim that a CSS-only shell is a complete interactive component.

### 5. Verify

Run one bounded review, fix all failures together, and confirm once.

1. **Specificity:** Could the page belong to 500 unrelated products? If yes, make the artifact, copy, or composition more specific.
2. **Framework use:** Does every major surface use a documented Postrboard API or have a real custom reason?
3. **Structure:** Is the primary artifact above decoration and marketing?
4. **Content:** Are all claims, metrics, people, logos, and quotes supplied or clearly marked as examples?
5. **States:** Do interactive controls cover relevant default, hover, focus, active, disabled, loading, error, success, and empty states?
6. **Accessibility:** Check semantic HTML, labels, heading order, keyboard use, visible focus, contrast, reduced motion, and forced colors.
7. **Responsive behavior:** Check 320, 375, 768, and desktop widths. No clipped text, horizontal page scroll, hidden primary actions, or broken reading order.
8. **Restraint and variety:** Is there one signature move, with everything else supporting it? Does it differ meaningfully from the last Postrboard surface?

If a design detector is available, run it after the interface is complete.

## Hard rules

These rules block output:

1. Use native Postrboard components before custom equivalents.
2. Use Postrboard tokens for color, spacing, type, radius, shadow, motion, and focus.
3. Never present invented metrics, testimonials, customers, logos, people, or product claims as real. Use supplied facts, honest placeholders, or clearly labeled demonstration data.
4. Never use emoji as interface icons. Use an existing project icon set or a small accessible SVG.
5. Keep one dominant accent per surface. Semantic status colors keep their meanings.
6. Do not nest cards or turn every section into a floating container.
7. Do not build `Hero -> Features -> Testimonials -> Pricing -> CTA` unless the supplied content truly requires that sequence.
8. Do not add motion without a functional reason. Respect `prefers-reduced-motion`.
9. Do not replace the user's copy, routes, behavior, or information architecture during a visual refinement.
10. Do not ship before the verification pass succeeds.

## AI design tells

The pattern is the problem, not one isolated property.

| Tell | Typical symptom | Better move |
|---|---|---|
| Template structure | Centered hero, three equal features, large closing CTA | Lead with the actual workflow, evidence, data, or object |
| Decorative containers | Cards around every paragraph; cards inside cards | Use hierarchy, spacing, rules, and one framed work surface |
| Default "premium" styling | Large radii, glass, glow, soft shadow on everything | Use flat or outlined surfaces; reserve depth for real layering |
| Cold technical stacking | Dark mode, sharp corners, grid-paper texture, and heavy mono type combined by default | Keep corners moderate and texture off unless the surface is genuinely technical; use at most one strong technical signal |
| Synthetic color | Purple-blue gradients, cyan on dark, colored radial halos | Choose one grounded accent and semantic state colors |
| Generic typography | One overused sans family, flat scale, crushed tracking | Use the supplied Sans/Serif/Mono roles with clear hierarchy |
| Generator scaffolding | Eyebrows above headings, arbitrary section numbers | Let headings and content order carry structure |
| Icon tiles | Rounded square icon above every heading | Use an icon only when it clarifies an action or object |
| Fake technicality | Terminal dots, blinking cursor, code texture with no code | Show a real command, log, diff, payload, or no terminal |
| Empty spectacle | Abstract SVG blobs, orbs, fake charts, decorative dashboards | Show a real product artifact or an honest empty placeholder |
| Vague copy | "Transform your workflow" and "Powerful insights" | Name the input, action, output, and consequence |
| Fake proof | Invented users, metrics, quotes, avatars, or logos | Use supplied evidence, label demonstration data, or remove it |
| Mechanical interaction | Same lift, glow, or reveal on every element | Use quiet state changes and one purposeful motion moment |
| Missing behavior | Pretty default state with no focus, error, loading, or empty state | Build the state model before decoration |

## Honest placeholders

Use placeholders that describe what belongs:

- `Metric not yet measured`
- `Customer quote pending`
- `Connect a data source to populate this table`
- `Example event payload`
- `Integration name`

Do not use lorem ipsum or polished-looking fake data.

## Final standard

A successful Postrboard interface is specific, calm, accessible, responsive, and made from native components. It can be sharp or soft, dense or roomy, technical or editorial. It must not look like a theme with the nouns replaced.
