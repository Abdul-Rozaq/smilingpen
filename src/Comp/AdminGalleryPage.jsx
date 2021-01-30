import React from 'react';
import { useParams } from 'react-router-dom';
import { AddCircleOutline } from "@material-ui/icons";
import AdminGallery from './AdminGallery';

const AdminGalleryPage = () => {
    const {name} = useParams();

    return (
        <div className="container">
            <div className="adminGallery__header">
                { name === "fact" && (<h1>Fact Wednesday</h1>)}
                { name === "fashion" && (<h1>Fashion Exclusive</h1>)}
                <AddCircleOutline className="adminGallery__add" />
            </div>
            
            <div className="adminGallery__content">
                <AdminGallery />
                <AdminGallery />
                <AdminGallery />
            </div>
        </div>
    )
}

export default AdminGalleryPage
