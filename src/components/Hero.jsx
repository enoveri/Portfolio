import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaCogs,
  FaDatabase,
  FaMicrochip,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiArduino,
} from "react-icons/si";

const Hero = () => {
  return (
    <section id="home" className="hero-gradient pt-32 pb-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="grid-pattern p-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-[var(--secondary)]">Enov3ri</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-gray-300">
            Web Developer | Data Scientist | Mechanical Engineer
          </h2>
          <p className="text-lg mb-8 text-gray-300 max-w-lg">
            I build modern, responsive web applications, analyze data for
            insights, and design mechanical systems. Let's create something
            amazing together.
          </p>
          <div className="flex space-x-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-[var(--secondary)] text-[var(--secondary)] font-semibold py-3 px-6 rounded-lg hover:bg-[var(--secondary)] hover:bg-opacity-10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-[var(--accent)] bg-opacity-20 absolute top-4 left-4"></div>
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[var(--secondary)] relative z-10 accent-glow">
              <div className="w-full h-full bg-[var(--card-bg)] flex items-center justify-center text-[var(--secondary)]">
                <img
                  src="/Profile.JPG"
                  alt="Profile"
                  className="w-full h-full object-cover object-top"
                  style={{ objectPosition: "center 15%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-20">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 py-8 border-t border-gray-700">
          <div className="text-gray-400 text-lg">Tech Stack:</div>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-gray-300 font-medium flex items-center gap-2">
              <FaReact className="text-[#61DAFB] text-xl" />
              React
            </div>
            <div className="text-gray-300 font-medium flex items-center gap-2">
              <SiNextdotjs className="text-white text-xl" />
              Next.js
            </div>
            <div className="text-gray-300 font-medium flex items-center gap-2">
              <SiTypescript className="text-[#3178C6] text-xl" />
              TypeScript
            </div>
            <div className="text-gray-300 font-medium flex items-center gap-2">
              <SiTailwindcss className="text-[#38B2AC] text-xl" />
              Tailwind CSS
            </div>
            <div className="text-gray-300 font-medium flex items-center gap-2">
              <SiPython className="text-[#3776AB] text-xl" />
              Python
            </div>
            <div className="text-gray-300 font-medium flex items-center gap-2">
              <FaDatabase className="text-[#00758F] text-xl" />
              SQL
            </div>
            <div className="text-gray-300 font-medium flex items-center gap-2">
              <SiArduino className="text-[#00979D] text-xl" />
              Arduino
            </div>
            <div className="text-gray-300 font-medium flex items-center gap-2">
              <FaCogs className="text-[#FF0000] text-xl" />
              SolidWorks
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
