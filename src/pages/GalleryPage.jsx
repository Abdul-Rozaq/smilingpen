import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Comp/Footer';
import Gallery from '../Comp/Gallery';
import Navigation from '../Comp/Navigation';
import { db } from '../utils/firebase';

const GalleryPage = () => {
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
        <>
        <div className="galleryPage">
            { name && name === "fact" && <Navigation title="Fact Wednesday" />}
            { name && name === "fashion" && <Navigation title="Fashion Exclusive" />}
            
            <Gallery data={docs} />
            
        </div>
        <Footer />
        </>
    )
}

export default GalleryPage
