import React, { useState } from "react";

export default function PatientModal({ patient, onClose }) {
  const [activeTab, setActiveTab] = useState("overview");

  if (!patient) return null;

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    },
    {
      id: "medical",
      label: "Medical Info",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    },
    {
      id: "records",
      label: "Records",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    },
    {
      id: "vitals",
      label: "Vital Signs",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-6xl my-4 sm:my-8 animate-scale-in">
        {/* Header with Patient Photo */}
        <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-4 sm:px-8 py-4 sm:py-6 rounded-t-2xl sm:rounded-t-3xl">
          <div className="flex items-start gap-3 sm:gap-6">
            <img
              src={patient.avatar}
              alt={`${patient.name.first} ${patient.name.last}`}
              className="h-20 w-20 sm:h-32 sm:w-32 rounded-xl sm:rounded-2xl object-cover ring-4 ring-white shadow-2xl flex-shrink-0"
            />
            <div className="flex-1 text-white min-w-0">
              <h2 className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2 truncate">
                {patient.name.first} {patient.name.last}
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm mb-2 sm:mb-3">
                <span className="flex items-center gap-1">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                  </svg>
                  <span className="truncate">
                    ID: {patient.id.substring(0, 12)}
                  </span>
                </span>
                <span className="flex items-center gap-1">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="truncate">{patient.registeredDate}</span>
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-white/20 backdrop-blur-md rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-semibold truncate">
                  Status: {patient.medicalInfo?.status}
                </span>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full transition-all"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 bg-gray-50 overflow-x-auto">
          <div className="flex gap-0 sm:gap-1 px-2 sm:px-8 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 sm:py-4 font-semibold text-xs sm:text-base transition-all relative whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-indigo-600 bg-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={tab.icon}
                  />
                </svg>
                <span className="hidden sm:inline">{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8 overflow-y-auto max-h-[50vh] sm:max-h-[60vh]">
          {/* Overview Tab */}
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-indigo-600"
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
                  Personal Information
                </h3>

                <InfoCard
                  label="Full Name"
                  value={`${patient.name.first} ${patient.name.last}`}
                  icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
                <InfoCard
                  label="Age"
                  value={`${patient.age} years old`}
                  icon="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
                <InfoCard
                  label="Gender"
                  value={patient.gender}
                  icon="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
                <InfoCard
                  label="Email"
                  value={patient.email}
                  icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
                <InfoCard
                  label="Phone"
                  value={patient.contact}
                  icon="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
                <InfoCard
                  label="Address"
                  value={`${patient.address.street}, ${patient.address.city}, ${patient.address.state} ${patient.address.zip}`}
                  icon="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
              </div>

              {/* Emergency Contact & Insurance */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    Emergency Contact
                  </h3>
                  <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-4 space-y-2">
                    <InfoCard
                      label="Name"
                      value={patient.medicalInfo.emergencyContact.name}
                      bgColor="bg-transparent"
                    />
                    <InfoCard
                      label="Relation"
                      value={patient.medicalInfo.emergencyContact.relation}
                      bgColor="bg-transparent"
                    />
                    <InfoCard
                      label="Phone"
                      value={patient.medicalInfo.emergencyContact.phone}
                      bgColor="bg-transparent"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Insurance Information
                  </h3>
                  <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-4 space-y-2">
                    <InfoCard
                      label="Provider"
                      value={patient.insurance.provider}
                      bgColor="bg-transparent"
                    />
                    <InfoCard
                      label="Policy Number"
                      value={patient.insurance.policyNumber}
                      bgColor="bg-transparent"
                    />
                    <InfoCard
                      label="Valid Until"
                      value={patient.insurance.validUntil}
                      bgColor="bg-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Medical Info Tab */}
          {activeTab === "medical" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <MedicalCard
                  label="Blood Type"
                  value={patient.medicalInfo.bloodType}
                  icon="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  color="red"
                />
                <MedicalCard
                  label="Height"
                  value={patient.medicalInfo.height}
                  icon="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  color="blue"
                />
                <MedicalCard
                  label="Weight"
                  value={patient.medicalInfo.weight}
                  icon="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  color="green"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-orange-600"
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
                    Medical Conditions
                  </h4>
                  <div className="bg-orange-50 rounded-xl p-4">
                    <p className="text-gray-900 font-medium">
                      {patient.medicalInfo.conditions}
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    Allergies
                  </h4>
                  <div className="bg-yellow-50 rounded-xl p-4">
                    <p className="text-gray-900 font-medium">
                      {patient.medicalInfo.allergies}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                  Current Medications
                </h4>
                <div className="space-y-2">
                  {patient.medicalInfo.medications.map((med, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-purple-50 rounded-lg p-3"
                    >
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-900 font-medium">{med}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-4">
                  <p className="text-sm text-blue-600 font-semibold mb-1">
                    Last Visit
                  </p>
                  <p className="text-lg text-gray-900 font-bold">
                    {patient.medicalInfo.lastVisit}
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-4">
                  <p className="text-sm text-green-600 font-semibold mb-1">
                    Next Appointment
                  </p>
                  <p className="text-lg text-gray-900 font-bold">
                    {patient.medicalInfo.nextAppointment}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Medical Records Tab */}
          {activeTab === "records" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Medical Records & Files
                </h3>
                <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                  Upload New File
                </button>
              </div>

              {patient.medicalRecords.map((record, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-7 h-7 text-white"
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
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold text-lg text-gray-900">
                            {record.type}
                          </h4>
                          <p className="text-gray-600 mt-1">
                            {record.description}
                          </p>
                          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              {record.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <svg
                                className="w-4 h-4"
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
                              {record.doctor}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Download"
                          >
                            <svg
                              className="w-5 h-5 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </button>
                          <button
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            title="View"
                          >
                            <svg
                              className="w-5 h-5 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Vital Signs Tab */}
          {activeTab === "vitals" && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Current Vital Signs
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <VitalCard
                  label="Blood Pressure"
                  value={patient.vitalSigns.bloodPressure}
                  unit="mmHg"
                  icon="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  color="red"
                  status="Normal"
                />
                <VitalCard
                  label="Heart Rate"
                  value={patient.vitalSigns.heartRate}
                  unit="bpm"
                  icon="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  color="pink"
                  status="Normal"
                />
                <VitalCard
                  label="Temperature"
                  value={patient.vitalSigns.temperature}
                  unit="°C"
                  icon="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  color="orange"
                  status="Normal"
                />
                <VitalCard
                  label="Oxygen Level"
                  value={patient.vitalSigns.oxygenLevel}
                  unit="%"
                  icon="M13 10V3L4 14h7v7l9-11h-7z"
                  color="blue"
                  status="Normal"
                />
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
                <h4 className="font-bold text-lg text-gray-900 mb-4">
                  Health Status Summary
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Overall Health</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                      Excellent
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Risk Level</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                      Low
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Last Checkup</span>
                    <span className="text-gray-900 font-semibold">
                      {patient.medicalInfo.lastVisit}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="border-t border-gray-200 px-4 sm:px-8 py-3 sm:py-4 bg-gray-50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button className="px-4 sm:px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-all text-sm sm:text-base order-2 sm:order-1">
            Print Records
          </button>
          <div className="flex gap-2 sm:gap-3 order-1 sm:order-2">
            <button className="flex-1 sm:flex-none px-4 sm:px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all text-sm sm:text-base">
              Edit
            </button>
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 sm:px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ label, value, icon, bgColor = "bg-gray-50" }) {
  return (
    <div className={`${bgColor} rounded-xl p-4 flex items-start gap-3`}>
      {icon && (
        <svg
          className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={icon}
          />
        </svg>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-500 font-medium">{label}</p>
        <p className="text-gray-900 font-semibold mt-1 break-words">{value}</p>
      </div>
    </div>
  );
}

function MedicalCard({ label, value, icon, color }) {
  const colors = {
    red: "from-red-500 to-rose-500",
    blue: "from-blue-500 to-cyan-500",
    green: "from-green-500 to-emerald-500",
    purple: "from-purple-500 to-pink-500",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
      <div
        className={`w-12 h-12 bg-gradient-to-br ${colors[color]} rounded-xl flex items-center justify-center mb-4`}
      >
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
            d={icon}
          />
        </svg>
      </div>
      <p className="text-sm text-gray-500 font-medium mb-1">{label}</p>
      <p className="text-2xl text-gray-900 font-bold">{value}</p>
    </div>
  );
}

function VitalCard({ label, value, unit, icon, color, status }) {
  const colors = {
    red: "from-red-500 to-rose-500",
    pink: "from-pink-500 to-rose-500",
    blue: "from-blue-500 to-cyan-500",
    orange: "from-orange-500 to-amber-500",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all">
      <div
        className={`w-14 h-14 bg-gradient-to-br ${colors[color]} rounded-xl flex items-center justify-center mb-4`}
      >
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={icon}
          />
        </svg>
      </div>
      <p className="text-sm text-gray-500 font-medium mb-2">{label}</p>
      <div className="flex items-baseline gap-2 mb-2">
        <p className="text-3xl text-gray-900 font-bold">{value}</p>
        <span className="text-gray-500 text-sm">{unit}</span>
      </div>
      <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
        {status}
      </span>
    </div>
  );
}
