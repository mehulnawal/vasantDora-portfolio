import React, { useState } from 'react';
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
    const [expandedArtwork, setExpandedArtwork] = useState(null);

    const { scrollYProgress } = useScroll();
    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    const nextSlide = () => {
        if (expandedArtwork !== null) {
            setExpandedArtwork((prev) => (prev + 1) % artworks.length);
        } else {
            setCurrentIndex((prev) => (prev + 2 >= artworks.length ? 0 : prev + 2));
        }
    };

    const prevSlide = () => {
        if (expandedArtwork !== null) {
            setExpandedArtwork((prev) => (prev - 1 + artworks.length) % artworks.length);
        } else {
            setCurrentIndex((prev) => (prev - 2 < 0 ? Math.max(0, artworks.length - 2) : prev - 2));
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
                        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#DAA520]/10 to-[#B8860B]/5 rounded-full blur-3xl"
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
                        className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-br from-[#8B6914]/10 to-[#DAA520]/5 rounded-full blur-3xl"
                    />
                </>
            )}

            {/* Immersive Hero Section */}
            <section className="relative h-screen w-full flex items-end overflow-hidden">
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ scale: heroScale }}
                >
                    <img
                        src={clientImage}
                        alt="Vasant Dora"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </motion.div>

                <motion.div
                    className="container mx-auto px-8 pb-24 relative z-10"
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
                            animate={{ width: "6rem" }}
                            transition={{ duration: 1.2, delay: 0.5 }}
                            className={`h-1 mb-8 bg-gradient-to-r ${accentGradient}`}
                        />

                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="text-sm tracking-[0.4em] uppercase mb-4 block text-white/90 font-light"
                        >
                            Contemporary Painter
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 1 }}
                            className="text-7xl md:text-9xl font-serif tracking-tight mb-6 text-white leading-none"
                        >
                            Vasant Dora
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.4 }}
                            className="text-xl md:text-2xl font-light text-white/90 leading-relaxed max-w-2xl"
                        >
                            Exploring colour as play — where light, tone, and abstraction unfold through instinct and intuition.
                        </motion.p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Leela of Colors Section - Enhanced */}
            <section className="container mx-auto px-8 py-40 relative">
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
                    className={`absolute top-20 right-20 w-64 h-64 ${isDark ? 'bg-[#D4AF37]/5' : 'bg-[#DAA520]/8'} rounded-full blur-3xl`}
                />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center gap-8 mb-20"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                            viewport={{ once: true }}
                            className={`h-px flex-1 bg-gradient-to-r ${isDark ? 'from-transparent to-[#2A2A2A]' : 'from-transparent to-[#C4B5A0]'}`}
                        />
                        <h2 className="text-6xl md:text-7xl font-serif tracking-tight">Leela of Colors</h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                            viewport={{ once: true }}
                            className={`h-px flex-1 bg-gradient-to-l ${isDark ? 'from-transparent to-[#2A2A2A]' : 'from-transparent to-[#C4B5A0]'}`}
                        />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
                        {/* Left Side Text */}
                        <div className="space-y-8">
                            <motion.div
                                variants={itemVariants}
                                whileHover={{
                                    y: -8,
                                    boxShadow: isDark
                                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                                        : "0 25px 50px -12px rgba(139, 105, 20, 0.15)"
                                }}
                                transition={{ duration: 0.4 }}
                                className={`${cardBg} backdrop-blur-sm p-10 rounded-sm border ${borderColor} shadow-2xl`}
                            >
                                <p className="text-lg leading-loose font-light text-justify">
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
                                className={`${cardBg} backdrop-blur-sm p-10 rounded-sm border ${borderColor} shadow-2xl`}
                            >
                                <p className="text-lg leading-loose font-light text-justify">
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
                        <div className="space-y-8">
                            <motion.div
                                variants={itemVariants}
                                whileHover={{
                                    y: -8,
                                    boxShadow: isDark
                                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                                        : "0 25px 50px -12px rgba(139, 105, 20, 0.15)"
                                }}
                                transition={{ duration: 0.4 }}
                                className={`${cardBg} backdrop-blur-sm p-10 rounded-sm border ${borderColor} shadow-2xl`}
                            >
                                <p className="text-lg leading-loose font-light text-justify">
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
                                className={`${cardBg} backdrop-blur-sm p-10 rounded-sm border ${borderColor} shadow-2xl`}
                            >
                                <p className="text-lg leading-loose font-light text-justify">
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

            {/* Enhanced Gallery Carousel */}
            <section className="container mx-auto px-8 pb-20">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}>
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-between mb-16"
                    >
                        <div>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "4rem" }}
                                transition={{ duration: 1, delay: 0.3 }}
                                viewport={{ once: true }}
                                className={`h-1 mb-4 bg-gradient-to-r ${accentGradient}`}
                            />
                            <h3 className="text-5xl font-serif tracking-tight">Selected Works</h3>
                        </div>
                        <div className="flex gap-4">
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={prevSlide}
                                className={`p-4 rounded-full border-2 ${borderColor} ${cardBg} backdrop-blur-sm transition-all duration-300 shadow-lg`}
                            >
                                <ChevronLeft size={28} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={nextSlide}
                                className={`p-4 rounded-full border-2 ${borderColor} ${cardBg} backdrop-blur-sm transition-all duration-300 shadow-lg`}
                            >
                                <ChevronRight size={28} />
                            </motion.button>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-12 max-w-7xl mx-auto">
                        <AnimatePresence mode="wait">
                            {artworks.slice(currentIndex, currentIndex + 2).map((artwork, i) => (
                                <motion.div
                                    key={artwork.id}
                                    initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    whileHover={{
                                        y: -12,
                                        boxShadow: isDark
                                            ? "0 30px 60px -15px rgba(0, 0, 0, 0.6)"
                                            : "0 30px 60px -15px rgba(139, 105, 20, 0.2)"
                                    }}
                                    className={`relative cursor-pointer overflow-hidden group ${cardBg} backdrop-blur-sm border-2 ${borderColor} shadow-2xl`}
                                    onClick={() => setExpandedArtwork(currentIndex + i)} >
                                    <div className="relative overflow-hidden">
                                        <motion.img
                                            whileHover={{ scale: 1.08 }}
                                            transition={{ duration: 0.7 }}
                                            src={artwork.image}
                                            className="w-full h-[400px] object-cover"
                                            alt={artwork.title}
                                        />

                                        {/* Info overlay on hover */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className={`absolute inset-0 ${overlayBg} backdrop-blur-sm flex  p-8`}
                                        >
                                            <div>
                                                <h4 className="text-2xl font-serif mb-2">{artwork.title}</h4>
                                                <p className="text-sm opacity-80">{artwork.size}</p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </section>

            {/* Expanded Artwork Lightbox */}
            <AnimatePresence>
                {expandedArtwork !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-md"
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setExpandedArtwork(null)}
                            className="absolute top-8 right-8 text-white z-50"
                        >
                            <X size={48} />
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ scale: 1.1, x: -5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevSlide}
                            className="absolute left-8 text-white z-50 p-4 rounded-full bg-white/10 backdrop-blur-sm"
                        >
                            <ChevronLeft size={40} />
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ scale: 1.1, x: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextSlide}
                            className="absolute right-8 text-white z-50 p-4 rounded-full bg-white/10 backdrop-blur-sm"
                        >
                            <ChevronRight size={40} />
                        </motion.button>

                        <div className="container mx-auto px-16 flex items-center gap-16 max-w-7xl">
                            <motion.div
                                key={expandedArtwork}
                                initial={{ opacity: 0, x: -50, rotateY: -10 }}
                                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="flex-1"
                            >
                                <img
                                    src={artworks[expandedArtwork].image}
                                    className="w-full max-h-[85vh] object-contain shadow-2xl"
                                    alt={artworks[expandedArtwork].title}
                                />
                            </motion.div>

                            <motion.div
                                key={`details-${expandedArtwork}`}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="w-96 text-white space-y-8"
                            >
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "4rem" }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E4C1]"
                                />

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <p className="text-sm tracking-[0.3em] uppercase opacity-60 mb-3">Artwork Details</p>
                                    <h2 className="text-4xl font-serif mb-6 leading-tight">{artworks[expandedArtwork].title}</h2>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="space-y-4 pt-4 border-t border-white/20"
                                >
                                    <div>
                                        <p className="text-sm uppercase tracking-wider opacity-60 mb-2">Dimensions</p>
                                        <p className="text-xl font-light">{artworks[expandedArtwork].size}</p>
                                    </div>

                                    <div>
                                        <p className="text-sm uppercase tracking-wider opacity-60 mb-2">Medium & Description</p>
                                        <p className="text-lg font-light leading-relaxed opacity-90">
                                            {artworks[expandedArtwork].description}
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="pt-8"
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