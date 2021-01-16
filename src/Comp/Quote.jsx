import React from 'react';
import { Share } from "@material-ui/icons";
import "../css/Quote.css";
import { Link } from 'react-router-dom';

const Quote = ({ data, category }) => {
    
    return ( 
        <>
        { data && data.map(({id, data}) => (
            <div className="quote" key={id}>
                <div className="quote__imgbox">
                    <Link to={`/${category}/${id}`}>
                        <img src={data.image} alt="quote" className="quote__img"/>
                    </Link>
                </div>
                {/* <p className="quote__date">{data.timestamp.toDate().toDateString()}</p> */}
                <h3 className="quote__title">{data.title}</h3>
                <p className="quote__category">
                    { category === "love" && <span>Love quote</span>}
                    { category === "motivation" && <span>Motivational quote</span>}
                     
                    <Share className="quote__share" />
                </p>
                <p className="quote__comment">3 comments</p>
            </div>
        ))
        }
        </>
    )
}

export default Quote
