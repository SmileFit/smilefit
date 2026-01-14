⚠️ EXECUTION NOTICE – READ FIRST

This document is a FUTURE-AWARE / ASPIRATIONAL plan.
It is NOT the execution plan for Phase 1.

Phase 1 execution is strictly governed by:
- README.md
- docs/SCOPE_GUARD.md
- docs/PHASE_1_EXECUTION.md

If any conflict exists, those documents take precedence.

PROJECT_PLAN.md exists only for:
- Future phases
- Cost justification
- Roadmap visibility


# SmileFit Phase 1 - Project Plan

## Detailed Folder Structure

```
smilefit/
├── .github/
│   └── workflows/
│       ├── ci.yml                    # Automated testing and linting
│       └── deploy.yml                # Deployment workflow (if not using Vercel auto-deploy)
│
├── public/
│   ├── images/
│   │   ├── classes/                  # Class preview images
│   │   ├── instructors/              # Instructor profile photos
│   │   ├── hero/                     # Hero section images
│   │   └── logos/                    # Brand assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout with common elements
│   │   ├── page.tsx                  # Home page (/)
│   │   ├── globals.css               # Global Tailwind imports
│   │   │
│   │   ├── how-it-works/
│   │   │   └── page.tsx              # How It Works page
│   │   │
│   │   ├── classes/
│   │   │   └── page.tsx              # Classes showcase page
│   │   │
│   │   ├── instructors/
│   │   │   └── page.tsx              # Instructors page
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx              # Contact page with form
│   │   │
│   │   ├── api/                      # API routes for serverless functions
│   │   │   └── contact/
│   │   │       └── route.ts          # Contact form submission handler
│   │   │
│   │   ├── not-found.tsx             # 404 page
│   │   └── error.tsx                 # Error boundary
│   │
│   ├── components/
│   │   ├── ui/                       # shadcn/ui components (auto-generated)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   └── ...
│   │   │
│   │   ├── layout/
│   │   │   ├── header.tsx            # Main header with navigation
│   │   │   ├── footer.tsx            # Footer with links and social
│   │   │   ├── navigation.tsx        # Desktop navigation
│   │   │   └── mobile-menu.tsx       # Mobile hamburger menu
│   │   │
│   │   ├── sections/
│   │   │   ├── hero.tsx              # Reusable hero section
│   │   │   ├── features.tsx          # Features grid
│   │   │   ├── cta.tsx               # Call-to-action sections
│   │   │   ├── testimonials.tsx      # Testimonials carousel (static)
│   │   │   └── stats.tsx             # Stats showcase
│   │   │
│   │   ├── cards/
│   │   │   ├── class-card.tsx        # Individual class card
│   │   │   └── instructor-card.tsx   # Individual instructor card
│   │   │
│   │   └── forms/
│   │       ├── contact-form.tsx      # Main contact form
│   │       └── form-success.tsx      # Success message component
│   │
│   ├── lib/
│   │   ├── data/
│   │   │   ├── classes.ts            # Static class data
│   │   │   ├── instructors.ts        # Static instructor data
│   │   │   ├── testimonials.ts       # Static testimonials
│   │   │   └── content.ts            # General site content/copy
│   │   │
│   │   ├── utils/
│   │   │   ├── cn.ts                 # shadcn/ui cn utility
│   │   │   ├── seo.ts                # SEO metadata helpers
│   │   │   └── email.ts              # Email validation helpers
│   │   │
│   │   └── constants/
│   │       ├── routes.ts             # Route definitions
│   │       └── site-config.ts        # Site-wide config (name, social links, etc.)
│   │
│   ├── types/
│   │   ├── class.ts                  # Class type definitions
│   │   ├── instructor.ts             # Instructor type definitions
│   │   └── common.ts                 # Shared types
│   │
│   └── styles/
│       └── fonts.ts                  # Font configuration (next/font)
│
├── .env.local.example                # Example environment variables
├── .eslintrc.json                    # ESLint configuration
├── .gitignore
├── .prettierrc                       # Prettier configuration
├── components.json                   # shadcn/ui configuration
├── next.config.js                    # Next.js configuration
├── package.json
├── postcss.config.js                 # PostCSS configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── tsconfig.json                     # TypeScript configuration
└── README.md
```

---

## GitHub Issues - Phase 1 Epics

### Epic 1: Project Setup & Configuration
**Goal**: Bootstrap Next.js project with all tooling configured

**Issues**:

#### Issue #1: Initialize Next.js Project
- [ ] Create Next.js 14+ project with TypeScript
- [ ] Configure App Router
- [ ] Install Tailwind CSS
- [ ] Set up PostCSS configuration
- [ ] Create basic folder structure
- [ ] Install and configure ESLint
- [ ] Install and configure Prettier
- [ ] Create `.env.local.example`
- [ ] Add `.gitignore` with appropriate entries
- [ ] Create initial `tsconfig.json` with strict settings

**Estimate**: 1-2 hours
**Labels**: `setup`, `phase-1`, `priority-high`
**Assignee**: Developer
**Automation**: Can use `create-next-app` CLI

---

#### Issue #2: Install and Configure shadcn/ui
- [ ] Install shadcn/ui dependencies
- [ ] Initialize shadcn/ui with `npx shadcn-ui@latest init`
- [ ] Configure `components.json`
- [ ] Install initial UI components: Button, Card, Input, Textarea
- [ ] Verify component imports work correctly
- [ ] Set up custom Tailwind theme colors

**Estimate**: 1 hour
**Labels**: `setup`, `phase-1`, `ui-components`
**Assignee**: Developer
**Automation**: Partially (shadcn CLI)

---

#### Issue #3: Configure Fonts and Global Styles
- [ ] Set up `next/font` for optimal font loading
- [ ] Choose and configure primary fonts (e.g., Inter, Plus Jakarta Sans)
- [ ] Create `src/styles/fonts.ts`
- [ ] Add fonts to root layout
- [ ] Configure global CSS in `app/globals.css`
- [ ] Set up CSS variables for theming

**Estimate**: 1 hour
**Labels**: `setup`, `phase-1`, `styling`
**Assignee**: Designer/Developer

---

#### Issue #4: Create Static Data Files
- [ ] Create `src/lib/data/classes.ts` with sample classes
- [ ] Create `src/lib/data/instructors.ts` with sample instructors
- [ ] Create `src/lib/data/testimonials.ts` with sample testimonials
- [ ] Create `src/lib/data/content.ts` with site copy
- [ ] Define TypeScript types in `src/types/`
- [ ] Add sample images to `public/images/`

**Estimate**: 2 hours
**Labels**: `data`, `phase-1`, `content`
**Assignee**: Content Creator + Developer

---

### Epic 2: Layout & Navigation
**Goal**: Create consistent layout, header, footer, and navigation

**Issues**:

#### Issue #5: Build Root Layout Component
- [ ] Create `app/layout.tsx` with metadata configuration
- [ ] Add Header and Footer components
- [ ] Configure font loading
- [ ] Set up viewport meta tags
- [ ] Add SEO metadata defaults
- [ ] Configure Open Graph tags
- [ ] Add Google Analytics script (optional)

**Estimate**: 2 hours
**Labels**: `layout`, `phase-1`, `priority-high`
**Assignee**: Developer

---

#### Issue #6: Build Header with Navigation
- [ ] Create `components/layout/header.tsx`
- [ ] Create `components/layout/navigation.tsx` for desktop
- [ ] Create `components/layout/mobile-menu.tsx` for mobile
- [ ] Implement responsive hamburger menu
- [ ] Add logo/brand
- [ ] Style active navigation states
- [ ] Ensure accessibility (keyboard navigation, ARIA labels)

**Estimate**: 3-4 hours
**Labels**: `layout`, `phase-1`, `navigation`, `priority-high`
**Assignee**: Developer

---

#### Issue #7: Build Footer Component
- [ ] Create `components/layout/footer.tsx`
- [ ] Add site links (pages, legal if needed)
- [ ] Add social media icons/links
- [ ] Add contact information
- [ ] Add copyright notice
- [ ] Make responsive (mobile/desktop)
- [ ] Test all links

**Estimate**: 2 hours
**Labels**: `layout`, `phase-1`
**Assignee**: Developer

---

### Epic 3: Page Development
**Goal**: Build all five marketing pages

**Issues**:

#### Issue #8: Build Home Page
- [ ] Create `app/page.tsx`
- [ ] Build Hero section component
- [ ] Build Features/Benefits section
- [ ] Build Stats/Social Proof section
- [ ] Build Testimonials section
- [ ] Build CTA section
- [ ] Add SEO metadata
- [ ] Optimize images with `next/image`
- [ ] Test responsiveness (mobile, tablet, desktop)

**Estimate**: 6-8 hours
**Labels**: `pages`, `phase-1`, `priority-high`, `home`
**Assignee**: Developer

---

#### Issue #9: Build How It Works Page
- [ ] Create `app/how-it-works/page.tsx`
- [ ] Create step-by-step process section
- [ ] Add visual aids (icons or images)
- [ ] Add CTA section
- [ ] Add SEO metadata
- [ ] Test responsiveness

**Estimate**: 3-4 hours
**Labels**: `pages`, `phase-1`, `how-it-works`
**Assignee**: Developer

---

#### Issue #10: Build Classes Page
- [ ] Create `app/classes/page.tsx`
- [ ] Create `components/cards/class-card.tsx`
- [ ] Display class grid from static data
- [ ] Add class filtering/categories (UI only, no backend)
- [ ] Add class descriptions and images
- [ ] Add SEO metadata
- [ ] Test responsiveness

**Estimate**: 4-5 hours
**Labels**: `pages`, `phase-1`, `classes`
**Assignee**: Developer
**Note**: ⚠️ NO booking buttons/functionality

---

#### Issue #11: Build Instructors Page
- [ ] Create `app/instructors/page.tsx`
- [ ] Create `components/cards/instructor-card.tsx`
- [ ] Display instructor grid from static data
- [ ] Add instructor bios, photos, specialties
- [ ] Add social media links per instructor (optional)
- [ ] Add SEO metadata
- [ ] Test responsiveness

**Estimate**: 3-4 hours
**Labels**: `pages`, `phase-1`, `instructors`
**Assignee**: Developer

---

#### Issue #12: Build Contact Page
- [ ] Create `app/contact/page.tsx`
- [ ] Create `components/forms/contact-form.tsx`
- [ ] Add form fields (name, email, message)
- [ ] Add client-side validation
- [ ] Add loading and success states
- [ ] Add SEO metadata
- [ ] Test responsiveness

**Estimate**: 3-4 hours
**Labels**: `pages`, `phase-1`, `contact`, `forms`
**Assignee**: Developer

---

#### Issue #13: Implement Contact Form Backend
- [ ] Create `app/api/contact/route.ts`
- [ ] Set up email service (Resend, SendGrid, or FormSpree)
- [ ] Implement server-side validation
- [ ] Send email on form submission
- [ ] Return proper success/error responses
- [ ] Add rate limiting (simple)
- [ ] Test form end-to-end

**Estimate**: 2-3 hours
**Labels**: `api`, `phase-1`, `contact`, `forms`
**Assignee**: Developer
**Automation**: Use third-party service to avoid custom email server

---

#### Issue #14: Create 404 and Error Pages
- [ ] Create `app/not-found.tsx`
- [ ] Create `app/error.tsx`
- [ ] Style both pages consistently
- [ ] Add helpful navigation back to home
- [ ] Test by navigating to non-existent routes

**Estimate**: 1 hour
**Labels**: `pages`, `phase-1`
**Assignee**: Developer

---

### Epic 4: SEO & Performance
**Goal**: Optimize for search engines and performance

**Issues**:

#### Issue #15: Implement SEO Best Practices
- [ ] Add `sitemap.xml` generation (Next.js 14 supports this natively)
- [ ] Add `robots.txt`
- [ ] Ensure all pages have unique meta titles and descriptions
- [ ] Add Open Graph tags to all pages
- [ ] Add Twitter Card tags
- [ ] Implement structured data (JSON-LD) for organization
- [ ] Test with Google Search Console validation tools

**Estimate**: 2-3 hours
**Labels**: `seo`, `phase-1`, `priority-medium`
**Assignee**: Developer
**Automation**: Next.js metadata API

---

#### Issue #16: Optimize Images and Performance
- [ ] Convert images to modern formats (WebP, AVIF)
- [ ] Use `next/image` for all images
- [ ] Add lazy loading to below-the-fold content
- [ ] Optimize font loading with `next/font`
- [ ] Enable compression in `next.config.js`
- [ ] Run Lighthouse audit and fix issues
- [ ] Achieve Lighthouse score: 90+ Performance, 100 Accessibility, 90+ SEO

**Estimate**: 3-4 hours
**Labels**: `performance`, `phase-1`, `priority-medium`
**Assignee**: Developer
**Automation**: Use image optimization tools (e.g., ImageOptim, Squoosh)

---

#### Issue #17: Add Analytics Integration
- [ ] Set up Google Analytics 4 (or alternative)
- [ ] Add analytics script to root layout
- [ ] Set up environment variable for GA ID
- [ ] Test analytics tracking in development
- [ ] Document how to view analytics

**Estimate**: 1 hour
**Labels**: `analytics`, `phase-1`, `priority-low`
**Assignee**: Developer
**Automation**: Use third-party script

---

### Epic 5: Testing & Quality Assurance
**Goal**: Ensure code quality and cross-browser compatibility

**Issues**:

#### Issue #18: Cross-Browser and Device Testing
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on iOS Safari and Android Chrome
- [ ] Test on mobile (320px), tablet (768px), desktop (1440px)
- [ ] Fix any browser-specific issues
- [ ] Test all forms and navigation
- [ ] Verify images load correctly

**Estimate**: 3-4 hours
**Labels**: `qa`, `phase-1`, `priority-high`
**Assignee**: QA / Developer

---

#### Issue #19: Accessibility Audit
- [ ] Run axe DevTools or WAVE accessibility checker
- [ ] Ensure keyboard navigation works on all pages
- [ ] Add ARIA labels where needed
- [ ] Ensure sufficient color contrast (WCAG AA)
- [ ] Test with screen reader (VoiceOver or NVDA)
- [ ] Fix all accessibility issues

**Estimate**: 2-3 hours
**Labels**: `accessibility`, `phase-1`, `priority-high`
**Assignee**: Developer

---

#### Issue #20: Code Quality and Linting
- [ ] Run ESLint and fix all warnings
- [ ] Run TypeScript type checking (`tsc --noEmit`)
- [ ] Ensure Prettier formatting is consistent
- [ ] Add pre-commit hooks (Husky + lint-staged) (optional)
- [ ] Review all TODO comments
- [ ] Remove console.logs and debug code

**Estimate**: 1-2 hours
**Labels**: `code-quality`, `phase-1`, `priority-medium`
**Assignee**: Developer
**Automation**: Can use GitHub Actions for CI

---

### Epic 6: Deployment & Launch
**Goal**: Deploy to production and go live

**Issues**:

#### Issue #21: Set Up Vercel Deployment
- [ ] Connect GitHub repo to Vercel
- [ ] Configure environment variables in Vercel
- [ ] Set up custom domain (if available)
- [ ] Configure SSL/HTTPS
- [ ] Test production build locally (`npm run build && npm start`)
- [ ] Deploy to production
- [ ] Verify deployment is successful

**Estimate**: 2 hours
**Labels**: `deployment`, `phase-1`, `priority-high`
**Assignee**: Developer / DevOps
**Automation**: Vercel auto-deploy on push to main

---

#### Issue #22: Post-Launch Monitoring
- [ ] Verify all pages load correctly in production
- [ ] Test contact form submission
- [ ] Verify analytics are tracking
- [ ] Monitor Vercel logs for errors
- [ ] Set up uptime monitoring (e.g., UptimeRobot)
- [ ] Document any production issues

**Estimate**: 1-2 hours
**Labels**: `monitoring`, `phase-1`, `priority-high`
**Assignee**: Developer

---

#### Issue #23: Documentation and Handoff
- [ ] Update README with final deployment info
- [ ] Document how to update content (data files)
- [ ] Document environment variables
- [ ] Create content update guide for non-developers
- [ ] Document any known issues or limitations
- [ ] Prepare handoff documentation

**Estimate**: 2 hours
**Labels**: `documentation`, `phase-1`, `priority-medium`
**Assignee**: Developer / PM

---

## Kanban Board Columns

Organize the above issues into these columns:

1. **Backlog** - All issues start here
2. **To Do** - Prioritized and ready to start
3. **In Progress** - Currently being worked on (limit WIP to 2-3)
4. **Review** - Code review needed
5. **Testing** - QA testing
6. **Done** - Completed and verified

---

## Task Automation Opportunities

### ✅ Fully Automated
1. **Next.js Project Setup**: Use `create-next-app`
2. **shadcn/ui Installation**: Use `npx shadcn-ui@latest init`
3. **Component Installation**: Use `npx shadcn-ui@latest add [component]`
4. **Deployment**: Vercel auto-deploys on git push
5. **CI/CD**: GitHub Actions for linting and type checking
6. **Image Optimization**: `next/image` handles this automatically
7. **Sitemap Generation**: Next.js 14 can generate this automatically

### 🔄 Partially Automated
1. **Linting**: Automated check, but manual fixes needed
2. **Type Checking**: Automated check, but manual fixes needed
3. **Image Conversion**: Can use tools like ImageOptim, but requires manual upload
4. **SEO Metadata**: Can use templates, but content needs manual input
5. **Analytics Setup**: Script injection is automated, but configuration is manual

### ❌ Manual Tasks
1. **Design and UI Implementation**: Requires human creativity
2. **Content Creation**: Writing copy, creating images, instructor bios
3. **Cross-Browser Testing**: Requires manual verification
4. **Accessibility Audit**: Requires human judgment and testing
5. **Content Data Population**: Static data files need manual creation
6. **Custom Component Development**: All reusable components
7. **Form Validation Logic**: Requires custom business rules
8. **QA Testing**: Manual testing for user experience

---

## Risk Assessment & Scope Creep Vectors

### 🔴 High Risk Areas

#### 1. Contact Form Scope Creep
**Risk**: Contact form could expand into "inquiry management system"
**Mitigation**:
- Use third-party service (FormSpree, Resend) to avoid building custom backend
- Form only sends email—no database, no inquiry tracking, no admin panel
- If user asks for "form submissions dashboard" → Phase 2

#### 2. Classes Page Booking Temptation
**Risk**: User may request "see availability" or "book now" buttons
**Mitigation**:
- Classes page is strictly showcase/informational
- No booking functionality, no calendar integration
- If user asks for booking → Phase 2
- Add clear messaging: "Contact us to learn about class schedules"

#### 3. Instructor Profiles Expanding
**Risk**: Could expand into instructor scheduling, availability, or bios with authentication
**Mitigation**:
- Static instructor data only
- No individual instructor pages (unless explicitly in scope)
- No instructor login or profile management
- If user asks for instructor dashboards → Phase 2

#### 4. "Just One More Feature" Syndrome
**Risk**: Small feature requests that seem harmless but add complexity
**Examples**:
- "Can users save their favorite classes?" → NO (requires auth)
- "Can we add a newsletter signup?" → MAYBE (if just form to email service)
- "Can we show real-time class capacity?" → NO (requires backend)
**Mitigation**:
- Refer to README scope lock
- For each new request, ask: "Does this require a database or authentication?"
- If yes → Phase 2

#### 5. Content Management System (CMS)
**Risk**: User may want to update content without developer
**Mitigation**:
- Phase 1 uses hardcoded data files (TypeScript)
- Document how to update content in data files
- If user asks for CMS (Contentful, Sanity) → Phase 2 or separate project

#### 6. SEO Over-Engineering
**Risk**: Spending too much time on advanced SEO features
**Mitigation**:
- Focus on basics: meta tags, sitemap, robots.txt, structured data
- No need for advanced schema markup, hreflang tags, or multilingual SEO
- No need for blog or content marketing features (Phase 2+)

#### 7. Design Perfectionism
**Risk**: Spending excessive time on design iterations
**Mitigation**:
- Use shadcn/ui components with minimal customization
- Aim for "clean and professional," not "award-winning design"
- Limit design iterations to 2 rounds per page
- €1,000 budget doesn't allow for extensive custom design

### 🟡 Medium Risk Areas

#### 8. Third-Party Integrations
**Risk**: Requests for Calendly, booking widgets, chat widgets
**Mitigation**:
- Only add integrations if they're simple embeds
- No custom integrations requiring backend work
- If integration requires API keys and backend logic → Phase 2

#### 9. Performance Optimization Rabbit Hole
**Risk**: Over-optimizing for marginal gains
**Mitigation**:
- Aim for Lighthouse score 90+ (not 100)
- Use Next.js built-in optimizations
- Don't build custom image CDN or advanced caching (Vercel handles this)

#### 10. Legal Pages (Privacy Policy, Terms)
**Risk**: Scope could expand to include legal pages
**Mitigation**:
- If required, use templates and keep them simple
- Don't build custom cookie consent banners (use simple solution or defer)

### 🟢 Low Risk Areas

#### 11. Mobile Responsiveness
**Risk**: Low (standard requirement)
**Mitigation**: Use Tailwind responsive utilities, test on common breakpoints

#### 12. Deployment
**Risk**: Low (Vercel makes this easy)
**Mitigation**: Follow Vercel documentation

---

## Budget Breakdown (€1,000)

Assuming hourly rate of €40-50/hour for developer:

| Task                          | Hours | Cost (€50/hr) |
|-------------------------------|-------|---------------|
| Project Setup                 | 5     | €250          |
| Layout & Navigation           | 7-10  | €350-500      |
| Page Development              | 20-25 | €1,000-1,250  |
| SEO & Performance             | 6-8   | €300-400      |
| Testing & QA                  | 6-9   | €300-450      |
| Deployment & Documentation    | 5-6   | €250-300      |
| **Total**                     | **49-63** | **€2,450-3,150** |

**Budget Reality Check**:
- €1,000 budget = ~20-25 developer hours at market rate
- This is tight for a full marketing website
- **Recommendation**: Prioritize ruthlessly
  - Use shadcn/ui components with minimal customization
  - Use Next.js defaults where possible
  - Defer nice-to-have features
  - Consider using a template or starter kit to save time

**Alternate Approach for Budget**:
- Use a Next.js template/starter kit (5 hours saved)
- Customize content and branding (5 hours)
- Set up deployment and testing (5 hours)
- Buffer for issues (5 hours)
- **Total: 20 hours ≈ €1,000**

---

## Success Metrics for Phase 1

### Technical Metrics
- ✅ All pages load in < 2 seconds
- ✅ Lighthouse scores: 90+ across all categories
- ✅ Zero console errors in production
- ✅ Mobile responsive on all pages
- ✅ WCAG 2.1 AA accessibility compliance

### Business Metrics (Post-Launch)
- Contact form submissions per week
- Page views per page
- Bounce rate
- Time on site
- Mobile vs desktop traffic split

### Scope Success
- ✅ No database dependencies
- ✅ No authentication code
- ✅ No booking functionality
- ✅ No payment processing
- ✅ All content is static/hardcoded

---

## Next Steps After Phase 1

Once Phase 1 is complete and live, evaluate:

1. **User Feedback**: Are users asking for booking features?
2. **Traffic**: Are you getting enough visitors to justify Phase 2 investment?
3. **Budget**: Do you have budget for Phase 2 development?
4. **Business Validation**: Has Phase 1 proven there's demand?

**Only then** consider Phase 2 features:
- User authentication
- Class booking system
- Payment integration
- Database setup
- Instructor/admin dashboards

---

**End of Project Plan**

_Last Updated: 2026-01-14_
