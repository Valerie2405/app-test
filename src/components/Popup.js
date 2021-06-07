import React from 'react'

function Popup({selected,closedPopup}){
    return(
        <section className="popup">
            <div className="information">
                <h2>{selected.Title} </h2>
                <p className="year"> <h3>Year: {selected.Year}</h3> </p>
                <p className="director"> <h5>Director: {selected.Director}</h5> </p>                
                <p className="release date"> <h5>Release Date: {selected.Released}</h5></p>
                <p className="genre"> <h5>Genre: {selected.Genre}</h5></p>

                <div className="poster">
                    <img src={selected.Poster} />
                </div>
                <button className="exit" onClick={closedPopup}>Close</button>
            </div>
        </section>
    )
}

export default Popup