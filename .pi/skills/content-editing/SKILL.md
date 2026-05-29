---
name: content-editing
description: Use when editing portfolio/resume content - hero title/location, about copy, contact details, skill lists, experience bullets, education, certifications, awards, and links. If the change touches structure, styling, layout, accessibility, or behavior, also use development and possibly design-system.
---

# Content Editing

Use this skill for portfolio and resume content changes.

## Scope

Use for edits to:

- hero name, title, and location
- about copy
- contact details and profile links
- skill categories and skill lists
- experience roles, companies, dates, and bullets
- education
- certifications
- awards
- content links

If the edit changes component structure, styling, layout, accessibility semantics, or behavior, also use `.pi/skills/development/SKILL.md` and, when UI-related, `.pi/skills/design-system/SKILL.md`.

## Voice and editing stance

- Preserve the user's voice.
- Make requested edits by default.
- Suggest tighter wording when useful, but do not rewrite large sections without confirmation.
- Keep copy concise, professional, specific, evidence-led, and low-buzzword.
- Preserve factual accuracy over sounding impressive.
- Avoid generic phrases like "passionate", "dynamic", "rockstar", and "ninja".
- Keep Australian/New Zealand spelling when already present.

## Experience bullet guidance

Experience bullets should generally follow:

> action → scope/system/context → outcome/impact

Good bullets are action-oriented and specific. Do not invent impact.

If impact is unknown:

- keep it qualitative, or
- ask the user for evidence before strengthening the claim.

Never invent:

- metrics
- confidential details
- production scale
- internal names
- business impact
- private incident details

Ask first if a stronger claim needs evidence.

## Content location

For now, keep content where it already lives. Edit existing colocated arrays, objects, and copy inside feature components.

Do not introduce a central content file unless the user asks or a refactor is explicitly in scope.

Common locations:

- `src/features/Hero.tsx`
- `src/features/About.tsx`
- `src/features/Contact.tsx`
- `src/features/Skills.tsx`
- `src/features/Experiences.tsx`
- `src/features/CertsAward.tsx`

## Validation

- Pure text/data edits: full validation is usually not required.
- Inspect affected components and tests when relevant.
- If rendered structure changes or tests may rely on edited text, run `npm run dev:verify`.
- If editing links or contact details, manually sanity-check href/label consistency in code.

## Final response

Include:

- changed files
- what content changed
- validation run, or why validation was skipped
- any wording suggestions not applied
