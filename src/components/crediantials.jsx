import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { X, Play } from 'lucide-react';

// videos
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';

// videos 
import videoThumnail1 from '../assets/images/Credentials/videoThumnail1.png'
import videoThumnail2 from '../assets/images/Credentials/videoThumnail2.png'

// exhibition photos 
import exhibitionPhotos1 from '../assets/images/Credentials/exhibition1.png'
import exhibitionPhotos2 from '../assets/images/Credentials/exhibition2.png'
import exhibitionPhotos3 from '../assets/images/Credentials/exhibition3.png'
import exhibitionPhotos4 from '../assets/images/Credentials/exhibition4.png'
import exhibitionPhotos5 from '../assets/images/Credentials/exhibition5.png'
import exhibitionPhotos6 from '../assets/images/Credentials/exhibition6.png'
import exhibitionPhotos7 from '../assets/images/Credentials/exhibition7.png'
import exhibitionPhotos8 from '../assets/images/Credentials/exhibition8.png'


// Swap these with your actual assets
const testimonialVideos = [
    { id: 1, url: video1, thumbnail: videoThumnail1, title: "" },
    { id: 2, url: video2, thumbnail: videoThumnail2, title: "" }
];

// 8 Photos 
const exhibitionPhotos = [
    exhibitionPhotos1, exhibitionPhotos2, exhibitionPhotos3, exhibitionPhotos4,
    exhibitionPhotos5, exhibitionPhotos6, exhibitionPhotos8, exhibitionPhotos7
];

const Credentials = () => {
    const isDark = useSelector((state) => state.theme.isDark);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const bgColor = isDark ? 'bg-[#0A0A0A]' : 'bg-[#F5EFE7]';
    const textColor = isDark ? 'text-[#F5F5F4]' : 'text-[#2C2416]';
    const borderColor = isDark ? 'border-[#2A2A2A]' : 'border-[#C4B5A0]';

    return (
        <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-700 pt-32 pb-20 overflow-x-hidden`}>
            <div className="container mx-auto px-4 sm:px-8">

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <h1 className="font-brusher text-6xl md:text-8xl font-serif tracking-tighter" >
                        Credentials
                    </h1>
                    <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-6" />
                </motion.div>

                {/* Section 1: Videos */}
                <section className="mb-32">
                    <h2 className="font-brusher text-2xl md:text-3xl font-serif mb-12 tracking-widest opacity-80 uppercase">
                        Testimonials
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {testimonialVideos.map((video) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                className={`relative aspect-video group cursor-pointer overflow-hidden border ${borderColor} shadow-2xl`}
                                onClick={() => setSelectedVideo(video.url)}
                            >
                                <img src={video.thumbnail} className="w-full h-full object-cover" alt="" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all group-hover:bg-black/20">
                                    <div className="p-5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 group-hover:scale-110 transition-transform">
                                        <Play className="text-white fill-white" size={32} />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-white font-serif text-lg tracking-widest uppercase">{video.title}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Section 2: Exhibition Photos (Optimized Bento for Landscape) */}
                <section>
                    <h2 className="font-brusher text-2xl md:text-3xl font-serif mb-12 tracking-widest opacity-80 uppercase">
                        Exhibition Archive
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[200px]">
                        {exhibitionPhotos.map((photo, index) => {

                            const gridClasses = [
                                "md:col-span-4 md:row-span-2", // Large lead image
                                "md:col-span-2 md:row-span-1", // Small landscape
                                "md:col-span-2 md:row-span-1", // Small landscape
                                "md:col-span-3 md:row-span-1", // Medium Wide
                                "md:col-span-3 md:row-span-1", // Medium Wide
                                "md:col-span-2 md:row-span-1", // Small landscape
                                "md:col-span-4 md:row-span-1", // Very Wide
                                "md:col-span-6 md:row-span-1"  // Full Width Cinematic
                            ];

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className={`relative overflow-hidden border ${borderColor} shadow-lg ${gridClasses[index] || "md:col-span-2"}`}
                                >
                                    <img
                                        src={photo}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                                        alt="Exhibition Moment"
                                    />
                                    {/* Subtle Overlay to make it look premium */}
                                    <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:bg-transparent transition-colors" />
                                </motion.div>
                            );
                        })}
                    </div>
                </section>
            </div>

            {/* Video Expansion Modal - Corrected Close Button Visibility */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[500] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
                    >
                        {/* High Visibility Close Button */}
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-6 right-6 md:top-10 md:right-10 z-[510] p-4 rounded-full bg-white/10 hover:bg-[#D4AF37] border border-white/20 text-white transition-all group"
                        >
                            <X size={32} strokeWidth={2.5} />
                            <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
                        </motion.button>

                        <div className="w-full max-w-6xl aspect-video bg-black shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
                            <video
                                src={selectedVideo}
                                controls
                                autoPlay
                                className="w-full h-full"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Credentials;