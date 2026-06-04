/**
 * Validates the Docusaurus build output before deployment.
 * Exits with code 1 and a descriptive message on any failure.
 */

import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

const BASE_PATH = '/literacy_for_kids/';
const BUILD_DIR = 'build';

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

// 3. HTML references the correct base path
if (!html.includes(BASE_PATH)) {
  fail(`index.html does not reference base path '${BASE_PATH}' — check docusaurus.config.js baseUrl`);
  failed = true;
} else {
  ok(`index.html references base path '${BASE_PATH}'`);
}

// 4. Incorrect base path variants must not appear
const literalWrongPaths = [
  '/literacy-for-kids/',   // hyphen instead of underscore (org name, not repo name)
  'href="/"',              // exact root-relative link ignoring base path
];
for (const bad of literalWrongPaths) {
  if (html.includes(bad)) {
    fail(`index.html contains incorrect path '${bad}'`);
    failed = true;
  } else {
    ok(`index.html does not contain incorrect path '${bad}'`);
  }
}

// Check for src= or href= pointing to a root path that is NOT under the base path
// e.g. src="/assets/..." or href="/docs/..." would be wrong; src="/literacy_for_kids/..." is correct
const rootRelativePattern = /(?:src|href)="\/(?!literacy_for_kids\/|#)/g;
const badRootRelative = [...html.matchAll(rootRelativePattern)].map((m) => m[0]);
if (badRootRelative.length > 0) {
  fail(
    `index.html has ${badRootRelative.length} asset/link reference(s) not under base path:\n` +
      badRootRelative.map((s) => `  ${s}`).join('\n')
  );
  failed = true;
} else {
  ok('No root-relative paths outside the base path in index.html');
}

// 5. Referenced JS and CSS assets must exist on disk
const assetPattern = /(?:href|src)="(\/literacy_for_kids\/assets\/[^"]+)"/g;
let match;
let assetCount = 0;
while ((match = assetPattern.exec(html)) !== null) {
  const assetUrl = match[1];
  // Strip base path prefix to get filesystem path under build/
  const fsPath = join(BUILD_DIR, assetUrl.replace(BASE_PATH, ''));
  if (!existsSync(fsPath)) {
    fail(`Referenced asset missing on disk: ${assetUrl} (expected at ${fsPath})`);
    failed = true;
  }
  assetCount++;
}
if (assetCount > 0) {
  ok(`All ${assetCount} referenced assets exist on disk`);
} else {
  fail('No asset references found in index.html — build may be incomplete');
  failed = true;
}

// 6. No references to source directories in the built output
const badSourceRefs = ['/src/', 'file://', 'localhost:'];
for (const bad of badSourceRefs) {
  if (html.includes(bad)) {
    fail(`index.html contains unexpected source reference '${bad}'`);
    failed = true;
  }
}
ok('No source-directory or localhost references in index.html');

// 7. 404.html should exist (Docusaurus generates it for SPA fallback)
if (!existsSync(join(BUILD_DIR, '404.html'))) {
  fail('build/404.html is missing — SPA fallback will not work on GitHub Pages');
  failed = true;
} else {
  ok('build/404.html exists');
}

if (failed) {
  console.error('\n[validate-build] Validation FAILED. Fix the errors above before deploying.');
  process.exit(1);
}

console.log('\n[validate-build] All checks passed.');
