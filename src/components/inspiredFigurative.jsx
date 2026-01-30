import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// banner img
import inpiredFigurativeBannerImg from '../assets/images/inspiredFigurative/inpiredFigurativeBannerImg.jpeg';

// Draupadi Series
import DraupadiSeries1 from '../assets/images/inspiredFigurative/DraupadiSeries/DraupadiSeries1.png';
import DraupadiSeries2 from '../assets/images/inspiredFigurative/DraupadiSeries/DraupadiSeries2.png';
import DraupadiSeries3 from '../assets/images/inspiredFigurative/DraupadiSeries/DraupadiSeries3.png';
import DraupadiSeries4 from '../assets/images/inspiredFigurative/DraupadiSeries/DraupadiSeries4.png';
import DraupadiSeries5 from '../assets/images/inspiredFigurative/DraupadiSeries/DraupadiSeries5.png';
import DraupadiSeries6 from '../assets/images/inspiredFigurative/DraupadiSeries/DraupadiSeries6.png';

// Mary_Magdalene_Series
import Mary_Magdalene_Series1 from '../assets/images/inspiredFigurative/MaryMagdaleneSeries/MaryMagdaleneSeries1.png';
import Mary_Magdalene_Series2 from '../assets/images/inspiredFigurative/MaryMagdaleneSeries/MaryMagdaleneSeries2.png';
import Mary_Magdalene_Series3 from '../assets/images/inspiredFigurative/MaryMagdaleneSeries/MaryMagdaleneSeries3.png';

// AMRITA_PRITAM_SERIES
import AMRITA_PRITAM_SERIES1 from '../assets/images/inspiredFigurative/AMRITA_PRITAM_SERIES/AMRITA_PRITAM_SERIES1.png';
import AMRITA_PRITAM_SERIES2 from '../assets/images/inspiredFigurative/AMRITA_PRITAM_SERIES/AMRITA_PRITAM_SERIES2.png';
import AMRITA_PRITAM_SERIES3 from '../assets/images/inspiredFigurative/AMRITA_PRITAM_SERIES/AMRITA_PRITAM_SERIES3.png';

// KHALIL_GIBRAN_SERIES
import KHALIL_GIBRAN_SERIES1 from '../assets/images/inspiredFigurative/KHALIL_GIBRAN_SERIES/KHALIL_GIBRAN_SERIES1.png';
import KHALIL_GIBRAN_SERIES2 from '../assets/images/inspiredFigurative/KHALIL_GIBRAN_SERIES/KHALIL_GIBRAN_SERIES2.png';
import KHALIL_GIBRAN_SERIES3 from '../assets/images/inspiredFigurative/KHALIL_GIBRAN_SERIES/KHALIL_GIBRAN_SERIES3_36x36_square.png';

const ART_TABS = [
    {
        id: "Draupadi_Series",
        title: "Draupadi Series",
        subtitle: "DRAUPADI SERIES",
        description: "She was born of the holy fire,“ She Said Colour me red “",
        images: [
            { id: 1, image: DraupadiSeries1, size: "48 × 36 inches", description: "OIL ON CANVAS", title: " YAJNASENI" },
            { id: 2, image: DraupadiSeries2, size: "36 × 36 inches", description: "OIL ON CANVAS", title: "CHEER HARAN" },
            { id: 3, image: DraupadiSeries3, size: "48 × 36 inches", description: "OIL ON CANVAS", title: "DRAUPADI’S PASSION" },
            { id: 4, image: DraupadiSeries4, size: "48 × 36 inches", description: "OIL ON CANVAS", title: "SAIRANDHARI" },
            { id: 5, image: DraupadiSeries5, size: "48 × 36 inches", description: "OIL ON CANVAS", title: "EMPRESS" },
            { id: 6, image: DraupadiSeries6, size: "36 × 36 inches", description: "OIL ON CANVAS", title: "HER LAST FALL" }
        ]
    },
    {
        id: "Mary_Magdalene_Series",
        title: "Mary Magdalene Series",
        subtitle: "MARY MAGDALENE SERIES",
        description: `She was born in the fishing village of Magdala on the shores of the Sea of Galilee. “Colour me Blue” she Said .`,
        images: [
            { id: 1, image: Mary_Magdalene_Series1, size: "48 × 36 inches", description: "OIL ON CANVAS", title: "SYBIL" },
            { id: 2, image: Mary_Magdalene_Series2, size: "36 × 36 inches", description: "OIL ON CANVAS", title: "CHALICE" },
            { id: 3, image: Mary_Magdalene_Series3, size: "48 × 36 inches", description: "OIL ON CANVAS", title: "MATRIARCH OF THE ROYAL BLOODLINE" }
        ]
    },
    {
        id: "AMRITA_PRITAM_SERIES",
        title: "Amrita Pritam Series",
        subtitle: "AMRITA PRITAM SERIES",
        description: "",
        images: [
            { id: 1, image: AMRITA_PRITAM_SERIES1, size: "48 × 36 inches", description: "OIL ON CANVAS", title: "I WILL MEET YOU ONCE AGAIN" },
            { id: 2, image: AMRITA_PRITAM_SERIES2, size: "36 × 30 inches", description: "OIL ON CANVAS", title: "KAYA" },
            { id: 3, image: AMRITA_PRITAM_SERIES3, size: "30 × 40 inches", description: "OIL ON CANVAS", title: "UNLIKHI" }
        ]
    },
    {
        id: "KHALIL_GIBRAN_SERIES",
        title: "Khalil Gibran Series",
        subtitle: "KHALIL GIBRAN SERIES",
        images: [
            { id: 1, image: KHALIL_GIBRAN_SERIES1, size: "48 × 36 inches", description: "OIL ON CANVAS", title: "Dark Moon" },
            { id: 2, image: KHALIL_GIBRAN_SERIES2, size: "48 × 36 inches", description: "OIL ON CANVAS", title: "MARRIAGE" },
            { id: 3, image: KHALIL_GIBRAN_SERIES3, size: "36 × 36 inches", description: "OIL ON CANVAS", title: "TEMPLE STEPS" }
        ]
    },
];

export const InspiredFigurative = () => {
    const isDark = useSelector((state) => state.theme.isDark);
    const [activeTab, setActiveTab] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expandedArtwork, setExpandedArtwork] = useState(null);

    const currentArtworks = ART_TABS[activeTab].images;

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
            setExpandedArtwork((prev) => (prev + 1) % currentArtworks.length);
        } else {
            setCurrentIndex((prev) => (prev + 1) % currentArtworks.length);
        }
    };

    const prevSlide = (e) => {
        if (e) e.stopPropagation();
        if (expandedArtwork !== null) {
            setExpandedArtwork((prev) => (prev - 1 + currentArtworks.length) % currentArtworks.length);
        } else {
            setCurrentIndex((prev) => (prev - 1 + currentArtworks.length) % currentArtworks.length);
        }
    };

    const bgColor = isDark ? 'bg-[#0A0A0A]' : 'bg-[#F5EFE7]';
    const textColor = isDark ? 'text-[#F5F5F4]' : 'text-[#2C2416]';
    const borderColor = isDark ? 'border-[#2A2A2A]' : 'border-[#C4B5A0]';
    const cardBg = isDark ? 'bg-[#141414]' : 'bg-white';

    const visibleArtworks = [];
    for (let i = 0; i < Math.min(3, currentArtworks.length); i++) {
        const index = (currentIndex + i) % currentArtworks.length;
        visibleArtworks.push({ ...currentArtworks[index], actualIndex: index });
    }

    return (
        <div className={`select-none transition-all duration-700 ${bgColor} ${textColor} min-h-screen relative pt-32`}>

            {/* Banner Section */}
            {/* <section className="relative pt-32 lg:pb-10 overflow-hidden">
                <div className="container mx-auto px-2 sm:px-6 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="relative w-full mx-auto mb-28"
                    >
                        <h1
                            className="relative z-10 text-center whitespace-nowrap leading-none font-extrabold text-[clamp(2rem,7.5vw,8rem)] font-mistral"
                            style={{ transform: 'skewX(-2deg)' }}
                        >
                            <span className={!isDark ? 'text-[#6B4A1E]' : 'text-white'}>
                                INSP
                            </span>

                            <span className="text-white">
                                IRED FIGURA
                            </span>

                            <span className={!isDark ? 'text-[#6B4A1E]' : 'text-white'}>
                                TEVE
                            </span>
                        </h1>

                        <div className="absolute inset-0 flex items-center justify-center z-0 font-mistral">

                            <div className="relative w-[65%] sm:w-[60%] md:w-[55%] max-w-3xl h-45 sm:h-75 md:h-90 overflow-hidden ">
                                <img
                                    src={inpiredFigurativeBannerImg}
                                    alt="Inspired Figurative"
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
                            <h1 className="font-mistral text-[clamp(3.5rem,16vw,7rem)] leading-none drop-shadow-2xl whitespace-nowrap">

                                <span className="text-[#6B4A1E]">INS</span>
                                <span className="text-white">PIRED</span>
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
                            <div className="relative aspect-video md:aspect-23/8 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                <img
                                    src={inpiredFigurativeBannerImg}
                                    alt="INSPIRED FIGURATIVE"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/20" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            // self-end forces it to the right
                            className="relative z-30 self-end mr-0 md:mr-[5%] mt-4 md:mt-6"
                        >
                            <h1 className="font-mistral text-[clamp(3.5rem,16vw,7rem)] leading-none drop-shadow-2xl whitespace-nowrap">

                                <span className="text-white">FIGURA</span>
                                <span className="text-[#6B4A1E]">TIVE</span>
                            </h1>
                        </motion.div>

                        {/* Abstract Decorative Lines */}
                        <div className={`absolute left-0 top-1/2 w-12 md:w-24 h-px ${isDark ? 'bg-white/20' : 'bg-black/20'} hidden lg:block`} />
                        <div className={`absolute right-0 top-1/2 w-12 md:w-24 h-px ${isDark ? 'bg-white/20' : 'bg-black/20'} hidden lg:block`} />
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-4 sm:px-6 md:px-8 pb-32 mt-0">

                {/* Tabs */}
                <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-16 mb-12 md:border-b border-[#D4AF37]/30">
                    {ART_TABS.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setActiveTab(index);
                                setCurrentIndex(0);
                            }}
                            className={`py-3 md:pb-4 px-6 md:px-6 text-base md:text-xl font-serif transition-all active:scale-95 flex items-center justify-center gap-2 rounded-md md:rounded-none ${activeTab === index
                                ? 'md:border-b-2 border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10 md:bg-transparent'
                                : 'opacity-50 hover:opacity-75 border border-[#D4AF37]/20 md:border-none'
                                }`}
                        >
                            <span className="text-sm md:text-base">{activeTab === index ? '◆' : '◇'}</span>
                            {tab.title}
                        </button>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h3 className="font-mistral text-xl md:text-3xl font-serif mb-4 italic">{ART_TABS[activeTab].subtitle}</h3>
                    <p className="font-mistral text-4xl leading-relaxed font-light opacity-80">{ART_TABS[activeTab].description}</p>
                </div>

                {/* Gallery Carousel */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl md:text-4xl font-serif">Gallery</h2>
                    <div className="flex gap-4">
                        <button onClick={prevSlide} className={`p-3 md:p-4 rounded-full border-2 ${borderColor} ${cardBg} shadow-lg hover:scale-105 transition-transform`}><ChevronLeft size={20} /></button>
                        <button onClick={nextSlide} className={`p-3 md:p-4 rounded-full border-2 ${borderColor} ${cardBg} shadow-lg hover:scale-105 transition-transform`}><ChevronRight size={20} /></button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    <AnimatePresence mode="popLayout">
                        {visibleArtworks.map((artwork) => (
                            <motion.div
                                key={`${activeTab}-${artwork.id}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                onClick={() => setExpandedArtwork(artwork.actualIndex)}
                                className={`cursor-pointer group border ${borderColor} ${cardBg} p-3 shadow-xl`}
                            >
                                <div className="relative overflow-hidden aspect-[4/5]">
                                    <img src={artwork.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="" />
                                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 text-xs rounded">
                                        {artwork.actualIndex + 1} / {currentArtworks.length}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* <div className="max-w-4xl mx-auto text-center mb-16">
                    <h3 className="font-mistral text-xl md:text-3xl font-serif mb-4 italic">{ART_TABS[activeTab].subtitle}</h3>
                    <p className="text-base md:text-2xl leading-relaxed font-light opacity-80">{ART_TABS[activeTab].description}</p>
                </div> */}

                {/* Gallery Carousel */}
                {/* <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl md:text-4xl font-serif">Gallery</h2>
                    <div className="flex gap-4">
                        <button onClick={prevSlide} className={`p-3 md:p-4 rounded-full border-2 ${borderColor} ${cardBg} shadow-lg hover:scale-105 transition-transform`}><ChevronLeft size={20} /></button>
                        <button onClick={nextSlide} className={`p-3 md:p-4 rounded-full border-2 ${borderColor} ${cardBg} shadow-lg hover:scale-105 transition-transform`}><ChevronRight size={20} /></button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    <AnimatePresence mode="popLayout">
                        {visibleArtworks.map((artwork) => (
                            <motion.div
                                key={`${activeTab}-${artwork.id}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                onClick={() => setExpandedArtwork(artwork.actualIndex)}
                                className={`cursor-pointer group border ${borderColor} ${cardBg} p-3 shadow-xl`}
                            >
                                <div className="relative overflow-hidden aspect-[4/5]">
                                    <img src={artwork.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="" />
                                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 text-xs rounded">
                                        {artwork.actualIndex + 1} / {currentArtworks.length}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div> */}

            </section>

            {/* Expanded Artwork Modal */}
            <AnimatePresence>
                {expandedArtwork !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/98 p-4 md:p-12"
                    >
                        <div className="absolute inset-0" onClick={() => setExpandedArtwork(null)} />

                        <button onClick={prevSlide} className="absolute left-2 md:left-10 text-white/40 hover:text-white z-50 transition-colors">
                            <ChevronLeft size={48} className="md:w-16 md:h-16" />
                        </button>
                        <button onClick={nextSlide} className="absolute right-2 md:right-10 text-white/40 hover:text-white z-50 transition-colors">
                            <ChevronRight size={48} className="md:w-16 md:h-16" />
                        </button>
                        <button onClick={() => setExpandedArtwork(null)} className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white z-50">
                            <X size={32} className="md:w-10 md:h-10" />
                        </button>

                        <div className="relative w-full max-w-7xl h-full flex flex-col items-center justify-center gap-4">
                            <motion.img
                                key={expandedArtwork}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                src={currentArtworks[expandedArtwork].image}
                                className="max-w-full max-h-[70vh] md:max-h-[75vh] object-contain shadow-2xl pointer-events-auto"
                            />

                            <div className="text-white text-center space-y-1 md:space-y-2 pointer-events-none px-4">
                                <h2 className="text-2xl md:text-3xl font-serif">{currentArtworks[expandedArtwork].title}</h2>
                                <p className="text-[#D4AF37] text-lg md:text-xl">{currentArtworks[expandedArtwork].size}</p>
                                <p className="text-sm opacity-60 uppercase mt-0.5">
                                    {currentArtworks[expandedArtwork].description}
                                </p>
                                <p className="text-white/40 tracking-[0.3em] text-xs md:text-sm uppercase">
                                    {expandedArtwork + 1} / {currentArtworks.length}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};