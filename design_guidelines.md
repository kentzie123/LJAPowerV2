# LJA Power Limited Co. - Design Guidelines

## Design Approach
**Industrial Professional with Modern Contrast**: Drawing inspiration from enterprise tech companies like Siemens, Caterpillar, and Generac, combined with the clean presentation of modern SaaS platforms. The design balances industrial credibility with approachable modernism through bold yellow accents against deep blue foundations.

## Color Implementation
Use the provided color scheme decisively:
- **Backgrounds**: Primary (#0c2430), Secondary panels (#145d77)
- **Cards/Components**: #0f4b5a
- **Accent**: #f5ec19 (yellow) for CTAs, highlights, active states
- **Text**: #ffffff (headings), #a9b6bd (body text, secondary info)
- **Strategy**: Dark blue dominance with strategic yellow punctuation for CTAs and key information

## Typography System
- **Headings**: Inter or Poppins (bold, 600-700 weight)
  - H1: 3.5rem (desktop), 2.5rem (mobile)
  - H2: 2.5rem (desktop), 2rem (mobile)
  - H3: 1.75rem (desktop), 1.5rem (mobile)
- **Body**: Inter or Open Sans (regular 400, medium 500)
  - Base: 1rem (16px), Line height: 1.6
  - Large: 1.125rem for introductory paragraphs
- **Specs/Technical**: Roboto Mono for product specifications and technical data

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-20 (desktop), py-12 (mobile)
- Component gaps: gap-8 (cards), gap-6 (lists)
- Container: max-w-7xl with px-6

## Component Library

### Navigation
- Sticky header with semi-transparent backdrop blur
- Logo left, nav links center, CTA button (yellow accent) right
- Mobile: Hamburger menu with slide-in overlay
- Active page indicator with yellow underline

### Hero Sections (Per Page)
- **Home**: Full-width industrial generator image with dark overlay, centered headline + subheadline + dual CTAs (primary yellow, secondary outlined), min-height 85vh
- **About/Services/Projects**: 60vh hero with relevant imagery
- **Products/Contact**: Compact 40vh with focused messaging
- Buttons on images: Blurred background (backdrop-blur-md), no hover effects

### Feature Cards
- Card background: #0f4b5a
- Padding: p-8
- Rounded corners: rounded-lg
- Yellow accent icons (48px) top-left or centered
- Hover: Subtle lift (translate-y-1) and shadow increase
- Grid: 3 columns desktop, 2 tablet, 1 mobile

### Product Cards
- Image top (aspect-ratio 4:3)
- Specifications table with alternating row backgrounds
- Price in large yellow typography
- CTA button at bottom
- Border: 1px solid rgba(yellow, 0.2)

### Testimonial Cards
- Quote in larger italic text (#a9b6bd)
- Customer name + company in white
- Star rating in yellow
- Headshot: 64px circle, top or left
- Background: #145d77 panel

### Forms (Contact)
- Labels: white, uppercase, tracking-wide, text-sm
- Inputs: bg #0f4b5a, border #145d77, white text, focus ring yellow
- Textarea: min-height 150px
- Submit button: Full yellow with dark text, w-full or auto

### CTAs
- Primary: Yellow background (#f5ec19), dark text (#0c2430), px-8 py-4, rounded-md, font-semibold
- Secondary: Transparent with yellow border, yellow text
- Icon CTAs: Yellow icon with white text label

## Page-Specific Layouts

### Home
1. Hero with generator image
2. 3-column value propositions
3. Featured products grid (4 items)
4. Why choose us (2-column: image + benefits list)
5. Recent projects showcase
6. Testimonial carousel (3 visible)
7. CTA section with contact form preview

### Products
1. Compact hero
2. Filter/category tabs (yellow active state)
3. Product grid (3 columns, 6-9 products)
4. Each product: Image, name, key specs table, price, "View Details" CTA

### Services
1. Hero with service overview
2. Service cards grid (4 services: Installation, Maintenance, Repair, Consultation)
3. Process timeline (horizontal on desktop, vertical mobile)
4. Service packages comparison table
5. Contact CTA

### Projects & Testimonies
1. Hero
2. Project showcase: Large image cards with overlay info (client, capacity, location)
3. Case study sections (alternating image-left/right)
4. Testimonials grid (3 columns)
5. Stats counter (Projects completed, kW installed, Client satisfaction)

### Contact
1. Hero with location emphasis
2. 2-column: Contact form left, info right (address, phone, email, hours)
3. Map embed full-width
4. Alternative contact methods (WhatsApp, phone icons)

## Images
**Hero Images Required:**
- Home: Large industrial generator in operation (outdoor/facility setting), professional photography
- About: Team working with generators or facility exterior
- Products: Generator showroom or lineup
- Services: Technician servicing generator
- Projects: Completed installation at prominent location
- Contact: Office building or customer service scene

**Additional Images:**
- Product catalog: Individual generator models, white/neutral backgrounds
- Projects: 6-8 case study photos of installations
- Team: Professional headshots (About page)
- Process/service illustrations or photos

## Interaction Patterns
- Smooth scroll behavior
- Fade-in animations on scroll for sections (subtle, use sparingly)
- Image zoom on hover for product/project cards
- No distracting animations - maintain professional tone
- Loading states for form submissions

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (2 columns where applicable)
- Desktop: > 1024px (full multi-column layouts)

## Accessibility
- WCAG AA contrast compliance (yellow on dark blue meets requirements)
- Focus indicators: Yellow outline for all interactive elements
- Alt text for all generator and project images
- Semantic HTML structure
- Keyboard navigation support

This design system creates a professional, industrial-strength aesthetic that builds trust while remaining modern and approachable through strategic use of the vibrant yellow accent against authoritative deep blues.