import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Comp/Navbar';
import { writer, poet, anchor, content, counseling } from '../utils/data';
import "../css/Service.css";
import Footer from '../Comp/Footer';

const ServicePage = () => {
    const {name } = useParams();
    return (
        <div className="servicePage">
            <Navbar />
            <div className="servicePage__links">
                <div>
                    <Link className={`links ${ name === "writer" && "active"}`} to="/service/writer">
                        <p>Writer</p>
                    </Link>
                    <Link className={`links ${ name === "poet" && "active"}`} to="/service/poet">
                        <p>Poet</p>
                    </Link>
                    <Link className={`links ${ name === "content-creator" && "active"}`} to="/service/content-creator">
                        <p>Content creator</p>
                    </Link>
                    <Link className={`links ${ name === "event-anchor" && "active"}`} to="/service/event-anchor">
                        <p>Event anchor</p>
                    </Link>
                    <Link className={`links ${ name === "counseling" && "active"}`} to="/service/counseling">
                        <p>counseling</p>
                    </Link>
                </div>
            </div>
            <div className="servicePage__content">
                { name === "writer" && writer }
                { name === "poet" && poet }
                { name === "content-creator" && content }
                { name === "counseling" && counseling }
                { name === "event-anchor" && anchor }
            </div>
            <Footer />
        </div>
    )
}

export default ServicePage
