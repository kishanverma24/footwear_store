import React, { useContext, useEffect, useState } from "react";
import "./productDetails.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { products } from "../../data/products.js";
import { NavLink, useParams } from "react-router-dom";
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
    const isProductInCart = cartItems.some(
      (item) => item.productId === product.productId
    );

    if (!isProductInCart) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    } else {
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
            <div className="productdetailsSubbies">
              <p>Name: {product.name}</p>
              <p>Product Id: {product.productId} </p>
            </div>
            <div className="productdetailsSubbies">
              <p>Price: {product.price}</p>

              <p>Brand name: {product.brandName}</p>
            </div>
            <div className="productdetailsSubbies">
              <p>isAvailable: {product.isAvailable} </p>
            </div>
            <div className="productdetailsSubbies">
              <p>Vendor Name: {product.vendorName} </p>
              <p>Vendor Id : {product.vendorId} </p>
            </div>
            <p className="productdesc">Description: {product.description}</p>

            {cartItems.some((item) => item.productId === product.productId) ? (
              <button
                className="btn"
                style={{ backgroundColor: "rgba(125, 48, 48, 0.811)" }}
                // onClick={() => {
                //   alert("This product is already in your cart.");
                // }}
              >
                <NavLink to={"/cart"} style={{ color: "white" }}>
                  Already in Cart
                </NavLink>
              </button>
            ) : (
              <button className="btn" onClick={addCartItem}>
                Add to Cart
              </button>
            )}

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
