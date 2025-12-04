import React from "react";

export default function DoctorCard({ doctor }) {
  return (
    <div className="bg-white rounded-xl shadow-xl p-3 flex gap-3 mb-2">
      <img
        src={doctor.img}
        className="w-16 h-16 rounded-lg object-cover"
        alt=""
      />

      <div>
        <p className="font-semibold text-sm">{doctor.name}</p>
        <p className="text-xs text-gray-500">
          {doctor.spec} • {doctor.hospital}
        </p>

        <div className="flex justify-between items-center mt-2">
          <span className="text-green-500 text-xs font-semibold">
            ★ {doctor.rating}
          </span>
          <button className="bg-green-500 text-white px-3 py-1 rounded-lg text-xs shadow">
            Book
          </button>
        </div>
      </div>
    </div>
  );
}