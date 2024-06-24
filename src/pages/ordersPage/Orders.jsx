import React, { useContext } from "react";
import "./orders.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { OrdersContext } from "../../context/Cart";

const Orders = () => {
  const { orders } = useContext(OrdersContext);

  // Function to format date as "day/month/year, hours:minutes:seconds"
  const formatOrderDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
  };

  return (
    <>
      <Navbar />
      <div className="ordersPage">
        <h1>Orders</h1>
        <div className="ordercolumnLabels">
          <label className="orderId">Order ID</label>
          <label className="orderDate">Order Date</label>
          <label className="orderPrice">Order Price</label>
          <label className="orderStatus">Status</label>
          <label className="orderDetails">Details</label>
        </div>

        {orders.map((order) => (
          <div className="order" key={order.orderDetails.orderId}>
            <div className="orderId">
              <h5 className="ordertag">Order Id</h5>
              <p>{order.orderDetails.orderId}</p>
            </div>
            <div className="orderDate">
              <h5 className="ordertag">Order Date</h5>
              <p>{formatOrderDate(order.orderDetails.orderDate)}</p>
            </div>
            <div className="orderPrice">
              <h5 className="ordertag">Order Price</h5>
              <p>Rs. {parseFloat(order.orderDetails.total).toFixed(2)}</p>
            </div>
            <div className="orderStatus">
              <h5 className="ordertag">Order Status</h5>
              <p>Pending</p>
            </div>
            <div className="orderDetails">
              <button className="ordershowDetailsButton">
                <Link
                  to={`/order/${order.orderDetails.orderId}`}
                  style={{ color: "white" }}
                >
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
