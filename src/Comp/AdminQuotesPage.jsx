import React, { useEffect, useState } from 'react'
import AdminQuote from './AdminQuote';
import "../css/AdminQuotePage.css";
import { db } from '../utils/firebase';
import { useParams } from 'react-router-dom';
import AdminGalleryPage from './AdminGalleryPage';
import AdminWotdPage from './AdminWotdPage';

const AdminQuotesPage = () => {
    const [posts, setPosts] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        const unsub = db.collection(name).onSnapshot(snap => {
            setPosts(
                snap.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })
        return () => {
            unsub();
        }
    }, [name])

    return (
        <div className="adminQuotesPage">
            <div className="adminQuotePage__container">
                { name === "motivation" && (<AdminQuote name={name} title="Motivational Quote" posts={posts} />) }
                { name === "love" && (<AdminQuote name={name} title="Love Quote" posts={posts} />)}
                { name === "tour" && (<AdminQuote name={name} title="World Tour" posts={posts} />)}
                { name === "fact" && (<AdminGalleryPage posts={posts} />)}
                { name === "fashion" && (<AdminGalleryPage posts={posts} />)}
                { name === "word-of-the-day" && (<AdminWotdPage posts={posts} />)}
            </div>
        </div>
    )
}

export default AdminQuotesPage
