import HeroSection from "@/components/HeroSection";
import BackToTopButton from "@/components/BackToTopButton";
import ScrollReveal from "@/components/ScrollReveal";
import PopularDishes from "@/components/PopularDishes";
import AboutSection from "@/components/AboutSection";
import FoundersSection from "@/components/FoundersSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import RegularDishes from "@/components/RegularDishes";
import OurServices from "@/components/OurServices";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ScrollReveal>
        <PopularDishes />
      </ScrollReveal>
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal>
        <RegularDishes />
      </ScrollReveal>
      <ScrollReveal>
        <OurServices />
      </ScrollReveal>
      <ScrollReveal>
        <FoundersSection />
      </ScrollReveal>
      <ScrollReveal>
        <GallerySection />
      </ScrollReveal>
      <ScrollReveal>
        <ReviewsSection />
      </ScrollReveal>
      <ScrollReveal>
        <SiteFooter />
      </ScrollReveal>
      <BackToTopButton />
    </main>
  );
}
