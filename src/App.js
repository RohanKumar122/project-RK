import { useRef } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function LandingPage() {
  const homeRef = useRef(null);
  const productsRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    homeRef,
    productsRef,
    servicesRef,
    testimonialsRef,
    contactRef,
  };

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-gilroy">
      <Navbar scrollToSection={scrollToSection} refs={refs} />

      <main>
        <div ref={homeRef}>
          <Hero scrollToSection={scrollToSection} productsRef={productsRef} />
        </div>

        <Features />

        <div ref={productsRef}>
          <Products productsRef={productsRef} />
        </div>

        <div ref={servicesRef}>
          {/* Content for services is handled within components based on ThemeContext */}
        </div>

        <div ref={testimonialsRef}>
          <Testimonials testimonialsRef={testimonialsRef} />
        </div>

        <div ref={contactRef}>
          <Contact contactRef={contactRef} />
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
}