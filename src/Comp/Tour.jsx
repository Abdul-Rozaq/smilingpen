import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/Tour.css";
import { db } from '../utils/firebase';

const Tour = () => {
    const [tours, setTours] = useState([]);

  useEffect(() => {
      const unsub = db.collection("tour").onSnapshot(snapshot => {
          setTours(
              snapshot.docs.map((doc) => ({
                  id: doc.id,
                  data: doc.data(),
              }))
          )
      })
      return () => unsub();
  }, [])

  const main = tours[0];
  const older = [tours[1], tours[2]]; 
  
    
    return (
        <div className="tour container">
            <div className="tour__header">
                <h3 className="container__title">World tour</h3>
                <hr />
            </div>
            <div className="tour__wrapper">
                <div className="tour__first">
                    {
                        tours && (
                            <div className="tour__last">
                                <div className="tour__img">
                                    <img src={main?.data?.image} alt="tour"/>
                                </div>
                                <h4>{main?.data?.country}</h4>
                                <h6>Capital: <span>{main?.data?.capital}</span></h6>
                                <p>{main?.data?.article[0]}</p>
                                <Link to={`/tour/${main?.id}`}>
                                    <p className="tour__cta">Continue reading...</p>
                                </Link>
                            </div>
                        )
                    }
                </div>
                <div className="tour__second">
                    <p className="tour__subheader">Older world tour</p>

                    {
                        tours && (
                            <div className="tour__others">
                                {
                                    older?.map((tour, i) => (
                                        <div className="tour__old" key={i}>
                                            <div className="tour__oldImg">
                                                <img src={tour?.data?.image} alt="tour"/>
                                            </div>
                                            <h5>{tour?.data?.country}</h5>
                                            <h6>Capital: <span>{tour?.data?.capital}</span></h6>
                                            <Link className="links" to={`/tour/${tour?.id}`}>
                                                <p className="tour__read">Read now</p>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="container__btn">
                <Link to="/tour" >
                    <button className="container__btn">View more</button>
                </Link>
            </div>
        </div>
    )
}

export default Tour
