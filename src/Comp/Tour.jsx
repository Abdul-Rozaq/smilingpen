import React from 'react';
import image from "../img/anchor.jpg";
import "../css/Tour.css";

const Tour = () => {
    return (
        <div className="tour">
            <div className="tour__header">
                <h3>Latest World tour</h3>
            </div>

            <div className="tour__last">
                <div className="tour__img">
                    <img src={image} alt="tour"/>
                </div>
                <h4>England</h4>
                <h6>Capital: <span>London</span></h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A praesentium fugit facilis quis perferendis possimus nam aliquid nihil et. Exercitationem recusandae sequi ipsum inventore nemo delectus soluta praesentium ratione laboriosam.</p>
                <p className="tour__cta">Continue reading...</p>
            </div>

            <p className="tour__subheader">Older world tour</p>

            <div className="tour__others">
                <div className="tour__old">
                    <div className="tour__oldImg">
                        <img src={image} alt="tour"/>
                    </div>
                    <h5>Germany</h5>
                    <h6>Capital: <span>Berlin</span></h6>
                    <p className="tour__read">Read now</p>
                </div>

                <div className="tour__old">
                    <div className="tour__oldImg">
                        <img src={image} alt="tour"/>
                    </div>
                    <h5>Ghana</h5>
                    <h6>Capital: <span>Accra</span></h6>
                    <p className="tour__read">Read now...</p>
                </div>
            </div>
        </div>
    )
}

export default Tour
