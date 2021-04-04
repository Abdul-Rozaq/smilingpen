import React from 'react';
import { Link } from 'react-router-dom';
import "../css/AdminModal.css";

const AdminModal = ({ setShowModal, name, id }) => {
    console.log(id);
   
    return (
        <div className="adminModal">
            <ul>
                {  name === "love" && (<li><Link className="links" to={`/admin/post/${name}/${id}`}><p>Edit</p></Link></li>)}
                {  name === "motivation" && (<li><Link className="links" to={`/admin/post/${name}/${id}`}><p>Edit</p></Link></li>)}
                {  name === "tour" && (<li><Link className="links" to={`/admin/post/${name}/${id}`}><p>Edit</p></Link></li>)}
                
                <li><Link className="links" to=""><p>Publish</p></Link></li>
                <li><Link className="links" to=""><p>Share to</p></Link></li>
                <li><Link className="links" to=""><p>Delete post</p></Link></li>
                <li onClick={() => setShowModal(false)}><p>Cancel</p></li>
            </ul>
        </div>
    )
}

export default AdminModal
