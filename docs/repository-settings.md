---
id: repository-settings
title: Repository Settings
sidebar_label: Repository Settings
---

# Repository Settings

This page documents the recommended GitHub repository settings for each repo in the Literacy for Kids ecosystem. These settings cannot be changed via code — they must be applied manually in each repository's Settings tab on GitHub.

---

## GitHub Pages

For each repository, go to **Settings › Pages › Source** and select:

> **GitHub Actions** (not `Deploy from a branch`)

This enables the `deploy.yml` workflow to upload and deploy the Pages artifact.

---

## Recommended Repository Descriptions

Set these under **Settings › General › Description** for each repository.

| Repository | Description |
|---|---|
| `literacy_for_kids` | Open-source hub for 9 K–12 literacy curricula on decisions, technology, media, money, and more |
| `decision_literacy_for_kids` | Open-source decision literacy curriculum for ages 8–12 — probability, biases, trade-offs, and better judgment |
| `computer_literacy_for_kids` | Open-source computer literacy curriculum for ages 8–12 — how tech works, digital citizenship, coding, AI |
| `media_literacy_for_kids` | Open-source media literacy curriculum for ages 8–12 — how information spreads, verification, and algorithms |
| `financial_literacy_for_kids` | Open-source financial literacy curriculum for ages 8–12 — money, budgeting, saving, and value |
| `civic_literacy_for_kids` | Open-source civic literacy curriculum for ages 8–12 — communities, government, and civic participation |
| `emotional_and_social_literacy_for_kids` | Open-source emotional & social literacy curriculum for ages 8–12 — emotions, relationships, and social systems |
| `legal_literacy_for_kids` | Open-source legal literacy curriculum for ages 8–12 — rules, contracts, rights, and dispute resolution |
| `Environmental_system_literacy_for_kids` | Open-source environmental systems literacy curriculum for ages 8–12 — Earth systems, energy, and resources |
| `health_literacy_for_kids` | Open-source health systems literacy curriculum for ages 8–12 — the body, homeostasis, sleep, and immunity |
| `literacy_site_template` | Shared Docusaurus v3 theme package for the Literacy for Kids curriculum ecosystem |

---

## Recommended Homepage URLs

Set these under **Settings › General › Website** for each repository.

| Repository | Homepage URL |
|---|---|
| `literacy_for_kids` | `https://www.literacy-for-kids.com/` |
| `decision_literacy_for_kids` | `https://decision.literacy-for-kids.com/` |
| `computer_literacy_for_kids` | `https://computer.literacy-for-kids.com/` |
| `media_literacy_for_kids` | `https://media.literacy-for-kids.com/` |
| `financial_literacy_for_kids` | `https://financial.literacy-for-kids.com/` |
| `civic_literacy_for_kids` | `https://civic.literacy-for-kids.com/` |
| `emotional_and_social_literacy_for_kids` | `https://emotional.literacy-for-kids.com/` |
| `legal_literacy_for_kids` | `https://legal.literacy-for-kids.com/` |
| `Environmental_system_literacy_for_kids` | `https://environmental.literacy-for-kids.com/` |
| `health_literacy_for_kids` | `https://health.literacy-for-kids.com/` |
| `literacy_site_template` | `https://github.com/literacy-for-kids/literacy_site_template` |

---

## Recommended Topics/Tags

Set these under **Settings › General › Topics** for each repository.

### Hub (`literacy_for_kids`)
```
education, k-12, k-12-education, curriculum, open-source-education, homeschool,
docusaurus, digital-literacy, systems-thinking, literacy
```

### Decision Literacy
```
education, k-12, curriculum, open-source-education, homeschool,
decision-making, critical-thinking, cognitive-biases, probability, docusaurus
```

### Computer Literacy
```
education, k-12, curriculum, open-source-education, homeschool,
computer-literacy, digital-literacy, coding, ai-literacy, docusaurus
```

### Media Literacy
```
education, k-12, curriculum, open-source-education, homeschool,
media-literacy, digital-literacy, information-literacy, docusaurus
```

### Financial Literacy
```
education, k-12, curriculum, open-source-education, homeschool,
financial-literacy, personal-finance, economics, docusaurus
```

### Civic Literacy
```
education, k-12, curriculum, open-source-education, homeschool,
civic-literacy, civics, government, democracy, docusaurus
```

### Emotional & Social Literacy
```
education, k-12, curriculum, open-source-education, homeschool,
social-emotional-learning, sel, emotional-intelligence, docusaurus
```

### Legal Literacy
```
education, k-12, curriculum, open-source-education, homeschool,
legal-literacy, law, contracts, rights, docusaurus
```

### Environmental Systems Literacy
```
education, k-12, curriculum, open-source-education, homeschool,
environmental-literacy, systems-thinking, ecology, sustainability, docusaurus
```

### Health Systems Literacy
```
education, k-12, curriculum, open-source-education, homeschool,
health-literacy, biology, physiology, wellness, docusaurus
```

### Theme Package (`literacy_site_template`)
```
docusaurus, docusaurus-theme, npm-package, education, curriculum, literacy
```

---

## Branch Protection

For each repository, consider setting up branch protection on `main` under **Settings › Branches**:

- Require a pull request before merging
- Require status checks to pass (the `build` job from `ci.yml`)
- Do not allow force pushes

This is optional for a small project but helps prevent accidental direct pushes breaking the deployment.
