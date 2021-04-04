import React from 'react';
import { useParams } from 'react-router-dom';
import AdminGallery from './AdminGallery';
import UploadForm from './UploadImage/UploadForm';

const AdminGalleryPage = () => {
    const {name} = useParams();

    return (
        <div className="container">
            <div className="adminGallery__header">
                { name === "fact" && (<h1>Fact Wednesday</h1>)}
                { name === "fashion" && (<h1>Fashion Exclusive</h1>)}
                <UploadForm />
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
