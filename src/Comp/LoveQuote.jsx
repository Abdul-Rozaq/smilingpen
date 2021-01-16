import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from "../utils/firebase";
import Quote from './Quote'

const LoveQuote = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
      const unsub = db.collection("love").onSnapshot(snapshot => {
          setData(
              snapshot.docs.map((doc) => ({
                  id: doc.id,
                  data: doc.data(),
              }))
          )
      })
      return () => unsub();
  }, [])

    return (
        <div className="container">
            <h3 className="container__title">Love Quotes</h3>
            <hr />
            <div className="container__content">
                <Quote data={data} category="love"  />
            </div>
            <div className="container__btn">
                <Link to="/love" >
                    <button className="container__btn">View more</button>
                </Link>
            </div>
        </div>
    )
}

export default LoveQuote
