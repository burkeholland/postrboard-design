const fs = require('fs');
const path = require('path');
const { compileCss } = require('./build');
const { build: buildRegistry } = require('./build-registry');

const rootDir = path.join(__dirname, '..');
const css = fs.readFileSync(path.join(rootDir, 'postrboard.css'), 'utf8');
const docs = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
const read = file => fs.readFileSync(path.join(rootDir, file), 'utf8');

function fail(message) {
  throw new Error(message);
}

function block(source, selector) {
  const withoutComments = source.replace(/\/\*[\s\S]*?\*\//g, '');
  const rules = /([^{}]+)\{([^{}]*)\}/g;
  let match;

  while ((match = rules.exec(withoutComments)) !== null) {
    const selectors = match[1].split(',').map(value => value.trim());
    if (selectors.includes(selector) || match[1].trim() === selector) return match[2];
  }

  fail(`Missing block: ${selector}`);
}

function hexToken(sourceBlock, name) {
  const match = sourceBlock.match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{6})\\b`));
  if (!match) fail(`Missing hex token --${name}.`);
  return match[1];
}

function channel(value) {
  const normalized = value / 255;
  return normalized <= 0.04045
    ? normalized / 12.92
    : ((normalized + 0.055) / 1.055) ** 2.4;
}

function luminance(hex) {
  const channels = hex
    .slice(1)
    .match(/.{2}/g)
    .map(value => channel(parseInt(value, 16)));
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrast(foreground, background) {
  const lighter = Math.max(luminance(foreground), luminance(background));
  const darker = Math.min(luminance(foreground), luminance(background));
  return (lighter + 0.05) / (darker + 0.05);
}

function assertContrast(label, foreground, background, minimum = 4.5) {
  const ratio = contrast(foreground, background);
  if (ratio < minimum) {
    fail(`${label} contrast is ${ratio.toFixed(2)}:1; expected at least ${minimum}:1.`);
  }
}

function assertIncludes(source, value, label = value) {
  if (!source.includes(value)) fail(`Missing ${label}.`);
}

function declarationValue(sourceBlock, property) {
  const escaped = property.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = sourceBlock.match(new RegExp(`(?:^|;)\\s*${escaped}:\\s*([^;]+)`));
  if (!match) fail(`Missing declaration ${property}.`);
  return match[1].trim();
}

function selectorClasses(source) {
  const withoutComments = source.replace(/\/\*[\s\S]*?\*\//g, '');
  const names = new Set();
  const rules = /(?:^|})\s*([^@{}][^{}]*)\{/gm;
  let rule;

  while ((rule = rules.exec(withoutComments)) !== null) {
    const matches = rule[1].matchAll(/\.([a-zA-Z][\w-]*)/g);
    for (const match of matches) names.add(match[1]);
  }

  return names;
}

const rootTokens = block(css, ':root');
const lightTokens = block(css, '[data-mode="light"]');
const darkTokens = block(css, '[data-mode="dark"]');
const accents = ['coral', 'azure', 'sage', 'violet', 'amber', 'slate'];

for (const accent of accents) {
  assertContrast(
    `${accent} surface`,
    hexToken(rootTokens, 'on-accent'),
    hexToken(rootTokens, `${accent}-surface`)
  );
  // The vivid hue is what makes the palette recognisable, so it is painted on
  // non-text fills (checkbox, radio, switch, progress). Any glyph on top of it
  // must use the matching ink, not --on-accent, or it repeats the 2.5:1 tick
  // this pairing was introduced to fix. A tick is a graphical object, so WCAG
  // 1.4.11 asks 3:1; hold 4:1 for margin. Demanding the 4.5:1 text ratio would
  // force pure black on violet, which only clears it at 4.96:1.
  assertContrast(
    `${accent} ink on vivid`,
    hexToken(rootTokens, `${accent}-ink`),
    hexToken(rootTokens, accent),
    4
  );
  assertContrast(
    `${accent} light text`,
    hexToken(lightTokens, `${accent}-text`),
    hexToken(lightTokens, 'surface')
  );
  assertContrast(
    `${accent} dark text`,
    hexToken(darkTokens, `${accent}-text`),
    hexToken(darkTokens, 'bg')
  );
  // A vivid fill is bounded by the darker surface tone, so the control edge
  // still separates from the page even though the fill itself is light.
  assertContrast(
    `${accent} vivid fill boundary`,
    hexToken(rootTokens, `${accent}-surface`),
    hexToken(lightTokens, 'surface'),
    3
  );
}

for (const [name, mode] of [['light', lightTokens], ['dark', darkTokens]]) {
  const background = hexToken(mode, 'bg');
  const surface = hexToken(mode, 'surface');
  for (const role of ['text', 'text-muted', 'text-meta']) {
    assertContrast(`${name} ${role} on canvas`, hexToken(mode, role), background);
    assertContrast(`${name} ${role} on surface`, hexToken(mode, role), surface);
  }
  assertContrast(`${name} control boundary on canvas`, hexToken(mode, 'input-border'), background, 3);
  assertContrast(`${name} control boundary on surface`, hexToken(mode, 'input-border'), surface, 3);
  assertContrast(`${name} focus on canvas`, hexToken(mode, 'focus-color'), background, 3);
  assertContrast(`${name} focus on surface`, hexToken(mode, 'focus-color'), surface, 3);
}

const requiredApis = [
  ...accents.map(accent => `[data-accent="${accent}"]`),
  '[data-surface="flat"]',
  '[data-surface="outline"]',
  '[data-surface="raised"]',
  '[data-surface="glass"]',
  '[data-geometry="compact"]',
  '[data-geometry="sharp"]',
  '[data-geometry="soft"]',
  '[data-density="compact"]',
  '[data-density="roomy"]',
  '[data-type="mono-lede"]',
  '[data-type="editorial"]',
  '[data-ambient="grid"]',
  '[data-ambient="gradient"]',
  '.page-header',
  '.section-header',
  '.panel',
  '.panel-header',
  '.panel-content',
  '.panel-footer',
  '.stat-strip',
  '.stat-item',
  '.badge-status',
  '.description-list',
  '.grid-asymmetric',
  '.grid-asymmetric-reverse',
  '.grid-holy-grail',
  '.grid-masonry',
  '.grid-stack-rail',
  '.grid-centered',
  '.navbar-glass',
  '.navbar-solid',
  '.navbar-bordered',
  '.navbar-minimal'
];

for (const api of requiredApis) assertIncludes(css, api, `design-system API ${api}`);

const defaultSurface = block(css, ':root');
const compactGeometry = block(css, '[data-geometry="compact"]');
const neutralType = block(css, '[data-type="neutral"]');
assertIncludes(defaultSurface, '--surface-1-blur: none', 'flat default surface');
assertIncludes(defaultSurface, '--radius-surface: var(--radius-compact)', 'compact default geometry');
assertIncludes(defaultSurface, '--radius-field: var(--radius-compact)', 'smooth default field geometry, matched to compact surface');
assertIncludes(defaultSurface, '--display-weight: 600', 'neutral default display weight');
assertIncludes(defaultSurface, '--display-tracking: -0.015em', 'neutral default display tracking');
assertIncludes(defaultSurface, '--display-leading: 1.12', 'neutral default display leading');
assertIncludes(defaultSurface, '--ambient-image: none', 'quiet default ambience');
for (const property of ['--radius-surface', '--radius-control', '--radius-field']) {
  if (declarationValue(defaultSurface, property) !== declarationValue(compactGeometry, property)) {
    fail(`Root ${property} no longer matches the compact geometry default.`);
  }
}
for (const property of ['--display-weight', '--display-tracking', '--display-leading']) {
  if (declarationValue(defaultSurface, property) !== declarationValue(neutralType, property)) {
    fail(`Root ${property} no longer matches the neutral type default.`);
  }
}
if (defaultSurface.includes('--surface-1-bg:') || defaultSurface.includes('--surface-1-border:')) {
  fail('Root surface roles capture light-mode colors instead of resolving scoped modes.');
}

if (/transition:\s*all\b/.test(css)) fail('Framework contains a mechanical transition: all declaration.');
if (css.includes('0.01ms')) fail('Reduced-motion support uses the destructive 0.01ms global kill.');
for (const match of css.matchAll(/letter-spacing:\s*(-[\d.]+)em/g)) {
  if (Number(match[1]) < -0.04) fail(`Letter-spacing ${match[1]}em exceeds the -0.04em craft floor.`);
}

const bodyBlock = block(css, 'body');
assertIncludes(bodyBlock, 'background-image: var(--ambient-image)', 'token-driven body ambience');
if (darkTokens.includes('radial-gradient')) fail('Dark mode still contains a decorative radial halo.');

const gradientText = block(css, '.gradient-text');
if (gradientText.includes('gradient(') || gradientText.includes('background-clip')) {
  fail('.gradient-text still renders gradient text.');
}

const gradientButton = block(css, '.btn-gradient');
if (gradientButton.includes('gradient(')) fail('.btn-gradient still renders a gradient button.');

const featureIcon = block(css, '.feature-icon');
if (/\bbackground(?:-color)?:\s*(?!transparent\b)/.test(featureIcon)) {
  fail('.feature-icon still renders the stock icon-tile pattern.');
}

const focusBlock = block(css, ':focus-visible');
assertIncludes(focusBlock, 'outline: 2px solid var(--focus-color)', 'solid focus outline');
assertIncludes(css, '@media (forced-colors: active)', 'forced-colors support');
assertIncludes(css, 'outline: 2px solid Highlight', 'forced-colors focus outline');
assertIncludes(block(css, '.panel'), 'var(--surface-1-bg, var(--surface))', 'scoped panel surface fallback');
assertIncludes(block(css, '.panel'), 'var(--surface-1-border, var(--border))', 'scoped panel border fallback');
for (const mode of [lightTokens, darkTokens]) {
  assertIncludes(mode, '--focus-ring:', 'scoped focus ring');
  assertIncludes(mode, '--success-text:', 'scoped success text');
  assertIncludes(mode, '--success-tint:', 'scoped success tint');
}

for (const selector of [
  '.panel', '.combobox-list', '.dropdown-menu', '.command-palette',
  '.toast', '.popover-panel', '.modal-card', '.terminal'
]) {
  assertIncludes(block(css, selector), 'var(--radius-surface)', `axis-aware geometry in ${selector}`);
}

const typeRules = [
  block(css, '.t-display, .text-display'),
  block(css, '.t-h1, .text-h1'),
  block(css, '.t-h2, .text-h2'),
  block(css, '.t-card, .text-card')
];
for (const rule of typeRules) {
  assertIncludes(rule, 'var(--display-family)', 'display-family typography routing');
}
assertIncludes(block(css, '[data-type="editorial"]'), 'var(--serif)', 'editorial serif voice');

const canonicalFontUrl = 'family=IBM+Plex+Mono';
const fontDocuments = [
  'README.md',
  'skill/postrboard/SKILL.md',
  'index.html'
];
for (const file of fontDocuments) {
  const content = read(file);
  assertIncludes(content, canonicalFontUrl, `canonical font URL in ${file}`);
  for (const retiredFont of ['Inter:wght', 'JetBrains+Mono', 'Space+Mono']) {
    if (content.includes(retiredFont)) fail(`${file} still loads retired font ${retiredFont}.`);
  }
}

assertIncludes(docs, '<link rel="stylesheet" href="postrboard.css">', 'external framework stylesheet in docs');
if (docs.includes('--coral: #ff7f50')) fail('index.html still duplicates framework token CSS.');
// Human docs page: theme lab, tokens, live components, layout guidance.
// Agent material (AI design tells, full class inventory) lives in the skill
// and components.md / registry, not on this page.
for (const section of ['direction', 'foundations', 'components', 'patterns']) {
  assertIncludes(docs, `id="${section}"`, `docs section #${section}`);
}
if (docs.includes('id="guardrails"') || docs.includes('id="api"')) {
  fail('Agent-only sections (AI design tells, class index) still appear on the human docs page.');
}

// These guardrails used to run over the dashboard examples. The examples are gone,
// so they now run over the docs page, which is the only rendered surface left.
for (const match of docs.matchAll(/font-size:\s*([\d.]+)px/g)) {
  if (Number(match[1]) < 11) fail(`Docs text uses an unreadable ${match[1]}px font size.`);
}
const docsClassNames = [...docs.matchAll(/class="([^"]+)"/g)]
  .flatMap(match => match[1].split(/\s+/))
  .filter(Boolean);
if (docsClassNames.includes('eyebrow')) fail('index.html still uses an eyebrow heading label.');
if (docsClassNames.some(name => name === 'metric' || name.startsWith('metric-'))) {
  fail('index.html still uses the retired metric vocabulary.');
}
if (docsClassNames.some(name => name === 'status' || name.startsWith('status-'))) {
  fail('index.html still uses the retired status vocabulary.');
}
if (docs.includes('class="nav-link active"')) fail('index.html uses a visual class instead of aria-current.');
for (const icon of docs.matchAll(/<svg\b[^>]*class="[^"]*\bicon\b[^"]*"[^>]*>/g)) {
  if (!icon[0].includes('aria-hidden=') && !icon[0].includes('role="img"')) {
    fail('index.html has an icon without an explicit accessibility role.');
  }
}
assertIncludes(docs, 'class="skip-link"', 'skip link in index.html');
assertIncludes(docs, 'id="main"', 'main target in index.html');
for (const iframe of docs.matchAll(/<iframe\b[^>]*>/g)) {
  if (!iframe[0].includes('loading="lazy"')) fail('index.html embeds an iframe that is not lazy-loaded.');
}
if (fs.existsSync(path.join(rootDir, 'examples'))) {
  fail('The examples directory was removed; delete it or restore its audit coverage.');
}

const documentedClasses = selectorClasses(css);

// Compatibility aliases and page furniture. Both have their own checks below,
// so a component demo would only be noise.
const docsOnlyClasses = new Set([
  'skip-link', 'version-badge',
  't-display', 't-h1', 't-h2', 't-card', 't-body', 't-meta', 't-mono',
  'nav', 'nav-glass', 'nav-solid', 'nav-bordered', 'nav-minimal', 'nav-logo', 'logo'
]);
const registryIndex = JSON.parse(read('registry/index.json'));
const registryClasses = new Set();
for (const component of registryIndex.components) {
  for (const attribute of component.html.matchAll(/class="([^"]*)"/g)) {
    for (const name of attribute[1].split(/\s+/).filter(Boolean)) registryClasses.add(name);
  }
  for (const variant of component.variants) {
    for (const name of variant.classes) registryClasses.add(name);
  }
}

const missingFromDocs = [...documentedClasses].filter(name => {
  if (docsOnlyClasses.has(name)) return false;
  return !registryClasses.has(name);
});

if (missingFromDocs.length) {
  fail(
    'Public classes with no registry coverage. Add them to a registry component\'s ' +
    `markup or its variants: ${missingFromDocs.sort().join(', ')}`
  );
}

// Legacy aliases are for people upgrading, not for the showcase page.
const readme = read('README.md');
const legacyHeading = readme.indexOf('### Legacy compatibility');
if (legacyHeading < 0) fail('README is missing the Legacy compatibility section.');
const legacyDocs = readme.slice(legacyHeading);
const legacyAliases = [
  '.grid-two', '.stats-row', '.t-display', '.t-h1', '.t-h2', '.t-card',
  '.t-body', '.t-meta', '.t-mono', '.nav', '.nav-glass', '.nav-solid',
  '.nav-bordered', '.nav-minimal', '.nav-logo', '.logo'
];
for (const alias of legacyAliases) {
  assertIncludes(legacyDocs, alias, `legacy alias ${alias}`);
}
assertIncludes(legacyDocs, 'data-ambient="flat"', 'legacy flat ambience alias');
// Canonical theme table must not list the flat ambience alias as a current value.
const themeTableMatch = readme.match(/\| `data-ambient` \|[^|\n]+\|/);
if (!themeTableMatch) fail('README is missing the data-ambient theme row.');
if (themeTableMatch[0].includes('`flat`')) {
  fail('Legacy alias data-ambient="flat" is still presented as canonical in README.');
}

const packageJson = JSON.parse(read('package.json'));
const packageLock = JSON.parse(read('package-lock.json'));
if (packageJson.version !== '2.0.0') fail('package.json version must be 2.0.0.');
if (packageLock.version !== '2.0.0' || packageLock.packages[''].version !== '2.0.0') {
  fail('package-lock.json version must be 2.0.0.');
}
assertIncludes(css, 'Postrboard CSS v2.0.0', 'CSS version header');
if (!packageJson.files.includes('postrboard.min.css.map')) fail('The package excludes its generated source map.');
if (!packageJson.files.includes('skill')) fail('The package excludes the Postrboard agent skill.');
if (!packageJson.files.includes('registry')) fail('The package excludes the component registry.');
if (!packageJson.files.includes('components.md')) fail('The package excludes the flat component reference.');
assertIncludes(read('CHANGELOG.md'), '## [2.0.0]', '2.0.0 changelog entry');

for (const file of ['.gitignore', '.npmignore']) {
  if (read(file).split(/\r?\n/).includes('*.map')) fail(`${file} excludes the published source map.`);
}
for (const rule of ['*.css text eol=lf', '*.js text eol=lf']) {
  assertIncludes(read('.gitattributes'), rule, `release line-ending rule ${rule}`);
}

const compiled = compileCss(css);
const crlfCompiled = compileCss(css.replace(/\r?\n/g, '\r\n'));
if (compiled.minified !== crlfCompiled.minified || compiled.sourceMap !== crlfCompiled.sourceMap) {
  fail('Generated release artifacts depend on source line endings.');
}
const sourceMap = JSON.parse(compiled.sourceMap);
if (sourceMap.sources.length !== 1 || sourceMap.sources[0] !== 'postrboard.css') {
  fail('The generated source map does not identify postrboard.css.');
}
for (const [file, expected] of [
  ['postrboard.min.css', compiled.minified],
  ['postrboard.min.css.map', compiled.sourceMap]
]) {
  const outputPath = path.join(rootDir, file);
  if (!fs.existsSync(outputPath)) fail(`Missing generated release artifact ${file}.`);
  if (fs.readFileSync(outputPath, 'utf8') !== expected) {
    fail(`${file} is stale. Run npm run build and commit the generated artifact.`);
  }
}

// The registry is the source of truth. index.html, components.md and the JSON
// index are generated from it; drift is how documentation rots.
const regenerated = buildRegistry({ write: false });
if (regenerated.json !== read('registry/index.json')) {
  fail('registry/index.json is stale. Run npm run build and commit the result.');
}
if (regenerated.markdown !== read('components.md')) {
  fail('components.md is stale. Run npm run build and commit the result.');
}
const generatedStart = docs.indexOf('<!-- registry:components:start -->');
const generatedEnd = docs.indexOf('<!-- registry:components:end -->');
if (generatedStart < 0 || generatedEnd < 0) fail('index.html lost its registry:components markers.');
const generatedBlock = docs.slice(generatedStart, generatedEnd).replace(/\r\n/g, '\n');
if (generatedBlock.trimEnd() !== `<!-- registry:components:start -->\n${regenerated.docs}`) {
  fail('The components section of index.html is stale. Run npm run build and commit the result.');
}
if (docs.slice(generatedEnd).includes('class="component-row"')) {
  fail('A component row was hand-written outside the generated block. Add it to registry/ instead.');
}

const skill = read('skill/postrboard/SKILL.md');
if (skill.split(/\r?\n/).length > 220) fail('The Postrboard skill exceeds its 220-line simplicity budget.');
for (const step of ['### 1. Ground', '### 2. Map', '### 3. Decide', '### 4. Build', '### 5. Verify']) {
  assertIncludes(skill, step, `skill protocol step ${step}`);
}
assertIncludes(skill, 'Use native Postrboard components before custom equivalents', 'native-component gate in skill');
assertIncludes(skill, '## AI design tells', 'AI design tells live in the agent skill');
if (/\|\s*Ambience\s*\|[^\n]*`flat`/.test(skill) || /\|\s*Ambience\s*\|[^\n]*`flat`/.test(readme)) {
  fail('The legacy flat ambience alias is still presented as canonical.');
}

console.log(
  `Design-system audit passed: ${accents.length} accents, ${requiredApis.length} APIs, ` +
  `${[...documentedClasses].filter(name => registryClasses.has(name)).length} classes ` +
  `in ${registryIndex.components.length} registry components.`
);
