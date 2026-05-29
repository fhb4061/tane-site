# Project Agent Guide

This is a project-local guide for agents working on this repo.

## Project

Personal portfolio site built with React 19, TypeScript, Vite, and Tailwind CSS v4.

## Repo map

- `src/App.tsx` — page composition
- `src/features/*` — portfolio sections/content
- `src/components/*` — shared UI primitives and layout helpers
- `src/icons/*` — custom SVG icons
- `src/index.css` — Tailwind import, theme tokens, and base styles
- `.pi/skills/*` — repo-local agent workflows
- `dist/` — generated build output

## Skill routing

- For non-trivial code changes, use `.pi/skills/development/SKILL.md`.
- For portfolio/resume content edits, use `.pi/skills/content-editing/SKILL.md`.
- For UI, styling, shared components, accessibility, or responsive work, use `.pi/skills/design-system/SKILL.md`.
- For delegated smaller tasks, use the global `subagent` tool if available.

## Hard rules

- Do not edit `dist/` unless explicitly asked.
- Keep changes focused; avoid unrelated cleanup.
- Use repo-local skills for non-trivial work.
- Validate meaningful code changes with package scripts.
- Do not create or edit .env.

## Key commands

- `npm run dev` — start local dev server
- `npm run dev:verify` — lint + tests
- `npm run check` — lint + tests + build
