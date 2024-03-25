
// eslint-disable-next-line no-unused-vars
import React from 'react';

import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Stats from "../components/Stats.jsx";


const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero/>
            <Stats/>
            <Footer/>

        </div>
    );
};

export default Home;
