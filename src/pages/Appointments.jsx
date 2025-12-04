import React, { useEffect, useState } from "react";
import BottomNav from "./Home/BottomNav";
import { FiArrowLeft } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(data);
  }, []);
  const navigate = useNavigate();
  return (

    <>
    <div className="p-4 min-h-screen bg-[#f7faff]">
        <div className="flex items-center gap-3 mb-4">
            <button
                onClick={() => navigate(-1)}
                className="h-10 w-10 bg-white rounded-xl shadow flex items-center justify-center"
              >
                <FiArrowLeft size={22} />
            </button>
          <h2 className="text-lg font-semibold text-gray-700">Your Appointments</h2>
        </div>
      {appointments.length === 0 && (
        <p className="text-gray-500 text-center mt-10">No appointments yet.</p>
      )}

      <div className="flex flex-col gap-4">
        {appointments.map((appt) => (
          <div
            key={appt.id}
            className="bg-white p-4 shadow rounded-2xl"
          >
            <h3 className="font-semibold text-gray-700">{appt.doctor.name}</h3>
            <p className="text-sm text-gray-500">{appt.doctor.speciality}</p>

            <div className="mt-2 text-sm">
              <p className="text-sm font-medium text-gray-700"><b>Date:</b> {appt.date}</p>
              <p className="text-sm font-medium text-gray-700"><b>Time:</b> {appt.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <BottomNav/>
    </>
  );
}
