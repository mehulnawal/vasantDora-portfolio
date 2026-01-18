import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Assets
import clientImage from '../assets/images/clientPhoto.png'
import test1 from '../assets/images/paintingEg1.jpg'
import test2 from '../assets/images/paintingEg2.jpg'
import test3 from '../assets/images/paintingEg3.jpg'
import test4 from '../assets/images/paintingEg4.jpg'

const images = [test1, test2, test3, test4];

export const Home = () => {
    const isDark = useSelector((state) => state.theme.isDark);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 2 >= images.length ? 0 : prev + 2));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 2 < 0 ? Math.max(0, images.length - 2) : prev - 2));
    };

    // Color Constants for Premium Feel
    // Light Mode: #F2F0ED (Warm Gallery Paper) | Text: #1A1A1A
    // Dark Mode: #0D0D0D (Obsidian) | Text: #E0E0E0
    const bgColor = isDark ? 'bg-[#0D0D0D]' : 'bg-[#F2F0ED]';
    const textColor = isDark ? 'text-[#E0E0E0]' : 'text-[#1A1A1A]';
    const borderColor = isDark ? 'border-stone-800' : 'border-stone-300';

    return (
        <div className={`select-none transition-colors duration-700 ${bgColor} ${textColor}`}>

            {/* Full-Width Immersive Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={clientImage}
                        alt="Vasant Dora"
                        className="w-full h-full object-cover grayscale contrast-[1.1]"
                    />
                    {/* Editorial Overlay */}
                    <div className={`absolute inset-0 ${isDark ? 'bg-black/40' : 'bg-white/10'}`} />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        <span className="text-xs tracking-[0.6em] uppercase mb-4 block opacity-70">Contemporary Painter</span>
                        <h1 className="text-7xl md:text-9xl font-serif tracking-tighter mb-4">Vasant Dora</h1>
                        <p className="text-lg md:text-xl font-light italic opacity-80">
                            Exploring colour as play — where light, tone, and abstraction unfold through instinct and intuition.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Leela of Colors Section - Exact Text Preserved */}
            <section className="container mx-auto px-8 py-32">
                <h2 className={`text-5xl font-serif mb-16 border-b pb-4 inline-block ${borderColor}`}>
                    Leela of Colors
                </h2>
                <div className="grid md:grid-cols-2 gap-20 text-justify text-lg leading-relaxed font-light">
                    {/* Left Side Text */}
                    <div className="space-y-6">
                        <p>
                            There is an ancient Sanskrit word
                            “Leela”, which means “play” or
                            “sport”. Leela is both , delight and
                            enjoyment of the moment , childish
                            , disarming and spontaneous. It is
                            said in certain sections of theology
                            and mysticism , that the entire act
                            of creation and destruction is an
                            act of the divine absolute’s cosmic
                            play or “ leela “. It is so very akin
                            to a child’s “ play “ caught in the
                            delight of the game played for its
                            own sake devoid of any motivation
                            or with any assigned or
                            presupposed intent. It is rather
                            frolicsome and sheer joy of the
                            activity complete in itself.
                        </p>
                        <p>
                            As an artist , my art is at a primal
                            level manifestation of play with
                            colours caught in the matrix of its
                            hues , luminosity , the dance of
                            light and shade , tonal variations ,
                            mood affecting effervescence or
                            edge defying coalescence
                        </p>
                    </div>

                    {/* Right Side Text */}
                    <div className="space-y-6">
                        <p>
                            More often than not the
                            figurative or subjective content
                            is present as an allegorical or
                            contextual reference. The
                            primary intent being “play” of
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
                        <p>
                            It is a pleasure to present and
                            share an oeuvre of my art works
                            in this show and catalogue.
                            Hopefully different people will
                            infer different meanings. But
                            then art was never intended to
                            have a single meaning or
                            narrative
                        </p>
                    </div>
                </div>
            </section>

            {/* Dual-Image Carousel (Non-Expanded) */}
            <section className="container mx-auto px-8 py-32">
                <div className="flex items-center justify-between mb-12">
                    <h3 className="text-3xl font-serif italic uppercase tracking-widest">Selected Works</h3>
                    <div className="flex gap-4">
                        <button onClick={prevSlide} className={`p-3 rounded-full border ${borderColor} hover:opacity-50 transition-opacity`}>
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={nextSlide} className={`p-3 rounded-full border ${borderColor} hover:opacity-50 transition-opacity`}>
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-12 max-w-6xl mx-auto overflow-hidden">
                    <AnimatePresence mode="wait">
                        {images.slice(currentIndex, currentIndex + 2).map((img, i) => (
                            <motion.div
                                key={currentIndex + i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                className="relative cursor-zoom-in shadow-xl overflow-hidden group"
                                onClick={() => setLightboxIndex(currentIndex + i)}
                            >
                                <img
                                    src={img}
                                    className="w-full h-[550px] object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                                    alt="Artwork"
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-8 bg-black/95"
                    >
                        <button onClick={() => setLightboxIndex(null)} className="absolute top-10 right-10 text-white">
                            <X size={40} />
                        </button>
                        <motion.img
                            key={lightboxIndex}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            src={images[lightboxIndex]}
                            className="max-h-[85vh] object-contain shadow-2xl"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};