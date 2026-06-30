# Literacy for Kids

![Curricula](https://img.shields.io/badge/curricula-9-brightgreen)
![Content License](https://img.shields.io/badge/content-CC%20BY--NC--SA%204.0-green)
![Code License](https://img.shields.io/badge/code-MIT-blue)
![Built with Docusaurus](https://img.shields.io/badge/site-Docusaurus-blue)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange)

Open-source curricula helping children ages 8–12 understand the systems that shape modern life.

🌐 **View the project hub:**  
https://www.literacy-for-kids.com/

---

## About

Literacy for Kids is a collection of open-source curricula designed for children ages 8–12. Each curriculum teaches a foundational literacy that helps young learners understand a part of modern life that is often experienced every day but rarely explained clearly.

The project focuses on practical literacies for navigating the world thoughtfully, confidently, and responsibly — including technology, media, decision-making, money, civic life, health, law, environmental systems, and emotional/social development. The lessons are short, discussion-based, and designed for parents, teachers, homeschool families, and community educators.

Rather than trying to cover every academic subject, Literacy for Kids helps children build practical mental models for how the world works. The goal is to make important systems more visible, more understandable, and easier to talk about together.

## Curriculum Collection

Each curriculum is maintained as its own Docusaurus site and GitHub repository. The hub site introduces the larger project and helps visitors find the curriculum that best fits their learner, classroom, family, or community setting.

| | Curriculum | What it helps kids understand | Website | Repo |
|---|---|---|---|---|
| 🧠 | Decision Literacy | Probability, trade-offs, biases, opportunity cost, and better judgment under uncertainty | <a href="https://literacy-for-kids.github.io/decision_literacy_for_kids/">Website</a> | <a href="https://github.com/literacy-for-kids/decision_literacy_for_kids">Repo</a> |
| 💻 | Computer Literacy | Computers as tools for thinking, creating, problem solving, digital citizenship, search, coding, AI, and optional CAD/3D design | <a href="https://literacy-for-kids.github.io/computer_literacy_for_kids/">Website</a> | <a href="https://github.com/literacy-for-kids/computer_literacy_for_kids">Repo</a> |
| 📰 | Media Literacy | Media as constructed artifacts shaped by incentives, algorithms, context, verification, and sharing choices | <a href="https://literacy-for-kids.github.io/media_literacy_for_kids/">Website</a> | <a href="https://github.com/literacy-for-kids/media_literacy_for_kids">Repo</a> |
| 💰 | Financial Literacy | Money as a system for value, planning, trade-offs, budgeting, banking, inflation, and value creation | <a href="https://literacy-for-kids.github.io/financial_literacy_for_kids/">Website</a> | <a href="https://github.com/literacy-for-kids/financial_literacy_for_kids">Repo</a> |
| 🏛️ | Civic Literacy | Communities, cooperation, government, public services, participation, and nonpartisan civic problem solving | <a href="https://literacy-for-kids.github.io/civic_literacy_for_kids/">Website</a> | <a href="https://github.com/literacy-for-kids/civic_literacy_for_kids">Repo</a> |
| ⚖️ | Legal Literacy | Rules, contracts, rights, precedent, due process, dispute resolution, and the operating rules of society | <a href="https://literacy-for-kids.github.io/legal_literacy_for_kids/">Website</a> | <a href="https://github.com/literacy-for-kids/legal_literacy_for_kids">Repo</a> |
| ❤️ | Health Literacy | The body as a physiological system: homeostasis, fuel, sleep, immunity, microbiome, and preventive maintenance | <a href="https://literacy-for-kids.github.io/health_literacy_for_kids/">Website</a> | <a href="https://github.com/literacy-for-kids/health_literacy_for_kids">Repo</a> |
| 🌎 | Environmental Systems Literacy | Earth as a closed-loop physical system: energy flow, matter cycles, resource limits, circular systems, and human infrastructure | <a href="https://literacy-for-kids.github.io/Environmental_system_literacy_for_kids/">Website</a> | <a href="https://github.com/literacy-for-kids/Environmental_system_literacy_for_kids">Repo</a> |
| 🤝 | Emotional & Social Literacy | Emotions as telemetry, reactivity, trust, boundaries, conflict, communication, and social systems | <a href="https://literacy-for-kids.github.io/emotional_and_social_literacy_for_kids/">Website</a> | <a href="https://github.com/literacy-for-kids/emotional_and_social_literacy_for_kids">Repo</a> |

## Shared Design Philosophy

Across the collection, the curricula are designed around a few common ideas:

- **Mental models over memorization:** students learn reusable ways of thinking, not just isolated facts.
- **Systems thinking:** each topic is presented as a system with inputs, outputs, incentives, constraints, feedback loops, and failure modes.
- **Adult-facilitated discussion:** lessons are built for guided conversation, reflection, and practical activities.
- **Age-aware depth:** the materials are written for roughly ages 8–12, with room for adults to simplify, extend, or adapt.
- **Practical transfer:** students are encouraged to apply each literacy to real choices, real media, real technology, real communities, and real relationships.

## About This Repository

This repository contains the Docusaurus source for the Literacy for Kids hub site.

It is not the home of the curriculum lesson content itself. Instead, it introduces the project, explains how the curricula connect, and links visitors to the individual curriculum repositories and websites.

This hub repository is mainly for:

- project overview pages
- shared framing for the curriculum collection
- navigation and links to the curriculum sites
- documentation about the open-source project as a whole

## Repository Structure

Most hub content lives in the Docusaurus website source for this repository. Each individual curriculum keeps its own lesson content, facilitator resources, and curriculum-specific documentation in its own repository.

```text
literacy_for_kids/          # Hub site (this repo) — content at root
  docs/                     # Hub documentation and overview pages
  src/                      # Hub site components and pages
  static/                   # Static assets
  README.md                 # Project overview for GitHub

{curriculum}_literacy_for_kids/  # Per-curriculum repos
  website/                  # Docusaurus site source
    docs/                   # Lesson content (Markdown)
    src/                    # Page components
    static/img/             # Logos, hero images, favicons
    docusaurus.config.js

literacy_site_template/     # Shared Docusaurus theme package
  src/data/ecosystemLinks.js  # Single source of truth for all 9 curricula
  src/theme/                # Shared navbar and footer components
```

The shared theme (`literacy_site_template`) is an npm package consumed by all nine curriculum sites. It exports the ecosystem link data that populates the navbar dropdown and footer on every site. When a curriculum is added, it is registered here and all sites update on their next build.

## Getting Started (for Contributors)

**To run a curriculum site locally:**

```bash
git clone https://github.com/literacy-for-kids/REPO_NAME.git
cd REPO_NAME/website
npm install
npm start
```

The site opens at `http://localhost:3000`. For the hub (`literacy_for_kids`), omit the `cd website` step — the Docusaurus config is at the repo root.

**To contribute curriculum content:**

1. Fork the relevant curriculum repo on GitHub
2. Create a branch: `git checkout -b my-lesson-edit`
3. Edit the Markdown files under `website/docs/`
4. Run the site locally to verify your changes
5. Open a pull request against `main`

Lesson content is plain Markdown. Each week of lessons is one file. The 18-week structure is defined by `website/sidebars.js`.

**To contribute infrastructure or theme changes:**

Changes to `literacy_site_template` affect all nine sites. Update the package, bump the version, then open PRs against each curriculum repo to pick up the new version. Include a note in the PR body about which sites are affected.

## License

This project uses dual licensing:

- **Code** (JavaScript, CSS, configuration, build scripts): <a href="./LICENSE-CODE">MIT License</a>
- **Curriculum content** (Markdown documents under `docs/`): <a href="./LICENSE-CONTENT">CC BY-NC-SA 4.0</a>

The dual license reflects two different kinds of openness: the infrastructure is fully open and reusable for any purpose; the curriculum content is open to read, share, and adapt for non-commercial educational use, with attribution required and derivative works under the same license.

---

## Links

- **Hub site:** https://www.literacy-for-kids.com/
- **GitHub organization:** https://github.com/literacy-for-kids
