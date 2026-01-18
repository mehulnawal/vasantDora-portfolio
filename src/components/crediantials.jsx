import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileCheck, ShieldCheck } from 'lucide-react';

export const Credentials = () => {
    const honors = [
        { year: "2024", title: "National Gallery Recognition", org: "International Arts Council" },
        { year: "2021", title: "Lifetime Achievement Award", org: "Modern Painters Association" },
        { year: "2018", title: "Solo Exhibition: Urban Scapes", org: "Royal London Gallery" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="pt-40 px-6 md:px-20 max-w-5xl mx-auto"
        >
            <div className="grid md:grid-cols-3 gap-20">
                <div className="md:col-span-1">
                    <h2 className="text-4xl font-serif italic mb-6">Credentials & <br /> Honors</h2>
                    <p className="text-stone-500 text-sm leading-relaxed font-light">
                        A history of excellence and dedication to the craft spanning over four decades.
                    </p>
                </div>

                <div className="md:col-span-2 space-y-16">
                    {honors.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex gap-8 items-start border-b border-stone-800 pb-8"
                        >
                            <span className="text-stone-600 font-serif text-2xl">{item.year}</span>
                            <div>
                                <h4 className="text-xl text-stone-200 mb-1">{item.title}</h4>
                                <p className="text-stone-500 uppercase text-[10px] tracking-widest">{item.org}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Credentials;