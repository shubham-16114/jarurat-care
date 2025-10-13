import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import auth from "../utils/auth";
import AuthForm from "../components/AuthForm";
import SocialLogins from "../components/SocialLogins";

function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (auth.isAuthenticated()) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const url = isLoginMode
      ? "http://localhost:5001/api/users/auth" // Login URL
      : "http://localhost:5001/api/users"; // Register URL

    try {
      const { data } = await axios.post(url, { email, password });
      console.log("Success:", data);
      
      // Use the token from the server response, or create a fallback
      const authToken = data.token || `fallback-jwt-token-${Date.now()}`;
      
      // Save user data and token using auth utility
      auth.login(data, authToken);
      
      // Redirect to dashboard
      navigate('/dashboard');

    } catch (error) {
      console.error("Authentication Error:", error.response?.data?.message || error.message);
      setError(error.response?.data?.message || "An error occurred during authentication.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="mx-auto h-12 w-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-xl font-bold">📝</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              {isLoginMode ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-gray-500 mt-2">
              {isLoginMode
                ? "Sign in to access your notes"
                : "Join us to start taking notes"}
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <AuthForm
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isLoginMode={isLoginMode}
            setIsLoginMode={setIsLoginMode}
            isLoading={isLoading}
          />

          {/* Social Login Options */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-6">
              <SocialLogins />
            </div>
          </div>

          {/* Footer Text */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              By signing in, you agree to our{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;