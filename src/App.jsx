import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="py-8 bg-[var(--dark-bg)] text-center text-gray-400 text-sm">
        <div className="container">
          <p>© {new Date().getFullYear()} Enov3ri. All rights reserved.</p>
          <p className="mt-2">
            Designed and built with ❤️ using React and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
