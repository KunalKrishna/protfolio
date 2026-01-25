import React from "react";
import { motion } from "framer-motion";
import { content } from "../data/content";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-unc-white mb-4">Featured Projects</h2>
                    <div className="h-1 w-20 bg-unc-secondary rounded"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {content.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-unc-white/5 rounded-2xl p-8 border border-unc-white/5 hover:border-unc-primary/30 group transition-all"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-unc-white">{project.title}</h3>
                                <div className="flex gap-3">
                                    <a href={project.links.repo} className="text-unc-white/60 hover:text-unc-primary transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.links.demo} className="text-unc-white/60 hover:text-unc-primary transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <p className="text-unc-white/60 mb-6 italic border-l-2 border-unc-secondary pl-4">
                                "{project.problem}"
                            </p>

                            <div className="mb-6">
                                <h4 className="text-sm uppercase tracking-wider text-unc-primary font-semibold mb-3">Backend Highlights</h4>
                                <ul className="space-y-2">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="text-unc-white/80 text-sm flex items-start gap-2">
                                            <ArrowRight size={16} className="mt-1 text-unc-secondary shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 bg-unc-navy rounded-full text-xs font-medium text-unc-primary border border-unc-primary/20">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
