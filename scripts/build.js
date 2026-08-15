const CleanCSS = require('clean-css');
const fs = require('fs');
const path = require('path');

function compileCss(input) {
  const normalizedInput = input.replace(/\r\n?/g, '\n');
  const result = new CleanCSS({
    level: 2,
    sourceMap: true,
    sourceMapInlineSources: true
  }).minify({
    'postrboard.css': {
      styles: normalizedInput
    }
  });

  if (result.errors.length) {
    throw new Error(`Build errors: ${result.errors.join('; ')}`);
  }

  return {
    minified: `${result.styles}\n/*# sourceMappingURL=postrboard.min.css.map */\n`,
    sourceMap: result.sourceMap.toString(),
    stats: result.stats
  };
}

function replaceMarkedBlock(raw, marker, body, nl) {
  const start = `        <!-- registry:${marker}:start -->`;
  const end = `        <!-- registry:${marker}:end -->`;
  const from = raw.indexOf(start);
  const to = raw.indexOf(end);
  if (from === -1 || to === -1 || to < from) {
    throw new Error(`index.html is missing the registry:${marker} markers.`);
  }
  const block = body.split('\n').join(nl);
  return `${raw.slice(0, from)}${start}${nl}${block}${nl}${raw.slice(to)}`;
}

function renderDocs() {
  const { items, docs, nav } = require('./build-registry').build();
  const file = path.join(__dirname, '..', 'index.html');
  const raw = fs.readFileSync(file, 'utf8');
  const nl = raw.includes('\r\n') ? '\r\n' : '\n';
  let next = replaceMarkedBlock(raw, 'components', docs, nl);
  next = replaceMarkedBlock(next, 'nav', nav, nl);
  fs.writeFileSync(file, next);
  return items.length;
}

function build() {
  const input = fs.readFileSync(path.join(__dirname, '..', 'postrboard.css'), 'utf8');
  const output = compileCss(input);

  fs.writeFileSync(
    path.join(__dirname, '..', 'postrboard.min.css'),
    output.minified
  );

  fs.writeFileSync(
    path.join(__dirname, '..', 'postrboard.min.css.map'),
    output.sourceMap
  );

  const savings = ((1 - output.stats.minifiedSize / output.stats.originalSize) * 100).toFixed(1);
  console.log(`Built postrboard.min.css: ${(output.stats.minifiedSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
  console.log(`Built registry: ${renderDocs()} components`);
}

if (require.main === module) {
  try {
    build();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = { compileCss };
