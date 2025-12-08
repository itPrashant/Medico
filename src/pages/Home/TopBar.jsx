import React from "react";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between pt-4 pb-3">
      <button className="p-2 bg-white shadow rounded-lg">
        <svg width="22" height="22" fill="none" stroke="black" strokeWidth="2">
          <path d="M3 6h16M3 12h16M3 18h16" strokeLinecap="round" />
        </svg>
      </button>

      <div className="text-primary font-semibold flex items-center gap-1 text-sm">
        <svg width="16" height="16" fill="#2DBE60">
          <path d="M8 2a4 4 0 00-4 4c0 3 4 8 4 8s4-5 4-8a4 4 0 00-4-4z" />
        </svg>
        Paris, London
      </div>

      <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center shadow">
        <svg width="18" height="18" stroke="white" strokeWidth="2" fill="none">
          <path d="M5 10l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};
