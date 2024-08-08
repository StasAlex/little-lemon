import React, { createContext, useState } from 'react';

const CartContext = createContext();


const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem => 
          cartItem.id === item.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
        );
      } else {
        return [...prevItems, item];
      }
    });
  };
  

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const updateCartItem = (id, qty) => {
    setCartItems(prevItems => {
      if (qty === 0) {
        // Remove the item from the cart if the quantity is zero
        return prevItems.filter(item => item.id !== id);
      }
      // Otherwise, update the quantity
      return prevItems.map(item =>
        item.id === id ? { ...item, qty } : item
      );
    });
  };
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
