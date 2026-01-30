// // import { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { useSelector } from 'react-redux';
// // import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// // import urbanScapesBannerImg from '../assets/images/urbanScapes/urbanScapesBannerImg.jpeg';

// // import urban1 from '../assets/images/urbanScapes/urban1.png';
// // import urban2 from '../assets/images/urbanScapes/urban2.png';
// // import urban3 from '../assets/images/urbanScapes/urban3.png';
// // import urban4 from '../assets/images/urbanScapes/urban4.png';
// // import urban5 from '../assets/images/urbanScapes/urban5.png';
// // import urban6 from '../assets/images/urbanScapes/urban6.png';
// // import urban7 from '../assets/images/urbanScapes/urban7.png';

// // const UrbanScapesArtWorks = [
// //     {
// //         id: 1,
// //         image: urban1,
// //         size: "48 × 48 inches",
// //         vDim: 48,
// //         hDim: 48,
// //         description: "OIL ON CANVAS"
// //     },
// //     {
// //         id: 2,
// //         image: urban2,
// //         size: "48 × 48 inches",
// //         vDim: 48,
// //         hDim: 48,
// //         description: "OIL ON CANVAS"
// //     },
// //     {
// //         id: 3,
// //         image: urban3,
// //         size: "48 × 96 inches",
// //         vDim: 48,
// //         hDim: 96,
// //         description: "OIL ON CANVAS"
// //     },
// //     {
// //         id: 4,
// //         image: urban4,
// //         size: "48 × 48 inches",
// //         vDim: 48,
// //         hDim: 48,
// //         description: "OIL ON CANVAS"
// //     },
// //     {
// //         id: 5,
// //         image: urban5,
// //         size: "60 × 60 inches",
// //         vDim: 60,
// //         hDim: 60,
// //         description: "OIL ON CANVAS"
// //     },
// //     {
// //         id: 6,
// //         image: urban6,
// //         size: "48 × 36 inches",
// //         vDim: 48,
// //         hDim: 36,
// //         description: "OIL ON CANVAS"
// //     },
// //     {
// //         id: 7,
// //         image: urban7,
// //         size: "48 × 36 inches",
// //         vDim: 48,
// //         hDim: 36,
// //         description: "OIL ON CANVAS"
// //     }
// // ];

// // export const UrbanScapes = () => {
// //     const isDark = useSelector((state) => state.theme.isDark);
// //     const [currentIndex, setCurrentIndex] = useState(0);
// //     const [expandedArtwork, setExpandedArtwork] = useState(null);

// //     useEffect(() => {
// //         window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
// //     }, []);

// //     useEffect(() => {
// //         document.body.style.overflow = expandedArtwork !== null ? 'hidden' : 'auto';
// //         return () => { document.body.style.overflow = 'auto'; };
// //     }, [expandedArtwork]);

// //     const nextSlide = (e) => {
// //         if (e) e.stopPropagation();
// //         if (expandedArtwork !== null) {
// //             setExpandedArtwork((prev) => (prev + 1) % UrbanScapesArtWorks.length);
// //         } else {
// //             setCurrentIndex((prev) => (prev + 1) % UrbanScapesArtWorks.length);
// //         }
// //     };

// //     const prevSlide = (e) => {
// //         if (e) e.stopPropagation();
// //         if (expandedArtwork !== null) {
// //             setExpandedArtwork((prev) => (prev - 1 + UrbanScapesArtWorks.length) % UrbanScapesArtWorks.length);
// //         } else {
// //             setCurrentIndex((prev) => (prev - 1 + UrbanScapesArtWorks.length) % UrbanScapesArtWorks.length);
// //         }
// //     };

// //     const bgColor = isDark
// //         ? 'bg-gradient-to-br from-[#0A0A0A] via-[#141414] to-[#1A1A1A]'
// //         : 'bg-gradient-to-br from-[#F5EFE7] via-[#E8DDD0] to-[#D6C8B8]';
// //     const textColor = isDark ? 'text-[#F5F5F4]' : 'text-[#2C2416]';
// //     const borderColor = isDark ? 'border-[#2A2A2A]' : 'border-[#C4B5A0]';
// //     const cardBg = isDark ? 'bg-[#141414]' : 'bg-white';
// //     const accentGradient = isDark ? 'from-[#D4AF37] to-[#F4E4C1]' : 'from-[#8B6914] via-[#B8860B] to-[#DAA520]';
// //     const overlayBg = isDark ? 'bg-black/60' : 'bg-[#F5EFE7]/85';

// //     const visibleArtworks = [];
// //     for (let i = 0; i < 3; i++) {
// //         const index = (currentIndex + i) % UrbanScapesArtWorks.length;
// //         visibleArtworks.push({ ...UrbanScapesArtWorks[index], actualIndex: index });
// //     }

// //     return (
// //         <div className={`select-none transition-all duration-700 ${bgColor} ${textColor} min-h-screen relative pt-32`}>

// //             {/* Banner Section */}
// //             <section className="relative pt-32 pb-10">
// //                 <div className="container mx-auto px-4 sm:px-6 md:px-8">
// //                     <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative w-full mx-auto mb-28">
// //                         <h1 className="relative z-10 text-center whitespace-nowrap leading-none font-extrabold text-[clamp(3rem,9vw,8rem)] font-mistral" style={{ transform: 'skewX(-2deg)' }}>
// //                             <span className={!isDark ? 'text-[#6B4A1E]' : 'text-white'}>UR</span>
// //                             <span className="text-white">BAN SCAP</span>
// //                             <span className={!isDark ? 'text-[#6B4A1E]' : 'text-white'}>ES</span>
// //                         </h1>
// //                         <div className="absolute inset-0 flex items-center justify-center -z-0 font-mistral">
// //                             <div className="relative w-[55%] max-w-3xl h-55 sm:h-[300px] md:h-[360px] overflow-hidden shadow-2xl">
// //                                 <img src={urbanScapesBannerImg} alt="Habitat scapes " className="w-full h-full object-cover" />
// //                             </div>
// //                         </div>
// //                     </motion.div>
// //                 </div>
// //             </section>

// //             {/* text section */}
// //             <div section section className='container mx-auto px-4 sm:px-6 md:px-8 pb-10' >
// //                 <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto ">
// //                     <div className={`${cardBg} p-8 border ${borderColor} shadow-2xl`}>
// //                         <p className="text-base sm:text-lg leading-relaxed font-light text-justify">
// //                             Through my Habitat Scape Series of art
// //                             works, the artist in the architect , is
// //                             exploring at an analogous level the
// //                             unstructured and the organic construct
// //                             of the Urban morphology in our towns
// //                             and cities.
// //                         </p>

// //                         <p className="text-base sm:text-lg leading-relaxed font-light text-justify mt-2.5">
// //                             As a trained architect I would respond
// //                             to order , symmetry , planned physical
// //                             form and shapes , formal geometry ,
// //                             street manners , climate and any other
// //                             validated and contextual
// //                             visual narrative that would define
// //                             contemporary architecture.
// //                         </p>

// //                         <p className="text-base sm:text-lg leading-relaxed font-light text-justify mt-2.5">
// //                             As an artist what fascinates me is the
// //                             entirely different urban contextual
// //                             form and visual narrative that exists
// //                             more predominantly in the urban
// //                             fabric of our towns and cities that are
// //                             often referred to as unplanned
// //                             development chaotic in its visual
// //                             character.
// //                         </p>
// //                     </div>
// //                     <div className={`${cardBg} p-8 border ${borderColor} shadow-2xl`}>
// //                         <p className="text-base sm:text-lg leading-relaxed font-light text-justify">
// //                             It more often is organic development
// //                             that was “architectured” by the users
// //                             and common people. The seemingly
// //                             chaotic aggregation of the habitat
// //                             mass that exists in multiple layers
// //                             beyond the mere brick and mortar of
// //                             the physical façade and where the
// //                             physical aspect serves the functional
// //                             purpose of its subliminal construct.
// //                         </p>

// //                         <p className="text-base sm:text-lg leading-relaxed font-light text-justify mt-2.5">

// //                             At an entirely different level of
// //                             perception to the cognitive construct
// //                             of my “ trained “ understanding as an
// //                             architect , I have also often been
// //                             compelled to wonder of what lies
// //                             beyond and within the habitat scapes
// //                             and human tenements. It is here that
// //                             my art points to a direction for the
// //                             viewer to unravel the mysteries that is
// //                             symbiotically woven in the physical
// //                             construct and character , in the
// //                             masses and voids , narrow lanes and
// //                             by lanes of these organic settlements
// //                             through the prism their own life
// //                             experiences and interpretations

// //                         </p>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Gallery Section */}
// //             <section className="container mx-auto px-4 sm:px-6 md:px-8 pb-32">
// //                 <div className="flex items-center justify-between mb-12">
// //                     <h2 className="text-4xl font-serif">Gallery</h2>
// //                     <div className="flex gap-4">
// //                         <button onClick={prevSlide} className={`p-4 rounded-full border-2 ${borderColor} ${cardBg} shadow-lg hover:scale-105 transition-transform`}><ChevronLeft size={24} /></button>
// //                         <button onClick={nextSlide} className={`p-4 rounded-full border-2 ${borderColor} ${cardBg} shadow-lg hover:scale-105 transition-transform`}><ChevronRight size={24} /></button>
// //                     </div>
// //                 </div>

// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
// //                     <AnimatePresence mode="popLayout">
// //                         {visibleArtworks.map((artwork) => (
// //                             <motion.div
// //                                 key={artwork.id}
// //                                 initial={{ opacity: 0, scale: 0.9 }}
// //                                 animate={{ opacity: 1, scale: 1 }}
// //                                 exit={{ opacity: 0, scale: 0.9 }}
// //                                 transition={{ duration: 0.4 }}
// //                                 onClick={() => setExpandedArtwork(artwork.actualIndex)}
// //                                 className={`cursor-pointer group border ${borderColor} ${cardBg} p-3 shadow-xl flex items-center justify-center`}
// //                             >
// //                                 {/* Aspect ratio calculated as: hDim (Horizontal) / vDim (Vertical) */}
// //                                 <div
// //                                     className="relative overflow-hidden w-full flex items-center justify-center bg-black/5"
// //                                     style={{ aspectRatio: `${artwork.hDim} / ${artwork.vDim}` }}
// //                                 >
// //                                     <img src={artwork.image} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" alt="" />
// //                                 </div>
// //                             </motion.div>
// //                         ))}
// //                     </AnimatePresence>
// //                 </div>
// //             </section>

// //             {/* Modal */}
// //             <AnimatePresence>
// //                 {expandedArtwork !== null && (
// //                     <motion.div
// //                         initial={{ opacity: 0 }}
// //                         animate={{ opacity: 1 }}
// //                         exit={{ opacity: 0 }}
// //                         className="fixed inset-0 z-[1000] bg-black/98 p-4 md:p-12 flex items-center justify-center"
// //                     >
// //                         <div className="absolute inset-0" onClick={() => setExpandedArtwork(null)} />

// //                         <button onClick={prevSlide} className="absolute left-4 md:left-10 text-white/40 hover:text-white z-50 transition-colors"><ChevronLeft size={64} /></button>
// //                         <button onClick={nextSlide} className="absolute right-4 md:right-10 text-white/40 hover:text-white z-50 transition-colors"><ChevronRight size={64} /></button>
// //                         <button onClick={() => setExpandedArtwork(null)} className="absolute top-8 right-8 text-white/70 hover:text-white z-50"><X size={40} /></button>

// //                         <div className="relative w-full h-full flex flex-col items-center justify-center gap-6 pointer-events-none">
// //                             <motion.img
// //                                 key={expandedArtwork}
// //                                 initial={{ scale: 0.8, opacity: 0 }}
// //                                 animate={{ scale: 1, opacity: 1 }}
// //                                 src={UrbanScapesArtWorks[expandedArtwork].image}
// //                                 className="max-w-full max-h-[75vh] object-contain shadow-2xl pointer-events-auto"
// //                                 style={{ aspectRatio: `${UrbanScapesArtWorks[expandedArtwork].hDim} / ${UrbanScapesArtWorks[expandedArtwork].vDim}` }}
// //                             />
// //                             <div className="text-center text-white bg-black/40 backdrop-blur-md p-6 rounded-lg pointer-events-auto">
// //                                 <p className="text-[#D4AF37] text-xl font-serif">{UrbanScapesArtWorks[expandedArtwork].size}</p>
// //                                 <p className="text-sm opacity-50 uppercase tracking-widest">{UrbanScapesArtWorks[expandedArtwork].description}</p>
// //                                 <p className="text-white/40 text-xs mt-2">{expandedArtwork + 1} / {UrbanScapesArtWorks.length}</p>
// //                             </div>
// //                         </div>
// //                     </motion.div>
// //                 )}
// //             </AnimatePresence>
// //         </div>
// //     );
// // };


// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useSelector } from 'react-redux';
// import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// import urbanScapesBannerImg from '../assets/images/urbanScapes/urbanScapesBannerImg.jpeg';

// import urban1 from '../assets/images/urbanScapes/urban1.png';
// import urban2 from '../assets/images/urbanScapes/urban2.png';
// import urban3 from '../assets/images/urbanScapes/urban3.png';
// import urban4 from '../assets/images/urbanScapes/urban4.png';
// import urban5 from '../assets/images/urbanScapes/urban5.png';
// import urban6 from '../assets/images/urbanScapes/urban6.png';
// import urban7 from '../assets/images/urbanScapes/urban7.png';

// const UrbanScapesArtWorks = [
//     { id: 1, image: urban1, size: "48 × 48 inches", vDim: 48, hDim: 48, description: "OIL ON CANVAS" },
//     { id: 2, image: urban2, size: "48 × 48 inches", vDim: 48, hDim: 48, description: "OIL ON CANVAS" },
//     { id: 3, image: urban3, size: "48 × 96 inches", vDim: 48, hDim: 96, description: "OIL ON CANVAS" },
//     { id: 4, image: urban4, size: "48 × 48 inches", vDim: 48, hDim: 48, description: "OIL ON CANVAS" },
//     { id: 5, image: urban5, size: "60 × 60 inches", vDim: 60, hDim: 60, description: "OIL ON CANVAS" },
//     { id: 6, image: urban6, size: "48 × 36 inches", vDim: 48, hDim: 36, description: "OIL ON CANVAS" },
//     { id: 7, image: urban7, size: "48 × 36 inches", vDim: 48, hDim: 36, description: "OIL ON CANVAS" }
// ];

// export const UrbanScapes = () => {
//     const isDark = useSelector((state) => state.theme.isDark);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [expandedArtwork, setExpandedArtwork] = useState(null);
//     const scrollRef = useRef(null);

//     useEffect(() => {
//         window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
//         // Set mobile scroll to center on mount
//         if (scrollRef.current) {
//             const container = scrollRef.current;
//             const scrollAmount = container.scrollWidth / 2 - container.clientWidth / 2;
//             container.scrollTo({ left: scrollAmount });
//         }
//     }, []);

//     useEffect(() => {
//         document.body.style.overflow = expandedArtwork !== null ? 'hidden' : 'auto';
//         return () => { document.body.style.overflow = 'auto'; };
//     }, [expandedArtwork]);

//     const nextSlide = (e) => {
//         if (e) e.stopPropagation();
//         if (expandedArtwork !== null) {
//             setExpandedArtwork((prev) => (prev + 1) % UrbanScapesArtWorks.length);
//         } else {
//             setCurrentIndex((prev) => (prev + 1) % UrbanScapesArtWorks.length);
//         }
//     };

//     const prevSlide = (e) => {
//         if (e) e.stopPropagation();
//         if (expandedArtwork !== null) {
//             setExpandedArtwork((prev) => (prev - 1 + UrbanScapesArtWorks.length) % UrbanScapesArtWorks.length);
//         } else {
//             setCurrentIndex((prev) => (prev - 1 + UrbanScapesArtWorks.length) % UrbanScapesArtWorks.length);
//         }
//     };

//     const bgColor = isDark
//         ? 'bg-gradient-to-br from-[#0A0A0A] via-[#141414] to-[#1A1A1A]'
//         : 'bg-gradient-to-br from-[#F5EFE7] via-[#E8DDD0] to-[#D6C8B8]';
//     const textColor = isDark ? 'text-[#F5F5F4]' : 'text-[#2C2416]';
//     const borderColor = isDark ? 'border-[#2A2A2A]' : 'border-[#C4B5A0]';
//     const cardBg = isDark ? 'bg-[#141414]' : 'bg-white';

//     const visibleArtworks = [];
//     for (let i = 0; i < 3; i++) {
//         const index = (currentIndex + i) % UrbanScapesArtWorks.length;
//         visibleArtworks.push({ ...UrbanScapesArtWorks[index], actualIndex: index });
//     }

//     return (
//         <div className={`select-none transition-all duration-700 ${bgColor} ${textColor} min-h-screen relative pt-32`}>

//             {/* Banner Section */}
//             <section className="relative pt-32 pb-10 overflow-hidden">
//                 <div className="container mx-auto px-4">
//                     <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative flex items-center justify-center mb-28">
//                         {/* 1. UR and ES outside the image container */}
//                         <div className="flex items-center justify-center font-mistral font-extrabold text-[clamp(3.5rem,12vw,10rem)] leading-none select-none">
//                             <span className={!isDark ? 'text-[#6B4A1E]' : 'text-white'}>UR</span>

//                             <div className="relative mx-2 sm:mx-4 w-[50vw] max-w-2xl aspect-[16/9] overflow-hidden shadow-2xl flex items-center justify-center">
//                                 <img src={urbanScapesBannerImg} alt="Habitat scapes " className="absolute inset-0 w-full h-full object-cover" />
//                                 {/* BAN SCAP overlaying the image */}
//                                 <span className="relative z-10 text-white">BAN SCAP</span>
//                             </div>

//                             <span className={!isDark ? 'text-[#6B4A1E]' : 'text-white'}>ES</span>
//                         </div>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Text Section */}
//             <div className='container mx-auto px-4 sm:px-6 md:px-8 pb-10' >
//                 <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto ">
//                     <div className={`${cardBg} p-8 border ${borderColor} shadow-2xl`}>
//                         <p className="text-base sm:text-lg leading-relaxed font-light text-justify">
//                             Through my Habitat Scape Series of art works, the artist in the architect , is exploring at an analogous level the unstructured and the organic construct of the Urban morphology in our towns and cities.
//                         </p>
//                         <p className="text-base sm:text-lg leading-relaxed font-light text-justify mt-2.5">
//                             As a trained architect I would respond to order , symmetry , planned physical form and shapes , formal geometry , street manners , climate and any other validated and contextual visual narrative that would define contemporary architecture.
//                         </p>
//                         <p className="text-base sm:text-lg leading-relaxed font-light text-justify mt-2.5">
//                             As an artist what fascinates me is the entirely different urban contextual form and visual narrative that exists more predominantly in the urban fabric of our towns and cities that are often referred to as unplanned development chaotic in its visual character.
//                         </p>
//                     </div>
//                     <div className={`${cardBg} p-8 border ${borderColor} shadow-2xl`}>
//                         <p className="text-base sm:text-lg leading-relaxed font-light text-justify">
//                             It more often is organic development that was “architectured” by the users and common people. The seemingly chaotic aggregation of the habitat mass that exists in multiple layers beyond the mere brick and mortar of the physical façade and where the physical aspect serves the functional purpose of its subliminal construct.
//                         </p>
//                         <p className="text-base sm:text-lg leading-relaxed font-light text-justify mt-2.5">
//                             At an entirely different level of perception to the cognitive construct of my “ trained “ understanding as an architect , I have also often been compelled to wonder of what lies beyond and within the habitat scapes and human tenements. It is here that my art points to a direction for the viewer to unravel the mysteries that is symbiotically woven in the physical construct and character , in the masses and voids , narrow lanes and by lanes of these organic settlements through the prism their own life experiences and interpretations
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Gallery Section */}
//             <section className="container mx-auto px-4 sm:px-6 md:px-8 pb-32">
//                 <div className="flex items-center justify-between mb-12">
//                     <h2 className="text-4xl font-serif">Gallery</h2>
//                     <div className="flex gap-4">
//                         <button onClick={prevSlide} className={`p-4 rounded-full border-2 ${borderColor} ${cardBg} shadow-lg hover:scale-105 transition-transform`}><ChevronLeft size={24} /></button>
//                         <button onClick={nextSlide} className={`p-4 rounded-full border-2 ${borderColor} ${cardBg} shadow-lg hover:scale-105 transition-transform`}><ChevronRight size={24} /></button>
//                     </div>
//                 </div>

//                 {/* 6. Mobile Horizontal Scroll / Desktop Grid */}
//                 <div
//                     ref={scrollRef}
//                     className="flex md:grid md:grid-cols-3 gap-8 max-w-7xl mx-auto overflow-x-auto md:overflow-x-visible no-scrollbar pb-8 snap-x snap-mandatory"
//                 >
//                     <AnimatePresence mode="popLayout">
//                         {(window.innerWidth < 768 ? UrbanScapesArtWorks : visibleArtworks).map((artwork, idx) => (
//                             <motion.div
//                                 key={artwork.id}
//                                 initial={{ opacity: 0, scale: 0.9 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 exit={{ opacity: 0, scale: 0.9 }}
//                                 transition={{ duration: 0.4 }}
//                                 onClick={() => setExpandedArtwork(window.innerWidth < 768 ? idx : artwork.actualIndex)}
//                                 /* 2. Removed frame and bg design from gallery images */
//                                 className={`cursor-pointer group flex-shrink-0 w-[80vw] md:w-auto snap-center flex items-center justify-center`}
//                             >
//                                 {/* 3. Aspect ratio fix for 48x96 */}
//                                 <div
//                                     className="relative overflow-hidden w-full flex items-center justify-center"
//                                     style={{ aspectRatio: `${artwork.hDim} / ${artwork.vDim}` }}
//                                 >
//                                     <img src={artwork.image} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" alt="" />
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </AnimatePresence>
//                 </div>
//             </section>

//             {/* Modal */}
//             <AnimatePresence>
//                 {expandedArtwork !== null && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         className="fixed inset-0 z-[1000] bg-black/98 p-4 md:p-12 flex items-center justify-center"
//                     >
//                         <div className="absolute inset-0" onClick={() => setExpandedArtwork(null)} />

//                         <button onClick={prevSlide} className="absolute left-4 md:left-10 text-white/40 hover:text-white z-50 transition-colors"><ChevronLeft size={64} /></button>
//                         <button onClick={nextSlide} className="absolute right-4 md:right-10 text-white/40 hover:text-white z-50 transition-colors"><ChevronRight size={64} /></button>
//                         <button onClick={() => setExpandedArtwork(null)} className="absolute top-8 right-8 text-white/70 hover:text-white z-50"><X size={40} /></button>

//                         <div className="relative w-full h-full flex flex-col items-center justify-center gap-6 pointer-events-none">
//                             <motion.img
//                                 key={expandedArtwork}
//                                 initial={{ scale: 0.8, opacity: 0 }}
//                                 animate={{ scale: 1, opacity: 1 }}
//                                 src={UrbanScapesArtWorks[expandedArtwork].image}
//                                 /* 5. Fully visible in all devices */
//                                 className="max-w-full max-h-[70vh] object-contain shadow-2xl pointer-events-auto"
//                                 style={{ aspectRatio: `${UrbanScapesArtWorks[expandedArtwork].hDim} / ${UrbanScapesArtWorks[expandedArtwork].vDim}` }}
//                             />
//                             <div className="text-center text-white bg-black/40 backdrop-blur-md p-6 rounded-lg pointer-events-auto">
//                                 <p className="text-[#D4AF37] text-xl font-serif">{UrbanScapesArtWorks[expandedArtwork].size}</p>
//                                 <p className="text-sm opacity-50 uppercase tracking-widest">{UrbanScapesArtWorks[expandedArtwork].description}</p>
//                                 <p className="text-white/40 text-xs mt-2">{expandedArtwork + 1} / {UrbanScapesArtWorks.length}</p>
//                             </div>
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Helmet } from "react-helmet";

import urbanScapesBannerImg from '../assets/images/urbanScapes/urbanScapesBannerImg.jpeg';

import urban1 from '../assets/images/urbanScapes/urban1.png';
import urban2 from '../assets/images/urbanScapes/urban2.png';
import urban3 from '../assets/images/urbanScapes/urban3.png';
import urban4 from '../assets/images/urbanScapes/urban4.png';
import urban5 from '../assets/images/urbanScapes/urban5.png';
import urban6 from '../assets/images/urbanScapes/urban6.png';
import urban7 from '../assets/images/urbanScapes/urban7.png';
import urban8 from '../assets/images/urbanScapes/urban8.png';
import urban9 from '../assets/images/urbanScapes/urban9.png';
import urban10 from '../assets/images/urbanScapes/urban10.png';

// urbanAreaWithPainting
import urbanAreaWithPainting from '../assets/images/urbanScapes/urbanAreaWithPainting.png'

const UrbanScapesArtWorks = [
    { id: 1, image: urban1, size: "48 × 48 inches", vDim: 48, hDim: 48, description: "OIL ON CANVAS" },
    { id: 2, image: urban2, size: "48 × 48 inches", vDim: 48, hDim: 48, description: "OIL ON CANVAS" },
    { id: 3, image: urban3, size: "48 × 96 inches", vDim: 48, hDim: 96, description: "OIL ON CANVAS" },
    { id: 4, image: urban4, size: "48 × 48 inches", vDim: 48, hDim: 48, description: "OIL ON CANVAS" },
    { id: 5, image: urban5, size: "60 × 60 inches", vDim: 60, hDim: 60, description: "OIL ON CANVAS" },
    { id: 6, image: urban6, size: "48 × 36 inches", vDim: 48, hDim: 36, description: "OIL ON CANVAS" },
    { id: 7, image: urban7, size: "48 × 36 inches", vDim: 48, hDim: 36, description: "OIL ON CANVAS" },
    { id: 8, image: urban8, size: "48 × 46 inches", vDim: 48, hDim: 48, description: "OIL ON CANVAS" },
    { id: 9, image: urban9, size: "48 × 96 inches", vDim: 48, hDim: 96, description: "OIL ON CANVAS" },
    { id: 10, image: urban10, size: "48 × 48 inches", vDim: 48, hDim: 48, description: "OIL ON CANVAS" },
];

export const UrbanScapes = () => {
    const isDark = useSelector((state) => state.theme.isDark);


    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const [expandedSpecialIndex, setExpandedSpecialIndex] = useState(null);

    const scrollRef = useRef(null);
    const [expandedIndex, setExpandedIndex] = useState(null);

    const normalArtworks = UrbanScapesArtWorks.filter(
        (art) => art.hDim !== 96
    );

    const specialArtworks = UrbanScapesArtWorks.filter(
        (art) => art.hDim === 96
    );

    const nextSlide = () => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    };

    const prevSlide = () => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    };

    const next = () =>
        setExpandedIndex((i) => (i + 1) % total);

    const prev = () =>
        setExpandedIndex((i) => (i - 1 + total) % total);

    const total = normalArtworks.length;

    const bgColor = isDark
        ? 'bg-gradient-to-br from-[#0A0A0A] via-[#141414] to-[#1A1A1A]'
        : 'bg-gradient-to-br from-[#F5EFE7] via-[#E8DDD0] to-[#D6C8B8]';
    const textColor = isDark ? 'text-[#F5F5F4]' : 'text-[#2C2416]';
    const borderColor = isDark ? 'border-[#2A2A2A]' : 'border-[#C4B5A0]';
    const cardBg = isDark ? 'bg-[#141414]' : 'bg-white';

    const visibleArtworks = [];
    for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % UrbanScapesArtWorks.length;
        visibleArtworks.push({ ...UrbanScapesArtWorks[index], actualIndex: index });
    }

    return (
        <>
            <Helmet>
                <title>Habitat scapes  | Paintings Portfolio</title>
                <meta
                    name="description"
                    content="Habitat scapes  – A curated collection of original oil paintings presented in museum-style proportion."
                />
                <meta property="og:title" content="Habitat scapes  Paintings" />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className={`select-none transition-all duration-700 ${bgColor} ${textColor} min-h-screen relative pt-16 md:pt-32`}>

                {/* Banner Section */}
                <section className="relative md:pb-10 overflow-hidden px-6">
                    <div className="mx-auto">
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
                                    Habitat scapes
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

                                    <span className="text-[#6B4A1E]">HA</span>
                                    <span className="text-white">BITAT</span>
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
                                <div className="relative aspect-[16/9] md:aspect-[23/8] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                    <img
                                        src={urbanScapesBannerImg}
                                        alt="Habitat Scapes"
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
                                <h1 className="font-mistral text-[clamp(3.5rem,16vw,7rem)] leading-none drop-shadow-2xl whitespace-nowrap">

                                    <span className="text-white">SCAP</span>
                                    <span className="text-[#6B4A1E]">ES</span>
                                </h1>
                            </motion.div>

                            {/* Abstract Decorative Lines */}
                            <div className={`absolute left-0 top-1/2 w-12 md:w-24 h-px ${isDark ? 'bg-white/20' : 'bg-black/20'} hidden lg:block`} />
                            <div className={`absolute right-0 top-1/2 w-12 md:w-24 h-px ${isDark ? 'bg-white/20' : 'bg-black/20'} hidden lg:block`} />
                        </motion.div>
                    </div>
                </section>

                {/* Text Section */}
                <div className='mx-auto px-6 pb-7'>
                    <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto ">
                        <div className={`${cardBg} p-8 border ${borderColor} shadow-2xl`}>
                            <p className="text-base sm:text-lg leading-relaxed font-light ">
                                Through my Habitat Scape Series of art works, the artist in the architect , is exploring at an analogous level the unstructured and the organic construct of the Urban morphology in our towns and cities.
                            </p>
                            <p className="text-base sm:text-lg leading-relaxed font-light  mt-2.5">
                                As a trained architect I would respond to order , symmetry, planned physical form and shapes, formal geometry, street manners , climate and any other validated and contextual visual narrative that would define contemporary architecture.
                            </p>
                            <p className="text-base sm:text-lg leading-relaxed font-light  mt-2.5">
                                As an artist what fascinates me is the entirely different urban contextual form and visual narrative that exists more predominantly in the urban fabric of our towns and cities that are often referred to as unplanned development chaotic in its visual character.
                            </p>
                        </div>
                        <div className={`${cardBg} p-8 border ${borderColor} shadow-2xl`}>
                            <p className="text-base sm:text-lg leading-relaxed font-light ">
                                It more often is organic development that was “architectured” by the users and common people. The seemingly chaotic aggregation of the habitat mass that exists in multiple layers beyond the mere brick and mortar of the physical façade and where the physical aspect serves the functional purpose of its subliminal construct.
                            </p>
                            <p className="text-base sm:text-lg leading-relaxed font-light  mt-2.5">
                                At an entirely different level of perception to the cognitive construct of my “ trained “ understanding as an architect , I have also often been compelled to wonder of what lies beyond and within the habitat scapes and human tenements. It is here that my art points to a direction for the viewer to unravel the mysteries that is symbiotically woven in the physical construct and character , in the masses and voids , narrow lanes and by lanes of these organic settlements through the prism of their own life experiences and interpretations
                            </p>
                        </div>
                    </div>
                </div>

                {/* urbanAreaWithPainting */}
                <section className='mb-17'>
                    <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        src={urbanAreaWithPainting}

                        /* 5. Fully visible in all devices */
                        className="max-w-full max-h-[70vh] object-contain mx-auto pointer-events-auto"
                    />
                </section>

                {/* ================= DESKTOP CAROUSEL ================= */}
                <section className="mx-auto px-6">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-4xl font-serif">Gallery</h2>
                        <div className="hidden md:flex gap-8">
                            <button onClick={prevSlide} className="p-4">
                                <ChevronLeft size={24} />
                            </button>
                            <button onClick={nextSlide} className="p-4">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    {/* ===== DESKTOP: CAROUSEL */}
                    <div
                        ref={scrollRef}
                        className="flex md:flex-row gap-6 flex-col md:overflow-x-hidden md:no-scrollbar max-w-7xl mx-auto"
                    >
                        <AnimatePresence mode="popLayout">
                            {normalArtworks.map((art, idx) => (
                                <motion.div
                                    key={art.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => setExpandedIndex(idx)}
                                    className="cursor-pointer shrink-0 md:w-[33.333%] w-full flex justify-center"
                                >
                                    <div
                                        className="w-full"
                                        style={{
                                            aspectRatio: `${art.hDim} / ${art.vDim}`,
                                        }}
                                    >
                                        <img
                                            src={art.image}
                                            alt=""
                                            className="w-full h-full object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </section>

                {/* {specialArtworks.length > 0 && (
                    <section className="px-5 py-3">
                        {specialArtworks.map((art) => (
                            <div
                                key={art.id}
                                className="w-full mx-auto mt-3 !lg:mt-0"
                                style={{
                                    aspectRatio: `${art.hDim} / ${art.vDim}`,
                                }}
                            >
                                <img
                                    src={art.image}
                                    alt={art.size}
                                    className="w-full h-full md:h-100"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </section>
                )} */}

                {specialArtworks.length > 0 && (
                    <section className="px-5 py-3">
                        {specialArtworks.map((art, idx) => (
                            <div
                                key={art.id}
                                className="w-full mx-auto mt-3 !lg:mt-0 cursor-pointer"
                                style={{ aspectRatio: `${art.hDim} / ${art.vDim}` }}
                                onClick={() => setExpandedSpecialIndex(idx)}
                            >
                                <img
                                    src={art.image}
                                    alt={art.size}
                                    className="w-full h-full md:h-100"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </section>
                )}

                <AnimatePresence>
                    {expandedSpecialIndex !== null && (
                        <motion.div
                            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {/* CLOSE */}
                            <button
                                onClick={() => setExpandedSpecialIndex(null)}
                                className="absolute top-6 right-6 text-white z-10"
                            >
                                <X size={48} />
                            </button>

                            {/* IMAGE */}
                            <motion.div
                                key={expandedSpecialIndex}
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col items-center"
                            >
                                <img
                                    src={specialArtworks[expandedSpecialIndex].image}
                                    alt=""
                                    className="max-h-[75vh] px-3"
                                    style={{
                                        aspectRatio: `${specialArtworks[expandedSpecialIndex].hDim} / ${specialArtworks[expandedSpecialIndex].vDim}`,
                                    }}
                                />

                                <div className="mt-6 text-center text-white">
                                    <p className="text-xl font-serif">
                                        {specialArtworks[expandedSpecialIndex].size}
                                    </p>
                                    <p className="text-sm opacity-60 uppercase mt-1">
                                        {specialArtworks[expandedSpecialIndex].description}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>



                {/* ================= EXPANDED MODAL ================= */}
                <AnimatePresence>
                    {expandedIndex !== null && (
                        <motion.div
                            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {/* CLOSE */}
                            <button
                                onClick={() => setExpandedIndex(null)}
                                className="absolute top-6 right-6 text-white z-10"
                            >
                                <X size={48} />
                            </button>

                            {/* NAV */}
                            <button
                                onClick={prev}
                                className="absolute left-4 md:left-10 text-white z-10"
                            >
                                <ChevronLeft size={48} />
                            </button>

                            <button
                                onClick={next}
                                className="absolute right-4 md:right-10 text-white z-10"
                            >
                                <ChevronRight size={48} />
                            </button>

                            {/* IMAGE */}
                            <motion.div
                                key={expandedIndex}
                                onClick={(e) => e.stopPropagation()}
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col items-center"
                            >
                                <img
                                    src={normalArtworks[expandedIndex].image}
                                    alt=""
                                    className="max-h-[75vh] max-w-[90vw] object-contain"
                                    style={{
                                        aspectRatio: `${normalArtworks[expandedIndex].hDim} / ${normalArtworks[expandedIndex].vDim}`,
                                    }}
                                />

                                <div className="mt-6 text-center text-white">
                                    <p className="text-xl font-serif">
                                        {normalArtworks[expandedIndex].size}
                                    </p>
                                    <p className="text-sm opacity-60 uppercase mt-1">
                                        {normalArtworks[expandedIndex].description}
                                    </p>
                                    <p className="text-xs opacity-40 mt-3">
                                        {expandedIndex + 1} / {total}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </>
    );
};