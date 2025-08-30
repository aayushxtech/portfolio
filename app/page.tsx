"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import Hero from "@/components/custom/Hero";
import FeaturedProjects from "@/components/custom/FeaturedProjects";
import Skills from "@/components/custom/Skills";
import AboutMe from "@/components/custom/AboutMe";
import ContactMe from "@/components/custom/ContactMe";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  // Refs for subtle section animations
  const heroRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Subtle scroll-triggered animations for each section
    const sections = [
      heroRef.current,
      featuredRef.current,
      skillsRef.current,
      aboutRef.current,
      contactRef.current,
    ].filter(Boolean);

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // (Removed continuous rotate and pulse animations to reduce motion)

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-4 sm:px-0">
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={featuredRef}>
          <FeaturedProjects />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={aboutRef}>
          <AboutMe />
        </div>
        <div ref={contactRef}>
          <ContactMe />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
