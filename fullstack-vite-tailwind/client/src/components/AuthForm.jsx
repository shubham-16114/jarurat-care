import React from "react";

export default function AuthForm({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
  isLoginMode,     // <-- New prop
  setIsLoginMode, // <-- New prop
}) {
  const switchModeHandler = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <div className="mx-auto w-[420px]">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-8"
      >
        <div className="p-8">
          <div className="space-y-6">
            {/* Email Input - (No change needed) */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your email
              </label>
              <div className="group relative transition-all duration-300">
                 <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-cyan-200 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative flex items-center border border-gray-200 hover:border-transparent rounded-lg overflow-hidden bg-white transition-all duration-200">
                  <div className="w-14 flex items-center justify-center bg-transparent text-gray-500">
                    <span className="text-xl">👤</span>
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-5 py-4 text-[15px] placeholder-gray-400 text-gray-700 bg-transparent focus:outline-none"
                    placeholder="e.g. elon@tesla.com"
                  />
                </div>
              </div>
            </div>

            {/* Password Input - (No change needed) */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your password
              </label>
              <div className="group relative transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-cyan-200 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative flex items-center border border-gray-200 hover:border-transparent rounded-lg overflow-hidden bg-white transition-all duration-200">
                  <div className="w-14 flex items-center justify-center bg-transparent text-gray-500">
                    <span className="text-xl">🔒</span>
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="flex-1 px-5 py-4 text-[15px] placeholder-gray-400 text-gray-700 bg-transparent focus:outline-none"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button (Dynamically changes text) */}
            <div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                {isLoginMode ? "Sign In" : "Create Account"}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Links (Dynamically switch modes) */}
        <div className="px-8 pb-8 flex justify-between text-sm">
          <button
            type="button" // Important: type="button" to prevent form submission
            onClick={switchModeHandler}
            className="text-indigo-600 hover:text-indigo-500 transition-colors"
          >
            {isLoginMode
              ? "Don't have an account?"
              : "Already have an account? Sign In"}
          </button>
          <a
            href="#"
            className="text-indigo-600 hover:text-indigo-500 transition-colors"
          >
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
}