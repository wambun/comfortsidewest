export const headerNavLinks: Array<{
  href: string;
  title: string;
  children?: Array<{ href: string; title: string; description?: string }>;
}> = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/brands',
    title: 'Brands',
    children: [
      {
        href: '/brands/cooper-hunter',
        title: 'Cooper&Hunter',
        description: 'Industry leader with 20+ years of experience',
      },
      {
        href: '/brands/olmo',
        title: 'Olmo',
        description: 'Advanced technology meets affordability',
      },
      {
        href: '/brands/bravo',
        title: 'Bravo',
        description: 'Budget-friendly without compromising quality',
      },
    ],
  },
  {
    href: '/products',
    title: 'Products',
    children: [
      {
        href: '/products/residential',
        title: 'Residential',
        description: 'Ductless AC solutions for home use',
      },
      {
        href: '/products/commercial',
        title: 'Commercial/VRF',
        description: 'Variable Refrigerant Flow systems',
      },
      {
        href: '/products/all-in-one',
        title: 'All-in-One',
        description: 'Integrated cooling solutions',
      },
    ],
  },
  {
    href: '/dealer-program',
    title: 'Dealer Program',
  },
];

// Contact info for header
export const contactInfo = {
  phone: '800-910-7349',
  email: 'West@comfortside.com',
};

// CTA button config
export const headerCTA = {
  href: '/contact',
  title: 'Contact Us',
};
