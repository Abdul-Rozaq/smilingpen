import React from 'react';
import "../css/CommentForm.css";

const CommentForm = () => {
    return (
        <div className="commentForm">
            <div className="commentForm__header">
                <p className="commentForm__title">LEAVE A REPLY</p>
                <p className="commentForm__descretion">Your email will not be published. <br /> Required fields are marked *</p>
            </div>

            <form action="">
                <textarea type="text" name="comment" id="comment" placeholder="Your Comment *"/>
                <input type="text" name="name" id="name" placeholder="Your Name *"/>
                <input type="email" name="email" id="email" placeholder="Your email *"/>
                <button className="commentForm__submit" type="submit">Post comment</button>
            </form>
        </div>
    )
}

export default CommentForm
