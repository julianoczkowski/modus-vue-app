Implementation guides
=====================

Purpose
-------
This folder stores formal implementation guides for major features. Both human developers and AI coding agents must create a guide here *before* starting large or complex work (see rules in `.cursor/rules/implementation-guides.mdc`). These guides are used for planning, review, and historical context.

When to create a guide
----------------------
Create a new guide in these cases:
- New page/view components with significant functionality
- New reusable component libraries or design-system additions
- External API/service integrations
- Authentication/authorization or security features
- State/store or routing changes
- Performance, accessibility, or infra work
- Any work estimated > ~2 hours

Filename convention
-------------------
Use kebab-case and include the date:

feature-name-YYYY-MM-DD.md

Examples:
- `user-dashboard-2025-01-15.md`
- `auth0-integration-2025-10-05.md`

Required template (summary)
---------------------------
Every guide must include the sections below. For the full template and rules, read `.cursor/rules/implementation-guides.mdc`.

- Title, date, author, status (Planning | In Progress | Complete | Archived)
- Overview & objectives (problem statement, success criteria)
- Technical architecture (component structure, data flows, state)
- Dependencies & integrations
- File structure changes
- Design system & accessibility notes (Modus components and tokens)
- Implementation plan (phases & tasks)
- Testing strategy (unit, integration, accessibility)
- Deployment considerations (build/env changes)
- Post-implementation review (lessons learned, metrics)

Quick start (create a guide)
---------------------------
Create a new markdown file and populate the template before coding:

```bash
mkdir -p implementation_guides
touch implementation_guides/feature-name-$(date +%Y-%m-%d).md
# open and complete the template
```

Checklist (before starting code)
--------------------------------
- [ ] Implementation guide created and named correctly
- [ ] Architecture and file changes documented
- [ ] Dependencies and testing strategy specified
- [ ] Stakeholder/team review requested

References
----------
- `.cursor/rules/implementation-guides.mdc` — full guidance and enforcement expectations
- `AGENTS.md` and `.github/copilot-instructions.md` — agent-specific workflows and rules

Notes for AI agents
-------------------
- Always read the guide before modifying or creating code for a major feature.
- If a guide is missing, create it using the required template and ask for a human review before making large changes.
- Update the guide as work progresses and fill the post-implementation review after completion.

---

This README is intentionally short — refer to `.cursor/rules/implementation-guides.mdc` for the authoritative, detailed rules.