"use client";

import React from "react";
import Link from "next/link";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const ContactMe = () => {
  return (
    <section className="w-full bg-gray-50 py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="relative bg-white border-2 border-gray-200 rounded-xl shadow-lg p-12 overflow-hidden">
          {/* Subtle Gradient Accent */}
          <div className="absolute -top-16 -left-16 w-56 h-56 bg-gradient-to-br from-black/10 via-indigo-200/30 to-transparent rounded-full blur-2xl z-0 pointer-events-none animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr from-indigo-100/40 via-black/10 to-transparent rounded-full blur-xl z-0 pointer-events-none"></div>

          {/* Animated Mail Icon */}
          <div className="flex justify-center mb-8 relative z-10">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black/90 shadow-lg animate-bounce-slow">
              <Mail size={32} strokeWidth={2} color="white" />
            </span>
          </div>

          {/* Header */}
          <div className="text-center mb-8 relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
              Let&apos;s Connect
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-black via-white to-black rounded-full" />
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Always open to learning, sharing, and building with others. If
              you&apos;ve got something to talk about — whether it’s a project,
              collaboration, or just curiosity — feel free to reach out.
              I&apos;ll do my best to reply.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center mb-12 relative z-10">
            <p className="text-gray-600 text-lg mb-2">
              Email:{" "}
              <Link
                href="mailto:aayushxtech@gmail.com"
                className="text-black underline hover:no-underline font-medium"
              >
                aayushxtech@gmail.com
              </Link>
            </p>
            <div className="flex justify-center gap-8 mt-8">
              <Link
                href="https://github.com/aayushxtech"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-black hover:text-gray-600 transition-colors duration-200"
                aria-label="GitHub"
              >
                <span className="inline-block group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                  <Github size={32} strokeWidth={2} />
                </span>
              </Link>
              <Link
                href="https://linkedin.com/in/aayush-samal"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-black hover:text-gray-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <span className="inline-block group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                  <Linkedin size={32} strokeWidth={2} />
                </span>
              </Link>
              <Link
                href="https://x.com/AayushxTech"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-black hover:text-gray-600 transition-colors duration-200"
                aria-label="X/Twitter"
              >
                <span className="inline-block group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                  <Twitter size={32} strokeWidth={2} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Tailwind custom animation for bounce-slow */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.8s infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactMe;
