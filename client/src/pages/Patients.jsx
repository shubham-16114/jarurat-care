import React, { useEffect, useMemo, useState } from "react";
import usePatients from "../state/usePatients";
import PatientCard from "../components/PatientCard";
import PatientCardSkeleton from "../components/PatientCardSkeleton";
import PatientModal from "../components/PatientModal";
import SearchBar from "../components/SearchBar";
import AddPatientForm from "../components/AddPatientForm";
import Toast from "../components/Toast";
import useToast from "../hooks/useToast";

/**
 * Patients Dashboard Page
 * Displays patient records with search, filter, and management capabilities
 */
export default function Patients() {
  const { patients, loading, error, fetchPatients, addPatient } = usePatients();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const { toast, hideToast, showSuccess, showError } = useToast();

  useEffect(() => {
    fetchPatients();
  }, [fetchPatients]);

  // Show error toast when error occurs
  useEffect(() => {
    if (error) {
      showError(error);
    }
  }, [error, showError]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return patients;
    return patients.filter((p) =>
      `${p.name.first} ${p.name.last}`.toLowerCase().includes(q)
    );
  }, [query, patients]);

  const handleAddPatient = (patient) => {
    addPatient(patient);
    showSuccess(
      `${patient.name.first} ${patient.name.last} added successfully!`
    );
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Patient Records
          </h1>
          <p className="text-gray-600">
            Manage and view all patient information
          </p>
        </div>

        {/* Search and Add Section */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <SearchBar
                value={query}
                onChange={setQuery}
                placeholder="Search patients by name..."
              />
            </div>
            <div className="lg:ml-auto">
              <AddPatientForm onAdd={handleAddPatient} />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">
                  {filtered.length}
                </span>{" "}
                patients {query && "found"}
              </span>
            </div>
            {query && (
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="text-sm text-gray-600">
                  Searching for "{query}"
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Loading State with Skeletons */}
        {loading && (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <PatientCardSkeleton key={index} />
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-6 flex items-start gap-4 animate-shake">
            <svg
              className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="font-semibold text-red-900 mb-1">
                Error loading patients
              </h3>
              <p className="text-red-700">{error}</p>
              <button
                onClick={fetchPatients}
                className="mt-3 text-sm text-red-600 hover:text-red-800 font-medium underline"
              >
                Try again
              </button>
            </div>
          </div>
        )}

        {/* Patient Grid */}
        {!loading && !error && (
          <>
            {filtered.length > 0 ? (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.map((p, index) => (
                  <div
                    key={p.id}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className="animate-fade-in-up"
                  >
                    <PatientCard patient={p} onView={() => setSelected(p)} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                  <svg
                    className="w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  No patients found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or add a new patient
                </p>
              </div>
            )}
          </>
        )}
      </div>

      <PatientModal patient={selected} onClose={() => setSelected(null)} />

      {/* Toast Notifications */}
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}
    </div>
  );
}
