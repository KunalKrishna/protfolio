import React from "react";
import { motion } from "framer-motion";
import { content } from "../data/content";
import { Mail, MapPin, Download } from "lucide-react";

const Contact = () => {
    const { contact } = content;

    return (
        <section id="contact" className="py-12 bg-unc-navy relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-unc-secondary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-unc-primary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h2 className="text-3xl font-bold text-unc-white mb-3">{contact.title}</h2>
                    <div className="h-1 w-16 bg-unc-secondary rounded mx-auto mb-6"></div>
                </motion.div>

                <div className="flex flex-col items-center space-y-6">
                    {/* Contact Info */}
                    <div className="flex flex-col md:flex-row gap-6 text-base">
                        <div className="flex items-center gap-2 text-unc-white/90">
                            <Mail className="text-unc-primary" size={20} />
                            <a href={`mailto:${contact.email}`} className="hover:text-unc-primary transition-colors">
                                {contact.email}
                            </a>
                        </div>
                        <div className="flex items-center gap-2 text-unc-white/90">
                            <MapPin className="text-unc-primary" size={20} />
                            <span>{contact.location}</span>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4 mt-2">
                        {contact.socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-unc-white/5 rounded-full text-unc-white hover:text-unc-primary hover:bg-unc-white/10 transition-all border border-unc-white/10 hover:scale-110"
                                aria-label={social.name}
                            >
                                {typeof social.icon === "string" ? (
                                    <img src={social.icon} alt={social.name} className="w-5 h-5 rounded-full object-cover" />
                                ) : (
                                    <social.icon size={20} />
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Resume Button */}
                    <div className="mt-6">
                        <a
                            href="/resume.pdf"
                            className="bg-unc-secondary hover:bg-unc-primary text-white px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-unc-secondary/20 text-sm"
                        >
                            <Download size={18} />
                            Download Resume (PDF)
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
