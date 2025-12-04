import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiCheckCircle, FiArrowLeft } from "react-icons/fi";
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
    };

    const existing =
      JSON.parse(localStorage.getItem("appointments")) || [];
      existing.push(newAppointment);
      localStorage.setItem("appointments", JSON.stringify(existing));
      navigate("/appointments");
  };

  return (
    <>
      
      <div className="p-5 min-h-screen bg-[#f7faff]">
        <button
            onClick={() => navigate(-1)}
            className="h-10 w-10 bg-white rounded-xl shadow flex items-center justify-center"
          >
            <FiArrowLeft size={22} />
        </button>
        <div className="flex flex-col items-center">
          <FiCheckCircle size={70} className="text-green-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Confirm Appointment</h2>
          <div className="bg-white p-4 rounded-2xl w-full shadow mb-4">
            <p className="font-semibold text-md text-gray-700">{doctor?.name}</p>
            <p className="text-gray-700 text-sm">{doctor?.speciality}</p>

            <div className="mt-3">
              <p><b>Date:</b> {selectedDate.toDateString()}</p>
              <p><b>Time:</b> {selectedTime}</p>
            </div>
          </div>

          <button
            onClick={handleConfirm}
            className="w-full bg-green-500 text-white py-3 rounded-xl mt-3 shadow"
          >
            Confirm Appointment
          </button>
        </div>
      </div>
      <BottomNav/>
    </>
  );
}
