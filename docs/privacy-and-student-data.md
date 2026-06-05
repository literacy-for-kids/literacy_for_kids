---
id: privacy-and-student-data
title: Privacy and Student Data
sidebar_label: Privacy and Student Data
---

# Privacy and Student Data

Literacy for Kids is designed to be used without collecting any information about students. This page explains what that means in practice.

---

## The Core Principle

**No student data is needed to use this curriculum.**

Every lesson can be run entirely through spoken discussion. Students do not need to:

- Create an account
- Log in
- Enter their name, email address, or school
- Submit written responses to a website
- Have their answers stored anywhere
- Be identified in any way

This is a deliberate design choice, not a limitation.

---

## What "No Student Data" Means in Practice

### Reflection prompts

Every reflection prompt, exit ticket, and check for understanding in this curriculum can be answered:

- **Out loud** in a conversation
- **On paper** that the student keeps or discards
- **Privately** in a personal notebook the facilitator never reads
- **Not at all** if the student isn't ready

Facilitators should never require students to share personal responses to earn participation or praise.

### Journals and logs

Some curricula (Decision Literacy, Emotional & Social Literacy, Health Literacy) encourage students to keep journals or logs. These are:

- Optional
- Personal to the student
- Never submitted to or stored by the website
- Never read by facilitators unless the student chooses to share

Tell students clearly: "Your journal is yours. I will not read it unless you want to share."

### Scenario cards and activities

Scenario activities use fictional characters and situations. Students are never asked to share real personal information about themselves, their families, or their experiences unless they choose to.

If a discussion question prompts students to share something personal, they can substitute a fictional example, say "someone I know," or pass.

---

## What the Website Collects

The Literacy for Kids sites are static HTML/CSS/JavaScript pages hosted on GitHub Pages. They collect **nothing**.

There are no:

- Analytics scripts
- Cookies (beyond what the browser sets)
- Form submissions
- User accounts
- Session tracking
- Third-party embeds that track visitors

---

## Guidance for Facilitators

### In classrooms and programs

If you are required to keep records of student learning, use your own notes, portfolios, or observation logs — not data submitted to or through this website.

Examples of privacy-respecting assessment approaches:
- Observe and note verbal participation without quoting students
- Keep your own written record of which lessons were completed
- Ask students to self-assess in their own private journal
- Use the exit-ticket prompts as oral conversations, not written submissions

### With children who are cautious about sharing

Some children are reluctant to share in group settings. That is fine. Scenario cards and discussion prompts can be answered with fictional examples. "What would a kid in a story do?" is just as useful as "What would you do?"

### With families

If parents or guardians ask about data practices, you can tell them:

> "The curriculum website does not collect any information about students. All discussion and reflection happens out loud or on paper that students control."

---

## For Developers and Contributors

If you are contributing to this project, do not add:

- Analytics (Google Analytics, Plausible, Fathom, Mixpanel, etc.)
- Form submission to external services
- Login or authentication
- `localStorage` items that store student identity or responses
- Cookies that persist across sessions
- External CDN scripts that track visitors
- Any feature that collects, stores, or transmits information about who used the curriculum

This applies to all repositories in the ecosystem. See the [Security Policy](https://github.com/literacy-for-kids/literacy_for_kids/blob/main/SECURITY.md) for more detail.

---

## Related Documents

- [Technical Style Guide](technical-style-guide.md) — explains the static-site architecture
- [Contributor Guide](contributor-guide.md) — technical standards for contributors
- [Facilitator resources](implementation-pathways.md) — how to implement the curriculum
