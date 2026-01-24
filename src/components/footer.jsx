import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

export const Footer = () => {
    const isDark = useSelector((state) => state.theme.isDark);

    // Premium Colors matching Home page
    const footerBg = isDark
        ? 'bg-gradient-to-t from-[#0A0A0A] to-[#141414]'
        : 'bg-gradient-to-t from-[#E8DDD0] to-[#F5EFE7]';

    const textColor = isDark ? 'text-[#F5F5F4]' : 'text-[#2C2416]';
    const mutedText = isDark ? 'text-[#A0A0A0]' : 'text-[#6B5D4F]';
    const borderColor = isDark ? 'border-[#2A2A2A]' : 'border-[#C4B5A0]';
    const accentGradient = isDark
        ? 'from-[#D4AF37] to-[#F4E4C1]'
        : 'from-[#8B6914] to-[#DAA520]';

    const socialLinks = [
        { icon: Instagram, href: 'https://www.instagram.com/abstractart_dora?igsh=MXh6Y3N4OG9tdGo3Yw==', label: 'Instagram' },
        { icon: Facebook, href: 'https://www.facebook.com/share/1CN3QgibGj/', label: 'Facebook' },
        { icon: Mail, href: 'mailto:v_dorarch@hotmail.com', label: 'Email' }
    ];

    return (
        <footer className={`${footerBg} ${textColor} border-t ${borderColor} transition-all duration-500`}>
            <div className="container mx-auto px-6 md:px-8 py-16">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
                    {/* Artist Name & Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center md:text-left"
                    >
                        <h3 className="font-brusher text-3xl md:text-4xl font-serif font-bold tracking-tight mb-2">
                            Vasant Dora
                        </h3>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '4rem' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className={`h-1 bg-gradient-to-r ${accentGradient} mx-auto md:mx-0 mb-3`}
                        />
                        <p className={`text-sm italic ${mutedText} max-w-xs`}>
                            Contemporary Painter exploring the Leela of Colors
                        </p>
                    </motion.div>

                    {/* Social Media Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col items-center md:items-end gap-4"
                    >
                        <p className="text-xs uppercase tracking-widest mb-2">Connect</p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    whileHover={{
                                        scale: 1.2,
                                        y: -4,
                                        rotate: 5
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`p-3 rounded-full border ${borderColor} ${isDark ? 'hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]' : 'hover:bg-[#B8860B]/10 hover:border-[#B8860B]'} transition-all duration-300`}
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className={`h-px bg-gradient-to-r ${isDark ? 'from-transparent via-[#2A2A2A] to-transparent' : 'from-transparent via-[#C4B5A0] to-transparent'} mb-8`}
                />

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={`text-center text-sm ${mutedText}`}
                >
                    <p>© {new Date().getFullYear()} Vasant Dora. All rights reserved.</p>
                    <p className="text-xs mt-2 opacity-70">
                        Designed with passion for art and aesthetics
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};