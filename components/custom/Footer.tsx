import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-6">
        {/* Name/Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 border-2 border-white rounded-lg flex items-center justify-center text-white font-bold text-xl overflow-hidden">
            <Image
              src="/icon.ico"
              alt="Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">
            aayushxtech
          </span>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-6">
          <Link
            href="#"
            className="text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={24} className="text-current" />
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} className="text-current" />
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="Twitter"
          >
            <Twitter size={24} className="text-current" />
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram size={24} className="text-current" />
          </Link>
        </div>
      </div>

      {/* Bottom Border/Copyright */}
      <div className="border-t border-gray-800 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} aayushxtech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
