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
            {/* <div className="servicePage__links">
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
            </div> */}
            

            <div className="servicePage__content">
                <h1>Smiling pen</h1>
                <div>
                    <p>
                        SmilingPen is a seasoned writer, talented poet, public and motivational speaker.
                    </p>

                    <p>He is also a career and relationship counselor.</p>

                    <p>
                        SmilingPen is a great programs and events anchor, he is an astonished content creator.
                    </p>
                    <p>Thus, he is a great listener.</p>
                </div>
                
                <div>
                    <h2>A Writer</h2>
                    {writer}
                </div>

                <div>
                    <h2>An Event Anchor</h2>
                    {anchor}
                </div>

                <div>
                    <h2>A Counselor</h2>
                    {counseling}
                </div>

                <div>
                    <h2>A Content creator</h2>
                    {content}
                </div>

                <div>
                    <h2>Poet</h2>
                    {poet}
                </div>

                <div>
                    <p>For more information or inquiry, send an email to </p>
                    <h6>Smilingpen04@gmail.com.</h6>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ServicePage
