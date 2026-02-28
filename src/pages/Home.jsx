import React from 'react';
import Navbar from '../components/altura/Navbar';
import HeroSection from '../components/altura/HeroSection';
import FeaturesSection from '../components/altura/FeaturesSection';
import BenefitsStrip from '../components/altura/BenefitsStrip';
import TechnologySection from '../components/altura/TechnologySection';
import GallerySection from '../components/altura/GallerySection';
import ContactSection from '../components/altura/ContactSection';
import Footer from '../components/altura/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BenefitsStrip />
      <TechnologySection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}