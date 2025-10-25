import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Locations from './components/Locations';
import Stats from './components/Stats';
import ValueProposition from './components/ValueProposition';
import Features from './components/Features';
import FAQ from './components/FAQ';
import DataControl from './components/DataControl';
import Testimonials from './components/Testimonials';
import VideoTestimonials from './components/VideoTestimonials';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Locations />
      <Stats />
      <ValueProposition />
      <Features />
      <FAQ />
      <DataControl />
      <Testimonials />
      <VideoTestimonials />
      <WhyWorkWithUs />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;