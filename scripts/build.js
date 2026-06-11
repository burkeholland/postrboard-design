const CleanCSS = require('clean-css');
const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, '..', 'postrboard.css'), 'utf8');

const result = new CleanCSS({
  level: 2,
  sourceMap: true,
  sourceMapInlineSources: true
}).minify(input);

if (result.errors.length) {
  console.error('Build errors:', result.errors);
  process.exit(1);
}

fs.writeFileSync(
  path.join(__dirname, '..', 'postrboard.min.css'),
  result.styles
);

fs.writeFileSync(
  path.join(__dirname, '..', 'postrboard.min.css.map'),
  result.sourceMap.toString()
);

const savings = ((1 - result.stats.minifiedSize / result.stats.originalSize) * 100).toFixed(1);
console.log(`✓ postrboard.min.css — ${(result.stats.minifiedSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
