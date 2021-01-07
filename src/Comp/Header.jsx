import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import Services from './Services';
import "../css/Header.css";

const Header = () => {
    return (
        <div className='header'>
            {/* NAVIGATION  */}
            <Navbar />
           {/* BANNER */}
           <Hero />
           {/* WHAT I DO */}
           <Services />
        </div>
    )
}

export default Header
