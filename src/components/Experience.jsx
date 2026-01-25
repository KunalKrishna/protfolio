import React from "react";
import { motion } from "framer-motion";
import { content } from "../data/content";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-unc-black/20">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-unc-white mb-4">Experience & Education</h2>
                    <div className="h-1 w-20 bg-unc-secondary rounded"></div>
                </motion.div>

                <div className="space-y-12">
                    {/* Experience Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Briefcase className="text-unc-primary" size={24} />
                            <h3 className="text-2xl font-semibold text-unc-white">Professional History</h3>
                        </div>
                        <div className="border-l-2 border-unc-white/10 ml-3 pl-8 space-y-10">
                            {content.experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-1 w-5 h-5 bg-unc-navy border-4 border-unc-secondary rounded-full"></span>
                                    <h4 className="text-xl font-bold text-unc-white">{exp.role}</h4>
                                    <div className="flex justify-between items-center text-unc-white/60 mb-2 text-sm">
                                        <span>{exp.company}</span>
                                        <span>{exp.dates}</span>
                                    </div>
                                    <ul className="list-disc list-outside ml-4 space-y-2 text-unc-white/80">
                                        {exp.descriptions && exp.descriptions.map((desc, i) => (
                                            <li key={i} className="leading-relaxed pl-1">
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <GraduationCap className="text-unc-primary" size={24} />
                            <h3 className="text-2xl font-semibold text-unc-white">Education</h3>
                        </div>
                        <div className="grid gap-6">
                            {content.education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-unc-white/5 p-6 rounded-xl border border-unc-white/5 flex flex-col md:flex-row justify-between md:items-center gap-2"
                                >
                                    <div>
                                        <h4 className="text-lg font-bold text-unc-white">{edu.degree}</h4>
                                        <p className="text-unc-white/60">{edu.institution}</p>
                                    </div>
                                    <span className="text-unc-primary font-medium text-sm bg-unc-primary/10 px-3 py-1 rounded-full w-fit">
                                        {edu.dates}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
