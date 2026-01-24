import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { useSelector } from 'react-redux';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Assets
import clientImage from '../assets/images/clientPhoto.png'
import test1 from '../assets/images/homePage/homePage_Painting1.jpg'
import test2 from '../assets/images/homePage/homePage_Painting2.jpg'

const artworks = [
    { id: 1, image: test1 },
    { id: 2, image: test2 }
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
            mouseX.set(x * 20);
            mouseY.set(y * 20);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    useEffect(() => {
        document.body.style.overflow = expandedArtwork !== null ? 'hidden' : '';
    }, [expandedArtwork]);

    const nextSlide = () => {
        setExpandedArtwork((prev) => (prev + 1) % artworks.length);
    };

    const prevSlide = () => {
        setExpandedArtwork((prev) => (prev - 1 + artworks.length) % artworks.length);
    };

    // restored original styling constants
    const bgColor = isDark
        ? 'bg-gradient-to-br from-[#0A0A0A] via-[#141414] to-[#1A1A1A]'
        : 'bg-gradient-to-br from-[#F5EFE7] via-[#E8DDD0] to-[#D6C8B8]';
    const textColor = isDark ? 'text-[#F5F5F4]' : 'text-[#2C2416]';
    const accentGradient = isDark
        ? 'from-[#D4AF37] via-[#E5C158] to-[#F4E4C1]'
        : 'from-[#8B6914] via-[#C9A961] to-[#DAA520]';
    const borderColor = isDark ? 'border-[#2A2A2A]' : 'border-[#C4B5A0]';
    const cardBg = isDark
        ? 'bg-[#1A1A1A]/90'
        : 'bg-gradient-to-br from-[#FAF7F2]/95 via-[#FFFFFF]/92 to-[#F5EFE7]/95';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const brushStrokeVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { pathLength: { duration: 2, ease: "easeInOut" }, opacity: { duration: 0.5 } }
        }
    };

    return (
        <div className={`select-none transition-all duration-700 ${bgColor} ${textColor} min-h-screen relative overflow-hidden`}>

            {/* Canvas texture overlay */}
            <div
                className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat'
                }}
            />

            {/* Performance Optimized Background Elements */}
            <motion.div style={{ x: mouseX, y: mouseY, willChange: "transform" }} className="fixed inset-0 pointer-events-none">
                {!isDark && (
                    <>
                        <motion.div animate={{ x: [0, 80, 0], y: [0, -40, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#DAA520]/12 to-[#B8860B]/5 rounded-full blur-3xl will-change-transform" />
                        <motion.div animate={{ x: [0, -60, 0], y: [0, 60, 0] }} transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-br from-[#8B6914]/12 to-[#C9A961]/5 rounded-full blur-3xl will-change-transform" />
                    </>
                )}
                {isDark && (
                    <motion.div animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 15, repeat: Infinity }}
                        className="absolute top-40 right-32 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/8 to-[#F4E4C1]/4 rounded-full blur-3xl will-change-transform" />
                )}
            </motion.div>

            {/* Hero Section */}
            <section className="relative min-h-[70vh] sm:min-h-[80vh] md:h-screen w-full flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }}
                        src={clientImage} alt="Vasant Dora" className="w-full h-full object-contain md:object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                </div>

                <div className="container mx-auto px-4 sm:px-8 pb-24 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }} className="max-w-4xl">
                        <svg className="mb-8" width="64" height="16" viewBox="0 0 64 16">
                            <motion.path d="M 0 8 Q 16 0, 32 8 T 64 8" stroke={isDark ? "#D4AF37" : "#DAA520"} strokeWidth="3" fill="none" strokeLinecap="round" variants={brushStrokeVariants} initial="hidden" animate="visible" />
                        </svg>
                        <span className="text-xs tracking-[0.4em] uppercase mb-4 block text-white/90 font-serif">Contemporary Painter</span>
                        <h1 className="text-5xl sm:text-8xl md:text-9xl mb-6 text-white leading-none font-serif">Vasant Dora</h1>
                        <p className="text-lg md:text-2xl font-light text-white/95 max-w-2xl font-serif italic">Exploring colour as play — where light, tone, and abstraction unfold through instinct and intuition.</p>
                    </motion.div>
                </div>
            </section>

            {/* Leela Section with Restored Hover Effects */}
            <section className="container mx-auto px-4 sm:px-8 py-32 relative">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
                    <motion.div variants={itemVariants} className="flex items-center gap-8 mb-20">
                        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1.5 }} className={`h-px flex-1 origin-left bg-gradient-to-r ${isDark ? 'to-[#2A2A2A]' : 'to-[#C4B5A0]'} from-transparent`} />
                        <h2 className="text-4xl md:text-7xl font-serif">Leela of Colors</h2>
                        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1.5 }} className={`h-px flex-1 origin-right bg-gradient-to-l ${isDark ? 'to-[#2A2A2A]' : 'to-[#C4B5A0]'} from-transparent`} />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
                        {[
                            "There is an ancient Sanskrit word \"Leela\", which means \"play\" or \"sport\". Leela is both, delight and enjoyment of the moment, childish, disarming and spontaneous. It is said in certain sections of theology and mysticism, that the entire act of creation and destruction is an act of the divine absolute's cosmic play or \"leela\". It is so very akin to a child's \"play\" caught in the delight of the game played for its own sake devoid of any motivation or with any assigned or presupposed intent. It is rather frolicsome and sheer joy of the activity complete in itself.",
                            "As an artist, my art is at a primal level manifestation of play with colours caught in the matrix of its hues, luminosity, the dance of light and shade, tonal variations, mood affecting effervescence or edge defying coalescence",
                            "More often than not the figurative or subjective content is present as an allegorical or contextual reference. The primary intent being \"play\" of colours or with colours, at times in harmony and at times in splendid conflict and confrontation. This is where my abstraction begins and ends. There often are multiple journeys within my canvasses that opens windows for the viewers to seek interpretations in their own way.",
                            "It is a pleasure to present and share an oeuvre of my art works in this show and catalogue. Hopefully different people will infer different meanings. But then art was never intended to have a single meaning or narrative"
                        ].map((text, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{
                                    y: -12,
                                    scale: 1.02,
                                    boxShadow: isDark ? "0 30px 60px -15px rgba(212, 175, 55, 0.2)" : "0 30px 60px -15px rgba(139, 105, 20, 0.18)"
                                }}
                                className={`${cardBg} backdrop-blur-sm p-10 rounded-sm border ${borderColor} shadow-2xl relative overflow-hidden group transition-all duration-500`}
                            >
                                <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className={`absolute inset-0 bg-gradient-to-br ${accentGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                                <p className="text-lg leading-loose font-serif text-justify relative z-10">{text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Gallery with Corner Borders Restored */}
            <section className="container mx-auto px-4 sm:px-8 pb-32">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                    <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
                        <h3 className="text-3xl md:text-5xl font-serif">Selected Works</h3>
                        <div className={`h-px flex-1 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {artworks.map((art, index) => (
                            <motion.div key={art.id} variants={itemVariants} onClick={() => setExpandedArtwork(index)}
                                className={`relative cursor-pointer group border-2 ${borderColor} ${cardBg} p-4 shadow-2xl transition-all duration-500`}>
                                <div className="relative overflow-hidden aspect-[4/5]">
                                    <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} src={art.image} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                {/* Restored Corner Borders */}
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
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={() => setExpandedArtwork(null)} />
                        <button onClick={prevSlide} className="absolute left-4 sm:left-10 text-white/50 hover:text-white z-[110]"><ChevronLeft size={48} /></button>
                        <button onClick={nextSlide} className="absolute right-4 sm:right-10 text-white/50 hover:text-white z-[110]"><ChevronRight size={48} /></button>
                        <button onClick={() => setExpandedArtwork(null)} className="absolute top-8 right-8 z-[110] text-white"><X size={32} /></button>
                        <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} src={artworks[expandedArtwork].image} className="relative z-[105] max-w-full max-h-[85vh] object-contain shadow-2xl" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};