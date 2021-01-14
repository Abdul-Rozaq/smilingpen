import React from 'react';
import anchor from "../img/anchor.jpg";
import "../css/ImageGrid.css";
import { Link } from 'react-router-dom';

const ImageGrid = ({ title }) => { 
    return (
        <div className="imageGrid">
            <h3 className="container__title">{title}</h3>
            <hr />
            <div className="images">
                <div className="img-box">
                    <img src={anchor} alt="imh"/>
                </div>

                <div className="img-box">
                    <img src={anchor} alt="imh"/>
                </div>

                <div className="img-box">
                    <img src={anchor} alt="imh"/>
                </div>

                <div className="img-box">
                    <img src={anchor} alt="imh"/>
                </div>
            </div>
            <div  className="container__btn">
                <Link to="/fact" >
                    <button>View more</button>
                </Link>
            </div>
        </div>
    )
}

export default ImageGrid;
