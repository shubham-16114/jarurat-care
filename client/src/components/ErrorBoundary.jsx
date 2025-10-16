import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    this.state = { hasError: true, error, errorInfo };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-50 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-rose-500 rounded-full mb-6">
                <svg
                  className="w-10 h-10 text-white"
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
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Oops! Something went wrong
              </h1>

              <p className="text-gray-600 mb-8">
                We encountered an unexpected error. Don't worry, our team has
                been notified.
              </p>

              {process.env.NODE_ENV === "development" && this.state.error && (
                <details className="text-left bg-gray-50 rounded-xl p-4 mb-6">
                  <summary className="cursor-pointer font-semibold text-gray-700 mb-2">
                    Error Details (Development Mode)
                  </summary>
                  <pre className="text-xs text-red-600 overflow-auto max-h-64">
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </details>
              )}

              <button
                onClick={() => window.location.reload()}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 
                         text-white rounded-full font-semibold shadow-lg
                         hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
