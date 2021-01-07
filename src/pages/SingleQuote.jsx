import React from 'react';
import Navigation from "../Comp/Navigation";
import "../css/SingleQuote.css";
import SingleQuoteContent from '../Comp/SingleQuoteContent';
import Comment from '../Comp/Comment';
import CommentForm from '../Comp/CommentForm';
import { useParams } from 'react-router-dom';

const SingleQuote = () => {
    const { name } = useParams();

    return (
        <div className="singleQuote">
            { name && name === "love" && <Navigation title="Love Quote" />}
            { name && name === "fashion" && <Navigation title="Motivational Quote" />}

            <div className="singleQuote__header">
                Home - Love quote - Never give up
            </div>

            <SingleQuoteContent />

            <Comment />

            <CommentForm />
        </div>
    )
}

export default SingleQuote
