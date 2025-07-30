'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-[#0C1C47] mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#0C1C47]">Nextwisdom Tech</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are passionate technologists dedicated to creating innovative solutions that transform businesses and drive digital evolution.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to bridge the gap between cutting-edge technology and practical business solutions, 
                Nextwisdom Tech has grown from a small team of passionate developers to a leading software company.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began with a simple belief: technology should empower businesses, not complicate them. 
                Today, we continue to uphold this philosophy while pushing the boundaries of what&apos;s possible in the digital realm.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0ea5e9]">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0ea5e9]">25+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0ea5e9]">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/nextwisdom-logo.png"
                  alt="About Nextwisdom Tech"
                  width={500}
                  height={400}
                  className="object-contain w-full h-full p-8 bg-[#FAF9F7] border border-gray-100"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#00BFFF] rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Goals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision Statement */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0C1C47] mb-8">🔮 Vision Statement</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                To harness the power of technology to create inclusive, sustainable, and transformative solutions that 
                uplift communities, bridge digital divides, and improve lives across the globe.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0C1C47] mb-8">🎯 Mission Statement</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                Our mission is to develop and support socially-driven digital solutions that address real-world challenges 
                in areas like education, healthcare, and employment. We aim to collaborate with communities, empower individuals 
                through knowledge and tools, and build a future where technology serves humanity at every level.
              </p>
            </div>
          </div>

          {/* Goals */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0C1C47] mb-8">🏆 Goals</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Goal 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00BFFF] to-[#0C1C47] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0C1C47] mb-4">Develop Impactful Technology</h3>
              <p className="text-gray-600">
                Build open-source or affordable software platforms that solve critical problems in underserved areas 
                (e.g., education access, health services, job opportunities).
              </p>
            </div>

            {/* Goal 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6A00] to-[#0C1C47] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0C1C47] mb-4">Empower Through Education</h3>
              <p className="text-gray-600">
                Provide mentorship, training, and learning opportunities for students, especially in rural and 
                marginalized communities.
              </p>
            </div>

            {/* Goal 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00BFFF] to-[#FF6A00] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0C1C47] mb-4">Foster Inclusive Innovation</h3>
              <p className="text-gray-600">
                Collaborate with NGOs, local governments, and grassroots innovators to co-create tech that 
                reflects real needs.
              </p>
            </div>

            {/* Goal 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0C1C47] to-[#00BFFF] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0C1C47] mb-4">Promote Ethical AI & Digital Access</h3>
              <p className="text-gray-600">
                Create transparent, fair, and inclusive AI solutions while advocating for broader access to 
                digital tools and internet connectivity.
              </p>
            </div>
          </div>

          {/* Goal 5 - Full Width */}
          <div className="mt-8">
            <div className="bg-gradient-to-r from-[#00BFFF] to-[#0C1C47] p-8 rounded-2xl shadow-lg text-white">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Sustain and Scale Social Impact</h3>
                  <p className="text-white/90">
                    Build a self-sustaining ecosystem that grows through partnerships, funding, and community engagement, 
                    maximizing long-term positive impact across all our initiatives and projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new technologies and methodologies to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every project, maintaining the highest standards of quality.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and strong partnerships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Talented professionals dedicated to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-[#0ea5e9] to-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Leadership Team</h3>
              <p className="text-[#0ea5e9] font-medium mb-4">Visionary Leaders</p>
              <p className="text-gray-600">
                Experienced executives guiding our strategic direction and innovation initiatives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Development Team</h3>
              <p className="text-[#0ea5e9] font-medium mb-4">Technical Experts</p>
              <p className="text-gray-600">
                Skilled developers and engineers creating robust, scalable solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-[#0ea5e9] to-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Support Team</h3>
              <p className="text-[#0ea5e9] font-medium mb-4">Client Champions</p>
              <p className="text-gray-600">
                Dedicated professionals ensuring exceptional client experience and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
