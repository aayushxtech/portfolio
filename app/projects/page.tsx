"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allProjects = [
    {
      title: "F1 Embed",
      description:
        "F1-Embed is a Transformer-based deep learning system that generates compact, high-dimensional vector representations (embeddings) of complete Formula 1 racing laps using raw telemetry data streams.",
      techStack: [
        "Python",
        "PyTorch",
        "FastAPI",
        "NumPy",
        "pandas",
        "scikit-learn",
        "FastF1",
        "Jupyter",
      ],
      liveDemo: "https://f1-embed.onrender.com",
      code: "https://github.com/aayushxtech/f1-embed",
      category: "Data Science",
    },
    {
      title: "F1 Lap Prediction",
      description:
        "Built a F1 race analytics tool that calculates and visualizes lap deltas using LSTM.",
      techStack: ["Python", "PyTorch", "NumPy", "FastF1", "Pandas", "Jupyter"],
      liveDemo: "#",
      code: "https://github.com/aayushxtech/F1-laptime-prediction",
      category: "Data Science",
    },
    {
      title: "QuickDraw CNN Classifier",
      description:
        "Implemented a Convolutional Neural Network (CNN) trained on Google's QuickDraw dataset to classify hand-drawn sketches with high accuracy.",
      techStack: ["Python", "Pandas", "Matplotlib", "PyTorch", "NumPy"],
      liveDemo: "#",
      code: "https://github.com/aayushxtech/quickdraw-cnn-classifier",
      category: "AI/ML",
    },
    {
      title: "UnSaid",
      description:
        "Designed a platform focused to teach sex education in a gameified way and promote healthy conversations around the topic.",
      techStack: ["Next.js", "Express", "Supabase", "TailwindCSS"],
      liveDemo: "https://unsaid-ed.vercel.app/",
      code: "https://github.com/aayushxtech/Unsaid",
      category: "Full Stack",
    },
    {
      title: "DocAIx",
      description:
        "DocAIx is a comprehensive emergency medical guide and first aid platform designed to provide immediate, accessible first aid information during emergencies, with both online and offline capabilities.",
      techStack: ["Next.js", "Express.js", "GroqAPI", "TailwindCSS", "Vercel"],
      liveDemo: "https://docaix.vercel.app/",
      code: "https://github.com/ramswarooppatel/docaix",
      category: "Full Stack",
    },
  ];

  const categories = [
    {
      name: "All",
      count: allProjects.length,
    },
    {
      name: "AI/ML",
      count: allProjects.filter((p) => p.category === "AI/ML").length,
    },
    {
      name: "Full Stack",
      count: allProjects.filter((p) => p.category === "Full Stack").length,
    },
    {
      name: "Data Science",
      count: allProjects.filter((p) => p.category === "Data Science").length,
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section with Visual Elements */}
        <section className="w-full bg-white py-12 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
          {/* Background Pattern - hidden on small screens to avoid overflow/alignment issues */}
          <div className="hidden sm:block absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 border-2 border-black rounded-full"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-black rounded-lg rotate-12"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-black rotate-45"></div>
            <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-black rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            {/* Visual Title Enhancement */}
            <div className="mb-8">
              <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-black mb-4 tracking-tight">
                My Projects
              </h1>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-8 h-px bg-black"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
              A collection of projects showcasing my skills in web development,
              artificial intelligence, and software engineering. Each project
              represents a unique challenge and learning experience.
            </p>

            {/* Stats Display */}
            <div className="flex justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-black">
                  {allProjects.length}+
                </div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-black">
                  {categories.length - 1}
                </div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Visual Break */}
        <div className="w-full py-4 bg-gradient-to-r from-transparent via-gray-100 to-transparent">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>

        {/* Projects Grid */}
        <section className="w-full bg-gray-50 py-12 sm:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Category Filter */}
            <div className="mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className="w-8 h-1 bg-black mr-4"></div>
                <h2 className="text-2xl font-bold text-black">
                  Filter by Category
                </h2>
                <div className="w-8 h-1 bg-black ml-4"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`group px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.name
                        ? "bg-black text-white shadow-lg scale-105"
                        : "bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md border border-gray-200"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {category.name}
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          selectedCategory === category.name
                            ? "bg-white/20 text-white"
                            : "bg-gray-200 text-gray-600 group-hover:bg-gray-300"
                        }`}
                      >
                        {category.count}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid with Enhanced Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group bg-white border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-xl overflow-hidden relative"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Enhanced Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <CardHeader className="p-4 sm:p-6 relative z-10">
                    {/* Category Badge */}
                    <div className="flex items-center justify-end mb-4">
                      <span className="bg-black text-white text-xs font-semibold px-3 py-2 rounded-full shadow-md">
                        {project.category}
                      </span>
                    </div>

                    <CardTitle className="text-xl font-bold text-black mb-3 leading-tight group-hover:text-gray-800 transition-colors duration-300">
                      {project.title}
                    </CardTitle>

                    <CardDescription className="text-gray-600 leading-relaxed text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="px-4 sm:px-6 pb-6 pt-0 relative z-10">
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-2 rounded-full hover:bg-gray-200 transition-colors duration-200 cursor-default border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Enhanced Action Links */}
                    <div className="flex gap-6 text-sm">
                      <Link
                        href={project.liveDemo}
                        className="text-black font-semibold hover:text-gray-600 transition-all duration-200 flex items-center gap-2 relative group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"></span>
                        Live Demo
                        <ExternalLink
                          size={16}
                          strokeWidth={2}
                          className="group-hover/link:translate-x-1 transition-transform duration-200"
                        />
                      </Link>
                      <Link
                        href={project.code}
                        className="text-black font-semibold hover:text-gray-600 transition-all duration-200 flex items-center gap-2 relative group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"></span>
                        Code
                        <Github
                          size={16}
                          strokeWidth={2}
                          className="group-hover/link:scale-110 transition-transform duration-200"
                        />
                      </Link>
                    </div>
                  </CardContent>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-black via-gray-400 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </Card>
              ))}
            </div>

            {/* Bottom Visual Element */}
            <div className="mt-12 sm:mt-20 flex justify-center">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-black rounded-full animate-pulse"></div>
                <div className="w-24 h-1 bg-gradient-to-r from-black via-gray-400 to-black"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
