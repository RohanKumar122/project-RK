import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Quote, Star } from 'lucide-react';

const Testimonials = ({ testimonialsRef }) => {
    const { isMaterials } = useTheme();

    const reviews = [
        {
            name: "Rajesh Kumar",
            role: "Property Developer",
            text: "The quality of cement and steel supplied by R.K. Materials is unmatched. Their timely delivery saved us weeks on our latest residential project.",
            rating: 5,
            img: "https://i.pravatar.cc/150?u=1"
        },
        {
            name: "Priya Sharma",
            role: "Event Planner",
            text: "Raj Tent and Caterers made my brother's wedding a fairy tale. The food was delicious and the tent decor was absolutely stunning!",
            rating: 5,
            img: "https://i.pravatar.cc/150?u=2"
        },
        {
            name: "Amit Singh",
            role: "Contractor",
            text: "Reliable, transparent pricing, and excellent support. They are my go-to partners for all construction material needs.",
            rating: 4,
            img: "https://i.pravatar.cc/150?u=3"
        }
    ];

    return (
        <section ref={testimonialsRef} className={`py-24 ${isMaterials ? 'bg-blue-900' : 'bg-red-900'} relative overflow-hidden`}>
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <Quote size={400} className="absolute -left-20 -top-20 text-white" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white mb-6"
                    >
                        What Our <span className={isMaterials ? 'text-amber-500' : 'text-blue-400'}>Clients Say</span>
                    </motion.h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Real stories from people who trusted us with their dreams and projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/95 backdrop-blur-md p-10 rounded-[2.5rem] relative group shadow-2xl hover:shadow-white/10 transition-all border border-white/20"
                        >
                            <div className="flex items-center space-x-1 mb-6 text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} />
                                ))}
                            </div>

                            <p className="text-gray-800 text-lg italic mb-10 leading-relaxed font-medium">
                                "{review.text}"
                            </p>

                            <div className="flex items-center space-x-4 border-t border-gray-100 pt-6">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black text-white shadow-inner ${isMaterials ? 'bg-blue-700' : 'bg-red-600'
                                    }`}>
                                    {review.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <h4 className="font-black text-gray-950 text-base">{review.name}</h4>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
