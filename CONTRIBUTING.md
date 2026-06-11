# Contributing to Postrboard CSS

Thanks for your interest in contributing! Here's how to get involved.

## Getting started

```bash
git clone https://github.com/burkeholland/postrboard-design.git
cd postrboard-design
npm install
npm run dev
```

## Guidelines

- **One class, one job.** Avoid multi-purpose classes.
- **Tokens first.** Use CSS custom properties for every value that appears more than once.
- **Accessibility.** Every interactive component must support keyboard navigation and have appropriate ARIA attributes.
- **Dark mode.** Any new component must work in both light and dark modes.
- **No JavaScript.** Postrboard CSS is a pure CSS framework.

## Submitting changes

1. Fork the repository and create a branch from `main`.
2. Make your changes in `postrboard.css`.
3. Update `design-system.html` to showcase new or modified components.
4. Run `npm run build` to generate the minified version.
5. Open a pull request with a clear description of what you changed and why.

## Reporting issues

Use [GitHub Issues](https://github.com/burkeholland/postrboard-design/issues) for bug reports, feature requests, and accessibility concerns.

## Code of conduct

Be respectful. Be constructive. Be kind.
