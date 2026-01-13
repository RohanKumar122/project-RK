import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Truck, ShieldCheck, Clock, Award, Users, Zap } from 'lucide-react';

const Features = () => {
    const { isMaterials } = useTheme();

    const features = isMaterials ? [
        { icon: <Truck />, title: "On-Site Delivery", desc: "Reliable transportation to your construction site across the region." },
        { icon: <ShieldCheck />, title: "Certified Quality", desc: "We only supply materials that meet highest industry standards." },
        { icon: <Clock />, title: "24/7 Support", desc: "Our team is always available to help with your project needs." },
        { icon: <Award />, title: "Premium Brands", desc: "Authorized dealers for Ultratech, ACC, and Tata Tiscon." },
        { icon: <Users />, title: "Expert Advice", desc: "Free consultation for material estimation and planning." },
        { icon: <Zap />, title: "Instant Quotes", desc: "Get real-time pricing and availability for all materials." },
    ] : [
        { icon: <Zap />, title: "Custom Setups", desc: "Personalized tent designs and themes for every occasion." },
        { icon: <ShieldCheck />, title: "Hygiene Priority", desc: "Strict adherence to safety and hygiene in food preparation." },
        { icon: <Clock />, title: "Timely Service", desc: "We ensure everything is ready well before your event starts." },
        { icon: <Award />, title: "Expert Chefs", desc: "Handpicked culinary team specializing in multiple cuisines." },
        { icon: <Users />, title: "Guest Care", desc: "Professional staff to provide seamless service to your guests." },
        { icon: <ShieldCheck />, title: "Weather Proof", desc: "High-quality, durable tents to keep your event safe from weather." },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-6"
                    >
                        Why Choose <span className={isMaterials ? 'text-blue-700' : 'text-red-600'}>Our Services?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 max-w-2xl mx-auto text-lg"
                    >
                        We provide end-to-end solutions with a focus on quality, reliability, and customer satisfaction that has defined us for a decade.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all group"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all ${isMaterials ? 'bg-blue-100 text-blue-700 group-hover:bg-blue-700 group-hover:text-white' : 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white'
                                }`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
