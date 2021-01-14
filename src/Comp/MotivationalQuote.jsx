import React from 'react';
import { Link } from 'react-router-dom';
import Quote from "./Quote";

const MotivationalQuote = ({ data }) => {
    return (
        <div className="container">
            <h3 className="container__title">Motivational Quotes</h3>
            <hr />
            <div className="container__content">
                <Quote data={data} category="motivation"  />
                <Quote data={data} category="motivation" />
                <Quote data={data} category="motivation"  />
                <Quote data={data} category="motivation" />
            </div>
            <div className="container__btn">
                <Link to="/quote/motivation" >
                    <button className="container__btn">View more</button>
                </Link>
            </div>
        </div>
    )
}

export default MotivationalQuote
