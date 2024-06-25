import React, { useState } from "react";
import "./todayDeals.css";
import { todayDeal } from "./todayDeal.js";

const TodayDeals = () => {
  const [startProduct, setStartProduct] = useState(0);

  const handlePrevClick = () => {
    if (startProduct < 0) {
      setStartProduct(startProduct+100); // Adjust based on your item width percentage
    }
  };

  const handleNextClick = () => {
    const maxOffset = -(todayDeal.length - 1) * 70; // Adjust this multiplier based on your item width and count

    if (startProduct > maxOffset) {
      setStartProduct(startProduct - 100); // Adjust based on your item width percentage
    } else {
      setStartProduct(0); // Restart from beginning
    }
  };

  return (
    <section className="today_deals_container">
      <div className="today_deals_heading">
        <h1>Today's Deals</h1>
        <p>
          <a href="#">See all deals</a>
        </p>
      </div>

      <div className="today_deals_product_container">
        <div className="today_deals_btn_container">
          <button
            className="today_deal_btn"
            id="today_deal_btn_prev"
            onClick={handlePrevClick}
            style={{cursor:"pointer"}}

          >
            {"<"}
          </button>
          <button
            className="today_deal_btn"
            id="today_deal_btn_next"
            onClick={handleNextClick}
            style={{cursor:"pointer"}}
          >
            {">"}
          </button>
        </div>

        <div className="today_deals_product_list">
          {todayDeal.map((deal, index) => (
            <div
              key={index}
              className="today_deals_product_item"
              style={{ transform: `translateX(${startProduct}%)` }}
            >
              <div className="todayDeals_product_image">
                <img src={deal.img} alt={`Product ${index}`} />
              </div>
              <div className="discount_Contaienr">
                <a href="#">Up to {deal.discount}% off</a>
                <a href="#">{deal.DealOfDay}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodayDeals;
