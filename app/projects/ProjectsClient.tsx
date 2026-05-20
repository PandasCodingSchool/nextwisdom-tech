'use client';

import { useState } from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "SmartEdu Platform",
    tagline: "AI-powered e-learning for rural communities",
    description:
      "An accessible e-learning platform with adaptive content delivery, offline-first support, and multilingual interfaces — built to serve students in low-connectivity areas.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "TensorFlow"],
    category: "Education",
    status: "Live",
    color: "#00BFFF",
    liveUrl: "#",
    githubUrl: "#",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: "HealthBridge",
    tagline: "Connecting patients with care, anywhere",
    description:
      "A mobile-first telemedicine platform enabling rural communities to access certified healthcare professionals via video, chat, and AI-assisted symptom screening.",
    techStack: ["React Native", "FastAPI", "MongoDB", "WebRTC"],
    category: "Healthcare",
    status: "Live",
    color: "#FF6A00",
    liveUrl: "#",
    githubUrl: "#",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "AgriSense",
    tagline: "Smart farming intelligence for small-scale farmers",
    description:
      "An IoT-integrated platform providing real-time soil health monitoring, crop disease detection via image AI, and weather-based advisory for smallholder farmers.",
    techStack: ["React", "Python", "MQTT", "TensorFlow Lite"],
    category: "Agriculture",
    status: "Beta",
    color: "#0C1C47",
    liveUrl: "#",
    githubUrl: "#",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    name: "CivicConnect",
    tagline: "Bridging citizens and local governance",
    description:
      "A civic engagement tool allowing citizens to report issues, track resolution progress, and communicate directly with local government representatives.",
    techStack: ["Next.js", "Supabase", "Mapbox", "TypeScript"],
    category: "Governance",
    status: "In Development",
    color: "#00BFFF",
    liveUrl: "#",
    githubUrl: "#",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    id: 5,
    name: "SkillForge",
    tagline: "Vocational upskilling for the modern workforce",
    description:
      "A gamified vocational training platform offering bite-sized skill modules with industry certifications, mentor matching, and job placement assistance.",
    techStack: ["Vue.js", "Django", "Redis", "PostgreSQL"],
    category: "Education",
    status: "Beta",
    color: "#FF6A00",
    liveUrl: "#",
    githubUrl: "#",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    id: 6,
    name: "NexPay",
    tagline: "Micro-finance & digital payments for the unbanked",
    description:
      "A lightweight fintech solution enabling micro-transactions, peer-to-peer lending, and savings groups for communities with limited access to traditional banking.",
    techStack: ["React Native", "Node.js", "Stripe", "Firebase"],
    category: "Fintech",
    status: "In Development",
    color: "#0C1C47",
    liveUrl: "#",
    githubUrl: "#",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const categories = [
  "All",
  "Education",
  "Healthcare",
  "Agriculture",
  "Governance",
  "Fintech",
];

const statusColors: Record<string, string> = {
  Live: "bg-green-100 text-green-700",
  Beta: "bg-yellow-100 text-yellow-700",
  "In Development": "bg-blue-100 text-blue-700",
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-[#FAF9F7] overflow-hidden py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00BFFF] bg-opacity-20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#FF6A00] bg-opacity-20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#0C1C47] bg-opacity-20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#0C1C47] mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#0C1C47]">
              In-House Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Products we have built from the ground up — driven by purpose,
            powered by technology, and designed to create lasting impact.
          </p>
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#0C1C47]">
                {projects.length}
              </div>
              <div className="text-gray-500 text-sm">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0C1C47]">
                {projects.filter((p) => p.status === "Live").length}
              </div>
              <div className="text-gray-500 text-sm">Live</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0C1C47]">
                {categories.length - 1}
              </div>
              <div className="text-gray-500 text-sm">Domains</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#00BFFF] to-[#0C1C47] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Card Header */}
                <div
                  className="p-6 flex items-start justify-between"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}18, ${project.color}08)`,
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.icon}
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColors[project.status]}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div
                    className="text-xs font-semibold uppercase tracking-wide mb-1"
                    style={{ color: project.color }}
                  >
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-[#0C1C47] mb-1">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-500 italic mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-6">
                    <a
                      href={project.liveUrl}
                      className="flex-1 text-center text-sm font-semibold text-white py-2 rounded-full transition-all duration-200 hover:shadow-md hover:scale-105"
                      style={{ backgroundColor: project.color }}
                    >
                      View Project
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                      aria-label="GitHub"
                    >
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0C1C47] to-[#1a1a2e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Have an Idea We Should Build?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            We are always looking for meaningful problems to solve. Reach out
            and let&apos;s build something impactful together.
          </p>
          <Link
            href="/contact"
            className="bg-[#00BFFF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#FF6A00] transform hover:scale-105 transition-all duration-300 inline-block"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </div>
  );
}
