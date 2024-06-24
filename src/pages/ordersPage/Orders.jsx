import React, { useState } from "react";
import "./orders.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 111616616,
      date: "2024-06-20",
      price: 12.99,
      status: "Shipped",
      details: "Delivered on 2024-06-21",
    },
    {
      id: 201012817,
      date: "2024-06-18",
      price: 24.99,
      status: "Pending",
      details: "Expected delivery on 2024-06-25",
    },
    {
      id: 318523156,
      date: "2024-06-15",
      price: 18.99,
      status: "Delivered",
      details: "Delivered on 2024-06-16",
    },
  ]);

  return (
    <>
      <Navbar />
      <div className="ordersPage">
        <h1>Orders</h1>
        <div className="columnLabels">
          <label className="orderId">Order ID</label>
          <label className="orderDate">Order Date</label>
          <label className="orderPrice">Order Price</label>
          <label className="orderStatus">Status</label>
          <label className="orderDetails">Details</label>
        </div>

        {orders.map((order) => (
          <div className="order" key={order.id}>
            <div className="orderId">
              <h5 className="ordertag">Order Id</h5>
              <p>{order.id}</p>
            </div>
            <div className="orderDate">
              <h5 className="ordertag">Order Date</h5>
              <p>{order.date}</p>
            </div>
            <div className="orderPrice">
              <h5 className="ordertag">Order Price</h5>
              <p>${order.price.toFixed(2)}</p>
            </div>
            <div className="orderStatus">
              <h5 className="ordertag">Order Status</h5>
              <p>{order.status}</p>
            </div>
            <div className="orderDetails">
              <button className="showDetailsButton">
                <Link to={"/order"} style={{ color: "white" }}>
                  Show Details
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Orders;
