import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Mail, MapPin, Instagram, Linkedin, Send } from 'lucide-react';

export const Contact = () => {
    const isDark = useSelector((state) => state.theme.isDark);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    // Dynamic Theme Styling
    const bgColor = isDark ? 'bg-[#0A0A0A]' : 'bg-[#F5EFE7]';
    const textColor = isDark ? 'text-[#F5F5F4]' : 'text-[#2C2416]';
    const inputBg = isDark ? 'bg-white/5' : 'bg-black/5';
    const borderColor = isDark ? 'border-white/10' : 'border-black/10';
    const accentColor = isDark ? 'text-[#D4AF37]' : 'text-[#8B6914]';
    const buttonBg = isDark ? 'bg-[#D4AF37] text-black' : 'bg-[#8B6914] text-white';

    return (
        <div className={`min-h-screen transition-colors duration-700 ${bgColor} ${textColor} pt-32 pb-20 overflow-x-hidden`}>
            <div className="container mx-auto px-4 md:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <h1 className="font-mistral text-5xl md:text-8xl font-serif tracking-tighter mb-6">Get in Touch</h1>
                    <p className={`text-lg md:text-xl font-serif italic opacity-70 max-w-2xl`}>
                        For commissions, exhibition inquiries, or to simply share a realization — let us begin a conversation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-4 space-y-12"
                    >
                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className={`p-3 rounded-full border ${borderColor} group-hover:border-[#D4AF37] transition-colors`}>
                                    <Mail size={20} className={accentColor} />
                                </div>
                                <div>
                                    <h3 className="text-xs uppercase tracking-[0.3em] opacity-40 mb-2 font-serif">Email</h3>
                                    <p className="text-lg font-serif select-all">v_dorarch@hotmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 group">
                                <div className={`p-3 rounded-full border ${borderColor} group-hover:border-[#D4AF37] transition-colors`}>
                                    <MapPin size={20} className={accentColor} />
                                </div>
                                <div>
                                    <h3 className="text-xs uppercase tracking-[0.3em] opacity-40 mb-2 font-serif">Location</h3>
                                    <p className="text-lg font-serif">New Delhi, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CONTACT FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-8"
                    >
                        {/* Point this action to your PHP file location */}
                        <form action="contact_handler.php" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest opacity-50 ml-1">Full Name</label>
                                <input
                                    name="full_name"
                                    type="text"
                                    required
                                    className={`w-full ${inputBg} border ${borderColor} p-4 focus:outline-none focus:border-[#D4AF37] transition-colors font-serif`}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest opacity-50 ml-1">Email Address</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className={`w-full ${inputBg} border ${borderColor} p-4 focus:outline-none focus:border-[#D4AF37] transition-colors font-serif`}
                                />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-[10px] uppercase tracking-widest opacity-50 ml-1">Subject</label>
                                <input
                                    name="subject"
                                    type="text"
                                    required
                                    placeholder="Purpose of inquiry"
                                    className={`w-full ${inputBg} border ${borderColor} p-4 focus:outline-none focus:border-[#D4AF37] transition-colors font-serif`}
                                />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-[10px] uppercase tracking-widest opacity-50 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    rows="6"
                                    required
                                    className={`w-full ${inputBg} border ${borderColor} p-4 focus:outline-none focus:border-[#D4AF37] transition-colors font-serif resize-none`}
                                />
                            </div>
                            <div className="md:col-span-2 pt-4">
                                <button type="submit" className={`w-full md:w-auto px-12 py-4 ${buttonBg} font-bold uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform`}>
                                    Send Message <Send size={16} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};