import HeroSection from "@/components/HeroSection";
import CoupleSection from "@/components/CoupleSection";
// import TimelineSection from "@/components/TimelineSection";
import GallerySection from "@/components/GallerySection";
import WishForm from "@/components/WishForm";
import Footer from "@/components/Footer";
import OpeningInvitation from "@/components/OpeningInvitation";
import WeddingInfoSection from "@/components/WeddingInfoSection";

export default function HomePage() {
  return (
    <>
      <OpeningInvitation />
      <main>
        <HeroSection />
        <CoupleSection />
        <WeddingInfoSection />

        <GallerySection />
        <WishForm />
        <Footer />
      </main>
    </>
  );
}
