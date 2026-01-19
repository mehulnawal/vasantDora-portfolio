import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// import bannerImage from '../assets/images/paintingEg1.jpg';
import urban1 from '../assets/images/paintingEg1.jpg';
import urban2 from '../assets/images/paintingEg2.jpg';
import urban3 from '../assets/images/paintingEg3.jpg';
import urban4 from '../assets/images/paintingEg4.jpg';

const urbanScapesArtworks = [
    {
        id: 1,
        image: urban1,
        title: "Urban Morphology No. 1",
        size: "48 × 36 inches",
        description: "Acrylic on canvas, exploring organic urban development"
    },
    {
        id: 2,
        image: urban2,
        title: "Chaotic Harmony",
        size: "60 × 48 inches",
        description: "Mixed media on canvas, unplanned settlements"
    },
    {
        id: 3,
        image: urban3,
        title: "City Fabric",
        size: "36 × 36 inches",
        description: "Oil on canvas, layers of urban existence"
    },
    {
        id: 4,
        image: urban4,
        title: "Street Symphony",
        size: "72 × 48 inches",
        description: "Acrylic on canvas, visual narratives of city life"
    },
    // {
    //     id: 5,
    //     image: urban5,
    //     title: "Tenement Dreams",
    //     size: "48 × 48 inches",
    //     description: "Mixed media, exploring subliminal urban constructs"
    // },
    // {
    //     id: 6,
    //     image: urban6,
    //     title: "Organic Architecture",
    //     size: "60 × 36 inches",
    //     description: "Acrylic on canvas, user-created urban spaces"
    // },
    // {
    //     id: 7,
    //     image: urban7,
    //     title: "Habitat Layers",
    //     size: "48 × 36 inches",
    //     description: "Oil on canvas, multiple urban dimensions"
    // },
    // {
    //     id: 8,
    //     image: urban8,
    //     title: "Narrow Lanes",
    //     size: "36 × 48 inches",
    //     description: "Mixed media, mysteries of urban passages"
    // },
    // {
    //     id: 9,
    //     image: urban9,
    //     title: "Unplanned Wonder",
    //     size: "72 × 60 inches",
    //     description: "Acrylic on canvas, chaotic visual character"
    // }
];

export const UrbanScapes = () => {
    const isDark = useSelector((state) => state.theme.isDark);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expandedArtwork, setExpandedArtwork] = useState(null);

    // Disable body scroll when lightbox is open
    useEffect(() => {
        if (expandedArtwork !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [expandedArtwork]);

    const nextSlide = () => {
        if (expandedArtwork !== null) {
            setExpandedArtwork((prev) => (prev + 1) % urbanScapesArtworks.length);
        } else {
            setCurrentIndex((prev) =>
                prev + 3 >= urbanScapesArtworks.length ? 0 : prev + 3
            );
        }
    };

    const prevSlide = () => {
        if (expandedArtwork !== null) {
            setExpandedArtwork((prev) =>
                (prev - 1 + urbanScapesArtworks.length) % urbanScapesArtworks.length
            );
        } else {
            setCurrentIndex((prev) =>
                prev - 3 < 0 ? Math.max(0, urbanScapesArtworks.length - 3) : prev - 3
            );
        }
    };

    // Premium Colors matching Home page
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

    // Visible artworks for carousel
    const visibleArtworks = urbanScapesArtworks.slice(currentIndex, currentIndex + 3);
    if (visibleArtworks.length < 3) {
        visibleArtworks.push(...urbanScapesArtworks.slice(0, 3 - visibleArtworks.length));
    }

    return (
        <div className={`select-none transition-all duration-700 ${bgColor} ${textColor} min-h-screen`}>

            {/* Banner Section - Exact Layout from Screenshot */}
            <section className="relative pt-50 sm:pt-60 md:pt-70 pb-16 sm:pb-20 md:pb-24">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">

                    {/* Image with Title Overlay */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="relative w-full mx-auto mb-28 sm:mb-36 md:mb-40">
                        {/* BIG TEXT (SECTION-WIDE) */}

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="
        relative z-10
        text-center
        whitespace-nowrap
        leading-none
        font-extrabold
        text-[clamp(3rem,9vw,8rem)]
    "
                            style={{
                                fontFamily: 'Brush Script MT, Segoe Script, cursive',
                                letterSpacing: '-0.03em',
                                transform: 'skewX(-2deg)',
                            }}
                        >

                            <span className={!isDark ? 'text-[#6B4A1E]' : 'text-white'}>
                                UR
                            </span>

                            {/* ALWAYS WHITE */}
                            <span className="text-white">
                                BAN SCAP
                            </span>

                            {/* CONDITIONAL COLOR */}
                            <span className={!isDark ? 'text-[#6B4A1E]' : 'text-white'}>
                                ES
                            </span>
                        </motion.h1>


                        {/* SMALLER IMAGE BEHIND (ONLY COVERS MIDDLE) */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-[55%] max-w-3xl h-[220px] sm:h-[300px] md:h-[360px] overflow-hidden shadow-2xl">
                                <img
                                    src={urban4}
                                    alt="Urban Scapes"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* IMAGE-COLORED TEXT (ONLY WHERE IMAGE EXISTS) */}
                                <h1
                                    className="
                    absolute inset-0
                    flex items-center justify-center
                    whitespace-nowrap
                    leading-none
                    font-extrabold
                    text-[clamp(3rem,9vw,8rem)]
                "
                                    style={{
                                        fontFamily: 'Brush Script MT, Segoe Script, cursive',
                                        letterSpacing: '-0.03em',
                                        transform: 'skewX(-2deg)',

                                        backgroundImage: `url(${urban4})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    URBAN&nbsp;SCAPES
                                </h1>
                            </div>
                        </div>
                    </motion.div>


                    {/* Text Content Below Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-7xl mx-auto"
                    >
                        {/* Left Side Text */}
                        <div className={`${cardBg} backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-sm border ${borderColor} shadow-2xl`}>
                            <p className="text-base sm:text-lg leading-relaxed sm:leading-loose font-light text-justify">
                                Through my Habitat Scape Series of art works, the artist in the architect, is exploring at an analogous level the unstructured and the organic construct of the Urban morphology in our towns and cities. As a trained architect I would respond to order, symmetry, planned physical form and shapes, formal geometry, street manners, climate and any other validated and contextual visual narrative that would define contemporary architecture. As an artist what fascinates me is the entirely different urban contextual form and visual narrative that exists more predominantly in the urban fabric of our towns and cities that are often referred to as unplanned development chaotic in its visual character.
                            </p>
                        </div>

                        {/* Right Side Text */}
                        <div className={`${cardBg} backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-sm border ${borderColor} shadow-2xl`}>
                            <p className="text-base sm:text-lg leading-relaxed sm:leading-loose font-light text-justify">
                                It more often is organic development that was "architectured" by the users and common people. The seemingly chaotic aggregation of the habitat mass that exists in multiple layers beyond the mere brick and mortar of the physical façade and where the physical aspect serves the functional purpose of its subliminal construct. At an entirely different level of perception to the cognitive construct of my "trained" understanding as an architect, I have also often been compelled to wonder of what lies beyond and within the habitat scapes and human tenements. It is here that my art points to a direction for the viewer to unravel the mysteries that is symbiotically woven in the physical construct and character, in the masses and voids, narrow lanes and by lanes of these organic settlements through the prism their own life experiences and interpretations.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section - 3 Images Carousel */}
            <section className="container mx-auto px-4 sm:px-6 md:px-8 pb-20 sm:pb-32 md:pb-40">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    {/* Section Header */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 md:mb-16 gap-6">
                        <div>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "4rem" }}
                                transition={{ duration: 1, delay: 0.3 }}
                                viewport={{ once: true }}
                                className={`h-1 mb-3 sm:mb-4 bg-gradient-to-r ${accentGradient}`}
                            />
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight">Gallery</h2>
                        </div>

                        {/* Navigation Arrows */}
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
                    </div>

                    {/* 3 Images Grid - Responsive */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
                        <AnimatePresence mode="wait">
                            {visibleArtworks.map((artwork, index) => (
                                <motion.div
                                    key={`${currentIndex}-${index}`}
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }}
                                    whileHover={{
                                        y: -8,
                                        boxShadow: isDark
                                            ? "0 30px 60px -15px rgba(0, 0, 0, 0.6)"
                                            : "0 30px 60px -15px rgba(139, 105, 20, 0.2)"
                                    }}
                                    className={`relative cursor-pointer overflow-hidden group ${cardBg} backdrop-blur-sm border-2 ${borderColor} shadow-2xl`}
                                    onClick={() => setExpandedArtwork(urbanScapesArtworks.indexOf(artwork))}
                                >
                                    <div className="relative overflow-hidden">
                                        <motion.img
                                            whileHover={{ scale: 1.08 }}
                                            transition={{ duration: 0.7 }}
                                            src={artwork.image}
                                            className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover"
                                            alt={artwork.title}
                                        />

                                        {/* Info overlay on hover */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className={`absolute inset-0 ${overlayBg} backdrop-blur-sm flex items-end p-6 sm:p-8`}
                                        >
                                            <div>
                                                <h4 className="text-lg sm:text-xl md:text-2xl font-serif mb-1 sm:mb-2">{artwork.title}</h4>
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

            {/* Expanded Artwork Lightbox - Same as Home */}
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
                                    src={urbanScapesArtworks[expandedArtwork].image}
                                    className="w-full max-h-[50vh] lg:max-h-[85vh] object-contain shadow-2xl"
                                    alt={urbanScapesArtworks[expandedArtwork].title}
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
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6 leading-tight">
                                        {urbanScapesArtworks[expandedArtwork].title}
                                    </h2>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="space-y-4 pt-4 border-t border-white/20"
                                >
                                    <div>
                                        <p className="text-xs sm:text-sm uppercase tracking-wider opacity-60 mb-2">Dimensions</p>
                                        <p className="text-lg sm:text-xl font-light">
                                            {urbanScapesArtworks[expandedArtwork].size}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs sm:text-sm uppercase tracking-wider opacity-60 mb-2">Medium & Description</p>
                                        <p className="text-base sm:text-lg font-light leading-relaxed opacity-90">
                                            {urbanScapesArtworks[expandedArtwork].description}
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
                                        {expandedArtwork + 1} of {urbanScapesArtworks.length}
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