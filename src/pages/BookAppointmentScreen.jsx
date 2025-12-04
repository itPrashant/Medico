import React, { useState } from "react";
import Calendar from "react-calendar";
import { useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function BookAppointmentScreen() {
  const { state } = useLocation();
  const doctor = state?.doctor;
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM",
    "06:00 PM", "07:00 PM"
  ];

  const handleProceed = () => {
    if (!selectedTime) {
      alert("Please select a time slot");
      return;
    }

    navigate("/appointment-confirmation", {
      state: {
        doctor,
        selectedDate,
        selectedTime,
      },
    });
  };

  return (
    <div className="p-4 min-h-screen bg-[#f7faff] pb-20">

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => navigate(-1)}
          className="h-10 w-10 bg-white rounded-xl shadow flex items-center justify-center"
        >
          <FiArrowLeft size={22} />
        </button>
        <h2 className="text-lg font-semibold">Book Appointment</h2>
      </div>

      {/* Doctor Details */}
      <div className="bg-white p-4 rounded-2xl shadow mb-4">
        <div className="flex items-center gap-3">
          <img
            src={doctor?.image}
            className="h-16 w-16 rounded-xl object-cover"
          />
          <div>
            <h2 className="font-semibold">{doctor?.name}</h2>
            <p className="text-sm text-gray-500">{doctor?.speciality}</p>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-white p-4 rounded-2xl shadow mb-4">
        <h3 className="font-semibold mb-2">Select Date</h3>
        <Calendar onChange={setSelectedDate} value={selectedDate} />
      </div>

      {/* Time Slots */}
      <div className="bg-white p-4 rounded-2xl shadow mb-20">
        <h3 className="font-semibold mb-3">Select Time</h3>

        <div className="grid grid-cols-3 gap-3">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`py-2 rounded-xl border text-sm 
                ${selectedTime === time
                  ? "bg-green-500 text-white"
                  : "bg-gray-100"}`}
            >
              {time}
            </button>
          ))}
        </div>

        <button
          onClick={handleProceed}
          className="w-full mt-5 bg-green-500 text-white py-3 rounded-xl shadow"
        >
          Proceed to Confirm
        </button>
      </div>
    </div>
  );
}
