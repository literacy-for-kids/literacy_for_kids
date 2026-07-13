---
id: ecosystem-overview
title: Ecosystem Overview
sidebar_label: Ecosystem Overview
---

# Ecosystem Overview

Literacy for Kids is a collection of open-source curricula for children ages 8–12. Each curriculum teaches a foundational literacy that helps young learners understand a part of modern life they already interact with every day but rarely have explained to them.

![The Literacy for Kids ecosystem: nine domain literacies supported by seven shared toolkits](/img/ecosystem-map.svg)

---

## The Nine Curricula

| | Curriculum | What it covers | Live site |
|---|---|---|---|
| 🧠 | Decision Literacy | Probability, trade-offs, biases, and structured reasoning | [Website](https://decision.literacy-for-kids.com/) |
| 💻 | Computer Literacy | How computers and the internet work; digital citizenship; coding; AI | [Website](https://computer.literacy-for-kids.com/) |
| 📰 | Media Literacy | How media and information are constructed; verification; algorithms | [Website](https://media.literacy-for-kids.com/) |
| 💰 | Financial Literacy | Money as a system; budgeting; saving; trade-offs; value creation | [Website](https://financial.literacy-for-kids.com/) |
| 🏛️ | Civic Literacy | Communities, government, public services, and civic participation | [Website](https://civic.literacy-for-kids.com/) |
| 🧩 | Emotional & Social Literacy | Emotions as signals; reactivity; trust; conflict; social systems | [Website](https://emotional.literacy-for-kids.com/) |
| ⚖️ | Legal Literacy | Rules, contracts, rights, and how disputes get resolved | [Website](https://legal.literacy-for-kids.com/) |
| 🌍 | Environmental Systems Literacy | Earth as a physical system; energy flow; matter cycles; resource limits | [Website](https://environmental.literacy-for-kids.com/) |
| 🩺 | Health Systems Literacy | The body as a biological system; homeostasis; sleep; immunity; microbiome | [Website](https://health.literacy-for-kids.com/) |

---

## How It Works

Each curriculum is:

- **Independent**: no prerequisites, no required sequence
- **Discussion-based**: built around conversation and reflection, not memorization or tests
- **Short lessons**: 10–20 minutes per session, adaptable to home, classroom, club, or library
- **Age-appropriate**: written for roughly ages 8–12 (grades 3–6)
- **No expertise required from adults**: lessons provide the context facilitators need

---

## The Open-Source Model

Every curriculum is free, openly licensed, and hosted on GitHub. There is no login, paywall, or student-data collection. The materials can be:

- Used as-is directly on the web
- Downloaded and adapted for local needs
- Forked and remixed for new contexts (translation, restructuring, extension)
- Contributed back to improve or expand

**Code** (JavaScript, CSS, configuration): MIT License  
**Curriculum content** (Markdown lessons): CC BY-NC-SA 4.0  

See the [Open Source](./open-source.md) page for details.

---

## The Technical Architecture

Each curriculum is a static [Docusaurus v3](https://docusaurus.io/) site, deployed to GitHub Pages. The sites share a common theme package ([`literacy-site-theme`](https://github.com/literacy-for-kids/literacy_site_template)) that provides:

- Consistent visual design and CSS custom properties
- Cross-curriculum navigation components
- Ecosystem link data (single source of truth for all curriculum URLs)

Sites are built with `npm run build` and deployed via GitHub Actions on every push to `main`. There are no servers, databases, or user accounts. Everything is static files.

---

## Hub vs. Curriculum Repositories

The **hub** (`literacy_for_kids`) is this site. It introduces the project and helps visitors choose a curriculum. It does not contain lesson content.

Each **curriculum repo** (`{name}_literacy_for_kids`) contains the full lesson content for one curriculum. The Docusaurus source lives in a `/website` subdirectory of each curriculum repo.

The **shared theme** (`literacy_site_template`) is an npm package consumed by all nine curriculum sites. When a curriculum is added or a URL changes, update `src/data/ecosystemLinks.js` in that package and all sites pick up the change on their next build.
