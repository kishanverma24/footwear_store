import React, { createContext, useState, useEffect } from "react";

const getCartItemsFromLocalStorage = () => {
  const storedCartItems = localStorage.getItem("cartItems");
  return storedCartItems ? JSON.parse(storedCartItems) : [];
};

const setCartItemsToLocalStorage = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const setOrdersToLocalStorage = (orders) => {
  localStorage.setItem("orders", JSON.stringify(orders));
};

const getOrdersFromLocalStorage = () => {
  const storedOrders = localStorage.getItem("orders");
  return storedOrders ? JSON.parse(storedOrders) : [];
};

export const CartContext = createContext(null);
export const CheckoutContext = createContext(null);
export const OrdersContext = createContext(null);

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState(() =>
    getCartItemsFromLocalStorage()
  );
  const [checkoutItem, setCheckoutItem] = useState([]);
  const [orders, setOrders] = useState(() => getOrdersFromLocalStorage());

  useEffect(() => {
    setCartItemsToLocalStorage(cartItems);
  }, [cartItems]);

  useEffect(() => {
    setOrdersToLocalStorage(orders);
  }, [orders]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <CheckoutContext.Provider value={{ checkoutItem, setCheckoutItem }}>
        <OrdersContext.Provider value={{ orders, setOrders }}>
          {props.children}
        </OrdersContext.Provider>
      </CheckoutContext.Provider>
    </CartContext.Provider>
  );
};
