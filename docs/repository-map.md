---
id: repository-map
title: Repository Map
sidebar_label: Repository Map
---

# Repository Map

All Literacy for Kids repositories are hosted under the [`literacy-for-kids` GitHub organization](https://github.com/literacy-for-kids).

---

## Curriculum Repositories

| Repository | Live Site | Curriculum Focus | Docusaurus root |
|---|---|---|---|
| [`literacy_for_kids`](https://github.com/literacy-for-kids/literacy_for_kids) | [Hub](https://www.literacy-for-kids.com/) | Project hub — links to all curricula | repo root |
| [`decision_literacy_for_kids`](https://github.com/literacy-for-kids/decision_literacy_for_kids) | [Site](https://literacy-for-kids.github.io/decision_literacy_for_kids/) | Decision-making, probability, biases | `/website` |
| [`computer_literacy_for_kids`](https://github.com/literacy-for-kids/computer_literacy_for_kids) | [Site](https://literacy-for-kids.github.io/computer_literacy_for_kids/) | Computers, internet, coding, AI | `/website` |
| [`media_literacy_for_kids`](https://github.com/literacy-for-kids/media_literacy_for_kids) | [Site](https://literacy-for-kids.github.io/media_literacy_for_kids/) | Media construction, verification, algorithms | `/website` |
| [`financial_literacy_for_kids`](https://github.com/literacy-for-kids/financial_literacy_for_kids) | [Site](https://literacy-for-kids.github.io/financial_literacy_for_kids/) | Money, budgeting, value, trade-offs | `/website` |
| [`civic_literacy_for_kids`](https://github.com/literacy-for-kids/civic_literacy_for_kids) | [Site](https://literacy-for-kids.github.io/civic_literacy_for_kids/) | Communities, government, civic participation | `/website` |
| [`emotional_and_social_literacy_for_kids`](https://github.com/literacy-for-kids/emotional_and_social_literacy_for_kids) | [Site](https://literacy-for-kids.github.io/emotional_and_social_literacy_for_kids/) | Emotions, social systems, conflict, trust | `/website` |
| [`legal_literacy_for_kids`](https://github.com/literacy-for-kids/legal_literacy_for_kids) | [Site](https://literacy-for-kids.github.io/legal_literacy_for_kids/) | Rules, contracts, rights, dispute resolution | `/website` |
| [`Environmental_system_literacy_for_kids`](https://github.com/literacy-for-kids/Environmental_system_literacy_for_kids) | [Site](https://literacy-for-kids.github.io/Environmental_system_literacy_for_kids/) | Earth systems, energy flow, matter cycles | `/website` |
| [`health_literacy_for_kids`](https://github.com/literacy-for-kids/health_literacy_for_kids) | [Site](https://literacy-for-kids.github.io/health_literacy_for_kids/) | Human body, homeostasis, immunity, sleep | `/website` |

---

## Supporting Repositories

| Repository | Purpose |
|---|---|
| [`literacy_site_template`](https://github.com/literacy-for-kids/literacy_site_template) | Shared Docusaurus theme package — CSS, navigation components, ecosystem link data |
| [`.github`](https://github.com/literacy-for-kids/.github) | Org profile, community health files, issue templates, PR template |

---

## Naming Conventions

- Curriculum repos use lowercase `snake_case` (e.g., `decision_literacy_for_kids`)
- Exception: `Environmental_system_literacy_for_kids` has a capital E — preserve this exactly in URLs and configs
- The local development clone of the environmental repo may be named differently; always use the exact GitHub repo name in configuration files and links

---

## GitHub Pages URL Pattern

All sites follow:

```
https://literacy-for-kids.github.io/{repo_name}/
```

The `baseUrl` in each repo's `docusaurus.config.js` must match this exactly (case-sensitive).

---

## Deployment Status

All sites deploy via GitHub Actions on push to `main`. The workflow uploads a build artifact and deploys it using `actions/deploy-pages`. GitHub Pages source must be set to **GitHub Actions** (not the `gh-pages` branch) in each repository's Settings › Pages.
