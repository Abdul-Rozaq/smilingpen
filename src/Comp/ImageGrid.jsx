import React from 'react';
import { Link } from 'react-router-dom';
import "../css/ImageGrid.css";

const ImageGrid = ({ title, data }) => { 
    return (
        <div className="imageGrid">
            <h3 className="container__title">{title}</h3>
            <hr />
            <div className="images">
                {
                    data.map(({id , data}) => (
                        <div className="img-box" key={id}>
                            <img src={data.img} alt="imh"/>
                        </div>
                    ))
                }
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
