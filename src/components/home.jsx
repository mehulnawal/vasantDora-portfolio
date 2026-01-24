import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { useSelector } from 'react-redux';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Assets
import clientImage from '../assets/images/clientPhoto.png'
import bannerImg2 from '../assets/images/bannerImage2.png'
import test1 from '../assets/images/homePage/homePage_Painting1.jpg'
import test2 from '../assets/images/homePage/homePage_Painting2.jpg'

const artworks = [
    { id: 1, image: test1, title: "Selected Work I", size: "48 × 36 inches" },
    { id: 2, image: test2, title: "Selected Work II", size: "60 × 48 inches" }
];

export const Home = () => {
    const isDark = useSelector((state) => state.theme.isDark);
    const [expandedArtwork, setExpandedArtwork] = useState(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX - innerWidth / 2) / innerWidth;
            const y = (clientY - innerHeight / 2) / innerHeight;
            mouseX.set(x * 15);
            mouseY.set(y * 15);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    useEffect(() => {
        document.body.style.overflow = expandedArtwork !== null ? 'hidden' : '';
    }, [expandedArtwork]);

    const nextSlide = (e) => {
        if (e) e.stopPropagation();
        setExpandedArtwork((prev) => (prev + 1) % artworks.length);
    };

    const prevSlide = (e) => {
        if (e) e.stopPropagation();
        setExpandedArtwork((prev) => (prev - 1 + artworks.length) % artworks.length);
    };

    const bgColor = isDark ? 'bg-[#0A0A0A]' : 'bg-[#F5EFE7]';
    const textColor = isDark ? 'text-[#F5F5F4]' : 'text-[#2C2416]';
    const accentGradient = isDark
        ? 'from-[#D4AF37] via-[#E5C158] to-[#F4E4C1]'
        : 'from-[#8B6914] via-[#C9A961] to-[#DAA520]';
    const borderColor = isDark ? 'border-[#2A2A2A]' : 'border-[#C4B5A0]';
    const cardBg = isDark ? 'bg-[#1A1A1A]/90' : 'bg-white/95';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const brushStrokeVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 1, transition: { pathLength: { duration: 2, ease: "easeInOut" }, opacity: { duration: 0.5 } } }
    };

    return (
        <div className={`select-none transition-colors duration-700 ${bgColor} ${textColor} min-h-screen relative overflow-x-hidden`}>

            {/* Canvas texture overlay */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-50"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat' }}
            />

            {/* Performance Optimized Background Orbs */}
            <motion.div style={{ x: mouseX, y: mouseY, willChange: "transform" }} className="fixed inset-0 pointer-events-none z-0">
                {!isDark && (
                    <>
                        <motion.div animate={{ x: [0, 40, 0], y: [0, -20, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-20 right-20 w-96 h-96 bg-[#DAA520]/10 rounded-full blur-3xl will-change-transform" />
                        <motion.div animate={{ x: [0, -30, 0], y: [0, 40, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-40 left-20 w-80 h-80 bg-[#8B6914]/8 rounded-full blur-3xl will-change-transform" />
                    </>
                )}
                {isDark && (
                    <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 15, repeat: Infinity }}
                        className="absolute top-40 right-32 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl will-change-transform" />
                )}
            </motion.div>

            {/* --- RESPONSIVE BANNERS --- */}

            {/* 1. Mobile Vertical Banner (Inspired by The Spaceman UI) */}
            <section className="relative flex flex-col md:hidden h-screen bg-[#0A0A0A] text-white overflow-hidden">
                <div className="flex-grow relative w-full h-3/5">
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        src={bannerImg2}
                        alt="Vasant Dora"
                        className="w-full h-full object-top object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                </div>

                <div className="h-2/5 flex flex-col items-center justify-center px-8 text-center space-y-6">
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                        <span className="text-[10px] tracking-[0.4em] uppercase opacity-70 block mb-2 font-serif">Contemporary Painter</span>
                        <h1 className="text-4xl font-serif tracking-tighter uppercase leading-none">Vasant <br /> Dora</h1>
                    </motion.div>

                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-xs font-serif italic opacity-60 max-w-xs leading-relaxed">
                        Exploring colour as play — where light, tone, and abstraction unfold through instinct and intuition.
                    </motion.p>

                    {/* Progress Indicator Dots */}
                    <div className="flex space-x-2 pt-4">
                        <div className="w-6 h-1.5 rounded-full bg-[#D4AF37]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    </div>
                </div>
            </section>

            {/* 2. Desktop Wide Banner */}
            <section className="hidden md:flex relative h-screen w-full items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }}
                        src={clientImage} alt="Vasant Dora" className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                <div className="container mx-auto px-4 sm:px-8 pb-24 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="max-w-4xl">
                        <svg className="mb-6" width="64" height="16" viewBox="0 0 64 16">
                            <motion.path d="M 0 8 Q 16 0, 32 8 T 64 8" stroke={isDark ? "#D4AF37" : "#DAA520"} strokeWidth="3" fill="none" strokeLinecap="round" variants={brushStrokeVariants} initial="hidden" animate="visible" />
                        </svg>
                        <span className="text-xs tracking-[0.4em] uppercase mb-4 block text-white/90 font-serif">Contemporary Painter</span>
                        <h1 className="text-5xl md:text-9xl mb-6 text-white leading-none font-serif uppercase tracking-tighter">Vasant Dora</h1>
                        <p className="text-lg md:text-2xl font-light text-white/95 max-w-2xl font-serif italic">Exploring colour as play — where light, tone, and abstraction unfold through instinct and intuition.</p>
                    </motion.div>
                </div>
            </section>

            {/* --- REST OF THE PAGE --- */}

            {/* Leela Section */}
            <section className="container mx-auto px-4 sm:px-8 py-32 relative z-10">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
                    <motion.div variants={itemVariants} className="flex items-center gap-8 mb-20">
                        <div className={`h-px flex-1 bg-gradient-to-r ${isDark ? 'to-[#2A2A2A]' : 'to-[#C4B5A0]'} from-transparent`} />
                        <h2 className="text-4xl md:text-7xl font-serif uppercase tracking-tight">Leela of Colors</h2>
                        <div className={`h-px flex-1 bg-gradient-to-l ${isDark ? 'to-[#2A2A2A]' : 'to-[#C4B5A0]'} from-transparent`} />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
                        {[
                            "There is an ancient Sanskrit word \"Leela\", which means \"play\" or \"sport\". Leela is both, delight and enjoyment of the moment, childish, disarming and spontaneous...",
                            "As an artist, my art is at a primal level manifestation of play with colours caught in the matrix of its hues, luminosity, the dance of light and shade...",
                            "More often than not the figurative or subjective content is present as an allegorical or contextual reference...",
                            "It is a pleasure to present and share an oeuvre of my art works in this show and catalogue..."
                        ].map((text, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                className={`${cardBg} backdrop-blur-sm p-8 md:p-10 rounded-sm border ${borderColor} shadow-xl relative overflow-hidden group transition-all duration-500`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${accentGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                                <p className="text-lg leading-relaxed font-serif text-justify relative z-10">{text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Gallery Section */}
            <section className="container mx-auto px-4 sm:px-8 pb-32 relative z-10">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                    <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
                        <h3 className="text-3xl md:text-5xl font-serif uppercase tracking-tight">Selected Works</h3>
                        <div className={`h-px flex-1 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {artworks.map((art, index) => (
                            <motion.div key={art.id} variants={itemVariants} onClick={() => setExpandedArtwork(index)}
                                className={`relative cursor-pointer group border-2 ${borderColor} ${cardBg} p-4 shadow-2xl transition-all duration-500`}>
                                <div className="relative overflow-hidden aspect-[4/5]">
                                    <img src={art.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Artwork" />
                                </div>
                                <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ${isDark ? 'border-[#D4AF37]/20' : 'border-[#8B6914]/20'}`} />
                                <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 ${isDark ? 'border-[#D4AF37]/20' : 'border-[#8B6914]/20'}`} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {expandedArtwork !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-black/95 p-4 md:p-12"
                    >
                        <div className="absolute inset-0" onClick={() => setExpandedArtwork(null)} />

                        <div className="absolute inset-0 flex items-center justify-between px-4 md:px-12 pointer-events-none z-[1010]">
                            <button onClick={prevSlide} className="p-4 rounded-full bg-white/10 text-white pointer-events-auto hover:bg-white/20 active:scale-90 transition-all">
                                <ChevronLeft size={40} className="md:w-16 md:h-16" />
                            </button>
                            <button onClick={nextSlide} className="p-4 rounded-full bg-white/10 text-white pointer-events-auto hover:bg-white/20 active:scale-90 transition-all">
                                <ChevronRight size={40} className="md:w-16 md:h-16" />
                            </button>
                        </div>

                        <button onClick={() => setExpandedArtwork(null)} className="absolute top-8 right-8 text-white/70 hover:text-white z-[1020] p-2 bg-white/10 rounded-full">
                            <X size={32} />
                        </button>

                        <div className="relative z-[1005] w-full h-full flex flex-col items-center justify-center gap-6 pointer-events-none">
                            <motion.img
                                key={expandedArtwork}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                src={artworks[expandedArtwork].image}
                                className="max-w-full max-h-[70vh] object-contain shadow-2xl pointer-events-auto"
                            />

                            <div className="text-center text-white space-y-2 bg-black/40 backdrop-blur-md p-6 rounded-lg pointer-events-auto">
                                <h2 className="text-2xl font-serif">{artworks[expandedArtwork].title}</h2>
                                <p className="text-[#D4AF37] text-lg font-serif">{artworks[expandedArtwork].size}</p>
                                <div className="text-xs tracking-widest opacity-40 font-serif pt-2">
                                    {expandedArtwork + 1} / {artworks.length}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};