# SmileFit - Phase 1: Marketing Website

> **⚠️ PHASE 1 SCOPE LOCK**: This phase is strictly limited to a static marketing website. No authentication, no bookings, no payments, no database.

## Overview

SmileFit is a modern fitness platform. This repository contains **Phase 1 only**: a marketing website to establish online presence and communicate our value proposition.

**Budget**: €1,000
**Timeline**: Phase 1 only
**Deployment**: Vercel

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Deployment**: Vercel
- **Version Control**: GitHub

## Phase 1 Scope (LOCKED)

### ✅ Included
- Static marketing pages (Home, How It Works, Classes, Instructors, Contact)
- Responsive design (mobile-first)
- Contact form (email integration via serverless function or service)
- SEO optimization (metadata, sitemap, robots.txt)
- Performance optimization (images, fonts, lazy loading)
- Analytics integration (Google Analytics or similar)

### ❌ Explicitly Excluded
- User authentication/authorization
- User dashboards or profiles
- Class booking system
- Payment processing
- Database integration
- User-generated content
- Admin panels
- Real-time features
- Third-party integrations beyond analytics and contact form

**Any feature not listed in "Included" is out of scope for Phase 1.**

## Project Structure

```
smilefit/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── how-it-works/
│   │   ├── classes/
│   │   ├── instructors/
│   │   └── contact/
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── layout/            # Header, Footer, Navigation
│   │   ├── sections/          # Page sections (Hero, Features, etc.)
│   │   └── forms/             # Contact form components
│   ├── lib/                   # Utilities and helpers
│   ├── types/                 # TypeScript types
│   └── styles/                # Global styles
├── public/
│   ├── images/
│   └── fonts/
├── .env.local.example
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn or pnpm

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your values

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

```bash
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Production build
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## Deployment

Deployment to Vercel is automated via GitHub integration:

1. Connect GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Push to `main` branch triggers automatic deployment

## Content Management

All content for Phase 1 is **hardcoded** in components and TypeScript files. This is intentional to keep the scope tight and avoid CMS complexity.

- Class data: `src/lib/data/classes.ts`
- Instructor data: `src/lib/data/instructors.ts`
- Site copy: Inline in components or `src/lib/data/content.ts`

## Environment Variables

```
# Contact form (optional - use service like FormSpree or Resend)
NEXT_PUBLIC_CONTACT_EMAIL=info@smilefit.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Phase 2+ (Future - NOT IN CURRENT SCOPE)

Ideas for future phases (reference only, not to be built now):
- User authentication
- Class booking system
- Payment integration
- Instructor dashboards
- User profiles and booking history

**🚫 Do not implement Phase 2 features in Phase 1. They will be rejected in code review.**

## Contributing

1. All PRs must stay within Phase 1 scope
2. Follow the established TypeScript and Tailwind conventions
3. Ensure responsive design on all viewports
4. Test accessibility (WCAG 2.1 AA minimum)
5. Run `npm run lint` and `npm run type-check` before committing

## License

Proprietary - SmileFit Organization

---

**Scope Reminder**: If you're about to add auth, booking, payments, or database code - STOP. That's Phase 2+.
