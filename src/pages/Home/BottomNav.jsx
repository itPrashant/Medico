import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiCalendar, FiShoppingBag, FiUser } from "react-icons/fi";

export default function BottomNav() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", icon: <FiHome size={20} />, label: "Home", to: "/" },
    { id: "appointments", icon: <FiCalendar size={20} />, label: "Appointments", to: "/appointments" },
    { id: "orders", icon: <FiShoppingBag size={20} />, label: "Orders", to: "/cart" },
    { id: "profile", icon: <FiUser size={20} />, label: "Profile", to: "/profile" },
  ];

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      <div className="
        bg-white/90 backdrop-blur-xl shadow-lg 
        rounded-3xl flex justify-between px-4 py-3
      ">
        
        {navItems.map((item) => (
          <Link
            to={item.to}
            key={item.id}
            onClick={() => setActive(item.id)}
            className="flex-1"
          >
            <div
              className={`flex flex-col items-center transition-all duration-200 ${
                active === item.id ? "text-[#2b7fff]" : "text-gray-700"
              }`}
            >
              <div
                className={`p-2 rounded-full transition-all duration-200 ${
                  active === item.id ? "bg-[#fb6d6033]" : ""
                }`}
              >
                {item.icon}
              </div>

              <span className="text-[10px] mt-1 font-medium">
                {item.label}
              </span>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
};
