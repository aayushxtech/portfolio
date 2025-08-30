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

import { InertiaPlugin } from "gsap/InertiaPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(
  InertiaPlugin,
  MotionPathPlugin,
  Physics2DPlugin,
  ScrollToPlugin,
  ScrollTrigger
);

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

    // Gentle rotation animation for decorative elements (if any exist)
    gsap.to(".rotate-element", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });

    // Subtle scale pulse for interactive elements
    gsap.to(".pulse-element", {
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
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
