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
          onClick={() => scrollToSection(refs.homeRef)}
          className="flex items-center space-x-2 cursor-pointer relative z-[70]"
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
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 -mr-2 relative z-[70] focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <motion.div
                animate={isMenuOpen ? { opacity: 0, rotate: 90 } : { opacity: 1, rotate: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute"
              >
                <Menu size={32} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotate: -90 }}
                animate={isMenuOpen ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
                className="absolute"
              >
                <X size={32} />
              </motion.div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 w-full h-screen bg-gray-900 z-50 overflow-y-auto lg:hidden pt-24"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    scrollToSection(link.ref);
                    setIsMenuOpen(false);
                  }}
                  className="text-4xl text-left text-white font-black tracking-tight border-b border-white/5 pb-4"
                >
                  {link.name}
                </motion.button>
              ))}

              <div className="pt-4">
                <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-4">Switch Business</p>
                <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10">
                  <button
                    onClick={() => toggleTheme('materials')}
                    className={`flex-1 py-4 rounded-xl text-xs font-black transition-all ${activeTab === 'materials' ? 'bg-amber-500 text-blue-900 shadow-xl' : 'text-gray-400'
                      }`}
                  >
                    Building Materials
                  </button>
                  <button
                    onClick={() => toggleTheme('catering')}
                    className={`flex-1 py-4 rounded-xl text-xs font-black transition-all ${activeTab === 'catering' ? 'bg-blue-500 text-white shadow-xl' : 'text-gray-400'
                      }`}
                  >
                    Events & Catering
                  </button>
                </div>
              </div>

              <a
                href="tel:+919794202020"
                className={`w-full py-5 rounded-2xl font-black text-xl text-white text-center shadow-2xl ${isMaterials ? 'bg-blue-700' : 'bg-red-600'
                  }`}>
                Call Our Experts Now
              </a>

              <div className="pt-8 text-center">
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">© 2026 RK & Raj Services</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;