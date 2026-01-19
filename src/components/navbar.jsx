import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './context/themeContext';

export const Navbar = () => {
    const isDark = useSelector((state) => state.theme.isDark);
    const dispatch = useDispatch();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [portfolioOpen, setPortfolioOpen] = useState(false);
    const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);

    const navBg = isDark ? 'bg-[#0A0A0A]/95' : 'bg-[#FAF7F2]/95';
    const textColor = isDark ? 'text-[#F5F5F4]' : 'text-[#2C2416]';
    const hoverColor = isDark ? 'hover:text-[#D4AF37]' : 'hover:text-[#B8860B]';
    const borderColor = isDark ? 'border-[#2A2A2A]' : 'border-[#C4B5A0]';
    const accentGradient = isDark
        ? 'from-[#D4AF37] to-[#F4E4C1]'
        : 'from-[#8B6914] to-[#DAA520]';

    return (
        <>
            {/* NAVBAR */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed top-0 w-full z-[100] px-6 md:px-8 py-6 flex justify-between items-center ${navBg} backdrop-blur-md border-b ${borderColor}`}
            >
                {/* LOGO */}
                <Link
                    to="/"
                    className={`text-2xl md:text-3xl font-serif font-bold tracking-tight ${textColor}`}
                >
                    Vasant Dora
                </Link>

                <div className="flex items-center gap-6 md:gap-8">
                    {/* DESKTOP MENU */}
                    <div className={`hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium ${textColor}`}>
                        <Link to="/" className={hoverColor}>Home</Link>
                        <Link to="/about" className={hoverColor}>About</Link>

                        {/* PORTFOLIO (DESKTOP HOVER SAFE) */}
                        <div
                            className="relative"
                            onMouseEnter={() => setPortfolioOpen(true)}
                            onMouseLeave={() => setPortfolioOpen(false)}
                        >
                            <button className={`flex items-center gap-1 ${hoverColor}`}>
                                Portfolio
                                <ChevronDown size={14} />
                            </button>

                            <AnimatePresence>
                                {portfolioOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{ duration: 0.2 }}
                                        className={`absolute left-0 top-full mt-4 w-56 ${navBg} border ${borderColor} shadow-xl`}
                                    >
                                        <Link to="/urban-scapes" className={`block px-6 py-4 ${hoverColor}`}>
                                            Urban Scapes
                                        </Link>
                                        <Link to="/samsara-series" className={`block px-6 py-4 ${hoverColor}`}>
                                            Samsara Series
                                        </Link>
                                        <Link to="/InspiredFigurative" className={`block px-6 py-4 ${hoverColor}`}>
                                            Inspired Figurative
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link to="/credentials" className={hoverColor}>Credentials</Link>
                        <Link to="/contact" className={hoverColor}>Contact</Link>
                    </div>

                    {/* THEME TOGGLE */}
                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => dispatch(toggleTheme())}
                        className={textColor}
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </motion.button>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        className={`md:hidden ${textColor}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.4 }}
                        className={`fixed top-[88px] right-0 w-full z-[99] ${navBg} border-b ${borderColor}`}
                    >
                        <div className="px-6 py-8 space-y-6">
                            <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`block ${textColor}`}>Home</Link>
                            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className={`block ${textColor}`}>About</Link>

                            <div>
                                <button
                                    onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
                                    className={`flex items-center justify-between w-full ${textColor}`} >
                                    Portfolio
                                    <ChevronDown
                                        size={20}
                                        className={`transition-transform ${mobilePortfolioOpen ? 'rotate-180' : ''} ${isDark ? 'text-[#D4AF37]' : 'text-[#8B6914]'
                                            }`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {mobilePortfolioOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={`ml-4 mt-4 pl-4 space-y-4 border-l ${borderColor}`}
                                        >
                                            <Link
                                                to="/urban-scapes"
                                                onClick={() => setMobileMenuOpen(false)}
                                                className={`block text-md font-serif ${textColor}`}
                                            >
                                                Urban Scapes
                                            </Link>

                                            <Link
                                                to="/samsara-series"
                                                onClick={() => setMobileMenuOpen(false)}
                                                className={`block text-md font-serif ${textColor}`}
                                            >
                                                Samsara Series
                                            </Link>

                                            <Link
                                                to="/InspiredFigurative"
                                                onClick={() => setMobileMenuOpen(false)}
                                                className={`block text-md font-serif ${textColor}`}
                                            >
                                                Inspired Figurative
                                            </Link>
                                        </motion.div>

                                    )}
                                </AnimatePresence>
                            </div>

                            <Link to="/credentials" onClick={() => setMobileMenuOpen(false)} className={`block ${textColor}`}>Credentials</Link>
                            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={`block ${textColor}`}>Contact</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
