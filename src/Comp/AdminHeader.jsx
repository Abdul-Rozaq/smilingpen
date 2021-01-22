import React, { useState } from 'react';
import "../css/AdminHeader.css";
import AdminNav from './AdminNav';

const AdminHeader = () => {
    const [open, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className="adminHeader">
                <div className="navbar__line" onClick={() => setOpen(true)}>
                    <span className="navbar__line-1"></span>
                    <span className="navbar__line-2"></span>
                    <span className="navbar__line-3"></span>
                    <span className="navbar__line-4"></span>
                </div>

                <div>
                    <p>Hey, Admin <br/> Logout</p>
                </div>

            </div>
            <AdminNav open={open} closeMenu={closeMenu}  />
        </>
    )
}

export default AdminHeader
