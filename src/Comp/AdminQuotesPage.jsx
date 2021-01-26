import React from 'react'
import AdminQuote from './AdminQuote';
import "../css/AdminQuotePage.css";

const AdminQuotesPage = () => {
    return (
        <div className="adminQuotesPage">
            <div className="adminQuotePage__container">
                <AdminQuote />
                <AdminQuote />
                <AdminQuote />
            </div>
        </div>
    )
}

export default AdminQuotesPage
