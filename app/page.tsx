import HeroSection from "@/components/HeroSection";
import CoupleSection from "@/components/CoupleSection";
import TimelineSection from "@/components/TimelineSection";
import GallerySection from "@/components/GallerySection";
import WishForm from "@/components/WishForm";
import Footer from "@/components/Footer";
import OpeningInvitation from "@/components/OpeningInvitation";

export default function HomePage() {
  return (
    <>
      <OpeningInvitation />
      <main>
        <HeroSection />
        <CoupleSection />
        <TimelineSection />
        <GallerySection />
        <WishForm />
        <Footer />
      </main>
    </>
  );
}
