import { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingBag, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = ({ scrollToSection, refs }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMaterials, toggleTheme, activeTab } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', ref: refs.homeRef },
    { name: 'Products', ref: refs.productsRef },
    { name: 'Services', ref: refs.servicesRef },
    { name: 'Testimonials', ref: refs.testimonialsRef },
    { name: 'Contact', ref: refs.contactRef },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-dark py-3 shadow-2xl' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <div className={`p-2 rounded-xl shadow-lg transition-colors duration-500 ${isMaterials ? 'bg-amber-500' : 'bg-blue-500'}`}>
            {isMaterials ? <ShoppingBag size={24} className="text-white" /> : <Utensils size={24} className="text-white" />}
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase italic">
              {isMaterials ? (
                <>R.K. <span className="text-amber-500">BUILDING MATERIALS</span></>
              ) : (
                <>RAJ <span className="text-blue-400">EVENTS</span></>
              )}
            </span>
            <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">
              {isMaterials ? 'Building Excellence' : 'Premier Catering'}
            </span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.ref)}
              className="text-gray-200 hover:text-white font-medium transition-colors relative group"
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isMaterials ? 'bg-amber-500' : 'bg-blue-400'} transition-all group-hover:w-full`}></span>
            </button>
          ))}

          <div className="flex bg-gray-800/50 p-1 rounded-full border border-gray-700">
            <button
              onClick={() => toggleTheme('materials')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${activeTab === 'materials' ? 'bg-amber-500 text-white' : 'text-gray-400'
                }`}
            >
              MATERIALS
            </button>
            <button
              onClick={() => toggleTheme('catering')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${activeTab === 'catering' ? 'bg-blue-500 text-white' : 'text-gray-400'
                }`}
            >
              EVENTS
            </button>
          </div>

          <motion.a
            href="tel:+919794202020"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center space-x-2 px-6 py-2.5 rounded-full font-bold text-white shadow-lg ${isMaterials ? 'bg-blue-700 hover:bg-blue-800' : 'bg-red-600 hover:bg-red-700'
              } transition-all`}
          >
            <Phone size={18} />
            <span>Call Now</span>
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-dark border-t border-gray-800 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    scrollToSection(link.ref);
                    setIsMenuOpen(false);
                  }}
                  className="text-xl text-left text-gray-200 font-bold"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex bg-gray-800 p-1 rounded-xl border border-gray-700">
                <button
                  onClick={() => toggleTheme('materials')}
                  className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${activeTab === 'materials' ? 'bg-amber-500 text-white' : 'text-gray-400'
                    }`}
                >
                  Building Materials
                </button>
                <button
                  onClick={() => toggleTheme('catering')}
                  className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${activeTab === 'catering' ? 'bg-blue-500 text-white' : 'text-gray-400'
                    }`}
                >
                  Tent & Catering
                </button>
              </div>
              <a
                href="tel:+919794202020"
                className={`w-full py-4 rounded-xl font-bold text-white text-center ${isMaterials ? 'bg-blue-700' : 'bg-red-600'
                  }`}>
                Contact Us Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;