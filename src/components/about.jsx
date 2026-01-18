export const About = () => (
    <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="pt-40 pb-20 px-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-20"
    >
        <div className="relative">
            <div className="aspect-[4/5] bg-stone-900 overflow-hidden">
                <img src="/artist-portrait.jpg" alt="The Artist" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-stone-800 -z-10" />
        </div>
        <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-serif mb-8">A Lifetime Behind the Brush</h2>
            <p className="text-stone-400 leading-relaxed text-lg mb-6">
                Born in 1957, the artist has spent six decades exploring the intersection of light, shadow, and human emotion.
            </p>
            <p className="text-stone-500 italic">
                "Art is not what I do, it is how I breathe."
            </p>
        </div>
    </motion.div>
);