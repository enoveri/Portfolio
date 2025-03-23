import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCode,
  FaTools,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle active section detection only (removed scroll effect)
  useEffect(() => {
    const handleScroll = () => {
      // Active section detection
      const sections = ["home", "about", "projects", "skills", "contact"];
      const currentPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= currentPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // Prevent body scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  // Close menu when clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  // NavLink component for consistent styling
  const NavLink = ({ href, icon, children, isMobile = false }) => {
    const isActive = activeSection === href.substring(1);
    const baseClasses = "transition flex items-center gap-2";

    const desktopClasses = `${baseClasses} ${
      isActive
        ? "text-[var(--secondary)] font-medium"
        : "text-[var(--text)] hover:text-[var(--secondary)]"
    }`;

    const mobileClasses = `${baseClasses} block py-3 border-b border-gray-800 ${
      isActive
        ? "text-[var(--secondary)] font-medium"
        : "text-[var(--text)] hover:text-[var(--secondary)]"
    }`;

    return (
      <a
        href={href}
        className={isMobile ? mobileClasses : desktopClasses}
        onClick={isMobile ? closeMenu : undefined}
      >
        {React.cloneElement(icon, {
          className: `${
            isActive ? "text-[var(--secondary)]" : "text-[var(--accent)]"
          }`,
        })}
        {children}
      </a>
    );
  };

  return (
    <nav className="fixed w-full z-50 bg-[var(--primary)] shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[var(--secondary)]">
          Mutaawe Enock<span className="text-[var(--accent)]">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="#home" icon={<FaHome />}>
            Home
          </NavLink>
          <NavLink href="#about" icon={<FaUser />}>
            About
          </NavLink>
          <NavLink href="#projects" icon={<FaCode />}>
            Projects
          </NavLink>
          <NavLink href="#skills" icon={<FaTools />}>
            Skills
          </NavLink>
          <NavLink href="#contact" icon={<FaEnvelope />}>
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--text)] focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6 text-[var(--secondary)]" />
          ) : (
            <FaBars className="h-6 w-6 text-[var(--secondary)]" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-500 ease-in-out md:hidden ${
            isMenuOpen
              ? "opacity-10 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
        ></div>

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-[var(--primary)] bg-opacity-95 backdrop-blur-sm shadow-xl transform transition-transform duration-500 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 space-y-6 mt-16">
            <div className="border-b border-gray-700 pb-4 mb-4">
              <div className="text-xl font-bold text-[var(--secondary)] mb-2">
                Mutaawe Enock<span className="text-[var(--accent)]">.</span>
              </div>
              <p className="text-sm text-gray-400">
                Web Developer | Data Scientist | Engineer
              </p>
            </div>

            <NavLink href="#home" icon={<FaHome />} isMobile>
              Home
            </NavLink>
            <NavLink href="#about" icon={<FaUser />} isMobile>
              About
            </NavLink>
            <NavLink href="#projects" icon={<FaCode />} isMobile>
              Projects
            </NavLink>
            <NavLink href="#skills" icon={<FaTools />} isMobile>
              Skills
            </NavLink>
            <NavLink href="#contact" icon={<FaEnvelope />} isMobile>
              Contact
            </NavLink>

            <div className="pt-6">
              <a
                href="#contact"
                onClick={closeMenu}
                className="btn-primary w-full text-center block"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
