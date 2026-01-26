import React from "react";
import { motion } from "framer-motion";
import { content } from "../data/content";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const TechStack = () => {
    return (
        <section id="skills" className="py-10 bg-unc-black/20">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    <h2 className="text-2xl font-bold text-unc-white mb-2">Technical Expertise</h2>
                    <div className="h-1 w-20 bg-unc-secondary rounded"></div>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {content.techStack.categories.map((category) => (
                        <motion.div
                            key={category.name}
                            variants={item}
                            className="bg-unc-white/5 p-4 rounded-xl border border-unc-white/5 hover:border-unc-primary/30 transition-colors"
                        >
                            <h3 className="text-lg font-semibold text-unc-primary mb-3">{category.name}</h3>
                            {/* <ul className="space-y-2">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="text-unc-white/80 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-unc-secondary rounded-full"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul> */}
                            <div className="flex flex-wrap gap-1.5 mt-auto">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="px-2.5 py-0.5 bg-unc-navy rounded-full text-[10px] font-medium text-unc-primary border border-unc-primary/20">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
