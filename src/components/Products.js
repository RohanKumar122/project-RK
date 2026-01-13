import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ShoppingCart, Star } from 'lucide-react';

const Products = ({ productsRef }) => {
    const { isMaterials } = useTheme();

    const materialsList = [
        { name: "Ultratech Cement", price: "₹405", unit: "per bag", img: "/Images/ultratech-bori2.jpg", rating: 5, tag: "Best Seller" },
        { name: "ACC Gold Water Shield", price: "₹420", unit: "per bag", img: "/Images/acc-bori2.jpg", rating: 4.8, tag: "Premium" },
        { name: "TMT Steel Saria", price: "₹65", unit: "per kg", img: "/Images/saria_clean.png", rating: 4.9, tag: "Structural" },
        { name: "Red Clay Bricks", price: "₹7.5", unit: "per piece", img: "/Images/bricks_clean.png", rating: 4.7, tag: "A-Grade" },
    ];

    const servicesList = [
        { name: "Royal Wedding Package", price: "Custom", unit: "Starting from ₹2.5L", img: "/Images/raj-banner.jpg", rating: 5, tag: "Grand" },
        { name: "Birthday Celebration", price: "₹25k", unit: "Basic Setup", img: "/Images/raj-birthdayImg2.jpg", rating: 4.9, tag: "Trending" },
        { name: "Corporate Catering", price: "₹450", unit: "per plate", img: "/Images/raj-professional.jpg", rating: 4.8, tag: "Business" },
        { name: "Theme Tent House", price: "Custom", unit: "Starts ₹50k", img: "/Images/raj-img1.jpg", rating: 5, tag: "Elegant" },
    ];

    const currentList = isMaterials ? materialsList : servicesList;

    return (
        <section ref={productsRef} className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight"
                        >
                            {isMaterials ? (
                                <>Premium <span className="text-blue-700">Materials</span></>
                            ) : (
                                <>Exclusive <span className="text-red-700">Packages</span></>
                            )}
                        </motion.h2>
                        <p className="text-gray-500 text-lg">Browse our top-rated {isMaterials ? 'construction supplies' : 'event services'}</p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className={`px-8 py-3 rounded-full font-bold border-2 ${isMaterials ? 'border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white' : 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white'} transition-all`}
                    >
                        View All Catalog
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {currentList.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white ${isMaterials ? 'bg-blue-700' : 'bg-red-600'}`}>
                                        {item.tag}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center space-x-1 mb-2 text-amber-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill={i < Math.floor(item.rating) ? "currentColor" : "none"} />
                                    ))}
                                    <span className="text-gray-400 text-xs font-bold ml-2">({item.rating})</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-700 transition-colors">{item.name}</h3>

                                <div className="flex items-center justify-between mt-6">
                                    <div>
                                        <span className="text-2xl font-black">{item.price}</span>
                                        <span className="text-gray-400 text-sm font-medium ml-1">/{item.unit}</span>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`p-3 rounded-2xl ${isMaterials ? 'bg-blue-700' : 'bg-red-600'} text-white shadow-lg`}
                                    >
                                        <ShoppingCart size={20} />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
