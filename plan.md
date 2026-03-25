# Example Industry Landing Pages

## Goal

Add an `/examples` showcase route to the portfolio with 11 example local-business landing pages that demonstrate what upgraded client sites could look like.

Each example should feel like a real lead-generation site, not just a visual mockup.

## Industries

- Restaurants
- Plumbers
- Contractors
- Auto repair
- Dentists
- Law firms
- Gyms
- Salons
- Landscaping
- Real estate
- Accountants

## Core Requirements

- Add an `/examples` page that lists all demo industries and links to each landing page.
- Add one page per industry at `/examples/[industry]`.
- Keep the codebase highly reusable and config-driven.
- Make each demo easy to tailor after a client meeting.
- Reuse structure and logic without making every demo look visually identical.
- Optimize for mobile first.
- Include local SEO language where appropriate, especially Edwardsville, Glen Carbon, and nearby service areas.

## Universal Page Structure

Every industry page should follow this skeleton:

1. Hero
2. Services
3. Why Choose Us
4. Testimonials
5. Process
6. Service Area
7. CTA section
8. Contact form + phone

Notes:

- Process is optional, but preferred when it strengthens the page.
- Every page should prioritize conversion over novelty.
- These are lead machines, not generic brochure pages.

## Shared UX / Conversion Rules

- Big CTA above the fold
- Sticky mobile `Call Now` button
- Real-looking testimonials
- Strong trust language
- Clear service-area section
- Mobile UX must be excellent since most traffic will likely be mobile

## Reuse Strategy

The shared system should standardize structure, not force every page into the same exact visual presentation.

What should be shared:

- Route structure
- Content schema
- Universal section order
- Form / contact behavior
- Mobile call bar behavior
- Metadata / SEO generation
- Base layout primitives and responsive spacing rules

What should vary by industry:

- Color palette
- Typography feel
- Hero composition
- Image treatment
- Card styling
- Trust-section presentation
- CTA wording and emphasis
- Overall visual tone

Implementation goal:

- Reuse the system, not the final appearance
- Avoid one generic UI skin across all 11 demos
- Each demo should feel tailored to its niche while still following the same conversion-focused structure

## Recommended Workflow

Best speed-to-quality setup for this branch:

- Use Google Stitch for visual direction and design-system planning
- Use `docs/examples/DESIGN.md` to lock in UI rules before code generation
- Use AI in the terminal / VS Code with repo access to implement the actual code
- Build one reusable page system with themes and section variants instead of 11 separate codebases

High-level approach:

- Do not design all 11 pages from scratch in code
- Use Stitch to create a small number of visual directions
- Turn those directions into reusable design rules in `docs/examples/DESIGN.md`
- Have AI implement the shared system and fill in the industry configs
- Spend extra polish time only on the highest-value demo pages

This should produce stronger UI faster than trying to invent every page live in the editor.

## Tooling Strategy

### Google Stitch

Use Stitch for:

- Hero layout ideas
- Color and typography direction
- Section composition ideas
- Fast exploration of multiple visual directions
- Producing design rules that can be translated into `docs/examples/DESIGN.md`

Do not use Stitch as a second codebase or try to fully handcraft all 11 demos inside it.

### DESIGN.md

Use `docs/examples/DESIGN.md` as the single source of truth for how AI should style and compose the example pages.

Its purpose is to:

- Prevent generic AI UI output
- Keep the code consistent across multiple AI sessions
- Preserve the look and feel while still allowing industry-specific variation
- Make future edits faster when tailoring a demo into a real client site

### AI Coding Tool

Use your terminal / VS Code workflow with repo access for implementation.

Preferred use:

- Use AI to build the shared page shell
- Use AI to create the theme and variant system
- Use AI to build reusable sections and routes
- Use AI to convert industry content into config objects
- Use AI to polish page-level implementation once the rules are defined

## Visual Direction Plan

Instead of inventing 11 unrelated designs, create 2 to 4 reusable visual families.

Suggested visual families:

- Warm / editorial: restaurant, salon, real estate
- Bold / trust-first: plumber, contractor, auto repair, accountant
- Premium / professional: law firm, dentist
- Energetic / performance: gym, landscaping

This gives enough variation to avoid cloned pages without exploding the implementation scope.

## DESIGN.md Plan

Create `docs/examples/DESIGN.md` before implementation starts.

The file should define:

- Typography pairings
- Color rules by theme family
- Spacing rhythm
- Border radius rules
- Card treatment rules
- Button styles
- Section emphasis rules
- Mobile CTA behavior
- Industry tone notes
- Banned patterns

Rules to include so AI does not drift:

- No default SaaS layouts
- No purple gradients
- No generic glassmorphism unless intentionally chosen
- Do not reuse the exact same card style across all industries
- Restaurants should feel visual and appetite-driven
- Plumbers should feel urgent and trust-heavy
- Law firms should feel restrained, premium, and serious
- Salons should feel gallery-forward and style-led
- Mobile CTA must remain visible and tappable

For each industry, define:

- 3 mood words
- 1 palette direction
- 1 typography direction
- 1 image treatment
- 1 CTA tone
- 2 anti-patterns

This is enough structure to meaningfully improve AI-generated UI.

## How To Create DESIGN.md

1. Create `docs/examples/` if it does not already exist.
2. Create a new file at `docs/examples/DESIGN.md`.
3. Add a short purpose statement at the top explaining that this file defines the visual system for all `/examples` pages only.
4. Add global UI rules:
   layout rhythm, spacing scale, grid preferences, button behavior, card behavior, image handling, and mobile CTA rules.
5. Add theme-family rules:
   warm/editorial, bold/trust-first, premium/professional, energetic/performance.
6. Add one subsection per industry with:
   mood, palette, typography tone, section emphasis, CTA tone, and anti-patterns.
7. Add a short "do not do this" section to block generic AI habits.
8. When prompting AI to implement pages, explicitly tell it to follow `docs/examples/DESIGN.md`.

The point of `docs/examples/DESIGN.md` is not to be perfect or overly formal. It is a persistent visual rulebook for the examples system only.

## How To Use Google Stitch

Goal:

- Use Stitch to quickly explore visual directions, not to manually design every final page

Suggested process:

1. Start by creating only 2 to 4 direction boards, not 11 full projects.
2. Make one direction for each visual family.
3. Prompt Stitch with the business objective, target user feeling, and industry tone.
4. Generate hero and section concepts first.
5. Ask Stitch for alternate palettes, type directions, and section treatments.
6. Save the strongest ideas and write them down as rules in `docs/examples/DESIGN.md`.
7. Only after the rulebook is stable should AI start coding.

What to include in a Stitch prompt:

- Business type
- Primary conversion goal
- Desired emotional tone
- Mobile-first requirement
- Local business context
- Section priorities
- Things to avoid

Example prompt structure:

- Create a mobile-first landing page direction for a local Edwardsville plumbing company
- The goal is emergency phone calls and estimate requests
- It should feel urgent, trustworthy, and highly credible
- Prioritize a strong above-the-fold CTA, trust badges, service cards, testimonial proof, and service area coverage
- Avoid generic startup styling, soft gradients, and decorative clutter

After generating concepts in Stitch:

- pick the best hero composition
- pick the best palette direction
- pick the best typography tone
- pick the best card style
- convert those decisions into written rules inside `docs/examples/DESIGN.md`

## AI Prompting Plan

Once `docs/examples/DESIGN.md` exists, AI should be prompted against it every time.

Prompting pattern:

- Tell AI to read `docs/examples/DESIGN.md`
- Tell AI which theme family and industry it is implementing
- Tell AI which route or component to build
- Tell AI to preserve the universal section structure
- Tell AI to keep the page conversion-focused and mobile-first
- Tell AI to avoid banned patterns from `docs/examples/DESIGN.md`

AI should not be asked to "make it look good" with no constraints.
AI should be asked to implement a specific page or section while following the visual system.

### Reusable Phase Prompt

Use this prompt when you want AI to complete a specific implementation phase from this plan:

```text
Task: Complete Phase X from `plan.md` for this repo. Read the phase definition, execute the AI-owned tasks end to end, and move the implementation forward as far as possible in the current turn.

Context:
- This repo is a Next.js developer portfolio site.
- The `/examples` area is a reusable local-business landing page showcase system.
- The implementation plan, architecture, task split, and success criteria are defined in `plan.md`.
- The scoped visual system for the examples pages is defined in `docs/examples/DESIGN.md`.
- Durable repo-level AI guidance is defined in `AGENTS.md`.
- The main portfolio UI and the `/examples` UI are separate design contexts.

Constraints:
- Read `AGENTS.md`, `plan.md`, and `docs/examples/DESIGN.md` before making implementation decisions.
- Complete the requested phase according to the plan, not a reinvented plan.
- Execute AI-owned tasks directly instead of stopping at analysis when the work can be done safely.
- Preserve the existing main portfolio design unless the requested phase explicitly requires changes there.
- Apply `/examples` design rules only to the examples system.
- Reuse structure, content schema, themes, and variants instead of building one-off pages.
- If you encounter tasks in the implementation plan that are assigned to me, explicitly tell me what they are, why they matter, and how to do them briefly.
- If a user-owned task blocks further implementation, stop at the right boundary and state exactly what I need to do next.
- If a phase is only partially complete, finish the completed parts, then clearly list what remains.
- Suggest a conventional commit message after meaningful implementation work.

Output format:
- Start with a short execution summary stating what phase you are completing.
- Then include a `User Tasks` section only if the plan contains tasks for me that are relevant at this point.
- Then include a `Work Completed` section summarizing what you implemented.
- Then include a `Remaining` section with any unfinished items inside the phase.
- End with a `Suggested Commit` line if meaningful changes were made.

Quality bar:
- Follow the actual implementation plan in `plan.md`.
- Be proactive and implementation-focused, not just advisory.
- Keep the work aligned with `docs/examples/DESIGN.md` and the architecture defined in the plan.
- Surface user-owned tasks early and clearly so I know exactly what I need to do.
- Avoid generic UI, unnecessary rewrites, and vague next steps.
```

## Industry Notes

### Restaurants

- Primary goal: reservations / orders
- Visuals matter most
- Include featured dishes, menu preview, reviews, location, and hours

### Plumbers

- Primary goal: phone calls
- Emphasize urgency, trust, licensing, insurance, emergency service, and service area

### Contractors

- Primary goal: estimate requests
- Emphasize past projects, services, financing / insurance help, and testimonials

### Auto Repair

- Primary goal: appointments
- Emphasize trust, certifications, reviews, and honest pricing

### Dentists

- Primary goal: appointment booking
- Emphasize doctor intro, comfort, professionalism, insurance accepted, and testimonials

### Law Firms

- Primary goal: consultations
- Should feel more premium than the other demos
- Emphasize authority, attorney profiles, practice areas, and trust

### Gyms

- Primary goal: memberships / trials
- Emphasize programs, trainers, transformations, pricing, and motivation

### Salons

- Primary goal: appointments
- Emphasize gallery, stylists, pricing, and reviews

### Landscaping

- Primary goal: quotes
- Emphasize before/after visuals, services, service area, and testimonials

### Real Estate

- Primary goal: buyer / seller leads
- Emphasize listings, agent profile, testimonials, and local expertise

### Accountants

- Primary goal: consultations / inquiries
- Emphasize credentials, professionalism, industries served, and reliability

## Proposed Architecture

### Routes

- `app/examples/page.tsx`
- `app/examples/[industry]/page.tsx`

### Shared Components

- `components/templates/Hero.tsx`
- `components/templates/Services.tsx`
- `components/templates/WhyChooseUs.tsx`
- `components/templates/Testimonials.tsx`
- `components/templates/Process.tsx`
- `components/templates/ServiceArea.tsx`
- `components/templates/CTA.tsx`
- `components/templates/ContactSection.tsx`
- `components/templates/MobileCallBar.tsx`

### Variant-Based UI Layer

Avoid building one giant component full of industry-specific conditionals.

Preferred approach:

- One shared page shell
- Shared section primitives
- A small set of section variants
- Industry config selects the right theme and variants

Examples:

- Restaurant: warmer palette, stronger imagery, menu-style cards
- Plumber: higher-contrast trust-first layout, urgent CTA treatment
- Law firm: premium typography, restrained palette, more formal spacing
- Salon: gallery-forward presentation, softer visual rhythm

### Content / Config

Use one config file per demo so edits stay fast:

- `businessName`
- `primaryColor`
- `services[]`
- `testimonials[]`
- `ctaText`
- `phone`

Likely also needed:

- `industry`
- `slug`
- `hero`
- `subheadline`
- `trustPoints[]`
- `processSteps[]`
- `serviceAreas[]`
- `contact`
- `seo`
- `gallery` or `featuredItems`
- `theme`
- `sectionVariants`

Theme config should likely include:

- `theme.colors`
- `theme.surfaceStyle`
- `theme.radius`
- `theme.typography`
- `theme.buttonStyle`

Variant config should likely include:

- `heroVariant`
- `servicesVariant`
- `testimonialsVariant`
- `ctaVariant`
- `contactVariant`

Possible location:

- `lib/examples/`
- One shared type definition for all example configs
- One index file to export all industries and power the `/examples` listing page

Recommended additions:

- Group themes and config separately so visual rules and content are not mixed together
- Use this default structure unless implementation reveals a strong reason to change it:
- `lib/examples/data/` for industry content
- `lib/examples/themes/` for theme objects
- `lib/examples/types.ts` for shared schema
- `lib/examples/index.ts` for exports and route lookup

## Build Strategy

Build shared structure and reusable UI, but do not force one identical visual layer.

Recommended implementation boundary:

- Shared page shell
- Shared content schema
- Shared section primitives
- Small set of section variants
- One theme object per industry
- One content config per industry

Do not:

- Build one giant `Hero` component with endless industry conditionals
- Hardcode the same styling for every industry
- Create 11 separate hardcoded page implementations if the layout is mostly the same

## Implementation Plan

### Phase 0: Up-Front Design Setup

These are the tasks to do manually before asking AI to build the code.

Status: complete

Completed:

- Created the visual-family directions in Google Stitch
- Converted the selected visual directions into `docs/examples/DESIGN.md`
- Established the four reusable visual families:
  warm/editorial, bold/trust-first, premium/professional, energetic/performance
- Scoped example-specific design guidance away from the main portfolio
- Added `AGENTS.md` so future AI work knows to apply examples rules only inside the examples system

#### Tasks for me

- Create 2 to 4 visual families in Google Stitch
- Use Stitch to explore hero layouts, palette directions, typography feel, and section compositions
- Convert the strongest design decisions into `docs/examples/DESIGN.md`
- Decide the theme family for each of the 11 industries
- Decide which 4 pages deserve the most polish for pitching

Recommended highest-priority demo pages:

- Plumber
- Contractor
- Restaurant
- Law firm

These are likely the best sales tools, so they should receive the most visual attention.

#### How to do the up-front setup

1. Open Stitch and create one board per visual family, not one board per industry.
2. For each board, generate multiple hero directions and section treatments.
3. Keep only the strongest direction in each family.
4. Write down what specifically works:
   palette, contrast level, typography feel, imagery style, CTA treatment, card treatment, spacing density.
5. Create `docs/examples/DESIGN.md` and document those rules in plain language.
6. Add one short subsection per industry so AI knows how each page should differ.
7. Once `docs/examples/DESIGN.md` feels clear enough to guide implementation, stop designing and move to coding.

### Phase 1: Content Model + Shared Template

- Define a reusable TypeScript schema for example landing page data
- Build shared section components around the universal page structure
- Add a theme + variant layer so industries can share structure without sharing the exact same UI
- Make styling themeable via props / config values instead of hardcoding

#### Tasks for AI

- Create `docs/examples/DESIGN.md`-aware page architecture
- Define the shared TypeScript types for industry data, theme objects, and section variants
- Build the reusable page shell
- Build shared section components
- Build variant support without introducing giant conditional components

### Phase 2: Example Routes

- Build the `/examples` gallery page
- Build the dynamic `/examples/[industry]` route
- Connect the route to the industry config data

#### Tasks for AI

- Create the `/examples` index page
- Create the dynamic route for industry pages
- Connect slug lookup to the content config
- Add metadata generation for the examples route and each industry page

### Phase 3: Industry Content

- Create config entries for all 11 industries
- Tailor each page to its niche while keeping the same reusable system
- Make sure the demos feel meaningfully different in tone and presentation, not just copy
- Add believable testimonials, trust points, and local service-area copy

#### Tasks for AI

- Create one config object or file per industry
- Map each industry to the correct theme family
- Fill in services, testimonials, trust points, process steps, service areas, and CTA copy
- Keep content realistic enough to sell the concept without feeling fake or sloppy

#### Tasks for me

- Review the first finished page from each visual family before AI mass-produces the remaining ones
- Tighten any visual direction in `docs/examples/DESIGN.md` if the outputs start drifting or looking repetitive
- Approve or revise the highest-priority pitch pages before final polish

### Phase 4: SEO + Mobile Polish

- Add metadata for the examples listing and each industry page
- Ensure mobile-first spacing, sticky call CTA, and tap targets are strong
- Check that every page has a clear CTA above the fold

#### Tasks for AI

- Add sticky mobile call behavior
- Tighten spacing, hierarchy, and CTA visibility on mobile
- Add local SEO phrasing and metadata
- Ensure each page still follows the universal lead-generation structure

#### Tasks for me

- Manually review the mobile view of each visual family
- Check whether the CTA is obvious within the first screen
- Check that the pages still feel like local business sites rather than software landing pages

### Phase 5: Final Review

- Verify all example links work
- Verify all industry pages render with the shared template
- Check responsive behavior across mobile and desktop
- Confirm the system is easy to customize for future client work

#### Tasks for AI

- Run final implementation cleanup
- Remove repetitive styling mistakes
- Ensure the config-driven system is easy to edit
- Make sure the top-priority pitch pages get the strongest polish

#### Tasks for me

- Click through every route
- Compare demos side-by-side for visual sameness
- Verify that the best pages are pitch-ready
- Confirm that changing business name, colors, services, testimonials, CTA text, and phone can be done quickly

## Time Strategy

The goal is to improve UI quality without turning this branch into a long design project.

Recommended time allocation:

- Spend 2 to 3 hours on Stitch exploration and `docs/examples/DESIGN.md`
- Spend 1 focused session defining the reusable architecture
- Let AI implement the shared system and industry pages
- Spend your remaining manual time reviewing and polishing only the highest-value pages

This should be much faster than trying to hand-design 11 separate sites.

## Success Criteria

- 11 demo landing pages exist and are easy to browse from `/examples`
- Shared code handles the layout, sections, and theme styling
- Industry-specific content is mostly driven by config
- The demos share structure but do not feel visually cloned
- A future client version can be produced by editing content rather than rewriting components
- Mobile conversion UX is strong across all demos

## Notes

- The examples should help sell the service by showing concrete possibilities, not just describing them.
- Reusability matters, but the demos still need enough industry-specific variation to feel intentional.
- The architecture should support visual variation through themes and section variants instead of branching logic everywhere.
- The law firm example should be more premium and authoritative than the rest.
- Restaurants, salons, landscaping, and contractors need especially strong visual treatment.
- The strongest workflow is: design directions first, rulebook second, code generation third.
- The AI should always be guided by an explicit visual rule system, not open-ended prompts alone.

## Post-Implementation Notes

- Keep `AGENTS.md` as durable repo-wide AI guidance.
- Keep `docs/examples/DESIGN.md` as scoped design guidance for the examples system if it is still useful for future edits.
- Keep `plan.md` only during active implementation of this branch.
- After implementation, either remove `plan.md` or shrink it into brief notes only.
- Replace temporary planning with durable human-facing documentation, likely `docs/examples/README.md`, if the examples system needs ongoing explanation.
