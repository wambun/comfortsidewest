export const footerLinks: Array<{
  columnName: string;
  links: Array<{
    href: string;
    title: string;
  }>;
}> = [
  {
    columnName: 'Products',
    links: [
      { href: '/products/residential', title: 'Residential' },
      { href: '/products/commercial', title: 'Commercial/VRF' },
      { href: '/products/all-in-one', title: 'All-in-One' },
    ],
  },
  {
    columnName: 'Brands',
    links: [
      { href: '/brands/cooper-hunter', title: 'Cooper&Hunter' },
      { href: '/brands/olmo', title: 'Olmo' },
      { href: '/brands/bravo', title: 'Bravo' },
    ],
  },
  {
    columnName: 'Company',
    links: [
      { href: '/', title: 'Home' },
      { href: '/about', title: 'About Us' },
      { href: '/dealer-program', title: 'Dealer Program' },
      { href: '/contact', title: 'Contact' },
    ],
  },
  {
    columnName: 'Legal',
    links: [
      { href: '/privacy-policy', title: 'Privacy Policy' },
      { href: '/terms', title: 'Terms & Conditions' },
    ],
  },
];

export const socialLinks = {
  facebook: 'https://www.facebook.com/people/Comfortside-West-LLC/61556712921612/',
  linkedin: 'https://www.linkedin.com/company/comfortside-west-llc/',
  bbb: 'https://www.bbb.org/us/tx/lancaster/profile/ductless-ac/comfortside-west-llc-0875-91342427',
};
