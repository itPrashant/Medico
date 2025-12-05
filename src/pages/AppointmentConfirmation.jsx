import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiCheckCircle, FiArrowLeft, FiClock, FiCalendar, FiUser, FiDollarSign } from "react-icons/fi";
import BottomNav from "./Home/BottomNav";

export default function AppointmentConfirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { doctor, selectedDate, selectedTime } = state || {};

  const handleConfirm = () => {
    const newAppointment = {
      doctor,
      date: selectedDate.toDateString(),
      time: selectedTime,
      id: Date.now(),
      status: "confirmed",
      appointmentId: "APT" + Date.now().toString().slice(-6),
    };

    const existing = JSON.parse(localStorage.getItem("appointments")) || [];
    existing.push(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(existing));
    
    // Show confirmation
    alert(`Appointment confirmed! ID: ${newAppointment.appointmentId}`);
    navigate("/appointments");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 pt-6 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleBack}
            className="h-10 w-10 bg-white rounded-xl shadow flex items-center justify-center hover:shadow-md transition"
          >
            <FiArrowLeft size={22} className="text-gray-700" />
          </button>
          <div className="text-center">
            <h1 className="text-lg font-bold text-gray-800">Confirm Details</h1>
            <p className="text-xs text-gray-500">Review before confirmation</p>
          </div>
          <div className="w-10"></div> {/* Spacer for alignment */}
        </div>

        {/* Success Icon */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <div className="h-32 w-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <FiCheckCircle size={60} className="text-white" />
            </div>
            <div className="absolute -bottom-2 -right-2 h-10 w-10 bg-white rounded-full flex items-center justify-center shadow">
              <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center">
                <FiCheckCircle size={12} className="text-white" />
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">Confirm Appointment</h2>
          <p className="text-gray-600 text-sm mt-1">Almost done! Review your details</p>
        </div>

        {/* Appointment Details Card */}
        <div className="bg-white rounded-2xl shadow-xl mb-6 overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-xs font-medium">APPOINTMENT ID</p>
                <p className="text-white font-bold">APT{Date.now().toString().slice(-6)}</p>
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full">
                <span className="text-white text-xs font-semibold">CONFIRMATION</span>
              </div>
            </div>
          </div>

          {/* Doctor Info */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-14 w-14 rounded-xl overflow-hidden border-2 border-blue-100">
                <img
                  src={doctor?.avatar || doctor?.image}
                  alt={doctor?.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{doctor?.name}</h3>
                <p className="text-blue-500 text-sm font-medium">{doctor?.speciality}</p>
                <p className="text-gray-500 text-xs mt-1">{doctor?.hospital}</p>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-3 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <FiCalendar size={16} className="text-blue-500" />
                  <span className="text-xs text-gray-600 font-medium">Date</span>
                </div>
                <p className="font-semibold text-gray-800">
                  {selectedDate?.toDateString() || "Not selected"}
                </p>
              </div>

              <div className="bg-blue-50 p-3 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <FiClock size={16} className="text-blue-500" />
                  <span className="text-xs text-gray-600 font-medium">Time</span>
                </div>
                <p className="font-semibold text-gray-800">{selectedTime || "Not selected"}</p>
              </div>

              <div className="bg-blue-50 p-3 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <FiUser size={16} className="text-blue-500" />
                  <span className="text-xs text-gray-600 font-medium">Duration</span>
                </div>
                <p className="font-semibold text-gray-800">15-20 minutes</p>
              </div>

              <div className="bg-blue-50 p-3 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <FiDollarSign size={16} className="text-blue-500" />
                  <span className="text-xs text-gray-600 font-medium">Fee</span>
                </div>
                <p className="font-semibold text-gray-800">₹{doctor?.price || "700"}</p>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-yellow-50 border-t border-yellow-100 p-4">
            <div className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-yellow-600 text-xs font-bold">!</span>
              </div>
              <div>
                <p className="text-xs text-yellow-800 font-medium">Important Note</p>
                <p className="text-xs text-yellow-700 mt-1">
                  Please arrive 15 minutes before your appointment time. Bring your previous medical records if any.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={handleBack}
            className="flex-1 bg-white border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold shadow hover:bg-gray-50 transition"
          >
            Edit Details
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-green-600 hover:to-green-700 transition active:scale-95"
          >
            Confirm Appointment
          </button>
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h4 className="font-semibold text-gray-800 mb-2">What happens next?</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-xs font-bold">1</span>
              </div>
              <p className="text-sm text-gray-600">
                You'll receive a confirmation SMS and email with appointment details
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-xs font-bold">2</span>
              </div>
              <p className="text-sm text-gray-600">
                Reminder will be sent 1 hour before your appointment
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-xs font-bold">3</span>
              </div>
              <p className="text-sm text-gray-600">
                Cancellation is free if done 24 hours before appointment
              </p>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
}