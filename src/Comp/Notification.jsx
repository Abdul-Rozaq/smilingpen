import React from 'react';
import { ModeComment, ModeCommentOutlined, Stars, StarsOutlined } from "@material-ui/icons";
import "../css/Notification.css";

const Notification = () => {
    return (
        <div className="notification">
            <div className="notification__header">
                <p>1/11/2020</p>
                <p>Motivational quote</p>
                {/* <p>comment by: <br/> alimi rasak</p> */}
                <p>New Rating</p>
                {/* <ModeComment className="comment__icon" /> */}
                {/* <ModeCommentOutlined /> */}
                <Stars className="comment__icon" />
                {/* <StarsOutlined /> */}
                {/* <p className="notification__type">New comment</p> */}
            </div>
            <div className="notification__content">
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio doloremque nostrum saepe cumque quasi laudantium </h6>
            </div>
        </div>
    )
}

export default Notification
