import React from 'react';
import "../css/AdminNotifications.css";
import Notification from './Notification';

const AdminNotifications = () => {
    return (
        <div className="adminNotifications">
            <h2>Recent activities</h2>
            <div>
                <Notification />
                <Notification />
            </div>
        </div>
    )
}

export default AdminNotifications
