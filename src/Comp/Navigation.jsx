import React, { useState } from 'react';
// import {  Menu } from "@material-ui/icons"
import "../css/Navigation.css";
import { Link } from 'react-router-dom';
import CheeseBurger from './CheeseBurger';

const Navigation = ({title}) => {
    const [open, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(!open);
    };    

    return (
        <>
            <div className="navigation">
                <Link className="links" to="/">
                    <h2 className="navigation__title">{title}</h2>
                </Link>
                {/* <Menu className="menu" onClick={() => setOpen(true)} /> */}
                <div className="navigation__line" onClick={() => setOpen(true)}>
                    <span className="navigation__line-1"></span>
                    <span className="navigation__line-2"></span>
                    <span className="navigation__line-3"></span>
                    <span className="navigation__line-4"></span>
                </div>
            </div>
            <CheeseBurger open={open} closeMenu={closeMenu} />
        </>
    )
}

export default Navigation
