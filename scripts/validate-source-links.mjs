/** Validate generated links to this checkout's documentation without HTTP requests. */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { resolve, relative, sep } from 'node:path';

const [repository, buildDirectory, docsDirectory] = process.argv.slice(2);
if (!repository || !buildDirectory || !docsDirectory) {
  console.error('Usage: node scripts/validate-source-links.mjs owner/repo build-directory docs-directory');
  process.exit(1);
}
const root = process.cwd();
const build = resolve(root, buildDirectory);
const docs = resolve(root, docsDirectory);
const prefix = `https://github.com/${repository}/tree/main/${docsDirectory}/`;
const prefixPath = new URL(prefix).pathname;
if (!existsSync(build) || !statSync(build).isDirectory()) {
  console.error(`[validate-source-links] Missing build directory: ${buildDirectory}`);
  process.exit(1);
}

function* htmlFiles(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(path);
    else if (entry.isFile() && entry.name.endsWith('.html')) yield path;
  }
}

const checked = new Set();
const failures = new Set();
for (const page of htmlFiles(build)) {
  const html = readFileSync(page, 'utf8');
  for (const match of html.matchAll(/\bhref\s*=\s*(["'])(.*?)\1/gi)) {
    const href = match[2].replaceAll('&amp;', '&');
    if (!href.startsWith(prefix) || checked.has(href)) continue;
    checked.add(href);
    try {
      const url = new URL(href);
      if (!url.pathname.startsWith(prefixPath)) throw new Error('path leaves documentation directory');
      const target = resolve(docs, decodeURIComponent(url.pathname.slice(prefixPath.length)));
      const path = relative(docs, target);
      if (path === '..' || path.startsWith(`..${sep}`) || !path || !existsSync(target) || !statSync(target).isFile()) {
        throw new Error('source file is missing or outside documentation directory');
      }
    } catch (error) {
      failures.add(`${relative(build, page)}: ${href} (${error.message})`);
    }
  }
}
if (checked.size === 0) failures.add('No repository documentation links found; verify the prefix and build output.');
if (failures.size) {
  console.error(`[validate-source-links] FAIL:\n${[...failures].join('\n')}`);
  process.exit(1);
}
console.log(`[validate-source-links] OK: ${checked.size} unique documentation source links exist in this checkout.`);
