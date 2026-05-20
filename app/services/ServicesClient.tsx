"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const techCategories = [
  {
    label: "Frontend",
    color: "#00BFFF",
    techs: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript/3178C6",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      },
      { name: "Vue.js", icon: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
      { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
    ],
  },
  {
    label: "Backend",
    color: "#FF6A00",
    techs: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
      { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
      { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098" },
      {
        name: "React Native",
        icon: "https://cdn.simpleicons.org/react/61DAFB",
      },
    ],
  },
  {
    label: "Database",
    color: "#0C1C47",
    techs: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.simpleicons.org/postgresql/4169E1",
      },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "Redis", icon: "https://cdn.simpleicons.org/redis/FF4438" },
      { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3FCF8E" },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
    ],
  },
  {
    label: "Cloud & DevOps",
    color: "#00BFFF",
    techs: [
      { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/FF9900" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      {
        name: "Kubernetes",
        icon: "https://cdn.simpleicons.org/kubernetes/326CE5",
      },
      {
        name: "GitHub Actions",
        icon: "https://cdn.simpleicons.org/githubactions/2088FF",
      },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" },
      { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx/009639" },
    ],
  },
  {
    label: "AI & ML",
    color: "#FF6A00",
    techs: [
      {
        name: "TensorFlow",
        icon: "https://cdn.simpleicons.org/tensorflow/FF6F00",
      },
      { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
      { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/000000" },
      {
        name: "Hugging Face",
        icon: "https://cdn.simpleicons.org/huggingface/FFD21E",
      },
      {
        name: "scikit-learn",
        icon: "https://cdn.simpleicons.org/scikitlearn/F7931E",
      },
      {
        name: "LangChain",
        icon: "https://cdn.simpleicons.org/langchain/1C3C3C",
      },
    ],
  },
];

function TechSection() {
  const [activeTab, setActiveTab] = useState(techCategories[0].label);
  const active = techCategories.find((c) => c.label === activeTab)!;

  return (
    <section className="py-20 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0C1C47] mb-4">
            Technologies We Use
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A modern, battle-tested stack across every layer of the product
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {techCategories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(cat.label)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                activeTab === cat.label
                  ? "text-white shadow-md scale-105"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
              }`}
              style={
                activeTab === cat.label ? { backgroundColor: cat.color } : {}
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {active.techs.map((tech) => (
            <div
              key={tech.name}
              className="bg-white rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center leading-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Summary bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
          {techCategories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(cat.label)}
              className={`rounded-xl p-4 text-center transition-all duration-200 border-2 ${
                activeTab === cat.label
                  ? "border-opacity-100"
                  : "border-transparent bg-white"
              }`}
              style={
                activeTab === cat.label
                  ? {
                      borderColor: cat.color,
                      backgroundColor: `${cat.color}10`,
                    }
                  : {}
              }
            >
              <div className="text-2xl font-bold" style={{ color: cat.color }}>
                {cat.techs.length}+
              </div>
              <div className="text-xs text-gray-500 mt-1">{cat.label}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks like React, Next.js, and Node.js",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
          />
        </svg>
      ),
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Fast Performance",
        "Modern UI/UX",
      ],
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
          />
        </svg>
      ),
      features: [
        "Cross-Platform",
        "Native Performance",
        "App Store Deployment",
        "Push Notifications",
      ],
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
          />
        </svg>
      ),
      features: [
        "AWS/Azure Integration",
        "Auto Scaling",
        "Data Backup",
        "24/7 Monitoring",
      ],
    },
    {
      title: "AI & Machine Learning",
      description:
        "Intelligent solutions powered by artificial intelligence and machine learning",
      icon: (
        <svg
          className="w-8 h-8"
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
      features: [
        "Data Analytics",
        "Predictive Models",
        "Natural Language Processing",
        "Computer Vision",
      ],
    },
    {
      title: "E-commerce Solutions",
      description:
        "Complete online store solutions with payment integration and inventory management",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
      features: [
        "Payment Gateway",
        "Inventory Management",
        "Order Tracking",
        "Customer Analytics",
      ],
    },
    {
      title: "Digital Transformation",
      description:
        "Comprehensive digital transformation strategies and implementation",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      features: [
        "Process Automation",
        "Legacy System Migration",
        "Digital Strategy",
        "Change Management",
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#1e3a8a]">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your
              business growth and digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#0ea5e9] to-[#1e3a8a] rounded-xl flex items-center justify-center mb-6 text-white">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-[#0ea5e9] mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0ea5e9] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Discovery
              </h3>
              <p className="text-gray-600">
                Understanding your business needs, goals, and technical
                requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Planning</h3>
              <p className="text-gray-600">
                Creating detailed project roadmaps, timelines, and resource
                allocation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0ea5e9] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Development
              </h3>
              <p className="text-gray-600">
                Agile development with regular updates and client feedback
                integration
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery</h3>
              <p className="text-gray-600">
                Thorough testing, deployment, and ongoing support for your
                solution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <TechSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Let&apos;s discuss how our services can help transform your business
            and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#0ea5e9] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0284c7] transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="border-2 border-[#0ea5e9] text-[#0ea5e9] px-8 py-4 rounded-full font-semibold hover:bg-[#0ea5e9] hover:text-white transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
