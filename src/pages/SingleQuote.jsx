import React, { useEffect, useState } from 'react';
import Navigation from "../Comp/Navigation";
import "../css/SingleQuote.css";
import SingleQuoteContent from '../Comp/SingleQuoteContent';
import Comment from '../Comp/Comment';
import CommentForm from '../Comp/CommentForm';
import { useParams } from 'react-router-dom';
import { db } from "../utils/firebase";
import Footer from '../Comp/Footer';

const SingleQuote = () => {
    const [quote, setQuote] = useState({});
    const { name, id } = useParams(); 

    useEffect(() => {
        const unsub = db.collection(name).doc(id).onSnapshot(snap => {
            setQuote({
                id: snap.id,
                data: snap.data()
            })
        })
        return () => {
           unsub() 
        }
    }, [name, id])

    return (
        <div className="singleQuote">
            { name && name === "love" && <Navigation title="Love Quote" />}
            { name && name === "tour" && <Navigation title="World tour" />}
            { name && name === "motivation" && <Navigation title="Motivational Quote" />}

            <div className="singleQuote__header">
                {quote && name === "tour" && `Home - World tour - ${quote?.data?.country}`}
                {quote && name === "love" && `Home - Love Quote - ${quote?.data?.title}`}
                {quote && name === "motivation" && `Home - Motivational Quote - ${quote?.data?.title}`}
            </div>

            {quote && <SingleQuoteContent quote={quote} />}

            <Comment />

            <CommentForm />

            <Footer />
        </div>
    )
}

export default SingleQuote
