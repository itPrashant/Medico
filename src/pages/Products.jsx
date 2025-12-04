import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiBell, FiSearch, FiSliders, FiCamera } from "react-icons/fi";
import Slider from "react-slick";
import BottomNav from "./Home/BottomNav";
import pills from '../assets/icons/pills.png'
import herbal from '../assets/icons/herbal-treatment.png'
import babyproduct from '../assets/icons/baby.png'
import supplement from '../assets/icons/supplement.png'

const Products = () => {
  const nav = useNavigate();

  const offers = [
    {
      id: 1,
      bg: "bg-gradient-to-r from-blue-400 to-blue-600",
      title: "Flat 20% Off",
      desc: "On all Ayurvedic Medicines",
    },
    {
      id: 2,
      bg: "bg-gradient-to-r from-green-400 to-green-600",
      title: "Buy 1 Get 1",
      desc: "On selected health products",
    },
  ];

  const categories = [
    { id: 1, name: "Medicines", icon: pills, redirect: "Pharmacy" },
    { id: 2, name: "Ayurvedic", icon: herbal, redirect: "" },
    { id: 3, name: "Baby Products", icon: babyproduct, redirect: "" },
    { id: 4, name: "Supplements", icon: supplement, redirect: "" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2200,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="min-h-screen bg-[#f7faff] px-4 pt-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link
          to="/Home"
          className="h-10 w-10 bg-white rounded-xl shadow flex items-center justify-center"
        >
          <FiArrowLeft size={22} />
        </Link>
        

        <h1 className="text-lg font-semibold">Categories</h1>

        <div className="h-10 w-10 rounded-full bg-white shadow flex items-center justify-center">
          <FiBell size={22} />
        </div>
      </div>

      {/* Search Box 
      <div className="bg-white shadow-md rounded-2xl flex items-center px-4 py-3 mt-6 gap-3">
        <FiSearch size={20} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search here..."
          className="flex-1 outline-none text-xs bg-transparent"
        />
        <div className="h-9 w-9 flex items-center justify-center bg-green-500 text-white rounded-xl shadow">
          <FiSliders />
        </div>
      </div>
*/}
      {/* Upload Prescription 
      <div className="bg-green-500 shadow-lg text-white rounded-2xl px-4 py-4 flex items-center justify-center gap-3 mt-5">
        <FiCamera size={22} />
        <span className="font-medium">Upload your Prescription</span>
      </div>
        */}
      {/* Offer Slider */}
      <div className="mt-6">
        <Slider {...sliderSettings}>
          {offers.map((offer) => (
            <div key={offer.id}>
              <div className={`${offer.bg} rounded-2xl p-5 text-white shadow-md`}>
                <h2 className="text-xl font-bold">{offer.title}</h2>
                <p className="text-sm mt-1">{offer.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Categories */}
      <div className="mt-6 mb-6">
        <h2 className="mt-6 text-lg font-bold text-green-500">Top Categories</h2>
        <p className="text-gray-700 text-sm font-medium mb-3">Get discounts & offers</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white shadow p-5 rounded-2xl flex flex-col items-center justify-center"
            onClick={() => cat.redirect && nav(`/${cat.redirect.toLowerCase()}`)}
          >
            <div className="h-16 w-16 flex items-center justify-center">
              {/* {cat.icon} */}
              <img src={cat.icon}></img>
            </div>
            <p className="mt-4 text-sm font-semibold text-gray-700">{cat.name}</p>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default Products;