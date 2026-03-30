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

## Services And Pricing Reference

Internal guidance for the homepage pricing tiers. The public UI stays concise; this section defines what each tier and bullet point is intended to mean so future proposals and project scoping stay consistent.

### Pricing Model Notes

- The `Starter Website`, `Growth Website`, and `Premium Digital Presence` tiers are starting points, not rigid one-size-fits-all packages.
- The pricing ladder is meant to sell increasingly custom website work for local businesses without bundling custom software into fixed-price website scopes.
- The main risk is scope creep, not technical feasibility. Proposal language should define deliverables clearly enough that a client cannot quietly turn one tier into a much larger engagement.
- Promise deliverables and setup work, not rankings, lead volume, or other outcomes outside direct control.

### Starter Website

Starting point for a simple brochure-style business website.

`3–5 page website`
- A standard small-business site such as `Home`, `About`, `Services`, `Contact`, plus one optional page like `FAQ`, `Gallery`, or `Service Area`.
- Does not automatically include a blog, member area, dashboard, advanced CMS setup, or custom application features.

`Mobile-friendly design`
- Responsive layout across phone, tablet, and desktop.
- Readable type, good spacing, tappable buttons, and no broken mobile layouts.

`Contact form for calls and emails`
- Lead form that sends submissions to the business email.
- Can include clickable phone and email actions where relevant.
- Assumes basic spam protection, not a complex CRM workflow.

`Google Maps and business information`
- Map embed when the business has a public location.
- Clear display of name, phone, address, service area, hours, and core contact details.

`Clean, modern layout`
- Professional visual presentation with good spacing, hierarchy, typography, and sensible brand styling.
- Does not imply a fully custom brand identity process.

`Built for a smooth user experience`
- Fast load, simple navigation, obvious next steps, readable structure, and basic accessibility-minded implementation.
- This means strong practical UX, not formal UX research.

### Growth Website

Starting point for a more tailored marketing website intended to convert more visitors into leads.

`Everything in Starter`
- Includes all `Starter Website` deliverables and baseline expectations.

`Fully custom design`
- More tailored visual design and section structure than a simple brochure layout.
- Meant to feel intentionally built for that business, not like a lightly modified starter template.

`Conversion-focused layout`
- Layout decisions are made to encourage calls, quote requests, bookings, or form submissions.
- Typically includes stronger hero messaging, clearer service breakdowns, repeated calls to action, and better trust signals.

`Basic SEO setup`
- Technical and on-page basics such as page titles, meta descriptions, heading structure, crawlable pages, sitemap, robots, and location/service keyword targeting on core pages.
- Can include image alt text and basic structured data where appropriate.
- Does not mean ongoing SEO services or guaranteed rankings.

`Testimonials or reviews section`
- A dedicated section for client-provided testimonials, reviews, or social proof.
- Includes placement, formatting, and presentation, not review collection.

`Clear call-to-action sections throughout the site`
- More than a single hero button.
- Calls to action should appear intentionally throughout the site so visitors always have a clear next step.

### Premium Digital Presence

Starting point for a more strategic website engagement with stronger marketing and measurement support.

`Everything in Growth`
- Includes all `Growth Website` deliverables and baseline expectations.

`Advanced SEO strategy`
- Stronger search-oriented planning such as service/location page planning, keyword-to-page mapping, internal linking recommendations, structured data improvements, and local SEO alignment.
- Can include Search Console setup or review and recommendations for future content opportunities.
- Does not mean indefinite SEO execution or guaranteed rankings.

`Content and copy guidance`
- Help deciding what each page needs to say and how sections should be structured.
- Can include headline guidance, CTA guidance, page-by-page content prompts, and refinement of client-provided wording.
- Does not automatically mean full done-for-you copywriting or deep brand messaging consulting unless separately scoped.

`Performance tracking setup`
- Setup for measurement tools such as GA4, Search Console, form-submit tracking, and click-to-call or click-to-email tracking where practical.
- This is intended to give the business visibility into important website actions, not to provide full ongoing analytics consulting.

`Integrations such as booking, forms, or other tools`
- Connection of third-party tools such as booking systems, CRM forms, newsletter forms, chat widgets, payment links, or similar business tools.
- Does not imply building custom software features under the website package price.

`Ongoing improvement plan`
- A documented roadmap for what to improve after launch.
- Can include prioritized recommendations for SEO, content, conversion improvements, and optional next-step work.
- This means a plan for future improvement, not unlimited ongoing support.

### Custom Software And Advanced Projects

Separate quote lane for work that goes beyond a standard small-business marketing site.

Typical examples:
- Booking systems
- Dashboards
- Internal tools
- API integrations

Guidance:
- Keep this category custom-scoped.
- Do not quietly absorb these builds into website package pricing.
- If a project starts to behave like software, not a marketing website, move it into this lane and quote it separately.

### Scope Boundaries To Keep In Proposals

- Hosting, domain, premium plugin, and third-party SaaS costs should usually be billed separately unless explicitly bundled.
- Revision rounds should be defined explicitly.
- Client-provided items such as logo, images, legal text, and core business information should be called out.
- SEO setup should never be described as a ranking guarantee.
- Delivery timeline should depend on the speed of client feedback and content delivery.
- Maintenance should be sold separately unless an ongoing support arrangement is included.
- E-commerce, blogs, memberships, custom CMS work, and software features should be called out explicitly if included.
- Accessibility-minded implementation is good practice, but that is not the same as selling a formal compliance audit unless specifically scoped.

### Positioning Notes

- The pricing model is appropriate for selling local-business websites as a technically strong solo developer using Next.js and Vercel.
- The packages should sell speed, clarity, design quality, reliability, and clean implementation.
- The safest sales posture is to be confident about build quality and process while staying precise about what is and is not included.

## License

MIT License Copyright (c) 2026 Christopher Meyer
