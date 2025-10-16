import React from "react";

export default function About() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            About This Project
          </h1>
          <p className="text-gray-600 text-lg">
            Building modern healthcare dashboards
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 mb-8 border border-gray-100 animate-slide-up">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  What is this?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  This is a simple patient records viewer I built with React. It
                  grabs random patient data from an API (randomuser.me) and
                  displays them in cards. If the API is down, it uses a local
                  JSON file instead.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Features
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  You can search through the list, click on any patient to see
                  more details, and even add new patients (though they won't be
                  saved - it's just frontend practice).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Tech Stack
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Built with React, React Router, and Tailwind CSS. No backend
                  needed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-in">
          {[
            { name: "React 18", color: "from-cyan-500 to-blue-500" },
            { name: "Vite", color: "from-purple-500 to-pink-500" },
            { name: "Tailwind CSS", color: "from-teal-500 to-cyan-500" },
            { name: "React Router", color: "from-orange-500 to-red-500" },
          ].map((tech, index) => (
            <div
              key={tech.name}
              style={{ animationDelay: `${index * 100}ms` }}
              className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100
                         transform hover:scale-105 transition-all duration-200 hover:shadow-xl
                         animate-fade-in-up"
            >
              <div
                className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${tech.color} rounded-lg`}
              ></div>
              <p className="font-semibold text-gray-900">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
