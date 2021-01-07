import React from 'react';
import image from "../img/anchor.jpg";
import "../css/SingleQuote.css";

const SingleQuoteContent = () => {
    return (
        <div className="singleQuote__content">
            <div className="singleQuote__imgbbox">
                <img src={image} alt="quote" className="singleQuote__img"/>
            </div>

            <p className="singleQuote__date">on 21, Aug 2021</p>
            
            <h3 className="singleQuote__title">Never give up</h3>
            
            <article>
                <p className="singleQuote__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rerum deserunt voluptas aut. Aliquam numquam, placeat, ipsa accusamus consequatur deserunt qui sunt molestiae hic voluptas dolorem tempore ex error iusto.</p>

                <p className="singleQuote__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rerum deserunt voluptas aut. Aliquam numquam, placeat, ipsa accusamus consequatur deserunt qui sunt molestiae hic voluptas dolorem tempore ex error iusto.</p>
                
            </article>
        </div>
    )
}

export default SingleQuoteContent
