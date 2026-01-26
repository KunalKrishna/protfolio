import React from "react";
import { motion } from "framer-motion";
import { content } from "../data/content";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = () => {
    return (
        <section id="projects" className="py-10">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h2 className="text-2xl font-bold text-unc-white mb-2">Featured Projects</h2>
                    <div className="h-1 w-20 bg-unc-secondary rounded"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {content.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-unc-white/5 rounded-2xl p-5 border border-unc-white/5 hover:border-unc-primary/30 group transition-all"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-xl font-bold text-unc-white">{project.title}</h3>
                                <div className="flex gap-3">
                                    <a href={project.links.repo} className="text-unc-white/60 hover:text-unc-primary transition-colors">
                                        <Github size={18} />
                                    </a>
                                    <a href={project.links.demo} className="text-unc-white/60 hover:text-unc-primary transition-colors">
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>

                            <p className="text-unc-white/60 mb-4 italic border-l-2 border-unc-secondary pl-3 text-sm">
                                "{project.problem}"
                            </p>

                            <div className="mb-4">
                                <h4 className="text-xs uppercase tracking-wider text-unc-primary font-semibold mb-2">Features : </h4>
                                <ul className="space-y-1">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="text-unc-white/80 text-xs flex items-start gap-2">
                                            <ArrowRight size={14} className="mt-0.5 text-unc-secondary shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-1.5 mt-auto">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-2.5 py-0.5 bg-unc-navy rounded-full text-[10px] font-medium text-unc-primary border border-unc-primary/20">
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
