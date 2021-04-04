import React, { useState } from 'react';
import img from "../img/anchor.jpg";
import { MoreHoriz, Label } from '@material-ui/icons';
import "../css/AdminQuote.css";
import AdminModal from './AdminModal';
import AdminComments from './AdminComments';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const AdminQuote = ({ posts, title, name }) => {
    const [showModal, setShowModal] = useState(false);
    const [showComment, setShowComment] = useState(false);
    // console.log(posts);
    // console.log(title);
    
    return (
        <>
            <div className="adminQuotesPage__header container">
                <Link to={`/admin/post/${name}`} className="links">
                    <Button variant="outlined">Add new post</Button>
                </Link>
            </div>

            {
                posts?.map(({id, data}) => (
                    <div className="adminQuote" key={id}>
                        <div className="adminQuote__header">
                            <p> <Label className="adminQuote__label" /> {title}</p>
                            <MoreHoriz onClick={() => setShowModal(true)} />
                        </div>
                        
                        <div className="adminQuote__image">
                            <img src={data?.image} alt="quote"/>
                        </div>
                        
                        <div className="adminQuote__info">
                            <p>Sun 10, 2020</p>
                            { title !== "World Tour" && (<h5>{data?.title}</h5>)}
                            { title === "World Tour" && (<h5>{data?.country} | {data?.capital}</h5>) }
                            <p onClick={() => setShowComment(true)}>View all 10 comments</p>
                            <div className="adminQuote__comments">
                                <p><span>Toyin tomato</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p><span>Kemi kemo</span> eum deserunt non nesciunt, ab fuga quos ipsa.</p>
                            </div>
                        </div>

                        {showModal && (<AdminModal id={id} name={name} setShowModal={setShowModal} />)}
                        
                        {showComment && (<AdminComments id={id} name={name} setShowComment={setShowComment} />)}
                        
                    </div>
                ))
            }
        </>
    )
}

export default AdminQuote
