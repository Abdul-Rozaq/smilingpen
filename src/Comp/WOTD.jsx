import React, { useState } from 'react';
import "../css/WOTD.css";
import delve from "../img/delve.jpeg";

const WOTD = () => {
    const [def, setDef] = useState(false);
    const [examp, setExamp] = useState(false);
    const [syn, setSyn] = useState(true);

    return (
        <div className="wotd container">
            <h3 className="container__title">Word Of The Day</h3>
            <hr />
            <div className="wotd__container">
               <div className="wotd">
                   <div className="wotd__img">
                       <img src={delve} alt="wotd"/>
                   </div>
                   <div className="wotd__info">
                       <p className={`${ def && "wotd__active"}`}
                            onClick={() => {
                                setDef(true); setExamp(false); setSyn(false)}
                            }
                       >Definition</p>
                       <p className={`${ examp && "wotd__active"}`}
                            onClick={() => {
                                setDef(false); setExamp(true); setSyn(false)}
                            }
                       >Examples</p>
                       <p className={`${ syn && "wotd__active"}`}
                            onClick={() => {
                                setDef(false); setExamp(false); setSyn(true)}
                            }
                       >Synonyms</p>
                   </div>
                   {
                       def && (
                            <ul className="wotd__content">
                                <li><p>to dig or labor with or as if with a spade.</p></li>
                                <li><p>to make a careful or detailed search for information.</p></li>
                                <li><p>to examine a subject in detail.</p></li>
                            </ul>
                       )
                   }
                   {
                       examp && (
                            <ul className="wotd__content">
                                <li><p>Newspapers often delve into people's private lives.</p></li>
                                <li><p>We should not delve too deeply into this painful matter.</p></li>
                                <li><p>It's not always a good idea to delve too deeply into someone's past.</p></li>
                                <li><p>To delve into interface design further, consider video on-demand.</p></li>
                                <li><p>Again we must delve back in history to understand how we got to this position.</p></li>
                            </ul>
                       )
                   }
                   {
                       syn && (
                            <ul className="wotd__content wotd__syn">
                                <li><p>dig</p></li>
                                <li><p>scour</p></li>
                                <li><p>ransack</p></li>
                                <li><p>burrow</p></li>
                                <li><p>through</p></li>
                                <li><p>grub</p></li>
                                <li><p>scoop</p></li>
                                <li><p>spade</p></li>
                                <li><p>dredge</p></li>
                                <li><p>dig in</p></li>
                            </ul>
                       )
                   }
               </div>
            </div>
        </div>
    )
}

export default WOTD
