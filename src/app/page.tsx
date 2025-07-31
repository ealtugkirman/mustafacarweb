import React from 'react';
import { HeroSection } from '@/components/ui/hero-section';
import { AboutUs } from '@/components/ui/about-us';
import { Services, Stats } from '@/components/ui/services';
import { AestheticProcedures } from '@/components/ui/aesthetic-procedures';
import { ContactForm } from '@/components/ui/contact-form';
import ScrollHeroDemo from '@/components/ui/scroll-hero-demo';
import { BlogRichPreview } from '@/components/ui/blog-section-with-rich-preview';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <Services />
      <AestheticProcedures />
      <BlogRichPreview />
      <ScrollHeroDemo />
      <ContactForm />
    </main>
  );
};

export default HomePage;