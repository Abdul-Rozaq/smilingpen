import React from 'react';
import Header from '../Comp/Header';
import MotivationalQuote from '../Comp/MotivationalQuote';
import LoveQuote from '../Comp/LoveQuote';
import ImageGrid from '../Comp/ImageGrid';
import Tour from '../Comp/Tour';
import { db } from '../utils/firebase';
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
      const unsub = db.collection("love").onSnapshot(snapshot => {
          setDocs(
              snapshot.docs.map((doc) => ({
                  id: doc.id,
                  data: doc.data(),
              }))
          )
      })
      return () => unsub();
  }, [])

    return (
        <div>
          <Header />
          <MotivationalQuote data={docs} />
          <ImageGrid title="Fact Wednesday" />
          <LoveQuote  data={docs} />
          <Tour />
          <ImageGrid title="Fashion Xclusive" />
        </div>
    )
}

export default Home
