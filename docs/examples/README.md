# `/examples` Architecture

`/examples` is the freelance showcase system inside this portfolio. It is built to show industry-specific local-business website directions without pretending the fictional businesses are real.

## Structure

- `app/examples/page.tsx`: examples index
- `app/examples/[industry]/page.tsx`: example detail route
- `lib/examples/content/*.ts`: per-industry content records
- `lib/examples/content/shared.ts`: shared content builders and asset path conventions
- `components/examples/page-renderer.tsx`: active renderer map for per-industry page composition
- `components/examples/page-primitives.tsx`: shared page primitives used across renderers

## Implementation Rules

- Keep shared infrastructure, shared content schema, shared theme tokens, and shared UI primitives
- Keep per-industry renderers responsible for page composition so the examples do not collapse into one rigid template
- Keep the sticky disclosure tag on every detail page because the businesses are fictional
- Keep `/examples` indexable, but keep `/examples/[industry]` detail pages `noindex` and out of the sitemap

## Assets

Store example assets under `public/examples/{slug}/`.

- Required baseline images: `hero.jpg`, `proof.jpg`
- Optional supporting images: `service-area.jpg`, `service-{n}.jpg`
