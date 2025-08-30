import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Twitter, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full bg-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Small Text */}
            <p className="text-sm lg:text-base font-medium text-gray-600 uppercase tracking-widest">
              BUILD. BREAK. LEARN.
            </p>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold text-black leading-tight">
              Aayush Samal —<br />
              Developer,
              <br />
              AI/ML Enthusiast
            </h1>

            {/* Paragraph */}
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I build because I&apos;m curious. From web dev to AI/ML, I enjoy
              building things, breaking them apart, and putting them back
              together better and smarter each time.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-4 justify-center lg:justify-start">
              <Link
                href="/projects"
                className="bg-black text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-center text-base lg:text-lg"
              >
                View Projects
              </Link>
              <a
                href="/aayush-samal-resume.pdf"
                download="aayush-samal-resume.pdf"
                className="inline-flex items-center justify-center gap-3 bg-black text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-medium hover:bg-gray-800 hover:scale-105 transition-all duration-200 shadow-lg group text-base lg:text-lg"
              >
                <Download
                  size={20}
                  strokeWidth={2}
                  className="group-hover:animate-bounce"
                />
                Download Résumé
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center space-y-6 lg:space-y-8 mt-8 lg:mt-0">
            <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] border-2 border-black rounded-xl bg-white shadow-sm relative">
              <Image
                src="/profile-pic.jpg"
                alt="My Image"
                fill
                objectFit="cover"
                className="rounded-xl"
              />
            </div>

            {/* Social Icons - Centered under the box */}
            <div className="flex gap-4 lg:gap-6 justify-center">
              <Link
                href="https://github.com/aayushxtech"
                className="group text-black hover:text-gray-600 transition-colors duration-200"
                aria-label="GitHub"
              >
                <span className="inline-block group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                  <Github size={24} className="lg:w-7 lg:h-7" strokeWidth={2} />
                </span>
              </Link>
              <Link
                href="https://linkedin.com/in/aayush-samal"
                className="group text-black hover:text-gray-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <span className="inline-block group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                  <Linkedin
                    size={24}
                    className="lg:w-7 lg:h-7"
                    strokeWidth={2}
                  />
                </span>
              </Link>
              <Link
                href="https://x.com/AayushxTech"
                className="group text-black hover:text-gray-600 transition-colors duration-200"
                aria-label="X/Twitter"
              >
                <span className="inline-block group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                  <Twitter
                    size={24}
                    className="lg:w-7 lg:h-7"
                    strokeWidth={2}
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
