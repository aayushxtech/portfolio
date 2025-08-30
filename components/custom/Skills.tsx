import React from "react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const allSkills = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "AI/ML",
    "TensorFlow",
    "PyTorch",
    "Docker",
    "Git",
    "Node.js",
  ];

  return (
    <section className="w-full bg-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Skills & Tools
          </h2>
          <p className="text-xl text-gray-500 max-w-lg mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {allSkills.map((skill, index) => (
            <Badge
              key={index}
              variant="default"
              className="bg-black text-white rounded-full px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors duration-200 shadow-sm"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
