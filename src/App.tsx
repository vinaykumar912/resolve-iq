import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyResolveIQ from "./components/WhyResolveIQ";
import ServicesSection from "./components/ServicesSection";
import WhatSetsUsApart from "./components/WhatSetsUsApart";
import AboutSection from "./components/AboutSection";
import ProcessSection from "./components/ProcessSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import InterviewServiceSection from "./components/InterviewServiceSection";
import GCCEnablementSection from "./components/GCCEnablementSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyResolveIQ />
      <ServicesSection />
      <WhatSetsUsApart />
      <AboutSection />
      <ProcessSection />
      <InterviewServiceSection/>
      <GCCEnablementSection/>
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
