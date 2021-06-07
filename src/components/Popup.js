import React from 'react'

function Popup({selected,closedPopup}){
    return(
        <section className="popup">
            <div className="information">
                <h2>{selected.Title}
                <span>{selected.Year}</span>
                <span>{selected.Director}</span>
                </h2>
                <p className="release date">Release Date:{selected.Released}</p>
                <div className="poster">
                    <img src={selected.Poster} />
                    <p>{selected.Genre}</p>
                </div>
                <button className="exit" onClick={closedPopup}>Close</button>
            </div>
        </section>
    )
}

export default Popup