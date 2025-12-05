import React, { useEffect, useState } from "react";
import BottomNav from "./Home/BottomNav";
import { FiArrowLeft, FiCalendar, FiClock, FiMapPin, FiUser, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [filter, setFilter] = useState("all"); // all, upcoming, past

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("appointments")) || [];
    // Sort by date (newest first)
    const sortedData = data.sort((a, b) => new Date(b.id) - new Date(a.id));
    setAppointments(sortedData);
  }, []);

  const navigate = useNavigate();

  const filteredAppointments = appointments.filter(appt => {
    const appointmentDate = new Date(appt.date);
    const today = new Date();
    
    if (filter === "upcoming") return appointmentDate >= today;
    if (filter === "past") return appointmentDate < today;
    return true;
  });

  const getStatusColor = (status) => {
    switch(status?.toLowerCase()) {
      case "confirmed": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-blue-100 text-blue-800";
    }
  };

  const formatTime = (time) => {
    return time || "10:00 AM";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 pt-6 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="h-10 w-10 bg-white rounded-xl shadow flex items-center justify-center hover:shadow-md transition"
          >
            <FiArrowLeft size={22} className="text-gray-700" />
          </button>
          <div className="text-center">
            <h1 className="text-lg font-bold text-gray-800">My Appointments</h1>
            <p className="text-xs text-gray-500">Track all your consultations</p>
          </div>
          <div className="h-10 w-10 bg-white rounded-xl shadow flex items-center justify-center">
            <FiCalendar size={20} className="text-blue-500" />
          </div>
        </div>

        {/* Stats Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{appointments.length}</p>
              <p className="text-xs text-gray-600">Total</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">
                {appointments.filter(a => new Date(a.date) >= new Date()).length}
              </p>
              <p className="text-xs text-gray-600">Upcoming</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-600">
                {appointments.filter(a => new Date(a.date) < new Date()).length}
              </p>
              <p className="text-xs text-gray-600">Past</p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex bg-white rounded-2xl shadow-lg p-1 mb-6">
          {["all", "upcoming", "past"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                filter === tab
                  ? "bg-blue-500 text-white shadow"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Appointments List */}
        {filteredAppointments.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <FiCalendar size={36} className="text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">No appointments found</h3>
            <p className="text-gray-500 text-center mb-6">
              {filter === "all" 
                ? "You haven't booked any appointments yet."
                : `No ${filter} appointments found.`
              }
            </p>
            <button
              onClick={() => navigate("/doctorslist")}
              className="bg-blue-500 text-white px-6 py-2 rounded-xl font-medium shadow hover:bg-blue-600 transition"
            >
              Book Appointment
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredAppointments.map((appt) => {
              const isUpcoming = new Date(appt.date) >= new Date();
              
              return (
                <div
                  key={appt.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Appointment Header */}
                  <div className="bg-gradient-to-r from-blue-50 to-white p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(appt.status)}`}>
                            {appt.status?.toUpperCase() || "CONFIRMED"}
                          </span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {isUpcoming ? "UPCOMING" : "COMPLETED"}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 font-medium">ID: {appt.appointmentId || "APT" + appt.id.toString().slice(-6)}</p>
                      </div>
                      <button className="text-blue-500 hover:text-blue-700">
                        <FiChevronRight size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl overflow-hidden border-2 border-blue-100">
                        <img
                          src={appt.doctor?.avatar || appt.doctor?.image}
                          alt={appt.doctor?.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800">{appt.doctor?.name}</h3>
                        <p className="text-blue-500 text-sm font-medium">{appt.doctor?.speciality}</p>
                      </div>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <FiCalendar size={16} className="text-blue-500" />
                        <div>
                          <p className="text-xs text-gray-500">Date</p>
                          <p className="text-sm font-semibold text-gray-800">
                            {formatDate(appt.date)}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <FiClock size={16} className="text-blue-500" />
                        <div>
                          <p className="text-xs text-gray-500">Time</p>
                          <p className="text-sm font-semibold text-gray-800">
                            {formatTime(appt.time)}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <FiMapPin size={16} className="text-blue-500" />
                        <div>
                          <p className="text-xs text-gray-500">Hospital</p>
                          <p className="text-sm font-semibold text-gray-800">
                            {appt.doctor?.hospital || "Not specified"}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <FiUser size={16} className="text-blue-500" />
                        <div>
                          <p className="text-xs text-gray-500">Fees</p>
                          <p className="text-sm font-semibold text-gray-800">
                            ₹{appt.doctor?.price || "700"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {isUpcoming && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50">
                      <div className="flex gap-2">
                        <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                          Reschedule
                        </button>
                        <button className="flex-1 bg-white border border-red-300 text-red-600 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition">
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Book New Button for empty state */}
        {filteredAppointments.length === 0 && (
          <div className="fixed bottom-20 left-4 right-4">
            <button
              onClick={() => navigate("/doctorslist")}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition"
            >
              Book New Appointment
            </button>
          </div>
        )}
      </div>
      <BottomNav />
    </>
  );
}