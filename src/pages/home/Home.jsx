import React from "react";
import FlexItem from "../../components/flexItm/FlexItem.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Hero from "../../components/hero/Hero.jsx";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <FlexItem />
      <Footer />
    </div>
  );
}

export default Home;
