import React from 'react';
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import logo from "../img/smilingpenLogo.jpeg";
import "../css/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__icons">
                <Facebook className="footer__icon" />
                <Twitter className="footer__icon" />
                <Instagram className="footer__icon" />
            </div>

            <img src={logo} alt="logo"/>

            <p>copyright &#169; 2021. All right reserved</p>
        </div>
    )
}

export default Footer
