import { Delete } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { db } from '../../utils/firebase';

const NewQuoteArticle = ({ 
    // articles, 
    handleDelete, 
    handleArticle, 
    setCurArticle, 
    curArticle,
    quoteId, name
}) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const unsub = db.collection(name).doc(quoteId).collection("article").onSnapshot(snap => {
            setArticles(
                snap.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data
                }))
            )
        })
        return () => {
            unsub();
        }
    }, [quoteId, name])

    // console.log(articles);
    // console.log(name, quoteId);

    return (
        <div className="newQuote__article">
            {
                articles.map((article, index) => (
                    <div className="newQuote__art" key={index}>
                        <p>{article}</p>
                        <Delete className="newQuote__edit" onClick={(e) => handleDelete(e, index)} />
                    </div>
                ))
            }

            <form onSubmit={(e) => handleArticle(e)}>
                <textarea name="article" id="article" rows="10" onChange={(e) => setCurArticle(e.target.value)}
                value={curArticle}></textarea>
                <div>
                    <button>Add paragraph</button>
                </div>
            </form>
        </div>
    )
}

export default NewQuoteArticle
