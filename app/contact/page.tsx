"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-white py-32 px-6 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 border-2 border-black rounded-full"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-black rounded-lg rotate-12"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-black rotate-45"></div>
            <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-black rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
            <h1 className="text-5xl lg:text-7xl font-bold text-black mb-6 tracking-tight">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 font-medium uppercase tracking-widest">
              LET&apos;S WORK TOGETHER
            </p>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="w-full bg-gray-50 py-32 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-white border-2 border-gray-200 rounded-xl shadow-lg p-12 overflow-hidden">
              {/* Subtle background elements */}
              <div className="absolute top-4 right-4 w-8 h-8 border border-gray-200 rounded-full opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-gray-100 rounded rotate-45 opacity-50"></div>

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
                  <div className="w-16 h-1 bg-gradient-to-r from-black to-black rounded-full" />
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  I&apos;m always open to new opportunities, collaborations, or
                  just a friendly chat about tech, AI/ML, or anything
                  interesting. Reach out to me directly via email or connect on
                  my socials below!
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
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
