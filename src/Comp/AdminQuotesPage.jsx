import React, { useEffect, useState } from 'react'
import AdminQuote from './AdminQuote';
import "../css/AdminQuotePage.css";
import { db } from '../utils/firebase';
import { useParams } from 'react-router-dom';
import AdminGalleryPage from './AdminGalleryPage';
import { AddCircleOutline } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import AdminWotdPage from './AdminWotdPage';

const AdminQuotesPage = () => {
    const [posts, setPosts] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        db.collection(name).onSnapshot(snap => {
            setPosts(
                snap.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })
        return () => {
            
        }
    }, [name])

    return (
        <div className="adminQuotesPage">
            <div className="adminQuotePage__container">
                { name === "motivation" && (<AdminQuote title="Motivational Quote" posts={posts} />) }
                { name === "love" && (<AdminQuote title="Love Quote" posts={posts} />)}
                { name === "tour" && (<AdminQuote title="World Tour" posts={posts} />)}
                { name === "fact" && (<AdminGalleryPage posts={posts} />)}
                { name === "fashion" && (<AdminGalleryPage posts={posts} />)}
                { name === "word-of-the-day" && (<AdminWotdPage posts={posts} />)}
            </div>
        </div>
    )
}

export default AdminQuotesPage
