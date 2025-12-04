import React from "react";
import bannerImage from "../../assets/bg/7317077.png";

export default function BannerCard() {
  return (
    <div className="bg-green-500 rounded-xl shadow p-4 flex items-center gap-3 my-4">
      <div className="flex-1">
        <p className="text-white text-xs">All you need to know about your</p>
        <h2 className="text-lg font-bold text-white">Health!</h2>

        <button className="mt-3 bg-white text-green-500 px-4 py-2 rounded-lg text-sm font-semibold shadow">
          Know More
        </button>
      </div>

      <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
        <img src={bannerImage} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
