import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// banner img
import samsaraSeriesImg from '../assets/images/samsaraSeries/samsaraSeriesBannerImg.png';

import samsaraSeries1 from '../assets/images/samsaraSeries/samsaraSeries1.png';
import samsaraSeries3 from '../assets/images/samsaraSeries/samsaraSeries2.png/';
import samsaraSeries2 from '../assets/images/samsaraSeries/samsaraSeries3.png/';
import samsaraSeries4 from '../assets/images/samsaraSeries/samsaraSeries4.png/';
import samsaraSeries5 from '../assets/images/samsaraSeries/samsaraSeries5.png/';
import samsaraSeries6 from '../assets/images/samsaraSeries/samsaraSeries6.png/';
import samsaraSeries7 from '../assets/images/samsaraSeries/samsaraSeries7.png/';

const samsaraSeriesScapesArtworks = [
    {
        id: 1,
        image: samsaraSeries1,
        size: "48 × 48 inches",
        description: "OIL ON CANVAS"
    },
    {
        id: 2,
        image: samsaraSeries2,
        size: "48 × 48 inches",
        description: "OIL ON CANVAS"
    },
    {
        id: 3,
        image: samsaraSeries3,
        size: "48 × 48 inches",
        description: "OIL ON CANVAS"
    },
    {
        id: 4,
        image: samsaraSeries4,
        size: "60 × 60 inches",
        description: "OIL ON CANVAS"
    }
    ,
    {
        id: 5,
        image: samsaraSeries5,
        size: "42 × 60 inches",
        description: "OIL ON CANVAS"
    }
    ,
    {
        id: 6,
        image: samsaraSeries6,
        size: "36 × 60 inches",
        description: "OIL ON CANVAS"
    }
    ,
    {
        id: 7,
        image: samsaraSeries7,
        size: "48 × 48 inches",
        description: "OIL ON CANVAS"
    }
];

export const SamsaraSeries = () => {
    const isDark = useSelector((state) => state.theme.isDark);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expandedArtwork, setExpandedArtwork] = useState(null);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])

    useEffect(() => {
        document.body.style.overflow = expandedArtwork !== null ? 'hidden' : 'auto';
        return () => { document.body.style.overflow = 'auto'; };
    }, [expandedArtwork]);

    // Combined navigation for Carousel and Modal
    const nextSlide = (e) => {
        if (e) e.stopPropagation();
        if (expandedArtwork !== null) {
            setExpandedArtwork((prev) => (prev + 1) % samsaraSeriesScapesArtworks.length);
        } else {
            setCurrentIndex((prev) => (prev + 1) % samsaraSeriesScapesArtworks.length);
        }
    };

    const prevSlide = (e) => {
        if (e) e.stopPropagation();
        if (expandedArtwork !== null) {
            setExpandedArtwork((prev) => (prev - 1 + samsaraSeriesScapesArtworks.length) % samsaraSeriesScapesArtworks.length);
        } else {
            setCurrentIndex((prev) => (prev - 1 + samsaraSeriesScapesArtworks.length) % samsaraSeriesScapesArtworks.length);
        }
    };

    const bgColor = isDark
        ? 'bg-gradient-to-br from-[#0A0A0A] via-[#141414] to-[#1A1A1A]'
        : 'bg-gradient-to-br from-[#F5EFE7] via-[#E8DDD0] to-[#D6C8B8]';
    const textColor = isDark ? 'text-[#F5F5F4]' : 'text-[#2C2416]';
    const borderColor = isDark ? 'border-[#2A2A2A]' : 'border-[#C4B5A0]';
    const cardBg = isDark ? 'bg-[#141414]' : 'bg-white';
    const accentGradient = isDark ? 'from-[#D4AF37] to-[#F4E4C1]' : 'from-[#8B6914] via-[#B8860B] to-[#DAA520]';
    const overlayBg = isDark ? 'bg-black/60' : 'bg-[#F5EFE7]/85';

    // Carousel Logic: Get the 3 images starting from currentIndex
    const visibleArtworks = [];
    for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % samsaraSeriesScapesArtworks.length;
        visibleArtworks.push({ ...samsaraSeriesScapesArtworks[index], actualIndex: index });
    }

    return (
        <div className={`select-none transition-all duration-700 ${bgColor} ${textColor} min-h-screen relative pt-18`}>

            {/* Banner Section */}
            {/* <section className="relative pt-32 pb-10">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="relative w-full mx-auto mb-28"
                    >
                        <h1
                            className="relative z-10 text-center whitespace-nowrap leading-none font-extrabold text-[clamp(3rem,9vw,8rem)] font-brusher"
                            style={{ transform: 'skewX(-2deg)' }}
                        >
                            <span className={!isDark ? 'text-[#6B4A1E]' : 'text-white'}>
                                SA
                            </span>

                            <span className="text-white">
                                MSARA SERI
                            </span>

                            <span className={!isDark ? 'text-[#6B4A1E]' : 'text-white'}>
                                ES
                            </span>
                        </h1>

                        <div className="absolute inset-0 flex items-center justify-center -z-0 font-brusher">
                            <div className="relative w-[55%] max-w-3xl h-55 sm:h-[300px] md:h-[360px] overflow-hidden shadow-2xl">
                                <img
                                    src={samsaraSeriesImg}
                                    alt="samsaraSeries Scapes"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section> */}

            {/* Banner Section */}
            <section className="relative md:pb-10 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        // min-height ensures the section is prominent on mobile
                        className="relative flex flex-col items-center justify-center min-h-[55vh] md:min-h-[70vh]"
                    >
                        {/* Background Decorative Text */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                            <span className={`text-[18vw] md:text-[12vw] font-serif uppercase tracking-[0.2em] opacity-[0.03] whitespace-nowrap select-none ${isDark ? 'text-white' : 'text-black'}`}>
                                SAMSARA SERIES
                            </span>
                        </div>

                        {/* Top Text Layer: "SAMSARA" - Aligned Left */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            // self-start and ml-0 forces it to the left
                            className="relative z-30 self-start ml-0 md:ml-[5%] -mb-4 md:-mb-10"
                        >
                            <h1 className="font-brusher text-[clamp(3.5rem,16vw,11rem)] leading-none drop-shadow-2xl whitespace-nowrap">

                                <span className="text-[#6B4A1E]">SA</span>
                                <span className="text-white">MSARA</span>
                            </h1>
                        </motion.div>

                        {/* Middle Layer: Image "The Portal" */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative z-20 w-full max-w-4xl group"
                        >
                            <div className={`absolute -inset-2 md:-inset-4 border ${isDark ? 'border-white/10' : 'border-black/10'} -z-10`} />
                            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                <img
                                    src={samsaraSeriesImg}
                                    alt="Samsara Series"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                            </div>
                        </motion.div>

                        {/* Bottom Text Layer: "SERIES" - Aligned Right */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            // self-end forces it to the right
                            className="relative z-30 self-end mr-0 md:mr-[5%] mt-4 md:mt-6"
                        >
                            <h1 className="font-brusher text-[clamp(3.5rem,16vw,11rem)] leading-none drop-shadow-2xl whitespace-nowrap">

                                <span className="text-white">SERI</span>
                                <span className="text-[#6B4A1E]">ES</span>
                            </h1>
                        </motion.div>

                        {/* Abstract Decorative Lines */}
                        <div className={`absolute left-0 top-1/2 w-12 md:w-24 h-px ${isDark ? 'bg-white/20' : 'bg-black/20'} hidden lg:block`} />
                        <div className={`absolute right-0 top-1/2 w-12 md:w-24 h-px ${isDark ? 'bg-white/20' : 'bg-black/20'} hidden lg:block`} />
                    </motion.div>
                </div>
            </section>

            {/* text section */}
            <div className='container mx-auto px-4 sm:px-6 md:px-8 pb-10' >
                <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto ">
                    <div className={`${cardBg} p-8 border ${borderColor} shadow-2xl`}>
                        <p className="text-base sm:text-lg leading-relaxed font-light text-justify">
                            Samsara in the Hindu philosophy is
                            broadly interpreted as the endless
                            cycle of birth , death , rebirth or the
                            transmigration of the soul with the
                            main dramatis personae of this
                            philosophy
                            being the Purusha and Prakri
                        </p>

                        <p className="text-base sm:text-lg leading-relaxed font-light text-justify mt-2.5">
                            Purusha ( Shiv ) and Prakriti
                            ( Shakti ) are the two abstract entities
                            as defined in the Sankhya philosophy
                            and is one of the six main schools of
                            Hindu Philosophy, also known as the
                            Shad Darshanas and is dualistic in
                            nature.
                        </p>

                        <p className="text-base sm:text-lg leading-relaxed font-light text-justify mt-2.5">
                            Purusha is the spirit , self or
                            consciousness , is inactive , universal
                            and eternal representing the male
                            aspect of creation. Prakriti is the entity
                            defined by matter or substance , it is
                            representative of the female aspect of
                            creation and is active. It is the union of
                            Purusha and Prakriti that creates the
                            universe.
                        </p>
                    </div>
                    <div className={`${cardBg} p-8 border ${borderColor} shadow-2xl`}>
                        <p className="text-base sm:text-lg leading-relaxed font-light text-justify">
                            I dwell in the concept of Prakriti
                            ( Shakti ) in the realms of my art
                            works. Shakti or Bhudevi in the Hindu
                            worldview is the mother goddess ,
                            which receives the seed in her womb
                            from which springs forth life. Prakriti
                            ( Nature ) , throbbing with life and
                            bestowing energy is therefore
                            referenced as Shakti , the source of
                            power. It is hence the manifestation
                            of “ Maya “ ( Illusion ) , in its visual
                            shape , texture , fragrance , colours or
                            the “ Rasas “ . It is a divine portrayal
                            of sensuality , untamed passion ,
                            corporeal desires , that is physically
                            imbued in the soul of
                            Prakriti ( Nature ) to serve the
                            primordial purpose of the continuum
                            of existence , or the eternal cycle of “
                            SAMSARA “
                        </p>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <section className="container mx-auto px-4 sm:px-6 md:px-8 pb-32 " >
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-4xl font-serif">Gallery</h2>
                    <div className="flex gap-4">
                        <button onClick={prevSlide} className={`p-4 rounded-full border-2 ${borderColor} ${cardBg} shadow-lg hover:scale-105 transition-transform`}><ChevronLeft size={24} /></button>
                        <button onClick={nextSlide} className={`p-4 rounded-full border-2 ${borderColor} ${cardBg} shadow-lg hover:scale-105 transition-transform`}><ChevronRight size={24} /></button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    <AnimatePresence mode="popLayout">
                        {visibleArtworks.map((artwork) => {
                            const hasText = artwork.title || artwork.size;
                            return (
                                <motion.div
                                    key={artwork.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    onClick={() => setExpandedArtwork(artwork.actualIndex)}
                                    className={`cursor-pointer group border ${borderColor} ${cardBg} p-3 shadow-xl`}
                                >
                                    <div className="relative overflow-hidden aspect-4/5">
                                        <img src={artwork.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="" />
                                        {hasText && (
                                            <div className={`absolute inset-0 ${overlayBg} opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6`}>
                                                <div>
                                                    <h4 className="text-xl font-serif">{artwork.title}</h4>
                                                    <p className="text-sm opacity-70">{artwork.size}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </section >

            {/* Expanded Artwork Modal */}
            < AnimatePresence AnimatePresence >
                {expandedArtwork !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-200 flex items-center justify-center bg-black/98 p-4 md:p-12"
                    >
                        {/* Backdrop Click to Close */}
                        <div className="absolute inset-0" onClick={() => setExpandedArtwork(null)} />

                        {/* Navigation Controls */}
                        <button onClick={prevSlide} className="absolute left-4 md:left-10 text-white/40 hover:text-white z-50 transition-colors">
                            <ChevronLeft size={64} />
                        </button>
                        <button onClick={nextSlide} className="absolute right-4 md:right-10 text-white/40 hover:text-white z-50 transition-colors">
                            <ChevronRight size={64} />
                        </button>
                        <button onClick={() => setExpandedArtwork(null)} className="absolute top-8 right-8 text-white/70 hover:text-white z-50">
                            <X size={40} />
                        </button>

                        <div className="relative w-full max-w-7xl h-full flex flex-col lg:flex-row items-center justify-center gap-12 pointer-events-none">
                            {/* Image Container */}
                            <div className={`${samsaraSeriesScapesArtworks[expandedArtwork].title ? 'lg:w-2/3' : 'w-full'} h-[60vh] lg:h-[80vh] flex flex-col items-center justify-center gap-6 pointer-events-auto`}>
                                <motion.img
                                    key={expandedArtwork}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    src={samsaraSeriesScapesArtworks[expandedArtwork].image}
                                    className="max-w-full max-h-full object-contain shadow-2xl"
                                />
                                {/* Counter for images WITHOUT text */}
                                {!samsaraSeriesScapesArtworks[expandedArtwork].title && (
                                    <p className="text-white/40 tracking-[0.3em] text-sm uppercase font-serif">
                                        {expandedArtwork + 1} / {samsaraSeriesScapesArtworks.length}
                                    </p>
                                )}
                            </div>

                            {/* Info Sidebar (Only if Title exists) */}
                            {samsaraSeriesScapesArtworks[expandedArtwork].title && (
                                <motion.div
                                    key={`info-${expandedArtwork}`}
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    className="w-full lg:w-1/3 text-white space-y-6 flex flex-col pointer-events-auto"
                                >
                                    <div className={`h-1 w-12 bg-gradient-to-r ${accentGradient}`} />
                                    <div>
                                        <p className="text-xs tracking-[0.3em] uppercase opacity-50 mb-2">Selected Scape</p>
                                        <h2 className="text-4xl md:text-5xl font-serif leading-tight">{samsaraSeriesScapesArtworks[expandedArtwork].title}</h2>
                                    </div>
                                    <div className="space-y-4 pt-6 border-t border-white/10">
                                        <p className="text-[#D4AF37] text-xl font-serif">{samsaraSeriesScapesArtworks[expandedArtwork].size}</p>
                                        <p className="text-lg opacity-70 leading-relaxed font-serif">{samsaraSeriesScapesArtworks[expandedArtwork].description}</p>
                                    </div>
                                    <div className="pt-8">
                                        <p className="text-white/40 tracking-[0.3em] text-sm uppercase font-serif">
                                            {expandedArtwork + 1} / {samsaraSeriesScapesArtworks.length}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}
            </ AnimatePresence>
        </div >
    );
};