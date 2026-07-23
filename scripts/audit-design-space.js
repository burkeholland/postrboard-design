const fs = require('fs');
const path = require('path');

const css = fs.readFileSync(path.join(__dirname, '..', 'postrboard.css'), 'utf8');
const root = css.match(/:root\s*\{([\s\S]*?)\n\}/);
const dark = css.match(/\[data-mode="dark"\]\s*\{([\s\S]*?)\n\}/);

if (!root || !dark) {
  throw new Error('Could not find the root and dark-mode token blocks.');
}

function token(block, name) {
  const match = block[1].match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{6})\\b`));
  if (!match) throw new Error(`Missing hex token --${name}.`);
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

function assertContrast(label, foreground, background) {
  const ratio = contrast(foreground, background);
  if (ratio < 4.5) {
    throw new Error(`${label} contrast is ${ratio.toFixed(2)}:1; expected at least 4.5:1.`);
  }
}

const accents = ['coral', 'azure', 'sage', 'violet', 'amber', 'slate'];

for (const accent of accents) {
  assertContrast(
    `${accent} surface`,
    token(root, 'on-accent'),
    token(root, `${accent}-surface`)
  );
  assertContrast(
    `${accent} light text`,
    token(root, `${accent}-text`),
    '#ffffff'
  );
  assertContrast(
    `${accent} dark text`,
    token(dark, `${accent}-text`),
    '#0b0f14'
  );
}

const requiredApis = [
  ...accents.map(accent => `[data-accent="${accent}"]`),
  '[data-surface="flat"]',
  '[data-surface="outline"]',
  '[data-surface="raised"]',
  '[data-geometry="compact"]',
  '[data-geometry="sharp"]',
  '[data-density="compact"]',
  '[data-density="roomy"]',
  '[data-type="mono-lede"]',
  '[data-type="editorial"]',
  '[data-ambient="grid"]',
  '.grid-asymmetric',
  '.grid-asymmetric-reverse',
  '.grid-holy-grail',
  '.grid-masonry',
  '.grid-stack-rail',
  '.grid-centered',
  '.navbar-solid',
  '.navbar-bordered',
  '.navbar-minimal'
];

for (const api of requiredApis) {
  if (!css.includes(api)) throw new Error(`Missing design-space API: ${api}`);
}

const componentCss = css.slice(css.indexOf('3. RESET & BASE'));
const nonSemanticCoral = componentCss
  .split('\n')
  .filter(line => line.includes('var(--coral'))
  .filter(line => !line.includes('.badge-coral'));

if (nonSemanticCoral.length) {
  throw new Error(`Components still hardcode coral:\n${nonSemanticCoral.join('\n')}`);
}

const scopedAccentRoles = css.match(/\[data-accent\]\s*\{([^}]*)\}/);
for (const role of ['--focus-ring', '--accent-shadow', '--accent-shadow-hover']) {
  if (!scopedAccentRoles || !scopedAccentRoles[1].includes(role)) {
    throw new Error(`Scoped accents do not re-derive ${role}.`);
  }
}

if (!css.includes('padding: calc(var(--space-6) * var(--density-factor))')) {
  throw new Error('Cards do not derive padding from the nearest density scope.');
}

console.log(`Design-space audit passed for ${accents.length} accent palettes and ${requiredApis.length} APIs.`);
