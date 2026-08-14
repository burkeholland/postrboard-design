---
name: postrboard
description: "Build specific, restrained product interfaces with Postrboard CSS. Native components first; honest content; no generic AI design."
---

# Postrboard

Postrboard is a CSS framework for product interfaces. Keep the framework in the background. The user's work, data, and decisions should be the most prominent things on the page.

Use this skill for pages, apps, dashboards, docs, and components built with Postrboard CSS.

## Authority

Use this order when sources disagree:

1. The user's content, users, and task.
2. This skill's behavioral rules.
3. `components.md` for component markup. Copy it; do not rewrite it.
4. `postrboard.css` for tokens and any class the registry does not cover.
5. General design knowledge.

Do not invent a class or a markup shape from memory. Copy from the registry.

## Install

Copy `skill/postrboard/` from the package or repo into the agent's skills directory (for example `~/.agents/skills/postrboard/` or the project's skills folder). Keep `SKILL.md` at that path so the agent can load it by name.

## Setup

Prefer the CSS from the installed package so the version matches the skill and registry:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Serif:wght@600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="node_modules/postrboard-css/postrboard.min.css">
```

Use the hosted file only when the package is not installed:

`https://burkeholland.github.io/postrboard-design/postrboard.min.css`

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

Do not read all of `components.md`. Open the **Index**, find each surface by name, jump to `### name`, and paste that block. Sources: installed package, repo root, or `https://burkeholland.github.io/postrboard-design/components.md`. `registry/index.json` is the same content as data.

Map each surface of your page to a component **by name**, then paste that component's markup and replace the content. The markup is the API. Retyping it from memory is how pages drift.

| Surface | Component | Custom reason |
|---|---|---|
| Main action | `button` | None |
| Work queue | `list-group` | None |
| Release history | `timeline` | None |
| Domain-specific comparison | composed from `panel` and `data-table` | No single component covers it |

If nothing in the registry fits, compose two components before writing a new one. A custom class is allowed only for product-specific composition the registry cannot express. Loading Postrboard CSS without using its components does not count as using Postrboard.

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

When you start a new product surface, prefer a direction that fits the work rather than leaving every axis on the default. Changing one or two axes is usually enough. When you extend an existing product, keep its established axes unless the user asks for a redesign or the product meaning changes.

This is a product fit check, not a novelty quota. Continuity overrides variety. Every changed axis must support the use scene. Keep `glass`, `grid`, and `gradient` for cases where the material or data makes them useful. Do not stack `sharp` geometry with `grid` ambience and a dark, mono-heavy display voice by default — that combination reads as a generic dev-tool template on sight. Smooth, moderate corners are the safe baseline; reach for `sharp` only when a real technical surface calls for it, and keep it to one strong technical signal at a time.

Spend visual boldness in one place. Choose one signature detail that comes from the subject: a ledger rhythm, an editor gutter, a scheduling line, a comparison rail, or another meaningful device. Keep the rest calm.

### 4. Build

Start with the primary artifact. Add prose only where it helps a person use or understand that artifact.

Paste components from `components.md`, then replace the content. These are the names to look up:

| Need | Components |
|---|---|
| Page rhythm | `container`, `stack`, `type` |
| Composition | `grid-split`, `grid-asymmetric`, `grid-thirds`, `grid-sidebar`, `grid-stack-rail`, `grid-holy-grail`, `grid-centered`, `grid-auto`, `grid-masonry`, `app-shell` |
| Headers | `page-header`, `section-header` |
| Framed work surface | `panel`, `card`, `divider`, `accordion`, `scroll-area` |
| Actions | `button`, `button-group`, `icon-button`, `fab` |
| Forms | `form`, `input`, `select`, `textarea`, `checkbox`, `radio`, `switch`, `segmented-control`, `range`, `combobox`, `floating-label`, `input-group`, `input-validation`, `dropzone`, `date-picker`, `time-picker`, `otp-input`, `auth-card` |
| Status | `badge`, `tag`, `alert`, `banner`, `toast`, `toast-region`, `progress`, `spinner`, `skeleton` |
| Data | `stat-strip`, `stat-card`, `data-table`, `sortable-table`, `list-group`, `description-list`, `timeline`, `stepper`, `styled-list`, `avatar`, `avatar-group`, `calendar`, `chart`, `empty-state` |
| Navigation | `navbar`, `sidebar-nav`, `nav-rail`, `tabs`, `breadcrumb`, `pagination` |
| Overlays | `modal`, `alert-dialog`, `drawer`, `dropdown`, `context-menu`, `tooltip`, `popover`, `hover-card`, `command-palette` |
| Code and content | `terminal`, `inline-code`, `cmd-pill`, `icon`, `quote-block`, `footer` |
| Media | `aspect-ratio`, `frame`, `figure`, `media-embed` |
| Marketing | `feature-card`, `pricing-card`, `testimonial-card`, `cta-band`, `logo-cloud`, `newsletter`, `faq` — read their **Avoid** notes first |
| Utilities | `utility-spacing`, `utility-layout`, `utility-text`, `utility-sizing`, `utility-surface`, `utility-responsive` — one-purpose classes for gaps a component leaves |

Prefer semantic state attributes when supported: `aria-current`, `aria-selected`, `aria-invalid`, `aria-busy`, `aria-disabled`, and `data-state`. For plain buttons that look selected, prefer `aria-pressed` or an `is-selected` class rather than misusing `aria-selected`.

Postrboard is CSS-only. CSS can style a modal, drawer, dropdown, combobox, tabs, and popover, but it cannot supply focus trapping, Escape handling, roving focus, selection logic, or announcements. Add the required behavior in application code. Do not claim that a CSS-only shell is a complete interactive component.

### 5. Verify

Run one bounded review, fix all failures together, and confirm once.

1. **Specificity:** Could the page belong to 500 unrelated products? If yes, make the artifact, copy, or composition more specific.
2. **Framework use:** Did every surface come from a registry component, pasted rather than retyped? Does each custom block have a real reason?
3. **Structure:** Is the primary artifact above decoration and marketing?
4. **Content:** Are all claims, metrics, people, logos, and quotes supplied or clearly marked as examples?
5. **States:** Do interactive controls cover relevant default, hover, focus, active, disabled, loading, error, success, and empty states?
6. **Accessibility:** Check semantic HTML, labels, heading order, keyboard use, visible focus, contrast, reduced motion, and forced colors.
7. **Responsive behavior:** Check 320, 375, 768, and desktop widths. No clipped text, horizontal page scroll, hidden primary actions, or broken reading order.
8. **Restraint and variety:** Is there one signature move, with everything else supporting it? Does it fit this product rather than a stock template?

If a design detector is available, run it after the interface is complete.

## Hard rules

These rules block output:

1. Use native Postrboard components before custom equivalents.
2. Use Postrboard tokens for color, spacing, type, radius, shadow, motion, and focus.
3. Never present invented metrics, testimonials, customers, logos, people, or product claims as real. Use supplied facts, honest placeholders, or sample data that is clearly labeled as sample data.
4. Never use emoji as interface icons. Use an existing project icon set or a small accessible SVG.
5. Keep one dominant accent per surface. Semantic status colors keep their meanings.
6. Do not nest cards or turn every section into a floating container.
7. Do not build `Hero -> Features -> Testimonials -> Pricing -> CTA` unless the supplied content truly requires that sequence.
8. Do not add motion without a functional reason. Respect `prefers-reduced-motion`.
9. Do not replace the user's copy, routes, behavior, or information architecture during a visual refinement.
10. Do not ship before the verification pass succeeds.

## AI design tells

One of these on its own is rarely fatal. Several together are what make a page look machine-generated.

| Tell | What it looks like | What to do instead |
|---|---|---|
| Template structure | Centered hero, three equal features, large closing CTA | Lead with the actual task, data, or object |
| Decorative containers | Cards around every paragraph; cards inside cards | Use headings, spacing, and rules; frame only the main work area |
| Premium styling by default | Large radii, glass, glow, soft shadow on everything | Use flat or outlined surfaces; reserve depth for real layering |
| Stacked technical signals | Dark mode, sharp corners, grid-paper texture, and heavy mono type combined by default | Keep corners moderate and texture off unless the surface is genuinely technical; use at most one strong technical signal |
| Synthetic color | Purple-blue gradients, cyan on dark, colored radial halos | Choose one grounded accent and semantic state colors |
| Generic typography | One overused sans family, flat scale, crushed tracking | Use the supplied Sans/Serif/Mono roles with clear hierarchy |
| Filler structure | Eyebrows above headings, arbitrary section numbers | Let the headings and the order of the content do that job |
| Icon tiles | Rounded square icon above every heading | Use an icon only when it clarifies an action or object |
| Decorative code | Terminal dots, blinking cursor, code texture with no code | Show a real command, log, diff, payload, or no terminal |
| Decorative filler | Abstract SVG blobs, orbs, fake charts, decorative dashboards | Show something real from the product, or an empty state |
| Vague copy | "Transform your workflow" and "Powerful insights" | Say what it does and what happens as a result |
| Invented evidence | Invented users, metrics, quotes, avatars, or logos | Use real data, label sample data as sample, or leave it out |
| Repetitive motion | Same lift, glow, or reveal on every element | Keep state changes quiet, and pick one place for real motion |
| Missing states | Pretty default state with no focus, error, loading, or empty state | Build every state first, then style them |

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
