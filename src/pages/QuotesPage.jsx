import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../Comp/Footer';
import Navigation from '../Comp/Navigation'
import Quote from '../Comp/Quote';
import "../css/QuotePage.css";
import { db } from '../utils/firebase';

const QuotesPage = () => {
    const { name } = useParams();
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = db.collection(name).onSnapshot(snapshot => {
            setDocs(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        })
        return () => unsub();
    }, [name])


    return (
        <div className="quotePage">
            { name && name === "tour" && <Navigation title="World Tour" />}
            { name && name === "love" && <Navigation title="Love Quote" />}
            { name && name === "motivation" && <Navigation title="Motivational Quote" />}
            
            <div className="quotePage__container">
                {docs && <Quote data={docs} category={name} />}
            </div> 
            <Footer />
        </div>
    )
}

export default QuotesPage
