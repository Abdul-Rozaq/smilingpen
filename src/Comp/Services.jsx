import React from 'react';
import { Link } from 'react-router-dom';
import writer from "../img/writer.jpg";
import anchor from "../img/anchor.jpg";
import content from "../img/content.jpg";
import counsel from "../img/counsel.jpg";
import poet from "../img/poet.jpg";
import "../css/Services.css";


const trunc = (str, length) => {
    if (str.length <= length) return str;

    return str.slice(0, length) + " ...";
}

const Services = () => {
    return (
        <div className="services">
            {
                data.map((serv, i) => (
                    <Link to={serv.link} className="links" key={i}>
                        <div className="service" style={{ backgroundImage: `url(${serv.bg})`}}>
                            <div>
                                <h3 className="service__title">{serv.title}</h3>
                                <p className="service__text">{trunc(serv.text, 100)}</p>
                            </div>
                        </div>
                    </Link>                    
                ))
            }
        </div>
    )
}

export default Services

const data = [
    {
        bg: writer,
        title: "Writer",
        link: "/service/writer",
        text: "The writing world is a very vast company which spans across the world of literature where we have prose, Drama and Poetry. Thus, it is pertinent to understand that not every writer is a poet and not every poet is a writer. A writer can be a novelist, an essayist and even a journalist.."
    },
    {
        bg: anchor,
        title: "Event Anchor",
        link: "/service/event-anchor",
        text: "Its the modern age where events are branded and colored with not only the attendees of the events but also with anchors of the event. Having someone like SmilingPen anchoring your event is one thing you'll always want."
    },
    {
        bg: counsel,
        title: "Counseling",
        link: "/service/counseling",
        text: "Guiding and counseling is life cause it refurbishes a mind that is about to lose its path or had already lost its path. Being a certified Children's Right Advocate, he has proven to be a great source of guidance to many kids across the country which makes many schools and correctional centers always inviting him for a session with the kids."
    },
    {
        bg: content,
        title: "Content creator",
        link: "/service/content-creator",
        text: "You want a combination of words that is new and golden? You want a content that hasn't been used or identified by Google? A pure content that has no zit of plagiarism, then SmilingPen is perfect for your wants."
    },
    {
        bg: poet,
        title: "Poet",
        link: "/service/poet",
        text: "To SmilingPen, poetry gives him freedom, it's gives him the greatest avenue to express himself and be free. Poetry is life, life is poetry. A discursive poet like SmilingPen is that which is so rare in the community of poets."
    },
];