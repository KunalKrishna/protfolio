import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-unc-navy min-h-screen text-unc-white selection:bg-unc-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
