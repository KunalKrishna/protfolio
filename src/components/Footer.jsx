import React from "react";
import { content } from "../data/content";

const Footer = () => {
    return (
        <footer id="footer" className="py-8 border-t border-unc-white/10 mt-10">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <p className="text-unc-white/40 text-sm">
                    © {new Date().getFullYear()} Built with React, Tailwind & UNC Spirit.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
