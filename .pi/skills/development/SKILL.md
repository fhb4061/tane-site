---
name: development
description: Use for any non-trivial code change in this portfolio app - adding features, refactoring components, changing app structure, updating shared primitives, or modifying behavior. Not required for tiny copy-only edits unless the edit touches structure or styling.
---

# Development Harness

Use this skill to guide non-trivial development work in this repo.

## Core loop

Follow a lightweight disciplined loop:

1. Inspect
2. Plan
3. Implement
4. Validate
5. Summarize

## 1. Inspect

- Read `AGENT.md` before making non-trivial changes.
- Inspect relevant source files before editing.
- Prefer understanding current behavior from code and tests over guessing.
- If UI, styling, shared components, accessibility, or responsive behavior are touched, load and follow `.pi/skills/design-system/SKILL.md`.

## 2. Plan

- Identify the smallest safe change that satisfies the request.
- Decide whether tests need updates before editing.
- Avoid broad rewrites unless the user asked for them or the existing design requires it.

## 3. Implement

- Make focused edits only; avoid unrelated cleanup.
- Keep components simple, typed, and functional.
- Prefer structured data arrays for repeated portfolio content.
- Do not edit `dist/` unless explicitly asked.

## 4. Validate

Use moderate strictness:

- Tiny copy-only edit: full validation is usually not required.
- Normal component/content-structure change: run `npm run dev:verify`.
- Meaningful app, shared-component, or workflow change: run `npm run check`.

Testing expectations:

- Add or update tests when behavior, rendered structure, accessibility semantics, or shared components change.
- Do not require tests for pure copy edits, simple class tweaks, or non-behavioral cleanup unless existing tests need updating.

## 5. Summarize

In the final response, include:

- changed files
- what changed
- validation command(s) run and result
- any follow-up notes or skipped validation rationale
