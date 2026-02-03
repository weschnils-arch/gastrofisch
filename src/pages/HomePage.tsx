import HeroSection from '../sections/HeroSection';
import ThreePillarsSection from '../sections/ThreePillarsSection';
import AboutSection from '../sections/AboutSection';
import ProductShowcaseSection from '../sections/ProductShowcaseSection';
import BistroTeaserSection from '../sections/BistroTeaserSection';
import VisualGallerySection from '../sections/VisualGallerySection';
import CTASection from '../sections/CTASection';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <ThreePillarsSection />
      <AboutSection />
      <ProductShowcaseSection />
      <VisualGallerySection />
      <BistroTeaserSection />
      <CTASection />
    </main>
  );
};

export default HomePage;
