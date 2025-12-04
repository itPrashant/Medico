import React from "react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-4 right-4 flex gap-3">
      <button className="flex-1 bg-white rounded-xl p-3 text-center shadow text-primary font-semibold">
        🏠
        <div className="text-xs font-normal">Home</div>
      </button>

      {/* <button className="flex-1 bg-white rounded-xl p-3 text-center shadow">
        🔍
        <div className="text-xs">Search</div>
      </button> */}

      <button className="flex-1 bg-white rounded-xl p-3 text-center shadow">
        📅
        <div className="text-xs">Appointments</div>
      </button>

      <button className="flex-1 bg-white rounded-xl p-3 text-center shadow">
        🛒
        <div className="text-xs">Orders</div>
      </button>

      <button className="flex-1 bg-white rounded-xl p-3 text-center shadow">
        👤
        <div className="text-xs">Profile</div>
      </button>
    </div>
  );
}
