import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 border-2 border-black rounded-lg flex items-center justify-center text-black font-bold text-xl shadow-sm">
            ★
          </div>
          <span className="text-black font-bold text-xl tracking-tight">
            aayushxtech
          </span>
        </div>

        {/* Desktop Nav Links - Centered */}
        <div className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
          <Link
            href="/"
            className="text-black font-medium text-sm uppercase tracking-wide hover:underline hover:underline-offset-4 transition-all duration-300 py-2 px-3 rounded-md hover:bg-gray-50"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-black font-medium text-sm uppercase tracking-wide hover:underline hover:underline-offset-4 transition-all duration-300 py-2 px-3 rounded-md hover:bg-gray-50"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-black font-medium text-sm uppercase tracking-wide hover:underline hover:underline-offset-4 transition-all duration-300 py-2 px-3 rounded-md hover:bg-gray-50"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-black font-medium text-sm uppercase tracking-wide hover:underline hover:underline-offset-4 transition-all duration-300 py-2 px-3 rounded-md hover:bg-gray-50"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center w-10 h-10 border-2 border-black rounded-lg text-black hover:bg-gray-50 transition-all duration-200 shadow-sm"
          aria-label="Toggle menu"
        >
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className={`transform transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : ""
            }`}
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Spacer for centering on desktop */}
        <div className="hidden md:block w-9 h-9"></div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <Link
            href="#"
            className="block text-black font-medium text-base hover:underline hover:underline-offset-4 transition-all duration-200 py-2 px-3 rounded-md hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="#"
            className="block text-black font-medium text-base hover:underline hover:underline-offset-4 transition-all duration-200 py-2 px-3 rounded-md hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            href="#"
            className="block text-black font-medium text-base hover:underline hover:underline-offset-4 transition-all duration-200 py-2 px-3 rounded-md hover:bg-gray-50"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="#"
            className="block text-black font-medium text-base hover:underline hover:underline-offset-4 transition-all duration-200 py-2 px-3 rounded-md hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
