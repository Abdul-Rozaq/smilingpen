import React, { useState } from 'react';
import img from "../img/anchor.jpg";
import { MoreHoriz, Label } from '@material-ui/icons';
import "../css/AdminQuote.css";
import AdminModal from './AdminModal';
import AdminComments from './AdminComments';
import { Button } from '@material-ui/core';

const AdminQuote = ({ posts, title }) => {
    const [showModal, setShowModal] = useState(false);
    const [showComment, setShowComment] = useState(false);
    
    return (
        <div className="adminQuote">
            <div className="adminQuotesPage__header container">
                <Button variant="outlined">Add new post</Button>
            </div>

            <div className="adminQuote__header">
                <p> <Label className="adminQuote__label" /> {title}</p>
                <MoreHoriz onClick={() => setShowModal(true)} />
            </div>
            
            <div className="adminQuote__image">
                <img src={img} alt="quote"/>
            </div>
            
            <div className="adminQuote__info">
                <p>Sun 10, 2020</p>
                { title !== "World Tour" && (<h5>Rome was not built in a day. Every master was once taught.</h5>) }
                { title === "World Tour" && (<h5>Nigeria | Abuja</h5>) }
                <p onClick={() => setShowComment(true)}>View all 10 comments</p>
                <div className="adminQuote__comments">
                    <p><span>Toyin tomato</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p><span>Kemi kemo</span> eum deserunt non nesciunt, ab fuga quos ipsa.</p>
                </div>
            </div>
            {showModal && (<AdminModal setShowModal={setShowModal} />)}
            {showComment && (<AdminComments setShowComment={setShowComment} />)}
            
        </div>
    )
}

export default AdminQuote
