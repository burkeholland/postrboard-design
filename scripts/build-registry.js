'use strict';

/**
 * Builds the component registry from registry/*.html.
 *
 * Each source file is HTML with a leading comment block of key: value metadata.
 * This script validates it, then emits:
 *   registry/index.json  - machine-readable index for agents and tooling
 *   components.md        - flat, greppable mirror of the whole registry
 * and returns the generated docs markup for index.html.
 */

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const registryDir = path.join(root, 'registry');

const CATEGORIES = [
  ['layout', 'Layout'],
  ['actions', 'Actions'],
  ['forms', 'Forms'],
  ['surfaces', 'Surfaces'],
  ['data', 'Data'],
  ['navigation', 'Navigation'],
  ['feedback', 'Feedback'],
  ['overlays', 'Overlays'],
  ['content', 'Content'],
  ['marketing', 'Marketing'],
  ['utilities', 'Utilities'],
];

/** Docs-only wrappers. Registry markup stays clean; the docs page frames it. */
const PREVIEWS = {
  measure: 'demo-measure',
  combobox: 'demo-combobox',
  fab: 'demo-fab-stage',
  frame: 'demo-frame',
  stage: 'demo-stage',
  overlay: 'demo-overlay',
};

/** Stand-in for a media path, so a docs demo never renders a broken image. */
const PLACEHOLDER_MEDIA =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360">' +
    '<rect width="640" height="360" fill="%23e9edf1"/>' +
    '<path d="M0 360 240 170l120 90 90-70 190 170z" fill="%23cdd5dd"/>' +
    '<circle cx="470" cy="96" r="40" fill="%23dbe2e8"/>' +
    '</svg>'
  ).replace(/%2523/g, '%23');

const REQUIRED = ['name', 'title', 'category', 'description', 'use', 'avoid'];
const OPTIONAL = ['requires', 'note', 'preview', 'variants'];

function fail(message) {
  throw new Error(`registry: ${message}`);
}

function parseItem(file) {
  const raw = fs.readFileSync(path.join(registryDir, file), 'utf8').replace(/\r\n/g, '\n');
  const match = raw.match(/^<!--\n([\s\S]*?)\n-->\n/);
  if (!match) fail(`${file} is missing its leading metadata comment.`);

  const meta = {};
  for (const line of match[1].split('\n')) {
    if (!line.trim()) continue;
    const at = line.indexOf(':');
    if (at === -1) fail(`${file} has a metadata line without a colon: ${line}`);
    const key = line.slice(0, at).trim();
    if (!REQUIRED.includes(key) && !OPTIONAL.includes(key)) {
      fail(`${file} has an unknown metadata key: ${key}`);
    }
    meta[key] = line.slice(at + 1).trim();
  }

  for (const key of REQUIRED) {
    if (!meta[key]) fail(`${file} is missing required metadata: ${key}`);
    if (/\bTODO\b/.test(meta[key])) fail(`${file} still has a TODO in ${key}.`);
  }
  if (meta.name !== path.basename(file, '.html')) {
    fail(`${file} declares name "${meta.name}", which does not match its filename.`);
  }
  if (!CATEGORIES.some(([id]) => id === meta.category)) {
    fail(`${file} has an unknown category: ${meta.category}`);
  }
  if (meta.preview && !PREVIEWS[meta.preview]) {
    fail(`${file} has an unknown preview wrapper: ${meta.preview}`);
  }

  meta.html = raw.slice(match[0].length).trim();
  if (!meta.html) fail(`${file} has no markup.`);
  meta.requires = meta.requires ? meta.requires.split(',').map((s) => s.trim()) : [];
  meta.variants = parseVariants(file, meta.variants);
  return meta;
}

/**
 * `variants: btn-lg = larger target; btn-gradient = accent fill`
 *
 * Several classes may share one description:
 * `mt-1 mt-2 mt-3 = top margin, on the space scale`
 *
 * Variants keep swappable classes discoverable without inflating every demo
 * into a specimen sheet. They are part of the API, so the audit counts a class
 * as covered when it appears here.
 */
function parseVariants(file, value) {
  if (!value) return [];
  return value.split(';').map((part) => {
    const at = part.indexOf('=');
    if (at === -1) fail(`${file} has a variant without an "=": ${part.trim()}`);
    const classes = part.slice(0, at).trim().split(/\s+/).filter(Boolean);
    const description = part.slice(at + 1).trim();
    if (!classes.length || !description) fail(`${file} has an incomplete variant: ${part.trim()}`);
    return { classes, description };
  });
}

/** Every class in every registry item must be defined in the framework. */
function assertClassesExist(items) {
  const css = fs.readFileSync(path.join(root, 'postrboard.css'), 'utf8');
  const defined = new Set();
  for (const m of css.matchAll(/\.(-?[A-Za-z_][\w-]*)/g)) defined.add(m[1]);

  const missing = new Map();
  const note = (cls, name) => {
    if (defined.has(cls)) return;
    if (!missing.has(cls)) missing.set(cls, new Set());
    missing.get(cls).add(name);
  };
  for (const item of items) {
    for (const attr of item.html.matchAll(/class="([^"]*)"/g)) {
      for (const cls of attr[1].split(/\s+/).filter(Boolean)) note(cls, item.name);
    }
    for (const variant of item.variants) {
      for (const cls of variant.classes) note(cls, item.name);
    }
  }
  if (missing.size) {
    const detail = [...missing]
      .map(([cls, where]) => `  .${cls} (${[...where].join(', ')})`)
      .join('\n');
    fail(`these classes are used in the registry but are not defined in postrboard.css:\n${detail}`);
  }
}

function assertRequiresResolve(items) {
  const names = new Set(items.map((item) => item.name));
  for (const item of items) {
    for (const dep of item.requires) {
      if (!names.has(dep)) fail(`${item.name} requires "${dep}", which is not a registry item.`);
    }
  }
}

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Prepares markup for the live docs preview. The code sample keeps the honest
 * original; only the rendered copy is rewritten, so ids stay unique on a page
 * that shows 70+ components at once and demo links do not navigate away.
 */
function toPreview(item) {
  const scoped = new Set();
  for (const m of item.html.matchAll(/\bid="([^"]+)"/g)) scoped.add(m[1]);

  let html = item.html;
  const rename = (value) => (scoped.has(value) ? `${item.name}-${value}` : value);

  html = html.replace(/\b(id|for|form|aria-controls|aria-labelledby|aria-describedby|list)="([^"]+)"/g,
    (all, attr, value) => {
      const next = value.split(/\s+/).map(rename).join(' ');
      return next === value ? all : `${attr}="${next}"`;
    });
  html = html.replace(/\bhref="#([^"]+)"/g,
    (all, value) => (scoped.has(value) ? `href="#${item.name}-${value}"` : all));
  html = html.replace(/\bname="([^"]+)"/g, (all, value) => `name="${item.name}-${value}"`);
  // Registry markup uses realistic paths. In the docs they would leave the page.
  html = html.replace(/\bhref="\/[^"]*"/g, 'href="#components"');
  // Likewise for media: the sample keeps the honest path, the demo shows a stand-in.
  html = html.replace(/\bsrc="\/[^"]*"/g, `src="${PLACEHOLDER_MEDIA}"`);

  // Force open states so docs show the component, not only the trigger.
  // The Markup tab keeps the honest closed/default source from item.html.
  html = html.replace(/\bclass="((?:[\w-]+\s+)*)modal((?:\s[\w-]+)*)"/g, (all, pre, post) => {
    if (/\bis-active\b/.test(pre + post)) return all;
    return `class="${pre}modal${post} is-active"`.replace(/\s+/g, ' ');
  });
  html = html.replace(/\bclass="dropdown-menu"/g, 'class="dropdown-menu is-open"');
  html = html.replace(/\bclass="popover-panel"/g, 'class="popover-panel is-open"');
  html = html.replace(/\bclass="hover-card-panel"/g, 'class="hover-card-panel is-open"');
  html = html.replace(/\bclass="tooltip"/g, 'class="tooltip is-open"');
  html = html.replace(
    /(<input\b[^>]*\bclass="drawer-toggle"[^>]*)(\/?>)/g,
    (all, head, tail) => (/\bchecked\b/.test(all) ? all : `${head} checked${tail}`)
  );
  html = html.replace(/<details class="accordion">/, '<details class="accordion" open>');
  html = html.replace(/<details class="faq-item">/, '<details class="faq-item" open>');

  return html;
}

function indent(block, pad) {
  return block
    .split('\n')
    .map((line) => (line.trim() ? pad + line : ''))
    .join('\n');
}

function renderDocs(items) {
  const out = [];
  for (const [id, label] of CATEGORIES) {
    const group = items.filter((item) => item.category === id);
    if (!group.length) continue;
    out.push(`        <h3 class="text-h2 component-category">${label}</h3>`);
    out.push('        <div class="component-list">');
    for (const item of group) {
      const preview = item.preview
        ? `<div class="${PREVIEWS[item.preview]}">\n${indent(toPreview(item), '  ')}\n</div>`
        : toPreview(item);
      out.push(`          <article class="component-row" id="c-${item.name}">`);
      out.push('            <div class="component-meta">');
      out.push(`              <h4 class="component-name">${item.name}</h4>`);
      out.push(`              <p class="component-desc">${item.description}</p>`);
      out.push('            </div>');
      const sw = `sw-${item.name}`;
      out.push('            <div class="component-demo">');
      out.push('              <div class="tabs demo-switch">');
      out.push(`                <input type="radio" name="${sw}" id="${sw}-preview" checked><label class="tab" for="${sw}-preview">Preview</label>`);
      out.push(`                <input class="demo-switch-markup" type="radio" name="${sw}" id="${sw}-markup"><label class="tab" for="${sw}-markup">Markup</label>`);
      out.push('              </div>');
      out.push('              <div class="demo-panel demo-panel-preview">');
      out.push(indent(preview, '                '));
      if (item.note) out.push(`                <p class="text-meta">${item.note}</p>`);
      out.push('              </div>');
      out.push('              <div class="demo-panel demo-panel-markup">');
      out.push(`                <pre class="code-sample"><code>${escapeHtml(item.html)}</code></pre>`);
      out.push('              </div>');
      out.push('            </div>');
      out.push('          </article>');
    }
    out.push('        </div>');
  }
  return out.join('\n');
}

function renderMarkdown(items) {
  const out = [
    '# Postrboard components',
    '',
    'Generated from `registry/`. Do not edit by hand; run `npm run build`.',
    '',
    'Copy the markup as written. The classes are the API. Variance belongs in the theme',
    'axes (`data-accent`, `data-surface`, `data-geometry`, `data-density`, `data-type`,',
    '`data-ambient`) and in which components you compose, not in reinvented markup.',
    '',
  ];
  for (const [id, label] of CATEGORIES) {
    const group = items.filter((item) => item.category === id);
    if (!group.length) continue;
    out.push(`## ${label}`, '');
    for (const item of group) {
      out.push(`### ${item.name}`, '');
      out.push(item.description, '');
      out.push(`- **Use:** ${item.use}`);
      out.push(`- **Avoid:** ${item.avoid}`);
      for (const v of item.variants) {
        out.push(`- **${v.classes.map((c) => `\`.${c}\``).join(' ')}:** ${v.description}`);
      }
      if (item.requires.length) out.push(`- **Requires:** ${item.requires.join(', ')}`);
      if (item.note) out.push(`- **Note:** ${item.note}`);
      out.push('', '```html', item.html, '```', '');
    }
  }
  return out.join('\n');
}

function build(options = {}) {
  const write = options.write !== false;
  const files = fs.readdirSync(registryDir).filter((f) => f.endsWith('.html')).sort();
  if (!files.length) fail('no component files found.');

  const items = files.map(parseItem);
  assertClassesExist(items);
  assertRequiresResolve(items);

  const index = {
    name: 'postrboard',
    version: require(path.join(root, 'package.json')).version,
    docs: 'https://burkeholland.github.io/postrboard-design',
    components: items.map((item) => ({
      name: item.name,
      title: item.title,
      category: item.category,
      description: item.description,
      use: item.use,
      avoid: item.avoid,
      variants: item.variants,
      requires: item.requires,
      ...(item.note ? { note: item.note } : {}),
      html: item.html,
    })),
  };

  const json = JSON.stringify(index, null, 2) + '\n';
  const markdown = renderMarkdown(items);

  if (write) {
    fs.writeFileSync(path.join(registryDir, 'index.json'), json);
    fs.writeFileSync(path.join(root, 'components.md'), markdown);
  }

  return { items, json, markdown, docs: renderDocs(items) };
}

module.exports = { build, CATEGORIES };

if (require.main === module) {
  const { items } = build();
  console.log(`registry: ${items.length} components`);
}
