import React from 'react';
import { useParams } from 'react-router-dom';
import AdminHeader from '../Comp/AdminHeader';
import AdminHero from '../Comp/AdminHero';
import AdminNotifications from '../Comp/AdminNotifications';
import AdminQuotesPage from '../Comp/AdminQuotesPage';
import "../css/Admin.css";

const Admin = () => {
    const { name } = useParams();
    // console.log(name);
    return (
        <div className="admin">
            <AdminHeader />
            {
                !name && (
                    <>
                        <AdminHero />
                        <AdminNotifications />
                    </>
                )
            }
            {
                name && (
                    <AdminQuotesPage />
                )
            }
        </div>
    )
}

export default Admin
