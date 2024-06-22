import React, { useState } from "react";
import "./shoppingcart.css";
const ShoppingCart = () => {
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
      quantity: 1,
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

  const handleQuantityChange = (id, quantity) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, quantity: quantity } : product
      )
    );
  };

  const handleRemove = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

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
  const handleAdd = () => {
    console.log("hello");
  };

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const shipping = 15.0;
  const total = calculateTotal(subtotal, tax, shipping);

  return (
    <>
      <div className="shoppingCart">
        <h1>Shopping Cart</h1>
        <div className="columnLabels">
          <label className="productImage">Image</label>
          <label className="productDetails">Product</label>
          <label className="productPrice">Price</label>
          <label className="productQuantity">Quantity</label>
          <label className="productRemoval">Remove</label>
          <label className="productAdd">Add to checkout</label>
        </div>

        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="productImage">
              <img src={product.image} alt="Product" />
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
                  handleQuantityChange(product.id, parseInt(e.target.value))
                }
              />
              <p className="multipleprice" style={{ marginTop: "5px" }}>
                {" "}
                ${(product.price * product.quantity).toFixed(2)}
              </p>
            </div>
            <div className="productRemoval">
              <button
                className="removeProduct"
                onClick={() => handleRemove(product.id)}
              >
                Remove
              </button>
            </div>
            <div className="productAdd">
              <button
                className="addProduct"
                onClick={() => handleAdd(product.id)}
              >
                Add to checkout
              </button>
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

          <button className="checkoutButton">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
