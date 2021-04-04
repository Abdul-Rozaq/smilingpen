import React from 'react'

const NewQuoteTitle = ({ title, handleSetTitle, setCurTitle, curTitle }) => {
    return (
        <div className="newQuote__title">
            <h3>{title}</h3>
            <form onSubmit={handleSetTitle}>
                <div className="newQuote__input">
                    <input type="text" name="title" onChange={(e) => setCurTitle(e.target.value)} value={curTitle} placeholder="Title" />
                    <button>Set title</button>
                </div>
            </form>
        </div>
    )
}

export default NewQuoteTitle
