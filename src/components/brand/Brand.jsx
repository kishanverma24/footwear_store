import "./brand.css";
import React from "react";
const Brand = () => {
  return (
    <div className="shop-section">
      <div className="box1 box">
        <div className="box-content">
          <h2>Clothes</h2>
          <div
            className="box-img"
            style={{ backgroundImage: `url(./images/nike2.png)` }}
          ></div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
            nemo. Sapiente rerum natus tempora voluptatum tempore quia ullam
            culpa asperiores!
          </p>
          <p>Read More</p>
        </div>
      </div>
      <div className="box2 box">
        <div className="box-content">
          <h2>Clothes</h2>
          <div
            className="box-img"
            style={{ backgroundImage: `url(./images/nike2.png)` }}
          ></div>
          <p>See more</p>
        </div>
      </div>
      <div className="box3 box">
        <div className="box-content">
          <h2>Clothes</h2>
          <div
            className="box-img"
            style={{ backgroundImage: `url(./images/nike2.png)` }}
          ></div>
          <p>See more</p>
        </div>
      </div>
      <div className="box4 box">
        <div className="box-content">
          <h2>Clothes</h2>
          <div
            className="box-img"
            style={{ backgroundImage: `url(./images/nike2.png)` }}
          ></div>
          <p>See more</p>
        </div>
      </div>
    </div>
  );
};

export default Brand;
