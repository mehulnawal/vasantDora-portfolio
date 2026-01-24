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
    { id: 1, image: test1, title: "", size: "48 × 36 inches", width: 48, height: 36 },
    { id: 2, image: test2, title: "", size: "60 × 48 inches", width: 60, height: 48 }
];

export const Home = () => {
    const isDark = useSelector((state) => state.theme.isDark);
    const [expandedArtwork, setExpandedArtwork] = useState(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

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
    const borderColor = isDark ? 'border-[#2A2A2A]' : 'border-[#C4B5A0]';
    const cardBg = isDark ? 'bg-[#1A1A1A]/90' : 'bg-white/95';

    return (
        <div className={`select-none transition-colors duration-700 ${bgColor} ${textColor} min-h-screen relative overflow-x-hidden`}>

            {/* Banner Sections (Mobile & Desktop) omitted for brevity - keep your existing ones */}

            {/* Gallery Section */}
            <section className="container mx-auto px-4 sm:px-8 pb-32 relative z-10">
                <div className="flex items-center gap-4 mb-16">
                    <h3 className="text-3xl md:text-5xl font-serif uppercase tracking-tight">Selected Works</h3>
                    <div className={`h-px flex-1 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {artworks.map((art, index) => (
                        <motion.div
                            key={art.id}
                            onClick={() => setExpandedArtwork(index)}
                            className={`relative cursor-pointer group border-2 ${borderColor} ${cardBg} p-4 shadow-2xl transition-all duration-500`}
                        >
                            {/* Proportional Container: Ratio calculated from Inches */}
                            <div
                                className="relative overflow-hidden w-full flex items-center justify-center"
                                style={{ aspectRatio: `${art.width} / ${art.height}` }}
                            >
                                <img
                                    src={art.image}
                                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                                    alt={art.title}
                                />
                            </div>

                            {/* Aesthetic Corner Borders */}
                            <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ${isDark ? 'border-[#D4AF37]/20' : 'border-[#8B6914]/20'}`} />
                            <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 ${isDark ? 'border-[#D4AF37]/20' : 'border-[#8B6914]/20'}`} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Fullscreen Expanded Modal */}
            <AnimatePresence>
                {expandedArtwork !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] bg-black/95 p-4 flex flex-col items-center justify-center"
                    >
                        <div className="absolute inset-0" onClick={() => setExpandedArtwork(null)} />

                        {/* Navigation Layer */}
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

                        {/* Modal Image: Maintaining Proportions */}
                        <div className="relative z-[1005] w-full h-full flex flex-col items-center justify-center gap-6 pointer-events-none">
                            <motion.img
                                key={expandedArtwork}
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                src={artworks[expandedArtwork].image}
                                // Max height limits ensures it fits on screen, object-contain prevents cropping
                                className="max-w-full max-h-[75vh] object-contain shadow-2xl pointer-events-auto"
                                style={{ aspectRatio: `${artworks[expandedArtwork].width} / ${artworks[expandedArtwork].height}` }}
                            />

                            <div className="text-center text-white space-y-2 bg-black/40 backdrop-blur-md p-6 rounded-lg pointer-events-auto border border-white/10">
                                <p className="text-[#D4AF37] text-lg font-serif tracking-widest">{artworks[expandedArtwork].size}</p>
                                <div className="text-xs tracking-widest opacity-40 font-serif uppercase">
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