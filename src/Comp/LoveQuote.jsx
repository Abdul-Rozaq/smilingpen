import React from 'react'
import { Link } from 'react-router-dom'
import Quote from './Quote'

const LoveQuote = ({ data }) => {
    return (
        <div className="container">
            <h3 className="container__title">Love Quotes</h3>
            <hr />
            <div className="container__content">
                <Quote data={data} category="love"  />
                <Quote data={data} category="love" />
                <Quote data={data} category="love"  />
                <Quote data={data} category="love" />
            </div>
            <div className="container__btn">
                <Link to="/quote/love" >
                    <button className="container__btn">View more</button>
                </Link>
            </div>
        </div>
    )
}

export default LoveQuote
