import HeroSection from "@/components/HeroSection";
import CoupleSection from "@/components/CoupleSection";
import TimelineSection from "@/components/TimelineSection";
import GallerySection from "@/components/GallerySection";
import WishForm from "@/components/WishForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CoupleSection />
      <TimelineSection />
      <GallerySection />
      <WishForm />
      <Footer />
    </main>
  );
}
