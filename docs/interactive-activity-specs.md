---
id: interactive-activity-specs
title: Interactive Activity Specifications
sidebar_label: Interactive Activity Specs
---

# Interactive Activity Specifications

This document specifies optional lightweight interactive activities for each curriculum. These are designed to be static, accessible, and GitHub Pages-compatible — no data storage, no login, no external APIs.

These specifications are ready for implementation. Each activity should be built as a standalone React component in the curriculum's `src/pages/activities/` directory, linked from the relevant lesson documentation.

---

## Implementation Constraints

All activities must:
- Work with no network requests (fully static)
- Not store or transmit any user data
- Not require login
- Work with JavaScript disabled (show a text fallback)
- Be fully keyboard-accessible
- Include ARIA labels on interactive elements
- Use only the dependencies already present in the project (React, Docusaurus/Infima CSS)
- Not significantly change the existing visual design
- Include clear visible instructions

---

## Decision Literacy

### Tradeoff Comparison Table

**Type:** Interactive comparison activity  
**Lesson connection:** Week 9 (Expected Value), Week 11 (Reversible vs. Irreversible), Week 15 (The Optimization Project)

**Description:**  
Students type in two options, then for each option add pros, cons, and rough probability/impact ratings. The table auto-formats for visual comparison. Students can print the result or screenshot it.

**No-JS fallback:** Printable blank table with same structure.

**UI:**
- Two column headers (Option A / Option B) — editable text fields
- Row labels: "Pros", "Cons", "Best case", "Worst case", "Reversible?", "My gut says"
- Each cell: free text input
- Print button

**ARIA:** All inputs labeled; table structure uses proper `<th>` / `<td>`

---

## Financial Literacy

### Budget Builder

**Type:** Simple calculation activity  
**Lesson connection:** Week 10 (Budgeting), Week 17 (Resources and Costs)

**Description:**  
Students enter a fictional weekly "income" amount and then allocate it to named categories (saving, spending, giving, and a custom category). A running total shows remaining budget. No amounts are stored.

**No-JS fallback:** Printable paper budget worksheet.

**UI:**
- Input: "My weekly budget: $___"
- Four allocation rows with label + $ input
- Running total: "Allocated: $X | Remaining: $Y"
- Reset button
- Print button

**ARIA:** Inputs are associated with labels; totals use `aria-live` regions

---

## Media Literacy

### Source Check Checklist

**Type:** Interactive checklist  
**Lesson connection:** Week 9 (Is This Real?), Week 10 (The Fact-Check Sprint), Week 11 (Spotting Fakes)

**Description:**  
Students enter a media item (headline, image, claim) into a text field, then work through a verification checklist. Each step has a yes/no/not sure toggle. At the end, a summary shows which steps were completed and any "warning" indicators (e.g., if source was not checked).

**No-JS fallback:** Printable checklist PDF/Markdown.

**Checklist steps:**
1. Who made this? (Author / publication)
2. When was this published?
3. Can I find the original source?
4. Does another trusted source report the same thing?
5. Are there signs of editing or manipulation?
6. What is the purpose of this item? (Inform / Entertain / Persuade / Sell)
7. My conclusion: Probably reliable / Uncertain / Probably not reliable

**ARIA:** Each toggle has label; summary uses descriptive text

---

## Computer Literacy

### Message Journey Sequence Sorter

**Type:** Drag-and-drop or click-to-order activity  
**Lesson connection:** Week 1 (Internet Playground), Week 12 (How Things Are Built)

**Description:**  
Students arrange the steps of what happens when a message is sent on the internet — from typing to delivery — into the correct order. Steps are cards that can be reordered. When the order is correct, a confirmation message appears.

**No-JS fallback:** Numbered list with the correct sequence visible.

**Steps (pre-written):** Type message → Press send → Message is broken into packets → Packets travel through routers → Packets reassemble at destination → Message appears on screen

**ARIA:** Drag targets labeled; keyboard-reorderable using arrow keys; confirmation announced via `aria-live`

---

## Civic Literacy

### Community Problem-Solving Flow

**Type:** Structured prompt activity  
**Lesson connection:** Week 15 (Spotting Problems Worth Solving), Week 16 (Research and Plan), Week 17 (Build Your Case)

**Description:**  
A step-through form guiding students to define a community problem and sketch a proposal. Students type into labeled fields and can print the result. Follows the Community Patch capstone structure.

**Fields:**
1. Problem: What did you notice?
2. Who is affected?
3. Why does this happen?
4. What has been tried already?
5. My proposed solution
6. What resources does it need?
7. How would we know it worked?

**No-JS fallback:** Printable planning sheet

**ARIA:** All inputs labeled; print button

---

## Legal Literacy

### Rule Builder and Stress Tester

**Type:** Interactive rule design activity  
**Lesson connection:** Week 13 (The Micro-Charter), Week 14 (Stress Testing)

**Description:**  
Students write one rule in a text field, then run it through three "stress test" scenarios (automatically generated from a small predefined set). For each scenario, students answer: Does this rule cover it? (Yes/No/Unclear) and optionally note a fix.

**Scenarios (rotating from a list of 10):** "What if two people disagree about the rule?" / "What if someone is new and didn't know the rule?" / "What if the rule has a loophole?" etc.

**No-JS fallback:** Printable rule-and-stress-test worksheet

**ARIA:** Inputs labeled; scenario text announced when loaded

---

## Emotional and Social Literacy

### Feelings-to-Needs Matcher

**Type:** Interactive sorting activity  
**Lesson connection:** Week 1–4 (Internal Telemetry), Week 8 (Signal Audit), Week 10 (Boundary Setting)

**Description:**  
A set of fictional scenarios presents "how the character felt" — students drag or click to match the feeling to one of several possible underlying needs (safety, connection, fairness, autonomy, clarity, rest). Multiple answers can be correct. No single right answer is shown — the goal is reflection, not scoring.

**No-JS fallback:** Printable scenario + matching columns

**Important:** Uses only fictional characters. Students are never asked to share their own feelings.

**ARIA:** Draggable items and drop targets labeled; keyboard drag-and-drop alternative

---

## Environmental Systems Literacy

### Cause-and-Effect Chain Builder

**Type:** Text chain activity  
**Lesson connection:** Week 1–7 (cycles and flows), Week 11–14 (linear vs. circular systems)

**Description:**  
Students type a starting condition (e.g., "A factory releases warm water into the river"), then add three to five chain steps showing cause and effect. A "+" button adds a new step. The completed chain can be printed.

**No-JS fallback:** Printable blank chain cards

**UI:** Starting box → arrow → text box → arrow → text box (add more with button)

**ARIA:** Each text box labeled as "Step N in chain"; print button

---

## Health Systems Literacy

### Health Claim Check

**Type:** Interactive checklist  
**Lesson connection:** Week 9 (Threat Response), Week 10 (Illness Story Map)

**Description:**  
Students enter a health claim they've heard (e.g., "eating carrots improves your eyesight"), then work through a structured checklist to evaluate it. Questions distinguish "what we know," "what's uncertain," and "what I'm guessing."

**Checklist steps:**
1. Where did this claim come from?
2. Does it say the body always works this way, or just sometimes?
3. Is there a real study behind it, or is it a general saying?
4. Is this claim about one person's experience or lots of people?
5. What would change my mind about this claim?
6. My confidence: High / Medium / Low / I don't know yet

**Important:** Does not ask students to evaluate their own health or body.

**No-JS fallback:** Printable evaluation worksheet

---

## Implementation Priority

If implementing all activities at once is too large for a single contribution, the recommended order is:

1. **Media Literacy Source Check Checklist** — highest immediate value, simplest to build
2. **Financial Literacy Budget Builder** — concrete and useful across settings
3. **Decision Literacy Tradeoff Table** — most broadly applicable across curricula
4. Remaining activities in curriculum order

Each activity should be treated as a separate PR.
