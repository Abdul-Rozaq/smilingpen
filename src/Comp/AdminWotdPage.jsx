import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import "../css/AdminWotd.css";
import AdminWotd from './AdminWotd';

const AdminWotdPage = () => {
    return (
        <div className="adminWotdPage container">
            <div className="adminQuotesPage__header">
                <Link className="links" to="/admin/word-of-the-day/new"></Link>
                <Button variant="outlined">Add new post</Button>
            </div>
            <div className="adminWotd__content">
                <AdminWotd />
                <AdminWotd />
                <AdminWotd />
                <AdminWotd />
            </div>
        </div>
    )
}

export default AdminWotdPage
