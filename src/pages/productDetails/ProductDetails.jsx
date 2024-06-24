import React, { useContext, useEffect, useState } from "react";
import "./productDetails.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { products } from "../../data/products.js";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/Cart.jsx";

const ProductDetails = () => {
  const { productid } = useParams();
  const [product, setProduct] = useState(null);
  const { cartItems, setCartItems } = useContext(CartContext);

  useEffect(() => {
    const foundProduct = products.find(
      (prod) => prod.productId === parseInt(productid)
    );
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [productid]);

  const addCartItem = () => {
    // Check if the product is already in cartItems
    const isProductInCart = cartItems.some(
      (item) => item.productId === product.productId
    );

    if (!isProductInCart) {
      // If product is not in cart, add it to cartItems
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    } else {
      // Optionally, you can provide feedback to the user that the product is already in cart
      alert("This product is already in your cart.");
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <section className="productdetails">
        <div className="row">
          <div className="content">
            <div className="image" style={{ textAlign: "center" }}>
              <img
                src={product.url}
                alt="image of spaceship"
                style={{ width: "50%", display: "block", margin: "0 auto" }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <p>Name: {product.name}</p>
              <p>Price: {product.price}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <p>Brand Name: {product.brandName}</p>
              <p>Product Id: {product.productId} </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <p>isAvailable: {product.isAvailable} </p>
              <p>ForMen: {product.forMen}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <p>Vendor Name: {product.vendorName} </p>
              <p>Vendor Id : {product.vendorId} </p>
            </div>
            <button className="btn" onClick={addCartItem}>
              Add to Cart
            </button>
            <p>Description: {product.description}</p>

            <div className="comments-section">
              {/* Your comments section JSX */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;
