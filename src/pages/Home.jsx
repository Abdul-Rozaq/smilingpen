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
  const [facts, setFacts] = useState([]);
  const [fashion, setFashion] = useState([]);

  useEffect(() => {
      const unsub = db.collection("fact").onSnapshot(snapshot => {
          setFacts(
              snapshot.docs.map((doc) => ({
                  id: doc.id,
                  data: doc.data(),
              }))
          )
      })
      return () => unsub();
  }, [])
  
  useEffect(() => {
      const unsub = db.collection("fashion").onSnapshot(snapshot => {
          setFashion(
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
          <MotivationalQuote />
          <ImageGrid title="Fact Wednesday" data={facts} />
          <LoveQuote />
          <Tour />
          <ImageGrid title="Fashion Xclusive" data={fashion} />
        </div>
    )
}

export default Home
