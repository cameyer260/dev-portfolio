# AGENTS.md

## Project Context

- This repo is a personal developer portfolio built with Next.js.
- The main portfolio pages and the `/examples` pages are separate design contexts.
- The `/examples` section is a reusable showcase system for local-business landing page demos.

## General Rules

- Preserve the existing visual style of the main portfolio unless explicitly asked to redesign it.
- Prefer reusable, config-driven implementations over one-off hardcoded pages.
- Keep mobile behavior strong and conversion-focused where relevant.
- Avoid introducing feature-specific design rules as global repo rules unless they are meant to apply everywhere.
- After meaningful implementation work, suggest a conventional commit message the user can use for the completed changes.

## Examples Scope

When working in any of these areas:

- `app/examples`
- `components/templates`
- `lib/examples`
- `docs/examples`

Follow these rules:

- First read `docs/examples/DESIGN.md` if it exists.
- Apply example-page visual rules only to the examples system.
- Do not apply `/examples` design rules to the main portfolio pages.
- Keep the examples system easy to customize for future client work.
- Prefer shared structure, shared content schema, theme tokens, and shared page primitives.
- Do not force all examples through one finished template or one small variant matrix if that makes the pages feel cloned.
- Industry-specific page renderers are acceptable when they preserve shared infrastructure and make the examples stronger sales assets.

## Active Planning

- If `plan.md` exists, use it as temporary implementation guidance for the current branch only.
- Do not treat `plan.md` as permanent project documentation.
- After a feature is implemented, move any durable guidance into the appropriate docs and remove or shrink temporary planning files.
