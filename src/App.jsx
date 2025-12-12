import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PillarsSection from './components/PillarsSection';
import ScheduleSection from './components/ScheduleSection';
import ShowcaseSection from './components/ShowcaseSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <PillarsSection />
        <ScheduleSection />
        <ShowcaseSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;