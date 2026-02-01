// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme');
const { colors: customColors } = require('./data/config/colors');

/** @type {import("tailwindcss").Config } */
module.exports = {
  content: [
    './node_modules/@shipixen/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx,css,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,css,mdx}',
    './components/**/*.{js,ts,jsx,tsx,css,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,css,mdx}',
    './demo/**/*.{js,ts,jsx,tsx,css,mdx}',
    './data/**/*.mdx',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      // HR-Pro inspired spacing system
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
      },
      // HR-Pro inspired max-widths
      maxWidth: {
        'container': '1290px',
        'content': '1280px',
        'narrow': '800px',
        'ultrawide': '1600px',
      },
      lineHeight: {
        'tight': '1.1',
        'snug': '1.2',
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
      },
      letterSpacing: {
        'tighter': '-0.04em',
        'headline': '-0.02em',
      },
      fontSize: {
        // HR-Pro headline sizes
        'display': ['54px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '500' }],
        'display-sm': ['45px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '500' }],
        'h1': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h2': ['40px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h3': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'var(--font-inter)', ...fontFamily.sans],
        display: ['var(--font-frank-ruhl)', 'Georgia', 'serif'],
        heading: ['var(--font-frank-ruhl)', 'Georgia', 'serif'],
        body: ['var(--font-montserrat)', 'var(--font-inter)', ...fontFamily.sans],
      },
      colors: {
        // Primary: Deep Navy (Jurri template)
        primary: {
          50: '#e8eef4',
          100: '#c5d5e4',
          200: '#1b273a',
          300: '#162233',
          400: customColors.primary.lighter, // #1b273a
          500: customColors.primary.main, // #0d1c29
          600: customColors.primary.dark,
          700: customColors.primary.darker,
          800: '#050a0d',
          900: '#020507',
          DEFAULT: customColors.primary.main,
        },
        // Accent: Warm Gold (Jurri template - CTAs, links, highlights)
        accent: {
          50: '#faf6f1',
          100: '#f2ebe1',
          200: '#e8d9c6',
          300: customColors.accent.light, // #d4c0a5
          400: customColors.accent.main, // #c5a788
          500: customColors.accent.main,
          600: customColors.accent.dark,
          700: customColors.accent.darker,
          800: '#5c4d3a',
          900: '#3d3327',
          DEFAULT: customColors.accent.main,
        },
        // Gold alias for semantic naming
        gold: {
          50: '#faf6f1',
          100: '#f2ebe1',
          200: '#e8d9c6',
          300: '#d4c0a5',
          400: '#c5a788',
          500: '#c5a788',
          600: '#a68a6a',
          700: '#87704f',
          DEFAULT: '#c5a788',
        },
        // Success: Green for success states
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: customColors.success.main,
          600: customColors.success.dark,
          700: customColors.success.darker,
          800: '#065f46',
          900: '#064e3b',
          DEFAULT: customColors.success.main,
        },
        // Neutral: Slate tones
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: customColors.neutral.main,
          600: customColors.neutral.dark,
          700: customColors.neutral.darker,
          800: '#1e293b',
          900: '#0f172a',
          DEFAULT: customColors.neutral.main,
        },
        secondary: {
          50: customColors.secondary.lighter,
          100: customColors.secondary.light,
          200: customColors.secondary.main,
          300: customColors.secondary.dark,
          400: customColors.secondary.darker,
          500: '#9ca3af',
          DEFAULT: customColors.secondary.main,
        },
        // Background colors
        cream: '#f9f9f9',
        'cream-dark': '#e8eded',
        'cream-warm': '#ead3bc',
        // Shadcn UI tokens
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: customColors.accent.main,
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        'card': '16px',
        'button': '60px',
        'badge': '60px',
        'section': '24px',
      },
      boxShadow: {
        'card': '0 12px 16px 0 rgba(10,13,18,.08), 0 4px 5px -2px rgba(10,13,18,.03)',
        'card-hover': '0 20px 25px -5px rgba(10,13,18,.1), 0 8px 10px -6px rgba(10,13,18,.1)',
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 40px rgba(0, 153, 219, 0.2)',
        'glow-primary': '0 0 40px rgba(12, 59, 106, 0.15)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.600'),
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '600',
              letterSpacing: theme('letterSpacing.headline'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.primary.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.300'),
              '&:hover': {
                color: theme('colors.primary.200'),
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
      screens: {
        'xs': '475px',
        '2xl': '1400px',
        '3xl': '1600px',
        'tall-sm': { raw: '(min-height: 640px)' },
        'tall-md': { raw: '(min-height: 768px)' },
        'tall-lg': { raw: '(min-height: 1024px)' },
      },
      zIndex: {
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
        110: 110,
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        2000: '2000ms',
        3000: '3000ms',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        // Premium animations
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'gradient-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 153, 219, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 153, 219, 0.25)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'fade-in-slow': 'fade-in 0.8s ease-out',
        'fade-in-up-slow': 'fade-in-up 0.8s ease-out',
        marquee: '30s marquee linear infinite',
        'marquee-slow': '60s marquee linear infinite',
        'marquee-reverse': '30s marquee-reverse linear infinite',
        // Premium animations
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'gradient-flow': 'gradient-flow 15s ease infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
