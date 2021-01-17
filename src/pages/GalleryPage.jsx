import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Gallery from '../Comp/Gallery'
import Modal from '../Comp/Modal'
import Navigation from '../Comp/Navigation'
import { db } from '../utils/firebase'

const GalleryPage = () => {
    const [selectedImg, setSelectedImg] = useState(null);
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
        <div className="galleryPage">
            { name && name === "fact" && <Navigation title="Fact Wednesday" />}
            { name && name === "fashion" && <Navigation title="Fashion Exclusive" />}
            
            <Gallery data={docs} setSelectedImg={setSelectedImg} />
            {
                selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            }
        </div>
    )
}

export default GalleryPage
