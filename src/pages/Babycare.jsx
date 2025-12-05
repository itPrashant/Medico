import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "./Home/BottomNav";
import { FiArrowLeft, FiSearch, FiSliders, FiShoppingCart } from "react-icons/fi";

// Special baby care categories
// const babyCategories = [
//   { id: 1, name: "Baby Skin Care", icon: "🧴" },
//   { id: 2, name: "Baby Diapers", icon: "🍼" },
//   { id: 3, name: "Baby Food", icon: "🍎" },
//   { id: 4, name: "Baby Bath Essentials", icon: "🛁" },
// ];

export default function BabyCare({ addToCart }) {
     const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Johnson's Baby Lotion",
      brand: "Johnson's",
      price: 129,
      img: "https://i.ibb.co/zmb5z7C/johnson-lotion.png",
    },
    {
      id: 2,
      name: "Johnson's Baby Powder",
      brand: "Johnson's",
      price: 149,
      img: "https://i.ibb.co/02V2Z2B/johnson-powder.png",
    },
    {
      id: 3,
      name: "Johnson's Baby Shampoo",
      brand: "Johnson's",
      price: 89,
      img: "https://i.ibb.co/TqJydRv/johnson-shampoo.png",
    },
    {
      id: 4,
      name: "Johnson's Baby Oil",
      brand: "Johnson's",
      price: 119,
      img: "https://i.ibb.co/fCQ5TFT/johnson-oil.png",
    },
  ];

  // FILTER LOGIC
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.brand.toLowerCase().includes(search.toLowerCase())
  );

  const nav = useNavigate();
  return (
    <>
       
        <div className="min-h-screen px-4 pt-6 pb-24">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <button
                onClick={() => nav(-1)}
                className="h-10 w-10 bg-white rounded-xl shadow flex items-center justify-center"
                >
                <FiArrowLeft size={22} />
                </button>

                <h1 className="text-lg font-bold">Baby Care</h1>

                <button className="h-10 w-10 bg-white rounded-xl shadow flex items-center justify-center">
                <FiShoppingCart size={22} />
                </button>
            </div>


             {/* <div className="mt-6">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by brand or product name..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
            </div> */}

            {/* Search Box */}
            <div className="bg-white shadow-md rounded-2xl flex items-center px-4 py-3 mt-6 gap-3">
                <FiSearch size={20} className="text-gray-500" />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by brand or product name..."
                    className="flex-1 outline-none text-xs bg-transparent"
                />
                <div className="h-9 w-9 flex items-center justify-center bg-blue-500 text-white rounded-xl shadow">
                    <FiSliders />
                </div>
            </div>



            <div className="rounded-2xl p-6 mt-3 shadow-md bg-blue-500 ">
                <h2 className="text-xl font-bold text-[#f6f6f6]">Special Baby Care Sale</h2>
                <p className="text-sm text-white mt-1">
                    Up to 30% OFF on Diapers, Powder & Lotions
                </p>

                <button className="mt-3 bg-white text-blue-500 px-4 py-2 rounded-lg text-xs font-medium shadow">
                    Shop Now
                </button>
            </div>
            
            {/* Baby Sections 
            <h2 className="mt-6 text-lg font-bold text-gray-800">Explore Categories</h2>
            <div className="grid grid-cols-2 gap-4 mt-3">
                {babyCategories.map((cat) => (
                <div
                    key={cat.id}
                    className="bg-white p-5 rounded-2xl shadow flex flex-col items-center justify-center hover:scale-105 transition"
                >
                    <div className="text-4xl">{cat.icon}</div>
                    <p className="mt-2 text-sm font-semibold text-gray-700">
                    {cat.name}
                    </p>
                </div>
                ))}
            </div>*/}

                {/* Product List */}
            {/* <h2 className="mt-8 text-lg font-bold text-gray-700">Baby Essentials</h2> */}

            {/* Product Grid */}
            <div className="mt-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3">Baby Products</h2>
                {filteredProducts.length === 0 ? (
                    <p className="text-center text-gray-500 text-sm mt-5">
                    No products found
                    </p>
                ) : (
                        <div className="grid grid-cols-2 gap-4">
                            {filteredProducts.map((p) => (
                                <div key={p.id} className="p-3 bg-white rounded-xl shadow group">
                                    <img
                                        src={p.img}
                                        alt={p.name}
                                        className="w-full h-32 object-contain group-hover:scale-105 transition"
                                    />
                                    <h3 className="text-sm font-semibold text-gray-700 mt-2">{p.name}</h3>
                                    <p className="text-xs text-gray-500 font-semibold">{p.brand}</p>
                                    <p className="text-blue-500 text-xs font-bold mt-1">₹{p.price}</p>
                                    <button
                                        onClick={() => addToCart(p)}
                                        className="w-full mt-2 py-2 text-white bg-blue-500 rounded-lg text-sm font-medium"
                                    >
                                    Add to Cart
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        </div>
        <BottomNav />
    </>
  );
}

