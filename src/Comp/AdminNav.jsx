import React from 'react';
import CheeseBurgerMenu from "cheeseburger-menu";
import { Link } from 'react-router-dom';
import logo from "../img/smilingpenLogo.jpeg";

const AdminNav = ({ open, closeMenu }) => {
    return (
        <CheeseBurgerMenu isOpen={open} closeCallback={closeMenu}>
            <div className="nav">
                <ul>
                    <li>
                        <Link onClick={closeMenu} to="/admin" >
                            <img src={logo} alt="logo"/>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} className="links" to="/admin/motivation" >Motivational quotes</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} className="links" to="/admin/love" >Love quotes</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} className="links" to="/admin/fact" >Fact wednesday</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} className="links" to="/admin/" >Language session</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} className="links" to="/admin/fashion" >Fashion exclusive</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} className="links" to="/admin/word-of-the-day" >Word of the day</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} className="links" to="/admin/tour" >World tour</Link>
                    </li>
                    {/* <li className="newpost">
                        <button>New post</button>
                    </li> */}
                </ul>
            </div>
        </CheeseBurgerMenu>
    )
}

export default AdminNav
