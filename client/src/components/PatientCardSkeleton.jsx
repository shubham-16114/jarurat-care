import React from "react";

export default function PatientCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-pulse">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full" />
        <div className="flex-1">
          <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>
      </div>

      {/* Details skeleton */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded w-1/3" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>
      </div>

      {/* Button skeleton */}
      <div className="mt-4 h-10 bg-gray-200 rounded-lg w-full" />
    </div>
  );
}
