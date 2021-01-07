import React from 'react';
import "../css/Comment.css";

const Comment = () => {
    return (
        <div className="comment">
            <div className="comment__header">
                <h4>COMMENTS (5)</h4>
            </div>
            
            <div className="comment__body">
                <h4 className="comment__name">Alimson</h4>
                <p className="comment__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum totam inventore animi sapiente omnis qui velit nesciunt nobis provident, hic maxime rerum cumque tempora, culpa eum asperiores ullam! Quisquam, accusamus!</p>
            </div>
        </div>
    )
}

export default Comment
