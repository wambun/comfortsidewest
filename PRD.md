# Comfortside West Website Redesign - Product Requirements Document (PRD)

## Executive Summary

This document outlines the complete redesign of the Comfortside West website, transforming it from a WordPress/Elementor-based site to a modern Next.js 15 application. The redesign will adopt the premium visual design language from the Jurri Framer template while preserving all existing content and business functionality.

**Client:** Comfortside West LLC
**Business:** Wholesale distributor of ductless mini-split HVAC systems
**Target Audience:** HVAC contractors, dealers, and homeowners

---

## 1. Current Site Analysis

### 1.1 Site Structure

```
/                              # Home
/brands/                       # Brands showcase (Cooper&Hunter, Olmo, Bravo)
/products/                     # Products hub
  /residential/                # Residential mini-split systems
  /commercial-vrf/             # Commercial/VRF systems
  /all-in-one/                 # All-in-one units
/cooperhunter-dealer-program/  # Pro-Tech Dealer Program
/contact-us/                   # Contact page with form
/about-us/                     # About page
/news/                         # News/updates
/privacy-policy/               # Legal
/refund_returns/               # Returns policy
```

### 1.2 Key Content

**Company Info:**
- Name: Comfortside West LLC
- Tagline: "Your Trusted Source for Wholesale Ductless Air Conditioning Systems"
- Phone: 800-910-7349
- Email: West@comfortside.com
- Address: 3900 N Dallas Ave Ste 300, Lancaster, TX 75134
- Hours: Monday-Friday, 8am-5pm

**Value Propositions:**
1. High Quality - Top-tier mini split systems from leading brands
2. Cost-Effective - Wholesale prices without compromising quality
3. New Technologies - Advanced technology and customizable settings

**Brands (3):**
1. **Cooper&Hunter** - Premium brand, 20+ years experience, innovative
2. **Olmo** - Balanced technology + affordability, energy efficient
3. **Bravo** - Budget-friendly, reliable performance

**Product Categories (3):**
1. Residential
2. Commercial/VRF
3. All-in-One

---

## 2. Design Reference Analysis (Jurri Template)

### 2.1 Color System

```css
/* Primary Palette */
--color-primary-dark: #0d1c29;     /* Deep navy - main backgrounds */
--color-accent-gold: #c5a788;       /* Warm gold - CTAs, highlights */
--color-bg-secondary: #132030;      /* Card backgrounds */
--color-bg-tertiary: #1b273a;       /* Alternate sections */
--color-bg-light: #f9f9f9;          /* Light sections */
--color-cream: #ead3bc;             /* Accent backgrounds */
--color-text-primary: #ffffff;      /* Text on dark */
--color-text-muted: rgba(255,255,255,0.7); /* Secondary text */
--color-neutral: #e8eded;           /* Borders, dividers */
```

### 2.2 Typography System

```css
/* Font Families */
--font-heading: 'Frank Ruhl Libre', serif;  /* Elegant headings */
--font-body: 'Montserrat', sans-serif;       /* Body text */
--font-secondary: 'Inter', sans-serif;       /* UI elements */

/* Font Scale */
--text-h1: clamp(2.5rem, 5vw, 4rem);    /* 40-64px */
--text-h2: clamp(2rem, 4vw, 3rem);       /* 32-48px */
--text-h3: clamp(1.5rem, 3vw, 2rem);     /* 24-32px */
--text-body: 1rem;                        /* 16px */
```

### 2.3 Key Design Patterns

**Navigation:**
- Fixed header with dark background
- Logo left, nav center, CTA right
- Contact info in top bar (phone, email)
- Mobile hamburger menu

**Hero Section:**
- Full-width with dark overlay
- Serif headline, sans-serif body
- Client logo strip below hero
- Primary CTA button

**Cards:**
- Dark backgrounds (#132030)
- 16px border radius
- Hover lift effect
- Gold accent links

**Footer:**
- Dark background matching header
- Multi-column layout
- Social icons
- Copyright and legal links

---

## 3. New Site Architecture

### 3.1 Proposed Sitemap

```
/                           # Home
/about                      # About Us
/brands                     # Brands Hub
  /cooper-hunter            # Cooper&Hunter detail
  /olmo                     # Olmo detail
  /bravo                    # Bravo detail
/products                   # Products Hub
  /residential              # Residential systems
  /commercial               # Commercial/VRF systems
  /all-in-one               # All-in-one units
/dealer-program             # Cooper&Hunter Pro-Tech Program
/contact                    # Contact page
/privacy-policy             # Privacy Policy
/terms                      # Terms & Conditions
```

### 3.2 Page-by-Page Mapping

| Old Page | New Page | Key Sections |
|----------|----------|--------------|
| / | / | Hero, Value Props, About, Brands Grid, Why Choose Us, Categories, CTA |
| /brands | /brands | Hero, Brands Grid with cards |
| /products | /products | Hero, Category Grid, Product listings |
| /cooperhunter-dealer-program | /dealer-program | Program overview, Tiers, Benefits, Signup form |
| /contact-us | /contact | Contact form, Map, Contact info cards |
| /about-us | /about | Company story, Mission, Team (if applicable) |

---

## 4. Technical Implementation

### 4.1 Project Structure

```
/app
  /layout.tsx              # Root layout with Header/Footer
  /page.tsx                # Home page
  /about/page.tsx          # About page
  /brands
    /page.tsx              # Brands hub
    /[slug]/page.tsx       # Individual brand pages
  /products
    /page.tsx              # Products hub
    /[category]/page.tsx   # Category pages
  /dealer-program/page.tsx # Dealer program
  /contact/page.tsx        # Contact page
  /(legal)
    /privacy-policy/page.tsx
    /terms/page.tsx

/components
  /landing                 # Page sections
    /hero
      /HeroHome.tsx
      /HeroPage.tsx
    /sections
      /AboutSection.tsx
      /BrandsGrid.tsx
      /CategoriesGrid.tsx
      /WhyChooseUs.tsx
      /CTASection.tsx
      /DealerTiers.tsx
      /BenefitsGrid.tsx
    /cards
      /BrandCard.tsx
      /CategoryCard.tsx
      /ValuePropCard.tsx
      /BenefitCard.tsx
    /forms
      /ContactForm.tsx
      /DealerSignupForm.tsx
  /shared
    /Header.tsx
    /Footer.tsx
    /Logo.tsx
    /Container.tsx
    /SectionHeading.tsx
  /ui                      # Shadcn components

/data
  /config
    /site.settings.js      # Site metadata
    /headerNavLinks.ts     # Navigation links
    /footerLinks.ts        # Footer links
  /content
    /brands.json           # Brands data
    /products.json         # Products/categories
    /testimonials.json     # Testimonials (if any)

/lib
  /utils.ts
  /animations.ts           # Framer Motion variants

/public
  /images
    /logo/
    /brands/
    /products/
    /hero/
```

### 4.2 Implementation Phases

**Phase 1: Foundation (Current)**
- [x] Project initialization
- [x] Content extraction from old site
- [x] Design token documentation
- [x] PRD generation

**Phase 2: Design System Setup**
- [ ] Update Tailwind config with colors
- [ ] Configure typography (fonts, scales)
- [ ] Set up CSS variables in globals.css
- [ ] Create animation variants

**Phase 3: Core Components**
- [ ] Header component with navigation
- [ ] Footer component with links
- [ ] Container and layout components
- [ ] Button variants (primary, secondary, ghost)
- [ ] Card base components

**Phase 4: Landing Sections**
- [ ] Hero sections (home, page)
- [ ] About section
- [ ] Brands grid
- [ ] Categories grid
- [ ] Why Choose Us section
- [ ] CTA section

**Phase 5: Page Implementation**
- [ ] Home page
- [ ] About page
- [ ] Brands hub + detail pages
- [ ] Products hub + category pages
- [ ] Dealer Program page
- [ ] Contact page

**Phase 6: Forms & Functionality**
- [ ] Contact form with validation
- [ ] Dealer signup form
- [ ] Form submission handling

**Phase 7: Polish & Testing**
- [ ] Responsive testing (mobile, tablet, desktop)
- [ ] Accessibility audit (WCAG AA)
- [ ] Performance optimization
- [ ] Lighthouse audit (target: 90+ all categories)
- [ ] Cross-browser testing

---

## 5. Content Data Structures

### 5.1 Brand Type

```typescript
interface Brand {
  id: string;
  name: string;
  slug: string;
  description: string;
  features: string[];
  website: string;
  logo: string;
  dealerProgramEmail?: string;
}
```

### 5.2 Product Category Type

```typescript
interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  products?: Product[];
}
```

### 5.3 Dealer Program Type

```typescript
interface DealerTier {
  name: string;
  icon: string;
  requirement: string;
  benefits: string[];
}

interface DealerProgram {
  name: string;
  description: string;
  tiers: DealerTier[];
  financialBenefits: string[];
  supportBenefits: string[];
}
```

---

## 6. External Links & Integrations

### 6.1 Brand Websites
- Cooper&Hunter: https://cooperandhunter.us/
- Olmo: https://olmo-comfort.com/
- Bravo: https://acbravo.com/

### 6.2 Social Media
- Facebook: https://www.facebook.com/people/Comfortside-West-LLC/61556712921612/
- LinkedIn: https://www.linkedin.com/company/comfortside-west-llc/

### 6.3 Third-Party
- BBB Profile: https://www.bbb.org/us/tx/lancaster/profile/ductless-ac/comfortside-west-llc-0875-91342427

---

## 7. Success Criteria

### 7.1 Design Fidelity
- [ ] Color system matches Jurri template
- [ ] Typography hierarchy matches template
- [ ] Card designs match template patterns
- [ ] Section spacing matches template
- [ ] Animations feel premium and smooth

### 7.2 Content Completeness
- [ ] All existing pages have new equivalents
- [ ] All brand information preserved
- [ ] All product categories represented
- [ ] Dealer program fully documented
- [ ] Contact information accurate

### 7.3 Technical Quality
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 90
- [ ] Lighthouse Best Practices ≥ 90
- [ ] Lighthouse SEO ≥ 90
- [ ] Mobile responsive on all breakpoints
- [ ] Zero console errors
- [ ] Build completes without errors

### 7.4 Business Requirements
- [ ] Contact form functional
- [ ] Dealer signup form functional
- [ ] All external links working
- [ ] Phone/email links clickable
- [ ] SEO metadata complete

---

## 8. Reference Files

### Memory Files
- `Memory/.state.json` - Project state tracking
- `Memory/project-state.md` - Human-readable progress
- `Memory/content-inventory.json` - Extracted content
- `Memory/design-tokens.md` - Design system specs
- `Memory/decisions.md` - Key decisions log

### Screenshots
- `.playwright-mcp/Memory/design-reference-homepage.png` - Design template
- `.playwright-mcp/Memory/old-site-reference.png` - Current site

---

## Appendix A: Navigation Structure

### Header Navigation
| Label | Path |
|-------|------|
| Home | / |
| Brands | /brands |
| Products | /products |
| Cooper&Hunter Dealer Program | /dealer-program |
| **Contact Us** (CTA) | /contact |

### Footer Navigation
**Company**
- Home
- About Us
- Brands
- Products
- News

**Get In Touch**
- Phone: 800-910-7349
- Address: 3900 N Dallas Ave Ste 300, Lancaster, TX 75134
- Hours: Monday-Friday, 8am-5pm

**Social**
- Facebook
- LinkedIn
- BBB

---

## Appendix B: Form Fields

### Contact Form
- First Name (required)
- Last Name (required)
- Email (required)
- Phone (required)
- Message (textarea)

### Dealer Signup Form
- Business Name (required)
- Contact Name (required)
- Email (required)
- Phone (required)
- Number of Technicians
- Current Wholesale Distributor
- Brands Currently Sold
- Service Location/Territory
- Message/Notes
