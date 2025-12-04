import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiBell, FiSearch, FiSliders, FiCamera } from "react-icons/fi";
import Slider from "react-slick";
import BottomNav from "./Home/BottomNav";
import pills from '../assets/icons/pills.png'

const Pharmacy = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((p) => p.id === product.id);
    if (exists) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const [search, setSearch] = useState("");


  const increaseQty = (id) => {
    setCart(
      cart.map((p) =>
        p.id === id ? { ...p, qty: p.qty + 1 } : p
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(cart
      .map((p) =>
        p.id === id ? { ...p, qty: p.qty - 1 } : p
      )
      .filter((p) => p.qty > 0)
    );
  };

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

  const products = [
    {
      id: 1,
      name: "Azoran 50mg",
      packoff:"10",
      price: "10",
      mrp: "30",
      image: pills
    },
    {
      id: 2,
      name: "Azoran 25mg",
      packoff:"10",
      price: "150",
      mrp: "180",
      image: pills
    },
    {
      id: 3,
      name: "Paracetamol 500mg",
      packoff:"10",
      price: "25",
      mrp: "40",
      image: pills
    },
    {
      id: 4,
      name: "Dolo 650mg",
      packoff:"15",
      price: "35",
      mrp: "50",
      image: pills
    },
    {
      id: 5,
      name: "Calpol 500mg",
      packoff:"10",
      price: "22",
      mrp: "30",
      image: pills
    },
    {
      id: 6,
      name: "Amoxicillin 500mg",
      packoff:"10",
      price: "90",
      mrp: "120",
      image: pills
    },
    {
      id: 7,
      name: "Pantoprazole 40mg",
      packoff:"10",
      price: "60",
      mrp: "95",
      image: pills
    },
    {
      id: 8,
      name: "Omeprazole 20mg",
      packoff:"10",
      price: "35",
      mrp: "55",
      image: pills
    },
    {
      id: 9,
      name: "Cetrizine 10mg",
      packoff:"10",
      price: "18",
      mrp: "30",
      image: pills
    },
    {
      id: 10,
      name: "Montair LC",
      packoff:"10",
      price: "110",
      mrp: "150",
      image: pills
    },
    {
      id: 11,
      name: "Azithromycin 500mg",
      packoff:"10",
      price: "70",
      mrp: "95",
      image: pills
    },
    {
      id: 12,
      name: "Ecosprin 75mg",
      packoff:"10",
      price: "15",
      mrp: "25",
      image: pills
    },
    {
      id: 13,
      name: "Atorvastatin 10mg",
      packoff:"10",
      price: "58",
      mrp: "90",
      image: pills
    },
    {
      id: 14,
      name: "Shelcal 500mg",
      packoff:"10",
      price: "95",
      mrp: "130",
      image: pills
    },
    {
      id: 15,
      name: "Evion 400mg",
      packoff:"10",
      price: "28",
      mrp: "45",
      image: pills
    },
    {
      id: 16,
      name: "Crocin Advance",
      packoff:"15",
      price: "30",
      mrp: "45",
      image: pills
    },
    {
      id: 17,
      name: "Augmentin 625 Duo",
      price: "180",
      mrp: "220",
      image: pills
    },
    {
      id: 18,
      name: "ORS Powder Sachet 21g",
      price: "18",
      mrp: "25",
      image: pills
    },
    {
      id: 19,
      name: "Zincovit Tablet",
      packoff:"15",
      price: "95",
      mrp: "130",
      image: pills
    },
    {
      id: 20,
      name: "Supradyn Daily Multivitamin",
      packoff:"10",
      price: "120",
      mrp: "160",
      image: pills
    },
    {
      id: 21,
      name: "Celimax 500mg",
      packoff:"10",
      price: "85",
      mrp: "120",
      image: pills
    },
    {
      id: 22,
      name: "Rantac 150mg",
      packoff:"10",
      price: "32",
      mrp: "50",
      image: pills
    },
    {
      id: 23,
      name: "Domstal 10mg",
      packoff:"10",
      price: "49",
      mrp: "75",
      image: pills
    },
    {
      id: 24,
      name: "Drotaverine 80mg",
      packoff:"10",
      price: "72",
      mrp: "110",
      image: pills
    },
    {
      id: 25,
      name: "Cyclopam",
      packoff:"10",
      price: "45",
      mrp: "70",
      image: pills
    },
    {
      id: 26,
      name: "Becozym C Forte",
      packoff:"10 Tablets",
      price: "₹85",
      mrp: "₹120",
      image: pills
    },
    {
      id: 27,
      name: "Folvite 5mg",
      packoff:"10 Tablets",
      price: "₹28",
      mrp: "₹40",
      image: pills
    },
    {
      id: 28,
      name: "Neurobion Forte",
      packoff:"10",
      price: "95",
      mrp: "140",
      image: pills
    },
    {
      id: 29,
      name: "Ibugesic Plus",
      packoff:"10",
      price: "40",
      mrp: "60",
      image: pills
    },
    {
      id: 30,
      name: "Vicks Action 500",
      packoff:"10",
      price: "32",
      mrp: "50",
      image: pills
    },
    {
      id: 31,
      name: "Digene Antacid Tablet",
      packoff:"15",
      price: "55",
      mrp: "75",
      image: pills
    },
    {
      id: 32,
      name: "Disprin 325mg",
      packoff:"10",
      price: "15",
      mrp: "25",
      image: pills
    },
    {
      id: 33,
      name: "Metformin 500mg",
      packoff:"20",
      price: "25",
      mrp: "45",
      image: pills
    },
    {
      id: 34,
      name: "Thyronorm 50mcg",
      packoff:"10",
      price: "180",
      mrp: "230",
      image: pills
    }
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

  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7faff] px-4 pt-6 pb-28">

      {/* Header */}
      <div className="flex items-center justify-between">
        <Link to="/Products" className="h-10 w-10 bg-white rounded-xl shadow flex items-center justify-center">
          <FiArrowLeft size={22} />
        </Link>

        <h1 className="text-lg font-semibold">Products</h1>

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
        <div className="h-9 w-9 flex items-center justify-center bg-green-500 text-white rounded-xl shadow">
          <FiSliders />
        </div>
      </div>

      {/* Showing Results */}
      <p className="mt-5 text-sm text-gray-600">
        Showing results for "{search || 'all products'}"
      </p>

      {/* PRODUCT LIST */}
      <div className="mt-4 space-y-4">
        {filteredProducts.map((p) => (
          <div key={p.id} className="bg-white rounded-2xl shadow p-4 flex gap-4">
            <img src={p.image} className="w-16 h-16 rounded-xl" />

            <div className="flex-1">
              <h2 className="font-semibold text-sm">{p.name}</h2>
              <p className="text-xs text-gray-500">10 Tablet(s) in Strip</p>

              <div className="flex items-center mt-1 gap-2">
                <p className="text-green-600 font-bold text-sm">₹{p.price}</p>
                <p className="text-gray-400 line-through text-xs">MRP ₹{p.mrp}</p>
                <p className="text-green-600 text-xs font-semibold">20% OFF</p>
              </div>

              <button
                onClick={() => addToCart(p)}
                className="mt-2 bg-green-600 text-white w-full py-1.5 rounded-xl text-sm"
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
                  <p className="text-green-600 text-xs font-bold">
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
          <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold text-sm">
            Go to Cart ({cart.length} items)
          </button>

        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default Pharmacy;