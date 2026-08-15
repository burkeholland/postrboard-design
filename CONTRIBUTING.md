# Contributing to Postrboard CSS

Thank you for contributing.

## Getting started

```bash
git clone https://github.com/burkeholland/postrboard-design.git
cd postrboard-design
npm install
npm run dev
```

## Guidelines

- **Native API first.** Extend an existing component family before you add a competing name for the same job.
- **One class, one job.** Avoid multi-purpose classes.
- **Tokens first.** Use CSS custom properties for repeated values and all visual roles.
- **Quiet defaults.** Depth, glass, gradients, and motion must have a functional or content-based reason.
- **Accessibility.** Include semantic HTML, visible focus, forced-colors behavior, sufficient contrast, and the relevant states.
- **Complete behavior.** Postrboard has no JavaScript. Document the application behavior that an interactive CSS shell still needs.
- **Mode and range.** New parts must work in light and dark modes, with every surface, geometry, and density axis.
- **No invented proof.** Examples must use honest demonstration data and must not invent customers, claims, or testimonials.

## Submitting changes

1. Fork the repository and create a branch from `main`.
2. Make your changes in `postrboard.css`.
3. Update `index.html` to showcase new or modified components.
4. Update `README.md`, `CHANGELOG.md`, and the Postrboard skill when the public contract changes.
5. Run `npm run build` to generate and verify the release outputs.
6. Run `npm pack --dry-run` to inspect the published package contents.
7. Open a pull request with a clear description of what you changed and why.

## Reporting issues

Use [GitHub Issues](https://github.com/burkeholland/postrboard-design/issues) for bug reports, feature requests, and accessibility concerns.

## Code of conduct

Be respectful. Be constructive. Be kind.
