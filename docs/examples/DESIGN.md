# Examples Design Rules

This file defines the visual system for `/examples` pages only.

These rules apply to:

- `app/examples`
- `components/templates`
- `lib/examples`

These rules do not apply to the main portfolio pages unless explicitly requested.

## Global Rules

- Every example page should feel like a lead-generation site for a local business, not a startup product page.
- Keep the universal page structure intact:
  Hero, Services, Why Choose Us, Testimonials, Process, Service Area, CTA section, Contact form + phone.
- Mobile conversion matters more than visual novelty.
- A strong CTA must appear above the fold.
- Sticky mobile call behavior is preferred over complex mobile navigation.
- Pages should share structure and implementation patterns without feeling visually cloned.
- Avoid default SaaS styling, purple gradients, generic glassmorphism, and dashboard-like feature grids unless a specific example explicitly needs a departure.

## Family: Warm / Editorial

Use for:

- restaurant
- salon
- real estate

Core feel:

- warm
- refined
- local
- image-led
- premium without feeling corporate
- elegant but still conversion-focused

### Typography

Primary type direction:

- Serif display headlines with a literary or editorial feel
- Clean modern sans-serif for body copy, labels, and UI

Recommended pairing from source:

- Headline: `Newsreader`
- Body and UI: `Manrope`

Rules:

- Use serif headlines for hero, major section headings, and featured quotes
- Use sans-serif for paragraph text, labels, buttons, and supporting UI
- Headlines should feel graceful and lightly luxurious, not loud
- Body copy should stay highly readable and neutral

### Color System

Source colors worth carrying forward:

- Background: `#fcf9f4`
- Primary dark green: `#173124`
- Primary container green: `#2d4739`
- Muted green: `#b0cdbb`
- Secondary taupe: `#665d56`
- Secondary container: `#ebddd5`
- Surface low: `#f6f3ee`
- Surface container: `#f0ede8`
- Surface high: `#ebe8e3`
- Surface highest: `#e5e2dd`
- Outline: `#727973`
- Tertiary warm brown: `#4e1b07`
- Accent rust: `#6b301a`

Palette rules:

- Base this family on warm cream backgrounds and deep earthy primaries
- Use one dark anchor color for text, CTA buttons, and high-emphasis areas
- Use muted green, taupe, and soft warm neutrals for surfaces
- Accent colors should feel natural and grounded, not synthetic
- Avoid bright saturated accent colors

### Layout Rhythm

Rules:

- Use generous vertical spacing and strong image breathing room
- Favor large headline moments and asymmetrical editorial composition
- Prefer mixed section rhythms instead of identical stacked cards everywhere
- Blend full-bleed hero imagery, large feature cards, smaller supporting cards, and quote-led testimonial blocks
- Keep sections visually calm and intentional

### Hero Direction

Preferred hero pattern:

- Full-width image hero
- Dark gradient overlay for text legibility
- Large serif headline with a subtle italicized phrase or secondary emphasis
- One prominent primary CTA
- Minimal supporting clutter

Rules:

- Hero should be image-first, not icon-first
- Text should sit in a grounded block near the lower portion of the hero
- CTA should be obvious but elegant
- Overlay should add contrast without making the page feel heavy

### Card and Surface Style

Rules:

- Use soft neutral surfaces instead of pure white cards everywhere
- Cards should feel refined and lightly tactile, not glossy
- Mix large feature cards with smaller stacked support cards
- Keep borders subtle or absent and let surface contrast do most of the separation
- Use shadow only where needed for emphasis
- Avoid dense dashboard-like card grids

Radius guidance:

- Section cards: medium rounded
- Inputs: medium rounded
- Chips and pills: full rounded
- Avoid exaggerated bubbly radii

### CTA Style

Rules:

- Primary CTA should use the dark family anchor color on light backgrounds
- On dark or image heroes, invert the CTA to a light button on dark overlay
- CTA text should be short, clear, and premium
- Secondary actions can use understated text-link treatment

Preferred CTA treatment:

- Rounded full primary button
- Uppercase or letter-spaced label for polish
- High contrast with minimal ornament

### Imagery Direction

Rules:

- Photography should carry a large share of the emotional tone
- Use warm, natural, premium-feeling imagery
- Favor real spaces, details, atmosphere, and lifestyle over generic iconography
- Images should feel aspirational but grounded in local business reality

Industry emphasis:

- Restaurant: plated dishes, interiors, ambiance
- Salon: hair and styling gallery, studio atmosphere, close-up detail
- Real estate: interiors, exteriors, neighborhood feel, lifestyle spaces

### Section Treatments

Services:

- Use one large featured service card and smaller supporting cards
- Services should feel curated, not mechanical

Why Choose Us:

- Pair editorial imagery with trust points
- Use one signature proof block or stat callout

Testimonials:

- Prefer one large editorial quote over a noisy carousel
- Add a simple client identity row beneath the quote

Service Area:

- Use elegant chips or pills for neighborhoods or cities
- Keep the section clean and local, not map-heavy unless needed

Contact:

- Use a split layout with relationship-focused copy beside a refined form
- Place the form in a soft neutral container, not a stark white card

### Mobile Behavior

Rules:

- Keep the hero visually strong on mobile without burying the CTA
- Preserve large-type elegance while reducing clutter and line length
- Primary CTA must remain visible early
- If a sticky mobile action is added, prefer a simple `Call Now` or `Book Now` bar
- Avoid busy app-style mobile navigation for this family

### Visual Tone To Avoid

Do not:

- use generic SaaS feature-grid styling
- use purple gradients
- use glassmorphism
- use cold tech-product iconography as the main visual language
- use over-rounded playful cards
- make every section look like the same boxed container
- use harsh black backgrounds unless explicitly overridden

### Family Variations By Industry

Restaurant:

- Push accent tones slightly toward terracotta, olive, and wine-dark neutrals
- Make imagery and menu or featured-item presentation more prominent
- CTA tone should feel inviting and appetite-driven

Salon:

- Keep the editorial structure but soften the palette slightly
- Make gallery and stylist imagery more prominent
- CTA tone should feel polished, stylish, and appointment-focused

Real estate:

- Stay closest to this source direction
- Emphasize premium trust, local expertise, and consultation flow
- Keep the hero and testimonial sections especially elegant

## Family: Bold / Trust-First

Use for:

- plumber
- contractor
- auto repair
- accountant

Core feel:

- bold
- direct
- trustworthy
- practical
- local
- conversion-first

### Typography

Primary type direction:

- Heavy geometric or neo-grotesque sans-serif headlines
- Clean utilitarian sans-serif for body copy and UI

Recommended pairing from source:

- Headline: `Epilogue`
- Body and UI: `Inter`

Rules:

- Use bold, compressed-feeling, high-impact headlines for hero and section titles
- Keep most headings uppercase or near-uppercase when it improves authority
- Use body text that feels clear and operational, not editorial
- Typography should communicate speed, competence, and certainty

### Color System

Source colors worth carrying forward:

- Background: `#f9f9fc`
- Primary navy: `#00193c`
- Primary container blue: `#002d62`
- Primary fixed blue: `#d7e2ff`
- Muted blue: `#7796d1`
- Secondary orange: `#a04100`
- Secondary container orange: `#fe6b00`
- Secondary fixed peach: `#ffdbcc`
- Surface low: `#f3f3f6`
- Surface container: `#eeeef0`
- Surface high: `#e8e8ea`
- Surface highest: `#e2e2e5`
- Outline: `#747781`
- Tertiary yellow: `#705d00`
- Tertiary container yellow: `#c9a900`

Palette rules:

- Base this family on very dark blue or slate anchor colors with one strong warm accent
- Primary emphasis should come from contrast, not visual decoration
- Accent colors should feel functional and urgent, not playful
- Use light gray and off-white surfaces to support readability and dense information
- Avoid soft or low-contrast palettes

### Layout Rhythm

Rules:

- Keep spacing tighter and more operational than the Warm / Editorial family
- Favor immediate hierarchy, compact sections, and strong visual anchors
- Use dense trust presentation early in the page
- Prioritize speed of comprehension over spacious elegance
- Let the page feel solid and capable, not airy or delicate

### Hero Direction

Preferred hero pattern:

- Dark high-contrast hero
- Strong all-business headline
- Immediate trust cue or emergency label above the headline
- Primary CTA or lead form visible in the hero
- Minimal visual ambiguity

Rules:

- The first screen should make action obvious within seconds
- Use urgent copy treatment when appropriate for service businesses
- Hero should support either a `Call Now` CTA or a compact dispatch / estimate form
- Background imagery can be subdued behind a dark overlay or texture

### Card and Surface Style

Rules:

- Use strong rectangular or lightly rounded cards
- Card layouts should feel compact, durable, and easy to scan
- Use bold contrast shifts on hover or emphasis states
- Large icons or watermark-style service symbols are acceptable when they reinforce clarity
- Use surface blocks and colored borders to show hierarchy
- Avoid soft luxury treatments and overly decorative components

Radius guidance:

- Cards: small to medium radius
- Buttons: medium radius or lightly squared
- Inputs: medium radius
- Avoid overly rounded, bubbly surfaces

### CTA Style

Rules:

- CTAs should be impossible to miss
- Primary CTA should use the warm accent color against dark or neutral backgrounds
- CTA wording should be direct and action-oriented
- Use short labels such as `Call Now`, `Get Estimate`, `Dispatch a Tech`, or `Schedule Service`
- Large tap targets and strong contrast matter more than subtle polish

Preferred CTA treatment:

- Filled accent button
- Bold uppercase or strongly weighted label
- Secondary CTA can be a phone link or text-based utility action

### Imagery Direction

Rules:

- Photography should reinforce expertise, equipment, worksites, crews, tools, vehicles, or results
- Images should feel operational and real, not staged lifestyle-first
- Desaturated or low-noise imagery works well behind dark overlays
- For trust-heavy businesses, images should support credibility rather than compete with the CTA

Industry emphasis:

- Plumber: technicians, tools, pipes, utility spaces, emergency service cues
- Contractor: project sites, finished work, crews, exterior detail, estimate-ready proof
- Auto repair: bays, technicians, shop equipment, repair detail, honest process
- Accountant: professional office, documents, advisory settings, calm trust imagery

### Section Treatments

Services:

- Use compact high-clarity service cards
- Lead with practical outcome language, not abstract branding language

Why Choose Us:

- Present trust points with icon-and-copy rows, badges, guarantees, licenses, or pricing clarity
- This section should feel evidence-driven

Testimonials:

- Use strong review blocks with rating signals and short trust-building quotes
- Avoid delicate testimonial treatments that reduce authority

Process:

- Use a simple, numbered, step-based layout
- Make the workflow feel predictable and easy

Service Area:

- Keep the service area highly visible and operational
- Service zones, neighborhood lists, or map-inspired blocks work well if they stay simple

Contact:

- Use either an immediate lead form or a highly prominent phone CTA
- Make contact actions feel urgent and low-friction

### Mobile Behavior

Rules:

- Mobile should make calling or requesting service obvious immediately
- Keep buttons large, contrast-heavy, and visible in the first viewport
- Prioritize simple conversion paths over extra navigation options
- Sticky mobile `Call Now` treatment is strongly preferred
- Reduce decorative hover-driven ideas that do not translate to touch devices

Important:

- Do not reuse the Stitch bottom-tab mobile nav for the production examples
- For this family, a sticky `Call Now` or `Get Estimate` bar is better than multi-action bottom navigation

### Visual Tone To Avoid

Do not:

- use soft startup gradients
- use pastel or low-contrast color systems
- use airy editorial spacing that weakens urgency
- use vague abstract imagery
- use subtle CTAs that blend into the layout
- use playful rounded cards or luxury styling that weakens trust

### Family Variations By Industry

Plumber:

- Use the strongest urgency and the clearest emergency CTA treatment
- Push trust badges, licensing, and phone-first behavior higher on the page

Contractor:

- Shift slightly toward project proof, finished work, and estimate request flow
- Let before-and-after visuals and project credibility carry more weight

Auto repair:

- Keep the trust-first layout, but emphasize honesty, certifications, and service clarity
- Use visuals and copy that reduce fear of being overcharged

Accountant:

- Keep the strong structure but soften the urgency slightly
- Reduce field-service aesthetics and emphasize reliability, credentials, and calm professionalism

## Family: Premium / Professional

Use for:

- law firm
- dentist

Core feel:

- premium
- restrained
- authoritative
- polished
- trustworthy
- established

### Typography

Primary type direction:

- Elegant serif headlines with formal authority
- Clean modern sans-serif for body copy, labels, forms, and supporting UI

Recommended pairing from source:

- Headline: `Noto Serif`
- Body and UI: `Manrope`

Rules:

- Use serif headlines for hero, key section headings, and quote-heavy proof sections
- Keep body copy neutral, composed, and easy to scan
- Typography should feel elevated and serious, not dramatic or trendy
- Use uppercase labels and restrained tracking for navigation, metadata, and trust cues

### Color System

Source colors worth carrying forward:

- Background: `#fcf9f6`
- Primary black: `#000000`
- Primary container navy-ink: `#111c2d`
- Secondary slate: `#516072`
- Secondary container light blue: `#d2e1f7`
- Primary fixed cool blue: `#d8e3fb`
- Surface low: `#f6f3f0`
- Surface container: `#f0edea`
- Surface high: `#eae8e5`
- Surface highest: `#e5e2df`
- Outline: `#76777d`
- Outline variant: `#c6c6cd`
- Tertiary warm accent: `#331200`
- Tertiary fixed accent: `#ffdbca`
- Accent orange for subtle premium emphasis: `#cf6721`

Palette rules:

- Base this family on warm ivory backgrounds, black or ink-dark primaries, and muted slate support tones
- Keep accents minimal and intentional
- Contrast should feel confident and precise, not loud
- Use cool gray-blue and warm ivory surfaces to create polish and separation
- Avoid bright saturated palettes or trendy color-forward styling

### Layout Rhythm

Rules:

- Use large, calm spacing with clearly framed content blocks
- Favor structured asymmetry, strong alignment, and restrained editorial composition
- Sections should feel expensive and deliberate, not busy
- Use whitespace to project confidence and control
- Let the page move at a measured pace rather than an urgent one

### Hero Direction

Preferred hero pattern:

- Premium image-backed hero or refined neutral hero with minimal clutter
- Large serif headline with one emphasized phrase or italicized refinement
- One clear consultation or appointment CTA
- Limited supporting copy, focused on authority and trust

Rules:

- Hero should feel premium first and conversion-focused second, but never weak on CTA visibility
- Use restrained overlays and subtle contrast rather than loud effects
- Keep the first screen composed and intentional
- Avoid stuffing the hero with too many proof elements

### Card and Surface Style

Rules:

- Use minimal, elegant surfaces with quiet borders and subtle contrast
- Favor layered blocks, understated shadows, or simple bordered layouts
- Cards should feel refined and structured, not chunky or utility-heavy
- Use image crops, border lines, and spacing to create hierarchy more than color fills
- Avoid loud hover states and overbuilt cards

Radius guidance:

- Cards: small to medium radius or nearly square edges
- Buttons: restrained radius
- Inputs: subtle radius or clean underline treatment
- Avoid bubbly, playful, or overly soft surfaces

### CTA Style

Rules:

- Primary CTA should feel premium and deliberate
- Use solid dark buttons or crisp outlined actions depending on section context
- CTA wording should sound formal and high-trust
- Labels such as `Request Consultation`, `Book Appointment`, or `Submit Inquiry` fit this family well
- Keep CTA design polished, crisp, and low-noise

Preferred CTA treatment:

- Strong solid primary button for key actions
- Refined outlined secondary button where appropriate
- Uppercase label treatment is acceptable when spacing and typography stay elegant

### Imagery Direction

Rules:

- Use refined, professional, high-trust imagery
- Images should support authority, composure, precision, and credibility
- Avoid loud stock-photo energy or overly casual lifestyle imagery
- Imagery should feel tailored, quiet, and high-end

Industry emphasis:

- Law firm: office interiors, attorneys, city context, legal materials, formal portraiture
- Dentist: clean clinical spaces, doctor portraits, calming treatment spaces, precise detail

### Section Treatments

Services:

- Use structured, premium service blocks with strong hierarchy and limited visual noise
- Practice area or treatment sections should feel curated and high-trust

Why Choose Us:

- Use layered content with proof, outcomes, credentials, or authority markers
- Numbers and results should be presented cleanly and confidently

Testimonials:

- Prefer elegant quote layouts over busy review cards
- Use client identity details that reinforce credibility

Process:

- Use clean, numbered methodology sections with restrained lines and spacing
- The process should feel methodical and intelligent

Service Area:

- Keep the presentation sophisticated and low-noise
- Lists, clean maps, or office-location groupings work better than playful chips

Contact:

- Forms should feel bespoke and calm
- Underline inputs, quiet borders, and strong spacing work well for this family
- The contact area should feel private, premium, and trustworthy

### Mobile Behavior

Rules:

- Maintain the premium tone on mobile without adding unnecessary complexity
- Preserve strong CTA visibility while keeping the layout calm
- Prioritize one clear mobile action instead of multiple competing actions
- Sticky mobile CTA is acceptable if it stays minimal and premium
- Reduce any navigation pattern that makes the page feel app-like

Important:

- Do not carry over the Stitch bottom mobile nav directly into production
- For this family, a minimal sticky `Request Consultation` or `Book Appointment` action is better than a two-tab mobile control bar

### Visual Tone To Avoid

Do not:

- use loud gradients
- use playful icons or shapes
- use startup-style hero patterns
- use overly dense trust bars or busy badges everywhere
- use cartoonish radii or bouncy motion
- use flashy hover states that reduce credibility

### Family Variations By Industry

Law firm:

- Stay closest to this source direction
- Emphasize authority, credentials, results, and high-stakes trust
- Keep the layout more formal and premium than all other families

Dentist:

- Keep the same premium structure, but soften the emotional tone slightly
- Introduce a cleaner, brighter clinical calm while preserving trust and professionalism
- Shift some emphasis from authority-only messaging to comfort, care, and confidence

## Family: Energetic / Performance

Use for:

- gym
- landscaping

Core feel:

- energetic
- high-performance
- bold
- results-driven
- dynamic
- action-oriented

### Typography

Primary type direction:

- Bold geometric or athletic-feeling sans-serif headlines
- Clean modern sans-serif for body copy, labels, and supporting UI

Recommended pairing from source:

- Headline: `Space Grotesk`
- Body and UI: `Manrope`

Rules:

- Use strong uppercase or high-impact display headlines for hero and major section titles
- Let headlines feel punchy, kinetic, and modern without becoming chaotic
- Use body text that stays clean and readable beneath the stronger display type
- Typography should communicate momentum, confidence, and visible results

### Color System

Source colors worth carrying forward:

- Background: `#f9f6f5`
- Inverse surface / dark base: `#0e0e0e`
- Primary burnt orange: `#ab2d00`
- Primary container orange: `#ff7851`
- Primary fixed orange: `#ff7851`
- Secondary slate: `#515d64`
- Secondary container cool gray-blue: `#d7e4ec`
- Tertiary green: `#176a21`
- Tertiary container green: `#9df197`
- Surface low: `#f3f0ef`
- Surface container: `#eae7e7`
- Surface high: `#e5e2e1`
- Surface highest: `#dfdcdc`
- Outline: `#787676`

Palette rules:

- Base this family on strong dark anchors with one bold high-energy accent
- Accent colors should feel active and forceful, not playful neon
- Orange and green are strong candidates when they support the industry naturally
- Use light neutral surfaces to keep contrast sharp and layouts readable
- The palette should feel driven and intentional, not muddy

### Layout Rhythm

Rules:

- Use dynamic section contrast and visible momentum between blocks
- Let the page alternate between dark, light, and accent-backed sections for energy
- Use large headlines, big imagery, and strong section transitions
- Keep layouts exciting but controlled
- Use visual rhythm to build momentum toward the CTA

### Hero Direction

Preferred hero pattern:

- Dark dramatic hero with strong imagery and high-contrast headline
- Large action-oriented headline with one emphasized accent word or phrase
- Primary CTA plus optional strong secondary CTA
- Minimal but high-impact support copy

Rules:

- The hero should feel bold immediately
- Use overlays and contrast to keep the typography sharp
- CTA treatment should feel assertive and motivating
- The first screen should suggest transformation, improvement, or performance

### Card and Surface Style

Rules:

- Use image-forward cards with strong overlays, contrast, and motion-ready structure
- Cards can feel more visual and dramatic than other families
- Use hover reveals, image zooms, and contrast shifts selectively for desktop
- Service and proof cards should feel substantial and outcome-focused
- Avoid overly soft or quiet surface treatments

Radius guidance:

- Cards: small to medium radius
- Buttons: medium radius or sharp-edged strong blocks
- Inputs: medium radius
- Avoid playful rounded bubble styling

### CTA Style

Rules:

- CTA styling should be high-energy and hard to ignore
- Use bold filled buttons with strong accent colors for primary actions
- Secondary CTA can be outlined or inverted, but still needs strong contrast
- CTA wording should sound active and motivating
- Labels such as `Get Free Quote`, `Start Trial`, `Book Now`, or `View Results` fit this family well

Preferred CTA treatment:

- Bold filled accent button
- Strong uppercase tracking
- Optional paired CTA layout for hero sections

### Imagery Direction

Rules:

- Use transformation-focused imagery with strong before-and-after or results emphasis
- Photography should feel active, aspirational, and high-performance
- Use dramatic contrast, environmental depth, and clear subject focus
- Images should reinforce motion, effort, visible outcome, or elevated quality

Industry emphasis:

- Gym: athletes, classes, trainers, transformations, high-energy spaces
- Landscaping: before-and-after projects, crews at work, premium outdoor spaces, visible upgrades

### Section Treatments

Services:

- Use bold, image-forward service cards with strong labels and visible visual hierarchy
- Services should feel outcome-driven and impressive

Why Choose Us:

- Use high-contrast trust messaging with strong icon rows, proof points, or standout supporting imagery
- This section should feel confident and differentiated

Testimonials and proof:

- Before-and-after visuals, transformations, and results proof should carry major weight
- Review sections should feel energetic and convincing, not delicate

Process:

- Use a direct, momentum-building process layout
- Show clear movement from first contact to visible outcome

Service Area:

- Maps and service-radius visuals work well if they feel graphic and clean
- Keep local presence visible without slowing the page down

Contact:

- Use a strong, high-contrast quote or booking section
- The contact area should feel like the decisive final push toward action

### Mobile Behavior

Rules:

- Preserve energy on mobile without making the layout chaotic
- CTA must be visible early and remain easy to tap
- Reduce hover-dependent storytelling for touch devices
- Sticky mobile CTA is strongly recommended
- Keep the mobile hierarchy bold and simple

Important:

- Do not add unnecessary bottom-tab mobile navigation for this family
- A sticky `Get Quote` or `Start Now` action is better than extra navigation controls

### Visual Tone To Avoid

Do not:

- use generic startup cards
- use over-animated gimmicks
- use muddy palettes or weak contrast
- use vague abstract shapes with no proof or transformation
- use low-energy typography
- let the page become visually chaotic

### Family Variations By Industry

Gym:

- Push the typography and CTA energy higher
- Emphasize motivation, class/program visibility, and transformation proof
- Keep the page feeling aspirational and community-driven

Landscaping:

- Keep the energy, but anchor it in visible craftsmanship and before-and-after proof
- Let imagery and transformation sections carry extra weight
- Balance the bold tone with premium outdoor-living visuals
