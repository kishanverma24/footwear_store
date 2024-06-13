import React from 'react'
// import Navbar from '../components/Navbar.jsx';
// import Hero from '../components/Hero.jsx';
import FlexItem from "../components/flexItm/FlexItem";
import MainCard from "../components/mainCard/MainCard.jsx";
import Navbar from '../components/navbar/Navbar.jsx';
import Hero from '../components/hero/Hero.jsx';
function Home() {
  return (
    <div>
        {/* <Navbar/>
        <Hero/> */}
        <Navbar/>
        <Hero/>
        <FlexItem/>
        {/* <MainCard/> */}


    </div>
  )
}

export default Home;