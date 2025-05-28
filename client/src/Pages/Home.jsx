import React from "react";
import Nav from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import Visa from "../Pages/Visa";
import Contact from "./Contact";
import HappyCust from "./HappyCust";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HappyCust />
      <Visa />
      <Contact />
      <WhatsAppButton />
    </>
  );
}

export default Home;
