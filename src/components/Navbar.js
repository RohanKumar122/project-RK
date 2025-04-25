import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, ChevronRight, ChevronLeft, Star, Menu, X, MessageSquare } from 'lucide-react';

  
const Navbar = () => {
    
  const [activeTab, setActiveTab] = useState('materials');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs for section scrolling
  const homeRef = useRef(null);
  const productsRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  // Images for building materials
  const materialSlides = [
    { id: 1, alt: "Premium cement products", description: "High-quality cement for all construction needs" },
    { id: 2, alt: "Construction materials display", description: "Wide range of building materials available" },
    { id: 3, alt: "Steel reinforcement bars", description: "Durable steel products for construction" }
  ];

  // Images for tent and catering
  const cateringSlides = [
    { id: 1, alt: "Elegant wedding setup", description: "Beautiful wedding tent arrangements" },
    { id: 2, alt: "Corporate event catering", description: "Professional catering services for corporate events" },
    { id: 3, alt: "Birthday party setup", description: "Colorful tent and catering setup for celebrations" }
  ];

  // Get the current slides based on active tab
  const slides = activeTab === 'materials' ? materialSlides : cateringSlides;

  // Scroll to section function
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsMenuOpen(false);
    }
  };

  // Auto change slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length, activeTab]);

  // Next slide function
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Previous slide function
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg sticky top-0 z-50 transition-all duration-300">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold">
          {activeTab === 'materials' ? 'R.K. Building Materials' : 'Raj Tent And Caterers'}
        </div>
      </div>
      
      {/* Desktop navigation */}
      <div className="hidden md:flex space-x-6">
        <button onClick={() => scrollToSection(homeRef)} className="hover:text-amber-400 transition-colors duration-300">Home</button>
        <button onClick={() => scrollToSection(productsRef)} className="hover:text-amber-400 transition-colors duration-300">Products</button>
        <button onClick={() => scrollToSection(servicesRef)} className="hover:text-amber-400 transition-colors duration-300">Services</button>
        <button onClick={() => scrollToSection(testimonialsRef)} className="hover:text-amber-400 transition-colors duration-300">Testimonials</button>
        <button onClick={() => scrollToSection(contactRef)} className="hover:text-amber-400 transition-colors duration-300">Contact</button>
      </div>
      
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
    
    {/* Mobile navigation */}
    {isMenuOpen && (
      <div className="md:hidden bg-gray-800 text-white py-2 absolute left-0 right-0 transition-all duration-300 ease-in-out">
        <div className="container mx-auto flex flex-col space-y-2">
          <button onClick={() => scrollToSection(homeRef)} className="py-2 hover:text-amber-400 transition-colors duration-300">Home</button>
          <button onClick={() => scrollToSection(productsRef)} className="py-2 hover:text-amber-400 transition-colors duration-300">Products</button>
          <button onClick={() => scrollToSection(servicesRef)} className="py-2 hover:text-amber-400 transition-colors duration-300">Services</button>
          <button onClick={() => scrollToSection(testimonialsRef)} className="py-2 hover:text-amber-400 transition-colors duration-300">Testimonials</button>
          <button onClick={() => scrollToSection(contactRef)} className="py-2 hover:text-amber-400 transition-colors duration-300">Contact</button>
        </div>
      </div>
    )}
  </nav>
  )
}

export default Navbar