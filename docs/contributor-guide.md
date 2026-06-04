---
id: contributor-guide
title: Contributor Guide
sidebar_label: Contributor Guide
---

# Contributor Guide

Contributions to Literacy for Kids are welcome. This guide explains how the project works, what kinds of contributions are most useful, and how to get started.

---

## Who Can Contribute

Anyone can contribute. The project benefits from:

- **Parents and educators** who spot unclear explanations, missing examples, or confusing lesson structure
- **Students and young learners** who notice language that doesn't fit their experience
- **Accessibility advocates** who identify barriers to participation
- **Developers** who improve the site infrastructure, deployment, or tooling
- **Subject-matter experts** who can suggest more accurate or age-appropriate framings
- **Translators** who want to bring the curricula to new languages

No special credentials are required. If something confused your 10-year-old, that is useful feedback.

---

## Types of Contributions

### Curriculum content improvements
- Fix typos or grammatical errors
- Clarify confusing explanations
- Improve an example to better fit ages 8–12
- Add a discussion prompt or facilitator note
- Suggest a better activity for a learning objective
- Flag content that is outdated, inaccurate, or age-inappropriate

### Technical improvements
- Fix build or deployment issues
- Improve performance or accessibility
- Update dependencies
- Add or improve automated checks
- Improve documentation

### Documentation
- Improve README files
- Clarify the contribution process
- Add examples or screenshots
- Improve navigation or site structure

---

## What Not to Add

Please **do not** open PRs or issues that:

- Add advertising, affiliate links, commercial partnerships, or sponsored content
- Add student tracking, analytics, login, or user accounts
- Add manipulative design patterns (dark patterns, fear-based messaging, urgency tricks)
- Introduce partisan political content or advocacy messaging
- Replace the discussion-based format with a lecture, quiz, or memorization format
- Add content inappropriate for ages 8–12 (including graphic violence, adult themes, excessive complexity)
- Break existing GitHub Pages deployment paths or static-site compatibility
- Add significant new dependencies without discussion first

When in doubt, open an issue to discuss before writing code or content.

---

## How to Contribute

### 1. Find the right repository

Each curriculum is its own repo. The [Repository Map](./repository-map.md) lists all repos and their focus. Lesson content lives in `website/docs/` in each curriculum repo.

### 2. Open an issue (optional but recommended for larger changes)

For anything beyond a small typo fix, open an issue first to describe what you want to change and why. This lets maintainers confirm the direction before you invest time.

### 3. Fork and clone

```bash
git clone https://github.com/literacy-for-kids/REPO_NAME.git
cd REPO_NAME/website
npm install
npm start
```

For the hub (`literacy_for_kids`), omit the `cd website` step — the Docusaurus config is at the repo root.

### 4. Create a branch

```bash
git checkout -b fix/clarify-week-3-probability-example
```

Use descriptive branch names: `fix/`, `content/`, `ci/`, `chore/`, etc.

### 5. Make your changes

- Lesson files are in `website/docs/` (plain Markdown)
- Hub docs are in `docs/`
- Components and pages are in `src/`

### 6. Verify locally

```bash
npm run build
npm run validate:build   # if the repo has this script
```

Check that the site looks correct at `http://localhost:3000/{baseUrl}`.

### 7. Open a pull request

Push your branch and open a PR against `main`. Use the PR template to describe the change, confirm the curriculum safety checklist, and note any dependencies.

---

## Content Standards

See the [Content Style Guide](./content-style-guide.md) for detailed guidance on writing lessons. The short version:

- Write for ages 8–12 in clear, concrete language
- Prefer guided discussion over lecture
- Use real examples from everyday life
- Define technical terms when first introduced
- Avoid jargon, fear, shame, or manipulation
- Keep activities low-prep and facilitation-friendly

---

## Technical Standards

See the [Technical Style Guide](./technical-style-guide.md) for deployment and code guidance. The short version:

- Keep the site compatible with static hosting on GitHub Pages
- Do not add user accounts, tracking, or server-side features
- Test the build before opening a PR (`npm run build`)
- Preserve base path routing (`/repo_name/`)
- Keep dependencies minimal

---

## Accessibility

See the [Accessibility Notes](./accessibility-notes.md) doc for known issues and expectations. New contributions should:

- Use meaningful alt text for images
- Not rely on color alone to convey information
- Maintain keyboard navigability
- Use clear link text (not "click here")
- Maintain logical heading hierarchy within lesson pages

---

## Getting Help

Open an issue or start a discussion in any repo. Maintainers are responsive to questions.
