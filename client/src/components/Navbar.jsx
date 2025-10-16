import React from "react";
import { NavLink } from "react-router-dom";

const navLink = ({ isActive }) =>
  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
    isActive
      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50"
      : "text-gray-700 hover:bg-gray-100 hover:scale-105"
  }`;

export default function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 group">
          <div className="text-2xl transform group-hover:scale-110 transition-transform duration-200">
            🩺
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Jarurat Care
          </span>
        </div>
        <nav className="flex items-center gap-2">
          <NavLink to="/" className={navLink}>
            Home
          </NavLink>
          <NavLink to="/patients" className={navLink}>
            Patients
          </NavLink>
          <NavLink to="/about" className={navLink}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
