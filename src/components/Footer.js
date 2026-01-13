import { useTheme } from '../context/ThemeContext';
import { Facebook, Twitter, Instagram, Linkedin, ShoppingBag, Utensils } from 'lucide-react';

const Footer = () => {
    const { isMaterials } = useTheme();

    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <div className={`p-2 rounded-lg ${isMaterials ? 'bg-amber-500' : 'bg-blue-500'}`}>
                                {isMaterials ? <ShoppingBag size={20} className="text-white" /> : <Utensils size={20} className="text-white" />}
                            </div>
                            <span className="text-xl font-black tracking-tight">
                                {isMaterials ? 'R.K. BUILD' : 'RAJ EVENTS'}
                            </span>
                        </div>
                        <p className="text-gray-500 leading-relaxed">
                            Leading the industry for over a decade with excellence in construction supplies and elite event management.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Services', 'Testimonials', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Our Services</h4>
                        <ul className="space-y-4">
                            {isMaterials ? (
                                ['Cement Supply', 'Steel & TMT', 'Bricks & Sand', 'Site Consultation', 'Logistics'].map((s) => (
                                    <li key={s} className="text-gray-500">{s}</li>
                                ))
                            ) : (
                                ['Wedding Catering', 'Corporate Events', 'Theme Parties', 'Sound & Light', 'Venue Decor'].map((s) => (
                                    <li key={s} className="text-gray-500">{s}</li>
                                ))
                            )}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Newsletter</h4>
                        <p className="text-gray-500 mb-6">Subscribe to get latest updates and offers.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-700/20"
                            />
                            <button className={`absolute right-2 top-2 bottom-2 px-6 rounded-xl font-bold text-white ${isMaterials ? 'bg-blue-700' : 'bg-red-600 shadow-lg'}`}>
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400 font-medium">
                    <p>© 2026 R.K. & Raj Services. All rights reserved.</p>
                    <div className="flex space-x-8">
                        <a href="#" className="hover:text-blue-700">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-700">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
