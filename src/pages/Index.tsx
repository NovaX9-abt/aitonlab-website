import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Philosophy from "@/components/Philosophy";
import Protocol from "@/components/Protocol";

const Index = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 750,
      easing: "ease-out-cubic",
      offset: 60,
    });
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Glow divider */}
      <div className="glow-line opacity-40" />

      <Services />
      <Philosophy />
      <Protocol />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
