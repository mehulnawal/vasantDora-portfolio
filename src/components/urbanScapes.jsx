import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import urbanScapesBannerImg from '../assets/images/urbanScapes/urbanScapesBannerImg.jpeg';

import urban1 from '../assets/images/urbanScapes/urban1.png';
import urban2 from '../assets/images/urbanScapes/urban2.png';
import urban3 from '../assets/images/urbanScapes/urban3.png';
import urban4 from '../assets/images/urbanScapes/urban4.png';
import urban5 from '../assets/images/urbanScapes/urban5.png';
import urban6 from '../assets/images/urbanScapes/urban6.png';
import urban7 from '../assets/images/urbanScapes/urban7.png';

const SamsaraSeriesArtWorks = [
    {
        id: 1,
        image: urban1,
        size: "48 × 48 inches",
        vDim: 48, // Vertical Dimension
        hDim: 48, // Horizontal Dimension
        description: "OIL ON CANVAS"
    },
    {
        id: 2,
        image: urban2,
        size: "48 × 48 inches",
        vDim: 48,
        hDim: 48,
        description: "OIL ON CANVAS"
    },
    {
        id: 3,
        image: urban3,
        size: "48 × 96 inches",
        vDim: 48,
        hDim: 96,
        description: "OIL ON CANVAS"
    },
    {
        id: 4,
        image: urban4,
        size: "48 × 48 inches",
        vDim: 48,
        hDim: 48,
        description: "OIL ON CANVAS"
    },
    {
        id: 5,
        image: urban5,
        size: "60 × 60 inches",
        vDim: 60,
        hDim: 60,
        description: "OIL ON CANVAS"
    },
    {
        id: 6,
        image: urban6,
        size: "48 × 36 inches",
        vDim: 48,
        hDim: 36,
        description: "OIL ON CANVAS"
    },
    {
        id: 7,
        image: urban7,
        size: "48 × 36 inches",
        vDim: 48,
        hDim: 36,
        description: "OIL ON CANVAS"
    }
];

export const UrbanScapes = () => {
    const isDark = useSelector((state) => state.theme.isDark);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expandedArtwork, setExpandedArtwork] = useState(null);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        document.body.style.overflow = expandedArtwork !== null ? 'hidden' : 'auto';
        return () => { document.body.style.overflow = 'auto'; };
    }, [expandedArtwork]);

    const nextSlide = (e) => {
        if (e) e.stopPropagation();
        if (expandedArtwork !== null) {
            setExpandedArtwork((prev) => (prev + 1) % SamsaraSeriesArtWorks.length);
        } else {
            setCurrentIndex((prev) => (prev + 1) % SamsaraSeriesArtWorks.length);
        }
    };

    const prevSlide = (e) => {
        if (e) e.stopPropagation();
        if (expandedArtwork !== null) {
            setExpandedArtwork((prev) => (prev - 1 + SamsaraSeriesArtWorks.length) % SamsaraSeriesArtWorks.length);
        } else {
            setCurrentIndex((prev) => (prev - 1 + SamsaraSeriesArtWorks.length) % SamsaraSeriesArtWorks.length);
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

    const visibleArtworks = [];
    for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % SamsaraSeriesArtWorks.length;
        visibleArtworks.push({ ...SamsaraSeriesArtWorks[index], actualIndex: index });
    }

    return (
        <div className={`select-none transition-all duration-700 ${bgColor} ${textColor} min-h-screen relative pt-32`}>

            {/* Banner Section */}
            <section className="relative pt-32 pb-10">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative w-full mx-auto mb-28">
                        <h1 className="relative z-10 text-center whitespace-nowrap leading-none font-extrabold text-[clamp(3rem,9vw,8rem)] font-brusher" style={{ transform: 'skewX(-2deg)' }}>
                            <span className={!isDark ? 'text-[#6B4A1E]' : 'text-white'}>UR</span>
                            <span className="text-white">BAN SCAP</span>
                            <span className={!isDark ? 'text-[#6B4A1E]' : 'text-white'}>ES</span>
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center -z-0 font-brusher">
                            <div className="relative w-[55%] max-w-3xl h-55 sm:h-[300px] md:h-[360px] overflow-hidden shadow-2xl">
                                <img src={urbanScapesBannerImg} alt="Urban Scapes" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* text section */}
            <div section section className='container mx-auto px-4 sm:px-6 md:px-8 pb-10' >
                <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto ">
                    <div className={`${cardBg} p-8 border ${borderColor} shadow-2xl`}>
                        <p className="text-base sm:text-lg leading-relaxed font-light text-justify">
                            Through my Habitat Scape Series of art
                            works, the artist in the architect , is
                            exploring at an analogous level the
                            unstructured and the organic construct
                            of the Urban morphology in our towns
                            and cities.
                        </p>

                        <p className="text-base sm:text-lg leading-relaxed font-light text-justify mt-2.5">
                            As a trained architect I would respond
                            to order , symmetry , planned physical
                            form and shapes , formal geometry ,
                            street manners , climate and any other
                            validated and contextual
                            visual narrative that would define
                            contemporary architecture.
                        </p>

                        <p className="text-base sm:text-lg leading-relaxed font-light text-justify mt-2.5">
                            As an artist what fascinates me is the
                            entirely different urban contextual
                            form and visual narrative that exists
                            more predominantly in the urban
                            fabric of our towns and cities that are
                            often referred to as unplanned
                            development chaotic in its visual
                            character.
                        </p>
                    </div>
                    <div className={`${cardBg} p-8 border ${borderColor} shadow-2xl`}>
                        <p className="text-base sm:text-lg leading-relaxed font-light text-justify">
                            It more often is organic development
                            that was “architectured” by the users
                            and common people. The seemingly
                            chaotic aggregation of the habitat
                            mass that exists in multiple layers
                            beyond the mere brick and mortar of
                            the physical façade and where the
                            physical aspect serves the functional
                            purpose of its subliminal construct.
                        </p>

                        <p className="text-base sm:text-lg leading-relaxed font-light text-justify mt-2.5">

                            At an entirely different level of
                            perception to the cognitive construct
                            of my “ trained “ understanding as an
                            architect , I have also often been
                            compelled to wonder of what lies
                            beyond and within the habitat scapes
                            and human tenements. It is here that
                            my art points to a direction for the
                            viewer to unravel the mysteries that is
                            symbiotically woven in the physical
                            construct and character , in the
                            masses and voids , narrow lanes and
                            by lanes of these organic settlements
                            through the prism their own life
                            experiences and interpretations

                        </p>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <section className="container mx-auto px-4 sm:px-6 md:px-8 pb-32">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-4xl font-serif">Gallery</h2>
                    <div className="flex gap-4">
                        <button onClick={prevSlide} className={`p-4 rounded-full border-2 ${borderColor} ${cardBg} shadow-lg hover:scale-105 transition-transform`}><ChevronLeft size={24} /></button>
                        <button onClick={nextSlide} className={`p-4 rounded-full border-2 ${borderColor} ${cardBg} shadow-lg hover:scale-105 transition-transform`}><ChevronRight size={24} /></button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    <AnimatePresence mode="popLayout">
                        {visibleArtworks.map((artwork) => (
                            <motion.div
                                key={artwork.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => setExpandedArtwork(artwork.actualIndex)}
                                className={`cursor-pointer group border ${borderColor} ${cardBg} p-3 shadow-xl flex items-center justify-center`}
                            >
                                {/* Aspect ratio calculated as: hDim (Horizontal) / vDim (Vertical) */}
                                <div
                                    className="relative overflow-hidden w-full flex items-center justify-center bg-black/5"
                                    style={{ aspectRatio: `${artwork.hDim} / ${artwork.vDim}` }}
                                >
                                    <img src={artwork.image} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" alt="" />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {expandedArtwork !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] bg-black/98 p-4 md:p-12 flex items-center justify-center"
                    >
                        <div className="absolute inset-0" onClick={() => setExpandedArtwork(null)} />

                        <button onClick={prevSlide} className="absolute left-4 md:left-10 text-white/40 hover:text-white z-50 transition-colors"><ChevronLeft size={64} /></button>
                        <button onClick={nextSlide} className="absolute right-4 md:right-10 text-white/40 hover:text-white z-50 transition-colors"><ChevronRight size={64} /></button>
                        <button onClick={() => setExpandedArtwork(null)} className="absolute top-8 right-8 text-white/70 hover:text-white z-50"><X size={40} /></button>

                        <div className="relative w-full h-full flex flex-col items-center justify-center gap-6 pointer-events-none">
                            <motion.img
                                key={expandedArtwork}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                src={SamsaraSeriesArtWorks[expandedArtwork].image}
                                className="max-w-full max-h-[75vh] object-contain shadow-2xl pointer-events-auto"
                                style={{ aspectRatio: `${SamsaraSeriesArtWorks[expandedArtwork].hDim} / ${SamsaraSeriesArtWorks[expandedArtwork].vDim}` }}
                            />
                            <div className="text-center text-white bg-black/40 backdrop-blur-md p-6 rounded-lg pointer-events-auto">
                                <p className="text-[#D4AF37] text-xl font-serif">{SamsaraSeriesArtWorks[expandedArtwork].size}</p>
                                <p className="text-sm opacity-50 uppercase tracking-widest">{SamsaraSeriesArtWorks[expandedArtwork].description}</p>
                                <p className="text-white/40 text-xs mt-2">{expandedArtwork + 1} / {SamsaraSeriesArtWorks.length}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};