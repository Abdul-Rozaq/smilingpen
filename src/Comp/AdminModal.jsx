import React from 'react';
import { Link } from 'react-router-dom';
import "../css/AdminModal.css";

const AdminModal = ({ setShowModal }) => {
    return (
        <div className="adminModal">
            <ul>
                <li><Link className="links"><p>Edit</p></Link></li>
                <li><Link className="links"><p>Publish</p></Link></li>
                <li><Link className="links"><p>Share to</p></Link></li>
                <li><Link className="links"><p>Delete post</p></Link></li>
                <li onClick={() => setShowModal(false)}><p>Cancel</p></li>
            </ul>
        </div>
    )
}

export default AdminModal
