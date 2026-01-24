import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Assets
import about_clientImg from '../assets/images/about/about_clientImg.png';
import aboutImg1 from '../assets/images/about/aboutImg1.png';
import aboutImg2 from '../assets/images/about/aboutImg2.png';
import aboutImg3 from '../assets/images/about/aboutImg3.png';

const galleryImages = [aboutImg1, aboutImg2, aboutImg3];

export const About = () => {
    const isDark = useSelector((state) => state.theme.isDark);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Dynamic Theme Styling
    const bgColor = isDark ? 'bg-[#0A0A0A]' : 'bg-[#F5EFE7]';
    const textColor = isDark ? 'text-[#F5F5F4]' : 'text-[#2C2416]';
    const borderColor = isDark ? 'border-white/10' : 'border-black/10';
    const accentColor = isDark ? 'text-[#D4AF37]' : 'text-[#8B6914]';
    const cardBg = isDark ? 'bg-white/5' : 'bg-black/5';

    // Automatic movement logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

    return (
        <div className={`min-h-screen transition-colors duration-700 ${bgColor} ${textColor} pt-32 pb-20`}>

            {/* 1. HERO SECTION: Client Portrait & Academic Intro */}
            <section className="container mx-auto px-4 md:px-8 mb-32">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative group ">
                            <div className={`rounded-lg absolute -inset-4 border border-[#D4AF37]/30 translate-x-2 translate-y-2 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500`} />
                            <img src={about_clientImg} alt="Vasant Dora" className="w-full  transition-all duration-1000 shadow-2xl rounded-lg" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <h1 className="font-brusher text-4xl md:text-6xl font-serif leading-tight">
                            Vasant Dora
                        </h1>
                        <p className="text-xl md:text-2xl font-serif leading-relaxed opacity-90">
                            I have a master's degree in Architecture from the State University of New York, USA.
                        </p>
                        <p className="text-lg font-serif opacity-70 leading-loose">
                            I have widely travelled and, my travels have included multiple visits to some of the
                            best art museums around the world as part of my "education in art."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. STATS SECTION */}
            <section className="container mx-auto px-4 mb-32">
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y ${borderColor}`}>
                    {[
                        { label: "Exhibitions", value: "25+" },
                        { label: "Collections", value: "Global" },
                        { label: "Art Series", value: "04" },
                        { label: "Years Exp.", value: "20+" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <h4 className={`text-3xl md:text-5xl font-serif mb-2 ${accentColor}`}>{stat.value}</h4>
                            <p className="text-[10px] uppercase tracking-[0.3em] opacity-50">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. BIOGRAPHY & PHILOSOPHY (From Screenshot Text) */}
            <section className="container mx-auto px-4 md:px-8 mb-32 space-y-24">
                <div className="max-w-4xl mx-auto space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <p className="text-lg md:text-xl font-serif leading-relaxed text-justify">
                            I closed my consultancy business in 2022 and have been doing art full time.
                            It has since been an exciting journey...
                        </p>
                        <p className={`text-2xl md:text-3xl font-serif italic ${accentColor} leading-snug`}>
                            "My art conveys my aspirational indulgence as a chromaphile with the imagery
                            of subjective content often becoming a delusional reality."
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={`p-8 md:p-12 ${cardBg} border-l-4 border-[#D4AF37]`}
                    >
                        <p className="text-lg md:text-xl font-serif leading-loose opacity-90">
                            The colours and textures signal my core voice appealing to sensorial experience,
                            the storyline vacillates between what is obvious and that which is cryptic.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 4. AUTOMATIC & MANUAL CAROUSEL GALLERY */}
            <section className="container mx-auto px-4 md:px-8 mb-40">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-serif uppercase tracking-widest">Behind the canvas</h2>
                    <div className="flex gap-4">
                        <button onClick={prevSlide} className={`p-4 rounded-full border ${borderColor} hover:bg-[#D4AF37] hover:text-black transition-all`}><ChevronLeft size={20} /></button>
                        <button onClick={nextSlide} className={`p-4 rounded-full border ${borderColor} hover:bg-[#D4AF37] hover:text-black transition-all`}><ChevronRight size={20} /></button>
                    </div>
                </div>

                <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden shadow-2xl">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={galleryImages[currentIndex]}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="w-full h-full object-cover object-top"
                        />
                    </AnimatePresence>

                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 h-1 bg-[#D4AF37] transition-all duration-500"
                        style={{ width: `${((currentIndex + 1) / galleryImages.length) * 100}%` }} />
                </div>
            </section>

            {/* 5. FINAL INVITE */}
            <section className="container mx-auto px-4 text-center max-w-3xl pb-20">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-2xl md:text-3xl font-serif leading-relaxed mb-12"
                >
                    Come walk with me on this journey to experience my art that exists at the edges of
                    crafted provocation of literal and non literal narratives and at times disquiet illusions
                    challenging the viewers mental space with the ever changing realisation and perhaps
                    the storyline itself.
                </motion.p>
                <div className="w-24 h-1 bg-[#D4AF37] mx-auto opacity-50" />
            </section>
        </div>
    );
};