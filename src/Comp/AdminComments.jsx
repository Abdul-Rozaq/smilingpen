import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import "../css/AdminComments.css";
import { db } from '../utils/firebase';

const AdminComments = ({ id, name, setShowComment }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const unsub = db.collection(name).doc(id).collection("comments").onSnapshot(snap => {
            setComments(
                snap.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })
        return () => {
            unsub();
        }
    }, [id, name])

    console.log(comments);

    return (
        <div className="adminComments">
            <div className="adminComments__header">
                <ArrowBackIos onClick={() => setShowComment(false)} />
                <p>Comments</p>
                <ArrowForwardIos onClick={() => setShowComment(false)} />
            </div>

            <div className="adminComments__form">
                <div>
                    <input type="text"/>
                    <button type="submit">post</button>
                </div>
            </div>

            <div className="adminComments__wrapper">
                {
                    comments?.map(({id, data}) => (
                        <div className="adminComments__box" key={id}>
                            <p>
                                <span>{data?.name}</span>
                                {data?.comment}
                            </p>
                            <p>Reply</p>
                        </div>
                    ))
                }

                <div className="adminComments__box">
                    <p>
                        <span>Toyin tomato</span>
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                    <p>Reply</p>
                </div>

                <div className="adminComments__box">
                    <p>
                        <span>Toyin tomato</span>
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                    <p>Reply</p>
                </div>

            </div>
        </div>
    )
}

export default AdminComments
