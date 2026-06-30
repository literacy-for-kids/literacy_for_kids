/**
 * Validates the Docusaurus build output before deployment.
 * Reads baseUrl from docusaurus.config.js so it works for both
 * subdirectory deployments (/literacy_for_kids/) and custom-domain
 * root deployments (/).
 * Exits with code 1 and a descriptive message on any failure.
 */

import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

const BUILD_DIR = 'build';

// Read base path from config rather than hard-coding it.
const configSrc = readFileSync('docusaurus.config.js', 'utf8');
const baseMatch = configSrc.match(/baseUrl:\s*['"]([^'"]+)['"]/);
const BASE_PATH = baseMatch ? baseMatch[1] : '/';

let failed = false;

function fail(msg) {
  console.error(`[validate-build] FAIL: ${msg}`);
  failed = true;
}

function ok(msg) {
  console.log(`[validate-build] OK:   ${msg}`);
}

// 1. Build directory exists
if (!existsSync(BUILD_DIR)) {
  fail(`Build directory '${BUILD_DIR}' does not exist — run 'npm run build' first`);
  process.exit(1);
}
ok('build/ directory exists');

// 2. index.html exists
const indexPath = join(BUILD_DIR, 'index.html');
if (!existsSync(indexPath)) {
  fail(`${indexPath} is missing`);
  process.exit(1);
}
ok('build/index.html exists');

const html = readFileSync(indexPath, 'utf8');
ok(`Detected baseUrl: '${BASE_PATH}'`);

// 3. Hard wrong path — hyphen instead of underscore in the org/repo name
const wrongPaths = ['/literacy-for-kids/'];
for (const bad of wrongPaths) {
  if (html.includes(bad)) {
    fail(`index.html contains incorrect path '${bad}'`);
  } else {
    ok(`index.html does not contain incorrect path '${bad}'`);
  }
}

if (BASE_PATH !== '/') {
  // Subdirectory deployment: every asset and internal link must start with the base path.

  // 4a. HTML must reference the base path somewhere.
  if (!html.includes(BASE_PATH)) {
    fail(`index.html does not reference base path '${BASE_PATH}' — check docusaurus.config.js baseUrl`);
  } else {
    ok(`index.html references base path '${BASE_PATH}'`);
  }

  // 4b. No root-relative paths that bypass the base path (e.g. href="/assets/..." instead of href="/literacy_for_kids/assets/...").
  const base = BASE_PATH.slice(1); // strip leading slash for lookahead
  const rootRelativePattern = new RegExp(`(?:src|href)="\/(?!${base}|#)`, 'g');
  const badRootRelative = [...html.matchAll(rootRelativePattern)].map((m) => m[0]);
  if (badRootRelative.length > 0) {
    fail(
      `index.html has ${badRootRelative.length} asset/link reference(s) not under base path:\n` +
        badRootRelative.map((s) => `  ${s}`).join('\n')
    );
  } else {
    ok('No root-relative paths outside the base path in index.html');
  }

  // 5. Referenced JS/CSS assets must exist on disk.
  const escapedBase = BASE_PATH.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const assetPattern = new RegExp(`(?:href|src)="(${escapedBase}assets\/[^"]+)"`, 'g');
  let match;
  let assetCount = 0;
  while ((match = assetPattern.exec(html)) !== null) {
    const assetUrl = match[1];
    const fsPath = join(BUILD_DIR, assetUrl.replace(BASE_PATH, ''));
    if (!existsSync(fsPath)) {
      fail(`Referenced asset missing on disk: ${assetUrl} (expected at ${fsPath})`);
    }
    assetCount++;
  }
  if (assetCount > 0) {
    ok(`All ${assetCount} referenced assets exist on disk`);
  } else {
    fail('No asset references found in index.html — build may be incomplete');
  }
} else {
  // Root base path (custom domain): assets live at /assets/... which is correct.
  ok("Base path is '/' — skipping subdirectory path checks");

  const assetPattern = /(?:href|src)="(\/assets\/[^"]+)"/g;
  let match;
  let assetCount = 0;
  while ((match = assetPattern.exec(html)) !== null) {
    const assetUrl = match[1];
    const fsPath = join(BUILD_DIR, assetUrl); // /assets/foo → build/assets/foo
    if (!existsSync(fsPath)) {
      fail(`Referenced asset missing on disk: ${assetUrl} (expected at ${fsPath})`);
    }
    assetCount++;
  }
  if (assetCount > 0) {
    ok(`All ${assetCount} referenced assets exist on disk`);
  } else {
    fail('No asset references found in index.html — build may be incomplete');
  }
}

// 6. No references to source directories or localhost in the built output.
const badSourceRefs = ['/src/', 'file://', 'localhost:'];
for (const bad of badSourceRefs) {
  if (html.includes(bad)) {
    fail(`index.html contains unexpected source reference '${bad}'`);
  }
}
ok('No source-directory or localhost references in index.html');

// 7. 404.html should exist (Docusaurus generates it for SPA fallback).
if (!existsSync(join(BUILD_DIR, '404.html'))) {
  fail('build/404.html is missing — SPA fallback will not work on GitHub Pages');
} else {
  ok('build/404.html exists');
}

if (failed) {
  console.error('\n[validate-build] Validation FAILED. Fix the errors above before deploying.');
  process.exit(1);
}

console.log('\n[validate-build] All checks passed.');
