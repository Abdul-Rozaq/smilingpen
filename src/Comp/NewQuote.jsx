import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { db } from '../utils/firebase';
import UploadForm from "../Comp/UploadImage/UploadForm";
import imeg from "../img/anchor.jpg";
import AdminHeader from './AdminHeader';
import NewQuoteArticle from './common/NewQuoteArticle';
import NewQuoteTitle from './common/NewQuoteTitle';
import "../css/NewQuote.css";


const NewQuote = () => {
    const [quote, setQuote] = useState(null);
    const {name, id} = useParams();
    const [title, setTitle] = useState("");
    const [curTitle, setCurTitle] = useState("");
    const [image, setImage] = useState("");
    const [curArticle, setCurArticle] = useState("");
    const [articles, setArticles] = useState([
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit voluptatem.", "obcaecati odit eum iste optio officia architecto!",
        "Cum eligendi itaque optio voluptatem autem"
    ]);

    // console.log(id);
    // console.log(quote);

    useEffect(() => {
        let unsub = null;
        if(id) {
            unsub = db.collection(name).doc(id).onSnapshot(snap => {
                setQuote({
                    id: snap.id,
                    data: snap.data()
                })
            })
        }
        return () => {
           unsub() 
        }
    }, [name, id])

    const handleSetTitle = (e) => {
        e.preventDefault();
        setTitle(curTitle);
        setCurTitle("");
    }

    const handleDelete = (e, index) => {
        let newArt = [...articles]
        newArt.splice(index, 1);
        setArticles(newArt);
    }

    const handleArticle = (e) => {
        e.preventDefault();
        let newArt = [...articles];
        newArt.push(curArticle);
        setArticles(newArt);
        setCurArticle("");
    }

    const handleSave = () => {
        if (curTitle && image) {
            console.log(curTitle);
            console.log(image);
        } else {
            console.log("missing data");
        }
    }

    return ( 
        <>
            <AdminHeader />
            <div className="newQuote__cta">
                { !quote && (<Button variant="outlined" onClick={handleSave}>Save</Button>)}
                <Button variant="outlined">Publish</Button>
            </div>            
            <div className="newQuote container">

                <div className="newQuote__content">
                    
                    <div className="newQuote__img">
                        <p>Add image</p>
                        <UploadForm setImage={setImage} />
                        <div>
                        <img src={quote ? quote.data.image : image} alt="hi"/>
                        </div>
                    </div>

                    <NewQuoteTitle 
                        title={quote ? quote.data.title : title} 
                        handleSetTitle={handleSetTitle} 
                        setCurTitle={setCurTitle} 
                        curTitle={curTitle} 
                    />

                    {
                        quote && (
                            <NewQuoteArticle
                                quoteId={quote?.id}
                                name={name}
                                articles={articles}
                                handleDelete={handleDelete}
                                handleArticle={handleArticle}
                                setCurArticle={setCurArticle}
                                curArticle={curArticle}
                            />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default NewQuote
