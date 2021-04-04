import React from 'react';
import { Link } from "react-router-dom";
import logo from "../img/smilingpenLogo.jpeg";
import "../css/Nav.css";

const Nav = ({ closeMenu }) => {
    return ( 
        <div className="nav">
            <ul>
                <li>
                    <Link onClick={closeMenu} to="/" >
                        <img src={logo} alt="logo"/>
                    </Link>
                </li>
                <li>
                    <Link onClick={closeMenu} className="links" to="/motivation" >Motivational quotes</Link>
                </li>
                <li>
                    <Link onClick={closeMenu} className="links" to="/love" >Love quotes</Link>
                </li>
                <li>
                    <Link onClick={closeMenu} className="links" to="/gallery/fact" >Fact wednesday</Link>
                </li>
                <li>
                    <Link onClick={closeMenu} className="links" to="/" >Language session</Link>
                </li>
                <li>
                    <Link onClick={closeMenu} className="links" to="/gallery/fashion" >Fashion exclusive</Link>
                </li>
                <li>
                    <Link onClick={closeMenu} className="links" to="/" >Word of the day</Link>
                </li>
                <li>
                    <Link onClick={closeMenu} className="links" to="/tour" >World tour</Link>
                </li>
                <li>
                    <Link onClick={closeMenu} className="links" to="/" >Book a session</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
