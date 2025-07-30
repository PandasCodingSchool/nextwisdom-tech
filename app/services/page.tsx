'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
        </svg>
      ),
      features: ["Responsive Design", "SEO Optimization", "Fast Performance", "Modern UI/UX"]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
        </svg>
      ),
      features: ["Cross-Platform", "Native Performance", "App Store Deployment", "Push Notifications"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      features: ["AWS/Azure Integration", "Auto Scaling", "Data Backup", "24/7 Monitoring"]
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and machine learning",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: ["Data Analytics", "Predictive Models", "Natural Language Processing", "Computer Vision"]
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online store solutions with payment integration and inventory management",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Customer Analytics"]
    },
    {
      title: "Digital Transformation",
      description: "Comprehensive digital transformation strategies and implementation",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      features: ["Process Automation", "Legacy System Migration", "Digital Strategy", "Change Management"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#1e3a8a]">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#0ea5e9] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0ea5e9] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Discovery</h3>
              <p className="text-gray-600">
                Understanding your business needs, goals, and technical requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Planning</h3>
              <p className="text-gray-600">
                Creating detailed project roadmaps, timelines, and resource allocation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0ea5e9] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Development</h3>
              <p className="text-gray-600">
                Agile development with regular updates and client feedback integration
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery</h3>
              <p className="text-gray-600">
                Thorough testing, deployment, and ongoing support for your solution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge tools and frameworks for optimal results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['React', 'Next.js', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL', 'TypeScript', 'Flutter', 'React Native', 'GraphQL'].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#0ea5e9] font-bold text-sm">{tech}</span>
                </div>
                <p className="text-gray-600 text-sm">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Let&apos;s discuss how our services can help transform your business and achieve your goals.
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
