import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiClock, FiCalendar, FiChevronRight, FiChevronLeft } from "react-icons/fi";

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

  // Custom calendar logic
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return {
      firstDay,
      lastDay,
      days
    };
  };
  
  const { days } = getDaysInMonth(currentMonth);
  
  const isToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };
  
  const isSelected = (date) => {
    return date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear();
  };
  
  const formatMonthYear = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };
  
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  
  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  return (
    <div className="min-h-screen bg-[#f7faff] px-4 pt-6 pb-24">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="h-10 w-10 bg-white rounded-xl shadow flex items-center justify-center hover:shadow-md transition"
        >
          <FiArrowLeft size={22} className="text-gray-700" />
        </button>
        <div>
          <h1 className="text-lg font-semibold text-gray-800">Book Appointment</h1>
          <p className="text-xs text-gray-500">Schedule your consultation</p>
        </div>
      </div>

      {/* Doctor Card */}
      <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
        <div className="flex items-start gap-4">
          <img
            src={doctor?.avatar || doctor?.image}
            alt={doctor?.name}
            className="h-16 w-16 rounded-xl object-cover border-2 border-blue-100"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-bold text-gray-800">{doctor?.name}</h2>
                <p className="text-sm text-blue-500 font-medium">{doctor?.speciality}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {doctor?.hospital}
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {doctor?.state}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-yellow-500 text-sm font-semibold">
                <span>★</span>
                <span>{doctor?.rating || "4.8"}</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
              <div className="flex items-center gap-2 text-gray-600">
                <FiClock size={14} />
                <span className="text-xs font-medium">{doctor?.time || "10:40 - 2:40 AM"}</span>
              </div>
              <div className="text-blue-500 font-bold">
                ₹{doctor?.price || "700"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Calendar */}
      <div className="bg-white rounded-2xl shadow-lg p-5 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <FiCalendar size={20} className="text-blue-500" />
          <h3 className="font-semibold text-gray-800">Select Date</h3>
        </div>
        
        <div className="border border-gray-200 rounded-xl p-4">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={goToPreviousMonth}
              className="h-8 w-8 rounded-lg flex items-center justify-center hover:bg-gray-100"
            >
              <FiChevronLeft size={20} className="text-gray-700" />
            </button>
            
            <h3 className="font-bold text-gray-800 text-lg">
              {formatMonthYear(currentMonth)}
            </h3>
            
            <button
              onClick={goToNextMonth}
              className="h-8 w-8 rounded-lg flex items-center justify-center hover:bg-gray-100"
            >
              <FiChevronRight size={20} className="text-gray-700" />
            </button>
          </div>
          
          {/* Week Days */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map((day) => (
              <div key={day} className="text-center">
                <span className="text-xs font-semibold text-gray-500">
                  {day}
                </span>
              </div>
            ))}
          </div>
          
          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {/* Empty cells for days before the first of the month */}
            {Array.from({ length: days[0].getDay() }).map((_, index) => (
              <div key={`empty-${index}`} className="h-10"></div>
            ))}
            
            {/* Days of the month */}
            {days.map((date) => {
              const today = isToday(date);
              const selected = isSelected(date);
              const isPast = date < new Date() && !today;
              
              return (
                <button
                  key={date.toISOString()}
                  onClick={() => !isPast && setSelectedDate(date)}
                  disabled={isPast}
                  className={`
                    h-10 rounded-lg flex items-center justify-center text-sm font-medium
                    transition-all duration-200
                    ${selected 
                      ? 'bg-blue-500 text-white shadow-lg transform scale-105' 
                      : today 
                        ? 'bg-blue-100 text-blue-600 font-semibold' 
                        : isPast 
                          ? 'text-gray-300 cursor-not-allowed' 
                          : 'text-gray-700 hover:bg-gray-100 hover:shadow'
                    }
                  `}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>
        
        <div className="flex items-center gap-3 mt-4 p-3 bg-blue-50 rounded-xl">
          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
          <span className="text-sm text-gray-700 font-medium">
            Selected: {selectedDate.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
      </div>

      {/* Time Selection */}
      <div className="bg-white rounded-2xl shadow-lg p-5 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <FiClock size={20} className="text-blue-500" />
          <h3 className="font-semibold text-gray-800">Select Time Slot</h3>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                selectedTime === time
                  ? "bg-blue-500 text-white shadow-lg transform scale-105"
                  : "bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow"
              }`}
            >
              {time}
            </button>
          ))}
        </div>

        {selectedTime && (
          <div className="mt-4 p-3 bg-green-50 rounded-xl border border-green-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-700 font-medium">
                  Selected: {selectedTime}
                </span>
              </div>
              <button
                onClick={() => setSelectedTime("")}
                className="text-xs text-red-500 hover:text-red-700 font-medium"
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Proceed Button */}
      <div className="fixed bottom-20 left-4 right-4">
        <button
          onClick={handleProceed}
          disabled={!selectedTime}
          className={`w-full py-4 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 ${
            selectedTime
              ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl active:scale-95"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          {selectedTime ? (
            <div className="flex items-center justify-center gap-2">
              <span>Proceed to Confirm</span>
              <FiChevronRight size={18} />
            </div>
          ) : (
            "Select a Time Slot"
          )}
        </button>
        
        <div className="text-center mt-2">
          <p className="text-xs text-gray-500">
            No cancellation fee if cancelled 24 hours prior
          </p>
        </div>
      </div>
    </div>
  );
}