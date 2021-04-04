import React, { useState } from 'react'

const WotdExample = () => {
    const [examples, setExamples] = useState([
        "Newspapers often delve into people's private lives.",
        "We should not delve too deeply into this painful matter.",
        "It's not always a good idea to delve too deeply into someone's past.",
        "To delve into interface design further, consider video on-demand.",
        "Again we must delve back in history to understand how we got to this position."
    ]);

    const addExample = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h3>Examples</h3>
            <ul className="newWotd__content">
                {
                    examples.map((ex, i) => (
                        <li key={i}><p>{ex}</p></li>
                    ))
                }
            </ul>
            <form className="newWoftd__form">
                <div>
                    <input name="example" id="example" ></input>
                    <button onClick={(e) => addExample(e)}>Add</button>
                </div>
            </form>
        </div>
)
}

export default WotdExample
