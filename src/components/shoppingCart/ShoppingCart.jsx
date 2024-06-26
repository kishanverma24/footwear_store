import React, { useContext } from "react";
import "./shoppingcart.css";
import { NavLink } from "react-router-dom";
import { CartContext, CheckoutContext } from "../../context/Cart.jsx";

const ShoppingCart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { checkoutItem, setCheckoutItem } = useContext(CheckoutContext);

  const handleAddToCheckout = (product) => {
    const isProductInCheckout = checkoutItem.some(
      (item) => item.productId === product.productId
    );
    if (!isProductInCheckout) {
      setCheckoutItem([...checkoutItem, product]);
    } else {
      alert("This product is already in your checkout list.");
    }
  };

  const handleRemove = (productId) => {
    setCartItems(
      cartItems.filter((cartItem) => cartItem.productId !== productId)
    );
  };
  const handleRemoveFromCheckout = (productId) => {
    setCheckoutItem(
      checkoutItem.filter(
        (checkoutItem) => checkoutItem.productId !== productId
      )
    );
  };

  const handleQuantityChange = (productId, quantity) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.productId === productId
          ? { ...cartItem, quantity: quantity }
          : cartItem
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems
      .reduce((acc, product) => acc + product.price * product.quantity, 0)
      .toFixed(2);
  };

  const calculateTax = (subtotal) => {
    return (subtotal * 0.03).toFixed(2);
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
      <div className="shoppingCart">
        <h1>Shopping Cart</h1>
        <div className="shoppingCartColumnLabels">
          <label className="productImage">Image</label>
          <label className="productDetails">Product</label>
          <label className="productPrice">Price</label>
          <label className="productQuantity">Quantity</label>
          <label className="productRemoval">Remove</label>
          <label className="productAdd">Add to checkout</label>
        </div>

        {cartItems.map((product) => (
          <div className="shppingCartProduct" key={product.productId}>
            <div className="shppingCartProductImage">
              <img src={product.url} alt="Product" />
            </div>
            <div className="_shppingCartProductDetails">
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
            <div className="productAdd">
              {checkoutItem.some(
                (item) => item.productId === product.productId
              ) ? (
                <button
                  className="addProduct"
                  style={{ backgroundColor: "rgba(125, 48, 48, 0.811)" }}
                  onClick={() => handleRemoveFromCheckout(product.productId)}
                >
                  Remove from checkout
                </button>
              ) : (
                <button
                  className="addProduct"
                  onClick={() => handleAddToCheckout(product)}
                >
                  Add to checkout
                </button>
              )}
            </div>
          </div>
        ))}
        {total > 15 ? (
          <div className=".totals">
            <div className="totalsItem">
              <label>Subtotal</label>
              <div className="totalsValue" id="cart-subtotal">
                Rs. {subtotal}
              </div>
            </div>
            <div className="totalsItem">
              <label>Tax (3%): </label>
              <div className="totalsValue" id="cart-tax">
                Rs. {tax}
              </div>
            </div>
            <div className="totalsItem">
              <label>Shipping: </label>
              <div className=".totalsValue" id="cart-shipping">
                {total > 15 ? shipping : ""}
              </div>
            </div>
            <div className={`${"totalsItem"} ${"totalsItemTotal"}`}>
              <label>Grand Total</label>
              <div className="totalsValue" id="cart-total">
                {total > 15 ? `Rs. ${total} ` : ""}
              </div>
            </div>
            <NavLink to={"/checkout"}>
              <button className="checkoutButton">Checkout</button>
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
            <h3>"Please add items to Cart"</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
