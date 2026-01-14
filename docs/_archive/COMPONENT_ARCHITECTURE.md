# SmileFit Phase 1 - Component Architecture

> **Focus: Maximum Reusability, Minimum Development Time**

---

## Component Hierarchy

```
app/
├── layout.tsx (Root Layout)
│   ├── <Header />
│   ├── {children}
│   └── <Footer />
│
├── page.tsx (Home)
│   ├── <HeroHome />
│   │   ├── <Button /> (shadcn)
│   │   └── <ClassCard featured />
│   ├── <Features />
│   │   └── <FeatureCard /> × 3
│   ├── <ClassPreview />
│   │   └── <ClassCard /> × 3-4
│   ├── <HowItWorksTeaser />
│   │   └── <StepCard /> × 3
│   └── <CTABanner />
│
├── classes/page.tsx
│   ├── <PageHeader />
│   ├── <ClassFilters />
│   │   ├── <Input /> (shadcn)
│   │   └── <Select /> (shadcn) × 3
│   ├── <ClassGrid />
│   │   └── <ClassCard /> × N
│   └── <CTABanner />
│
├── how-it-works/page.tsx
│   ├── <PageHeader />
│   ├── <ProcessSteps />
│   │   └── <StepCard /> × 4
│   ├── <Benefits /> (optional)
│   │   └── <FeatureCard /> × 4
│   └── <CTABanner />
│
├── instructors/page.tsx
│   ├── <PageHeader />
│   ├── <InstructorFilters />
│   │   ├── <Input /> (shadcn)
│   │   └── <Badge /> (shadcn) × N
│   ├── <InstructorGrid />
│   │   └── <InstructorCard /> × N
│   └── <CTABanner />
│
└── contact/page.tsx
    ├── <PageHeader />
    ├── <ContactInfo />
    ├── <ContactForm />
    │   ├── <Input /> (shadcn) × 3
    │   ├── <Textarea /> (shadcn)
    │   ├── <Select /> (shadcn)
    │   └── <Button /> (shadcn)
    └── (optional map/image)
```

---

## Reusability Matrix

| Component | Used On | Times Used | Priority |
|-----------|---------|------------|----------|
| `<ClassCard />` | Home, Classes | 10-15x | HIGH |
| `<CTABanner />` | All pages | 5x | HIGH |
| `<PageHeader />` | 4 pages | 4x | HIGH |
| `<Button />` (shadcn) | All pages | 20+x | HIGH |
| `<FeatureCard />` | Home, How It Works | 6-8x | MEDIUM |
| `<StepCard />` | Home, How It Works | 6-7x | MEDIUM |
| `<InstructorCard />` | Instructors | 8-12x | MEDIUM |
| `<Header />` | Global | 1x | HIGH |
| `<Footer />` | Global | 1x | HIGH |
| `<Input />` (shadcn) | Contact, filters | 5-6x | HIGH |
| `<Select />` (shadcn) | Filters | 4x | MEDIUM |

---

## Component Development Order (Optimized for Speed)

### Round 1: Critical Path (Build these first)
1. **shadcn/ui base components** (1 hour)
   - Button, Card, Input, Textarea, Select, Badge
   - `npx shadcn-ui@latest add button card input textarea select badge`

2. **Layout components** (1.5 hours)
   - `components/layout/header.tsx`
   - `components/layout/footer.tsx`
   - `components/layout/mobile-menu.tsx`
   - These unlock all pages

3. **Data files** (0.5 hours)
   - `lib/data/classes.ts`
   - `lib/data/instructors.ts`
   - `lib/data/content.ts`
   - Mock data enables parallel development

### Round 2: Reusable Cards (Build once, use everywhere)
4. **ClassCard** (1 hour)
   - `components/cards/class-card.tsx`
   - Props: image, category, schedule, title, location, instructor, price, badge
   - Unlocks: Home page, Classes page

5. **PageHeader** (0.5 hours)
   - `components/sections/page-header.tsx`
   - Props: title, subtitle, cta[]
   - Unlocks: 4 pages

6. **CTABanner** (0.5 hours)
   - `components/sections/cta-banner.tsx`
   - Props: title, subtitle, primaryCTA, secondaryCTA, variant
   - Unlocks: All pages

### Round 3: Specialized Components
7. **InstructorCard** (0.75 hours)
   - `components/cards/instructor-card.tsx`
   - Only used on Instructors page, but complex

8. **FeatureCard** (0.5 hours)
   - `components/cards/feature-card.tsx`
   - Simple icon + text card

9. **StepCard** (0.5 hours)
   - `components/cards/step-card.tsx`
   - Variant of FeatureCard with step number

### Round 4: Page-Specific Sections
10. **HeroHome** (1.5 hours)
    - `components/sections/hero-home.tsx`
    - Only on home page, but critical

11. **ContactForm** (1.5 hours)
    - `components/forms/contact-form.tsx`
    - Includes validation, state management

12. **Filter components** (1 hour)
    - `components/sections/class-filters.tsx`
    - `components/sections/instructor-filters.tsx`
    - Client-side filtering logic

**Total Component Development: ~10 hours**

---

## Detailed Component Specs

### 1. ClassCard (HIGH PRIORITY)

**File**: `components/cards/class-card.tsx`

**Purpose**: Display class information consistently across site

**Props**:
```typescript
interface ClassCardProps {
  class: {
    id: string
    image: string
    category: string
    schedule: string
    title: string
    location: string
    instructor: string
    price: number
    badge?: string
  }
  onClick?: () => void
  variant?: 'default' | 'featured'
}
```

**Features**:
- Image with aspect ratio control (next/image)
- Category badge (overlay on image)
- Optional badge (e.g., "Most Popular")
- Icon-based metadata rows
- Hover effects
- Responsive sizing
- Click handler (for modal or navigation)

**Variants**:
- `default`: Standard grid card
- `featured`: Larger, used in hero section

**Dependencies**:
- shadcn/ui Card
- next/image
- lucide-react icons (Calendar, MapPin, User)

**Reuse**:
- Home page: Featured class in hero + preview grid
- Classes page: Main grid

**Implementation Time**: 1 hour

---

### 2. CTABanner (HIGH PRIORITY)

**File**: `components/sections/cta-banner.tsx`

**Purpose**: Reusable call-to-action section

**Props**:
```typescript
interface CTABannerProps {
  title: string
  subtitle?: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  variant?: 'blue' | 'gray' | 'gradient'
}
```

**Features**:
- Multiple color variants (blue accent, gray, gradient)
- Responsive button layout
- Optional secondary CTA
- Centered content with max-width

**Variants**:
- Blue: Primary brand color background
- Gray: Subtle gray background
- Gradient: Blue to purple gradient

**Dependencies**:
- shadcn/ui Button
- Link (next/link)

**Reuse**:
- Home page: Bottom CTA
- Classes page: "Interested in a class?"
- How It Works: "Ready to get started?"
- Instructors: "Find your instructor"
- Contact: Could use if needed

**Implementation Time**: 0.5 hours

---

### 3. PageHeader (HIGH PRIORITY)

**File**: `components/sections/page-header.tsx`

**Purpose**: Consistent page title section

**Props**:
```typescript
interface PageHeaderProps {
  title: string
  subtitle?: string
  cta?: Array<{
    text: string
    href: string
    variant?: 'default' | 'outline'
  }>
}
```

**Features**:
- Centered text
- Max-width container
- Optional CTA buttons below subtitle
- Responsive typography

**Dependencies**:
- shadcn/ui Button

**Reuse**:
- Classes page
- How It Works page
- Instructors page
- Contact page

**Implementation Time**: 0.5 hours

---

### 4. InstructorCard (MEDIUM PRIORITY)

**File**: `components/cards/instructor-card.tsx`

**Purpose**: Display instructor profiles

**Props**:
```typescript
interface InstructorCardProps {
  instructor: {
    id: string
    name: string
    photo: string
    experience: string
    bio: string
    specialties: string[]
  }
  onLearnMore?: () => void
  onContact?: () => void
}
```

**Features**:
- Circular profile photo (next/image)
- Truncated bio with "read more"
- Specialty tags as badges
- Two action buttons: "Learn More" + contact icon
- Hover lift effect

**Dependencies**:
- shadcn/ui Card, Badge, Button
- next/image
- lucide-react icons (MessageCircle)

**Reuse**:
- Instructors page only

**Implementation Time**: 0.75 hours

---

### 5. FeatureCard (MEDIUM PRIORITY)

**File**: `components/cards/feature-card.tsx`

**Purpose**: Display features/benefits with icon

**Props**:
```typescript
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  variant?: 'horizontal' | 'vertical'
}
```

**Features**:
- Icon (accepts any React element)
- Title and description
- Optional horizontal/vertical layout
- Minimal styling (no heavy borders)

**Variants**:
- `vertical`: Icon top, text below (default)
- `horizontal`: Icon left, text right

**Dependencies**:
- lucide-react icons

**Reuse**:
- Home page: Features section (3x)
- How It Works: Benefits section (optional)

**Implementation Time**: 0.5 hours

---

### 6. StepCard (MEDIUM PRIORITY)

**File**: `components/cards/step-card.tsx`

**Purpose**: Process steps with numbering

**Props**:
```typescript
interface StepCardProps {
  stepNumber?: number
  icon: React.ReactNode
  title: string
  description: string
  variant?: 'numbered' | 'icon-only'
}
```

**Features**:
- Optional step number badge
- Icon
- Title and description
- Optional connecting line (CSS)

**Variants**:
- `numbered`: Shows "1", "2", "3" badge
- `icon-only`: Just shows icon

**Dependencies**:
- lucide-react icons

**Reuse**:
- Home page: How It Works teaser (3x)
- How It Works page: Main process (4x)

**Implementation Time**: 0.5 hours

---

### 7. Header (HIGH PRIORITY)

**File**: `components/layout/header.tsx`

**Purpose**: Global site header with navigation

**Features**:
- Logo (left)
- Desktop navigation (center): Home, Classes, How It Works, Instructors, Contact
- Mobile hamburger (right)
- Sticky on scroll
- Active link highlighting
- Responsive breakpoints

**State Management**:
- Mobile menu open/closed state
- Active route detection (usePathname)

**Dependencies**:
- `components/layout/mobile-menu.tsx`
- next/link
- lucide-react (Menu icon)

**Reuse**:
- Global layout (all pages)

**Implementation Time**: 1 hour

---

### 8. Footer (HIGH PRIORITY)

**File**: `components/layout/footer.tsx`

**Purpose**: Global site footer

**Features**:
- 4-column layout (desktop), stacked (mobile)
- Column 1: Logo + tagline + social icons
- Column 2: Quick links
- Column 3: Support links
- Column 4: Newsletter form (optional)
- Bottom copyright bar

**State Management**:
- Newsletter form state (if included)

**Dependencies**:
- next/link
- lucide-react (social icons)
- shadcn/ui Input, Button (for newsletter)

**Reuse**:
- Global layout (all pages)

**Implementation Time**: 1 hour

---

### 9. ContactForm (HIGH PRIORITY)

**File**: `components/forms/contact-form.tsx`

**Purpose**: Contact form with validation

**Features**:
- Fields: name, email, phone (optional), subject dropdown, message
- Client-side validation (React Hook Form or useState)
- Loading states
- Success/error messages
- Submit to `/api/contact`

**State Management**:
- Form state (values, errors, loading, success)
- Form validation

**Dependencies**:
- shadcn/ui Input, Textarea, Select, Button
- Optional: react-hook-form + zod for validation

**API Integration**:
- POST to `/api/contact/route.ts`
- Displays success/error based on response

**Reuse**:
- Contact page only

**Implementation Time**: 1.5 hours

---

### 10. ClassFilters (MEDIUM PRIORITY)

**File**: `components/sections/class-filters.tsx`

**Purpose**: Filter and search classes (client-side)

**Features**:
- Search input (filters by title, location, instructor)
- Category dropdown
- City dropdown
- Price dropdown
- Results count display
- Clear filters button

**State Management**:
- Filter state (search query, category, city, price)
- Filtered results computed from props

**Props**:
```typescript
interface ClassFiltersProps {
  classes: Class[]
  onFilter: (filtered: Class[]) => void
}
```

**Logic**:
- Filter logic runs on every state change
- Case-insensitive search
- Multiple filters combine (AND logic)

**Dependencies**:
- shadcn/ui Input, Select

**Reuse**:
- Classes page only

**Implementation Time**: 1 hour

---

### 11. InstructorFilters (MEDIUM PRIORITY)

**File**: `components/sections/instructor-filters.tsx`

**Purpose**: Filter instructors by specialty (client-side)

**Features**:
- Search input (filters by name, bio)
- Specialty tag pills (clickable badges)
- Active filter highlighting
- Results count

**State Management**:
- Active specialty filter
- Search query

**Props**:
```typescript
interface InstructorFiltersProps {
  instructors: Instructor[]
  onFilter: (filtered: Instructor[]) => void
}
```

**Dependencies**:
- shadcn/ui Input, Badge

**Reuse**:
- Instructors page only

**Implementation Time**: 0.75 hours

---

### 12. HeroHome (MEDIUM PRIORITY)

**File**: `components/sections/hero-home.tsx`

**Purpose**: Home page hero section

**Features**:
- Left: Eyebrow text, headline, subtitle, CTAs
- Right: Featured ClassCard
- Responsive (stacks on mobile)
- Background styling

**Props**:
```typescript
interface HeroHomeProps {
  featuredClass?: Class // Optional, uses first class from data if not provided
}
```

**Dependencies**:
- ClassCard component
- shadcn/ui Button

**Reuse**:
- Home page only

**Implementation Time**: 1.5 hours

---

## Component File Structure

```
src/
├── components/
│   ├── ui/                         # shadcn/ui components (auto-generated)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── select.tsx
│   │   └── badge.tsx
│   │
│   ├── layout/                     # Global layout components
│   │   ├── header.tsx             # Main header with nav
│   │   ├── footer.tsx             # Main footer
│   │   └── mobile-menu.tsx        # Mobile hamburger menu
│   │
│   ├── cards/                      # Reusable card components
│   │   ├── class-card.tsx         # Class display card (HIGH REUSE)
│   │   ├── instructor-card.tsx    # Instructor display card
│   │   ├── feature-card.tsx       # Icon + text card
│   │   └── step-card.tsx          # Numbered step card
│   │
│   ├── sections/                   # Page section components
│   │   ├── page-header.tsx        # Reusable page header (HIGH REUSE)
│   │   ├── cta-banner.tsx         # Reusable CTA section (HIGH REUSE)
│   │   ├── hero-home.tsx          # Home page hero
│   │   ├── features.tsx           # Features grid (home)
│   │   ├── class-preview.tsx      # Class preview grid (home)
│   │   ├── how-it-works-teaser.tsx # HiW teaser (home)
│   │   ├── process-steps.tsx      # Process steps (HiW page)
│   │   ├── class-filters.tsx      # Class filtering UI
│   │   ├── instructor-filters.tsx # Instructor filtering UI
│   │   └── contact-info.tsx       # Contact info sidebar
│   │
│   └── forms/
│       └── contact-form.tsx        # Contact form with validation
```

---

## Styling Strategy

### 1. Use shadcn/ui Defaults
- Minimal customization of shadcn components
- Saves development time
- Consistent design system

### 2. Tailwind Utilities
- Use Tailwind for all styling
- No custom CSS files (except globals.css)
- Responsive utilities: `sm:`, `md:`, `lg:`

### 3. Component Variants
- Use props for variants (e.g., `variant="blue"`)
- Keep variants minimal (2-3 max per component)

### 4. Consistency Tokens
Define in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#3B82F6', // Blue
  secondary: '#6B7280', // Gray
}
```

---

## State Management Strategy

### Client State Only (No Global State Needed)

1. **Form State**: Local useState or react-hook-form
2. **Filter State**: Local useState in filter components
3. **Modal State**: Local useState (if modals are used)
4. **Mobile Menu**: Local useState in Header

**No Redux, Zustand, or Context needed for Phase 1**

---

## Data Flow

### Static Data → Props → Components

```
lib/data/classes.ts (static array)
         ↓
app/classes/page.tsx (imports data)
         ↓
ClassFilters (filters data locally)
         ↓
ClassGrid (maps over filtered array)
         ↓
ClassCard (receives single class object)
```

**No API calls, no database queries**

---

## Testing Strategy (Minimal for Phase 1)

### Manual Testing Only
1. Visual testing on desktop + mobile
2. Form submission testing (contact form)
3. Link testing (all navigation works)
4. Filter testing (client-side filtering works)

### No Automated Tests Required for Phase 1
- Out of scope per PHASE_1_EXECUTION.md
- Can be added in Phase 2

---

## Performance Optimizations

### Built-in Next.js Optimizations (Free)
1. ✅ `next/image` for all images
2. ✅ `next/font` for font optimization
3. ✅ Automatic code splitting
4. ✅ Static page generation

### Manual Optimizations (Low effort)
1. ✅ Lazy loading below-the-fold content
2. ✅ Image compression (use Squoosh or ImageOptim)
3. ✅ Limit initial class/instructor cards to 9-12

### Skip for Phase 1 (Out of scope)
- ❌ Advanced caching strategies
- ❌ Service workers
- ❌ Bundle size optimization beyond defaults

---

## Accessibility Checklist

### Built-in (shadcn/ui handles most of this)
- ✅ Semantic HTML (heading hierarchy)
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation

### Manual Additions
- ✅ Alt text on all images
- ✅ Focus states on all interactive elements
- ✅ Skip to main content link (optional)

### Testing
- Run axe DevTools on each page
- Test keyboard navigation
- Ensure sufficient color contrast

---

## Critical Path for Fast Implementation

### Week 1 Focus (First 10 hours)
**Goal**: Home page and layout working

1. **Day 1** (3 hours): Setup + Layout
   - Next.js project setup
   - shadcn/ui installation
   - Header + Footer
   - Create data files

2. **Day 2** (3 hours): Core Components
   - ClassCard
   - PageHeader
   - CTABanner
   - FeatureCard

3. **Day 3** (4 hours): Home Page
   - HeroHome section
   - Features section
   - Class preview section
   - Polish and responsive

**Deliverable**: Functioning home page

---

### Week 2 Focus (Next 10 hours)
**Goal**: All pages complete

4. **Day 4** (3 hours): Classes + Instructors
   - Classes page with filters
   - Instructors page with filters

5. **Day 5** (2 hours): How It Works + Contact
   - How It Works page
   - Contact page (UI only)

6. **Day 6** (2 hours): Contact Form Backend
   - API route
   - Email service integration
   - Error handling

7. **Day 7** (3 hours): Polish + Deploy
   - Responsive fixes
   - Image optimization
   - SEO metadata
   - Vercel deployment

**Deliverable**: Complete Phase 1 site

---

## Quick Wins for Maximum Impact

### High Impact, Low Effort
1. ✅ Use shadcn/ui default styles (don't customize)
2. ✅ Copy wireframe layouts exactly (no design iteration)
3. ✅ Reuse CTABanner on every page (5 minutes per page)
4. ✅ Use lucide-react icons (don't create custom icons)
5. ✅ Use Unsplash for placeholder images (free, high quality)

### Avoid Time Sinks
- ❌ Custom animations beyond Tailwind utilities
- ❌ Complex hover effects
- ❌ Custom icon design
- ❌ Design iterations (get approval on first try)
- ❌ Advanced filtering (stick to simple string matching)

---

## Component Completion Checklist

For each component, ensure:

- [ ] TypeScript props interface defined
- [ ] Responsive on mobile + desktop
- [ ] Uses shadcn/ui components where applicable
- [ ] Follows naming conventions
- [ ] No console errors
- [ ] Works with static data
- [ ] Reusable (doesn't have hardcoded content)

---

**End of Component Architecture**

_Last Updated: 2026-01-14_
_Optimized for 20-hour development budget_
