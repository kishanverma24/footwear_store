import React from "react";
import "./profile.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProductComponent from "../../components/productComponent/ProductComponent";
const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profileCard">
          <h1>Profile</h1>
        </div>
        <div className="profileCard">
          <h2>Name: Kishan Verma</h2>
          <h2>Mobile No:633218450246</h2>
        </div>
        <div className="profileCard">
          <h2>Email Address: kishanverma9151@gmail.com</h2>
          <h2>User id: 77521234</h2>
        </div>
        <div className="profileCard">
          <h2>Address: Hajratganj, Lucknow, Uttar Pradesh, India </h2>
        </div>
        <ProductComponent />
      </div>
      <Footer />
    </>
  );
};

export default Profile;
