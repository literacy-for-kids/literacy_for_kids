# Security Policy

## About This Project

Literacy for Kids is a collection of static educational websites. There are no user accounts, no login system, no student data collection, no server-side code, no databases, and no analytics. The sites are plain HTML/CSS/JavaScript served from GitHub Pages.

---

## What We Take Seriously

Even as a static site, we take the following seriously:

- **No student data collection**: do not add forms, tracking pixels, analytics scripts, or anything that captures user behavior or identity
- **No third-party login**: do not add OAuth, Google Sign-In, or any authentication mechanism
- **No external script loading**: do not add CDN-hosted scripts from third parties
- **Content safety for children**: lesson content must be appropriate for ages 8–12

---

## Reporting a Vulnerability or Security Concern

If you discover a security concern:

1. **Open a GitHub issue** in the affected repository using the Bug Report template
2. Describe the concern clearly and without disclosing sensitive exploitation details publicly if you believe it could cause harm

For concerns that you believe should be handled privately, contact the repository maintainer via GitHub's private vulnerability reporting feature (Security › Advisories › Report a vulnerability).

---

## What Qualifies as a Security Issue?

Examples:
- A contributor PR that accidentally adds tracking, analytics, or student data collection
- A dependency with a known high-severity CVE
- A build configuration that exposes source files that shouldn't be public
- A workflow file that could expose secrets or allow unauthorized access to the deployment pipeline

Examples that are **not** security issues:
- Broken links
- Missing alt text (file as an accessibility issue instead)
- Curriculum content concerns (file as a curriculum improvement issue)

---

## Dependency Vulnerabilities

This project uses `npm audit` in CI. Moderate and low severity issues are reviewed periodically but do not block deployment. High severity issues are addressed promptly.

To check the current status:

```bash
npm audit
```

---

## Contributors: What Not to Add

When contributing, do not add:

- Google Analytics, Plausible, Mixpanel, or any other analytics/telemetry
- Forms that submit data to external services
- Login or authentication flows
- `localStorage` items that store user identity
- External CDN scripts loaded at runtime
- Tracking pixels or beacon URLs
