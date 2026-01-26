import React from "react";
import { motion } from "framer-motion";
import { content } from "../data/content";
import { Download } from "lucide-react";

const Hero = () => {
    const { hero } = content;

    return (
        <section id="about" className="pt-24 pb-8 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* <h2 className="text-unc-primary font-medium text-lg mb-4 tracking-wide uppercase">
                        Software Engineer
                    </h2> */}
                    <h1 className="text-3xl md:text-5xl font-bold text-unc-white mb-3 leading-tight">
                        {hero.headline}
                    </h1>
                    <p className="text-lg text-unc-white/70 mb-5 max-w-2xl mx-auto">
                        {hero.subheadline}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                            href={hero.ctaLink}
                            className="bg-unc-secondary hover:bg-unc-primary text-white px-6 py-2.5 text-sm rounded-full font-semibold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-unc-secondary/20"
                        >
                            <Download size={18} />
                            {hero.ctaText}
                        </a>
                        <div className="flex gap-3">
                            {hero.socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 bg-unc-white/5 rounded-full text-unc-white hover:text-unc-primary hover:bg-unc-white/10 transition-all border border-unc-white/10"
                                    aria-label={social.name}
                                >
                                    {typeof social.icon === "string" ? (
                                        <img src={social.icon} alt={social.name} className="w-5 h-5 rounded-full object-cover" />
                                    ) : (
                                        <social.icon size={18} />
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <a
                            href="https://leetcode.com/u/tHeVaGaBonD85/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-105 transition-transform"
                        >
                            <img
                                src="https://leetcode-status.vercel.app/api/card/tHeVaGaBonD85?theme=neon&gradient&gradient_start=%236366F1&gradient_end=%23A855F7&logo=true&custom_title=tHeVaGaBonD85"
                                alt="LeetCode Status"
                                className="h-32"
                            />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
