import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useSelector } from 'react-redux';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Assets (keep your imports)
import clientImage from '../assets/images/clientPhoto.png'
import test1 from '../assets/images/homePage/homePage_Painting1.jpg'
import test2 from '../assets/images/homePage/homePage_Painting2.jpg'

const artworks = [
    {
        id: 1,
        image: test1,
        // title: "Chromatic Symphony No. 1",
        // size: "48 × 36 inches",
        // description: "Acrylic on canvas, exploring the interplay of warm and cool tones"
    },
    {
        id: 2,
        image: test2,
        // title: "Abstract Reverie",
        // size: "60 × 48 inches",
        // description: "Mixed media on canvas, a journey through light and shadow"
    }
];

export const Home = () => {
    const isDark = useSelector((state) => state.theme.isDark);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expandedArtwork, setExpandedArtwork] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const { scrollYProgress } = useScroll();
    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -150]);

    // Smooth spring animation for parallax
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Mouse parallax effect
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
            setMousePosition({ x: clientX, y: clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    useEffect(() => {
        if (expandedArtwork !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [expandedArtwork]);

    const nextSlide = () => {
        if (expandedArtwork !== null) {
            setExpandedArtwork((prev) => (prev + 1) % artworks.length);
        } else {
            setCurrentIndex((prev) => (prev + 1 >= artworks.length ? 0 : prev + 1));
        }
    };

    const prevSlide = () => {
        if (expandedArtwork !== null) {
            setExpandedArtwork((prev) => (prev - 1 + artworks.length) % artworks.length);
        } else {
            setCurrentIndex((prev) => (prev - 1 < 0 ? artworks.length - 1 : prev - 1));
        }
    };

    // Enhanced color palette with better contrast
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

    const overlayBg = isDark ? 'bg-black/70' : 'bg-[#F5EFE7]/90';

    // Enhanced animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    // Brush stroke animation variant
    const brushStrokeVariants = {
        hidden: {
            pathLength: 0,
            opacity: 0
        },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 2, ease: "easeInOut" },
                opacity: { duration: 0.5 }
            }
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

            {/* Enhanced animated background elements */}
            <motion.div
                style={{ x: mouseX, y: mouseY }}
                className="fixed inset-0 pointer-events-none"
            >
                {!isDark && (
                    <>
                        <motion.div
                            animate={{
                                x: [0, 120, -30, 0],
                                y: [0, -60, 40, 0],
                                scale: [1, 1.3, 1.1, 1],
                                rotate: [0, 90, 180, 360]
                            }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#DAA520]/12 via-[#C9A961]/8 to-[#B8860B]/5 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{
                                x: [0, -100, 50, 0],
                                y: [0, 80, -40, 0],
                                scale: [1, 1.4, 1.2, 1],
                                rotate: [0, -90, -180, -360]
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-br from-[#8B6914]/12 via-[#DAA520]/8 to-[#C9A961]/5 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{
                                x: [0, 60, -60, 0],
                                y: [0, -80, 80, 0],
                                scale: [1, 1.2, 1, 1]
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-[#C9A961]/8 to-[#8B6914]/4 rounded-full blur-3xl"
                        />
                    </>
                )}
                {isDark && (
                    <>
                        <motion.div
                            animate={{
                                x: [0, 80, 0],
                                y: [0, -40, 0],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 18,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-40 right-32 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/8 to-[#F4E4C1]/4 rounded-full blur-3xl"
                        />
                    </>
                )}
            </motion.div>

            {/* Hero Section with enhanced parallax */}
            <section className="relative min-h-[70vh] sm:min-h-[80vh] md:h-screen w-full flex items-end overflow-hidden">
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{
                        scale: heroScale,
                        y: heroY
                    }}
                >
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        src={clientImage}
                        alt="Vasant Dora"
                        className="w-full h-full object-contain md:object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                </motion.div>

                <motion.div
                    className="container mx-auto px-4 sm:px-6 md:px-8 pb-16 sm:pb-20 md:pb-24 relative z-10"
                    style={{ opacity: heroOpacity }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-4xl"
                    >
                        {/* Brush stroke SVG animation */}
                        <svg className="mb-6 sm:mb-8" width="64" height="16" viewBox="0 0 64 16">
                            <motion.path
                                d="M 0 8 Q 16 0, 32 8 T 64 8"
                                stroke={isDark ? "#D4AF37" : "#DAA520"}
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                                variants={brushStrokeVariants}
                                initial="hidden"
                                animate="visible"
                            />
                        </svg>

                        <motion.span
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, delay: 0.6 }}
                            className="text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4 block text-white/90 font-medium drop-shadow-lg"
                            style={{ fontFamily: "'Cinzel', serif" }}
                        >
                            Contemporary Painter
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.4, delay: 0.8 }}
                            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight mb-4 sm:mb-6 text-white leading-none drop-shadow-2xl"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Vasant Dora
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: 1.2 }}
                            className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white/95 leading-relaxed max-w-2xl drop-shadow-lg"
                            style={{ fontFamily: "'Crimson Text', serif" }}
                        >
                            Exploring colour as play — where light, tone, and abstraction unfold through instinct and intuition.
                        </motion.p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Leela of Colors Section with enhanced animations */}
            <section className="container mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-32 md:py-40 relative">

                {/* Animated floating orb */}
                <motion.div
                    style={{ x: mouseX, y: mouseY }}
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.15, 1]
                    }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className={`absolute top-10 sm:top-20 right-10 sm:right-20 w-32 h-32 sm:w-72 sm:h-72 ${isDark ? 'bg-[#D4AF37]/6' : 'bg-[#DAA520]/10'} rounded-full blur-3xl pointer-events-none`}
                />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-12 sm:mb-16 md:mb-20"
                    >
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className={`hidden sm:block h-px flex-1 origin-left bg-gradient-to-r ${isDark ? 'from-transparent to-[#2A2A2A]' : 'from-transparent to-[#C4B5A0]'}`}
                        />
                        <h2
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-center sm:text-left"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Leela of Colors
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className={`hidden sm:block h-px flex-1 origin-right bg-gradient-to-l ${isDark ? 'from-transparent to-[#2A2A2A]' : 'from-transparent to-[#C4B5A0]'}`}
                        />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-7xl mx-auto">
                        {/* Left Column */}
                        <div className="space-y-6 sm:space-y-8">
                            <motion.div
                                variants={itemVariants}
                                whileHover={{
                                    y: -12,
                                    scale: 1.02,
                                    boxShadow: isDark
                                        ? "0 30px 60px -15px rgba(212, 175, 55, 0.2)"
                                        : "0 30px 60px -15px rgba(139, 105, 20, 0.18)"
                                }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className={`${cardBg} backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-sm border ${borderColor} shadow-2xl relative overflow-hidden group`}
                            >
                                {/* Gradient overlay on hover */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileHover={{ opacity: 1, scale: 1 }}
                                    className={`absolute inset-0 bg-gradient-to-br ${accentGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                                />
                                <p
                                    className="text-base sm:text-lg leading-relaxed sm:leading-loose font-light text-justify relative z-10"
                                    style={{ fontFamily: "'Crimson Text', serif" }}
                                >
                                    There is an ancient Sanskrit word "Leela", which means "play" or "sport". Leela is both, delight and enjoyment of the moment, childish, disarming and spontaneous. It is said in certain sections of theology and mysticism, that the entire act of creation and destruction is an act of the divine absolute's cosmic play or "leela". It is so very akin to a child's "play" caught in the delight of the game played for its own sake devoid of any motivation or with any assigned or presupposed intent. It is rather frolicsome and sheer joy of the activity complete in itself.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                whileHover={{
                                    y: -12,
                                    scale: 1.02,
                                    boxShadow: isDark
                                        ? "0 30px 60px -15px rgba(212, 175, 55, 0.2)"
                                        : "0 30px 60px -15px rgba(139, 105, 20, 0.18)"
                                }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className={`${cardBg} backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-sm border ${borderColor} shadow-2xl relative overflow-hidden group`}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileHover={{ opacity: 1, scale: 1 }}
                                    className={`absolute inset-0 bg-gradient-to-br ${accentGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                                />
                                <p
                                    className="text-base sm:text-lg leading-relaxed sm:leading-loose font-light text-justify relative z-10"
                                    style={{ fontFamily: "'Crimson Text', serif" }}
                                >
                                    As an artist, my art is at a primal level manifestation of play with colours caught in the matrix of its hues, luminosity, the dance of light and shade, tonal variations, mood affecting effervescence or edge defying coalescence
                                </p>
                            </motion.div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6 sm:space-y-8">
                            <motion.div
                                variants={itemVariants}
                                whileHover={{
                                    y: -12,
                                    scale: 1.02,
                                    boxShadow: isDark
                                        ? "0 30px 60px -15px rgba(212, 175, 55, 0.2)"
                                        : "0 30px 60px -15px rgba(139, 105, 20, 0.18)"
                                }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className={`${cardBg} backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-sm border ${borderColor} shadow-2xl relative overflow-hidden group`}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileHover={{ opacity: 1, scale: 1 }}
                                    className={`absolute inset-0 bg-gradient-to-br ${accentGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                                />
                                <p
                                    className="text-base sm:text-lg leading-relaxed sm:leading-loose font-light text-justify relative z-10"
                                    style={{ fontFamily: "'Crimson Text', serif" }}
                                >
                                    More often than not the figurative or subjective content is present as an allegorical or contextual reference. The primary intent being "play" of colours or with colours, at times in harmony and at times in splendid conflict and confrontation. This is where my abstraction begins and ends. There often are multiple journeys within my canvasses that opens windows for the viewers to seek interpretations in their own way.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                whileHover={{
                                    y: -12,
                                    scale: 1.02,
                                    boxShadow: isDark
                                        ? "0 30px 60px -15px rgba(212, 175, 55, 0.2)"
                                        : "0 30px 60px -15px rgba(139, 105, 20, 0.18)"
                                }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className={`${cardBg} backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-sm border ${borderColor} shadow-2xl relative overflow-hidden group`}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileHover={{ opacity: 1, scale: 1 }}
                                    className={`absolute inset-0 bg-gradient-to-br ${accentGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                                />
                                <p
                                    className="text-base sm:text-lg leading-relaxed sm:leading-loose font-light text-justify relative z-10"
                                    style={{ fontFamily: "'Crimson Text', serif" }}
                                >
                                    It is a pleasure to present and share an oeuvre of my art works in this show and catalogue. Hopefully different people will infer different meanings. But then art was never intended to have a single meaning or narrative
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Gallery Section - Updated to Grid with Conditional Logic */}
            <section className="container mx-auto px-4 sm:px-6 md:px-8 pb-20 sm:pb-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center gap-4 mb-8 sm:mb-12 md:mb-16"
                    >
                        <div>
                            <svg className="mb-3 sm:mb-4" width="48" height="12" viewBox="0 0 48 12">
                                <motion.path
                                    d="M 0 6 Q 12 0, 24 6 T 48 6"
                                    stroke={isDark ? "#D4AF37" : "#C9A961"}
                                    strokeWidth="2.5"
                                    fill="none"
                                    strokeLinecap="round"
                                    variants={brushStrokeVariants}
                                />
                            </svg>
                            <h3
                                className="text-3xl sm:text-4xl md:text-5xl tracking-tight"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Selected Works
                            </h3>
                        </div>
                        <div className={`h-px flex-1 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
                    </motion.div>

                    {/* Grid for main page (No carousel buttons here) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                        {artworks.map((art, index) => {
                            // Logic: Check if any text fields exist
                            const hasText = art.title || art.size || art.description;

                            return (
                                <motion.div
                                    key={art.id}
                                    variants={itemVariants}
                                    onClick={() => setExpandedArtwork(index)}
                                    className={`relative cursor-pointer group overflow-hidden border-2 ${borderColor} ${cardBg} p-3 sm:p-4 shadow-2xl transition-all duration-500`}
                                >
                                    {/* Reduced Image size via aspect ratio and max-width container */}
                                    <div className="relative overflow-hidden aspect-[4/5]">
                                        <motion.img
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                            src={art.image}
                                            className="w-full h-full object-cover"
                                            alt={art.title || "Artwork"}
                                        />
                                        <motion.div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                    </div>

                                    {/* Condition: Only show label if text exists */}
                                    {hasText && (
                                        <div className="mt-6 px-2 pb-2">
                                            {art.title && (
                                                <h4 className="text-xl sm:text-2xl mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                    {art.title}
                                                </h4>
                                            )}
                                            {art.size && (
                                                <p className={`text-xs tracking-widest uppercase ${isDark ? 'text-[#D4AF37]' : 'text-[#8B6914]'} font-semibold`} style={{ fontFamily: "'Cinzel', serif" }}>
                                                    {art.size}
                                                </p>
                                            )}
                                            {art.description && (
                                                <p className="mt-3 text-sm opacity-80 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                                                    {art.description}
                                                </p>
                                            )}
                                        </div>
                                    )}

                                    <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ${isDark ? 'border-[#D4AF37]/20' : 'border-[#8B6914]/20'} pointer-events-none`} />
                                    <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 ${isDark ? 'border-[#D4AF37]/20' : 'border-[#8B6914]/20'} pointer-events-none`} />
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </section>

            {/* Expanded Artwork Modal - Carousel Buttons are kept here */}
            <AnimatePresence>
                {expandedArtwork !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 md:p-12"
                    >
                        <motion.div
                            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
                            onClick={() => setExpandedArtwork(null)}
                        />

                        {/* Modal Navigation Buttons */}
                        <button onClick={prevSlide} className="absolute left-4 sm:left-10 text-white/50 hover:text-white z-[110] transition-colors">
                            <ChevronLeft size={48} />
                        </button>
                        <button onClick={nextSlide} className="absolute right-4 sm:right-10 text-white/50 hover:text-white z-[110] transition-colors">
                            <ChevronRight size={48} />
                        </button>

                        <motion.button
                            onClick={() => setExpandedArtwork(null)}
                            className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-white/10 text-white"
                        >
                            <X size={28} />
                        </motion.button>

                        <div className="relative w-full max-w-6xl h-full flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 z-[105]">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className={`${artworks[expandedArtwork].title ? 'md:w-2/3' : 'w-full'} h-[60vh] md:h-full flex items-center justify-center`}
                            >
                                <img
                                    src={artworks[expandedArtwork].image}
                                    className="max-w-full max-h-full object-contain shadow-2xl"
                                    alt="Expanded"
                                />
                            </motion.div>

                            {/* Condition: Only show sidebar if text exists */}
                            {artworks[expandedArtwork].title && (
                                <motion.div
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    className="w-full md:w-1/3 text-white space-y-6"
                                >
                                    <h2 className="text-4xl sm:text-5xl font-serif">{artworks[expandedArtwork].title}</h2>
                                    <p className="text-xl text-[#D4AF37] font-serif">{artworks[expandedArtwork].size}</p>
                                    <p className="text-lg opacity-80 font-serif">{artworks[expandedArtwork].description}</p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};