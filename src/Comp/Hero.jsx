import React from 'react';
import { ArrowForwardIos } from '@material-ui/icons';
import smilingpen from "../img/smilingpen.png";
import "../css/Hero.css";

const Hero = () => {
    return (
        <div className="hero">
          <div className="hero__textbox">
            <h1>Smiling Pen</h1>
            <p>SmilingPen is a seasoned writer, talented poet, public and motivational speaker.</p>
            <p className="hero__txt">He is also a career and relationship counselor.</p>
            <p className="hero__txt">SmilingPen is a great programs and events anchor, he is an astonished content creator.</p>
            <p className="hero__txt">Thus, he is a great listener.</p>
            <button className="hero__btn">READ BIO <ArrowForwardIos className="hero__icon" /> </button>
          </div>
          <div className="hero__imgbox">
            <img src={smilingpen} alt="Smiling pen" className="hero__img"/>
          </div> 
        </div>
    )
}

export default Hero
