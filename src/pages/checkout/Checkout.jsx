import React, { useContext, useEffect, useState } from "react";
import "./checkout.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { NavLink } from "react-router-dom";
import {
  CartContext,
  CheckoutContext,
  OrdersContext,
} from "../../context/Cart";
const Checkout = () => {
  const [editActive, setEdit] = useState(false);
  const [address, setAddress] = useState(
    "Hajratgant, Lucknow, Uttar Pradesh, India"
  );
  const { checkoutItem, setCheckoutItem } = useContext(CheckoutContext);
  const { orders, setOrders } = useContext(OrdersContext);

  const handleQuantityChange = (id, quantity) => {
    setCheckoutItem(
      checkoutItem.map((product) =>
        product.productId === id ? { ...product, quantity: quantity } : product
      )
    );
  };

  const handleRemove = (id) => {
    setCheckoutItem(checkoutItem.filter((product) => product.productId !== id));
  };

  const calculateSubtotal = () => {
    return checkoutItem
      .reduce((acc, product) => acc + product.price * product.quantity, 0)
      .toFixed(2);
  };

  const calculateTax = (subtotal) => {
    return (subtotal * 0.05).toFixed(2);
  };

  const calculateTotal = (subtotal, tax, shippingCharge) => {
    return (parseFloat(subtotal) + parseFloat(tax) + shippingCharge).toFixed(2);
  };

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const shippingCharge = 15.0;
  const total = calculateTotal(subtotal, tax, shippingCharge);

  const handleInputAddress = (event) => {
    setAddress(event.target.value);
  };
  const handlePlaceOrder = () => {
    setOrders([
      ...orders,
      {
        products: [...checkoutItem],
        orderDetails: {
          subtotal,
          tax,
          shippingCharge,
          total,
          shippingAddress: address,
          orderId: Math.floor(Math.random() * 900000000) + 100000000,
          orderDate: new Date(),
        },
      },
    ]);
    // console.log(orders);
  };
  // useEffect to log orders after it updates
  // useEffect(() => {
  //   console.log(orders);
  // }, [orders]);

  return (
    <>
      <Navbar />
      <div className="checkoutCart">
        <h1>Checkout Cart</h1>
        <div className="columnLabels">
          <label className="productImage">Image</label>
          <label className="productDetails">Product</label>
          <label className="productPrice">Price</label>
          <label className="productQuantity">Quantity</label>
          <label className="productRemoval">Remove</label>
        </div>

        {checkoutItem.map((product) => (
          <div className="product" key={product.productId}>
            <div className="productImage">
              <img src={product.url} alt="Product" />
            </div>
            <div className="_productDetails">
              <div className="productTitle">{product.name}</div>
              <p className="productDescription">{product.description}</p>
            </div>
            <div className="productPrice">${product.price.toFixed(2)}</div>
            <div className="productQuantity">
              <input
                type="number"
                value={product.quantity}
                min="1"
                onChange={(e) =>
                  handleQuantityChange(
                    product.productId,
                    parseInt(e.target.value)
                  )
                }
              />
              <p className="multipleprice" style={{ marginTop: "5px" }}>
                {" "}
                {(product.price * product.quantity).toFixed(2)}
              </p>
            </div>
            <div className="productRemoval">
              <button
                className="removeProduct"
                onClick={() => handleRemove(product.productId)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        {total > 15 ? (
          <div className=".totals">
            <div className="totalsItem">
              <label>Subtotal</label>
              <div className="totalsValue" id="cart-subtotal">
                ${subtotal}
              </div>
            </div>
            <div className="totalsItem">
              <label>Tax (3%): </label>
              <div className="totalsValue" id="cart-tax">
                ${tax}
              </div>
            </div>
            <div className="totalsItem">
              <label>Shipping Charge: </label>
              <div className=".totalsValue" id="cart-shipping">
                {total > 15 ? shippingCharge : ""}
              </div>
            </div>
            <div className={`${"totalsItem"} ${"totalsItemTotal"}`}>
              <label>Grand Total</label>
              <div className="totalsValue" id="cart-total">
                {total > 15 ? total : ""}
              </div>
            </div>
            <div className="totalsItem">
              <label>Shipping Address :</label>
              <div className="totalsValue" id="cart-tax">
                {editActive == true ? (
                  <input
                    type=""
                    value={address}
                    onChange={handleInputAddress}
                  />
                ) : (
                  <p>{address}</p>
                )}
              </div>
              {editActive == true ? (
                <button
                  className="shippingAddressEditButton"
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  Ok
                </button>
              ) : (
                <button
                  className="shippingAddressEditButton"
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  Edit
                </button>
              )}
            </div>
            <NavLink to={"/orders"}>
              <button className="checkoutButton" onClick={handlePlaceOrder}>
                Place Order
              </button>
            </NavLink>
          </div>
        ) : (
          <div
            className="productNotFound"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "20vh",
            }}
          >
            <h3>"No items to be Checkout"</h3>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
