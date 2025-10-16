import { Routes, Route, Navigate } from "react-router-dom";
// New patients dashboard pages
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import About from "./pages/About";
// Shared layout
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/about" element={<About />} />
          {/* Backward compatibility redirects from previous app */}
          <Route path="/auth" element={<Navigate to="/" />} />
          <Route path="/dashboard" element={<Navigate to="/patients" />} />
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
