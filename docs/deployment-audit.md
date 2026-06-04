---
sidebar_position: 5
---

# Deployment Audit

Summary of the hub site's deployment configuration and what was changed during the Phase 1 infrastructure stabilization pass.

---

## Framework

**Docusaurus v3** (`@docusaurus/core` 3.10.1). The Docusaurus root is the **repository root** (not a `/website` subdirectory, unlike the curriculum repos).

Build command: `npm run build`  
Build output directory: `build/`  
Package manager: npm (lockfile version 3)

---

## GitHub Pages configuration

| Setting | Value |
|---------|-------|
| `url` | `https://literacy-for-kids.github.io` |
| `baseUrl` | `/literacy_for_kids/` |
| `trailingSlash` | `true` |
| Deployment source | GitHub Actions (must be set in repo Settings › Pages) |
| Artifact path | `build/` |

### Why `trailingSlash: true`

GitHub Pages serves static files. Without trailing slashes, navigating to `/literacy_for_kids/docs/intro` returns a 404 because GitHub Pages looks for `docs/intro.html`, not `docs/intro/index.html`. Docusaurus with `trailingSlash: true` generates `docs/intro/index.html`, which GitHub Pages serves correctly at `/docs/intro/`.

---

## Shared theme package

The site depends on `literacy-site-theme` (installed from GitHub: `literacy-for-kids/literacy_site_template`). This package provides:

- Curriculum ecosystem data (all 9 curricula with URLs, icons, metadata)
- `LiteracyNavbar` and `LiteracyFooter` React components
- `footerConfig` for the Docusaurus built-in footer

The hub overrides these theme components locally in `src/theme/` so they can be customized independently of the curriculum sites.

---

## GitHub Actions workflows

### `deploy.yml` — push to main → build → deploy

Runs on every push to `main`. Steps:

1. Checkout
2. Setup Node 20 with npm cache
3. `actions/configure-pages` — initializes the Pages environment
4. `npm ci --legacy-peer-deps` — installs from lockfile
5. `npm run build` — Docusaurus production build
6. `npm run validate:build` — validates the `build/` output (see below)
7. `actions/upload-pages-artifact` with `path: build`
8. `actions/deploy-pages` (separate `deploy` job)

### `ci.yml` — PR and push checks

Runs on pull requests and pushes to `main`. Jobs:

- **build**: install, build, validate
- **lint-links**: re-build then run `lycheeverse/lychee-action@v2` on the build output, excluding `shields.io` and `camo.githubusercontent.com`

---

## Build validation (`scripts/validate-build.mjs`)

Run via `npm run validate:build` after `npm run build`. Checks:

1. `build/` directory exists
2. `build/index.html` exists
3. `index.html` references the correct base path `/literacy_for_kids/`
4. No occurrences of `/literacy-for-kids/` (wrong path using org name with hyphens)
5. No `href="/"` (root-relative links that bypass the base path)
6. No asset `src=` or `href=` pointing to paths outside `/literacy_for_kids/`
7. All JS and CSS assets referenced by `index.html` exist on disk
8. No `/src/`, `file://`, or `localhost:` references in built output
9. `build/404.html` exists (needed for SPA 404 fallback)

---

## Manual step required after pushing the workflow

In the GitHub repository settings:

1. Go to **Settings › Pages**
2. Under **Source**, select **GitHub Actions** (not the `gh-pages` branch)
3. Save

The `gh-pages` branch can be deleted after the first successful Actions deploy is confirmed.

---

## Changes made during Phase 1

| File | Change |
|------|--------|
| `docusaurus.config.js` | Added `trailingSlash: true` |
| `.github/workflows/deploy.yml` | Added `actions/configure-pages`, `npm run validate:build` |
| `.github/workflows/ci.yml` | Added `--legacy-peer-deps` to `npm ci`, added `npm run validate:build` |
| `package.json` | Added `validate:build` script |
| `scripts/validate-build.mjs` | Created — build output validation script |
| `docs/deployment-audit.md` | Created — this file |
