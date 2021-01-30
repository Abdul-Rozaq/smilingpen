import React from 'react';
import Header from '../Comp/Header';
import MotivationalQuote from '../Comp/MotivationalQuote';
import LoveQuote from '../Comp/LoveQuote';
import ImageGrid from '../Comp/ImageGrid';
import Tour from '../Comp/Tour';
import { db } from '../utils/firebase';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Comp/Footer';
import WOTD from '../Comp/WOTD';

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
          <WOTD />
          <MotivationalQuote />
          <div>
            <ImageGrid title="Fact Wednesday" data={facts} />
            <div  className="container__btn">
                <Link to="/gallery/fact" >
                    <button>View more</button>
                </Link>
            </div>
          </div>
          <LoveQuote />
          <Tour />
          <div>
            <ImageGrid title="Fashion Xclusive" data={fashion} />
            <div  className="container__btn">
                <Link to="/gallery/fashion" >
                    <button>View more</button>
                </Link>
            </div>
          </div>
          <Footer />
        </div>
    )
}

export default Home
