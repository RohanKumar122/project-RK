import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
    const { isMaterials } = useTheme();
    const [variationTrigger, setVariationTrigger] = useState(0);

    const phoneNumber = "+919794202020";
    const businessName = isMaterials ? "R.K. Building Materials" : "Raj Tent And Caterers";
    const message = `Hello ${businessName}, I would like to inquire about your services.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Trigger animation variation every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setVariationTrigger(prev => prev + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const variationVariants = {
        jiggle: {
            rotate: [0, -10, 10, -10, 10, 0],
            scale: [1, 1.1, 1],
            transition: { duration: 0.5 }
        },
        pulse: {
            scale: [1, 1.2, 1],
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    ...(variationTrigger % 2 === 0 ? variationVariants.jiggle : variationVariants.pulse)
                }}
                key={variationTrigger}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-16 h-16 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] bg-[#25D366] overflow-hidden"
                title="Chat with us on WhatsApp"
            >
                <div className="relative w-full h-full flex items-center justify-center p-3">
                    <img
                        src="/Images/whatsapp.png"
                        alt="WhatsApp"
                        className="w-full h-full object-contain"
                    />
                    <span className="absolute top-2 right-2 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-white/40"></span>
                    </span>
                </div>

                {/* Tooltip Label */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-20 bg-white text-gray-900 px-4 py-2 rounded-xl shadow-2xl font-bold text-sm whitespace-nowrap pointer-events-none border border-gray-100 flex items-center space-x-2"
                >
                    <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    <span>Chat with <span className={isMaterials ? 'text-blue-700' : 'text-red-600'}>{isMaterials ? 'R.K. Build' : 'Raj Events'}</span></span>
                </motion.div>
            </motion.a>
        </div>
    );
};

export default WhatsAppButton;
