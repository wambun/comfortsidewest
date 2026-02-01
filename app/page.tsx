import {
  HeroHome,
  ServicesSection,
  BrandsSection,
  TestimonialsSection,
  WhyChooseUsSection,
  FAQSection,
  CTASection,
} from '@/components/landing';

export default function Home() {
  return (
    <>
      <HeroHome />
      <ServicesSection />
      <BrandsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection
        title="Ready to Partner with Comfortside West?"
        description="Join hundreds of HVAC contractors and dealers who trust us for premium ductless systems, competitive pricing, and exceptional support."
        primaryCTA={{ text: 'Become a Dealer', href: '/dealer-program' }}
        secondaryCTA={{ text: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
