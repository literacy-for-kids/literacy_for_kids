---
id: accessibility-notes
title: Accessibility Notes
sidebar_label: Accessibility Notes
---

# Accessibility Notes

This page documents accessibility standards, known issues, and planned improvements for the Literacy for Kids ecosystem.

---

## Standards

Literacy for Kids aims to meet **WCAG 2.1 Level AA** as a baseline. The curriculum content is educational material for children and should be accessible to learners with a range of needs.

---

## What Docusaurus Provides

Docusaurus v3 includes a number of accessibility features out of the box:

- **Language attribute**: `<html lang="en">` is set automatically
- **Skip to content link**: present in all Docusaurus layouts
- **Navigation landmarks**: `<nav>`, `<main>`, `<footer>` are provided by the Layout component
- **Keyboard navigation**: the built-in navbar supports keyboard navigation
- **Dark/light mode toggle**: available for visual preference
- **Readable font sizes**: set by Infima CSS

---

## Known Issues

### Icon-only navigation links

The ecosystem navbar (`LiteracyNavbar`) renders text links — not icon-only. No known issue here.

### External link indicators

External links include an SVG arrow icon via Docusaurus's built-in handling. The icon has `aria-label="(opens in new tab)"` but relies on CSS being loaded. If CSS fails to load, the icon may be invisible but the label is still present.

### Color contrast

Default Docusaurus themes (GitHub/Dracula for code blocks) should meet contrast requirements, but have not been formally audited. Custom CSS overrides should be checked.

### Missing alt text on static images

Images in `static/img/` (logo, hero images) use alt text in the components that reference them. New images added to lesson content should always include descriptive alt text.

### Clickable cards without keyboard support

Some homepage card components use `<a>` elements that are fully keyboard accessible. If cards are ever redesigned as `<div onClick>`, keyboard accessibility would be lost. Keep interactive elements as `<a>` or `<button>`.

---

## Accessibility Requirements for Contributors

When adding or editing content:

- **Images**: always include `alt` text. Empty alt (`alt=""`) is acceptable for decorative images.
- **Links**: use descriptive link text. Avoid "click here", "read more", "here", or bare URLs.
- **Headings**: maintain logical hierarchy. Don't skip heading levels (e.g., don't jump from `##` to `####`).
- **Tables**: include a header row. Use for tabular data, not layout.
- **Bold/italic**: use sparingly and for semantic emphasis, not decoration.
- **Emoji**: when used as decoration, wrap in `<span aria-hidden="true">`. When used as content, describe them in surrounding text.
- **Videos/audio**: provide captions or transcripts for any media (not currently used, but relevant if added).

---

## Future Improvements

The following accessibility improvements are planned or recommended but not yet implemented:

1. **Formal contrast audit**: Run a WCAG-compliant contrast check on the custom CSS palette used across sites.
2. **Automated accessibility CI check**: Add `axe-core` or `pa11y` to the CI pipeline to catch regressions automatically.
3. **Keyboard focus styles**: Verify that focus indicators are visible in both light and dark modes.
4. **Screen reader testing**: Manual testing with VoiceOver (macOS/iOS) and NVDA (Windows) has not been conducted.
5. **Print styles**: Lesson content printed directly from the browser may lose formatting. Print stylesheets would improve use for facilitators who prefer physical copies.
6. **Mobile navigation**: The secondary ecosystem navbar (`LiteracyNavbar`) may be hard to use on narrow screens — a collapsible or scroll-hidden mobile variant would help.

---

## Reporting Accessibility Issues

If you find an accessibility barrier, open an issue using the **Accessibility Issue** template. Include:

- Which page or component is affected
- What assistive technology or approach was being used
- What the expected behavior should be
- A screenshot or description of the current behavior
