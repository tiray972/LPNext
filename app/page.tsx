// app/page.tsx ou app/property/[id]/page.tsx
import HeroSection from '@/components/HeroSection';
import PhotoCarousel from '@/components/PhotoCarousel';
import PropertyDetails from '@/components/PropertyDetails';
import ContactForm from '@/components/ContactForm';
import FeaturesSummary from '@/components/FeaturesSummary';
import AboutProperty from '@/components/AboutProperty';
import GallerySection from '@/components/GallerySection';
import LocationMap from '@/components/LocationMap';

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
      <GallerySection/>
      <LocationMap/>
      {/* <PropertyDetails
        details={{
          surface: '200 m²',
          rooms: 5,
          bathrooms: 3,
          address: '123 Rue de la Plage, Nice',
        }}
      />
      <PhotoCarousel photos={photos} /> */}
      <ContactForm />
    </main>
  );
}
