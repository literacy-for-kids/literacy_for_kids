# Supplementary Materials Backlog — Literacy for Kids Org

Internal production-backlog and burn-down tracker for all handouts, worksheets, diagrams, and facilitator materials across the 9-curriculum org. Not a published site page; root-level placement is intentional — Docusaurus does not build it here.

Backlog reflects audit of 2026-06-04; five blocking claims re-verified against local checkouts and GitHub CLI on 2026-06-04 (see §2 notes and struck items below).

---

## Legend

**Priority**
- `[H]` — blocks teaching the course as written or fixes a broken experience
- `[M]` — materially improves usability
- `[L]` — polish

**Format**
- `print-PDF` — designed, B&W-printer-friendly handout
- `screen` — renders on the Docusaurus site
- `print+screen` — both

**Audience:** ages 8–12 throughout. Differentiate 8–9 vs 10–12 where the curriculum already provides it.

---

## 2. Read First — Blocking Prerequisites

Gates, not handouts. Per-curriculum asset work on Decision and Media is premature until live Docusaurus deploys are confirmed. Org-wide nav/footer polish is premature until cross-links are verified in production.

- [x] ~~**[GATE · H]** Repair broken Environmental cross-links (`environmental_system_literacy` → `Environmental_system_literacy_for_kids`) in nav of Civic / Financial / Legal / Health~~
  _Verified 2026-06-04: installed `literacy-site-theme` in civic `node_modules` has correct `href: '.../Environmental_system_literacy_for_kids/'` in both `footerConfig.js` and `ecosystemLinks.js`. Reopen only if a live-site audit finds stale builds still serving the wrong slug._
- [x] ~~**[GATE · H]** Standardize footers to list all 9 curricula (Civic / Financial / Legal / Health listed only 5)~~
  _Verified 2026-06-04: installed `literacy-site-theme` `footerConfig.js` lists all 9 curricula. Reopen if a live-site audit reveals repos serving a stale package version._
- [ ] **[GATE · H]** Confirm Decision & Media live-site deploys are serving Docusaurus, not Jekyll — local repos have `docusaurus.config.js` + `deploy.yml` but live-site HTML not verified; do not commission Tier C handouts until Pages is confirmed serving Docusaurus output
- [x] ~~**[GATE · M]** Reconcile Legal repo description "10-Week" vs 18-week live site~~
  _Verified 2026-06-04: `gh repo view literacy-for-kids/legal_literacy_for_kids` shows description "18-Week Legal Literacy Curriculum for Young Learners". Already correct._
- [ ] **[GATE · M]** Align Docusaurus version — Financial is on 3.9.2; all others on 3.10.1

---

## 3. Org-wide & Shared Assets

- [ ] **[H]** Per-curriculum social/OG card (1200×630 PNG) — site asset — _supports: all sites; fixes `img/logo.svg`-as-OG-image on Environmental, Health, Legal, Emotional & Social (confirmed: all four `docusaurus.config.js` set `image: 'img/logo.svg'`)_
- [ ] **[H]** Shared print stylesheet + handout design template (add to `literacy_site_template`) — design asset — _supports: all curricula; enables consistent B&W-printable PDFs org-wide_
- [ ] **[H]** Standard favicon set across all 9 sites + hub — site asset — _supports: all sites_
- [ ] **[M]** Consistent logo lockups (icon + wordmark) per curriculum — site asset — _supports: all sites_
- [ ] **[M]** README hero banner per repo — repo asset — _supports: Decision / Media / Health / Legal / Emotional & Social (currently missing)_
- [ ] **[M]** Consistent hub thumbnails for "Compare the Curricula" cards — site asset — _supports: literacy_for_kids hub_
- [ ] **[M]** Org `.github` profile README + org avatar — org asset — _supports: literacy-for-kids GitHub org_

---

## 4. Per-Curriculum Checklists

---

### Tier A — Content-rich; layer assets now

---

## Environmental Systems Literacy

`Repo: Environmental_system_literacy_for_kids · Tier A · most mature; existing "templates" are plain-text Markdown, not PDFs`

**Curriculum-facing**

- [ ] **[H]** Systems Log weekly entry sheet — worksheet, print-PDF — _supports: all weeks (course spine)_
- [ ] **[H]** Terrarium build + 7-day observation log — lab record sheet, print-PDF — _supports: Week 3_
- [ ] **[H]** Labeled terrarium cross-section diagram (rocks→charcoal→soil→plants→lid + water-cycle arrows) — diagram, print+screen — _supports: Week 3 (replaces text "Picture Checklist")_
- [ ] **[H]** Water / carbon / nitrogen cycle labeled diagrams (×3) — diagram, print+screen — _supports: Weeks 4–7_
- [ ] **[H]** Object Journey / "Away Audit" student sheet — activity sheet, print-PDF — _supports: Week 7_
- [ ] **[H]** Resource-pool depletion game board + tracker — printable game, print-PDF — _supports: Week 10_
- [ ] **[H]** Capstone proposal pack (specs / failure-mode / stakeholder / pitch) — printable booklet, print-PDF — _supports: Weeks 15–18_
- [ ] **[M]** Carrying-capacity / population-curve graphing sheet — worksheet, print-PDF — _supports: Weeks 8–9_
- [ ] **[M]** Linear-vs-circular "API" infographic — infographic, print+screen — _supports: Weeks 11–14_
- [ ] **[M]** Vocabulary / diagram-labeling pages (cycles, feedback loops) — labeling pages, print-PDF — _supports: Units 1–2_
- [ ] **[M]** Glossary reference cards — reference cards, print-PDF — _supports: all_

**Facilitator**

- [ ] **[H]** Per-week one-page lesson plan (objective / prep / script / answers) — lesson plan, print-PDF — _supports: each week_
- [ ] **[M]** Designed materials/supply checklist — supply list, print-PDF — _supports: whole course_
- [ ] **[M]** Answer keys (check-for-understanding) — answer key, print-PDF — _supports: each week_
- [ ] **[M]** Capstone rubric as fillable scoring sheet — rubric, print-PDF — _supports: Weeks 15–18_
- [ ] **[L]** Pacing guide (2 vs 3 sessions/week) — pacing guide, print-PDF — _supports: whole course_

---

## Computer Literacy

`Repo: computer_literacy_for_kids · Tier A · rich facilitator scaffolding already in place; roadmap.png exists`

**Curriculum-facing**

- [ ] **[H]** "Parts of a computer" labeled diagram — diagram, print+screen — _supports: Week 2_
- [ ] **[H]** Files & folders structure diagram + sorting worksheet — diagram + worksheet, print-PDF — _supports: Week 3_
- [ ] **[H]** Keyboard / shortcut reference card — reference card, print-PDF — _supports: Week 4_
- [ ] **[H]** Source-evaluation / "is this real?" checklist — reference handout, print-PDF — _supports: Weeks 5–8_
- [ ] **[H]** Unplugged algorithm / debugging activity cards — printable cards, print-PDF — _supports: Weeks 9–11_
- [ ] **[H]** Digital-safety quick-rules poster — printable poster, print-PDF — _supports: whole course_
- [ ] **[M]** Search / recommendation algorithm infographic — infographic, print+screen — _supports: Weeks 5–8, 12–14_
- [ ] **[M]** TinkerCAD step-by-step illustrated walkthrough — step-by-step visual, print+screen — _supports: CAD module_
- [ ] **[M]** Final-project planning / storyboard sheet — activity sheet, print-PDF — _supports: Weeks 15–18_
- [ ] **[M]** Glossary reference cards — reference cards, print-PDF — _supports: all_

**Facilitator**

- [ ] **[M]** Per-week lesson plans (much content exists as site pages → PDF) — lesson plan, print-PDF — _supports: each week_
- [ ] **[M]** Final Project Rubric as fillable scoring sheet — rubric, print-PDF — _supports: Weeks 15–18_
- [ ] **[M]** Offline / low-device adaptation guide — guide, print-PDF — _supports: whole course_
- [ ] **[L]** Supply / tool list — supply list, print-PDF — _supports: whole course_

---

## Financial Literacy

`Repo: financial_literacy_for_kids · Tier A · "Resources & Printables" hub exists but on-screen only; Docusaurus 3.9.2 (upgrade gate open)`

**Curriculum-facing**

- [ ] **[H]** Needs-vs-wants sorting sheet — activity sheet, print-PDF — _supports: Weeks 1–4_
- [ ] **[H]** Printable play-money / barter cards — printable manipulatives, print-PDF — _supports: Weeks 2–3_
- [ ] **[H]** Budget / allowance tracker worksheet — worksheet, print-PDF — _supports: Weeks 9–11_
- [ ] **[H]** Digital-safety "Stop / Check / Protect" scenario cards (designed) — printable cards, print-PDF — _supports: Weeks 7+_
- [ ] **[H]** Entrepreneurship capstone planner + pitch sheet — printable booklet, print-PDF — _supports: Weeks 15–18_
- [ ] **[M]** "How money moves" flow diagram (cash→digital) — diagram, print+screen — _supports: Weeks 5–8_
- [ ] **[M]** Banking / interest / inflation infographic — infographic, print+screen — _supports: Weeks 12–14_
- [ ] **[M]** Glossary reference cards; coin/value coloring-labeling page — reference / labeling, print-PDF — _supports: all_

**Facilitator**

- [ ] **[M]** Per-week lesson plans — lesson plan, print-PDF — _supports: each week_
- [ ] **[M]** Checkpoint answer keys — answer key, print-PDF — _supports: each unit_
- [ ] **[M]** Capstone rubric scoring sheet — rubric, print-PDF — _supports: Weeks 15–18_
- [ ] **[M]** Equity-language facilitator card — guide, print-PDF — _supports: whole course_
- [ ] **[L]** Pacing guide — pacing guide, print-PDF — _supports: whole course_

---

### Tier B — Solid sites, thinner scaffolding

---

## Civic Literacy

`Repo: civic_literacy_for_kids · Tier B · blocking nav/footer items verified correct in installed template; live deploy state unverified`

**Curriculum-facing**

- [ ] **[H]** Three-branches / checks & balances labeled diagram — diagram, print+screen — _supports: Weeks 5–9_
- [ ] **[H]** "How a bill becomes law" step-by-step process visual — process visual, print+screen — _supports: Weeks 5–9_
- [ ] **[H]** Local-government map / roles worksheet — worksheet, print-PDF — _supports: Weeks 10–12_
- [ ] **[H]** Community-problem proposal capstone pack — printable booklet, print-PDF — _supports: Weeks 15–18_
- [ ] **[M]** Rights & responsibilities matching / sorting sheet — activity sheet, print-PDF — _supports: Weeks 1–4_
- [ ] **[M]** Mock-trial role cards + courtroom-layout diagram + script template — printable kit, print-PDF — _supports: bonus module_
- [ ] **[M]** Glossary reference cards — reference cards, print-PDF — _supports: all_

**Facilitator**

- [ ] **[H]** Per-week lesson plans — lesson plan, print-PDF — _supports: each week_
- [ ] **[H]** Nonpartisanship facilitator guidance card — guide, print-PDF — _supports: whole course_
- [ ] **[M]** Capstone + mock-trial rubrics — rubric, print-PDF — _supports: Weeks 15–18 / bonus_
- [ ] **[L]** Supply list — supply list, print-PDF — _supports: whole course_
- [ ] **[L]** Pacing guide — pacing guide, print-PDF — _supports: whole course_

---

## Legal Literacy

`Repo: legal_literacy_for_kids · Tier B · og:image=logo.svg confirmed broken; repo description already "18-Week" (verified 2026-06-04)`

**Curriculum-facing**

- [ ] **[H]** Anatomy-of-a-contract labeled diagram (offer / acceptance / consideration) — diagram, print+screen — _supports: Weeks 4–7_
- [ ] **[H]** Fill-in contract template (kid scenario) — worksheet, print-PDF — _supports: Weeks 4–7_
- [ ] **[H]** Mock-trial kit: role cards, courtroom-layout diagram, evidence sheets, script, age-appropriate case — printable kit, print-PDF — _supports: Weeks 15–18_
- [ ] **[M]** "Rule of Law vs Rule of Man" compare worksheet — activity sheet, print-PDF — _supports: Weeks 1–3_
- [ ] **[M]** Precedent / "version control" process visual — process visual, print+screen — _supports: Weeks 8–10_
- [ ] **[M]** Rights "firewall" infographic — infographic, print+screen — _supports: Weeks 11–14_
- [ ] **[M]** Glossary reference cards — reference cards, print-PDF — _supports: all_

**Facilitator**

- [ ] **[H]** Per-week lesson plans — lesson plan, print-PDF — _supports: each week_
- [ ] **[H]** Mock-trial facilitator guide + rubric — guide + rubric, print-PDF — _supports: Weeks 15–18_
- [ ] **[M]** Answer keys — answer key, print-PDF — _supports: each unit_
- [ ] **[L]** Pacing guide — pacing guide, print-PDF — _supports: whole course_

---

## Emotional & Social Literacy

`Repo: emotional_and_social_literacy_for_kids · Tier B · og:image=logo.svg confirmed broken; intro references facilitator guides not yet published`

**Curriculum-facing**

- [ ] **[H]** Reflective-journal weekly entry sheet — worksheet, print-PDF — _supports: all weeks_
- [ ] **[H]** Feelings / emotion identification chart (kid-friendly) — reference chart, print+screen — _supports: Weeks 1–4_
- [ ] **[H]** "Amygdala hijack / pause-and-reset" step-by-step visual — process visual, print+screen — _supports: Weeks 1–4_
- [ ] **[H]** Conflict-as-system-mismatch diagnostic worksheet — worksheet, print-PDF — _supports: Weeks 15–18_
- [ ] **[M]** "Social capital ledger" tracking sheet — activity sheet, print-PDF — _supports: Weeks 9–11_
- [ ] **[M]** Communication / "network effect" scenario cards — printable cards, print-PDF — _supports: Weeks 12–14_
- [ ] **[M]** Glossary reference cards — reference cards, print-PDF — _supports: all_

**Facilitator**

- [ ] **[H]** Consolidated facilitator guide as downloadable PDF — guide, print-PDF — _supports: whole course_
- [ ] **[H]** Sensitive-discussion facilitator guidance — guide, print-PDF — _supports: whole course_
- [ ] **[M]** Per-week lesson plans — lesson plan, print-PDF — _supports: each week_
- [ ] **[L]** Pacing guide — pacing guide, print-PDF — _supports: whole course_

---

## Health Systems Literacy

`Repo: health_literacy_for_kids · Tier B · og:image=logo.svg confirmed broken; logo only, no hero banner`

**Curriculum-facing**

- [ ] **[H]** Personal telemetry / baseline log (heart rate, sleep, temp) — lab record sheet, print-PDF — _supports: Weeks 1–3_
- [ ] **[H]** Homeostasis / negative-feedback-loop labeled diagram — diagram, print+screen — _supports: Weeks 1–3_
- [ ] **[H]** Labeled body-systems diagrams (digestive / immune / circulatory / sleep) — diagram, print+screen — _supports: Weeks 4–14_
- [ ] **[H]** Macronutrient "different inputs, different jobs" sorting sheet — activity sheet, print-PDF — _supports: Weeks 4–7_
- [ ] **[H]** Personal observation-protocol design + results booklet — printable booklet, print-PDF — _supports: Weeks 15–18 (capstone)_
- [ ] **[H]** Safety / medical-disclaimer handout (self-observation only, not diagnosis) — reference handout, print-PDF — _supports: whole course_
- [ ] **[M]** Immune-system "cybersecurity" infographic — infographic, print+screen — _supports: Weeks 8–10_
- [ ] **[M]** Sleep-architecture / circadian diagram — diagram, print+screen — _supports: Weeks 11–14_
- [ ] **[M]** Glossary reference cards; vocab / labeling pages — reference / labeling, print-PDF — _supports: all_

**Facilitator**

- [ ] **[H]** Per-week lesson plans — lesson plan, print-PDF — _supports: each week_
- [ ] **[H]** Sensitive-topics facilitator guidance (body image / illness / food) — guide, print-PDF — _supports: whole course_
- [ ] **[M]** Measurement-tool supply list — supply list, print-PDF — _supports: whole course_
- [ ] **[M]** Answer keys — answer key, print-PDF — _supports: each unit_
- [ ] **[M]** Capstone rubric scoring sheet — rubric, print-PDF — _supports: Weeks 15–18_
- [ ] **[L]** Pacing guide — pacing guide, print-PDF — _supports: whole course_

---

### Tier C — Confirm live Docusaurus deploy before commissioning asset work

---

## Media Literacy

`Repo: media_literacy_for_kids · Tier C · local repo has docusaurus.config.js + deploy.yml; live-site HTML not verified; PREREQ: close the Docusaurus live-deploy gate in §2 first`

**Curriculum-facing**

- [ ] **[H]** "Deconstruct an ad / message" analysis worksheet — worksheet, print-PDF — _supports: Weeks 1–4_
- [ ] **[H]** Clickbait / attention-economy annotated example sheet — reading handout, print+screen — _supports: Weeks 5–8_
- [ ] **[H]** Lateral-reading / fact-check checklist card — reference card, print-PDF — _supports: Weeks 9–11_
- [ ] **[M]** "How an algorithmic feed works" infographic — infographic, print+screen — _supports: Weeks 12–14_
- [ ] **[M]** Media-production planning / storyboard sheet — activity sheet, print-PDF — _supports: Weeks 15–18_
- [ ] **[M]** AI-generated-media spotting guide — reference handout, print+screen — _supports: extension_
- [ ] **[M]** Glossary reference cards — reference cards, print-PDF — _supports: all_

**Facilitator**

- [ ] **[H]** Per-week lesson plans (post-deploy) — lesson plan, print-PDF — _supports: each week_
- [ ] **[M]** Answer keys / discussion guides — answer key, print-PDF — _supports: each unit_
- [ ] **[M]** Project rubric — rubric, print-PDF — _supports: Weeks 15–18_
- [ ] **[L]** Pacing guide — pacing guide, print-PDF — _supports: whole course_

---

## Decision Literacy

`Repo: decision_literacy_for_kids · Tier C · local repo has docusaurus.config.js + deploy.yml; live-site HTML not verified; PREREQ: close the Docusaurus live-deploy gate in §2 first`

**Curriculum-facing**

- [ ] **[H]** Decision Journal weekly entry sheet — worksheet, print-PDF — _supports: all weeks (course spine)_
- [ ] **[H]** Probability hands-on activity sheets (dice / coins / spinners) — lab/activity sheet, print-PDF — _supports: Weeks 1–4_
- [ ] **[H]** Cognitive-bias "spot the trap" reference cards — reference cards, print-PDF — _supports: Weeks 5–8_
- [ ] **[M]** Expected-value / decision-matrix worksheet — worksheet, print-PDF — _supports: Weeks 9–11_
- [ ] **[M]** Prisoner's-Dilemma / Tragedy-of-Commons game board + tokens — printable game, print-PDF — _supports: Weeks 12–14_
- [ ] **[M]** Decision-tree template — worksheet, print-PDF — _supports: extension_
- [ ] **[M]** Optimization-project planner — printable booklet, print-PDF — _supports: Weeks 15–18_
- [ ] **[M]** Glossary reference cards — reference cards, print-PDF — _supports: all_

**Facilitator**

- [ ] **[H]** Per-week lesson plans (post-deploy) — lesson plan, print-PDF — _supports: each week_
- [ ] **[M]** Answer keys — answer key, print-PDF — _supports: each unit_
- [ ] **[M]** Project rubric — rubric, print-PDF — _supports: Weeks 15–18_
- [ ] **[L]** Pacing guide — pacing guide, print-PDF — _supports: whole course_

---

## 5. Maintenance

Check items off as built; include completion date in the commit message. Grep confirmed zero `.pdf` files committed in any repo as of 2026-06-04 — no backlog items are pre-satisfied.
