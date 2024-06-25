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
          <div className="profileCardSubDiv">
            <h2>Name: </h2>
            <h2>Kishan Verma</h2>
          </div>
          <div className="profileCardSubDiv">
            <h2>Mobile No:</h2>
            <h2>633218450246</h2>
          </div>
        </div>
        <div className="profileCard">
          <div className="profileCardSubDiv">
            <h2>Email Address: </h2>
            <h2>kishanverma9151@gmail.com</h2>
          </div>
          <div className="profileCardSubDiv">
            <h2>User id: </h2>
            <h2>77521234</h2>
          </div>
        </div>
        <div className="profileCard">
          <div className="profileCardSubDiv">
            <h2>Address: </h2>
            <h2>Hajratganj, Lucknow, Uttar Pradesh, India</h2>
          </div>
        </div>
        <ProductComponent />
      </div>
      <Footer />
    </>
  );
};

export default Profile;
