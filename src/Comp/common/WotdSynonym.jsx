import React, { useState } from 'react'

const WotdSynonym = () => {
    const [synonyms, setSynonyms] = useState([
        "dig", "scour", "ransack", "burrow", "through", "grub", "scoop",
        "spade", "dredge", "dig in"
    ]);

    const addSynonym = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h3>Synonyms</h3>
            <ul className="newWotd__content wotd__syn">
                {
                    synonyms.map((syn, i) => (
                        <li key={i}><p>{syn}</p></li>
                    ))
                }
            </ul>
            <form className="newWoftd__form">
                <div>
                    <input name="example" id="example" ></input>
                    <button onClick={(e) => addSynonym(e)}>Add</button>
                </div>
            </form>
        </div>
    )
}

export default WotdSynonym
