---
id: technical-style-guide
title: Technical Style Guide
sidebar_label: Technical Style Guide
---

# Technical Style Guide

This guide defines the technical standards, conventions, and deployment assumptions for the Literacy for Kids ecosystem.

---

## Static-Site Architecture

Every site in the ecosystem is a **static Docusaurus v3 site deployed to GitHub Pages**. No server-side rendering, no database, no user accounts, no login, no analytics.

This is a deliberate choice:

- Zero infrastructure cost
- No student data to protect
- Anyone can fork and self-host
- GitHub Pages provides free, reliable hosting for open-source projects

Do not introduce server-side code, edge functions, or backend services without an explicit discussion.

---

## Repository Layout

**Hub** (`literacy_for_kids`): Docusaurus at repo root

```
literacy_for_kids/
  docs/             ← hub documentation (Markdown)
  src/              ← React pages and components
  static/           ← static assets (img/)
  docusaurus.config.js
  sidebars.js
  package.json
  .github/workflows/
```

**Curriculum repos** (`{name}_literacy_for_kids`): Docusaurus in `/website`

```
{curriculum}_literacy_for_kids/
  website/
    docs/           ← lesson content (Markdown)
    src/            ← pages and components
    static/         ← static assets
    docusaurus.config.js
    sidebars.js
    package.json
  .github/workflows/
  README.md
  LICENSE-CODE
  LICENSE-CONTENT
```

**Theme package** (`literacy_site_template`): npm package only, no Docusaurus site

```
literacy_site_template/
  src/
    index.js              ← Docusaurus plugin entry
    css/custom.css        ← shared CSS
    data/ecosystemLinks.js  ← single source of truth for all curriculum URLs
    theme/                ← shared React components
  package.json
```

---

## GitHub Pages Deployment

### URL pattern

Each site is served from its own custom (sub)domain:

```
https://{subdomain}.literacy-for-kids.com/
```

The hub uses `https://www.literacy-for-kids.com/`; each curriculum uses its topic
subdomain (e.g. `https://computer.literacy-for-kids.com/`).

### Required Docusaurus config

```js
url: 'https://{subdomain}.literacy-for-kids.com',
baseUrl: '/',                // sites are served from the domain root
trailingSlash: true,         // required for GitHub Pages static file routing
```

### Why `trailingSlash: true`

GitHub Pages serves static files. Without trailing slashes, navigating to `/docs/intro` returns a 404 because GitHub Pages looks for `docs/intro.html`. With `trailingSlash: true`, Docusaurus generates `docs/intro/index.html`, which GitHub Pages serves correctly at `/docs/intro/`.

### Deployment workflow

All sites deploy via GitHub Actions on push to `main`:

1. `actions/configure-pages` — initialize Pages environment
2. `npm ci` — install from lockfile
3. `npm run build` — Docusaurus production build
4. `npm run validate:build` (if present) — validate build output
5. `actions/upload-pages-artifact` (path: `build/` or `./website/build/`)
6. `actions/deploy-pages`

GitHub Pages source must be set to **GitHub Actions** in repository Settings › Pages.

---

## Base Path Rules

Every asset reference and internal link in the built output must use the base path. Docusaurus handles this automatically when `baseUrl` is set correctly. Do not hardcode paths.

**Correct:**
```js
// In docusaurus.config.js
baseUrl: '/decision_literacy_for_kids/',
```

**Incorrect:**
```js
baseUrl: '/',          // root only — breaks project page deployment
baseUrl: '/docs/',     // wrong path
baseUrl: '/decision-literacy/', // wrong separator
```

The `validate:build` script checks for root-relative paths that bypass the base path.

---

## Package Manager

Use **npm** with a lockfile (`package-lock.json`). Do not use yarn or pnpm unless a repo already uses them.

In CI, always use:

```bash
npm ci          # for curriculum repos
npm ci --legacy-peer-deps  # for the hub (React 19 + Docusaurus peer dep constraint)
```

---

## Node Version

Node 20 (LTS). Specified in:
- `package.json` `engines.node`
- GitHub Actions `actions/setup-node` with `node-version: 20`

---

## Shared Theme Package

The `literacy-site-theme` package (from `literacy_site_template`) is the single source of truth for:

- All curriculum URLs and metadata (`src/data/ecosystemLinks.js`)
- Shared CSS custom properties (`src/css/custom.css`)
- Shared navigation and footer components

**When adding a new curriculum:** Update `ecosystemLinks.js` in `literacy_site_template`, bump the version, then update the `literacy-site-theme` dependency in every curriculum repo.

**When a curriculum URL changes:** Same process — update `ecosystemLinks.js`, bump version, update all repos.

---

## Dependencies

Keep the dependency list minimal. The core dependencies are:

- `@docusaurus/core` and `@docusaurus/preset-classic` — the Docusaurus framework
- `react` and `react-dom` — React
- `literacy-site-theme` — the shared theme package

Do not add:

- Analytics (Google Analytics, Plausible, etc.)
- Login or auth packages
- User data collection
- Heavyweight UI frameworks (Material UI, Tailwind, etc.) — use the existing Docusaurus Infima CSS

For tooling, keep linting/formatting lightweight. A `.editorconfig` file is sufficient for cross-editor consistency. Do not add ESLint or Prettier unless the repo already uses them.

---

## Build Validation

Every repo should have `npm run validate:build` that checks the build output before deployment. See `scripts/validate-build.mjs` in the hub repo for the canonical implementation. Checks include:

- Build directory and `index.html` exist
- All referenced assets exist on disk
- No root-relative paths that bypass the base path
- No source-directory or localhost references
- `404.html` exists for SPA fallback

---

## Formatting and Style

`.editorconfig` applies across all repos:

- 2-space indentation for JS, JSON, YAML, Markdown
- LF line endings
- UTF-8 encoding
- Trim trailing whitespace
- Final newline

JavaScript files use ES modules (`import`/`export`) for Docusaurus site code. The shared theme package uses CommonJS (`require`/`module.exports`) for compatibility with the `createRequire` pattern in Docusaurus configs.

---

## Accessibility Technical Requirements

- HTML root element must have `lang="en"` (Docusaurus sets this automatically)
- All images need alt text
- Interactive elements must be keyboard-accessible
- Navigation landmarks (`<nav>`, `<main>`, `<footer>`) must be present (Docusaurus provides these via Layout)
- Do not use `tabIndex > 0`

See the [Accessibility Notes](./accessibility-notes.md) doc for known issues.

---

## What to Avoid

| Pattern | Why to avoid |
|---|---|
| Hardcoded absolute URLs in source | Breaks local development |
| Root-relative paths (`/docs/...`) without base path | Breaks GitHub Pages project-page routing |
| `trailingSlash: false` | Causes 404s on GitHub Pages |
| Inline `<script>` tags loading external resources | Privacy and CSP concerns |
| `localStorage` for user preferences that aren't cleared | Not needed; keep it simple |
| `fetch()` calls to external APIs | Adds latency and external dependencies |
| Server-side rendering | Breaks static export |
| `gh-pages` branch deployment | Use GitHub Actions deployment instead |
