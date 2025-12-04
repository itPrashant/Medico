import React from "react";

export default function SearchBar() {
  return (
    <div className="mt-3 mb-3 flex items-center gap-3">
      <div className="flex items-center flex-1 bg-white rounded-xl shadow px-3 py-2">
        <svg
          width="20"
          height="20"
          stroke="#555"
          fill="none"
          strokeWidth="2"
          className="mr-2"
        >
          <circle cx="9" cy="9" r="7" />
          <path d="M14 14l4 4" />
        </svg>

        <input
          className="flex-1 text-xs outline-none"
          placeholder="Search Medicines, Doctors etc..."
        />

        {/* <button className="ml-2 bg-primary text-white px-2 py-1 rounded-lg text-sm shadow">
          🎤
        </button> */}
      </div>

      <button className="w-11 h-11 bg-white rounded-xl shadow flex items-center justify-center">
        <svg width="18" height="18" stroke="#000" strokeWidth="2">
          <path d="M12 4l-4 8M12 12l-4-8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
