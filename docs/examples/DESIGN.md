# Examples Design Rules

This file defines the design direction for `/examples` pages only.

It applies to:

- `app/examples`
- `components/examples`
- `components/templates` when used by the examples system
- `lib/examples`

It does not apply to the main portfolio pages.

## Purpose

The examples system should share infrastructure and conversion behavior without making every site look like the same finished template.

The current implementation uses per-industry page renderers with shared primitives. These rules should support that approach, not push the codebase back toward one shared finished page shell.

The reusable parts are:

- routes
- metadata
- contact form behavior
- sticky mobile phone CTA
- spacing primitives
- buttons
- cards
- copy schema

The non-reusable parts are:

- hero composition
- section rhythm
- image layout
- proof presentation
- the emotional tone of the page

## Core Rules

- Every example should feel like a real local-business lead-gen site.
- Keep the standard section sequence unless there is a clear reason to adjust presentation:
  hero, services, why choose us, testimonials, process, service area, CTA, contact.
- Share primitives, not full finished page sections.
- Use real photography or a visible placeholder for missing photography.
- Never generate fake illustration-style “artwork” as production imagery.
- Mobile conversion matters more than visual tricks.
- Keep a strong CTA above the fold.
- Avoid startup-product styling, dashboards, purple gradients, and generic glassmorphism unless a page explicitly calls for a departure.

## Real Images

- Every example page should be wired to real file paths under `public/examples/{slug}/`.
- If a file is missing, the UI should show a visible “add real photo” placeholder instead of inventing an image.
- Prefer believable business photography:
  interiors, staff, equipment, service moments, finished work, neighborhood context.
- Avoid obviously AI-looking imagery, abstract artwork, and generic mockup scenes.

## Layout Guidance

- Each industry should have its own page composition.
- A theme family can inform color and typography, but it should not dictate one exact hero or one exact services layout.
- Vary where the image weight sits:
  some pages should be hero-image-first, some split, some proof-image-led.
- Vary how proof is shown:
  stat block, quote feature, checklist, service credibility rows, or review cards.
- Vary density:
  emergency-service pages should feel faster and more direct than restaurant, salon, or real-estate pages.

## Industry Direction

Restaurant:

- Warm, atmospheric, image-led
- The page should sell the room as much as the menu
- Use softer rhythm and more breathing room

Salon:

- Gallery-forward, stylish, appointment-first
- Use a more editorial, beauty-oriented image balance
- Keep the tone polished rather than loud

Real estate:

- Premium, calm, trust-heavy
- Put more weight on consultation and local expertise
- The page should feel established, not flashy

Plumber:

- Urgent, direct, phone-first
- Make the first screen resolve uncertainty quickly
- Trust markers should appear early

Contractor:

- Capable, sturdy, project-driven
- Show finished-work confidence and scope clarity
- Strong before-hire credibility matters more than polish for its own sake

Auto repair:

- Fast, trustworthy, no-nonsense
- The page should feel operational and credible
- Keep the tone practical and local

Accountant:

- Clear, advisory, competent
- More composed than plumber or auto repair
- Should feel like a steady professional relationship

Law firm:

- Restrained, serious, premium
- Fewer loud treatments, more measured hierarchy
- Consultation flow should feel formal and credible

Dentist:

- Clean, reassuring, high-trust
- Brighter and friendlier than law firm
- Keep clinical calm without feeling cold

Gym:

- High-energy, result-oriented, intense
- Big type and stronger contrast are appropriate
- The page should feel momentum-driven

Landscaping:

- Visual, transformation-led, outdoor-project focused
- Put more weight on finished work and curb appeal
- It should feel aspirational but grounded

## Anti-Patterns

- Do not make every page use the same hero layout.
- Do not make every services section the same card pattern.
- Do not rely on text-only mockups when the page should be sold by imagery.
- Do not let a theme family become a one-size-fits-all template.
- Do not add visual rules that are so strict they flatten the industry differences.
