// cartUtils.js
export const addToCart = (product) => {
  try {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    
    const existingItemIndex = existingCart.findIndex(item => item.id === product.id);
    let updatedCart;
    
    if (existingItemIndex !== -1) {
      // Product exists, increase quantity
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
        price: parseFloat(product.price) || 0,
        image: product.image || product.img || "https://via.placeholder.com/80x80",
        packoff: product.packoff || product.brand || "Standard Pack"
      }];
    }
    
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
    
    console.log("Cart updated:", updatedCart); // For debugging
    return updatedCart;
  } catch (error) {
    console.error("Error adding to cart:", error);
    return [];
  }
};

export const getCart = () => {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch (error) {
    console.error("Error getting cart:", error);
    return [];
  }
};

export const clearCart = () => {
  localStorage.removeItem("cart");
  window.dispatchEvent(new Event("cartUpdated"));
};

export const updateCartItemQuantity = (id, change) => {
  try {
    const cart = getCart();
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, (item.qty || 1) + change);
        return { ...item, qty: newQty };
      }
      return item;
    }).filter(item => item.qty > 0);
    
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
    return updatedCart;
  } catch (error) {
    console.error("Error updating cart quantity:", error);
    return [];
  }
};

export const removeFromCart = (id) => {
  try {
    const cart = getCart();
    const updatedCart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
    return updatedCart;
  } catch (error) {
    console.error("Error removing from cart:", error);
    return [];
  }
};