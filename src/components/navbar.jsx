import { Link, Outlet } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './context/themeContext';
import { Footer } from './footer';

export const Navbar = () => {
    const isDark = useSelector((state) => state.theme.isDark);
    const dispatch = useDispatch();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = ['Home', 'About', 'Portfolio', 'Credentials', 'Contact'];

    const navBg = isDark
        ? 'bg-[#0A0A0A]/95'
        : 'bg-[#FAF7F2]/95';

    const textColor = isDark ? 'text-[#F5F5F4]' : 'text-[#2C2416]';
    const hoverColor = isDark ? 'hover:text-[#D4AF37]' : 'hover:text-[#B8860B]';
    const borderColor = isDark ? 'border-[#2A2A2A]' : 'border-[#C4B5A0]';
    const accentGradient = isDark
        ? 'from-[#D4AF37] to-[#F4E4C1]'
        : 'from-[#8B6914] to-[#DAA520]';

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`fixed top-0 w-full z-[100] px-6 md:px-8 py-6 flex justify-between items-center ${navBg} backdrop-blur-md border-b ${borderColor} transition-all duration-500`}
            >
                <Link to="/" className={`text-2xl md:text-3xl font-serif font-bold tracking-tight ${textColor} relative group`}>
                    Vasant Dora
                    <motion.div
                        className={`absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${accentGradient} transition-all duration-500`}
                    />
                </Link>

                <div className="flex items-center gap-6 md:gap-8">
                    {/* Desktop Menu */}
                    <div className={`hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium ${textColor}`}>
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className={`${hoverColor} transition-colors relative group`}
                                >
                                    {item}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${accentGradient} group-hover:w-full transition-all duration-300`} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Theme Toggle */}
                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => dispatch(toggleTheme())}
                        className={`p-2 rounded-full hover:bg-gradient-to-r ${isDark ? 'hover:from-[#D4AF37]/20 hover:to-[#F4E4C1]/10' : 'hover:from-[#8B6914]/10 hover:to-[#DAA520]/10'} transition-all ${textColor}`}
                        aria-label="Toggle Theme"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </motion.button>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`md:hidden p-2 ${textColor}`}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className={`fixed top-[88px] right-0 w-full md:hidden z-[99] ${navBg} backdrop-blur-md border-b ${borderColor}`}
                    >
                        <div className="px-6 py-8 space-y-6">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`block text-xl font-serif ${textColor} ${hoverColor} transition-colors`}
                                    >
                                        {item}
                                    </Link>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '3rem' }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                        className={`h-0.5 mt-2 bg-gradient-to-r ${accentGradient}`}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};