import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "../data/content";
import { BookOpen, ExternalLink, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const Blog = () => {
    // Sort blogs by date
    const sortedBlogs = [...content.blog].sort((a, b) => new Date(b.date) - new Date(a.date));

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-cycle logic
    useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % sortedBlogs.length);
            }, 5000); // Change every 5 seconds
        }
        return () => clearInterval(interval);
    }, [isPaused, sortedBlogs.length]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % sortedBlogs.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? sortedBlogs.length - 1 : prev - 1));
    };

    const togglePause = () => {
        setIsPaused(!isPaused);
    };

    const currentPost = sortedBlogs[currentIndex];

    return (
        <section id="blogs" className="py-10">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h2 className="text-2xl font-bold text-unc-white mb-2">Technical Writing</h2>
                    <p className="text-unc-white/60 mb-2 text-sm">
                        Earlier, I used to write blogs on <a href="https://abitmanipulator.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-unc-primary hover:underline">Blogger</a>.
                        Lately, I've been experimenting with <a href="https://medium.com/@kunalkrishna85" target="_blank" rel="noopener noreferrer" className="text-unc-primary hover:underline">Medium</a> and <a href="https://hashnode.com/@kunalkrishna85" target="_blank" rel="noopener noreferrer" className="text-unc-primary hover:underline">Hashnode</a>.
                    </p>
                    <div className="h-1 w-20 bg-unc-secondary rounded"></div>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative bg-unc-white/5 rounded-2xl p-6 border border-unc-white/5 hover:border-unc-primary/20 transition-colors">
                    <div className="overflow-hidden min-h-[160px]"> {/* Fixed min-height to prevent layout shifts */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col md:flex-row gap-6 items-center"
                            >
                                {/* Thumbnail */}
                                <div className="shrink-0 w-full md:w-32 h-32 md:h-24 bg-unc-navy rounded-lg border border-unc-white/10 overflow-hidden">
                                    {currentPost.image ? (
                                        <img
                                            src={currentPost.image}
                                            alt={currentPost.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <BookOpen className="text-unc-primary" size={24} />
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-grow text-center md:text-left">
                                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                                        <h3 className="text-lg font-bold text-unc-white">
                                            {currentPost.title}
                                        </h3>
                                        {currentPost.date && (
                                            <span className="text-[10px] font-medium text-unc-white/40 border border-unc-white/10 px-1.5 py-0.5 rounded-full">
                                                {currentPost.date}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-unc-white/60 leading-snug mb-3 text-sm line-clamp-2">
                                        {currentPost.description}
                                    </p>
                                    <a
                                        href={currentPost.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-xs font-medium text-unc-secondary hover:underline"
                                    >
                                        Read Article <ExternalLink size={12} />
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <div className="flex justify-center items-center gap-4 mt-6 pt-4 border-t border-unc-white/10">
                        <button
                            onClick={handlePrev}
                            className="p-1.5 rounded-full bg-unc-white/5 hover:bg-unc-primary hover:text-white text-unc-white/70 transition-all"
                            aria-label="Previous Post"
                        >
                            <ChevronLeft size={16} />
                        </button>

                        <button
                            onClick={togglePause}
                            className="p-1.5 rounded-full bg-unc-white/5 hover:bg-unc-secondary hover:text-white text-unc-white/70 transition-all"
                            aria-label={isPaused ? "Play" : "Pause"}
                        >
                            {isPaused ? <Play size={16} /> : <Pause size={16} />}
                        </button>

                        <button
                            onClick={handleNext}
                            className="p-1.5 rounded-full bg-unc-white/5 hover:bg-unc-primary hover:text-white text-unc-white/70 transition-all"
                            aria-label="Next Post"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
