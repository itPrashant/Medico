import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiBell,
  FiSearch,
  FiSliders,
  FiCamera,
} from "react-icons/fi";
import Slider from "react-slick";
import BottomNav from "./Home/BottomNav";
import pills from "../assets/icons/pills.png";

const Ayurvedic = () => {
  const [cart, setCart] = useState([]);

  // Update the addToCart function:
// Updated addToCart function for both Ayurvedic.js and Pharmacy.js
const addToCart = (product) => {
  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItemIndex = existingCart.findIndex(item => item.id === product.id);
  let updatedCart;
  if (existingItemIndex !== -1) {
    // Update quantity if product exists
    updatedCart = [...existingCart];
    updatedCart[existingItemIndex] = {
      ...updatedCart[existingItemIndex],
      qty: (updatedCart[existingItemIndex].qty || 1) + 1
    };
  } else {
    // Add new product to cart
    updatedCart = [...existingCart, {
      ...product,
      qty: 1,
      // Ensure all required fields are included
      price: parseFloat(product.price) || 0,
      image: product.image || product.img || "https://via.placeholder.com/80x80",
      packoff: product.packoff || product.brand || "Standard Pack"
    }];
  }
  
  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  setCart(updatedCart);
  window.dispatchEvent(new Event("cartUpdated"));
};

// Update the "Go to Cart" button:
<button 
  onClick={() => {
    // Ensure cart is saved before navigating
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    navigate("/cart");
  }}
  className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold text-sm shadow-lg hover:bg-blue-600 transition"
>
  Go to Cart ({cart.length} items)
</button>

  const [search, setSearch] = useState("");
  const increaseQty = (id) => {
    setCart(cart.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p)));
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const products = [
    {
      id: 1,
      name: "Patanjali Giloy Ghanvati",
      packoff: "60 Tablets",
      price: "95",
      mrp: "150",
      image: pills,
    },
    {
      id: 2,
      name: "Himalaya Liv.52 Tablets",
      packoff: "100 Tablets",
      price: "120",
      mrp: "160",
      image: pills,
    },
    {
      id: 3,
      name: "Dabur Chyawanprash",
      packoff: "500gm",
      price: "180",
      mrp: "240",
      image: pills,
    },
    {
      id: 4,
      name: "Baidhyanath Ashwagandha Tablets",
      packoff: "60 Tablets",
      price: "140",
      mrp: "190",
      image: pills,
    },
    {
      id: 5,
      name: "Zandu Pancharishta Digestive Tonic",
      packoff: "450ml",
      price: "115",
      mrp: "150",
      image: pills,
    },
    {
      id: 6,
      name: "Himalaya Septilin Tablets",
      packoff: "60 Tablets",
      price: "110",
      mrp: "150",
      image: pills,
    },
    {
      id: 7,
      name: "Patanjali Divya Mukta Vati",
      packoff: "60 Tablets",
      price: "85",
      mrp: "120",
      image: pills,
    },
    {
      id: 8,
      name: "Dabur Honitus Herbal Cough Syrup",
      packoff: "100ml",
      price: "60",
      mrp: "90",
      image: pills,
    },
    {
      id: 9,
      name: "Zandu Balm",
      packoff: "8ml",
      price: "38",
      mrp: "50",
      image: pills,
    },
    {
      id: 10,
      name: "Moov Pain Relief Cream",
      packoff: "30g",
      price: "58",
      mrp: "85",
      image: pills,
    },
    {
      id: 11,
      name: "Himalaya Triphala Tablets",
      packoff: "60 Tablets",
      price: "95",
      mrp: "130",
      image: pills,
    },
    {
      id: 12,
      name: "Organic India Tulsi Green Tea",
      packoff: "25 Tea Bags",
      price: "120",
      mrp: "165",
      image: pills,
    },
    {
      id: 13,
      name: "Baidhyanath Shankhpushpi Syrup",
      packoff: "200ml",
      price: "90",
      mrp: "130",
      image: pills,
    },
    {
      id: 14,
      name: "Dabur Pudin Hara Pearls",
      packoff: "10 Capsules",
      price: "25",
      mrp: "40",
      image: pills,
    },
    {
      id: 15,
      name: "Patanjali Aloe Vera Juice",
      packoff: "1 Litre",
      price: "180",
      mrp: "230",
      image: pills,
    },
    {
      id: 16,
      name: "Kapiva Amla Juice",
      packoff: "1 Litre",
      price: "190",
      mrp: "260",
      image: pills,
    },
    {
      id: 17,
      name: "Dabur Ashokarishta",
      packoff: "450ml",
      price: "120",
      mrp: "150",
      image: pills,
    },
    {
      id: 18,
      name: "Kerala Ayurveda Dasamoolarishtam",
      packoff: "450ml",
      price: "155",
      mrp: "200",
      image: pills,
    },
    {
      id: 19,
      name: "Himalaya Brahmi Tablets",
      packoff: "60 Tablets",
      price: "105",
      mrp: "140",
      image: pills,
    },
    {
      id: 20,
      name: "Patanjali Shilajit Capsule",
      packoff: "10 Capsules",
      price: "90",
      mrp: "120",
      image: pills,
    },
    {
      id: 21,
      name: "Dabur Amla Hair Oil",
      packoff: "200ml",
      price: "60",
      mrp: "85",
      image: pills,
    },
    {
      id: 22,
      name: "Navratna Cool Oil",
      packoff: "100ml",
      price: "75",
      mrp: "110",
      image: pills,
    },
    {
      id: 23,
      name: "Vicco Turmeric Skin Cream",
      packoff: "30g",
      price: "85",
      mrp: "120",
      image: pills,
    },
    {
      id: 24,
      name: "Ayush Kwath Immunity Booster",
      packoff: "100gm",
      price: "95",
      mrp: "140",
      image: pills,
    },
    {
      id: 25,
      name: "Patanjali Divya Peedantak Vati",
      packoff: "40 Tablets",
      price: "60",
      mrp: "80",
      image: pills,
    },
    {
      id: 26,
      name: "Kerala Ayurveda Punarnavadi Guggulu",
      packoff: "60 Tablets",
      price: "150",
      mrp: "210",
      image: pills,
    },
    {
      id: 27,
      name: "Zandu Kesari Jivan",
      packoff: "450gm",
      price: "210",
      mrp: "280",
      image: pills,
    },
    {
      id: 28,
      name: "Himalaya Koflet Syrup",
      packoff: "100ml",
      price: "55",
      mrp: "75",
      image: pills,
    },
    {
      id: 29,
      name: "Baidhynath Sitopaladi Churna",
      packoff: "60gm",
      price: "85",
      mrp: "130",
      image: pills,
    },
    {
      id: 30,
      name: "Dabur Hingwashtak Churna",
      packoff: "60gm",
      price: "75",
      mrp: "110",
      image: pills,
    },
  ];

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

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

  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-[#f7faff] px-4 pt-6 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link
            to="/Products"
            className="h-10 w-10 bg-white rounded-xl shadow flex items-center justify-center"
          >
            <FiArrowLeft size={22} />
          </Link>

          <h1 className="text-lg font-semibold">Ayurvedic</h1>

          <div className="h-10 w-10 rounded-full bg-white shadow flex items-center justify-center">
            <FiBell size={22} />
          </div>
        </div>

        {/* Search Box */}
        <div className="bg-white shadow-md rounded-2xl flex items-center px-4 py-3 mt-6 gap-3">
          <FiSearch size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none text-xs bg-transparent"
          />
          <div className="h-9 w-9 flex items-center justify-center bg-blue-500 text-white rounded-xl shadow">
            <FiSliders />
          </div>
        </div>

        {/* Showing Results */}
        <p className="mt-5 text-sm text-gray-600">
          Showing results for "{search || "all products"}"
        </p>

        {/* PRODUCT LIST */}
        <div className="mt-4 space-y-4">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow p-4 flex gap-4"
            >
              <img src={p.image} className="w-16 h-16 rounded-xl" />

              <div className="flex-1">
                <h2 className="font-semibold text-sm">{p.name}</h2>
                <p className="text-xs text-gray-500">10 Tablet(s) in Strip</p>

                <div className="flex items-center mt-1 gap-2">
                  <p className="text-blue-600 font-bold text-sm">₹{p.price}</p>
                  <p className="text-gray-400 line-through text-xs">
                    MRP ₹{p.mrp}
                  </p>
                  <p className="text-blue-500 text-xs font-semibold">20% OFF</p>
                </div>

                <button
                  onClick={() => addToCart(p)}
                  className="mt-2 bg-blue-500 text-white w-full py-1.5 rounded-xl text-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FLOATING CART BAR */}
        {cart.length > 0 && (
          <div className="fixed bottom-16 left-0 right-0 mx-auto w-[92%] bg-white shadow-xl rounded-2xl p-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-3"
              >
                <div className="flex items-center gap-3">
                  <img src={item.image} className="w-12 h-12 rounded-lg" />
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-blue-500 text-xs font-bold">
                      ₹ {item.price * item.qty}
                    </p>
                  </div>
                </div>

                {/* Quantity Counter */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-lg"
                  >
                    -
                  </button>
                  <p className="font-semibold">{item.qty}</p>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            {/* Checkout / Cart Button */}
            {/* // In both Ayurvedic.js and Pharmacy.js, replace the "Go to Cart" button: */}
            <button
              onClick={() => navigate("/cart")}
              className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold text-sm"
            >
              Go to Cart ({cart.length} items)
            </button>
          </div>
        )}

        <BottomNav />
      </div>
      <BottomNav />
    </>
  );
};

export default Ayurvedic;
