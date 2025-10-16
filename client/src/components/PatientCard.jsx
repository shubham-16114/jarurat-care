import React from "react";

export default function PatientCard({ patient, onView }) {
  const statusColors = {
    Stable: "bg-green-100 text-green-700 border-green-200",
    Critical: "bg-red-100 text-red-700 border-red-200",
    "Under Observation": "bg-yellow-100 text-yellow-700 border-yellow-200",
    Recovering: "bg-blue-100 text-blue-700 border-blue-200",
  };

  const statusIcons = {
    Stable: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    Critical:
      "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    "Under Observation": "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    Recovering: "M13 10V3L4 14h7v7l9-11h-7z",
  };

  return (
    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-indigo-300">
      {/* Header with Photo and Basic Info */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <img
            src={patient.avatar || patient.thumbnail}
            alt={`${patient.name.first} ${patient.name.last}`}
            className="h-20 w-20 rounded-2xl object-cover ring-4 ring-gray-100 group-hover:ring-indigo-300 transition-all duration-300 shadow-md"
          />
          {/* Online Status Indicator */}
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-md flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-xl text-gray-900 group-hover:text-indigo-600 transition-colors truncate">
            {patient.name.first} {patient.name.last}
          </h3>
          <p className="text-sm text-gray-500 mt-0.5">
            ID: {patient.id.substring(0, 8)}...
          </p>

          {/* Status Badge */}
          <div className="mt-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                statusColors[patient.medicalInfo?.status || "Stable"]
              }`}
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={statusIcons[patient.medicalInfo?.status || "Stable"]}
                />
              </svg>
              {patient.medicalInfo?.status || "Stable"}
            </span>
          </div>
        </div>
      </div>

      {/* Medical Quick Info */}
      <div className="space-y-3 mb-4 bg-gray-50 rounded-xl p-4">
        <div className="grid grid-cols-2 gap-3">
          {/* Age & Gender */}
          <div className="flex items-center gap-2 text-sm">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500">Age/Gender</p>
              <p className="font-semibold text-gray-900">
                {patient.age} / {patient.gender}
              </p>
            </div>
          </div>

          {/* Blood Type */}
          <div className="flex items-center gap-2 text-sm">
            <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500">Blood Type</p>
              <p className="font-semibold text-gray-900">
                {patient.medicalInfo?.bloodType}
              </p>
            </div>
          </div>
        </div>

        {/* Vital Signs */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-200">
          <div className="text-center">
            <p className="text-xs text-gray-500">BP</p>
            <p className="text-sm font-semibold text-gray-900">
              {patient.vitalSigns?.bloodPressure}
            </p>
          </div>
          <div className="h-8 w-px bg-gray-300"></div>
          <div className="text-center">
            <p className="text-xs text-gray-500">HR</p>
            <p className="text-sm font-semibold text-gray-900">
              {patient.vitalSigns?.heartRate} bpm
            </p>
          </div>
          <div className="h-8 w-px bg-gray-300"></div>
          <div className="text-center">
            <p className="text-xs text-gray-500">SpO₂</p>
            <p className="text-sm font-semibold text-gray-900">
              {patient.vitalSigns?.oxygenLevel}%
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="truncate">{patient.contact}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="truncate">
            {patient.address?.city}, {patient.address?.state}
          </span>
        </div>
      </div>

      {/* View Details Button */}
      <button
        onClick={onView}
        className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-xl hover:shadow-indigo-500/50 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 group"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        View Medical Records
        <svg
          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
