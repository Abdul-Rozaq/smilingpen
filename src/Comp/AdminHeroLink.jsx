import React from 'react';
import { Link } from 'react-router-dom';
import "../css/AdminHeroLink.css";

const AdminHeroLink = ({title, count, link}) => {
    return (
        <Link to={link} className="links">
            <div className="adminHeroLink">
                <h3>{title}</h3>
                <p>Posts: {count}</p>
            </div>
        </Link>
    )
}

export default AdminHeroLink
