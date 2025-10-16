import React, { useState } from "react";

export default function AddPatientForm({ onAdd }) {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    age: "",
    gender: "male",
    email: "",
    contact: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    bloodType: "O+",
    height: "",
    weight: "",
    conditions: "",
    allergies: "None",
    emergencyName: "",
    emergencyRelation: "",
    emergencyPhone: "",
    photoUrl: "", // For photo URL
  });
  const [showForm, setShowForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.first || !formData.last) return;

    const newPatient = {
      id: `local-${Date.now()}`,
      name: { first: formData.first, last: formData.last },
      age: Number(formData.age) || 25,
      gender: formData.gender,
      email:
        formData.email ||
        `${formData.first.toLowerCase()}.${formData.last.toLowerCase()}@gmail.com`,
      contact: formData.contact || "+91 98765 43210",
      avatar:
        formData.photoUrl ||
        `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(
          formData.first + formData.last
        )}`,
      registeredDate: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      address: {
        street: formData.address || "MG Road",
        city: formData.city || "Mumbai",
        state: formData.state || "Maharashtra",
        zip: formData.zip || "400001",
      },
      medicalInfo: {
        bloodType: formData.bloodType,
        height: formData.height || `${Math.floor(Math.random() * 30) + 160} cm`,
        weight: formData.weight || `${Math.floor(Math.random() * 30) + 60} kg`,
        conditions: formData.conditions || "None",
        medications:
          formData.conditions && formData.conditions !== "None"
            ? ["Prescribed medication for " + formData.conditions]
            : [],
        allergies: formData.allergies,
        lastVisit: new Date().toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }),
        nextAppointment: new Date(
          Date.now() + 30 * 24 * 60 * 60 * 1000
        ).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }),
        status: "Stable",
        emergencyContact: {
          name: formData.emergencyName || "Emergency Contact",
          relation: formData.emergencyRelation || "Family",
          phone:
            formData.emergencyPhone || formData.contact || "+91 98765 43210",
        },
      },
      vitalSigns: {
        bloodPressure: "120/80",
        heartRate: "75",
        temperature: "37.0",
        oxygenLevel: "98",
      },
      medicalRecords: [
        {
          type: "Initial Assessment",
          date: new Date().toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }),
          doctor: "Dr. Sharma",
          description: "Initial patient registration and health assessment",
        },
      ],
      insurance: {
        provider: "Star Health Insurance",
        policyNumber: `POL-${Date.now().toString().slice(-8)}`,
        validUntil: new Date(
          Date.now() + 365 * 24 * 60 * 60 * 1000
        ).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }),
      },
    };

    onAdd(newPatient);

    // Reset form
    setFormData({
      first: "",
      last: "",
      age: "",
      gender: "male",
      email: "",
      contact: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      bloodType: "O+",
      height: "",
      weight: "",
      conditions: "",
      allergies: "None",
      emergencyName: "",
      emergencyRelation: "",
      emergencyPhone: "",
      photoUrl: "",
    });
    setCurrentStep(1);
    setShowForm(false);
  };

  return (
    <div className="relative">
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="group relative px-6 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 
                     text-white rounded-lg font-medium shadow-lg hover:shadow-xl
                     transform hover:scale-105 transition-all duration-200
                     flex items-center gap-2"
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
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add Patient
        </button>
      ) : (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl my-8 animate-scale-in">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4 rounded-t-2xl flex items-center justify-between z-10">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Add New Patient
                </h3>
                <p className="text-green-100 text-sm mt-1">
                  Step {currentStep} of 3
                </p>
              </div>
              <button
                onClick={() => {
                  setShowForm(false);
                  setCurrentStep(1);
                }}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <svg
                  className="w-6 h-6"
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

            {/* Progress Bar */}
            <div className="bg-gray-100 h-2">
              <div
                className="bg-gradient-to-r from-green-600 to-emerald-600 h-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto"
            >
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-green-600"
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
                  </h4>

                  {/* Photo Upload */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border-2 border-dashed border-green-300">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Patient Photo
                    </label>
                    <div className="flex items-center gap-4">
                      {formData.photoUrl && (
                        <img
                          src={formData.photoUrl}
                          alt="Patient preview"
                          className="w-20 h-20 rounded-full object-cover ring-4 ring-green-200"
                        />
                      )}
                      <div className="flex-1">
                        <input
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                          placeholder="Enter photo URL (e.g., https://example.com/photo.jpg)"
                          value={formData.photoUrl}
                          onChange={(e) =>
                            handleChange("photoUrl", e.target.value)
                          }
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Paste an image URL or leave blank for auto-generated
                          avatar
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Rajesh"
                        value={formData.first}
                        onChange={(e) => handleChange("first", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Kumar"
                        value={formData.last}
                        onChange={(e) => handleChange("last", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Age *
                      </label>
                      <input
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="30"
                        type="number"
                        min="0"
                        max="150"
                        value={formData.age}
                        onChange={(e) => handleChange("age", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Gender *
                      </label>
                      <select
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={formData.gender}
                        onChange={(e) => handleChange("gender", e.target.value)}
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="rajesh.kumar@gmail.com"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Contact Number
                      </label>
                      <input
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="+91 98765 43210"
                        value={formData.contact}
                        onChange={(e) =>
                          handleChange("contact", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h5 className="font-semibold text-gray-900">Address</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Street Address
                        </label>
                        <input
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="MG Road, Sector 5"
                          value={formData.address}
                          onChange={(e) =>
                            handleChange("address", e.target.value)
                          }
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          City
                        </label>
                        <input
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Mumbai"
                          value={formData.city}
                          onChange={(e) => handleChange("city", e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          State
                        </label>
                        <select
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          value={formData.state}
                          onChange={(e) =>
                            handleChange("state", e.target.value)
                          }
                        >
                          <option value="">Select State</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Arunachal Pradesh">
                            Arunachal Pradesh
                          </option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">
                            Himachal Pradesh
                          </option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Odisha">Odisha</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="West Bengal">West Bengal</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Puducherry">Puducherry</option>
                          <option value="Chandigarh">Chandigarh</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          PIN Code
                        </label>
                        <input
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="400001"
                          maxLength="6"
                          value={formData.zip}
                          onChange={(e) => handleChange("zip", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Medical Information */}
              {currentStep === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-green-600"
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
                    Medical Information
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Blood Type *
                      </label>
                      <select
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={formData.bloodType}
                        onChange={(e) =>
                          handleChange("bloodType", e.target.value)
                        }
                      >
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Height (cm)
                      </label>
                      <input
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="170"
                        type="number"
                        value={formData.height}
                        onChange={(e) => handleChange("height", e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Weight (kg)
                      </label>
                      <input
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="70"
                        type="number"
                        value={formData.weight}
                        onChange={(e) => handleChange("weight", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Medical Conditions
                    </label>
                    <textarea
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                                 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                                 resize-none"
                      placeholder="Diabetes, Hypertension, Asthma, or None"
                      rows="3"
                      value={formData.conditions}
                      onChange={(e) =>
                        handleChange("conditions", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Known Allergies
                    </label>
                    <input
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                                 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Penicillin, Pollen, Dust, or None"
                      value={formData.allergies}
                      onChange={(e) =>
                        handleChange("allergies", e.target.value)
                      }
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Emergency Contact */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-red-600"
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
                  </h4>

                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="text-sm text-red-700">
                      Emergency contact information is crucial for patient
                      safety. Please provide accurate details.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Contact Name
                      </label>
                      <input
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Jane Doe"
                        value={formData.emergencyName}
                        onChange={(e) =>
                          handleChange("emergencyName", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Relationship
                      </label>
                      <select
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={formData.emergencyRelation}
                        onChange={(e) =>
                          handleChange("emergencyRelation", e.target.value)
                        }
                      >
                        <option value="">Select Relation</option>
                        <option value="Spouse">Spouse</option>
                        <option value="Parent">Parent</option>
                        <option value="Sibling">Sibling</option>
                        <option value="Child">Child</option>
                        <option value="Friend">Friend</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Emergency Phone Number
                      </label>
                      <input
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="+91 98765 43210"
                        type="tel"
                        value={formData.emergencyPhone}
                        onChange={(e) =>
                          handleChange("emergencyPhone", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mt-6">
                    <h5 className="font-semibold text-green-900 mb-2">
                      Review Before Submit
                    </h5>
                    <div className="text-sm text-green-800 space-y-1">
                      <p>
                        <strong>Name:</strong> {formData.first} {formData.last}
                      </p>
                      <p>
                        <strong>Age:</strong> {formData.age || "Not specified"}
                      </p>
                      <p>
                        <strong>Gender:</strong> {formData.gender}
                      </p>
                      <p>
                        <strong>Blood Type:</strong> {formData.bloodType}
                      </p>
                      <p>
                        <strong>Contact:</strong>{" "}
                        {formData.contact || "Not specified"}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg 
                               hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-2"
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Previous
                  </button>
                )}

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                    disabled={
                      currentStep === 1 &&
                      (!formData.first || !formData.last || !formData.age)
                    }
                    className="flex-1 px-4 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 
                               text-white rounded-lg font-medium shadow-lg hover:shadow-xl
                               transform hover:scale-105 transition-all duration-200
                               disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                               flex items-center justify-center gap-2"
                  >
                    Next
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={
                      !formData.first || !formData.last || !formData.age
                    }
                    className="flex-1 px-4 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 
                               text-white rounded-lg font-medium shadow-lg hover:shadow-xl
                               transform hover:scale-105 transition-all duration-200
                               disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                               flex items-center justify-center gap-2"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Add Patient
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
