# SmileFit Phase 1 - Scope Guard

> **Use this checklist before implementing any feature**

## ✅ Is This Feature In Scope?

Ask yourself these questions BEFORE starting work:

### The Database Test
**Q: Does this feature require storing data in a database?**
- ❌ If YES → Out of scope (Phase 2+)
- ✅ If NO → Continue to next test

Examples:
- Storing user accounts → ❌ Out of scope
- Storing class bookings → ❌ Out of scope
- Storing form submissions → ❌ Out of scope
- Reading from static TypeScript files → ✅ In scope

### The Authentication Test
**Q: Does this feature require user login or authentication?**
- ❌ If YES → Out of scope (Phase 2+)
- ✅ If NO → Continue to next test

Examples:
- User registration/login → ❌ Out of scope
- Password reset flow → ❌ Out of scope
- Protected pages → ❌ Out of scope
- Public pages accessible to everyone → ✅ In scope

### The Transaction Test
**Q: Does this feature involve payments, bookings, or reservations?**
- ❌ If YES → Out of scope (Phase 2+)
- ✅ If NO → Continue to next test

Examples:
- "Book this class" button with real booking → ❌ Out of scope
- "Pay now" functionality → ❌ Out of scope
- Showing class information with "Contact us" CTA → ✅ In scope
- Contact form → ✅ In scope (emails only, no storage)

### The Interactivity Test
**Q: Does this feature require real-time updates or dynamic data?**
- ❌ If YES → Out of scope (Phase 2+)
- ✅ If NO → Continue to next test

Examples:
- Live class capacity updates → ❌ Out of scope
- Real-time chat → ❌ Out of scope
- Static content that doesn't change → ✅ In scope
- Client-side form validation → ✅ In scope

### The Backend Test
**Q: Does this feature require a backend service (beyond simple email sending)?**
- ❌ If YES → Out of scope (Phase 2+)
- ✅ If NO → Feature is IN SCOPE! ✅

Examples:
- Custom API with database queries → ❌ Out of scope
- User session management → ❌ Out of scope
- Serverless function that sends email → ✅ In scope (contact form only)
- Client-side only functionality → ✅ In scope

---

## 🚨 Common Scope Creep Scenarios

### Scenario 1: "Can we add a booking button?"
**Response**: "Phase 1 is strictly marketing. Booking buttons would require a booking system, database, and possibly payments. That's Phase 2. For now, we'll add a 'Contact Us to Book' button that links to the contact form."

### Scenario 2: "Users should be able to create accounts"
**Response**: "User accounts require authentication, database, and session management—all Phase 2 features. Phase 1 is a public marketing site with no user-specific functionality."

### Scenario 3: "Can we save form submissions to a database?"
**Response**: "Phase 1 contact form sends emails only. No database. If you need to track inquiries, use the email service's dashboard (e.g., Gmail) or consider a simple tool like Google Forms. Full inquiry management is Phase 2."

### Scenario 4: "Let's add a members-only section"
**Response**: "Members-only sections require authentication. Phase 1 has no protected pages. All content is public. Members area is Phase 2."

### Scenario 5: "Can instructors log in to update their profiles?"
**Response**: "Instructor profile updates require authentication and potentially a database. Phase 1 uses static data. Content updates are done by editing TypeScript files or through a developer. Instructor dashboards are Phase 2."

### Scenario 6: "Can we integrate with a booking API?"
**Response**: "Third-party booking integrations are Phase 2. Phase 1 directs users to contact us for booking inquiries."

### Scenario 7: "Let's add a blog for SEO"
**Response**: "A blog requires a CMS or database and is beyond Phase 1 scope. If SEO content is critical, consider adding a static 'Resources' page with hardcoded articles. Full blog is Phase 2."

### Scenario 8: "Can we show real-time class availability?"
**Response**: "Real-time data requires a backend service and database. Phase 1 shows static class information only. Users contact us for current availability. Real-time features are Phase 2."

### Scenario 9: "Users want to save their favorite classes"
**Response**: "Saving favorites requires user accounts and database. Phase 1 doesn't support user-specific functionality. This is Phase 2."

### Scenario 10: "Can we add live chat support?"
**Response**: "Live chat is a Phase 2 feature. For Phase 1, provide email and phone contact information, plus a contact form."

---

## 🟢 What IS Allowed in Phase 1

### Static Content
- ✅ Hardcoded text, images, and data
- ✅ TypeScript data files (classes.ts, instructors.ts)
- ✅ Static pages with no dynamic data fetching
- ✅ Client-side filtering/sorting of static data (no API calls)

### Navigation & Layout
- ✅ Header, footer, navigation menu
- ✅ Mobile responsive design
- ✅ Multiple pages (Home, How It Works, Classes, Instructors, Contact)
- ✅ 404 and error pages

### Forms (Limited)
- ✅ Contact form that sends email via API route
- ✅ Client-side form validation
- ✅ Success/error messages
- ❌ Storing form data in database
- ❌ User accounts or login forms

### SEO & Analytics
- ✅ Meta tags, Open Graph, Twitter Cards
- ✅ Sitemap and robots.txt
- ✅ Google Analytics or similar (script only)
- ✅ Structured data (JSON-LD)

### Images & Media
- ✅ Static images (optimized with next/image)
- ✅ Instructor photos, class images
- ✅ Hero images and graphics
- ❌ User-uploaded images
- ❌ Image galleries with database

### UI Components
- ✅ shadcn/ui components (Button, Card, Input, etc.)
- ✅ Custom components (built in React/TypeScript)
- ✅ Responsive design utilities (Tailwind)
- ✅ Animations and transitions (Tailwind or Framer Motion)

### Third-Party Services (Very Limited)
- ✅ Email service for contact form (Resend, SendGrid, FormSpree)
- ✅ Analytics (Google Analytics, Plausible)
- ❌ CMS (Contentful, Sanity) → Phase 2
- ❌ Booking systems (Calendly, Acuity) → Phase 2
- ❌ Payment processors (Stripe, PayPal) → Phase 2

---

## 📋 Pre-Implementation Checklist

Before starting ANY new feature, complete this checklist:

- [ ] I have read the feature request thoroughly
- [ ] I have checked if this feature requires a database → If YES, flag as Phase 2
- [ ] I have checked if this feature requires authentication → If YES, flag as Phase 2
- [ ] I have checked if this feature requires payments/booking → If YES, flag as Phase 2
- [ ] I have confirmed this feature is listed in the README as "Included"
- [ ] I have confirmed this feature uses only static data or simple email sending
- [ ] I have reviewed the PROJECT_PLAN.md to see if this is a planned issue
- [ ] I am confident this feature is within Phase 1 scope

**If you answered YES to any database/auth/payment questions, STOP and escalate to PM.**

---

## 🎯 Phase 1 Success Criteria

### Must Have (MVP)
- ✅ All 5 pages are live and functional (Home, How It Works, Classes, Instructors, Contact)
- ✅ Site is mobile responsive
- ✅ Contact form sends emails successfully
- ✅ SEO basics are implemented (meta tags, sitemap)
- ✅ Site loads quickly (Lighthouse 90+)
- ✅ No console errors in production
- ✅ Deployed to Vercel with custom domain (if applicable)

### Should Have (Nice to Have, if time permits)
- ✅ Smooth animations and transitions
- ✅ High-quality images optimized
- ✅ Analytics tracking working
- ✅ Accessibility score 100 (WCAG AA)
- ✅ Professional design polish

### Won't Have (Phase 2+)
- ❌ User authentication
- ❌ Booking system
- ❌ Payments
- ❌ Database
- ❌ User dashboards
- ❌ CMS integration
- ❌ Advanced SEO (blog, schema)
- ❌ Instructor management system
- ❌ Admin panel

---

## 💬 How to Respond to Out-of-Scope Requests

**Template Response**:

> "Thanks for the suggestion! [Feature] requires [database/authentication/payments], which is out of scope for Phase 1. Our goal is to launch a marketing website within a €1,000 budget. This feature would be a great addition in Phase 2 once we have validated the concept and secured additional budget. For now, let's focus on completing the Phase 1 scope: [list current priorities]."

**Example**:

> "Thanks for the suggestion! A booking system requires user authentication, a database, and calendar integration, which is out of scope for Phase 1. Our goal is to launch a marketing website within a €1,000 budget. This feature would be a great addition in Phase 2 once we have validated the concept and secured additional budget. For now, let's focus on completing the Phase 1 scope: Home page, How It Works, Classes showcase, Instructors, and Contact form."

---

## 🛡️ Scope Enforcement Rules

### Rule 1: When in Doubt, Assume Phase 2
If a feature seems complex or requires backend infrastructure, it's Phase 2 until proven otherwise.

### Rule 2: Favor Static Over Dynamic
If there's a choice between static and dynamic implementation, always choose static for Phase 1.

Example:
- ❌ Fetch class data from API
- ✅ Hardcode class data in TypeScript file

### Rule 3: No "Just This One Thing"
Every "small" out-of-scope feature sets a precedent. Protect the scope boundary strictly.

### Rule 4: Document Every Scope Question
If someone asks for an out-of-scope feature, document it in a "Phase 2 Ideas" file or GitHub issue labeled `phase-2`.

### Rule 5: Budget Is the Final Arbiter
€1,000 budget = ~20 developer hours. If a feature would consume >10% of the budget, it needs explicit approval.

---

## 🚀 Ready to Start?

If you've completed the checklist and your feature passes all the tests, you're ready to implement!

**Still unsure?** Ask yourself:
- "Could this feature work without a database?" → If NO, it's Phase 2
- "Could this feature work on a static site?" → If NO, it's Phase 2
- "Could I build this with just HTML, CSS, and JavaScript?" → If NO, it's Phase 2

**When in doubt, ask the PM or refer to README.md and PROJECT_PLAN.md.**

---

_Last Updated: 2026-01-14_
_Phase 1 Scope Lock Active 🔒_
