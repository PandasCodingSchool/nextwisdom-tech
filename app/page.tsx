'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#FAF9F7] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00BFFF] bg-opacity-20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#FF6A00] bg-opacity-20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#0C1C47] bg-opacity-20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Hero Content */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0C1C47] mb-6">
                Smart Solutions,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#0C1C47]">
                  Smarter Tomorrow
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your business with cutting-edge technology solutions. 
                We deliver innovative software that drives growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="bg-gradient-to-r from-[#00BFFF] to-[#0C1C47] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-[#00BFFF] text-[#00BFFF] px-8 py-4 rounded-full font-semibold hover:bg-[#00BFFF] hover:text-white transition-all duration-300 text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/nextwisdom-logo.png"
                    alt="Nextwisdom Tech Solutions"
                    width={400}
                    height={400}
                    className="object-contain w-full h-full p-8 bg-[#FAF9F7] rounded-2xl"
                  />
                </div>
                {/* Floating Icons */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#00BFFF] rounded-xl flex items-center justify-center shadow-lg animate-bounce">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#FF6A00] rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0C1C47] mb-4">Why Choose Nextwisdom Tech?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine innovation, expertise, and dedication to deliver exceptional technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#00BFFF] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0C1C47] mb-4">Fast Development</h3>
              <p className="text-gray-600">
                Rapid prototyping and agile development methodologies ensure quick delivery without compromising quality.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#FF6A00] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0C1C47] mb-4">Secure Solutions</h3>
              <p className="text-gray-600">
                Enterprise-grade security measures and best practices protect your data and applications.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00BFFF] to-[#0C1C47] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0C1C47] mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Dedicated professionals with years of experience in cutting-edge technologies and frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0C1C47] mb-4">Our Impact & Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering meaningful results through technology that makes a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#00BFFF] to-[#0C1C47] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#0C1C47] mb-2">1000+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#FF6A00] to-[#0C1C47] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#0C1C47] mb-2">15+</div>
              <div className="text-gray-600">Community Projects</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#00BFFF] to-[#FF6A00] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#0C1C47] mb-2">500+</div>
              <div className="text-gray-600">Students Mentored</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#0C1C47] to-[#00BFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#0C1C47] mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-[#FAF9F7] to-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#00BFFF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0C1C47] mb-2">Rural Education Platform</h3>
                  <p className="text-gray-600 mb-3">
                    Developed an accessible e-learning platform serving 300+ students in remote areas, providing quality education resources and virtual classrooms.
                  </p>
                  <div className="text-sm text-[#00BFFF] font-medium">Education • Community Impact</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FAF9F7] to-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0C1C47] mb-2">Healthcare Access App</h3>
                  <p className="text-gray-600 mb-3">
                    Created a mobile health platform connecting rural communities with healthcare professionals, facilitating 500+ consultations and health screenings.
                  </p>
                  <div className="text-sm text-[#FF6A00] font-medium">Healthcare • Mobile Tech</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values & Commitment */}
      <section className="py-20 bg-gradient-to-br from-[#FAF9F7] to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0C1C47] mb-4">Our Values & Commitment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on trust, integrity, and unwavering dedication to positive social impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-[#00BFFF] to-[#0C1C47] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0C1C47] mb-4">Trustworthy</h3>
              <p className="text-gray-600">
                We build lasting relationships through transparency, reliability, and consistent delivery of promises.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-[#FF6A00] to-[#0C1C47] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0C1C47] mb-4">Faithful</h3>
              <p className="text-gray-600">
                Committed to our mission and clients, we remain steadfast in delivering quality solutions that create positive change.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-[#00BFFF] to-[#FF6A00] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0C1C47] mb-4">Community-Focused</h3>
              <p className="text-gray-600">
                Every project is driven by our commitment to uplift communities and create meaningful social impact.
              </p>
            </div>
          </div>

          {/* Partnership Commitment */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0C1C47] to-[#00BFFF] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0C1C47] mb-4">Our Partnership Promise</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                When you work with Nextwisdom Tech, you&apos;re not just hiring a service provider – you&apos;re gaining a dedicated partner 
                committed to your success and the positive impact we can create together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0C1C47] mb-4">What Our Partners Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from organizations and communities we&apos;ve had the privilege to serve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-[#FAF9F7] to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="flex text-[#FF6A00]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                &quot;Nextwisdom Tech transformed our rural education initiative. Their platform now serves over 200 students 
                in remote areas, making quality education accessible to communities that never had such opportunities before.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00BFFF] to-[#0C1C47] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">DR</span>
                </div>
                <div>
                  <div className="font-bold text-[#0C1C47]">Dr. Priya Sharma</div>
                  <div className="text-gray-600 text-sm">Director, Rural Education Foundation</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-[#FAF9F7] to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="flex text-[#FF6A00]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                &quot;The healthcare access app they developed for our NGO has been a game-changer. We&apos;ve connected over 400 
                patients with medical professionals, bridging the healthcare gap in underserved communities.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#FF6A00] to-[#0C1C47] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MK</span>
                </div>
                <div>
                  <div className="font-bold text-[#0C1C47]">Mr. Kiran Mehta</div>
                  <div className="text-gray-600 text-sm">CEO, HealthBridge NGO</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-[#FAF9F7] to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="flex text-[#FF6A00]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                &quot;Working with Nextwisdom Tech has been exceptional. Their commitment to ethical technology and 
                community empowerment aligns perfectly with our values. They delivered beyond our expectations.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0C1C47] to-[#00BFFF] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">AS</span>
                </div>
                <div>
                  <div className="font-bold text-[#0C1C47]">Anita Singh</div>
                  <div className="text-gray-600 text-sm">Program Manager, Tech for Good Initiative</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action for Testimonials */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-[#00BFFF] to-[#0C1C47] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Create Your Success Story?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join the growing community of organizations making a positive impact with our technology solutions.
              </p>
              <Link
                href="/contact"
                className="bg-white text-[#0C1C47] px-8 py-3 rounded-full font-semibold hover:bg-[#FAF9F7] transition-all duration-300 inline-block"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0C1C47] to-[#1a1a2e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Let&apos;s discuss how our innovative solutions can drive your business forward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#00BFFF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#FF6A00] transform hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="border-2 border-[#00BFFF] text-[#00BFFF] px-8 py-4 rounded-full font-semibold hover:bg-[#00BFFF] hover:text-white transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
