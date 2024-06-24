import React, { useContext, useEffect, useState } from "react";
import "./order.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { OrdersContext } from "../../context/Cart";
import { useParams } from "react-router-dom";

const Order = () => {
  const { orders } = useContext(OrdersContext);
  const { orderid } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const foundOrder = orders.find(
      (order) => order.orderDetails.orderId === Number(orderid)
    );
    setOrder(foundOrder);
  }, [orders, orderid]);

  if (!order) {
    return (
      <>
        <Navbar />
        <div className="orderPage">
          <h1>Loading...</h1>
        </div>
        <Footer />
      </>
    );
  }

  const { products, orderDetails } = order;
  const { subtotal, tax, shippingCharge, total, shippingAddress } =
    orderDetails;
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
      <div className="orderPage">
        <h1>Order Id: {orderid}</h1>
        <div className="orderLabels">
          <label className="productImage">Image</label>
          <label className="productDetails">Product Name</label>
          <label className="productPrice">Price</label>
          <label className="productQuantity">Quantity</label>
        </div>
        {products.map((product) => (
          <div className="ordercomp" key={product.productId}>
            <div className="productImage">
              <img src={product.url} alt={product.name} />
            </div>
            <div className="_productDetails">
              <div className="productTitle">{product.name}</div>
            </div>
            <div className="productPrice">Rs. {product.price.toFixed(2)}</div>
            <div className="productQuantity">
              <h4>{product.quantity}</h4>
              <p className="multipleprice" style={{ marginTop: "5px" }}></p>
            </div>
          </div>
        ))}

        <div className=".totals">
          <div className="totalsItem">
            <label>Subtotal:</label>
            <div className="totalsValue">Rs. {subtotal}</div>
          </div>
          <div className="totalsItem">
            <label>Tax (3%):</label>
            <div className="totalsValue">Rs. {tax}</div>
          </div>
          <div className="totalsItem">
            <label>Shipping charge:</label>
            <div className="totalsValue">Rs. {shippingCharge.toFixed(2)}</div>
          </div>
          <div className="totalsItem totalsItemTotal">
            <label>Grand Total:</label>
            <div className="totalsValue">Rs. {total}</div>
          </div>
          <div className="totalsItem">
            <label>Order Date:</label>
            <div className="totalsValue">
              {" "}
              {formatOrderDate(order.orderDetails.orderDate)}
            </div>
          </div>
          <div className="totalsItem">
            <label>Shipping Address:</label>
            <div className="totalsValue">{shippingAddress}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Order;
