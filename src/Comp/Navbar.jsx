import React from 'react';
import "../css/Navbar.css";
import logo from "../img/smilingpenLogo.jpeg";
import { Facebook, Instagram, Twitter, Menu } from "@material-ui/icons"
import { Link } from 'react-router-dom';

const Navbar = () => { 
    return (
        <div className='navbar'>
            <div className="navbar__menu">
                <Menu className='menu' />
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
    )
}

export default Navbar
