// app/page.tsx ou app/property/[id]/page.tsx
import HeroSection from '@/components/HeroSection';
import PhotoCarousel from '@/components/PhotoCarousel';
import PropertyDetails from '@/components/PropertyDetails';
import ContactForm from '@/components/ContactForm';
import FeaturesSummary from '@/components/FeaturesSummary';
import AboutProperty from '@/components/AboutProperty';
import GallerySection from '@/components/GallerySection';
import LocationMap from '@/components/LocationMap';
import HighlightSection from '@/components/HighlightSection';
import WellnessSection from '@/components/WellnessSection';
import GarageSection from '@/components/GarageSection';
import LifestyleSection from '@/components/LifestyleSection';
import SuitesSection from '@/components/SuitesSection';

const photos = [
  '/images/image1.jpeg',
  
];

export default function PropertyPage() {
  return (
    <main className="space-y-10 ">
      <HeroSection
      />
      <FeaturesSummary/>
      <AboutProperty/>
      <SuitesSection />
      <WellnessSection />
      <GarageSection />
      <LifestyleSection />
      <HighlightSection/>
      <GallerySection/>
      <LocationMap/>
      <ContactForm />
    </main>
  );
}
