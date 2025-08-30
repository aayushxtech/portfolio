"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {
  GraduationCap,
  Calendar,
  Github,
  Linkedin,
  Twitter,
  Download,
  Mail,
  Trophy,
} from "lucide-react";

const About = () => {
  const academicAchievements = [
    {
      title: "Bachelor of Technology",
      institution: "SRM Institute of Science and Technology, Chennai",
      year: "2024-2028",
      grade: "9.28 CGPA",
      description: "Computer Science & Engineering",
    },
    {
      title: "3x Hackathon Winner",
      institution: "National Level Hackathons",
      year: "2024-2025",
      grade: "",
      description:
        "Won multiple hackathons showcasing innovative solutions in AI/ML and web development",
    },
  ];

  const experiences = [
    {
      title: "Head of Technology",
      company: "Pragati E-Cell",
      duration: "July 2025 - Present",
      description:
        "Developed responsive web applications using React, Next.js, and Node.js, collaborated with cross-functional teams to deliver user-centric solutions.",
      technologies: [
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Express.js",
        "Django",
      ],
    },
    {
      title: "Technical Member",
      company: "NextGen Intelligence Club",
      duration: "December 2024 - Present",
      description: "Made a modern website using Next.js.",
      technologies: ["Next.js", "Tailwind CSS"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header Section with Visual Elements */}
        <section className="w-full bg-white py-32 px-6 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 border-2 border-black rounded-full"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-black rounded-lg rotate-12"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-black rotate-45"></div>
            <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-black rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-8 border-4 border-black rounded-full flex items-center justify-center bg-white shadow-lg overflow-hidden">
                <Image
                  src="/profile-pic.jpg"
                  alt="My Image"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-black mb-6 tracking-tight">
              About Me
            </h1>
            <p className="text-xl text-gray-600 font-medium uppercase tracking-widest">
              AI/ML ENTHUSIAST & SOFTWARE DEVELOPER
            </p>
          </div>
        </section>

        {/* Introduction Section with Visual Break */}
        <section className="w-full bg-gray-50 py-24 px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-12">
              <div className="w-12 h-1 bg-black mr-6"></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black">
                My Journey
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  My journey as a software developer began unexpectedly after
                  class 12th, when I was just sitting at home with no clear
                  direction. That&apos;s when my sister, noticing my idle time,
                  encouraged me to start learning Python. Little did I know that
                  this small nudge would ignite a deep fascination for
                  technology and its potential to solve real-world problems.
                  Over time, my curiosity grew into a full-blown passion, and I
                  found myself diving into full-stack development and AI/ML
                  engineering.
                </p>
                <p>
                  What truly drives me is the sweet spot where creativity meets
                  logic — building applications that not only work flawlessly
                  but also provide real value to users. I&apos;m a firm believer
                  in the power of clean, efficient code, thoughtful design, and
                  continuous learning to craft solutions that truly make a
                  difference.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="text-3xl font-bold text-black mb-2">1.5+</div>
                  <div className="text-sm text-gray-600">
                    Years of Experience
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="text-3xl font-bold text-black mb-2">5+</div>
                  <div className="text-sm text-gray-600">
                    Projects Completed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Achievements Section */}
        <section className="w-full bg-white py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-16">
              <div className="w-12 h-1 bg-black mr-6"></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black text-center">
                Achievements
              </h2>
              <div className="w-12 h-1 bg-black ml-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {academicAchievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl group"
                >
                  <CardHeader className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                        {achievement.title.includes("Hackathon") ? (
                          <Trophy size={24} color="white" />
                        ) : (
                          <GraduationCap size={24} color="white" />
                        )}
                      </div>
                      <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                        <Calendar size={14} className="mr-1" />
                        {achievement.year}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-black mb-2">
                      {achievement.title}
                    </CardTitle>
                    <div className="text-sm text-gray-600 mb-1">
                      {achievement.institution}
                    </div>
                    <div className="text-lg font-semibold text-black mb-2">
                      {achievement.grade}
                    </div>
                    <CardDescription className="text-gray-600">
                      {achievement.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="w-full bg-gray-50 py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-16">
              <div className="w-12 h-1 bg-black mr-6"></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black text-center">
                Experience
              </h2>
              <div className="w-12 h-1 bg-black ml-6"></div>
            </div>
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <Card
                  key={index}
                  className="bg-white border-l-4 border-l-black shadow-lg hover:shadow-xl transition-all duration-300 rounded-r-xl group"
                >
                  <CardHeader className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <CardTitle className="text-2xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors duration-300">
                          {experience.title}
                        </CardTitle>
                        <div className="flex items-center gap-4 text-gray-600 mb-2">
                          <span className="font-semibold">
                            {experience.company}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-600 bg-gray-100 px-4 py-2 rounded-full lg:ml-4">
                        <Calendar size={16} className="mr-1" />
                        {experience.duration}
                      </div>
                    </div>
                    <CardDescription className="text-gray-700 text-base leading-relaxed mb-6">
                      {experience.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-black text-white text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section with Visual Elements */}
        <section className="w-full bg-white py-24 px-6 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-10 w-40 h-40 border border-black rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-black rounded-lg rotate-12"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="w-16 h-1 bg-black mx-auto mb-8"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities, innovative
              projects, or just having a conversation about technology and its
              possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/aayush-samal-resume.pdf"
                download="aayush-samal-resume.pdf"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 hover:scale-105 transition-all duration-200 shadow-lg group"
              >
                <Download
                  size={20}
                  strokeWidth={2}
                  className="group-hover:animate-bounce"
                />
                Download Résumé
              </a>
              <Link
                href="mailto:aayushxtech@gmail.com"
                className="inline-flex items-center gap-3 border-2 border-black text-black px-8 py-4 rounded-lg font-medium hover:bg-black hover:text-white hover:scale-105 transition-all duration-200 group"
              >
                <Mail
                  size={20}
                  strokeWidth={2}
                  className="group-hover:animate-pulse"
                />
                Get In Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="w-full bg-gray-50 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-black mb-8">
              Connect With Me
            </h3>
            <div className="flex justify-center gap-8">
              <Link
                href="https://github.com/aayushxtech"
                className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-black hover:text-white hover:bg-black hover:border-black transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://linkedin.com/in/aayush-samal"
                className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-black hover:text-white hover:bg-black hover:border-black transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="https://x.com/AayushxTech"
                className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-black hover:text-white hover:bg-black hover:border-black transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="X/Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={24} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
