# SmileFit Phase 1 - Page Section Breakdowns

> **Based on wireframe visual inspiration only**
> **Adapted for Phase 1 constraints: No auth, no bookings, no payments, no database**

---

## Global Components (Used Across All Pages)

### 1. Header
**Component**: `components/layout/header.tsx`

**Elements**:
- Logo (left): "SmileFit" brand text/image
- Navigation (center):
  - Home
  - Classes (not "Find Classes" - no search/booking)
  - How It Works
  - Instructors
  - Contact
- Mobile: Hamburger menu → `components/layout/mobile-menu.tsx`

**Phase 1 Removals**:
- ❌ Login button
- ❌ Register button
- ❌ Instructor Dashboard link
- ❌ User profile icon

**Implementation Notes**:
- Fixed position on scroll (sticky header)
- Active state for current page
- Responsive: Desktop horizontal nav, mobile hamburger

---

### 2. Footer
**Component**: `components/layout/footer.tsx`

**Sections**:

**Column 1: Brand**
- SmileFit logo
- Tagline: "Connect with top fitness professionals and discover outdoor classes in your city."
- Social icons: Facebook, Instagram, Twitter (links only, static)

**Column 2: Quick Links**
- Classes
- How It Works
- Instructors
- Contact

**Column 3: Support**
- FAQ (optional static page or link to contact)
- Contact Us (link to contact page)
- Privacy Policy (optional static page)
- Terms of Service (optional static page)

**Column 4: Stay Updated**
- Newsletter signup form (email input + Subscribe button)
- Sends to email service (same as contact form)

**Bottom Bar**:
- Copyright: "© 2026 SmileFit. All rights reserved."

**Phase 1 Removals**:
- ❌ Login/account links
- ❌ Instructor dashboard links

**Implementation Notes**:
- Newsletter form is optional (can be Phase 2 if time-constrained)
- Privacy/Terms can be placeholder links or omitted if not ready

---

## Page 1: Home (`app/page.tsx`)

### Section 1: Hero
**Component**: `components/sections/hero-home.tsx`

**Elements**:
- Background: Light gray or subtle pattern
- Eyebrow text: "Find outdoor sports classes in Italian cities" (small blue text)
- Headline (large, bold):
  - "Discover and Book" (black)
  - "Outdoor Fitness" (blue accent)
  - "Classes Near You" (black)
- Subheadline: "Connect with professional trainers and join outdoor fitness classes in your city. From yoga and pilates to HIIT and bootcamps - find the perfect class for your active lifestyle."
- CTAs (buttons):
  - Primary: "Browse Classes" → links to `/classes`
  - Secondary: "Contact Us" (replace "Become an Instructor")
- Featured Class Card (right side):
  - Image
  - Badge: "Most Popular"
  - Title: "Morning Yoga in Parco Sempione"
  - Location: Milan, Italy
  - Schedule: Tue & Thu, 7:30 AM
  - Button: "View Details" → links to `/classes` (no individual class pages in Phase 1)

**Phase 1 Adaptations**:
- ❌ Remove "Book" from headline → Change to "Discover Outdoor Fitness Classes Near You"
- ❌ Replace "Become an Instructor" CTA with "Contact Us" or remove entirely
- Featured class card is static (hardcoded, not from database)

**Layout**:
- Desktop: 60/40 split (text left, card right)
- Mobile: Stack vertically (text, then card)

---

### Section 2: Features
**Component**: `components/sections/features.tsx`

**Elements**:
- Three icon + text blocks (horizontal layout):

1. **Multiple Locations**
   - Icon: Map pin
   - Text: "Classes in beautiful outdoor locations across Italian cities"

2. **Flexible Schedule**
   - Icon: Clock
   - Text: "Morning, afternoon, and evening classes to fit your lifestyle"

3. **Expert Trainers**
   - Icon: Users/people
   - Text: "Certified professionals with years of experience"

**Layout**:
- Desktop: 3 columns
- Mobile: Stack vertically or 1 column

**Implementation Notes**:
- Use shadcn/ui Card components
- Icons from lucide-react or similar

---

### Section 3: Popular Classes Preview (Optional)
**Component**: `components/sections/class-preview.tsx`

**Elements**:
- Section heading: "Popular Classes"
- Subtitle: "Discover what others are enjoying"
- 3-4 class cards in a grid (use `components/cards/class-card.tsx`)
- CTA button: "View All Classes" → `/classes`

**Class Card Structure** (detailed below in Reusable Components)

**Data Source**: `src/lib/data/classes.ts` (static array)

**Phase 1 Adaptations**:
- ❌ No "Only 3 spots left" urgency badges (implies booking)
- Show schedule and location as informational only

---

### Section 4: How It Works Teaser (Optional)
**Component**: `components/sections/how-it-works-teaser.tsx`

**Elements**:
- Heading: "Getting Started is Easy"
- 3 simple steps (icons + text):
  1. Browse Classes - Explore classes in your city
  2. Find Your Fit - Choose schedule and location
  3. Get In Touch - Contact us to join
- CTA: "Learn More" → `/how-it-works`

**Phase 1 Adaptations**:
- ❌ Remove "Book" step
- ❌ Remove "Pay" step
- Change to "Contact us to reserve your spot"

---

### Section 5: CTA Banner
**Component**: `components/sections/cta-banner.tsx`

**Elements**:
- Background: Blue accent color
- Heading: "Ready to Start Your Fitness Journey?"
- Subtext: "Join outdoor classes with expert trainers in your city"
- CTA Button: "Contact Us Today" → `/contact`

---

## Page 2: Classes (`app/classes/page.tsx`)

### Section 1: Page Header
**Component**: Inline or `components/sections/page-header.tsx`

**Elements**:
- Heading: "Outdoor Classes" (not "Find" - no search/booking)
- Subtitle: "Discover the best outdoor fitness classes in beautiful Italian cities"

---

### Section 2: Search & Filter Bar
**Component**: `components/sections/class-filters.tsx`

**Elements**:
- Search input: "Search by class name, location, or instructor..." (client-side only)
- Filter dropdowns (client-side filtering only):
  - All Categories (Yoga, Pilates, HIIT, Running, Boxing, etc.)
  - All Cities (Milan, Rome, Florence, Turin, etc.)
  - All Prices (€10-15, €15-20, €20+)
- Results count: "Showing 9 classes"

**Phase 1 Adaptations**:
- Client-side filtering only (no API calls)
- All data loaded from `src/lib/data/classes.ts`
- Price shown for informational purposes (no booking/payment)

**Implementation Notes**:
- Use React state for filtering
- Simple string matching for search
- Filters update the displayed list immediately

---

### Section 3: Class Grid
**Component**: Grid container using `components/cards/class-card.tsx`

**Elements**:
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Each card shows:
  - Class image
  - Category badge (Yoga, HIIT, etc.)
  - Schedule: "Tue & Thu · 7:30 AM"
  - Title: "Morning Yoga in Parco Sempione"
  - Location icon + text: "Parco Sempione, Milano"
  - Instructor icon + name: "Sofia Bianchi"
  - Price: "€ 15.00"
  - Button: "Learn More" (not "View Details" - no individual pages)

**Button Action**:
- Option 1: Opens modal with full class description
- Option 2: Scrolls to contact form at bottom with class pre-filled
- Option 3: Links to `/contact` with class name in URL param

**Phase 1 Adaptations**:
- ❌ Remove "Only 3 spots left" badges
- ❌ Remove "Book Now" buttons
- Price shown as "Typical class price" (informational)
- Add "Contact us to join" messaging

**Data Source**: `src/lib/data/classes.ts`

---

### Section 4: CTA Section
**Component**: Reuse `components/sections/cta-banner.tsx`

**Elements**:
- Heading: "Interested in a Class?"
- Subtext: "Contact us to learn more or reserve your spot"
- CTA: "Get In Touch" → `/contact`

---

## Page 3: How It Works (`app/how-it-works/page.tsx`)

### Section 1: Page Header
**Component**: Inline or `components/sections/page-header.tsx`

**Elements**:
- Heading: "How It Works"
- Subtitle: "Our platform connects fitness enthusiasts with expert instructors for personalized classes in your city. Here's how to get started."
- Two CTAs:
  - Primary: "Browse Classes" → `/classes`
  - Secondary: "Contact Us" (replace "Become an Instructor")

**Phase 1 Adaptations**:
- ❌ Remove "Become an Instructor" button (no auth/onboarding)
- Change to "Contact Us" if instructors want to inquire

---

### Section 2: For Fitness Enthusiasts
**Component**: `components/sections/process-steps.tsx`

**Elements**:
- Section heading: "For Fitness Enthusiasts"
- Subtitle: "Discover and join classes that fit your schedule and preferences"

**Steps** (4 cards in grid):

1. **Browse and Choose Classes**
   - Icon: Calendar
   - Description: "Explore a variety of fitness classes offered by certified instructors in your city. Filter by type, location, and date to find the perfect match for your schedule and interests."

2. **Find Available Times**
   - Icon: Clock
   - Description: "See class schedules and locations. Choose what works best for your lifestyle."
   - **Phase 1**: Remove "Book Available Time Slots" - no booking

3. **Connect with Your Instructor**
   - Icon: Message/Chat
   - Description: "Reach out to instructors or our team to learn more about the class and confirm your participation."
   - **Phase 1**: Replace payment step

4. **Attend and Enjoy**
   - Icon: Location pin
   - Description: "Show up at the outdoor location, meet your instructor, and enjoy your fitness class in the fresh air."

**Phase 1 Removals**:
- ❌ Step: "Book Available Time Slots"
- ❌ Step: "Secure and Simple Payment"
- Replace with: "Find Available Times" and "Connect with Your Instructor"

**Layout**:
- Desktop: 2x2 grid
- Mobile: Stack vertically

---

### Section 3: Why SmileFit (Optional)
**Component**: `components/sections/benefits.tsx`

**Elements**:
- Heading: "Why Choose SmileFit?"
- 3-4 benefit cards:
  - Certified instructors
  - Beautiful outdoor locations
  - Small group sizes
  - Flexible scheduling

---

### Section 4: CTA
**Component**: Reuse `components/sections/cta-banner.tsx`

**Elements**:
- Heading: "Ready to Get Started?"
- CTA: "Browse Classes" → `/classes`

---

## Page 4: Instructors (`app/instructors/page.tsx`)

### Section 1: Page Header
**Component**: Inline or `components/sections/page-header.tsx`

**Elements**:
- Heading: "Meet Our Expert Instructors"
- Subtitle: "Find the perfect fitness instructor for your needs. Browse our community of qualified professionals and start your fitness journey today."

---

### Section 2: Search & Filter Bar
**Component**: `components/sections/instructor-filters.tsx`

**Elements**:
- Search input: "Search instructors by name or specialty" (client-side)
- Category pills (filterable tags):
  - Yoga, Pilates, Meditation, HIIT, Functional Training, Strength, Dance, Zumba, Cardio
- Results count: "Showing 12 instructors"

**Implementation Notes**:
- Client-side filtering from `src/lib/data/instructors.ts`
- Click tag to filter by specialty

---

### Section 3: Instructor Grid
**Component**: Grid using `components/cards/instructor-card.tsx`

**Elements**:
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Each card shows:
  - Profile photo (circular)
  - Name: "Maria Romano"
  - Years of experience: "10 years of experience"
  - Bio (2-3 sentences): "Certified yoga and pilates instructor with 10 years of experience."
  - Specialty tags: Yoga, Pilates, Meditation
  - Button: "Learn More" (not "View Profile" - no individual pages)
  - Contact icon button (links to contact form)

**Button Actions**:
- "Learn More": Opens modal with full bio OR links to contact form
- Contact icon: Links to `/contact` with instructor name pre-filled

**Phase 1 Adaptations**:
- ❌ No individual instructor profile pages
- ❌ No "Message" button with real messaging
- ❌ No "View Profile" → show info in modal or contact form
- Use contact form for inquiries

**Data Source**: `src/lib/data/instructors.ts`

---

### Section 4: CTA
**Component**: Reuse `components/sections/cta-banner.tsx`

**Elements**:
- Heading: "Find Your Perfect Instructor"
- CTA: "Contact Us" → `/contact`

---

## Page 5: Contact (`app/contact/page.tsx`)

### Section 1: Page Header
**Component**: Inline

**Elements**:
- Heading: "Get In Touch"
- Subtitle: "Have questions about our classes or want to join? We'd love to hear from you."

---

### Section 2: Contact Info + Form (Side by Side)
**Layout**: 2 columns desktop, stacked mobile

#### Left Column: Contact Information
**Component**: `components/sections/contact-info.tsx`

**Elements**:
- **Email**:
  - Icon: Mail
  - Text: "info@smilefit.com"
  - Link: `mailto:info@smilefit.com`

- **WhatsApp** (optional):
  - Icon: Phone
  - Text: "+39 XXX XXX XXXX"
  - Link: `https://wa.me/39XXXXXXXXX`

- **Social Media**:
  - Instagram, Facebook, Twitter icons with links

- **FAQ Section** (optional):
  - "Common questions answered"
  - Link to FAQ page or expandable accordion

#### Right Column: Contact Form
**Component**: `components/forms/contact-form.tsx`

**Form Fields**:
1. Name (required)
   - Input: text
   - Placeholder: "Your full name"

2. Email (required)
   - Input: email
   - Placeholder: "your@email.com"
   - Validation: Email format

3. Phone (optional)
   - Input: tel
   - Placeholder: "+39 XXX XXX XXXX"

4. Subject (optional dropdown)
   - Options: "General Inquiry", "Join a Class", "Instructor Inquiry", "Other"

5. Message (required)
   - Textarea
   - Placeholder: "Tell us about your interest in SmileFit classes..."
   - Min length: 10 characters

6. Submit Button
   - Text: "Send Message"
   - Loading state: "Sending..."
   - Success state: "Message Sent!"

**Form Behavior**:
- Client-side validation
- Submits to `/api/contact` route
- API route sends email via Resend/SendGrid/FormSpree
- Success: Show success message (green banner or modal)
- Error: Show error message (red banner)

**Phase 1 Implementation**:
- Form posts to API route: `app/api/contact/route.ts`
- API route sends email to `info@smilefit.com`
- No database storage
- Simple rate limiting (optional)

---

### Section 3: Map or Image (Optional)
**Component**: Static image or embedded map

**Elements**:
- Decorative image of outdoor fitness class
- OR: Map showing general areas (Milan, Rome, etc.) - no real addresses

---

## Reusable Components Library

### 1. Class Card
**Component**: `components/cards/class-card.tsx`

**Props**:
```typescript
interface ClassCardProps {
  image: string
  category: string
  schedule: string // "Tue & Thu · 7:30 AM"
  title: string
  location: string
  instructor: string
  price: number
  badge?: string // "Most Popular", "New", etc.
}
```

**Elements**:
- Image (top, full width, aspect ratio 16:9 or 4:3)
- Category badge (top-left overlay on image)
- Optional badge (top-right overlay: "Most Popular", "Only 3 spots left" → remove for Phase 1)
- Schedule row (icon + text)
- Title (h3)
- Location row (icon + text)
- Instructor row (icon + text)
- Price (large, bold)
- Button: "Learn More"

**Styling**:
- shadcn/ui Card component
- Hover effect: subtle shadow/scale
- Responsive: Full width mobile, fixed width desktop

**Usage**:
- Home page (featured classes)
- Classes page (grid)

---

### 2. Instructor Card
**Component**: `components/cards/instructor-card.tsx`

**Props**:
```typescript
interface InstructorCardProps {
  photo: string
  name: string
  experience: string // "10 years of experience"
  bio: string
  specialties: string[] // ["Yoga", "Pilates"]
}
```

**Elements**:
- Profile photo (circular, centered)
- Name (h3)
- Experience (small text)
- Bio (2-3 lines, truncated)
- Specialty tags (pill badges)
- Button: "Learn More"
- Contact icon button

**Styling**:
- shadcn/ui Card component
- Centered alignment
- Hover effect: subtle lift

**Usage**:
- Instructors page (grid)

---

### 3. Page Header
**Component**: `components/sections/page-header.tsx`

**Props**:
```typescript
interface PageHeaderProps {
  title: string
  subtitle?: string
  cta?: { text: string; href: string }[]
}
```

**Elements**:
- Title (h1, centered)
- Subtitle (p, centered, max-width)
- Optional CTA buttons (centered)

**Styling**:
- Centered text
- Max width container
- Vertical padding

**Usage**:
- All internal pages (Classes, How It Works, Instructors, Contact)

---

### 4. CTA Banner
**Component**: `components/sections/cta-banner.tsx`

**Props**:
```typescript
interface CTABannerProps {
  title: string
  subtitle?: string
  primaryCTA: { text: string; href: string }
  secondaryCTA?: { text: string; href: string }
  variant?: 'blue' | 'gray' | 'gradient'
}
```

**Elements**:
- Background (colored or gradient)
- Title (h2, white or dark)
- Subtitle (optional)
- CTA buttons (primary + optional secondary)

**Styling**:
- Full-width section
- Centered content
- Contrasting buttons

**Usage**:
- Bottom of most pages
- Can be reused with different colors/text

---

### 5. Feature Card
**Component**: `components/cards/feature-card.tsx`

**Props**:
```typescript
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}
```

**Elements**:
- Icon (top, centered or left-aligned)
- Title (h3)
- Description (p)

**Styling**:
- Simple card or borderless
- Icon with accent color

**Usage**:
- Home page features section
- How It Works benefits

---

### 6. Process Step Card
**Component**: `components/cards/step-card.tsx`

**Props**:
```typescript
interface StepCardProps {
  icon: React.ReactNode
  title: string
  description: string
  stepNumber?: number
}
```

**Elements**:
- Step number badge (optional)
- Icon
- Title (h3)
- Description (p)

**Styling**:
- Numbered or icon-based
- Optional connecting line between steps

**Usage**:
- How It Works page

---

## Static Data Files Structure

### `src/lib/data/classes.ts`
```typescript
export interface Class {
  id: string
  title: string
  category: string // "Yoga", "HIIT", etc.
  image: string // "/images/classes/yoga-1.jpg"
  schedule: string // "Tue & Thu · 7:30 AM"
  location: string // "Parco Sempione, Milano"
  city: string // "Milan" (for filtering)
  instructor: string // Instructor name
  instructorId: string // For linking
  price: number
  description: string // Full description
  badge?: string // "Most Popular", "New"
}

export const classes: Class[] = [
  {
    id: "yoga-parco-sempione",
    title: "Morning Yoga in Parco Sempione",
    category: "Yoga",
    image: "/images/classes/yoga-sunset.jpg",
    schedule: "Tue & Thu · 7:30 AM",
    location: "Parco Sempione, Milano",
    city: "Milan",
    instructor: "Sofia Bianchi",
    instructorId: "sofia-bianchi",
    price: 15,
    description: "Start your day with a peaceful yoga session...",
    badge: "Most Popular"
  },
  // ... more classes
]
```

---

### `src/lib/data/instructors.ts`
```typescript
export interface Instructor {
  id: string
  name: string
  photo: string
  experience: string // "10 years of experience"
  bio: string
  specialties: string[]
  social?: {
    instagram?: string
    facebook?: string
  }
}

export const instructors: Instructor[] = [
  {
    id: "maria-romano",
    name: "Maria Romano",
    photo: "/images/instructors/maria.jpg",
    experience: "10 years of experience",
    bio: "Certified yoga and pilates instructor with 10 years of experience. Passionate about helping people find balance...",
    specialties: ["Yoga", "Pilates", "Meditation"],
    social: {
      instagram: "https://instagram.com/maria_yoga"
    }
  },
  // ... more instructors
]
```

---

### `src/lib/data/content.ts`
```typescript
export const siteContent = {
  hero: {
    eyebrow: "Find outdoor sports classes in Italian cities",
    title: "Discover Outdoor Fitness Classes Near You",
    subtitle: "Connect with professional trainers and join outdoor fitness classes in your city...",
  },
  features: [
    {
      title: "Multiple Locations",
      description: "Classes in beautiful outdoor locations across Italian cities"
    },
    // ... more
  ],
  // ... other reusable content
}
```

---

## Implementation Priority & Time Estimates

### Phase 1A: Foundation (3 hours)
1. ✅ Next.js setup with TypeScript, Tailwind, shadcn/ui
2. ✅ Create folder structure
3. ✅ Header and Footer components
4. ✅ Basic routing structure

### Phase 1B: Data & Cards (2 hours)
1. ✅ Create static data files (classes.ts, instructors.ts)
2. ✅ Build ClassCard component
3. ✅ Build InstructorCard component
4. ✅ Build reusable section components

### Phase 1C: Pages (10 hours)
1. ✅ Home page with all sections (5 hours)
2. ✅ Classes page with filtering (2 hours)
3. ✅ How It Works page (1.5 hours)
4. ✅ Instructors page with filtering (1.5 hours)
5. ✅ Contact page (1 hour - form UI only)

### Phase 1D: Contact Form Backend (2 hours)
1. ✅ API route `/api/contact`
2. ✅ Email service integration (Resend/SendGrid)
3. ✅ Form validation and error handling

### Phase 1E: Polish & Deploy (3 hours)
1. ✅ Responsive design fixes
2. ✅ Image optimization
3. ✅ SEO metadata
4. ✅ Vercel deployment
5. ✅ Testing

**Total: ~20 hours**

---

## Key Phase 1 Adaptations Summary

| Wireframe Feature | Phase 1 Adaptation |
|-------------------|-------------------|
| "Find Classes" page | → "Classes" (no search backend) |
| "Login" button | → REMOVED |
| "Register" button | → REMOVED |
| "Instructor Dashboard" | → REMOVED |
| "Book Now" buttons | → "Learn More" or "Contact Us" |
| "Only 3 spots left" badges | → REMOVED (implies booking) |
| Individual class detail pages | → REMOVED (use modals or contact form) |
| Individual instructor profiles | → REMOVED (use modals or contact form) |
| "Become an Instructor" CTA | → "Contact Us" or REMOVED |
| Booking flow | → Contact form with inquiry |
| Payment information | → Price shown as "typical class cost" (informational) |
| Real-time availability | → Static schedules |

---

## Scope Guard Checklist

Before implementing any feature, verify:

- [ ] Does NOT require user authentication
- [ ] Does NOT require database
- [ ] Does NOT require booking system
- [ ] Does NOT require payment processing
- [ ] Uses static data from TypeScript files
- [ ] Can be completed within time budget
- [ ] Is listed in PHASE_1_EXECUTION.md

---

**End of Section Breakdowns**

_Last Updated: 2026-01-14_
_Based on wireframes with Phase 1 constraints applied_
