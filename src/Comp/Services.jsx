import React from 'react';
import writer from "../img/writer.jpg";
import anchor from "../img/anchor.jpg";
import content from "../img/content.jpg";
import counsel from "../img/counsel.jpg";
import poet from "../img/poet.jpg";
import "../css/Services.css";

const Services = () => {
    return (
        <div className="services">
            <div className="service" style={{ backgroundImage: `url(${writer})`}}>
                <h3 className="service__title">Writer</h3>
            </div>

            <div className="service" style={{ backgroundImage: `url(${anchor})`}}>
                <h3 className="service__title">Event Anchor</h3>
            </div>

            <div className="service" style={{ backgroundImage: `url(${counsel})`}}>
                <h3 className="service__title">Counseling</h3>
            </div>

            <div className="service" style={{ backgroundImage: `url(${content})`}}>
                <h3 className="service__title">Content creator</h3>
            </div>

            <div className="service" style={{ backgroundImage: `url(${poet})`}}>
                <h3 className="service__title">Poet</h3>
            </div>
        </div>
    )
}

export default Services
