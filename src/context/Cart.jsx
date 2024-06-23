import React, { createContext, useState, useEffect } from "react";
const getCartItemsFromLocalStorage = () => {
  const storedCartItems = localStorage.getItem("cartItems");
  return storedCartItems ? JSON.parse(storedCartItems) : [];
};

const setCartItemsToLocalStorage = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const CartContext = createContext(null);

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState(() =>
    getCartItemsFromLocalStorage()
  );

  useEffect(() => {
    setCartItemsToLocalStorage(cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {props.children}
    </CartContext.Provider>
  );
};
