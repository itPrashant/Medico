import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Onboarding from "./components/Onboarding/Onboarding";
import WelcomeScreen from "./screens/WelcomeScreen";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

import Home from "./pages/Home/Home";
import DoctorsList from "./pages/DoctorsList";
import Pharmacy from "./pages/Pharmacy";
import Products from "./pages/Products";

// ❗ Correct imports — replace these with your actual component paths
import BookAppointmentScreen from "./pages/BookAppointmentScreen";
import AppointmentConfirmation from "./pages/AppointmentConfirmation";
import Appointments from "./pages/Appointments";

import "./index.css";

export default function App() {
  useEffect(() => {
    const handleTouchEnd = () => {
      const viewport = document.querySelector("meta[name=viewport]");
      viewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1, maximum-scale=1"
      );
    };

    const handleFocusIn = () => {
      const viewport = document.querySelector("meta[name=viewport]");
      viewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1, maximum-scale=1"
      );
    };

    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("focusin", handleFocusIn);

    return () => {
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("focusin", handleFocusIn);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main Screens */}
        <Route path="/home" element={<Home />} />
        <Route path="/doctorsList" element={<DoctorsList />} />

        {/* Pharmacy / Products */}
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/products" element={<Products />} />

        {/* Booking Routes (correct mapping) */}
        <Route
          path="/book-appointment"
          element={<BookAppointmentScreen />}
        />

        <Route
          path="/appointment-confirmation"
          element={<AppointmentConfirmation />}
        />

        <Route path="/appointments" element={<Appointments />} />

        {/* Keep 404 redirect LAST */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
