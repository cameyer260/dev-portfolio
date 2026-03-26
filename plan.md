# Example Industry Landing Pages

This file is temporary branch guidance for the `/examples` work.

It reflects the direction the branch actually took after the original family-and-variant approach started producing pages that felt too visually similar.

## Current Direction

The examples system now follows this rule:

- share infrastructure
- share content schema
- share theme tokens
- share small page primitives
- do not force all 11 industries through one finished page template

In practice that means:

- one route system
- one content/data system
- one metadata system
- one mobile CTA pattern
- one image asset convention
- per-industry page renderers for composition and section treatment

The goal is still reuse, but reuse now stops before it flattens the UI.

## What Changed From The Original Plan

The original plan leaned heavily on:

- one shared page shell
- a family theme system
- a small set of section variants

That was directionally right for structure, but it was too rigid for presentation.

What changed:

- The branch no longer treats theme families as the main layout engine.
- The branch now uses per-industry page renderers with shared primitives.
- Real image file paths replaced generated placeholder art.
- `docs/examples/DESIGN.md` is now a lighter art-direction document instead of a highly prescriptive layout rulebook.

## Current Architecture

### Routing

- `app/examples/page.tsx`
- `app/examples/[industry]/page.tsx`

### Renderer Layer

- `components/examples/page-renderer.tsx`
- one renderer per industry slug inside that file

### Shared Primitives

- `components/examples/FallbackImage.tsx`
- `components/examples/page-primitives.tsx`
- `components/templates/MobileCallBar.tsx`
- `components/templates/template-shared.tsx`

### Content / Data

- `lib/examples/types.ts`
- `lib/examples/content/*.ts`
- `lib/examples/index.ts`
- `lib/examples/metadata.ts`

### Image Convention

- `public/examples/{slug}/hero.jpg`
- `public/examples/{slug}/proof.jpg`

The exact asset list lives in `docs/examples/IMAGE_ASSETS.md`.

## Phase Status

### Phase 0: Direction + Design Rules

Status: complete

Completed:

- Separated main portfolio rules from `/examples` rules
- Reframed `docs/examples/DESIGN.md` around art direction instead of rigid section templates
- Confirmed that the examples should share primitives, not one finished layout

### Phase 1: Content Model + Base Examples Infrastructure

Status: complete

Completed:

- Shared TypeScript schema for example content
- Shared examples registry and slug lookup
- Examples index route
- Dynamic industry route
- Metadata generation
- Mobile CTA behavior

### Phase 2: Shared Template Rescue

Status: complete

Completed:

- Retired the shared page template as the active render path
- Swapped the route to a slug-based renderer
- Introduced industry-specific compositions while preserving shared infrastructure
- Kept theme tokens for color/type consistency without using them as a one-size-fits-all layout system

### Phase 3: Real Image Integration

Status: complete

Completed:

- Replaced generated art data URLs with real asset paths
- Added visible missing-image placeholders for absent files
- Documented exact image filenames and locations
- Wired the examples gallery cards to use actual hero imagery

### Phase 4: Base Demo Coverage

Status: complete

Completed:

- All 11 industries have content/config entries
- All 11 industries render through the current examples system
- Real images have now been added for the current hero/proof slots

### Phase 5: Per-Site QA And Polish

Status: in progress

This is the current phase.

Goals:

- Review each industry page as its own sales asset
- Fix layout issues that are now visible with real photography
- Tighten spacing, hierarchy, crop behavior, and CTA clarity
- Improve any section that still feels generic, awkward, or inconsistent

Current known reality:

- The pages are much stronger than the original shared-template version
- The remaining work is page-specific polish, not architecture rescue

### Phase 6: Cleanup + Final Documentation

Status: in progress

Goals:

- Keep docs aligned with the renderer-based direction
- Remove or archive legacy assumptions from the old template/variant plan
- Clean up any dead example-template code once the new system is fully stable

## What Should Be Shared Going Forward

- routes
- content schema
- metadata
- image asset conventions
- CTA/button primitives
- card primitives
- form rendering primitives
- spacing/layout helpers
- mobile call bar

## What Should Not Be Over-Abstracted

- hero layout
- proof section treatment
- testimonial presentation
- how imagery is weighted on the page
- section rhythm
- page tone

If a new abstraction makes multiple industries feel more interchangeable, it is probably the wrong abstraction.

## Current Success Criteria

The branch is successful when:

- every example page feels distinct enough to show to a real prospect
- the examples still share maintainable infrastructure
- the pages use believable photography
- the examples index is visually strong
- mobile CTA behavior remains clear
- tailoring a page after a client meeting is still straightforward

## Next Work

Focus next on page-by-page polish, not system reinvention.

Recommended order:

1. Review each of the 11 pages with real images in place
2. Fix the worst visual/crop/hierarchy issues first
3. Tighten the strongest sales pages first:
   plumber, contractor, restaurant, law firm
4. Once the pages feel stable, remove or archive any legacy shared-template code that is no longer part of the active path

## AI Guidance For Future Turns

When working on this branch:

- read `AGENTS.md`
- read `docs/examples/DESIGN.md`
- read `docs/examples/IMAGE_ASSETS.md`
- treat `plan.md` as the current branch truth

Important:

- do not try to revive the old “one shared finished template” approach
- do not add new abstraction layers unless they clearly improve both maintainability and distinctness
- prefer solving page-specific issues directly when the problem is page-specific
