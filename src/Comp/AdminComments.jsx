import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import React from 'react';
import "../css/AdminComments.css";

const AdminComments = ({ setShowComment }) => {
    return (
        <div className="adminComments">
            <div className="adminComments__header">
                <ArrowBackIos onClick={() => setShowComment(false)} />
                <p>Comments</p>
                <ArrowForwardIos onClick={() => setShowComment(false)} />
            </div>

            <div className="adminComments__form">
                <div>
                    <input type="text"/>
                    <button type="submit">post</button>
                </div>
            </div>

            <div className="adminComments__wrapper">
                <div className="adminComments__box">
                    <p>
                        <span>Toyin tomato</span>
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                    <p>Reply</p>
                </div>

                <div className="adminComments__box">
                    <p>
                        <span>Toyin tomato</span>
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                    <p>Reply</p>
                </div>

                <div className="adminComments__box">
                    <p>
                        <span>Toyin tomato</span>
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                    <p>Reply</p>
                </div>

                
            </div>
        </div>
    )
}

export default AdminComments
