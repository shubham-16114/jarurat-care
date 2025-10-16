import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        {/* Cursor Glow Effect */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`,
          }}
        />

        <div className="relative text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in-down">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/90 font-medium">
              Live Dashboard
            </span>
          </div>

          {/* Main Title with Gradient Animation */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 animate-fade-in">
            <span className="inline-block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-gradient-x">
              Jarurat Care
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl text-white/80 mb-4 font-semibold animate-fade-in animation-delay-200">
            Patient Records Dashboard
          </p>

          <p className="text-white/60 max-w-2xl mx-auto mb-12 text-lg leading-relaxed animate-fade-in animation-delay-400">
            A modern healthcare management system to view, search, and manage
            patient records efficiently with real-time updates.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <Link
              to="/patients"
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 
                       text-white rounded-full font-semibold shadow-2xl
                       hover:shadow-indigo-500/50 hover:scale-105 
                       transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Patients
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              to="/about"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 
                       text-white rounded-full font-semibold
                       hover:bg-white/20 hover:scale-105 
                       transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Feature Cards with Glass Effect */}
        <div className="mt-32 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              ),
              title: "Smart Search",
              description:
                "Quickly find any patient record with our powerful search and filter system.",
              gradient: "from-blue-500 to-cyan-500",
              delay: "0",
            },
            {
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              ),
              title: "Patient Management",
              description:
                "View detailed patient information and manage records all in one place.",
              gradient: "from-purple-500 to-pink-500",
              delay: "200",
            },
            {
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              ),
              title: "Easy to Use",
              description:
                "Add new patient records with a simple, intuitive interface.",
              gradient: "from-green-500 to-emerald-500",
              delay: "400",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 
                       border border-white/10 hover:border-white/20
                       hover:bg-white/10 transition-all duration-500
                       hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20
                       animate-fade-in-up"
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              {/* Gradient Border on Hover */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
              />

              <div className="relative">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl 
                           flex items-center justify-center mb-6 
                           transform group-hover:scale-110 group-hover:rotate-6
                           transition-all duration-300 shadow-lg`}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {feature.icon}
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>

                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in animation-delay-800">
          {[
            { label: "Active Patients", value: "100+" },
            { label: "Records Managed", value: "500+" },
            { label: "Response Time", value: "<100ms" },
            { label: "Uptime", value: "99.9%" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
