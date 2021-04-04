import React, { useState } from 'react';

const WotdDefinition = () => {
    const [definitions, setDefinitions] = useState([
        "to dig or labor with or as if with a spade.",
        "to make a careful or detailed search for information.",
        "to examine a subject in detail."
    ]);

    const addDefinition = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h3>Definitions</h3>
            <ul className="newWoftd__def">
                {
                    definitions.map((def, i) => (
                        <li key={i}><p>{def}</p></li>
                    ))
                }
            </ul>
            <form className="newWoftd__form">
                <div>
                    <input name="example" id="example" ></input>
                    <button onClick={(e) => addDefinition(e)}>Add</button>
                </div>
            </form>
        </div>
    )
}

export default WotdDefinition
