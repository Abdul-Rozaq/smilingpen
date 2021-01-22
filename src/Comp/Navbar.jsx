import React, { useState } from 'react';
import "../css/Navbar.css";
import logo from "../img/smilingpenLogo.jpeg";
import { Facebook, Instagram, Twitter } from "@material-ui/icons"
import { Link } from 'react-router-dom';
import CheeseBurger from './CheeseBurger';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className='navbar'>
                <div className="navbar__menu">
                    <div className="navbar__line" onClick={() => setOpen(true)}>
                        <span className="navbar__line-1"></span>
                        <span className="navbar__line-2"></span>
                        <span className="navbar__line-3"></span>
                        <span className="navbar__line-4"></span>
                    </div>
                </div>
                <div className="navbar__logoBox">
                    <Link to="/">
                        <img src={logo} alt="logo" className="navbar__logo"/>
                    </Link>
                </div>
                <div className="navbar__contact">
                    <p className="navbar__pos">P.O.S ?</p>
                    <p className="navbar__posLg">Podium Of Smilingpen?</p>
                    <div className="navbar__icons">
                        <Facebook className="navbar__icon" />
                        <Instagram className="navbar__icon" />
                        <Twitter className="navbar__icon" />
                    </div>
                </div>
            </div>
            <CheeseBurger open={open} closeMenu={closeMenu} />
        </>
    )
}

export default Navbar
