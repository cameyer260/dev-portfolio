# Christopher Meyer Portfolio

Personal portfolio site built with Next.js and Tailwind CSS. It serves two related but separate purposes:

- the main portfolio homepage at `/`, which introduces Christopher Meyer, featured software work, resume details, and contact options
- the `/examples` showcase system, which presents fictional local-business website demos for freelance sales conversations

The `/examples` pages are portfolio assets, not real client websites. The detail pages stay publicly accessible for sharing, but they are intentionally marked as fictional and excluded from search indexing.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React
- Vercel Analytics

## Routes

- `/`: main portfolio homepage
- `/examples`: index of industry-specific local-business website examples
- `/examples/[industry]`: individual fictional example site for a single industry slug
- `/robots.txt`: robots policy
- `/sitemap.xml`: sitemap for indexable routes

## `/examples` Architecture

The examples system uses shared infrastructure without forcing every industry through one finished page template.

- Route files live in `app/examples/page.tsx` and `app/examples/[industry]/page.tsx`
- Example content lives in `lib/examples/content/*.ts`
- Shared example types live in `lib/examples/types.ts`
- Example collection helpers live in `lib/examples/content/index.ts` and `lib/examples/index.ts`
- Metadata helpers live in `lib/examples/metadata.ts`
- The active page renderer map lives in `components/examples/page-renderer.tsx`
- Shared example UI primitives live in `components/examples/page-primitives.tsx`
- Shared example support components still used by the renderer system live in `components/templates/ExampleGalleryCard.tsx`, `components/templates/MobileCallBar.tsx`, and `components/templates/template-shared.tsx`

For a focused architecture note, see `docs/examples/README.md`.

## Image Assets

Example imagery is file-path driven and stored under `public/examples/{slug}/`.

- Core images: `hero.jpg` and `proof.jpg`
- Optional supporting images when referenced by content or renderer logic: `service-area.jpg` and `service-{n}.jpg`
- If an asset is missing, the UI falls back to a visible placeholder instead of inventing imagery

## Search And Indexing

- `/` remains indexable
- `/examples` remains indexable as the portfolio examples hub
- `/examples/[industry]` detail pages are marked `noindex` and removed from the sitemap because the businesses are fictional

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Useful checks:

```bash
npm run lint
npm run build
```

## License

MIT License Copyright (c) 2026 Christopher Meyer
