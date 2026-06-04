# Contributing to Literacy for Kids

Thank you for your interest in contributing. Literacy for Kids is a collection of open-source curricula for children ages 8–12. Contributions from parents, educators, developers, and anyone who cares about accessible education are welcome.

---

## Before You Start

Read the relevant style guides:

- **[Contributor Guide](https://literacy-for-kids.github.io/literacy_for_kids/docs/contributor-guide)** — overview of the contribution process
- **[Content Style Guide](https://literacy-for-kids.github.io/literacy_for_kids/docs/content-style-guide)** — standards for writing lessons
- **[Technical Style Guide](https://literacy-for-kids.github.io/literacy_for_kids/docs/technical-style-guide)** — standards for code and deployment

---

## Quick Start

### For curriculum content changes:
1. Fork the relevant curriculum repository (see [Repository Map](https://literacy-for-kids.github.io/literacy_for_kids/docs/repository-map))
2. Clone and open a branch
3. Edit Markdown files in `website/docs/`
4. Open a pull request

### For hub documentation changes:
1. Fork this repository (`literacy_for_kids`)
2. Edit files in `docs/` (Markdown) or `src/pages/` (React)
3. Open a pull request

### For infrastructure changes:
1. Fork the affected repository
2. Test the build locally (`npm run build`)
3. Open a pull request with a clear description of what changed and why

---

## Types of Contributions Welcome

- Fixing typos or grammatical errors in lessons or documentation
- Clarifying confusing explanations
- Adding examples or discussion prompts
- Improving facilitator guidance
- Fixing accessibility issues
- Fixing build or deployment bugs
- Improving CI/CD workflows
- Updating dependencies
- Improving documentation

---

## Content Standards (Short Version)

- Write for **ages 8–12** in clear, concrete language
- Prefer **guided discussion** over lecture
- **Define jargon** when introduced
- **Avoid fear, shame, or manipulation** as motivational devices
- **Do not collect student data** or add tracking
- Keep lessons **10–20 minutes** and low-prep
- Stay **politically neutral** on contested topics — explain how systems work, not what to believe
- Do not add **advertising, affiliate links, or commercial content**

---

## Technical Standards (Short Version)

- Keep sites compatible with **static hosting on GitHub Pages**
- **Do not add user accounts, login, analytics, or server-side code**
- Test the build before opening a PR: `npm run build`
- Preserve `baseUrl` and `trailingSlash: true` in `docusaurus.config.js`
- Keep dependencies minimal

---

## Submitting a Pull Request

1. Use a descriptive branch name: `fix/week3-example`, `content/add-civic-discussion-prompt`
2. Fill in the PR template completely
3. Confirm the curriculum safety checklist if editing lesson content
4. One PR per logical change; avoid bundling unrelated edits

---

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). Be respectful, inclusive, and constructive.

---

## Questions?

Open an issue in the relevant repository. Maintainers are glad to help.
