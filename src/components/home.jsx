import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useSelector } from 'react-redux';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Assets
import clientImage from '../assets/images/clientPhoto.png'
import test1 from '../assets/images/paintingEg1.jpg'
import test2 from '../assets/images/paintingEg2.jpg'
import test3 from '../assets/images/paintingEg3.jpg'
import test4 from '../assets/images/paintingEg4.jpg'

const artworks = [
    {
        id: 1,
        image: test1,
        title: "Chromatic Symphony No. 1",
        size: "48 × 36 inches",
        description: "Acrylic on canvas, exploring the interplay of warm and cool tones"
    },
    {
        id: 2,
        image: test2,
        title: "Abstract Reverie",
        size: "60 × 48 inches",
        description: "Mixed media on canvas, a journey through light and shadow"
    },
    {
        id: 3,
        image: test3,
        title: "Luminous Fragments",
        size: "36 × 36 inches",
        description: "Oil on canvas, capturing the essence of movement"
    },
    {
        id: 4,
        image: test4,
        title: "Color Field Meditation",
        size: "72 × 48 inches",
        description: "Acrylic on canvas, an exploration of depth and space"
    }
];

export const Home = () => {
    const isDark = useSelector((state) => state.theme.isDark);
    const [currentIndex, setCurrentIndex] = useState(0);

    const { scrollYProgress } = useScroll();
    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    const [expandedArtwork, setExpandedArtwork] = useState(null);

    useEffect(() => {
        if (expandedArtwork !== null) {
            // lock body scroll
            document.body.style.overflow = 'hidden';
        } else {
            // restore body scroll
            document.body.style.overflow = '';
        }

        // cleanup (important for safety)
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

    // Luxurious Premium Color Palette
    const bgColor = isDark
        ? 'bg-gradient-to-br from-[#0A0A0A] via-[#141414] to-[#1A1A1A]'
        : 'bg-gradient-to-br from-[#F5EFE7] via-[#E8DDD0] to-[#D6C8B8]';

    const textColor = isDark ? 'text-[#F5F5F4]' : 'text-[#2C2416]';

    const accentGradient = isDark
        ? 'from-[#D4AF37] to-[#F4E4C1]'
        : 'from-[#8B6914] via-[#B8860B] to-[#DAA520]';

    const borderColor = isDark ? 'border-[#2A2A2A]' : 'border-[#C4B5A0]';

    const cardBg = isDark
        ? 'bg-[#1A1A1A]/80'
        : 'bg-gradient-to-br from-[#FAF7F2]/95 via-[#FFFFFF]/90 to-[#F5EFE7]/95';

    const overlayBg = isDark ? 'bg-black/60' : 'bg-[#F5EFE7]/85';

    // Container animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <div className={`select-none transition-all duration-700 ${bgColor} ${textColor} min-h-screen relative overflow-hidden`}>

            {/* Animated background elements */}
            {!isDark && (
                <>
                    <motion.div
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -50, 0],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#DAA520]/10 to-[#B8860B]/5 rounded-full blur-3xl pointer-events-none"
                    />
                    <motion.div
                        animate={{
                            x: [0, -80, 0],
                            y: [0, 60, 0],
                            scale: [1, 1.3, 1]
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-br from-[#8B6914]/10 to-[#DAA520]/5 rounded-full blur-3xl pointer-events-none"
                    />
                </>
            )}

            {/* Immersive Hero Section - Fixed for Mobile */}
            <section className="relative min-h-[70vh] sm:min-h-[80vh] md:h-screen w-full flex items-end overflow-hidden  md:mt-0">
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ scale: heroScale }}
                >
                    <img
                        src={clientImage}
                        alt="Vasant Dora"
                        className="w-full h-full object-contain md:object-cover object-center"
                    />
                    {/* Enhanced gradient for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </motion.div>

                <motion.div
                    className="container mx-auto px-4 sm:px-6 md:px-8 pb-16 sm:pb-20 md:pb-24 relative z-10"
                    style={{ opacity: heroOpacity }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="max-w-4xl"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "4rem" }}
                            transition={{ duration: 1.2, delay: 0.5 }}
                            className={`h-1 mb-6 sm:mb-8 bg-gradient-to-r ${accentGradient}`}
                        />

                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4 block text-white font-medium drop-shadow-lg"
                        >
                            Contemporary Painter
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 1 }}
                            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight mb-4 sm:mb-6 text-white leading-none drop-shadow-2xl"
                        >
                            Vasant Dora
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.4 }}
                            className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white leading-relaxed max-w-2xl drop-shadow-lg"
                        >
                            Exploring colour as play — where light, tone, and abstraction unfold through instinct and intuition.
                        </motion.p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Leela of Colors Section - Responsive */}
            <section className="container mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-32 md:py-40 relative">
                {/* Animated decorative element */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className={`absolute top-10 sm:top-20 right-10 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 ${isDark ? 'bg-[#D4AF37]/5' : 'bg-[#DAA520]/8'} rounded-full blur-3xl pointer-events-none`}
                />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-12 sm:mb-16 md:mb-20"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                            viewport={{ once: true }}
                            className={`hidden sm:block h-px flex-1 bg-gradient-to-r ${isDark ? 'from-transparent to-[#2A2A2A]' : 'from-transparent to-[#C4B5A0]'}`}
                        />
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-center sm:text-left">Leela of Colors</h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                            viewport={{ once: true }}
                            className={`hidden sm:block h-px flex-1 bg-gradient-to-l ${isDark ? 'from-transparent to-[#2A2A2A]' : 'from-transparent to-[#C4B5A0]'}`}
                        />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-7xl mx-auto">
                        {/* Left Side Text */}
                        <div className="space-y-6 sm:space-y-8">
                            <motion.div
                                variants={itemVariants}
                                whileHover={{
                                    y: -8,
                                    boxShadow: isDark
                                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                                        : "0 25px 50px -12px rgba(139, 105, 20, 0.15)"
                                }}
                                transition={{ duration: 0.4 }}
                                className={`${cardBg} backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-sm border ${borderColor} shadow-2xl`}
                            >
                                <p className="text-base sm:text-lg leading-relaxed sm:leading-loose font-light text-justify">
                                    There is an ancient Sanskrit word
                                    "Leela", which means "play" or
                                    "sport". Leela is both , delight and
                                    enjoyment of the moment , childish
                                    , disarming and spontaneous. It is
                                    said in certain sections of theology
                                    and mysticism , that the entire act
                                    of creation and destruction is an
                                    act of the divine absolute's cosmic
                                    play or " leela ". It is so very akin
                                    to a child's " play " caught in the
                                    delight of the game played for its
                                    own sake devoid of any motivation
                                    or with any assigned or
                                    presupposed intent. It is rather
                                    frolicsome and sheer joy of the
                                    activity complete in itself.
                                </p>
                            </motion.div>
                            <motion.div
                                variants={itemVariants}
                                whileHover={{
                                    y: -8,
                                    boxShadow: isDark
                                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                                        : "0 25px 50px -12px rgba(139, 105, 20, 0.15)"
                                }}
                                transition={{ duration: 0.4 }}
                                className={`${cardBg} backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-sm border ${borderColor} shadow-2xl`}
                            >
                                <p className="text-base sm:text-lg leading-relaxed sm:leading-loose font-light text-justify">
                                    As an artist , my art is at a primal
                                    level manifestation of play with
                                    colours caught in the matrix of its
                                    hues , luminosity , the dance of
                                    light and shade , tonal variations ,
                                    mood affecting effervescence or
                                    edge defying coalescence
                                </p>
                            </motion.div>
                        </div>

                        {/* Right Side Text */}
                        <div className="space-y-6 sm:space-y-8">
                            <motion.div
                                variants={itemVariants}
                                whileHover={{
                                    y: -8,
                                    boxShadow: isDark
                                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                                        : "0 25px 50px -12px rgba(139, 105, 20, 0.15)"
                                }}
                                transition={{ duration: 0.4 }}
                                className={`${cardBg} backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-sm border ${borderColor} shadow-2xl`}
                            >
                                <p className="text-base sm:text-lg leading-relaxed sm:leading-loose font-light text-justify">
                                    More often than not the
                                    figurative or subjective content
                                    is present as an allegorical or
                                    contextual reference. The
                                    primary intent being "play" of
                                    colours or with colours , at times
                                    in harmony and at times in
                                    splendid conflict and
                                    confrontation. This is where my
                                    abstraction begins and ends.
                                    There often are multiple
                                    journeys within my canvasses
                                    that opens windows for the
                                    viewers to seek interpretations
                                    in their own way.
                                </p>
                            </motion.div>
                            <motion.div
                                variants={itemVariants}
                                whileHover={{
                                    y: -8,
                                    boxShadow: isDark
                                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                                        : "0 25px 50px -12px rgba(139, 105, 20, 0.15)"
                                }}
                                transition={{ duration: 0.4 }}
                                className={`${cardBg} backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-sm border ${borderColor} shadow-2xl`}
                            >
                                <p className="text-base sm:text-lg leading-relaxed sm:leading-loose font-light text-justify">
                                    It is a pleasure to present and
                                    share an oeuvre of my art works
                                    in this show and catalogue.
                                    Hopefully different people will
                                    infer different meanings. But
                                    then art was never intended to
                                    have a single meaning or
                                    narrative
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Enhanced Gallery Carousel - Fully Responsive */}
            <section className="container mx-auto px-4 sm:px-6 md:px-8 pb-20 sm:pb-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 md:mb-16 gap-6"
                    >
                        <div>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "3rem" }}
                                transition={{ duration: 1, delay: 0.3 }}
                                viewport={{ once: true }}
                                className={`h-1 mb-3 sm:mb-4 bg-gradient-to-r ${accentGradient}`}
                            />
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight">Selected Works</h3>
                        </div>
                        <div className="flex gap-3 sm:gap-4">
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={prevSlide}
                                className={`p-3 sm:p-4 rounded-full border-2 ${borderColor} ${cardBg} backdrop-blur-sm transition-all duration-300 shadow-lg`}
                            >
                                <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={nextSlide}
                                className={`p-3 sm:p-4 rounded-full border-2 ${borderColor} ${cardBg} backdrop-blur-sm transition-all duration-300 shadow-lg`}
                            >
                                <ChevronRight size={24} className="sm:w-7 sm:h-7" />
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Single image on mobile, two on desktop */}
                    <div className="max-w-7xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                                whileHover={{
                                    y: -8,
                                    boxShadow: isDark
                                        ? "0 30px 60px -15px rgba(0, 0, 0, 0.6)"
                                        : "0 30px 60px -15px rgba(139, 105, 20, 0.2)"
                                }}
                                className={`relative cursor-pointer overflow-hidden group ${cardBg} backdrop-blur-sm border-2 ${borderColor} shadow-2xl max-w-2xl mx-auto`}
                                onClick={() => setExpandedArtwork(currentIndex)}
                            >
                                <div className="relative overflow-hidden">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.7 }}
                                        src={artworks[currentIndex].image}
                                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                                        alt={artworks[currentIndex].title}
                                    />

                                    {/* Info overlay on hover */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className={`absolute inset-0 ${overlayBg} backdrop-blur-sm flex items-end p-6 sm:p-8`}
                                    >
                                        <div>
                                            <h4 className="text-xl sm:text-2xl font-serif mb-1 sm:mb-2">{artworks[currentIndex].title}</h4>
                                            <p className="text-sm opacity-80">{artworks[currentIndex].size}</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </section>

            {/* Expanded Artwork Lightbox - Responsive */}
            <AnimatePresence>
                {expandedArtwork !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setExpandedArtwork(null)}
                            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white z-50"
                        >
                            <X size={36} className="sm:w-12 sm:h-12" />
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ scale: 1.1, x: -5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevSlide}
                            className="absolute left-2 sm:left-8 text-white z-50 p-2 sm:p-4 rounded-full bg-white/10 backdrop-blur-sm"
                        >
                            <ChevronLeft size={32} className="sm:w-10 sm:h-10" />
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ scale: 1.1, x: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextSlide}
                            className="absolute right-2 sm:right-8 text-white z-50 p-2 sm:p-4 rounded-full bg-white/10 backdrop-blur-sm"
                        >
                            <ChevronRight size={32} className="sm:w-10 sm:h-10" />
                        </motion.button>

                        <div className="container mx-auto px-4 sm:px-8 md:px-16 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-16 max-w-7xl">
                            <motion.div
                                key={expandedArtwork}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="flex-1 w-full"
                            >
                                <img
                                    src={artworks[expandedArtwork].image}
                                    className="w-full max-h-[50vh] lg:max-h-[85vh] object-contain shadow-2xl"
                                    alt={artworks[expandedArtwork].title}
                                />
                            </motion.div>

                            <motion.div
                                key={`details-${expandedArtwork}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="w-full lg:w-96 text-white space-y-6 sm:space-y-8"
                            >
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "3rem" }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E4C1]"
                                />

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <p className="text-xs sm:text-sm tracking-[0.3em] uppercase opacity-60 mb-2 sm:mb-3">Artwork Details</p>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6 leading-tight">{artworks[expandedArtwork].title}</h2>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="space-y-4 pt-4 border-t border-white/20"
                                >
                                    <div>
                                        <p className="text-xs sm:text-sm uppercase tracking-wider opacity-60 mb-2">Dimensions</p>
                                        <p className="text-lg sm:text-xl font-light">{artworks[expandedArtwork].size}</p>
                                    </div>

                                    <div>
                                        <p className="text-xs sm:text-sm uppercase tracking-wider opacity-60 mb-2">Medium & Description</p>
                                        <p className="text-base sm:text-lg font-light leading-relaxed opacity-90">
                                            {artworks[expandedArtwork].description}
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="pt-4 sm:pt-8"
                                >
                                    <p className="text-xs opacity-50">
                                        {expandedArtwork + 1} of {artworks.length}
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};