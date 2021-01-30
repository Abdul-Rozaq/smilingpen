import React, { useState } from 'react';
import { Share, ThumbDownAltOutlined, ThumbUpOutlined, MoreHoriz} from "@material-ui/icons";
import "../css/AdminGallery.css";
import img from "../img/content.jpg";
import AdminModal from './AdminModal';

const AdminGallery = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="adminGallery__img">
                <div className="adminGallery__img-cta">
                    <p>1 aug, 2020</p>
                    <MoreHoriz onClick={() => setShowModal(true)} />
                </div>
                <div className="gallery__imgwrap">
                    <img src={img} alt="imag"/>
                </div>
                <div className="adminGallery__img-info">
                    <div><p>5</p> <ThumbUpOutlined /> </div>
                    <div><p>5</p> <Share /> </div>
                    <div><p>5</p> <ThumbDownAltOutlined /> </div>
                </div>
            </div>
            {showModal && (<AdminModal setShowModal={setShowModal} />)}
        </>
    )
}

export default AdminGallery
