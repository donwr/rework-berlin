import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import PhotoBand from "@/components/PhotoBand";
import Editorial from "@/components/Editorial";
import Concept from "@/components/Concept";
import HowItWorks from "@/components/HowItWorks";
import Impact from "@/components/Impact";
import UseCases from "@/components/UseCases";
import Partners from "@/components/Partners";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <PhotoBand />
      <Editorial />
      <Concept />
      <HowItWorks />
      <Impact />
      <UseCases />
      <Partners />
      <ContactCTA />
      <Footer />
    </>
  );
}
