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
          I&apos;m a developer passionate about Artificial Intelligence and
          Machine Learning, always exploring how technology can solve real-world
          problems. My journey so far has been a mix of learning, experimenting,
          and building projects that challenge me to think differently. I thrive
          in collaborative, creative spaces where ideas can turn into code and
          then into something people actually use. From full-stack development
          to deep learning, I enjoy pushing myself to bridge tech with
          impact—always keeping things practical, useful, and human-focused.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 shadow-lg"
            aria-label="More About Me"
          >
            <User size={20} strokeWidth={2} />
            More About Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
