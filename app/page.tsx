import HeroSection from "@/components/HeroSection";
import SiteHeader from "@/components/SiteHeader";
import BackToTopButton from "@/components/BackToTopButton";
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
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <PopularDishes />
        <AboutSection />
        <RegularDishes />
        <OurServices />
        <FoundersSection />
        <GallerySection />
        <ReviewsSection />
        <SiteFooter />
        <BackToTopButton />
      </main>
    </>
  );
}
