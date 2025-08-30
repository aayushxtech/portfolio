import React from "react";
import Link from "next/link";
import { User } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="w-full bg-gray-50 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
          About Me
        </h2>

        {/* About Description */}
        <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mb-12">
          I am a dedicated developer with a keen interest in Artificial
          Intelligence and Machine Learning. My journey involves continuous
          learning and practical application of technologies to solve complex
          problems across various domains. I thrive in environments that
          encourage innovation, collaboration, and a relentless pursuit of
          excellence. My expertise spans full-stack development, data science,
          and deep learning, always focusing on creating impactful and
          user-centric solutions.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 shadow-lg"
            aria-label="Learn more about me"
          >
            <User size={20} strokeWidth={2} />
            Learn More About Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
