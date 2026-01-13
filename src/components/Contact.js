import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Mail, Phone, MapPin, Send, MessageSquare, ChevronRight } from 'lucide-react';

const Contact = ({ contactRef }) => {
    const { isMaterials } = useTheme();

    return (
        <section ref={contactRef} className="py-24 bg-gray-900 text-white relative overflow-hidden">
            {/* Glow Effects */}
            <div className={`absolute top-0 right-0 w-96 h-96 blur-[150px] -mr-48 -mt-48 transition-colors ${isMaterials ? 'bg-blue-600/20' : 'bg-red-600/20'}`} />
            <div className={`absolute bottom-0 left-0 w-96 h-96 blur-[150px] -ml-48 -mb-48 transition-colors ${isMaterials ? 'bg-amber-500/10' : 'bg-red-500/10'}`} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-6xl font-black mb-8 leading-tight"
                            >
                                Let's Build <br />
                                Something <span className={isMaterials ? 'text-amber-500' : 'text-blue-400'}>Great</span> Together
                            </motion.h2>
                            <p className="text-gray-400 text-xl mb-12 max-w-md leading-relaxed">
                                Have a project in mind? Reach out to us for a free quote or consultation. Our experts are ready to assist you.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { icon: <Phone />, title: "Call Us", content: "+91 97942 02020", color: isMaterials ? 'bg-amber-500' : 'bg-blue-500', href: "tel:+919794202020" },
                                    { icon: <Mail />, title: "Email Us", content: "contact@rk-raj.com", color: isMaterials ? 'bg-blue-600' : 'bg-red-600', href: "mailto:contact@rk-raj.com" },
                                    { icon: <MapPin />, title: "Location", content: "Industrial Area, Building Zone, UP, India", color: "bg-gray-700" },
                                ].map((item, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={item.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className={`flex items-center space-x-6 group ${item.href ? 'cursor-pointer' : ''}`}
                                    >
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white ${item.color} shadow-lg transition-transform group-hover:scale-110`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-gray-400 font-bold uppercase tracking-wider text-xs mb-1">{item.title}</h4>
                                            <p className="text-xl font-bold">{item.content}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-dark p-10 rounded-[2.5rem] border border-white/5 shadow-2xl"
                        >
                            <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
                                <MessageSquare className={isMaterials ? 'text-amber-500' : 'text-blue-400'} />
                                <span>Quick Inquiry</span>
                            </h3>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-400 ml-1 uppercase tracking-widest">Full Name</label>
                                        <input type="text" className="w-full bg-white/10 border-2 border-white/5 rounded-2xl p-4 focus:outline-none focus:border-amber-500/50 focus:bg-white/15 transition-all placeholder:text-gray-600" placeholder="e.g. John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-400 ml-1 uppercase tracking-widest">Phone Number</label>
                                        <input type="tel" className="w-full bg-white/10 border-2 border-white/5 rounded-2xl p-4 focus:outline-none focus:border-amber-500/50 focus:bg-white/15 transition-all placeholder:text-gray-600" placeholder="+91 00000 00000" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 ml-1 uppercase tracking-widest">Interested In</label>
                                    <div className="relative">
                                        <select className="w-full bg-white/10 border-2 border-white/5 rounded-2xl p-4 focus:outline-none focus:border-amber-500/50 focus:bg-white/15 transition-all appearance-none cursor-pointer">
                                            {isMaterials ? (
                                                <>
                                                    <option className="bg-gray-900">Cement Purchase</option>
                                                    <option className="bg-gray-900">Steel / Saria</option>
                                                    <option className="bg-gray-900">Bulk Construction Mix</option>
                                                </>
                                            ) : (
                                                <>
                                                    <option className="bg-gray-900">Wedding Catering</option>
                                                    <option className="bg-gray-900">Tent Setup</option>
                                                    <option className="bg-gray-900">Corporate Event</option>
                                                </>
                                            )}
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <ChevronRight className="rotate-90" size={20} />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 ml-1 uppercase tracking-widest">Your Message</label>
                                    <textarea rows="4" className="w-full bg-white/10 border-2 border-white/5 rounded-2xl p-4 focus:outline-none focus:border-amber-500/50 focus:bg-white/15 transition-all placeholder:text-gray-600" placeholder="Tell us about your requirements..."></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02, translateY: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center space-x-3 shadow-2xl ${isMaterials ? 'bg-amber-500 text-blue-900' : 'bg-blue-500 text-white'
                                        } transition-all`}
                                >
                                    <span>Send Inquiry</span>
                                    <Send size={20} />
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
