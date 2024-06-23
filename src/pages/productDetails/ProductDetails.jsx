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
  const addCartItem = () => {
    setCartItems([...cartItems, product]);
  };
  useEffect(() => {
    const foundProduct = products.find(
      (prod) => prod.productId === parseInt(productid)
    );
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [productid]);

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
              <div className="comments-header">
                <h2>Likes:355</h2>
                <h2>Comments (3)</h2>
              </div>
              <div className="comment-input">
                <input type="text" placeholder="Write your comment here..." />
                <button type="button">Add</button>
              </div>
              <div className="comment">
                <div className="comment-content">
                  <h4>Brigita</h4>
                  <p>
                    I completely agree with love. Nowadays people are proud of
                    being busy and you are labeled as lazy or useless when you
                    are not ‘doing’. But it is this ‘not doing’ that
                  </p>
                </div>
              </div>
              <div className="comment">
                <div className="comment-content">
                  <h4>Rens Klein</h4>
                  <p>
                    I really would like to suggest the following book; The art
                    of stillness.
                  </p>
                </div>
              </div>
              <div className="comment">
                <div className="comment-content">
                  <h4>Josh Spilker</h4>
                  <p>
                    I completely agree with loud. Nowadays people are proud of
                    being busy and you are labeled as lazy or useless when you
                    are not ‘doing’. But it is this ‘not doing’ that
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;
