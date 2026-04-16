import HeroSection from '@/components/ui/hero-section';
import ServicesSection from '@/components/ui/services-section';
import ReviewsSection from '@/components/ui/reviews-section';
import AboutSection from '@/components/ui/about-section';
import ServiceAreaSection from '@/components/ui/service-area-section';
import EstimateFormSection from '@/components/ui/estimate-form-section';
import FooterSection from '@/components/ui/footer-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
      <AboutSection />
      <ServiceAreaSection />
      <EstimateFormSection />
      <FooterSection />
    </main>
  );
}
