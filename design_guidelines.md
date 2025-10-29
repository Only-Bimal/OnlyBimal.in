# Design Guidelines: Professional Portfolio Website for Bimal

## Design Approach

**Selected Approach:** Design System (Material Design principles with Apple HIG influences)

**Rationale:** This portfolio website is information-dense, requiring excellent content hierarchy and readability. The design should project professional credibility while ensuring technical details are easily scannable. Material Design's structured approach combined with Apple's minimalist aesthetic creates an ideal foundation for a senior developer's portfolio.

**Key Design Principles:**
- Content-first architecture with clear information hierarchy
- Professional credibility through refined typography and generous spacing
- Scannable layouts for technical information
- Timeless aesthetic that won't feel dated

---

## Typography System

### Font Selection
- **Primary Font:** Inter or SF Pro Display (via Google Fonts CDN)
- **Monospace Font:** JetBrains Mono for code references and technical details

### Typography Hierarchy

**Page Titles:** 
- Desktop: text-5xl (48px), font-bold, tracking-tight
- Mobile: text-4xl (36px), font-bold

**Section Headings:**
- Desktop: text-3xl (30px), font-semibold
- Mobile: text-2xl (24px), font-semibold

**Subsection Headings:**
- Desktop: text-xl (20px), font-semibold
- Mobile: text-lg (18px), font-semibold

**Body Text:**
- Standard: text-base (16px), font-normal, leading-relaxed
- Small: text-sm (14px) for metadata and labels

**Technical Details/Labels:**
- text-sm (14px), font-medium, uppercase tracking-wide for categories
- text-base font-mono for technology tags

---

## Layout System

### Spacing Primitives
**Core Spacing Units:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6, p-8
- Section spacing: py-16, py-20, py-24 (desktop), py-12 (mobile)
- Element gaps: gap-4, gap-6, gap-8
- Margins: mb-4, mb-6, mb-8, mb-12

### Grid System
- **Container:** max-w-6xl mx-auto px-6 lg:px-8
- **Content Width:** max-w-4xl for text-heavy sections
- **Two-Column Layouts:** grid grid-cols-1 lg:grid-cols-2 gap-8

### Page Structure
Each page follows consistent structure:
1. Navigation header (sticky)
2. Page hero section with title and brief intro
3. Main content area with clear sections
4. Footer with contact information

---

## Component Library

### Navigation
**Desktop Navigation:**
- Sticky header with blur backdrop effect
- Horizontal menu with text-base font-medium links
- Logo/name on left, nav items center-right
- Subtle underline indicator for active page
- Height: h-16, padding: px-8

**Mobile Navigation:**
- Hamburger menu icon (use Heroicons)
- Full-screen overlay menu
- Vertical stack of nav items with generous spacing (gap-8)

### Hero Sections

**Homepage Hero:**
- Full-width section with subtle gradient background treatment
- Centered content with max-w-4xl
- Professional headshot image (rounded-full, w-32 h-32 or w-40 h-40)
- Name in text-6xl font-bold
- Title/role in text-2xl font-light
- Brief summary in text-lg leading-relaxed, max-w-2xl
- CTA buttons: primary "View Projects" + secondary "Download Resume"
- Vertical spacing: py-24 lg:py-32

**Page Heroes (Interior Pages):**
- Streamlined header with page title and subtitle
- No large images, focus on typography
- Breadcrumb navigation
- Vertical spacing: py-16 lg:py-20

### Project Cards (Experience Page)

**Card Structure:**
- Border with rounded corners (rounded-lg)
- Padding: p-6 lg:p-8
- Hover effect: subtle elevation change
- Grid layout: grid grid-cols-1 lg:grid-cols-3 gap-12

**Card Content Hierarchy:**
1. Project number badge (small, rounded pill)
2. Project title (text-2xl font-semibold, mb-4)
3. Client/Company info (text-sm, mb-4)
4. Technology stack (flex flex-wrap gap-2, small pills)
5. Timeline badge
6. Team size indicator
7. Description (text-base leading-relaxed)
8. Responsibilities list (bulleted, ml-4)

### Technology Tags
- Inline-flex items-center
- Small rounded pills (rounded-full px-3 py-1)
- text-xs font-medium
- Use for: programming languages, frameworks, databases, tools

### Skills Grid

**Layout:**
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Grouped by category (Languages, Databases, Tools, etc.)

**Skill Category Cards:**
- Category header with icon (Heroicons)
- List of skills with proficiency indicators
- Padding: p-6, border rounded-lg

### Timeline Component (Education/Experience)

**Structure:**
- Vertical timeline with connecting line
- Left: Date/period indicators
- Right: Content cards
- Responsive: stacks vertically on mobile

### Contact Section

**Layout:**
- Two-column: Contact form (left) + Info card (right)
- Mobile: Stacks vertically

**Contact Info Card:**
- Email with icon (Heroicons mail icon)
- Phone with icon (Heroicons phone icon)
- Location optional
- Social links (if applicable)
- Padding: p-8, border rounded-lg

### Footer
- Three-column layout (desktop): About | Quick Links | Contact
- Mobile: Stack vertically
- Links in footer navigation
- Copyright notice
- Padding: py-12, border-top

---

## Images

**Homepage Hero Image:**
- Professional headshot photograph
- Size: 160x160px (w-40 h-40)
- Shape: Circular (rounded-full)
- Placement: Centered above name
- Style: Professional, clean background, business casual attire

**No other images required** - Content is text-focused. All other visual elements use typography hierarchy and spacing.

---

## Page-Specific Guidelines

### Homepage
- Hero with photo and introduction
- Summary section (max-w-3xl, centered)
- Key highlights grid (3 columns on desktop): Years of Experience, Projects Completed, Technologies Mastered
- Featured projects preview (3 cards)
- CTA to full experience page

### Experience Page
- Page hero with title "Professional Experience"
- Filter/sort options (optional timeline view toggle)
- All 13 projects displayed as detailed cards
- Chronological order (newest first)
- Pagination or "load more" if needed

### Skills Page
- Page hero with title "Technical Skills"
- Categorized skill groups in grid
- Each category shows proficiency levels
- Tools & frameworks section
- Certifications/training section

### Education & Qualifications
- Timeline view of education
- Professional certifications section
- Personal development/courses section
- Academic qualifications with institutions

### Contact Page
- Page hero
- Two-column layout: Form + Contact card
- Form fields: Name, Email, Subject, Message
- Submit button
- Direct contact information card

---

## Accessibility & Interaction

- Focus states: Visible outline for keyboard navigation
- Form validation: Inline error messages below fields
- Loading states: Subtle spinners for async actions
- Link hover states: Underline text-decoration
- Button states: Transform scale on hover (scale-105)
- Smooth scrolling: scroll-smooth on html element

---

## Responsive Breakpoints

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Navigation: Hamburger menu below lg breakpoint
- Grids: Single column on mobile, multi-column on lg+
- Typography scales down one size on mobile
- Padding reduces by 25-30% on mobile