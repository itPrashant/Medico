import React from "react";
import {FiSearch, FiSliders } from "react-icons/fi";
export default function SearchBar() {
  return (
    <div className="bg-white shadow-md rounded-2xl flex items-center px-4 py-3 mt-3 gap-3">
        <FiSearch size={20} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search by name, speciality, state..."
          className="flex-1 outline-none text-xs bg-transparent"
        />
        <div className="h-9 w-9 flex items-center justify-center bg-green-500 text-white rounded-xl shadow">
          <FiSliders />
        </div>
      </div>
  );
};
