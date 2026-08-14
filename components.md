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
- **Requires:** sidebar-nav, page-header, stat-strip

```html
<div class="grid-sidebar is-app-shell">
  <aside class="app-sidebar">
    <a class="brand" href="/"><span class="brand-mark">R/</span> relay</a>
    <nav class="sidebar-nav" aria-label="Sections">
      <a href="/" aria-current="page">Overview</a>
      <a href="/deploys">Deploys</a>
      <a href="/logs">Logs</a>
    </nav>
  </aside>
  <main class="app-main" id="main">
    <header class="page-header">
      <div class="page-header-main">
        <h1 class="page-title">Overview</h1>
        <p class="page-summary">Live services in us-east-1.</p>
      </div>
    </header>
    <dl class="stat-strip">
      <div class="stat-item"><dt class="stat-label">Ready</dt><dd class="stat-value">12</dd></div>
      <div class="stat-item"><dt class="stat-label">Building</dt><dd class="stat-value">4</dd></div>
      <div class="stat-item"><dt class="stat-label">Failed</dt><dd class="stat-value">1</dd></div>
    </dl>
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
<div class="stack">
  <div class="container-sm">
    <div class="panel">
      <div class="panel-content stack stack-sm">
        <span class="text-meta">container-sm</span>
        <p class="text-body">720px prose measure</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="panel">
      <div class="panel-content stack stack-sm">
        <span class="text-meta">container</span>
        <p class="text-body">1200px default page width</p>
      </div>
    </div>
  </div>
  <div class="container-lg">
    <div class="panel">
      <div class="panel-content stack stack-sm">
        <span class="text-meta">container-lg</span>
        <p class="text-body">1440px dense tools</p>
      </div>
    </div>
  </div>
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
  <div class="panel">
    <div class="panel-content stack stack-sm">
      <p class="text-card">Deploy notes</p>
      <p class="text-body text-muted">This revision only changes the health probe path. No schema migration runs.</p>
    </div>
  </div>
  <div class="panel">
    <div class="panel-content stack stack-sm">
      <div>
        <p class="text-meta">region</p>
        <p class="text-body">us-east-1</p>
      </div>
      <div>
        <p class="text-meta">owner</p>
        <p class="text-body">Platform</p>
      </div>
    </div>
  </div>
</div>
```

### grid-auto

As many equal columns as fit, wrapping automatically.

- **Use:** Collections whose length you do not control.
- **Avoid:** A fixed count you already know. Use grid-thirds or grid-split.

```html
<div class="grid-auto">
  <div class="panel">
    <div class="panel-content stack stack-sm">
      <p class="text-card">us-east-1</p>
      <p class="text-meta">3 replicas</p>
    </div>
  </div>
  <div class="panel">
    <div class="panel-content stack stack-sm">
      <p class="text-card">us-west-2</p>
      <p class="text-meta">2 replicas</p>
    </div>
  </div>
  <div class="panel">
    <div class="panel-content stack stack-sm">
      <p class="text-card">eu-west-1</p>
      <p class="text-meta">2 replicas</p>
    </div>
  </div>
  <div class="panel">
    <div class="panel-content stack stack-sm">
      <p class="text-card">ap-south-1</p>
      <p class="text-meta">1 replica</p>
    </div>
  </div>
</div>
```

### grid-centered

A single measured column, centred in the page.

- **Use:** Prose, focused flows, and anything read top to bottom.
- **Avoid:** Data tables. They need the width.

```html
<div class="grid-centered">
  <div class="panel">
    <div class="panel-content stack stack-sm">
      <p class="text-card">Confirm the rollback target</p>
      <p class="text-body text-muted">Production traffic moves to v2.8.0. Active sessions stay open until they expire.</p>
    </div>
  </div>
</div>
```

### grid-holy-grail

A full-width header and footer around three columns.

- **Use:** Dense tools that need context on both sides of the work area.
- **Avoid:** Simple pages. Two rails is a lot of chrome.

```html
<div class="grid-holy-grail">
  <div class="panel"><div class="panel-content"><span class="text-meta">header</span> · api-gateway</div></div>
  <div class="panel"><div class="panel-content stack stack-sm"><span class="text-meta">nav</span><span class="text-body">Overview</span><span class="text-body">Revisions</span></div></div>
  <div class="panel"><div class="panel-content stack stack-sm"><span class="text-meta">main</span><span class="text-body">Work surface for the selected revision.</span></div></div>
  <div class="panel"><div class="panel-content stack stack-sm"><span class="text-meta">aside</span><span class="text-body">Checks</span><span class="text-body">Owners</span></div></div>
  <div class="panel"><div class="panel-content"><span class="text-meta">footer</span> · last synced 12s ago</div></div>
</div>
```

### grid-masonry

Three columns that flow by height rather than by row.

- **Use:** Items with genuinely different heights, such as notes or clips.
- **Avoid:** Uniform cards. It just looks unaligned.

```html
<div class="grid-masonry">
  <div class="panel">
    <div class="panel-content stack stack-sm">
      <p class="text-card">Probe path</p>
      <p class="text-body text-muted">/healthz</p>
    </div>
  </div>
  <div class="panel">
    <div class="panel-content stack stack-sm">
      <p class="text-card">Rollback notes</p>
      <p class="text-body text-muted">Keeps the previous revision warm for one hour so a second rollback is instant. Sessions are not drained.</p>
      <p class="text-body text-muted">Use only after checks are green on the target revision.</p>
    </div>
  </div>
  <div class="panel">
    <div class="panel-content stack stack-sm">
      <p class="text-card">Owner</p>
      <p class="text-body text-muted">Platform</p>
    </div>
  </div>
  <div class="panel">
    <div class="panel-content stack stack-sm">
      <p class="text-card">Canary</p>
      <p class="text-body text-muted">5% of production traffic for fifteen minutes, then promote or abort.</p>
    </div>
  </div>
  <div class="panel">
    <div class="panel-content stack stack-sm">
      <p class="text-card">Region</p>
      <p class="text-body text-muted">us-east-1</p>
    </div>
  </div>
</div>
```

### grid-sidebar

A fixed-width rail beside a fluid main column.

- **Use:** Docs and settings pages with persistent section navigation.
- **Avoid:** A rail with two links in it.

```html
<div class="grid-sidebar">
  <div class="panel">
    <div class="panel-content stack stack-sm">
      <p class="text-meta">sections</p>
      <p class="text-body">Overview</p>
      <p class="text-body">Retention</p>
      <p class="text-body">Access</p>
    </div>
  </div>
  <div class="panel">
    <div class="panel-content stack stack-sm">
      <p class="text-card">Retention policy</p>
      <p class="text-body text-muted">Keep failed job logs for 30 days, then drop them.</p>
    </div>
  </div>
</div>
```

### grid-split

Two equal columns.

- **Use:** A claim beside the artifact it describes, where neither outweighs the other.
- **Avoid:** Three or more children. They wrap into an uneven last row.
- **`.grid-two`:** the old name for this grid, kept working

```html
<div class="grid-split">
  <div class="panel">
    <div class="panel-content stack stack-sm">
      <p class="text-card">Rollback is one action</p>
      <p class="text-body text-muted">Revert production traffic to any green revision without a runbook.</p>
    </div>
  </div>
  <div class="panel">
    <div class="panel-content stack stack-sm">
      <p class="text-meta">artifact</p>
      <p class="text-mono">kubectl rollout undo deploy/api-gateway</p>
    </div>
  </div>
</div>
```

### grid-stack-rail

A fluid main column with a narrower trailing rail.

- **Use:** Primary content with secondary context beside it, such as activity or help.
- **Avoid:** Putting the primary action in the rail.

```html
<div class="grid-stack-rail">
  <div class="panel">
    <div class="panel-content stack stack-sm">
      <p class="text-card">Revision 6f82ae1</p>
      <p class="text-body text-muted">All required checks passed. Ready to promote to production.</p>
    </div>
  </div>
  <div class="panel">
    <div class="panel-content stack stack-sm">
      <p class="text-meta">activity</p>
      <p class="text-body">Build finished</p>
      <p class="text-body">Checks green</p>
    </div>
  </div>
</div>
```

### grid-thirds

Three equal columns.

- **Use:** Three genuinely parallel items, such as environments or regions.
- **Avoid:** Three invented benefits. That is the feature-grid tell.

```html
<div class="grid-thirds">
  <div class="panel">
    <div class="panel-content stack stack-sm">
      <p class="text-meta">environment</p>
      <p class="text-card">Staging</p>
      <p class="text-body text-muted">v2.8.1-rc.3</p>
    </div>
  </div>
  <div class="panel">
    <div class="panel-content stack stack-sm">
      <p class="text-meta">environment</p>
      <p class="text-card">Canary</p>
      <p class="text-body text-muted">v2.8.1 · 5%</p>
    </div>
  </div>
  <div class="panel">
    <div class="panel-content stack stack-sm">
      <p class="text-meta">environment</p>
      <p class="text-card">Production</p>
      <p class="text-body text-muted">v2.8.0</p>
    </div>
  </div>
</div>
```

### scroll-area

A bounded region that scrolls on its own, with a thin scrollbar.

- **Use:** A long list inside a panel, where the page itself should not grow: log lines, results, a picker.
- **Avoid:** Nesting one inside another scrolling region. Two scrollbars in one place is a trap.

```html
<div class="scroll-area">
  <ul class="list-group">
    <li class="list-item"><span class="list-title">api-gateway</span><span class="list-meta">2h ago</span></li>
    <li class="list-item"><span class="list-title">billing-worker</span><span class="list-meta">5h ago</span></li>
    <li class="list-item"><span class="list-title">webhook-relay</span><span class="list-meta">yesterday</span></li>
    <li class="list-item"><span class="list-title">search-indexer</span><span class="list-meta">2d ago</span></li>
    <li class="list-item"><span class="list-title">image-resizer</span><span class="list-meta">4d ago</span></li>
    <li class="list-item"><span class="list-title">audit-log</span><span class="list-meta">5d ago</span></li>
    <li class="list-item"><span class="list-title">event-router</span><span class="list-meta">6d ago</span></li>
    <li class="list-item"><span class="list-title">metrics-sink</span><span class="list-meta">last week</span></li>
    <li class="list-item"><span class="list-title">cache-warmer</span><span class="list-meta">last week</span></li>
    <li class="list-item"><span class="list-title">schema-migrator</span><span class="list-meta">2 weeks ago</span></li>
  </ul>
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

- **Use:** A small set of actions on one object, such as edit, duplicate, and archive.
- **Avoid:** Unrelated actions. Use a cluster of separate buttons instead. For exclusive choices, use segmented-control.

```html
<div class="button-group">
  <button class="btn btn-secondary btn-sm" type="button">Edit</button>
  <button class="btn btn-secondary btn-sm" type="button">Duplicate</button>
  <button class="btn btn-secondary btn-sm" type="button">Archive</button>
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

### auth-card

A narrow card holding a sign-in form and its secondary links.

- **Use:** Sign in, sign up, and reset, on a page with nothing else competing for attention.
- **Avoid:** A marketing panel beside it. The person is here to get in.
- **Requires:** form

```html
<div class="auth-card">
  <div class="stack">
    <div class="stack stack-sm">
      <h1 class="text-card">Sign in</h1>
      <p class="text-body text-muted">Use the account your organisation issued.</p>
    </div>
    <form class="form-stack">
      <div class="form-field">
        <label class="form-label" for="auth-mail">Email</label>
        <input class="input" id="auth-mail" type="email" autocomplete="username">
      </div>
      <div class="form-field">
        <label class="form-label" for="auth-pass">Password</label>
        <input class="input" id="auth-pass" type="password" autocomplete="current-password">
      </div>
      <button class="btn btn-primary" type="submit">Sign in</button>
    </form>
    <div class="auth-links">
      <a href="/reset">Forgot password</a>
      <a href="/sso">Use single sign-on</a>
    </div>
  </div>
</div>
```

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

### date-picker

A native date input in a framed field with a leading icon.

- **Use:** Picking a single date. The native control brings the calendar, the keyboard support, and the locale format for free.
- **Avoid:** Building a custom popup calendar for a plain date field. Use the calendar component only when you must render a month in place.

```html
<label class="picker-field" for="cutover-date">
  <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/></svg>
  <input class="picker-input" id="cutover-date" type="date" value="2026-06-10">
</label>
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

### otp-input

Single-character boxes for a verification code.

- **Use:** A code sent by mail or an authenticator app, where the length is fixed and known.
- **Avoid:** Using it for a password or a long token. Split boxes stop working once a person cannot see the whole value.
- **Note:** The boxes are presentation. Advancing focus on input, and handling a pasted code, needs JavaScript. Set aria-invalid="true" on every box when a code is rejected.

```html
<div class="stack stack-sm">
  <div class="otp-row" role="group" aria-label="Verification code">
    <input class="otp-input" inputmode="numeric" maxlength="1" value="4" aria-label="Digit 1">
    <input class="otp-input" inputmode="numeric" maxlength="1" value="2" aria-label="Digit 2">
    <input class="otp-input" inputmode="numeric" maxlength="1" value="8" aria-label="Digit 3">
    <input class="otp-input" inputmode="numeric" maxlength="1" aria-label="Digit 4">
    <input class="otp-input" inputmode="numeric" maxlength="1" aria-label="Digit 5">
    <input class="otp-input" inputmode="numeric" maxlength="1" aria-label="Digit 6">
  </div>
  <p class="form-helper">Six characters, sent to the address on the account.</p>
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

### time-picker

A native time input in the same framed field as the date picker.

- **Use:** Picking a time of day, usually beside a date picker in a scheduling row.
- **Avoid:** Using it for a duration. A duration is a number with a unit, not a clock time.

```html
<label class="picker-field" for="cutover-time">
  <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
  <input class="picker-input" id="cutover-time" type="time" value="14:30">
</label>
```

## Surfaces

### accordion

Native details and summary styled as a disclosure row.

- **Use:** Reference content most readers skip, such as troubleshooting.
- **Avoid:** Hiding content the user needs to complete the task in front of them.

```html
<details class="accordion" open>
  <summary>What do I still have to build in JavaScript?</summary>
  <div class="accordion-body">Focus trapping, closing on Escape, arrow-key navigation, tracking which item is selected, and screen-reader announcements. The CSS only styles these components.</div>
</details>
```

### card

A compatibility alias for panel, kept for 1.x markup.

- **Use:** Existing pages already written against the 1.x card API.
- **Avoid:** New work. Use panel, which is the canonical name.
- **`.card-interactive`:** hover response, when the whole card is a link
- **Requires:** badge

```html
<article class="card">
  <div class="card-header"><h3 class="card-title">api-gateway</h3><span class="badge badge-status" data-state="success">Healthy</span></div>
  <div class="card-content"><p class="card-body">Three replicas healthy in us-east-1. Last check 40 seconds ago.</p></div>
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

### avatar-group

Overlapping avatars for the people on a thing.

- **Use:** Showing who is assigned, watching, or reviewing, when the count is small.
- **Avoid:** More than about five. Past that, show three and a count.
- **Requires:** avatar

```html
<div class="cluster">
  <div class="avatar-group">
    <span class="avatar avatar-md">AR</span>
    <span class="avatar avatar-md">MK</span>
    <span class="avatar avatar-md">JT</span>
  </div>
  <span class="text-meta">and 4 more</span>
</div>
```

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

### calendar

A month grid with today, selection, and adjacent-month days.

- **Use:** Showing a month in place, when the dates carry information a person must see: bookings, incidents, or scheduled runs.
- **Avoid:** Using it as a date field. A date input is smaller, faster, and already accessible.
- **`.is-today`:** a ring on the current day
- **`.is-selected`:** the chosen day
- **`.is-outside`:** a day from the neighbouring month
- **Note:** The grid is presentation. Month changes and selection need JavaScript.

```html
<div class="calendar">
  <div class="calendar-head">
    <button class="icon-button" type="button" aria-label="Previous month"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg></button>
    <span class="calendar-title">June 2026</span>
    <button class="icon-button" type="button" aria-label="Next month"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></button>
  </div>
  <div class="calendar-grid">
    <span class="calendar-dow">Mo</span><span class="calendar-dow">Tu</span><span class="calendar-dow">We</span><span class="calendar-dow">Th</span><span class="calendar-dow">Fr</span><span class="calendar-dow">Sa</span><span class="calendar-dow">Su</span>
    <button class="calendar-day is-outside" type="button">31</button>
    <button class="calendar-day" type="button">1</button>
    <button class="calendar-day" type="button">2</button>
    <button class="calendar-day" type="button">3</button>
    <button class="calendar-day" type="button">4</button>
    <button class="calendar-day" type="button">5</button>
    <button class="calendar-day" type="button">6</button>
    <button class="calendar-day" type="button">7</button>
    <button class="calendar-day" type="button">8</button>
    <button class="calendar-day is-today" type="button" aria-current="date">9</button>
    <button class="calendar-day" type="button" aria-selected="true">10</button>
    <button class="calendar-day" type="button">11</button>
    <button class="calendar-day" type="button">12</button>
    <button class="calendar-day" type="button">13</button>
  </div>
</div>
```

### chart

Bars sized by a --value custom property, from 0 to 100.

- **Use:** A small comparison that sits beside prose or inside a panel, where a charting library would be too much.
- **Avoid:** Inventing the numbers. If you have no data, say so with an empty state. A chart of made-up bars is the clearest AI tell there is.
- **`.is-active`:** the highlighted bar, in the solid accent
- **Note:** Set --value per bar as a percentage of the tallest value. For real analysis, use a charting library and keep these tokens.

```html
<div class="panel">
  <div class="panel-content stack stack-sm">
    <p class="text-meta">Build minutes by day. Connect a data source to populate this chart.</p>
    <div class="chart">
      <span class="chart-bar" style="--value: 42">Mon</span>
      <span class="chart-bar" style="--value: 61">Tue</span>
      <span class="chart-bar" style="--value: 38">Wed</span>
      <span class="chart-bar is-active" style="--value: 88">Thu</span>
      <span class="chart-bar" style="--value: 54">Fri</span>
    </div>
  </div>
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

### sortable-table

A data table whose headers are buttons that re-sort the rows.

- **Use:** A table a person will scan by different columns: newest, slowest, largest.
- **Avoid:** Making every column sortable. Sort the columns people compare, not the ones they read.
- **Requires:** data-table
- **Note:** aria-sort goes on the sorted th, and takes "ascending" or "descending". Sorting itself needs JavaScript.

```html
<div class="table-wrap">
  <table class="data-table">
    <thead>
      <tr>
        <th scope="col" class="sortable"><button type="button">Service<svg class="sort-indicator" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 15 6 6 6-6"/><path d="m6 9 6-6 6 6"/></svg></button></th>
        <th scope="col" class="sortable" aria-sort="descending"><button type="button">Duration<svg class="sort-indicator" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 15 6 6 6-6"/><path d="m6 9 6-6 6 6"/></svg></button></th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>image-resizer</td><td class="is-numeric">4m 12s</td><td><span class="badge badge-danger">Failed</span></td></tr>
      <tr><td>api-gateway</td><td class="is-numeric">1m 48s</td><td><span class="badge badge-success">Passed</span></td></tr>
      <tr><td>webhook-relay</td><td class="is-numeric">0m 39s</td><td><span class="badge badge-success">Passed</span></td></tr>
    </tbody>
  </table>
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

### nav-rail

A narrow vertical strip of icon-and-label destinations.

- **Use:** An app with a handful of top-level areas, where a full sidebar would waste width.
- **Avoid:** A rail with icon-only items. An unlabelled icon is a guess. Keep the label, however small.
- **Note:** Mark the current destination with aria-current="page", or with the is-active class.

```html
<nav class="nav-rail" aria-label="Sections">
  <a class="nav-rail-item" href="/overview" aria-current="page">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>
    Overview
  </a>
  <a class="nav-rail-item" href="/deploys">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
    Deploys
  </a>
  <a class="nav-rail-item" href="/logs">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h10"/></svg>
    Logs
  </a>
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
<div class="stack">
  <nav class="navbar-bordered" aria-label="Bordered">
    <div class="nav-inner">
      <a class="brand" href="/"><span class="brand-mark">R/</span> relay</a>
      <div class="nav-links">
        <a class="nav-link" aria-current="page" href="/">Overview</a>
        <a class="nav-link" href="/deploys">Deploys</a>
        <a class="nav-link" href="/api">API</a>
      </div>
    </div>
  </nav>
  <nav class="navbar-solid" aria-label="Solid">
    <div class="nav-inner">
      <a class="brand" href="/"><span class="brand-mark">R/</span> relay</a>
      <div class="nav-links">
        <a class="nav-link" aria-current="page" href="/">Overview</a>
        <a class="nav-link" href="/deploys">Deploys</a>
        <a class="nav-link" href="/api">API</a>
      </div>
    </div>
  </nav>
  <nav class="navbar-glass" aria-label="Glass">
    <div class="nav-inner">
      <a class="brand" href="/"><span class="brand-mark">R/</span> relay</a>
      <div class="nav-links">
        <a class="nav-link" aria-current="page" href="/">Overview</a>
        <a class="nav-link" href="/deploys">Deploys</a>
        <a class="nav-link" href="/api">API</a>
      </div>
    </div>
  </nav>
  <nav class="navbar-minimal" aria-label="Minimal">
    <div class="nav-inner">
      <a class="brand" href="/"><span class="brand-mark">R/</span> relay</a>
      <div class="nav-links">
        <a class="nav-link" aria-current="page" href="/">Overview</a>
        <a class="nav-link" href="/deploys">Deploys</a>
        <a class="nav-link" href="/api">API</a>
      </div>
    </div>
  </nav>
</div>
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

### skeleton

Grey blocks in the shape of the content that is loading.

- **Use:** A first load where you know the shape of what is coming. It reads faster than a spinner because the page does not jump.
- **Avoid:** Skeletons for an action a person just took. Use a busy state on the control they pressed.
- **Note:** skeleton-text shortens each following line so it reads as a paragraph. Mark the region aria-busy so it is announced.

```html
<div class="stack stack-sm" aria-busy="true" aria-label="Loading">
  <div class="skeleton-text">
    <div class="skeleton"></div>
    <div class="skeleton"></div>
    <div class="skeleton"></div>
    <div class="skeleton"></div>
  </div>
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

### toast-region

The fixed corner container that stacks toasts.

- **Use:** One per page. Put every toast in it so they queue instead of overlapping.
- **Avoid:** Toasting an error a person must act on. A toast leaves. Use an alert or keep the error beside the control.
- **Requires:** toast
- **Note:** aria-live="polite" announces new toasts without cutting off the current sentence.

```html
<div class="toast-region" role="status" aria-live="polite">
  <div class="toast">
    <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
    <div><strong class="toast-title">Build queued</strong><p class="toast-body">Revision 4f2c1ab is waiting for a runner.</p></div>
  </div>
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

### alert-dialog

A modal that asks a person to confirm something they cannot undo.

- **Use:** Deleting, revoking, or anything irreversible. Name the object in the button, not just "Confirm".
- **Avoid:** Using it for a save or a routine action. If it can be undone, do it and offer an undo instead.
- **Requires:** modal
- **Note:** An alert dialog takes role="alertdialog". Escape should cancel, never confirm. Focus trapping is yours to build.

```html
<a href="#revoke-key" class="btn btn-danger">Revoke key</a>
<div class="modal modal-alert" id="revoke-key" role="alertdialog" aria-labelledby="revoke-title">
  <div class="modal-card">
    <div class="modal-head">
      <span class="modal-icon"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg></span>
      <h3 class="modal-title" id="revoke-title">Revoke this key?</h3>
    </div>
    <div class="modal-body">Any service using <code class="inline-code">deploy-bot-prod</code> stops authenticating straight away. This cannot be undone.</div>
    <div class="modal-actions"><a class="btn btn-ghost" href="#components">Keep the key</a><button class="btn btn-danger" type="button">Revoke the key</button></div>
  </div>
</div>
```

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

### context-menu

A small menu of actions for one object.

- **Use:** Row actions, right-click menus, and overflow menus where the actions belong to a specific item.
- **Avoid:** Hiding the primary action in here. A menu is for the secondary and the rare.
- **`.is-danger`:** a destructive item, in the danger colour
- **Note:** Position it and handle Escape, arrow keys, and outside clicks in application code.

```html
<div class="context-menu" role="menu" aria-label="Deploy actions">
  <button class="context-menu-item" type="button" role="menuitem">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
    Promote to production
  </button>
  <button class="context-menu-item" type="button" role="menuitem">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>
    Roll back
    <kbd>R</kbd>
  </button>
  <hr class="context-menu-separator">
  <button class="context-menu-item is-danger" type="button" role="menuitem">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6v14H5V6"/></svg>
    Delete build
  </button>
</div>
```

### drawer

A panel that slides in from the edge, driven by a checkbox toggle.

- **Use:** Filters and detail views that sit beside the main content.
- **Avoid:** Destructive confirmations. Use a modal so the choice is unmissable.
- **Requires:** checkbox

```html
<label class="btn btn-secondary" for="filter-drawer">Filters</label>
<input class="drawer-toggle" type="checkbox" id="filter-drawer" checked>
<div class="drawer-backdrop"></div>
<div class="drawer-panel">
  <div class="drawer-head"><h3 class="modal-title">Filter revisions</h3><label class="close-button" for="filter-drawer" aria-label="Close"><svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg></label></div>
  <div class="stack stack-sm">
    <p class="text-body text-muted">Show only failed checks from the last 24 hours.</p>
    <label class="checkbox"><input type="checkbox" checked> Failed only</label>
    <label class="checkbox"><input type="checkbox"> Needs review</label>
  </div>
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

### hover-card

A panel of detail that opens on hover or focus.

- **Use:** Previewing the thing behind a link: a user, a commit, a service. It saves a trip.
- **Avoid:** Putting anything essential or interactive in it. It is unreachable on a touch screen, so the content must be a bonus.
- **Requires:** badge
- **Note:** Opens on hover and on focus-within, so keyboard users get it too.

```html
<span class="hover-card">
  <a class="text-accent" href="/services/api-gateway">api-gateway</a>
  <span class="hover-card-panel">
    <span class="stack stack-sm">
      <span class="text-card">api-gateway</span>
      <span class="text-meta">Owned by Platform. Last deployed 2 hours ago.</span>
      <span class="badge badge-status" data-state="success">Healthy</span>
    </span>
  </span>
</span>
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

### aspect-ratio

A box that holds its shape while the media inside fills it.

- **Use:** Any image, video, or map that must not change the page height as it loads.
- **Avoid:** Wrapping text in it. Text should set its own height.
- **`.aspect-16-9` `.aspect-4-3` `.aspect-1-1`:** the shape of the box
- **Note:** The default shape is 16 by 9.

```html
<div class="aspect aspect-4-3">
  <img src="/media/deploy-graph.png" alt="Deploy frequency over the last 30 days">
</div>
```

### cmd-pill

A single copyable command shown as a compact pill.

- **Use:** The one install or run command in a hero or a quickstart.
- **Avoid:** Multi-line scripts. Use a terminal block.

```html
<span class="cmd-pill"><span class="dollar">$</span> npm install postrboard-css</span>
```

### figure

Media with a caption underneath.

- **Use:** A diagram or screenshot that needs a sentence to explain what a person is looking at.
- **Avoid:** A caption that repeats the alt text. The alt text describes it; the caption says why it matters.

```html
<figure class="figure">
  <div class="frame">
    <img src="/media/pipeline.png" alt="A pipeline with build, test, and deploy stages">
  </div>
  <figcaption class="figure-caption">Each stage runs on the merge commit, not the branch tip.</figcaption>
</figure>
```

### frame

A bordered, rounded, clipping container for an image or a screenshot.

- **Use:** Giving a screenshot an edge, so a light interface does not bleed into a light page.
- **Avoid:** Framing an illustration that already has its own edge.

```html
<div class="frame">
  <img src="/media/console.png" alt="The deploy console showing three queued builds">
</div>
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

### media-embed

A fixed-shape frame with a play control over it.

- **Use:** A video you load only after a person asks for it, which keeps the third-party script off the first paint.
- **Avoid:** Autoplay with sound. Also avoid a play button that does nothing; wire it up or use a plain image.
- **Requires:** aspect-ratio

```html
<div class="aspect media-embed">
  <img src="/media/walkthrough-poster.png" alt="">
  <button class="media-play" type="button" aria-label="Play the walkthrough">
    <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
  </button>
</div>
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

### faq

A stack of accordions for real, repeated questions.

- **Use:** Questions your support channel actually receives. Write the question the way a person asks it.
- **Avoid:** Inventing questions to fill a section, and answering with a sales line. If the answer is "yes, and it is great", delete the entry.
- **Requires:** accordion

```html
<div class="faq">
  <details class="accordion" open>
    <summary>Does a rollback re-run the build?</summary>
    <div class="accordion-body">No. A rollback repoints traffic at an artefact that already passed. It takes about four seconds.</div>
  </details>
  <details class="accordion">
    <summary>Can two people deploy at once?</summary>
    <div class="accordion-body">The queue is per environment. The second deploy waits, and the person who started it sees who is ahead of them.</div>
  </details>
  <details class="accordion">
    <summary>What happens to in-flight requests?</summary>
    <div class="accordion-body">The old revision keeps serving until it drains, up to 30 seconds. You can raise the limit per service.</div>
  </details>
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

### logo-cloud

A labelled row of integration or customer slots.

- **Use:** Naming the systems you connect to, when those names are real and you may show them.
- **Avoid:** Filling it with invented companies or grey blobs. The dashed slots are honest placeholders. Leave them until you have permission to use a real mark.

```html
<div class="logo-cloud">
  <p class="logo-cloud-label">Connects to</p>
  <div class="logo-cloud-row">
    <span class="logo-cloud-item">Integration name</span>
    <span class="logo-cloud-item">Integration name</span>
    <span class="logo-cloud-item">Integration name</span>
    <span class="logo-cloud-item">Integration name</span>
  </div>
</div>
```

### newsletter

One field and one button, with a line about what arrives.

- **Use:** A changelog or release list a person can opt into.
- **Avoid:** A whole section built around it. This is a footer-sized thing. And say what you send, and how often, before you ask.

```html
<div class="newsletter">
  <p class="text-body">Release notes, once a fortnight. No other mail.</p>
  <form class="newsletter-form">
    <label class="sr-only" for="release-mail">Email address</label>
    <input class="input" id="release-mail" type="email" placeholder="you@company.com" autocomplete="email">
    <button class="btn btn-primary" type="submit">Subscribe</button>
  </form>
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
- **`.spacer`:** push the next flex child to the far end

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
- **`.clamp-2` `.clamp-3`:** clip to that many lines

```html
<div class="stack stack-sm">
  <p class="text-body">Build <span class="text-success">passed</span> on <span class="text-accent">main</span>.</p>
  <p class="text-meta truncate">sha256:9f2c1ab4de7810b3c5e6f4a2d8b90c1e3f5a7b9d2c4e6f8a0b1c3d5e7f9a1b3c</p>
</div>
```
