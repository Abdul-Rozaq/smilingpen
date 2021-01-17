import React from 'react';
import { useParams } from 'react-router-dom';
import "../css/SingleQuote.css";

const SingleQuoteContent = ({ quote }) => {
    const { name } = useParams();
    // const year = quote.data.timestamp.toDate().getFullYear();
    // const month = quote.data.timestamp.toDate().getMonth();
    // const day = quote.data.timestamp.toDate().getDate();
    // console.log(month);

    return (
        <div className="singleQuote__content">
            <div className="singleQuote__imgbbox">
                <img src={quote?.data?.image} alt="quote" className="singleQuote__img"/>
            </div>

            <p className="singleQuote__date">{quote?.data?.timestamp.toDate().toDateString()}</p>
            
            <h3 className="singleQuote__title">{quote?.data?.title}</h3>

            {name === "tour" && <h3 className="singleQuote__title">{quote?.data?.country}</h3>}

            {name === "tour" && <p className="singleQuote__capital">Capital: <span>{quote?.data?.capital}</span></p>}
            
            <article>
                {
                    quote?.data?.article.map((par, i) => (
                        <p className="singleQuote__text" key={i}>{par}</p>
                    ))
                }
            </article>
        </div>
    )
}

export default SingleQuoteContent
