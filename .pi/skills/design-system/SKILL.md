---
name: design-system
description: Design system stewardship for shared UI, styling, and accessibility in this React + Tailwind codebase. Use when adding, reviewing, or refactoring shared components, Tailwind classes, typography, spacing, layout, or responsive patterns.
---

# Design System Steward

## Philosophy

**Core principle**: UI should be built from shared primitives and consistent tokens, not repeated ad-hoc styling.

Good design systems make the app:
- more consistent
- easier to extend
- more accessible
- less brittle to change

Bad design systems drift because each feature invents its own spacing, typography, layout, and component patterns.

## Anti-Pattern: One-Off Styling

**DO NOT** solve repeated UI patterns with local class soup.

This creates:
- duplicated Tailwind clusters
- inconsistent spacing and typography
- inaccessible markup
- drifting responsive behavior
- hard-to-maintain components

**Correct approach**: identify the shared pattern, then move it into a primitive, token, or shared abstraction.

```
WRONG:
  page1: class soup
  page2: similar class soup
  page3: slightly different class soup

RIGHT:
  primitive/token -> shared usage -> consistent UI
```

## Workflow

### 1. Audit

Before changing UI:

- [ ] Find existing primitives and patterns
- [ ] Check for repeated class clusters
- [ ] Check semantics and accessibility
- [ ] Check spacing, typography, and responsive consistency
- [ ] Check whether the change belongs in a shared component

Ask: **What shared pattern is this trying to express?**

### 2. Decide

Choose the smallest system-level change that fixes the issue:

- add or refine a primitive
- introduce or adjust a token
- standardize a pattern
- avoid local-only styling unless truly unique

### 3. Implement

- Update shared primitives first
- Refactor consumers to use them
- Keep APIs small
- Prefer composition over duplication
- Preserve accessibility while styling

### 4. Verify

- Confirm the UI still matches the system rules
- Check affected components together, not in isolation
- Add/update tests when behavior is observable
- Validate visual consistency after shared UI changes

## Rules

### Shared primitives first
Use existing shared UI before adding new page-level styling.

### Semantic HTML
Use correct landmarks and content elements:
`header`, `main`, `aside`, `section`, `h1-h3`, `ul`, `li`, `a`, `button`.

### Tokenized styling
Prefer established spacing, type, color, radius, and shadow patterns.

### Consistent typography
Use the shared heading system. Heading level must reflect structure, not just appearance.

### Consistent spacing
Use the same rhythm for sections, cards, and vertical gaps.

### Accessibility by default
Preserve:
- focus states
- accessible names
- keyboard support
- meaningful landmarks

### No one-off patterns
If a style cluster appears more than once, promote it into a shared primitive.

### Systematic responsiveness
Use the same breakpoint logic for the same UI role.

### Small APIs
Prefer `size`, `variant`, or `tone` over raw style control.

### Avoid single-use components
Do not extract a standalone component for a one-off presentational wrapper unless it encodes a real domain concept or repeated pattern.

## Red Flags

- repeated Tailwind class blobs
- arbitrary values without reason
- inconsistent heading sizes
- fake buttons/links/divs used for semantics
- missing focus styles
- icon-only meaning without accessible text
- special-case layout hacks in feature files

## Expected Outcome

- fewer duplicate styles
- more consistent UI
- better accessibility
- easier refactors
- clearer component boundaries
