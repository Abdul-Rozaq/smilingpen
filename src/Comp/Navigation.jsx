import React from 'react';
import {  Menu } from "@material-ui/icons"
import "../css/Navigation.css";

const Navigation = ({title}) => {
    return (
        <div className="navigation">
            <h2 className="navigation__title">{title}</h2>
            <Menu className="menu" />
        </div>
    )
}

export default Navigation
