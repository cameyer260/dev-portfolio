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

- The homepage pricing section is structured as three main comparison cards: `Business Website`, `Growth Website`, and `Custom Software / Advanced Website`.
- `Maintenance & Hosting` is presented as a separate support offer below the main three cards, not as a fourth directly comparable build tier.
- All offers are starting points, not rigid one-size-fits-all packages.
- The pricing structure should stay simple enough for local small businesses to understand quickly.
- `Growth Website` is the main website offer for businesses that want a more custom design and a stronger lead-generation structure.
- `Custom Software / Advanced Website` is a separate custom-scoped lane for higher-complexity websites, integrations, or software-style work.
- `Business Website` should feel like the approachable entry-level option for a local business that mainly needs a clean, credible web presence.
- The main risk is scope creep, not technical feasibility. Proposal language should define deliverables clearly enough that a client cannot quietly turn one tier into a much larger engagement.
- Promise deliverables and setup work, not rankings, lead volume, or other outcomes outside direct control.

### Business Website

Starting point for a simple brochure-style business website.

Homepage positioning:
- For simple, professional small-business sites that make it easy for people to find the business and get in touch.

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

`Clean, modern layout built for easy browsing`
- Fast load, simple navigation, obvious next steps, readable structure, and basic accessibility-minded implementation.
- Professional visual presentation with good spacing, hierarchy, typography, and sensible brand styling.
- Does not imply a fully custom brand identity process or a deeper marketing strategy engagement.

### Growth Website

Starting point for a more tailored marketing website intended to convert more visitors into leads.

Homepage positioning:
- For businesses that want a more custom design and stronger lead-generation structure.

`Everything in Business Website`
- Includes all `Business Website` deliverables and baseline expectations.

`Custom design tailored to your business`
- More tailored visual design and section structure than a simple brochure layout.
- Meant to feel intentionally built for that business, not like a lightly modified entry-level site.

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

`Clear calls to action throughout the site`
- More than a single hero button.
- Calls to action should appear intentionally throughout the site so visitors always have a clear next step.

### Custom Software / Advanced Website

Separate quote lane for work that goes beyond a standard small-business marketing site.

Homepage positioning:
- For businesses that need more than a standard website, with a more advanced or involved build.

`Advanced websites with custom scope`
- Use this when the build is still website-facing, but the page count, content structure, feature set, or planning needs go well beyond the standard website tiers.
- This can include more complex content structure, custom user flows, or a more involved build than a normal brochure or lead-generation site.

`Booking systems, forms, and connected tools`
- Use when the website needs more involved third-party tool connections than a basic contact form setup.
- Examples can include booking systems, advanced intake forms, CRM-connected forms, or other business tools that shape how the site works.

`Dashboards and internal tools`
- Internal-use interfaces, admin-style tools, reporting views, or business workflows that are not just public marketing pages.
- If a project starts to behave like software, it should live in this lane.

`Integrations and custom workflows`
- Data connections between the website and other systems, or custom workflow logic that goes beyond a normal marketing-site scope.
- Quote these based on integration complexity, testing needs, and edge cases.

`Tracking or content guidance when the project calls for it`
- More advanced tracking setup, content structure help, or page-planning guidance can be included here when it is part of a larger custom engagement.
- Do not quietly roll broad strategy work into the fixed-price website tiers.

### Maintenance & Hosting

Ongoing service for clients who want hosting, support, and straightforward updates after launch.

Homepage positioning:
- Ongoing hosting, updates, and support to keep the website running smoothly after launch.

`Hosting and routine website upkeep`
- Hosting should keep the site live, fast, and maintained without the client needing to manage technical details.
- This is an ongoing service, not a one-time launch task.

`Software and security updates`
- Keep framework, dependency, and platform-level updates on a reasonable maintenance cadence.
- Focus on reliability and risk reduction, not promising zero issues forever.

`Text, photo, and small content edits`
- Straightforward updates such as swapping images, updating hours, editing copy, or making small page-level adjustments.
- Larger redesigns, new pages, or major functionality changes should still be quoted separately.

`Form checks and help when something needs attention`
- Reasonable support for contact forms, submission issues, or routine website questions.
- This should feel like practical small-business support, not enterprise retainers or unlimited consulting.

Guidance:
- Keep `Custom Software / Advanced Website` custom-scoped.
- Do not quietly absorb software-style builds into fixed website pricing.
- Sell `Maintenance & Hosting` as a clean recurring service unless it is intentionally bundled for a limited period.
- In the homepage layout, `Maintenance & Hosting` should read as a support add-on or ongoing service, not as a direct alternative to the three main build offers.

### Scope Boundaries To Keep In Proposals

- Hosting, domain, premium plugin, and third-party SaaS costs should usually be billed separately unless explicitly bundled.
- Revision rounds should be defined explicitly.
- Client-provided items such as logo, images, legal text, and core business information should be called out.
- SEO setup should never be described as a ranking guarantee.
- Delivery timeline should depend on the speed of client feedback and content delivery.
- Maintenance should be sold as a separate recurring service unless an ongoing support arrangement is intentionally included.
- E-commerce, blogs, memberships, custom CMS work, and software features should be called out explicitly if included.
- Accessibility-minded implementation is good practice, but that is not the same as selling a formal compliance audit unless specifically scoped.

### Positioning Notes

- The pricing model is appropriate for selling local-business websites as a technically strong solo developer using Next.js and Vercel.
- The offers should sell speed, clarity, design quality, reliability, and clean implementation.
- The safest sales posture is to be confident about build quality and process while staying precise about what is and is not included.

## License

MIT License Copyright (c) 2026 Christopher Meyer
