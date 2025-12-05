import React from "react";
import bannerImage from "../../assets/bg/7317077.png";

export default function BannerCard() {
  return (
    <div className="bg-blue-500 rounded-xl shadow p-4 flex items-center gap-3 my-4">
      <div className="flex-1">
        <p className="text-white text-xs">All you need to know about your</p>
        <h2 className="text-lg font-bold text-white">Health!</h2>

        <button className="mt-3 bg-white text-blue-500 px-4 py-2 rounded-lg text-xs font-medium shadow">
          Know More
        </button>
      </div>

      <div className="w-24 h-24 overflow-hidden flex items-center justify-center">
        <img src={bannerImage} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
