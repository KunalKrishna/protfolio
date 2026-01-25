import React from "react";
import { motion } from "framer-motion";
import { content } from "../data/content";
import { BookOpen, ExternalLink } from "lucide-react";

const Blog = () => {
    return (
        <section id="blogs" className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-unc-white mb-4">Technical Writing</h2>
                    <p className="text-unc-white/60 mb-4">Earlier, I used to write blogs on <a href="https://abitmanipulator.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-unc-primary hover:underline">Blogger</a>. Lately, I've been experimenting with <a href="https://medium.com/@kunalkrishna85" target="_blank" rel="noopener noreferrer" className="text-unc-primary hover:underline">Medium</a> and <a href="https://hashnode.com/@kunalkrishna85" target="_blank" rel="noopener noreferrer" className="text-unc-primary hover:underline">Hashnode</a>.</p>
                    <div className="h-1 w-20 bg-unc-secondary rounded"></div>
                </motion.div>

                <div className="flex flex-col gap-6">
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
                                className="bg-unc-white/5 p-6 rounded-xl border border-unc-white/5 hover:border-unc-primary/30 group transition-all flex flex-col md:flex-row gap-6 items-start md:items-center"
                            >
                                <div className="shrink-0 p-4 bg-unc-navy rounded-lg border border-unc-white/10 group-hover:border-unc-primary/50 transition-colors">
                                    <BookOpen className="text-unc-primary" size={24} />
                                </div>

                                <div className="flex-grow">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <h3 className="text-xl font-bold text-unc-white group-hover:text-unc-primary transition-colors">
                                            {post.title}
                                        </h3>
                                        {post.date && (
                                            <span className="text-xs font-medium text-unc-white/40 border border-unc-white/10 px-2 py-0.5 rounded-full">
                                                {post.date}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-unc-white/60 leading-relaxed mb-1">
                                        {post.description}
                                    </p>
                                    <span className="inline-flex items-center gap-1 text-sm font-medium text-unc-secondary group-hover:underline">
                                        Read Article <ExternalLink size={14} />
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
