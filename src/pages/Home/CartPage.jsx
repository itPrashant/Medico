import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiArrowLeft, FiTrash2, FiPlus, FiMinus, FiShoppingBag } from "react-icons/fi";
import BottomNav from "./BottomNav";

export default function CartPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load cart from localStorage - match the format from Ayurvedic/Pharmacy components
  useEffect(() => {
    const loadCart = () => {
      try {
        // Check multiple possible storage keys based on your components
        const storedCart = JSON.parse(localStorage.getItem("cart")) || 
                          JSON.parse(localStorage.getItem("shoppingCart")) || 
                          [];
        
        // Transform items to ensure they have required properties
        const formattedCart = storedCart.map(item => ({
          ...item,
          qty: item.qty || 1,
          price: parseFloat(item.price) || 0,
          image: item.image || item.img || "https://via.placeholder.com/80x80",
          packoff: item.packoff || item.brand || "Standard Pack"
        }));
        
        setCartItems(formattedCart);
      } catch (error) {
        console.error("Error loading cart:", error);
        setCartItems([]);
      } finally {
        setLoading(false);
      }
    };

    loadCart();
    
    // Also check if there's a cart in sessionStorage or different key
    const checkAllStorage = () => {
      console.log("Checking storage for cart items...");
      console.log("localStorage cart:", localStorage.getItem("cart"));
      console.log("localStorage shoppingCart:", localStorage.getItem("shoppingCart"));
      
      // Check all localStorage keys
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.toLowerCase().includes("cart")) {
          console.log("Found cart key:", key, localStorage.getItem(key));
        }
      }
    };
    
    checkAllStorage();
    
    // Listen for custom cart update events
    window.addEventListener("cartUpdated", loadCart);
    window.addEventListener("storage", loadCart);
    
    return () => {
      window.removeEventListener("cartUpdated", loadCart);
      window.removeEventListener("storage", loadCart);
    };
  }, []);

  // Save cart to localStorage - match your components' format
  const saveCartToStorage = (items) => {
    localStorage.setItem("cart", JSON.stringify(items));
    // Also store in shoppingCart key for compatibility
    localStorage.setItem("shoppingCart", JSON.stringify(items));
    
    // Trigger events for other components
    window.dispatchEvent(new Event("cartUpdated"));
    window.dispatchEvent(new Event("storage"));
  };

  // Debug function to see what's in storage
  const debugStorage = () => {
    console.log("Current localStorage contents:");
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      console.log(`${key}:`, localStorage.getItem(key));
    }
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
    setCartItems([]);
    localStorage.removeItem("cart");
    localStorage.removeItem("shoppingCart");
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Add sample items for testing
  const addTestItems = () => {
    const testItems = [
      {
        id: 1,
        name: "Test Medicine",
        price: "95",
        qty: 1,
        image: "https://via.placeholder.com/80x80",
        packoff: "10 Tablets",
        mrp: "150"
      },
      {
        id: 2,
        name: "Another Product",
        price: "120",
        qty: 2,
        image: "https://via.placeholder.com/80x80",
        packoff: "50ml Bottle",
        mrp: "180"
      }
    ];
    
    setCartItems(testItems);
    saveCartToStorage(testItems);
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (parseFloat(item.price) * item.qty), 0);
  const deliveryCharge = subtotal > 500 ? 0 : 40;
  const discount = subtotal * 0.10; // 10% discount
  const total = subtotal + deliveryCharge - discount;

  // Empty cart handler
  if (!loading && cartItems.length === 0) {
    return (
      <>
        <div className="min-h-screen bg-[#f7faff] px-4 pt-6 pb-24">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate(-1)}
              className="h-10 w-10 bg-white rounded-xl shadow flex items-center justify-center"
            >
              <FiArrowLeft size={22} />
            </button>
            <h1 className="text-lg font-semibold text-gray-700">My Cart</h1>
            <div className="h-10 w-10 bg-white rounded-xl shadow flex items-center justify-center">
              <FiShoppingBag size={22} className="text-gray-600" />
            </div>
          </div>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center mt-20">
            <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <FiShoppingBag size={50} className="text-blue-500" />
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 text-center mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <button
              onClick={() => navigate("/products")}
              className="bg-blue-500 text-white px-6 py-3 rounded-xl font-medium shadow mb-4"
            >
              Browse Products
            </button>
            
            {/* Debug buttons */}
            <div className="mt-4 space-y-2">
              <button
                onClick={debugStorage}
                className="text-xs text-gray-500 underline"
              >
                Debug Storage
              </button>
              <button
                onClick={addTestItems}
                className="text-xs text-blue-500 underline"
              >
                Add Test Items
              </button>
            </div>
          </div>
        </div>
        <BottomNav />
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-[#f7faff] px-4 pt-6 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="h-10 w-10 bg-white rounded-xl shadow flex items-center justify-center"
          >
            <FiArrowLeft size={22} />
          </button>
          <h1 className="text-lg font-semibold text-gray-700">
            My Cart ({cartItems.length} items)
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={debugStorage}
              className="text-xs text-gray-500"
              title="Debug Storage"
            >
              🔍
            </button>
            <div className="h-10 w-10 bg-white rounded-xl shadow flex items-center justify-center">
              <FiShoppingBag size={22} className="text-gray-600" />
            </div>
          </div>
        </div>

        {/* Cart Items */}
        <div className="space-y-4 mb-6">
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.qty}`}
              className="bg-white rounded-2xl shadow p-4 flex gap-4"
            >
              <img
                src={item.image || "https://via.placeholder.com/80x80"}
                alt={item.name}
                className="w-20 h-20 rounded-xl object-cover"
              />

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-sm text-gray-700">{item.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{item.packoff}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-blue-500 font-bold text-sm">₹{item.price}</p>
                      {item.mrp && (
                        <p className="text-gray-400 line-through text-xs">MRP ₹{item.mrp}</p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600"
                    >
                      <FiMinus size={16} />
                    </button>
                    <span className="font-semibold text-gray-700">{item.qty}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center"
                    >
                      <FiPlus size={16} />
                    </button>
                  </div>
                  <p className="font-semibold text-gray-700">
                    ₹{(parseFloat(item.price) * item.qty).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Cart Button */}
        {cartItems.length > 0 && (
          <div className="flex justify-end mb-4">
            <button
              onClick={clearCart}
              className="text-red-500 text-sm font-medium"
            >
              Clear All Items
            </button>
          </div>
        )}

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow p-4 mb-6">
          <h3 className="font-semibold text-gray-700 mb-4">Order Summary</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
              <span className="font-medium">₹{subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Delivery Charge</span>
              <span className={`font-medium ${deliveryCharge === 0 ? 'text-green-600' : ''}`}>
                {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge.toFixed(2)}`}
              </span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-green-600">Discount (10%)</span>
              <span className="font-medium text-green-600">-₹{discount.toFixed(2)}</span>
            </div>
            
            <div className="border-t pt-3 mt-3">
              <div className="flex justify-between font-semibold text-gray-700">
                <span>Total Amount</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="sticky bottom-20">
          <button
            onClick={() => {
              alert("Order placed successfully!");
              clearCart();
              navigate("/orders");
            }}
            className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold text-sm shadow-lg hover:bg-blue-600 transition"
          >
            Proceed to Checkout • ₹{total.toFixed(2)}
          </button>
          
          <p className="text-center text-xs text-gray-500 mt-2">
            {subtotal >= 500 ? "🎉 You've got FREE delivery!" : "Add ₹" + (500 - subtotal).toFixed(0) + " more for FREE delivery"}
          </p>
        </div>
      </div>
      <BottomNav />
    </>
  );
}