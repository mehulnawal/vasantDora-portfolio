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
import KHALIL_GIBRAN_SERIES3 from '../assets/images/inspiredFigurative/KHALIL_GIBRAN_SERIES/KHALIL_GIBRAN_SERIES3.png';



const ART_TABS = [
    {
        id: "Draupadi_Series",
        title: "Draupadi Series",
        subtitle: "DRAUPADI SERIES",
        description: "She was born of the holy fire,“ She Said Colour me red “",
        images: [
            { id: 1, image: DraupadiSeries1, size: "48 × 48 inches", description: "OIL ON CANVAS", title: "Urban Scape I" },
            { id: 2, image: DraupadiSeries2, size: "48 × 48 inches", description: "OIL ON CANVAS", title: "Urban Scape II" },
            { id: 3, image: DraupadiSeries3, size: "48 × 96 inches", description: "OIL ON CANVAS", title: "Urban Scape III" },
            { id: 4, image: DraupadiSeries4, size: "48 × 96 inches", description: "OIL ON CANVAS", title: "Urban Scape III" },
            { id: 5, image: DraupadiSeries5, size: "48 × 96 inches", description: "OIL ON CANVAS", title: "Urban Scape III" },
            { id: 6, image: DraupadiSeries6, size: "48 × 96 inches", description: "OIL ON CANVAS", title: "Urban Scape III" }
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
            { id: 3, image: KHALIL_GIBRAN_SERIES3, size: "36 × 36 inches", description: "OIL ON CANVAS", title: "TEMPLE STEP" }
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
            <section className="relative pt-32 pb-10 overflow-hidden">
                <div className="container mx-auto px-2 sm:px-6 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="relative w-full mx-auto mb-28"
                    >
                        {/* Adjusted text size clamp to be more responsive on mobile */}
                        <h1
                            className="relative z-10 text-center whitespace-nowrap leading-none font-extrabold text-[clamp(2rem,7.5vw,8rem)] font-brusher"
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

                        <div className="absolute inset-0 flex items-center justify-center z-0 font-brusher">

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
            </section>

            {/* Nav and Tabs Section */}
            <section className="container mx-auto px-4 sm:px-6 md:px-8 pb-32 mt-10">
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 border-b border-white/10">
                    {ART_TABS.map((tab, index) => (
                        <button
                            key={tab.id}
                            onClick={() => { setActiveTab(index); setCurrentIndex(0); }}
                            className={`pb-4 text-base md:text-xl font-serif transition-all ${activeTab === index ? 'border-b-2 border-[#D4AF37] text-[#D4AF37]' : 'opacity-50'}`} >
                            {tab.title}
                        </button>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h3 className="font-brusher text-xl md:text-3xl font-serif mb-4 italic">{ART_TABS[activeTab].subtitle}</h3>
                    <p className="text-base md:text-2xl leading-relaxed font-light opacity-80">{ART_TABS[activeTab].description}</p>
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