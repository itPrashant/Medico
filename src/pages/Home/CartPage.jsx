import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FiArrowLeft, 
  FiTrash2, 
  FiPlus, 
  FiMinus, 
  FiShoppingBag,
  FiCheckCircle,
  FiTruck,
  FiShield
} from "react-icons/fi";
import BottomNav from "./BottomNav";

export default function CartPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load cart from localStorage
  useEffect(() => {
    const loadCart = () => {
      try {
        // Try to get cart from localStorage
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        
        // Transform items to ensure they have required properties
        const formattedCart = storedCart.map(item => ({
          ...item,
          qty: item.qty || 1,
          price: parseFloat(item.price) || 0,
          image: item.image || item.img || "https://via.placeholder.com/80x80",
          packoff: item.packoff || item.brand || "Standard Pack"
        }));
        
        setCartItems(formattedCart);
        console.log("Loaded cart items:", formattedCart); // Debug log
      } catch (error) {
        console.error("Error loading cart:", error);
        setCartItems([]);
      } finally {
        setLoading(false);
      }
    };

    loadCart();
    
    // Listen for cart updates from other pages
    window.addEventListener("cartUpdated", loadCart);
    window.addEventListener("storage", loadCart);
    
    return () => {
      window.removeEventListener("cartUpdated", loadCart);
      window.removeEventListener("storage", loadCart);
    };
  }, []);

  // Save cart to localStorage
  const saveCartToStorage = (items) => {
    localStorage.setItem("cart", JSON.stringify(items));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Update quantity
  const updateQuantity = (id, change) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.qty + change);
        return { ...item, qty: newQty };
      }
      return item;
    }).filter(item => item.qty > 0);
    
    setCartItems(updatedCart);
    saveCartToStorage(updatedCart);
  };

  // Remove item
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    saveCartToStorage(updatedCart);
  };

  // Clear all items
  const clearCart = () => {
    if (window.confirm("Are you sure you want to clear all items from your cart?")) {
      setCartItems([]);
      localStorage.removeItem("cart");
      window.dispatchEvent(new Event("cartUpdated"));
    }
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (parseFloat(item.price) * item.qty), 0);
  const deliveryCharge = subtotal > 500 ? 0 : 40;
  const discount = subtotal >= 1000 ? subtotal * 0.15 : subtotal * 0.10;
  const total = subtotal + deliveryCharge - discount;

  // Empty cart handler
  if (!loading && cartItems.length === 0) {
    return (
      <>
        <div className="min-h-screen bg-linear-to-b from-blue-50 to-white px-5 pt-8 pb-32">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => navigate(-1)}
              className="h-12 w-12 bg-white rounded-2xl shadow-md flex items-center justify-center hover:shadow-lg transition"
            >
              <FiArrowLeft size={24} className="text-gray-700" />
            </button>
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-800">Shopping Cart</h1>
              <p className="text-sm text-gray-500">Your selected items</p>
            </div>
            <div className="h-12 w-12 bg-white rounded-2xl shadow-md flex items-center justify-center">
              <FiShoppingBag size={22} className="text-gray-600" />
            </div>
          </div>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-16">
            <div className="relative mb-8">
              <div className="h-40 w-40 bg-linear-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                <FiShoppingBag size={70} className="text-blue-500" />
              </div>
              <div className="absolute -bottom-2 -right-2 h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">0</span>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Your cart is empty</h2>
            <p className="text-gray-600 text-center mb-8 max-w-md">
              Looks like you haven't added any items to your cart yet. Start shopping to discover amazing products.
            </p>
            
            <button
              onClick={() => navigate("/products")}
              className="bg-linear-to-r from-blue-500 to-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
            >
              Browse Products
            </button>
          </div>
        </div>
        <BottomNav />
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-blue-50 to-white px-5 pt-8 pb-32">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate(-1)}
            className="h-12 w-12 bg-white rounded-2xl shadow-md flex items-center justify-center hover:shadow-lg transition"
          >
            <FiArrowLeft size={24} className="text-gray-700" />
          </button>
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-800">Shopping Cart</h1>
            <p className="text-sm text-gray-500">{cartItems.length} items selected</p>
          </div>
          <div className="h-12 w-12 bg-white rounded-2xl shadow-md flex items-center justify-center">
            <FiShoppingBag size={22} className="text-blue-500" />
          </div>
        </div>

        {/* Cart Items */}
        <div className="space-y-4 mb-8">
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.qty}`}
              className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-5">
                {/* Product Image */}
                <div className="relative">
                  <div className="h-20 w-20 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {item.mrp && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      SAVE {Math.round((1 - item.price/item.mrp) * 100)}%
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-700 text-sn text-base">{item.name}</h3>
                      <p className="text-gray-500 text-sm mt-1">{item.packoff}</p>
                      
                      <div className="flex items-center gap-3 mt-3">
                        <p className="text-blue-500 font-bold text-sm">₹{item.price}</p>
                        {item.mrp && (
                          <p className="text-gray-400 line-through text-xs">₹{item.mrp}</p>
                        )}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition"
                      title="Remove item"
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="h-10 w-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-200 text-sm transition"
                      >
                        <FiMinus size={18} />
                      </button>
                      <span className="font-bold text-gray-800 text-sm min-w-10 text-center">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="h-10 w-10 bg-blue-500 text-white rounded-xl text-sm flex items-center justify-center hover:bg-blue-600 transition shadow-md"
                      >
                        <FiPlus size={18} />
                      </button>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Total</p>
                      <p className="font-bold text-gray-800 text-sm">
                        ₹{(parseFloat(item.price) * item.qty).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Cart Button (if items exist) */}
        {cartItems.length > 0 && (
          <div className="flex justify-end mb-4">
            <button
              onClick={clearCart}
              className="text-red-500 text-sm font-medium hover:text-red-700 transition"
            >
              Clear All Items
            </button>
          </div>
        )}

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-xl mb-8">
          {/* Header */}
          <div className="border-b border-gray-100 p-5">
            <h3 className="font-bold text-gray-800 text-md">Order Summary</h3>
          </div>
          
          {/* Summary Details */}
          <div className="p-5">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm">Subtotal ({cartItems.length} items)</span>
                <span className="font-semibold text-gray-800">₹{subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery</span>
                <span className={`font-semibold ${deliveryCharge === 0 ? 'text-green-600' : 'text-gray-800'}`}>
                  {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge.toFixed(2)}`}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-green-600 font-medium text-sm">Discount</span>
                <span className="font-semibold text-green-600 text-sm">-₹{discount.toFixed(2)}</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="font-bold text-gray-800 text-md">Total Amount</span>
                  <div className="text-right">
                    <p className="font-bold text-gray-800 text-xl">₹{total.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">Inclusive of all taxes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Promo & Info */}
          <div className="bg-gray-50 rounded-b-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <FiTruck size={18} className="text-blue-500" />
                <span className="text-sm text-gray-700">
                  {subtotal >= 500 ? "🎉 FREE Delivery Applied" : "Add ₹" + (500 - subtotal).toFixed(0) + " more for FREE delivery"}
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <FiShield size={18} className="text-blue-500" />
              <span className="text-sm text-gray-600">Secure checkout • 7-day return policy</span>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="fixed bottom-24 left-5 right-5 z-40">
          <div className="bg-linear-to-r from-blue-500 to-blue-600 rounded-2xl shadow-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-white/90 text-sm">Total Amount</p>
                <p className="text-white font-bold text-xl">₹{total.toFixed(2)}</p>
              </div>
              <div className="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center">
                <FiCheckCircle size={24} className="text-white" />
              </div>
            </div>
            
            <button
              onClick={() => {
                alert("Order placed successfully!");
                clearCart();
                navigate("/orders");
              }}
              className="w-full bg-white text-blue-500 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 active:scale-95"
            >
              Proceed to Checkout
            </button>
          </div>
          
          <p className="text-center text-xs text-gray-700 mt-3">
            By continuing, you agree to our Terms & Conditions
          </p>
        </div>
      </div>
      <BottomNav />
    </>
  );
};