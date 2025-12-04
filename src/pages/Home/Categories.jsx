import React from "react";
import { redirect, useNavigate } from "react-router-dom";
import doc from '../../assets/icons/stethoscope.png'
import pills from '../../assets/icons/pills.png'
import Equip from '../../assets/icons/medical.png'

export default function Categories() {
  const list = [
    { title: "Doctors", icon: doc, color: "bg-primary", redirect:"DoctorsList" },
    // { title: "Pharmacy", icon: pills, color: "bg-primary", redirect:"Pharmacy" },
    { title: "Pharmacy", icon: pills, color: "bg-primary", redirect:"Products" },
    { title: "Equipments", icon: Equip, color: "bg-primary", redirect:"" },
    // { title: "More", icon: "⋯", color: "bg-yellow-400" },
  ];
  const nav = useNavigate();
  return (
    <div className="flex gap-3 my-3">
      {list.map((c, i) => (
        <div
          key={i}
          className={`flex-1 rounded-xl p-3 text-gray-700 ${c.color} shadow flex items-center justify-center flex-col`}
          onClick={()=>nav(`/${c.redirect.toLowerCase()}`)}
        >
          <div className="w-11 h-11 flex items-center justify-center text-xl">
            {/* {c.icon} */}
            <img src={c.icon}></img>
          </div>
          <div className="mt-2 text-xs font-semibold text-center">{c.title}</div>
        </div>
      ))}
    </div>
  );
}