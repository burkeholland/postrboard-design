# Postrboard components

Generated from `registry/`. Do not edit by hand; run `npm run build`.

Copy the markup as written. The classes are the API. Variance belongs in the theme
axes (`data-accent`, `data-surface`, `data-geometry`, `data-density`, `data-type`,
`data-ambient`) and in which components you compose, not in reinvented markup.

## Layout

### app-shell

A full-height sidebar and main region, the standard frame for an application.

- **Use:** Any signed-in product surface with persistent navigation.
- **Avoid:** Marketing pages. A landing page does not need an app frame.
- **Requires:** sidebar-nav

```html
<div class="grid-sidebar is-app-shell">
  <aside class="app-sidebar">
    <a class="brand" href="/"><span class="brand-mark">R/</span> relay</a>
    <nav class="sidebar-nav" aria-label="Sections">
      <a href="/" aria-current="page">Overview</a>
      <a href="/deploys">Deploys</a>
    </nav>
  </aside>
  <main class="app-main" id="main">
    <h1 class="page-title">Overview</h1>
  </main>
</div>
```

### container

Page width and gutters, in three measures.

- **Use:** Wrapping page content so it does not run to the viewport edge.
- **Avoid:** Nesting containers. The inner one adds a second gutter.
- **`.container-sm`:** 720px, the prose measure
- **`.container-lg`:** 1440px, for dense tools
- **`.section`:** vertical rhythm between the major blocks of a page

```html
<div class="container">
  <p class="text-body">Default width, 1200px. Use container-sm for prose and container-lg for dense tools.</p>
</div>
```

### footer

A wide first column for the brand, then three link columns.

- **Use:** Site-level navigation and legal links.
- **Avoid:** Padding it with empty columns to fill the row.

```html
<footer class="footer-grid">
  <div><a class="brand" href="/"><span class="brand-mark">R/</span> relay</a><p class="text-meta">Deploy tooling for small teams.</p></div>
  <div class="stack stack-sm"><strong class="text-meta">Product</strong><a class="styled-link" href="/deploys">Deploys</a><a class="styled-link" href="/api">API</a></div>
  <div class="stack stack-sm"><strong class="text-meta">Docs</strong><a class="styled-link" href="/docs">Guides</a><a class="styled-link" href="/changelog">Changelog</a></div>
  <div class="stack stack-sm"><strong class="text-meta">Legal</strong><a class="styled-link" href="/privacy">Privacy</a><a class="styled-link" href="/terms">Terms</a></div>
</footer>
```

### grid-asymmetric

Two columns weighted 2:1. Use grid-asymmetric-reverse to lead with the narrow column.

- **Use:** Content beside supporting metadata.
- **Avoid:** Splitting equal-weight content. Use grid-split.
- **`.grid-asymmetric-reverse`:** the narrow column leads

```html
<div class="grid-asymmetric">
  <div class="panel"><div class="panel-content">Main content</div></div>
  <div class="panel"><div class="panel-content">Metadata</div></div>
</div>
```

### grid-auto

As many equal columns as fit, wrapping automatically.

- **Use:** Collections whose length you do not control.
- **Avoid:** A fixed count you already know. Use grid-thirds or grid-split.

```html
<div class="grid-auto">
  <div class="panel"><div class="panel-content">One</div></div>
  <div class="panel"><div class="panel-content">Two</div></div>
  <div class="panel"><div class="panel-content">Three</div></div>
  <div class="panel"><div class="panel-content">Four</div></div>
</div>
```

### grid-centered

A single measured column, centred in the page.

- **Use:** Prose, focused flows, and anything read top to bottom.
- **Avoid:** Data tables. They need the width.

```html
<div class="grid-centered">
  <div class="panel"><div class="panel-content">Prose</div></div>
</div>
```

### grid-holy-grail

A full-width header and footer around three columns.

- **Use:** Dense tools that need context on both sides of the work area.
- **Avoid:** Simple pages. Two rails is a lot of chrome.

```html
<div class="grid-holy-grail">
  <div class="panel"><div class="panel-content">Header</div></div>
  <div class="panel"><div class="panel-content">Left</div></div>
  <div class="panel"><div class="panel-content">Main</div></div>
  <div class="panel"><div class="panel-content">Right</div></div>
  <div class="panel"><div class="panel-content">Footer</div></div>
</div>
```

### grid-masonry

Three columns that flow by height rather than by row.

- **Use:** Items with genuinely different heights, such as notes or clips.
- **Avoid:** Uniform cards. It just looks unaligned.

```html
<div class="grid-masonry">
  <div class="panel"><div class="panel-content">Short</div></div>
  <div class="panel"><div class="panel-content">Taller item with more content in it</div></div>
  <div class="panel"><div class="panel-content">Short</div></div>
</div>
```

### grid-sidebar

A fixed-width rail beside a fluid main column.

- **Use:** Docs and settings pages with persistent section navigation.
- **Avoid:** A rail with two links in it.

```html
<div class="grid-sidebar">
  <div class="panel"><div class="panel-content">Rail</div></div>
  <div class="panel"><div class="panel-content">Main</div></div>
</div>
```

### grid-split

Two equal columns.

- **Use:** A claim beside the artifact it describes, where neither outweighs the other.
- **Avoid:** Three or more children. They wrap into an uneven last row.
- **`.grid-two`:** the old name for this grid, kept working

```html
<div class="grid-split">
  <div class="panel"><div class="panel-content">Claim</div></div>
  <div class="panel"><div class="panel-content">Artifact</div></div>
</div>
```

### grid-stack-rail

A fluid main column with a narrower trailing rail.

- **Use:** Primary content with secondary context beside it, such as activity or help.
- **Avoid:** Putting the primary action in the rail.

```html
<div class="grid-stack-rail">
  <div class="panel"><div class="panel-content">Main</div></div>
  <div class="panel"><div class="panel-content">Context</div></div>
</div>
```

### grid-thirds

Three equal columns.

- **Use:** Three genuinely parallel items, such as environments or regions.
- **Avoid:** Three invented benefits. That is the feature-grid tell.

```html
<div class="grid-thirds">
  <div class="panel"><div class="panel-content">One</div></div>
  <div class="panel"><div class="panel-content">Two</div></div>
  <div class="panel"><div class="panel-content">Three</div></div>
</div>
```

### stack

Vertical rhythm (stack) and horizontal grouping that wraps (cluster).

- **Use:** Almost every layout. These replace ad-hoc margins.
- **Avoid:** Hand-written margin utilities between siblings when a stack would do.
- **`.stack-sm`:** tight rhythm inside a component
- **`.stack-lg`:** section spacing

```html
<div class="stack">
  <div class="cluster">
    <button class="btn btn-primary" type="button">Promote</button>
    <button class="btn btn-secondary" type="button">Compare</button>
  </div>
  <p class="text-body text-muted">Stack spaces its children vertically; cluster groups them horizontally and wraps.</p>
</div>
```

## Actions

### button-group

Buttons joined into a single control for mutually related actions.

- **Use:** Switching a view between a few named options.
- **Avoid:** Unrelated actions. Use a cluster of separate buttons instead.

```html
<div class="button-group">
  <button class="btn btn-secondary btn-sm" type="button">Day</button>
  <button class="btn btn-secondary btn-sm" type="button">Week</button>
  <button class="btn btn-secondary btn-sm" type="button">Month</button>
</div>
```

### button

The standard action control, in four emphasis levels plus busy and disabled states.

- **Use:** One primary button per surface. Everything else is secondary or ghost.
- **Avoid:** Two primary buttons side by side. If both matter equally, neither is primary.
- **`.btn-lg`:** taller target for a single hero action
- **`.btn-gradient`:** accent-filled fill
- **`.is-disabled`:** disabled look without the disabled attribute, when a real button must stay focusable

```html
<div class="cluster">
  <button class="btn btn-primary" type="button">Save changes</button>
  <button class="btn btn-secondary" type="button">Preview</button>
  <button class="btn btn-ghost" type="button">Cancel</button>
  <button class="btn btn-danger" type="button">Delete</button>
  <button class="btn btn-primary" type="button" aria-busy="true">Saving</button>
  <button class="btn btn-secondary" type="button" disabled>Unavailable</button>
</div>
```

### fab

A single action pinned to the corner of the viewport.

- **Use:** One creation action on a dense list or board where the toolbar scrolls away.
- **Avoid:** Desktop layouts that already have a visible toolbar. It covers content.

```html
<button class="fab" type="button" aria-label="Create deployment">
  <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
</button>
```

### icon-button

A square control carrying only an icon. Always needs an accessible label.

- **Use:** Repeated row actions and toolbar controls where a text label would crowd the layout.
- **Avoid:** Primary actions. If it matters, give it a word.
- **`.subtle`:** filled instead of outlined, for a dense toolbar

```html
<div class="cluster">
  <button class="icon-button" type="button" aria-label="Refresh">
    <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/></svg>
  </button>
  <button class="close-button" type="button" aria-label="Close">
    <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
  </button>
</div>
```

## Forms

### checkbox

A boolean control for options that apply independently.

- **Use:** Several options where any number can be on at once.
- **Avoid:** Mutually exclusive choices. Use a radio group.

```html
<div class="stack stack-sm">
  <label class="checkbox"><input type="checkbox" checked> Include failed jobs</label>
  <label class="checkbox"><input type="checkbox"> Notify the on-call channel</label>
</div>
```

### dropzone

A drop target for uploading a file.

- **Use:** Imports and attachments where dragging is natural.
- **Avoid:** Drag as the only route. Keep the browse control that this markup already includes.

```html
<label class="dropzone">
  <input type="file">
  <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 16V4M6 10l6-6 6 6M4 20h16"/></svg>
  <span><strong>Drop a file</strong> or browse</span>
</label>
```

### floating-label

A label that sits inside the field and rises when the field has content.

- **Use:** Dense forms where a stacked label would cost too much vertical space.
- **Avoid:** Mixing with stacked labels in the same form. Pick one and keep it.

```html
<div class="floating-field">
  <input class="floating-input" id="cluster-name" placeholder=" ">
  <label class="floating-label" for="cluster-name">Cluster name</label>
</div>
```

### form

A vertical stack of labelled fields with helper text and error messages.

- **Use:** Any set of inputs the user submits together.
- **Avoid:** Placeholder text instead of a label. Every field needs a real label.
- **Requires:** input, select, switch

```html
<form class="form-stack">
  <div class="form-field">
    <label class="form-label" for="project-name">Project name</label>
    <input class="input w-full" id="project-name" value="release-monitor">
    <p class="form-helper">Used in URLs and deployment labels.</p>
  </div>
  <div class="form-field">
    <label class="form-label" for="region">Region</label>
    <select class="select" id="region"><option>us-east-1</option><option>eu-west-1</option></select>
  </div>
  <div class="form-field">
    <label class="form-label" for="invalid-key">API key</label>
    <input class="input w-full" id="invalid-key" aria-invalid="true" aria-describedby="key-error" value="expired-key">
    <p class="form-message error" id="key-error">This key expired. Create a new key and try again.</p>
  </div>
  <label class="switch"><input type="checkbox" checked><span class="switch-track"></span>Pause on failed checks</label>
</form>
```

### input-group

An input joined to a fixed prefix or suffix.

- **Use:** Showing a protocol, unit, or domain the user should not have to type.
- **Avoid:** Putting a button in the affix slot. Use a separate control.

```html
<div class="input-group">
  <span class="input-affix">https://</span>
  <input class="input" type="text" value="status.example.com" aria-label="Status page domain">
</div>
```

### input-validation

Error and success styling for an input, paired with aria-invalid.

- **Use:** After a field has been checked. Always pair colour with a message.
- **Avoid:** Colour alone. Red border with no explanation tells the user nothing.
- **`.success`:** the confirming form-message colour, the counterpart of error

```html
<div class="cluster">
  <input class="input input-error" type="text" value="expired-key" aria-invalid="true" aria-label="API key, invalid">
  <input class="input input-success" type="text" value="a1b2-c3d4-e5f6" aria-label="API key, verified">
</div>
```

### input

A labelled text field with optional helper text. The atom every form is built from.

- **Use:** Any single-line value. Pair every input with a real label element.
- **Avoid:** Using placeholder text as the label. It disappears on typing and fails screen readers.
- **`.input-sm`:** compact rows and toolbars
- **`.input-lg`:** a single prominent field
- **`.is-error`:** failed validation
- **`.is-success`:** confirmed value

```html
<div class="form-field">
  <label class="form-label" for="service-name">Service name</label>
  <input class="input w-full" id="service-name" value="api-gateway">
  <p class="form-helper">Lowercase, hyphen separated.</p>
</div>
```

### radio

A set of mutually exclusive options, all visible at once.

- **Use:** Two to five choices where seeing every option matters.
- **Avoid:** Long option lists. Use a select past about five.

```html
<div class="radio-group">
  <label class="radio"><input type="radio" name="region" checked> us-east-1</label>
  <label class="radio"><input type="radio" name="region"> eu-west-1</label>
</div>
```

### range

A slider for a value where the approximate position matters more than the exact number.

- **Use:** Limits, thresholds, and weightings the user tunes by feel.
- **Avoid:** Values that need precision. Use a number input.

```html
<div class="range-field">
  <div class="range-top"><label class="form-label" for="memory">Memory limit</label><span>70%</span></div>
  <input class="range-input" id="memory" type="range" min="0" max="100" value="70">
</div>
```

### segmented-control

A compact joined control for switching between a few views.

- **Use:** Changing the range or mode of the data already on screen.
- **Avoid:** Submitting a value in a form. It reads as navigation, not input.

```html
<div class="segmented-control">
  <input type="radio" name="window" id="seg-day" checked><label for="seg-day">Day</label>
  <input type="radio" name="window" id="seg-week"><label for="seg-week">Week</label>
  <input type="radio" name="window" id="seg-month"><label for="seg-month">Month</label>
</div>
```

### select

A labelled dropdown for one value from a known, short list.

- **Use:** Fewer than about a dozen fixed options, such as regions or environments.
- **Avoid:** Long or searchable lists. Use the combobox instead.

```html
<div class="form-field">
  <label class="form-label" for="deploy-region">Region</label>
  <select class="select" id="deploy-region">
    <option>us-east-1</option>
    <option>eu-west-1</option>
    <option>ap-southeast-2</option>
  </select>
</div>
```

### switch

A toggle for a setting that takes effect immediately.

- **Use:** Turning a behaviour on or off with no separate save step.
- **Avoid:** Fields inside a form that only apply after submit. Use a checkbox.

```html
<label class="switch"><input type="checkbox" checked><span class="switch-track"></span>Pause on failed checks</label>
```

### textarea

A multi-line text input that grows vertically.

- **Use:** Descriptions, notes, commit messages, and pasted payloads.
- **Avoid:** Single-line values. Use an input so the Enter key submits.

```html
<div class="form-field">
  <label class="form-label" for="release-notes">Release notes</label>
  <textarea class="textarea" id="release-notes" placeholder="What changed in this revision?"></textarea>
</div>
```

## Surfaces

### accordion

Native details and summary styled as a disclosure row.

- **Use:** Reference content most readers skip, such as troubleshooting.
- **Avoid:** Hiding content the user needs to complete the task in front of them.

```html
<details class="accordion">
  <summary>What do I still have to build in JavaScript?</summary>
  <div class="accordion-body">Focus trapping, closing on Escape, arrow-key navigation, tracking which item is selected, and screen-reader announcements. The CSS only styles these components.</div>
</details>
```

### card

A compatibility alias for panel, kept for 1.x markup.

- **Use:** Existing pages already written against the 1.x card API.
- **Avoid:** New work. Use panel, which is the canonical name.
- **`.card-interactive`:** hover response, when the whole card is a link

```html
<article class="card">
  <div class="card-header"><h3 class="card-title">api-gateway</h3></div>
  <div class="card-content"><p class="card-body">Three replicas healthy in us-east-1.</p></div>
  <div class="card-footer"><button class="btn btn-secondary btn-sm" type="button">Open</button></div>
</article>
```

### divider

A rule, optionally with a centred label.

- **Use:** Separating two alternatives, such as a form and a third-party option.
- **Avoid:** A rule between every block. Spacing usually does the job.

```html
<hr class="divider">
<div class="divider-label">or</div>
```

### page-header

The title block at the top of a work surface, with room for actions.

- **Use:** The first element inside the main region of an app page.
- **Avoid:** Repeating the navigation label verbatim. Say what this page is for.
- **Requires:** button

```html
<header class="page-header">
  <div class="page-header-main">
    <h1 class="page-title">Deployments</h1>
    <p class="page-summary">Every revision pushed to production in the last 30 days.</p>
  </div>
  <div class="page-actions">
    <button class="btn btn-secondary" type="button">Export</button>
    <button class="btn btn-primary" type="button">New deployment</button>
  </div>
</header>
```

### panel

The canonical framed surface, with an optional header, body, and footer.

- **Use:** Grouping controls or data that belong to one object.
- **Avoid:** Wrapping every idea on the page. Frame the work area, not the prose.
- **`.panel-interactive`:** hover response, when the whole panel is a link
- **Requires:** badge, button

```html
<section class="panel">
  <header class="panel-header">
    <div><h3 class="panel-title">Retention policy</h3><p class="panel-body">Keep deployment logs for the selected period.</p></div>
    <span class="badge badge-status" data-state="info">Draft</span>
  </header>
  <div class="panel-content">
    <label class="checkbox"><input type="checkbox" checked> Include failed jobs</label>
  </div>
  <footer class="panel-footer"><button class="btn btn-primary btn-sm" type="button">Apply policy</button></footer>
</section>
```

### section-header

A smaller heading block for a section inside a page.

- **Use:** Separating groups of content that each have their own action.
- **Avoid:** Using it for every paragraph. A plain heading is often enough.

```html
<div class="section-header">
  <div class="section-header-main">
    <h2 class="section-title">Recent revisions</h2>
    <p class="section-meta">Updated 4 minutes ago</p>
  </div>
  <div class="section-actions"><button class="btn btn-ghost btn-sm" type="button">View all</button></div>
</div>
```

## Data

### avatar

A person or service marker in three sizes.

- **Use:** Attribution in lists, comments, and audit trails.
- **Avoid:** Inventing faces. Initials are honest; stock portraits are not.

```html
<div class="cluster">
  <span class="avatar avatar-sm">JK</span>
  <span class="avatar avatar-md">JK</span>
  <span class="avatar avatar-lg">JK</span>
</div>
```

### badge

A small label for a status or a category.

- **Use:** badge-status with data-state for a condition; an accent badge for a team or category.
- **Avoid:** Badges as decoration. If it does not encode state or category, drop it.
- **`.badge-success`:** passed or healthy
- **`.badge-warning`:** needs attention
- **`.badge-danger`:** failed or blocked
- **`.badge-info`:** in progress or neutral

```html
<div class="cluster">
  <span class="badge badge-status" data-state="success">Ready</span>
  <span class="badge badge-status" data-state="info">Running</span>
  <span class="badge badge-status" data-state="warning">Review</span>
  <span class="badge badge-status" data-state="danger">Failed</span>
  <span class="badge badge-status badge-neutral">Queued</span>
</div>
```

### data-table

A scrollable table with numeric alignment and an optional tight density.

- **Use:** Records the user compares across columns.
- **Avoid:** Roomy density. Comparison needs rows close enough to scan.
- **Requires:** badge

```html
<div class="table-wrap">
  <table class="data-table is-tight">
    <caption class="sr-only">Deployment revisions</caption>
    <thead><tr><th>Service</th><th>Revision</th><th>Status</th><th class="is-numeric">Duration</th></tr></thead>
    <tbody>
      <tr><td>api-gateway</td><td><code>6f82ae1</code></td><td><span class="badge badge-status" data-state="success">Ready</span></td><td class="is-numeric">1m 18s</td></tr>
      <tr><td>worker-jobs</td><td><code>d1c904b</code></td><td><span class="badge badge-status" data-state="info">Building</span></td><td class="is-numeric">0m 47s</td></tr>
    </tbody>
  </table>
</div>
```

### description-list

Label and value pairs that reflow when the column is narrow.

- **Use:** Metadata about one object: region, image, owner, version.
- **Avoid:** Long prose in the value slot. Keep values short enough to scan.

```html
<dl class="description-list">
  <dt>Region</dt><dd>us-east-1</dd>
  <dt>Image</dt><dd><code>api-gateway:2.8.1</code></dd>
</dl>
```

### list-group

Rows sharing one frame, each with a main label and a trailing value.

- **Use:** A list of objects where each row has one status.
- **Avoid:** More than two pieces of metadata per row. Use a table.
- **Requires:** badge

```html
<div class="list-group">
  <div class="list-item"><div class="list-item-main"><span class="list-title">api-gateway</span><span class="list-meta">v2.8.1 &middot; 3 replicas</span></div><span class="list-item-value"><span class="badge badge-status" data-state="success">Healthy</span></span></div>
  <div class="list-item"><div class="list-item-main"><span class="list-title">worker-jobs</span><span class="list-meta">v1.14.0 &middot; 6 replicas</span></div><span class="list-item-value"><span class="badge badge-status" data-state="info">Deploying</span></span></div>
</div>
```

### stat-card

A single figure in its own frame, with an optional trend.

- **Use:** A number that needs more room than a stat strip gives it.
- **Avoid:** A grid of four identical stat cards at the top of every page. That is the decorative dashboard tell.

```html
<div class="stat-grid">
  <div class="stat-card">
    <div class="stat-label">Median deploy time</div>
    <div class="stat-value">1m 18s</div>
    <div class="stat-trend down">12s faster than last week</div>
  </div>
  <div class="stat-card">
    <div class="stat-label">Failed checks</div>
    <div class="stat-value">3</div>
    <div class="stat-trend up">2 more than last week</div>
  </div>
</div>
```

### stat-strip

A row of related counts sharing one frame.

- **Use:** Three to five numbers that are read together.
- **Avoid:** Padding counts to two digits, or inventing figures to fill the row.
- **`.stats-row`:** the old name for this strip, kept working

```html
<dl class="stat-strip">
  <div class="stat-item"><dt class="stat-label">Ready</dt><dd class="stat-value">12</dd><dd class="stat-detail">Waiting to promote</dd></div>
  <div class="stat-item"><dt class="stat-label">Building</dt><dd class="stat-value">4</dd><dd class="stat-detail">In progress now</dd></div>
  <div class="stat-item"><dt class="stat-label">Needs review</dt><dd class="stat-value">1</dd><dd class="stat-detail">Checks failed</dd></div>
</dl>
```

### styled-list

A spaced list for short related points.

- **Use:** Requirements, constraints, and checklists in prose.
- **Avoid:** Turning every list into three feature cards.

```html
<ul class="styled-list">
  <li>Checks must pass before a revision can be promoted.</li>
  <li>Rollback keeps the previous revision warm for one hour.</li>
</ul>
```

### tag

Neutral tags and accent-coloured badges for categories rather than conditions.

- **Use:** Naming a team, region, or topic.
- **Avoid:** Encoding status with an accent colour. Use badge-status with data-state.
- **Note:** Accent badges name a category. A condition belongs in <code>badge-status</code>.

```html
<div class="cluster">
  <span class="badge badge-coral">Platform</span>
  <span class="badge badge-azure">Data</span>
  <span class="badge badge-sage">Growth</span>
  <span class="tag">us-east-1</span>
</div>
```

### timeline

Events in order, each with a title, timestamp, and body.

- **Use:** Audit trails, incident history, and deploy logs.
- **Avoid:** Marketing roadmaps with invented dates.

```html
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-title">Deploy started</div>
    <div class="timeline-meta">14:02:11 UTC</div>
    <div class="timeline-body">Rolling restart began for api-gateway.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-title">Health checks passed</div>
    <div class="timeline-meta">14:03:47 UTC</div>
    <div class="timeline-body">All three replicas reported healthy.</div>
  </div>
</div>
```

## Navigation

### breadcrumb

The path back up a hierarchy.

- **Use:** Nested records where the parent is not otherwise visible.
- **Avoid:** Flat apps with two levels. It adds a row and says nothing.

```html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <a href="/services">Services</a><span class="breadcrumb-sep">/</span><a href="/services/api-gateway">api-gateway</a><span class="breadcrumb-sep">/</span><span>Revisions</span>
</nav>
```

### navbar

The top bar, in four surfaces: bordered, glass, solid, and minimal.

- **Use:** One per site. Mark the current page with aria-current.
- **Avoid:** Mixing two navbar surfaces on one page.
- **`.navbar`:** plain, no surface treatment
- **`.navbar-glass`:** blurred over content that scrolls under it
- **`.navbar-solid`:** opaque, for dense apps
- **`.navbar-minimal`:** no bar at all, links only, and it does not stick
- **Note:** Pick one surface and keep it. The four below are alternatives, not a set.

```html
<nav class="navbar-bordered" aria-label="Main">
  <div class="nav-inner">
    <a class="brand" href="/"><span class="brand-mark">R/</span> relay</a>
    <div class="nav-links">
      <a class="nav-link" aria-current="page" href="/">Overview</a>
      <a class="nav-link" href="/deploys">Deploys</a>
      <a class="nav-link" href="/api">API</a>
    </div>
  </div>
</nav>
```

### pagination

Page links with the current page marked by aria-current.

- **Use:** Long result sets where the user needs a stable position.
- **Avoid:** Pagination over fewer than two pages.

```html
<nav class="pagination" aria-label="Pagination">
  <a class="page-link" href="/revisions?page=0" aria-label="Previous page">&lsaquo;</a>
  <a class="page-link" href="/revisions?page=1" aria-current="page">1</a>
  <a class="page-link" href="/revisions?page=2">2</a>
  <a class="page-link" href="/revisions?page=3">3</a>
  <a class="page-link" href="/revisions?page=2" aria-label="Next page">&rsaquo;</a>
</nav>
```

### sidebar-nav

A vertical navigation list, optionally collapsed to an icon rail.

- **Use:** App shells with more than about five destinations.
- **Avoid:** Icon-only rails without labels or titles. Nobody can guess the icons.
- **`.is-rail`:** collapsed to icons only

```html
<nav class="sidebar-nav" aria-label="Sections">
  <a href="/" aria-current="page">
    <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
    Overview
  </a>
  <a href="/deploys">
    <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
    Deploys
  </a>
</nav>
```

### stepper

Progress through a fixed sequence of stages.

- **Use:** A flow with a known number of steps the user cannot skip.
- **Avoid:** Navigation between unrelated pages. Use tabs.

```html
<div class="stepper">
  <div class="step done"><span class="step-circle">&check;</span>Build</div>
  <div class="step-line"></div>
  <div class="step active"><span class="step-circle">2</span>Review</div>
  <div class="step-line"></div>
  <div class="step"><span class="step-circle">3</span>Release</div>
</div>
```

### tabs

Switching between views of the same object.

- **Use:** Two to six views that share one context.
- **Avoid:** Tabs for steps in a sequence. Use a stepper.

```html
<nav class="tabs" aria-label="Views" role="tablist">
  <a class="tab" aria-selected="true" href="/activity" role="tab">Activity</a>
  <a class="tab" aria-selected="false" href="/checks" role="tab">Checks</a>
  <a class="tab" aria-selected="false" href="/settings" role="tab">Settings</a>
</nav>
```

## Feedback

### alert

An inline message in four severities, each with a title and body.

- **Use:** A condition the user must understand before acting.
- **Avoid:** Stacking three alerts at the top of a page. Show the one that matters.

```html
<div class="alert alert-info">
  <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/></svg>
  <div><strong class="alert-title">Revision queued</strong><p class="alert-body">It starts when the current deploy finishes.</p></div>
</div>
<div class="alert alert-success">
  <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
  <div><strong class="alert-title">All checks passed</strong><p class="alert-body">This revision is ready to promote.</p></div>
</div>
<div class="alert alert-warning">
  <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3 2 20h20L12 3Z"/><path d="M12 9v4M12 17h.01"/></svg>
  <div><strong class="alert-title">Two checks need review</strong><p class="alert-body">Open the failed checks before you promote this revision.</p></div>
</div>
<div class="alert alert-danger">
  <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
  <div><strong class="alert-title">Deploy failed</strong><p class="alert-body">api-gateway rolled back to v2.8.0 automatically.</p></div>
</div>
```

### banner

A dismissible page-level notice.

- **Use:** Scheduled maintenance and account-wide conditions.
- **Avoid:** Marketing announcements the user cannot act on.
- **Requires:** button

```html
<div class="banner">
  <div><strong class="banner-title">Scheduled maintenance</strong><p class="banner-body">api-gateway restarts at 02:00 UTC on Thursday.</p></div>
  <button class="btn btn-ghost btn-sm" type="button">Dismiss</button>
</div>
```

### empty-state

What a surface shows before it has data.

- **Use:** First run, cleared filters, and genuinely empty results. Say which.
- **Avoid:** A shrug illustration and no next step. Give the user an action.
- **Requires:** button

```html
<div class="empty-state">
  <h3 class="empty-title">No failed checks</h3>
  <p class="empty-body">Everything in this pipeline passes right now.</p>
  <a class="btn btn-secondary btn-sm" href="/runs/latest">Review the last run</a>
</div>
```

### progress

A determinate bar for work with a known percentage.

- **Use:** Uploads, builds, and imports that report real progress.
- **Avoid:** Faking progress for an unknown duration. Use a spinner.

```html
<div class="progress" role="progressbar" aria-valuenow="64" aria-valuemin="0" aria-valuemax="100" aria-label="Build progress">
  <div class="progress-fill" style="--value: 64%"></div>
</div>
```

### spinner

Indeterminate loading marks: a spinner for actions, a skeleton for content.

- **Use:** Spinner for a pending action; skeleton where content will land.
- **Avoid:** A full-page spinner when only one region is loading.

```html
<div class="cluster">
  <span class="spinner" role="status" aria-label="Loading"></span>
  <span class="skeleton" style="width: 160px"></span>
  <span class="skeleton" style="width: 90px"></span>
</div>
```

### toast

A transient confirmation of something that just happened.

- **Use:** Confirming a completed background action.
- **Avoid:** Errors the user must act on. Those belong inline, where the problem is.

```html
<div class="toast">
  <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
  <div><strong class="toast-title">Deploy complete</strong><p class="toast-body">worker-jobs v1.14.0 is live.</p></div>
</div>
```

## Overlays

### combobox

A text input with a filtered list of options beneath it.

- **Use:** Choosing one item from a set too long for a select.
- **Avoid:** Fewer than about five options. Use a radio group or a select.
- **Note:** Add <code>is-open</code> to keep the list visible while the user clicks an option.

```html
<div class="combobox">
  <input class="input w-full" type="text" placeholder="Search services" role="combobox" aria-expanded="true" aria-controls="service-list">
  <ul class="combobox-list is-open" id="service-list" role="listbox">
    <li role="option">api-gateway</li>
    <li role="option" class="is-active">worker-jobs</li>
    <li role="option">event-router</li>
  </ul>
</div>
```

### command-palette

A keyboard-first search over commands and objects.

- **Use:** Products where power users navigate faster than they click.
- **Avoid:** Adding one because it looks technical. It needs real commands behind it.

```html
<div class="command-palette">
  <input class="input" type="text" placeholder="Type a command or search">
  <div class="command-group">
    <div class="command-group-label">Services</div>
    <div class="command-item">api-gateway <kbd>G A</kbd></div>
    <div class="command-item">worker-jobs <kbd>G W</kbd></div>
  </div>
</div>
```

### drawer

A panel that slides in from the edge, driven by a checkbox toggle.

- **Use:** Filters and detail views that sit beside the main content.
- **Avoid:** Destructive confirmations. Use a modal so the choice is unmissable.

```html
<label class="btn btn-secondary" for="filter-drawer">Filters</label>
<input class="drawer-toggle" type="checkbox" id="filter-drawer">
<div class="drawer-backdrop"></div>
<div class="drawer-panel">
  <div class="drawer-head"><h3 class="modal-title">Filter revisions</h3><label class="close-button" for="filter-drawer" aria-label="Close"><svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg></label></div>
  <p class="text-body text-muted">Drawer content flows like any panel once it is open.</p>
</div>
```

### dropdown

A menu of actions attached to a trigger.

- **Use:** Secondary actions on a row or toolbar.
- **Avoid:** Hiding the primary action in a menu.
- **Note:** CSS handles the open state on focus. Keyboard navigation and Escape are yours to build.

```html
<div class="dropdown">
  <button class="btn btn-secondary btn-sm" type="button">Actions</button>
  <div class="dropdown-menu">
    <button type="button">Restart service</button>
    <button type="button">View logs</button>
    <button type="button">Roll back</button>
  </div>
</div>
```

### modal

A centred dialog that blocks the page until it is resolved.

- **Use:** Confirming a destructive or irreversible action.
- **Avoid:** Modals for information. Put it on the page.
- **Requires:** button
- **Note:** Open it with <code>:target</code> or a checkbox. Focus trapping and Escape are yours to build.

```html
<a href="#confirm-rollback" class="btn btn-danger">Roll back</a>
<div class="modal" id="confirm-rollback">
  <div class="modal-card">
    <div class="modal-head"><h3 class="modal-title">Confirm rollback</h3><button class="close-button" type="button" aria-label="Close"><svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>
    <div class="modal-body">This reverts api-gateway to v2.8.0. Active sessions are not affected.</div>
    <div class="modal-actions"><button class="btn btn-ghost" type="button">Cancel</button><button class="btn btn-danger" type="button">Roll back</button></div>
  </div>
</div>
```

### popover

A small panel of detail attached to a trigger.

- **Use:** Detail that would crowd the row it belongs to.
- **Avoid:** Forms. If it needs a save button, use a modal or a drawer.

```html
<div class="popover">
  <button class="btn btn-secondary btn-sm" type="button">Region details</button>
  <div class="popover-panel">
    <div class="popover-title">us-east-1</div>
    <p class="popover-body">Primary region. Three availability zones.</p>
  </div>
</div>
```

### tooltip

A short hint attached to a control, shown on hover and focus.

- **Use:** Explaining an icon-only control or an abbreviated value.
- **Avoid:** Essential information. Tooltips are invisible on touch devices.

```html
<span class="tooltip" data-tip="Last deployed 12 minutes ago">
  <button class="icon-button" type="button" aria-label="Deployment info">
    <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/></svg>
  </button>
</span>
```

## Content

### cmd-pill

A single copyable command shown as a compact pill.

- **Use:** The one install or run command in a hero or a quickstart.
- **Avoid:** Multi-line scripts. Use a terminal block.

```html
<span class="cmd-pill"><span class="dollar">$</span> npm install postrboard-css</span>
```

### icon

The four icon size tokens.

- **Use:** Sizing SVGs to the type beside them. Always set aria-hidden or role.
- **Avoid:** An icon above every heading. Icons clarify controls, not sections.

```html
<div class="cluster">
  <svg class="icon icon-sm" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>
  <svg class="icon icon-md" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>
  <svg class="icon icon-lg" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>
  <svg class="icon icon-xl" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>
</div>
```

### inline-code

Identifiers inside prose, and keyboard keys.

- **Use:** Class names, flags, paths, and shortcuts mentioned in a sentence.
- **Avoid:** Styling ordinary words as code for texture.

```html
<p class="text-body">Run <code class="inline-code">npm run build</code>, then press <kbd class="kbd">Ctrl</kbd> <kbd class="kbd">C</kbd> to stop the watcher.</p>
```

### quote-block

A pull quote with attribution.

- **Use:** Words someone actually said or wrote, with a real source.
- **Avoid:** Inventing a quote or an attribution. If you have no source, cut it.

```html
<blockquote class="quote-block">
  Rollback has to be one action, not a runbook.
  <cite>Quote and attribution pending</cite>
</blockquote>
```

### terminal

A command and its output, with a labelled title bar.

- **Use:** Products driven by a CLI or config. Show a command you could really run.
- **Avoid:** Terminal chrome with no real command in it. That is decorative code.
- **`.terminal-dot`:** window dots in the title bar, off by default because they are decoration
- **`.red` `.yellow` `.green`:** colours for the window dots, though the framework renders all three grey on purpose

```html
<div class="terminal">
  <div class="terminal-bar">
    <span class="terminal-title">ci-runner &middot; us-east-1</span>
  </div>
  <div class="terminal-body">
    <div><span class="prompt">$</span> <span class="cmd">kubectl rollout status deploy/api-gateway</span></div>
    <div class="dim">deployment "api-gateway" successfully rolled out</div>
  </div>
</div>
```

### type

The full type scale, from the display size down to metadata.

- **Use:** Every piece of text. One text-display per page at most, then text-h1 and text-h2 for structure.
- **Avoid:** Two display-sized lines on one screen. The scale only reads as a hierarchy if the top of it is rare.
- **`.text-mono`:** monospace body, for identifiers and log lines
- **`.t-mono-display`:** a display line set in monospace
- **`.gradient-text`:** tints a run of text with the active accent

```html
<div class="stack">
  <p class="text-display">Deploy history</p>
  <h2 class="text-h1">Roll back in one action</h2>
  <h3 class="text-h2">Section heading</h3>
  <p class="text-card">Card heading, for titles inside a panel.</p>
  <p class="text-body">Body copy. Capped at 72 characters so long paragraphs stay readable without a wrapper.</p>
  <p class="text-body text-muted">Muted body, for a second line that supports the first.</p>
  <p class="text-meta">METADATA &middot; TIMESTAMPS &middot; LABELS</p>
</div>
```

## Marketing

### cta-band

A closing block with one action.

- **Use:** The end of a marketing page, naming the next practical step.
- **Avoid:** Restating the headline in a gradient box. Link to docs, a command, or a trial.
- **`.btn-gradient`:** accent-filled button, for the one action that ends a page
- **Requires:** button

```html
<div class="cta-band">
  <h2 class="cta-title">Read the deploy guide</h2>
  <p class="cta-body">Set up a pipeline in about ten minutes.</p>
  <a class="btn" href="/docs/deploy">Open the guide</a>
</div>
```

### feature-card

A rule-separated block for one capability.

- **Use:** Capabilities that genuinely differ in kind, described in concrete terms.
- **Avoid:** Three of these in a row with an icon on each. That is the single most recognisable AI landing-page tell. Prefer a workflow, a table, or a real artifact.
- **`.feature-grid`:** three-column wrapper, if you have three capabilities that genuinely differ

```html
<div class="feature-card">
  <svg class="icon feature-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
  <h3 class="feature-title">Promote by revision</h3>
  <p class="feature-body">Pick any revision that passed checks and move traffic to it.</p>
</div>
```

### pricing-card

A plan with a price and a feature list. Add popular to mark one.

- **Use:** Real published plans, when the user asks for pricing.
- **Avoid:** Inventing tiers or prices. If they are unknown, say so instead.
- **`.pricing-grid`:** three-column wrapper
- **`.popular`:** marks one plan with the accent border
- **Requires:** button, styled-list

```html
<div class="pricing-card popular">
  <h3 class="text-card">Team</h3>
  <p class="text-h2">Price pending</p>
  <ul class="styled-list"><li>Unlimited revisions</li><li>Audit log export</li></ul>
  <button class="btn btn-primary" type="button">Start a trial</button>
</div>
```

### testimonial-card

A quote with attribution, framed by rules.

- **Use:** Only when the user supplies the quote and the source.
- **Avoid:** Fabricated names, companies, avatars, or logos. Leave the placeholder visible instead.

```html
<div class="testimonial-card">
  <p class="testimonial-quote">Customer quote pending</p>
  <p class="text-meta">Name and company pending</p>
</div>
```

## Utilities

### utility-layout

Display mode, flex direction, alignment, and positioning.

- **Use:** Arranging the inside of a component the grids do not cover.
- **Avoid:** Recreating grid-split or cluster out of flex utilities. Use the named layout instead.
- **`.block` `.inline-block` `.inline-flex` `.flex` `.grid` `.hidden`:** display mode
- **`.flex-col` `.flex-wrap`:** flex direction and wrapping
- **`.items-start` `.items-center` `.items-end`:** cross-axis alignment
- **`.justify-start` `.justify-center` `.justify-end` `.justify-between`:** main-axis alignment
- **`.relative` `.absolute` `.fixed` `.sticky`:** positioning

```html
<div class="flex items-center justify-between">
  <span class="text-meta">api-gateway</span>
  <span class="badge badge-success">Healthy</span>
</div>
```

### utility-responsive

Show or hide an element at a breakpoint.

- **Use:** Swapping a dense desktop control for a compact one on a phone.
- **Avoid:** Hiding a primary action on small screens. Move it or shorten it, but keep it reachable.
- **`.hidden`:** hide at every width
- **`.hide-sm` `.hide-md`:** hide at that breakpoint and below
- **`.show-sm` `.show-md`:** show only at that breakpoint and below
- **Note:** hide-sm and show-sm act at the phone breakpoint; hide-md and show-md act at the tablet breakpoint.

```html
<div class="cluster">
  <button class="btn btn-primary" type="button"><span class="hide-sm">Promote revision</span><span class="show-sm">Promote</span></button>
</div>
```

### utility-sizing

Width caps, full height, flexible growth, and overflow.

- **Use:** Capping a measure, letting one flex child take the remaining space, or scrolling a bounded region.
- **Avoid:** max-w on prose that already sits in a container or text-body. Both cap the measure for you.
- **`.max-w-sm` `.max-w-md` `.max-w-lg` `.max-w-xl`:** width caps
- **`.w-full` `.h-full`:** fill the parent
- **`.flex-1`:** take the remaining space in a flex row
- **`.overflow-auto` `.overflow-hidden`:** scroll or clip a bounded region

```html
<div class="flex gap-3 items-center">
  <input class="input flex-1" value="api-gateway" aria-label="Service">
  <button class="btn btn-secondary" type="button">Find</button>
</div>
```

### utility-spacing

Margin, padding, and gap on the shared space scale, from 1 to 8.

- **Use:** A one-off nudge that does not deserve a wrapper. Reach for stack, cluster, or a grid first.
- **Avoid:** Building a layout out of margin utilities. If you are setting three in a row, you wanted a stack.
- **`.mt-1` `.mt-2` `.mt-3` `.mt-4` `.mt-5` `.mt-6` `.mt-7` `.mt-8`:** top margin, step 1 to 8 of the space scale
- **`.mb-1` `.mb-2` `.mb-3` `.mb-4` `.mb-5` `.mb-6` `.mb-7` `.mb-8`:** bottom margin, same scale
- **`.p-1` `.p-2` `.p-3` `.p-4` `.p-5` `.p-6` `.p-7` `.p-8`:** padding on all sides
- **`.px-1` `.px-2` `.px-3` `.px-4` `.px-5` `.px-6`:** horizontal padding
- **`.py-1` `.py-2` `.py-3` `.py-4` `.py-5` `.py-6`:** vertical padding
- **`.gap-1` `.gap-2` `.gap-3` `.gap-4` `.gap-5` `.gap-6` `.gap-7` `.gap-8`:** gap between flex or grid children
- **`.m-auto` `.mx-auto`:** centre a fixed-width block

```html
<div class="panel">
  <div class="panel-content">
    <p class="text-body">Promoting a revision moves production traffic.</p>
    <button class="btn btn-primary mt-4" type="button">Promote</button>
  </div>
</div>
```

### utility-surface

Background, border, and corner rounding that match the framework tokens.

- **Use:** A small framed region inside a component, using the same tokens as the rest of the page.
- **Avoid:** Framing everything. Nested borders inside a panel are how a page starts to look like a stack of boxes.
- **`.bg-surface` `.bg-code`:** token backgrounds
- **`.border` `.border-top` `.border-bottom`:** token borders
- **`.rounded` `.rounded-lg` `.rounded-full`:** corner radius, from the geometry setting

```html
<div class="bg-code border rounded p-4">
  <p class="text-mono">GET /v1/deploys?status=ready</p>
</div>
```

### utility-text

Alignment, semantic colour, and truncation for text.

- **Use:** Right-aligning a numeric column, tinting a status word, or clipping a long identifier to one line.
- **Avoid:** text-center on body copy. Left-aligned prose is easier to read, and centred blocks are a landing-page habit.
- **`.text-left` `.text-center` `.text-right`:** alignment
- **`.text-accent`:** the active accent
- **`.text-success` `.text-warning` `.text-danger` `.text-info`:** semantic state colours
- **`.truncate`:** clip to one line with an ellipsis

```html
<div class="stack stack-sm">
  <p class="text-body">Build <span class="text-success">passed</span> on <span class="text-accent">main</span>.</p>
  <p class="text-meta truncate">sha256:9f2c1ab4de7810b3c5e6f4a2d8b90c1e3f5a7b9d2c4e6f8a0b1c3d5e7f9a1b3c</p>
</div>
```
