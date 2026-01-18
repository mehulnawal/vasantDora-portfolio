import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './context/themeContext';

export const Portfolio = () => {
    // Accessing state from your Reducer Store
    const { state } = useTheme();
    const [activeCategory, setActiveCategory] = useState("ALL");

    const categories = ["ALL", "URBAN SCAPES", "SAMSARA SERIES", "NSPIRED FIGURATIVE"];

    const artworks = [
        { id: 1, title: "City Silence", category: "URBAN SCAPES", img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800" },
        { id: 2, title: "Cycle of Life", category: "SAMSARA SERIES", img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800" },
        { id: 3, title: "The Subject", category: "NSPIRED FIGURATIVE", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800" },
        // Add more artwork objects here
    ];

    const filteredArt = activeCategory === "ALL"
        ? artworks
        : artworks.filter(art => art.category === activeCategory);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pt-32 pb-20 px-6 md:px-12 min-h-screen"
        >
            {/* Category Filter */}
            <div className="flex flex-wrap gap-8 mb-16 border-b border-stone-200 dark:border-stone-800 pb-6">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-xs tracking-[0.3em] uppercase transition-all duration-300 ${activeCategory === cat
                            ? "text-stone-900 dark:text-white font-bold"
                            : "text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Staggered Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredArt.map((art) => (
                        <motion.div
                            key={art.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="group"
                        >
                            <div className="aspect-[3/4] overflow-hidden bg-stone-100 dark:bg-stone-900 shadow-lg">
                                <img
                                    src={art.img}
                                    alt={art.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="font-serif italic text-xl">{art.title}</h3>
                                <p className="text-[10px] uppercase tracking-widest text-stone-500 mt-1">{art.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};