# Current codebase notes

This codebase is a React + TypeScript + Vite portfolio site using Tailwind.

Existing shared primitives:
- `Section`
- `SectionHeader`
- `Heading`
- `Card`
- `CardHeader`
- `CardTitle`
- `CardDescription`
- `CardContent`

Current style-system concerns to watch:
- repeated utility patterns across feature components
- consistent heading hierarchy
- card/section spacing rhythm
- accessible landmarks and labels
- icon sizing and alignment consistency

Preferred approach:
- reuse primitives before adding new wrapper markup
- keep feature components mostly composition-only
- promote repeated class clusters into shared components
