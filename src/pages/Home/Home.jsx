import React from "react";
import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import BannerCard from "./BannerCard";
import DoctorCard from "./DoctorCard";
import BottomNav from "./BottomNav";
import { Navigate, useNavigate } from "react-router-dom";
import doc from '../../assets/hedoc.jpg'

export default function Home() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Roboto Kale",
      spec: "Heart Surgeon",
      hospital: "Apollo Hospital",
      rating: 4.9,
      img: doc,
    },
    {
      id: 2,
      name: "Dr. Lily Rozar",
      spec: "Neurologist",
      hospital: "VSG Hospital",
      rating: 4.8,
      img: doc,
    },
    {
      id: 3,
      name: "Dr. Lily Rozar",
      spec: "Dantist",
      hospital: "VSG Hospital",
      rating: 4.8,
      img: doc,
    },
    {
      id: 4,
      name: "Dr. Lily Rozar",
      spec: "Orthopedic",
      hospital: "VSG Hospital",
      rating: 4.8,
      img: doc,
    },
  ];


 const nav = useNavigate();
  return (
    <>
      <div className="px-4 pb-24 pt-3 max-w-md mx-auto">
        <TopBar />
        <SearchBar />
        <Categories />
        <BannerCard />

        <div className="flex items-center justify-between my-4">
          <h3 className="font-semibold text-md text-gray-700">Top Doctors</h3>
          <button className="text-primary text-xs text-gray-700 font-semibold" onClick={(e) => { e.preventDefault(); nav("/DoctorsList"); }}>View All</button>
        </div>

        <div className="overflow-x-auto horizontal-scroll pb-3">
          {doctors.map((d) => (
            <DoctorCard key={d.id} doctor={d} />
          ))}
        </div>
      </div>
      <BottomNav />
    </>
  );
}