import React, { useEffect } from "react";

/**
 * Toast notification component for user feedback
 * @param {Object} props - Component props
 * @param {string} props.message - Message to display
 * @param {string} props.type - Type of toast (success, error, info)
 * @param {function} props.onClose - Callback when toast is closed
 */
export default function Toast({ message, type = "info", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const styles = {
    success: "bg-gradient-to-r from-green-500 to-emerald-500",
    error: "bg-gradient-to-r from-red-500 to-rose-500",
    info: "bg-gradient-to-r from-blue-500 to-indigo-500",
  };

  const icons = {
    success: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    error: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    info: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-slide-in-right">
      <div
        className={`${styles[type]} text-white px-6 py-4 rounded-xl shadow-2xl 
                   flex items-center gap-3 min-w-[300px] backdrop-blur-md`}
      >
        <svg
          className="w-6 h-6 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {icons[type]}
        </svg>
        <p className="flex-1 font-medium">{message}</p>
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white transition-colors"
          aria-label="Close notification"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
