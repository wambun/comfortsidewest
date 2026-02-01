# Design Tokens - Comfortside West

> Extracted from Jurri Framer Template, adapted for HVAC wholesale brand
> Typography is CRITICAL - the design feel comes from the fonts.

## Typography (MUST MATCH EXACTLY)

### Font Families

| Usage | Font Family | Source | Fallback |
|-------|-------------|--------|----------|
| Headings | Frank Ruhl Libre | Google Fonts | Georgia, serif |
| Body | Montserrat | Google Fonts | system-ui, sans-serif |
| Secondary | Inter | Google Fonts | Arial, sans-serif |
| Accent | Satoshi | Custom | Inter, sans-serif |

**Font Import:**
```css
/* Add to globals.css or layout.tsx */
@import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;400;500;700&family=Inter:wght@400;500;600;700&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,500;1,700&display=swap');
```

### Font Sizes

| Element | Desktop | Mobile | Tailwind Class |
|---------|---------|--------|----------------|
| H1 | 64px | 40px | `text-4xl md:text-6xl lg:text-7xl` |
| H2 | 48px | 32px | `text-3xl md:text-4xl lg:text-5xl` |
| H3 | 32px | 24px | `text-2xl md:text-3xl` |
| H4 | 24px | 20px | `text-xl md:text-2xl` |
| Body | 16px | 16px | `text-base` |
| Body Large | 18px | 16px | `text-lg` |
| Small | 14px | 14px | `text-sm` |
| Nav Links | 14px | 14px | `text-sm` |
| Buttons | 14px | 14px | `text-sm` |

### Font Weights

| Element | Weight | Tailwind Class |
|---------|--------|----------------|
| H1 | 300-400 | `font-light` or `font-normal` |
| H2 | 400 | `font-normal` |
| H3 | 500 | `font-medium` |
| Body | 400 | `font-normal` |
| Body Bold | 600 | `font-semibold` |
| Nav | 500 | `font-medium` |
| Buttons | 600 | `font-semibold` |

### Line Heights

| Usage | Value | Tailwind Class |
|-------|-------|----------------|
| Headings | 1.1-1.2 | `leading-tight` |
| Body | 1.5-1.6 | `leading-relaxed` |

### Letter Spacing

| Usage | Value | Tailwind Class |
|-------|-------|----------------|
| Headings | -0.02em | `tracking-tight` |
| Body | 0 | `tracking-normal` |
| Nav/Buttons | 0.02em | `tracking-wide` |
| Uppercase text | 0.05em | `tracking-wider` |

### Text Transforms

| Element | Transform | Tailwind Class |
|---------|-----------|----------------|
| Navigation | None | none |
| Section Labels | Uppercase | `uppercase` |
| Buttons | None | none |

---

## Colors

| Name | Hex | Usage | CSS Variable |
|------|-----|-------|--------------|
| Primary Dark | #0d1c29 | Main backgrounds, headers | `--primary` |
| Accent Gold | #c5a788 | CTAs, highlights, links | `--accent` |
| Secondary BG | #132030 | Card backgrounds | `--secondary` |
| Tertiary BG | #1b273a | Alternate sections | `--tertiary` |
| Light BG | #f9f9f9 | Light sections | `--background` |
| Cream | #ead3bc | Accent backgrounds | `--cream` |
| Text Primary | #ffffff | Text on dark | `--foreground` |
| Text Muted | rgba(255,255,255,0.7) | Secondary text | `--muted` |
| Neutral | #e8eded | Borders, dividers | `--border` |

### Brand Colors (Original Site - For Reference)
| Name | Hex | Usage |
|------|-----|-------|
| Teal | #86B9B0 | Original brand accent |
| Charcoal | #27373F | Original text color |

---

## Spacing

| Usage | Value | Tailwind |
|-------|-------|----------|
| Section Padding (Y) | 80-96px | `py-20 lg:py-24` |
| Section Padding (X) | 24-32px | `px-6 lg:px-8` |
| Container Max Width | 1280px | `max-w-7xl` |
| Component Gap | 32-48px | `gap-8 lg:gap-12` |
| Card Padding | 24-32px | `p-6 lg:p-8` |
| Grid Gap | 24px | `gap-6` |

---

## Border Radius

| Usage | Value | Tailwind |
|-------|-------|----------|
| Buttons | 8px | `rounded-lg` |
| Cards | 16px | `rounded-2xl` |
| Inputs | 8px | `rounded-lg` |
| Images | 12px | `rounded-xl` |
| Badges | 9999px | `rounded-full` |

---

## Shadows

| Usage | Value |
|-------|-------|
| Cards | `0 4px 6px -1px rgb(0 0 0 / 0.1)` |
| Cards Hover | `0 10px 15px -3px rgb(0 0 0 / 0.1)` |
| Buttons (hover) | `0 4px 14px 0 rgb(0 0 0 / 0.1)` |
| Navigation | `0 1px 3px 0 rgb(0 0 0 / 0.1)` |

---

## Animations

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Page transitions | Fade + slide up | 500ms | ease-out |
| Hover effects | Scale 1.02 | 200ms | ease |
| Scroll reveals | Fade in up | 600ms | ease-out |
| Button hover | Background shift | 200ms | ease |

### Framer Motion Variants

```typescript
// Fade In Up
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

// Stagger Children
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Scale on Hover
export const scaleHover = {
  whileHover: { scale: 1.02 },
  transition: { duration: 0.2 }
};
```

---

## Implementation Checklist

- [ ] Fonts imported and configured in tailwind.config.js
- [ ] Colors added to CSS variables in globals.css
- [ ] Typography classes verified against design
- [ ] Spacing matches design reference
- [ ] Animations implemented with Framer Motion
- [ ] Dark theme properly configured
- [ ] Button variants match design
- [ ] Card styles match design
