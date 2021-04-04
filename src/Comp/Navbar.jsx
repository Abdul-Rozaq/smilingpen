import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CheeseBurger from './CheeseBurger';
import logo from "../img/smilingpenLogo.jpeg";
import "../css/Navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className='navbar'>
                
                <div className="navbar__logoBox">
                    <Link to="/">
                        <img src={logo} alt="logo" className="navbar__logo"/>
                    </Link>
                </div>
                
                <div className="navbar__nav">
                    <Link className="links navbar__navlinks" to="/">Fact <br/> Wednesday</Link>
                    <Link className="links navbar__navlinks" to="/">Fashion <br/> Exclusive</Link>
                    <Link className="links navbar__navlinks" to="/">Language <br/> Session</Link>
                    <Link className="links navbar__navlinks" to="/">Love <br/> Quotes</Link>
                    <Link className="links navbar__navlinks" to="/">Motivational <br/> Quotes</Link>
                    <Link className="links navbar__navlinks" to="/">Word Of <br /> The Day </Link>
                    <Link className="links navbar__navlinks" to="/">World <br/> Tour</Link>
                    {/* <Link className="links navbar__navlinks" to="/">Book A Session</Link> */}
                </div>

                <div className="navbar__menu">
                    <div className="navbar__line" onClick={() => setOpen(true)}>
                        <span className="navbar__line-1"></span>
                        <span className="navbar__line-2"></span>
                        <span className="navbar__line-3"></span>
                        <span className="navbar__line-4"></span>
                    </div>
                </div>
            </div>
            <CheeseBurger open={open} closeMenu={closeMenu} />
        </>
    )
}

export default Navbar
