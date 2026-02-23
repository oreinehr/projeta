import Hero from "@/components/Hero";
import Lifestyle from "@/components/Lifestyle";
import Architecture from "@/components/Architeture";
import DesignSection from "@/components/DesignSection";
import Gallery from "@/components/Gallery";
import FloorPlans from "@/components/FloorPlans";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Lifestyle />
      <Architecture />
      <DesignSection />
      <Gallery />
      <FloorPlans />
      <Experience />
      <Contact />
    </>
  );
}