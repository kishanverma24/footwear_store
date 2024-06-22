import React, { useState } from "react";
import "./order.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
const Order = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Dingo Dog Bones",
      description:
        "The best dog bones of all time. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",
      price: 12.99,
      quantity: 1,
      image: "/images/nike7.png",
    },
    {
      id: 2,
      name: "Dingo Dog Bones",
      description:
        "The best dog bones of all time. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",
      price: 12.99,
      quantity: 5,
      image: "/images/nike8.png",
    },
    {
      id: 3,
      name: "Dingo Dog Bones",
      description:
        "The best dog bones of all time. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",
      price: 12.99,
      quantity: 1,
      image: "/images/nike9.png",
    },
  ]);

  const calculateSubtotal = () => {
    return products
      .reduce((acc, product) => acc + product.price * product.quantity, 0)
      .toFixed(2);
  };

  const calculateTax = (subtotal) => {
    return (subtotal * 0.05).toFixed(2);
  };

  const calculateTotal = (subtotal, tax, shipping) => {
    return (parseFloat(subtotal) + parseFloat(tax) + shipping).toFixed(2);
  };

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const shipping = 15.0;
  const total = calculateTotal(subtotal, tax, shipping);

  return (
    <>
      <Navbar />
      <div className="orderPage">
        <h1>Order Id: 120339399</h1>
        <div className="orderLabels">
          <label className="productImage">Image</label>
          <label className="productDetails">Product</label>
          <label className="productPrice">Price</label>
          <label className="productQuantity">Quantity</label>
        </div>
        {products.map((product) => (
          <div className="ordercomp" key={product.id}>
            <div className="productImage">
              <img src={product.image} alt="Product" />
            </div>
            <div className="_productDetails">
              <div className="productTitle">{product.name}</div>
            </div>
            <div className="productPrice">${product.price.toFixed(2)}</div>
            <div className="productQuantity">
              <h4>{product.quantity}</h4>
              <p className="multipleprice" style={{ marginTop: "5px" }}>
                {" "}
                ${(product.price * product.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}

        <div className=".totals">
          <div className="totalsItem">
            <label>Subtotal</label>
            <div className="totalsValue" id="cart-subtotal">
              ${subtotal}
            </div>
          </div>
          <div className="totalsItem">
            <label>Tax (5%)</label>
            <div className="totalsValue" id="cart-tax">
              ${tax}
            </div>
          </div>
          <div className="totalsItem">
            <label>Shipping</label>
            <div className=".totalsValue" id="cart-shipping">
              ${shipping.toFixed(2)}
            </div>
          </div>
          <div className={`${"totalsItem"} ${"totalsItemTotal"}`}>
            <label>Grand Total</label>
            <div className="totalsValue" id="cart-total">
              ${total}
            </div>
          </div>
          <div className="totalsItem">
            <label>Shipping Address:</label>
            <div className="totalsValue" id="cart-tax">
            Hajratgant, Lucknow, Uttar Pradesh, India 
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Order;
