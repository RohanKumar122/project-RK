import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ChevronRight, ArrowRight } from 'lucide-react';

const Hero = ({ scrollToSection, productsRef }) => {
    const { isMaterials } = useTheme();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-110"
                    style={{
                        backgroundImage: isMaterials
                            ? "url('/Images/acc-hero.jpg')"
                            : "url('/Images/raj-banner.jpg')",
                    }}
                />
                {/* Multi-layered Overlay for depth */}
                <div className={`absolute inset-0 transition-colors duration-1000 ${isMaterials
                    ? 'bg-gradient-to-br from-blue-950/95 via-blue-900/70 to-blue-800/40'
                    : 'bg-gradient-to-br from-red-950/95 via-red-900/70 to-red-800/40'
                    }`} />
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-dark text-white/90 text-sm font-bold mb-6 border border-white/10">
                        <span className={`w-2 h-2 rounded-full ${isMaterials ? 'bg-amber-500' : 'bg-blue-400'} animate-pulse`} />
                        <span>{isMaterials ? 'Trusted by 500+ Contractors' : 'Premier Event Organizers'}</span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-black text-white leading-tight mb-6"
                    >
                        {isMaterials ? (
                            <>
                                Building <span className="text-amber-500">Excellence</span> <br />
                                From the Ground Up
                            </>
                        ) : (
                            <>
                                Making Your <span className="text-blue-400">Events</span> <br />
                                Unforgettable
                            </>
                        )}
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed"
                    >
                        {isMaterials
                            ? 'Premium building materials sourced from top brands. We deliver quality cement, steel, and essentials directly to your site.'
                            : 'Elegant tent setups and gourmet catering tailored for weddings, corporate events, and grand celebrations.'}
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button
                            onClick={() => scrollToSection(productsRef)}
                            className={`group px-8 py-4 rounded-full font-black text-lg flex items-center justify-center space-x-3 transition-all ${isMaterials ? 'bg-amber-500 hover:bg-amber-600 text-blue-900' : 'bg-blue-500 hover:bg-blue-600 text-white'
                                }`}
                        >
                            <span>{isMaterials ? 'Explore Materials' : 'View Packages'}</span>
                            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href="tel:+919794202020"
                            className="px-8 py-4 rounded-full font-black text-lg glass-dark text-white border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center space-x-3"
                        >
                            <span>Get Free Quote</span>
                            <ArrowRight size={20} />
                        </a>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8 max-w-lg">
                        <div>
                            <div className="text-3xl font-black text-white">10+</div>
                            <div className="text-sm text-gray-400 font-bold uppercase tracking-wider">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-white">99%</div>
                            <div className="text-sm text-gray-400 font-bold uppercase tracking-wider">Client Satisfaction</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-white">500+</div>
                            <div className="text-sm text-gray-400 font-bold uppercase tracking-wider">Projects Completed</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Aesthetic Elements */}
            <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="w-full h-full flex items-center justify-center p-12"
                >
                    <div className={`w-64 h-64 rounded-full blur-[120px] ${isMaterials ? 'bg-amber-500/30' : 'bg-blue-500/30'}`} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
