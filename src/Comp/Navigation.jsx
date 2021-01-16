import React from 'react';
import {  Menu } from "@material-ui/icons"
import "../css/Navigation.css";
import { Link } from 'react-router-dom';

const Navigation = ({title}) => {
    return (
        <div className="navigation">
            <Link className="links" to="/">
                <h2 className="navigation__title">{title}</h2>
            </Link>
            <Menu className="menu" />
        </div>
    )
}

export default Navigation
