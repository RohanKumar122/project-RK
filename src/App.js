import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, ChevronRight, ChevronLeft, Star, Menu, X, MessageSquare } from 'lucide-react';

export default function BusinessLandingPage() {
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

  // Primary color theme based on business
  const primaryColor = activeTab === 'materials' ? 'bg-blue-700' : 'bg-red-600';
  const primaryHoverColor = activeTab === 'materials' ? 'hover:bg-blue-800' : 'hover:bg-red-700';
  const secondaryColor = 'bg-amber-500';
  const accentColor = activeTab === 'materials' ? 'text-blue-600' : 'text-red-600';

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation bar */}
      <nav className="bg-gray-900 text-white p-4 shadow-lg sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold">
              {activeTab === 'materials' ? 'Construction Masters' : 'Prime Events'}
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
      
      {/* Hero Section with Business Toggle */}
      <section ref={homeRef} className={`relative ${activeTab === 'materials' ? 'bg-gradient-to-r from-blue-800 to-blue-600' : 'bg-gradient-to-r from-red-700 to-red-500'} text-white py-16 transition-all duration-500`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 transition-all duration-500">
                {activeTab === 'materials' ? 
                  'Quality Building Materials for Your Construction Needs' : 
                  'Premium Tent & Catering Services for Your Special Events'}
              </h1>
              <p className="text-lg mb-8 transition-all duration-500">
                {activeTab === 'materials' ? 
                  'Providing high-quality building materials including cement, steel, and more to make your construction project successful.' : 
                  'Creating memorable experiences with elegant tent setups and delicious catering for all your special occasions.'}
              </p>
              <div className="flex space-x-4">
                <button 
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${activeTab === 'materials' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 hover:bg-gray-100'}`}
                  onClick={() => setActiveTab('materials')}
                >
                  Building Materials
                </button>
                <button 
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${activeTab === 'catering' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 hover:bg-gray-100'}`}
                  onClick={() => setActiveTab('catering')}
                >
                  Tent & Catering
                </button>
              </div>
            </div>
            
            {/* Image Carousel */}
            <div className="md:w-1/2 relative">
              <div className="relative h-64 md:h-96 overflow-hidden rounded-xl shadow-2xl">
                {slides.map((slide, index) => (
                  <div 
                    key={slide.id}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                      <span className="text-lg">{slide.alt}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                      <p>{slide.description}</p>
                    </div>
                  </div>
                ))}
                
                {/* Navigation arrows */}
                <button 
                  onClick={prevSlide} 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextSlide} 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                >
                  <ChevronRight size={24} />
                </button>
                
                {/* Slide indicators */}
                <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-amber-400 scale-125' : 'bg-white bg-opacity-50'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section ref={productsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 border-b-4 ${activeTab === 'materials' ? 'border-blue-600' : 'border-red-600'} pb-2 inline-block transition-all duration-300`}>
            {activeTab === 'materials' ? 'Our Building Materials' : 'Our Services'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeTab === 'materials' ? (
              <>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                  <div className="h-48 bg-gray-300 flex items-center justify-center">
                    <span>Premium Cement</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Premium Cement</h3>
                    <p className="text-gray-700 mb-4">High-quality cement for all construction needs, available in various types including OPC, PPC, and more.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-bold">₹350/bag</span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">View Details</button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                  <div className="h-48 bg-gray-300 flex items-center justify-center">
                    <span>Steel Reinforcement</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Steel Reinforcement</h3>
                    <p className="text-gray-700 mb-4">High-tensile steel bars for reinforced concrete structures, available in various sizes.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-bold">₹65/kg</span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">View Details</button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                  <div className="h-48 bg-gray-300 flex items-center justify-center">
                    <span>Bricks & Blocks</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Bricks & Blocks</h3>
                    <p className="text-gray-700 mb-4">Quality clay bricks, fly ash bricks, and concrete blocks for sturdy construction.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-bold">₹6/piece</span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">View Details</button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                  <div className="h-48 bg-gray-300 flex items-center justify-center">
                    <span>Wedding Tents</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Wedding Tents</h3>
                    <p className="text-gray-700 mb-4">Elegant tent arrangements for weddings with customizable decorations and seating.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-red-600 font-bold">Custom Pricing</span>
                      <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300">Inquire</button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                  <div className="h-48 bg-gray-300 flex items-center justify-center">
                    <span>Corporate Events</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Corporate Events</h3>
                    <p className="text-gray-700 mb-4">Professional tent setups and catering services for corporate events and business functions.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-red-600 font-bold">Custom Pricing</span>
                      <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300">Inquire</button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                  <div className="h-48 bg-gray-300 flex items-center justify-center">
                    <span>Premium Catering</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Premium Catering</h3>
                    <p className="text-gray-700 mb-4">Delicious catering options with a variety of cuisines available for all types of events.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-red-600 font-bold">₹450/plate</span>
                      <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300">View Menu</button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section ref={servicesRef} className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 border-b-4 ${activeTab === 'materials' ? 'border-blue-600' : 'border-red-600'} pb-2 inline-block transition-all duration-300`}>
            {activeTab === 'materials' ? 'Our Services' : 'Event Packages'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {activeTab === 'materials' ? (
              <>
                <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-6 items-center transition-all duration-500 hover:shadow-xl">
                  <div className="w-full md:w-1/3 h-32 md:h-full bg-gray-300 rounded-lg flex items-center justify-center">
                    <span>Delivery</span>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                    <p className="text-gray-700 mb-4">We provide quick and reliable delivery services for all our building materials to your construction site.</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">Learn More</button>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-6 items-center transition-all duration-500 hover:shadow-xl">
                  <div className="w-full md:w-1/3 h-32 md:h-full bg-gray-300 rounded-lg flex items-center justify-center">
                    <span>Consultation</span>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Expert Consultation</h3>
                    <p className="text-gray-700 mb-4">Our experts provide valuable advice on selecting the right materials for your specific construction needs.</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">Book Consultation</button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-6 items-center transition-all duration-500 hover:shadow-xl">
                  <div className="w-full md:w-1/3 h-32 md:h-full bg-gray-300 rounded-lg flex items-center justify-center">
                    <span>Wedding</span>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Wedding Package</h3>
                    <p className="text-gray-700 mb-4">Complete wedding solution including elegant tent setup, premium catering, and customized decorations.</p>
                    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300">Get Quote</button>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-6 items-center transition-all duration-500 hover:shadow-xl">
                  <div className="w-full md:w-1/3 h-32 md:h-full bg-gray-300 rounded-lg flex items-center justify-center">
                    <span>Corporate</span>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Corporate Event Package</h3>
                    <p className="text-gray-700 mb-4">Professional arrangements for corporate events with customized branding and high-quality catering.</p>
                    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300">Get Quote</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 border-b-4 border-amber-400 pb-2 inline-block transition-all duration-300">
            Client Testimonials & Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg relative transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="absolute -top-5 -left-5 bg-amber-500 rounded-full w-10 h-10 flex items-center justify-center">
                <Star size={20} fill="white" />
              </div>
              <p className="mb-4">
                "The building materials provided were of exceptional quality. Our construction project was completed ahead of schedule thanks to their reliable supplies and timely delivery."
              </p>
              <div className="border-t border-gray-700 pt-4">
                <p className="font-bold">Rajesh Construction Co.</p>
                <p className="text-sm text-gray-400">Commercial Complex Project</p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg relative transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="absolute -top-5 -left-5 bg-amber-500 rounded-full w-10 h-10 flex items-center justify-center">
                <Star size={20} fill="white" />
              </div>
              <p className="mb-4">
                "The tent arrangement for our daughter's wedding was simply beautiful. The catering service was outstanding with delicious food that all our guests loved."
              </p>
              <div className="border-t border-gray-700 pt-4">
                <p className="font-bold">Sharma Family</p>
                <p className="text-sm text-gray-400">Wedding Event</p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg relative transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="absolute -top-5 -left-5 bg-amber-500 rounded-full w-10 h-10 flex items-center justify-center">
                <Star size={20} fill="white" />
              </div>
              <p className="mb-4">
                "We've been using their cement for all our housing projects. The consistency in quality has made them our preferred supplier for the past 5 years."
              </p>
              <div className="border-t border-gray-700 pt-4">
                <p className="font-bold">Greenview Developers</p>
                <p className="text-sm text-gray-400">Residential Project</p>
              </div>
            </div>
          </div>
          
          {/* Achievements */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Our Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className={`${activeTab === 'materials' ? 'bg-blue-600' : 'bg-red-600'} p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl`}>
                <div className="text-4xl font-bold mb-2">500+</div>
                <p>Projects Completed</p>
              </div>
              <div className={`${activeTab === 'materials' ? 'bg-blue-600' : 'bg-red-600'} p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl`}>
                <div className="text-4xl font-bold mb-2">98%</div>
                <p>Customer Satisfaction</p>
              </div>
              <div className={`${activeTab === 'materials' ? 'bg-blue-600' : 'bg-red-600'} p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl`}>
                <div className="text-4xl font-bold mb-2">10+</div>
                <p>Years of Experience</p>
              </div>
              <div className={`${activeTab === 'materials' ? 'bg-blue-600' : 'bg-red-600'} p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl`}>
                <div className="text-4xl font-bold mb-2">50+</div>
                <p>Corporate Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section ref={contactRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 border-b-4 ${activeTab === 'materials' ? 'border-blue-600' : 'border-red-600'} pb-2 inline-block transition-all duration-300`}>
            Contact Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <form className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <input type="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Phone</label>
                  <input type="tel" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Message</label>
                  <textarea rows="4" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"></textarea>
                </div>
                <button 
                  type="submit" 
                  className={`${activeTab === 'materials' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-red-600 hover:bg-red-700'} text-white py-3 px-6 rounded-md transition-colors duration-300 flex items-center`}
                >
                  <span>Send Message</span>
                  <MessageSquare size={18} className="ml-2" />
                </button>
              </form>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Information</h3>
              <div className="space-y-6">
                <div className="flex items-start transform transition-all duration-500 hover:translate-x-2">
                  <div className={`mr-4 ${activeTab === 'materials' ? 'bg-blue-600' : 'bg-red-600'} p-3 rounded-full text-white transition-colors duration-300`}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Address</h4>
                    <p className="text-gray-700">123 Construction Road, Building Zone, Industrial Area</p>
                  </div>
                </div>
                <div className="flex items-start transform transition-all duration-500 hover:translate-x-2">
                  <div className={`mr-4 ${activeTab === 'materials' ? 'bg-blue-600' : 'bg-red-600'} p-3 rounded-full text-white transition-colors duration-300`}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Phone</h4>
                    <p className="text-gray-700">+91 9876543210</p>
                    <p className="text-gray-700">+91 1234567890 </p>    
                  </div>
                </div>
                <div className="flex items-start transform transition-all duration-500 hover:translate-x-2">
                  <div className={`mr-4 ${activeTab === 'materials' ? 'bg-blue-600' : 'bg-red-600'} p-3 rounded-full text-white transition-colors duration-300`}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-gray-700">9O2oM@example.com</p>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </section>
    </div>
  );
};  