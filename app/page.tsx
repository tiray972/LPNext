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
import ContentSection from '@/components/ContentSection';

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
      <ContentSection
      imageSrc="/images/image2.jpeg"
      imageAlt="Garage prestigieux"
      title="Un Garage Prestigieux"
      text="Vous êtes amateur de belles voitures ? Le garage fermé et climatisé de plus de 150 m² est fait pour vous. Il offre une sécurité optimale pour vos véhicules et accueille également toute la machinerie de la maison."
      buttonText="Voir plus"
      buttonLink="#galerie"
    />
      <LifestyleSection />
      <HighlightSection/>
      <GallerySection/>
      <LocationMap/>
      <ContactForm />
    </main>
  );
}
