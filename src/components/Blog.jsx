import React from "react";
import { motion } from "framer-motion";
import { content } from "../data/content";
import { BookOpen, ExternalLink } from "lucide-react";

const Blog = () => {
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
                    <p className="text-unc-white/60 mb-2 text-sm">Earlier, I used to write blogs on <a href="https://abitmanipulator.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-unc-primary hover:underline">Blogger</a>. Lately, I've been experimenting with <a href="https://medium.com/@kunalkrishna85" target="_blank" rel="noopener noreferrer" className="text-unc-primary hover:underline">Medium</a> and <a href="https://hashnode.com/@kunalkrishna85" target="_blank" rel="noopener noreferrer" className="text-unc-primary hover:underline">Hashnode</a>.</p>
                    <div className="h-1 w-20 bg-unc-secondary rounded"></div>
                </motion.div>

                <div className="flex flex-col gap-4">
                    {[...content.blog]
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .map((post, index) => (
                            <motion.a
                                key={index}
                                href={post.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-unc-white/5 p-4 rounded-xl border border-unc-white/5 hover:border-unc-primary/30 group transition-all flex flex-col md:flex-row gap-4 items-start md:items-center"
                            >
                                <div className="shrink-0 w-full md:w-32 h-32 md:h-24 bg-unc-navy rounded-lg border border-unc-white/10 overflow-hidden group-hover:border-unc-primary/50 transition-colors">
                                    {post.image ? (
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <BookOpen className="text-unc-primary" size={24} />
                                        </div>
                                    )}
                                </div>

                                <div className="flex-grow">
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <h3 className="text-lg font-bold text-unc-white group-hover:text-unc-primary transition-colors">
                                            {post.title}
                                        </h3>
                                        {post.date && (
                                            <span className="text-[10px] font-medium text-unc-white/40 border border-unc-white/10 px-1.5 py-0.5 rounded-full">
                                                {post.date}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-unc-white/60 leading-snug mb-1 text-sm line-clamp-2">
                                        {post.description}
                                    </p>
                                    <span className="inline-flex items-center gap-1 text-xs font-medium text-unc-secondary group-hover:underline">
                                        Read Article <ExternalLink size={12} />
                                    </span>
                                </div>
                            </motion.a>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
