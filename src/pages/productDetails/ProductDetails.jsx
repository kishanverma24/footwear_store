import React from "react";
import "./productDetails.css";
import Navbar from "../../components/navbar/Navbar.jsx";
const ProductDetails = () => {
  return (
    <>
    <Navbar/>
    <section className="productdetails">
      <div className="row">
        <div className="content">
          <div className="image" style={{ textAlign: "center" }}>
            <img
              src="./images/nike8.png"
              alt="image of spaceship"
              style={{ width: "50%", display: "block", margin: "0 auto" }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <p>Name: Jordhan</p>
            <p>Price:5000</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <p>Brand Name: Nike </p>
            <p>Product Id: 2552 </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <p>isAvailable: Yes! </p>
            <p>ForMen: Yup! </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <p>Vendor Name: Harrish </p>
            <p>Vendor Id : 1000 </p>
          </div>
          <a href="#" className="btn">
            Add to Cart
          </a>
          <p>
            Description:Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Lorem ipsum dolor sit amet,
            consectetur adipisicing. Dolore eligendi deserunt doloremque aliquid
            natus atque!
          </p>

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
                  being busy and you are labeled as lazy or useless when you are
                  not ‘doing’. But it is this ‘not doing’ that
                </p>
              </div>
            </div>
            <div className="comment">
              <div className="comment-content">
                <h4>Rens Klein</h4>
                <p>
                  I really would like to suggest the following book; The art of
                  stillness.
                </p>
              </div>
            </div>
            <div className="comment">
              <div className="comment-content">
                <h4>Josh Spilker</h4>
                <p>
                  I completely agree with loud. Nowadays people are proud of
                  being busy and you are labeled as lazy or useless when you are
                  not ‘doing’. But it is this ‘not doing’ that
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>

  );
};

export default ProductDetails;
