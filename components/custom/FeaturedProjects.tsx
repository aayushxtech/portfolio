import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const FeaturedProjects = () => {
  const projects = [
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
      title: "DocAIx",
      description:
        "DocAIx is a comprehensive emergency medical guide and first aid platform designed to provide immediate, accessible first aid information during emergencies, with both online and offline capabilities.",
      techStack: ["Next.js", "Express.js", "GroqAPI", "TailwindCSS", "Vercel"],
      liveDemo: "https://docaix.vercel.app/",
      code: "https://github.com/ramswarooppatel/docaix",
      category: "Full Stack",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-4xl lg:text-5xl font-bold text-black text-center sm:text-left">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="mt-2 inline-flex items-center gap-2 text-lg font-medium transition-colors duration-200 px-4 py-2 rounded-md bg-black text-white hover:brightness-90 sm:bg-transparent sm:text-black sm:px-0 sm:py-0 sm:rounded-none sm:hover:underline"
          >
            View All
            <ExternalLink size={20} strokeWidth={2} />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-lg"
            >
              <CardHeader className="p-6">
                <CardTitle className="text-xl font-bold text-black mb-3 leading-tight text-center sm:text-left">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed text-center sm:text-left">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-0">
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center sm:justify-start">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex flex-col items-center gap-2 text-sm sm:flex-row sm:gap-4 sm:items-start">
                  <Link
                    href={project.liveDemo}
                    className="text-black font-medium hover:underline transition-colors duration-200 flex items-center gap-1"
                  >
                    Live Demo
                    <ExternalLink size={16} strokeWidth={2} />
                  </Link>
                  <Link
                    href={project.code}
                    className="text-black font-medium hover:underline transition-colors duration-200 flex items-center gap-1"
                  >
                    Code
                    <Github size={16} strokeWidth={2} />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
