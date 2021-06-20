import React from 'react'
/**
 * Component created to handle the page when a movie is clicked
 * @param {selected} selected what was selected
 * @param {closedPopup} closedpopup represents the closedpopup const in app
 * @returns information for movie selected
 */
function Popup({selected,closedPopup}){
    return(
        <section className="popup">
            <div className="information">
                <p className="title"> <h2>{selected.Title}</h2> </p>
                <p className="year"> <h5>Year: {selected.Year}</h5> </p>
                <p className="director"> <h5>Director: {selected.Director}</h5> </p>                
                <p className="releasedate"> <h5>Release Date: {selected.Released}</h5></p>
                <p className="genre"> <h5>Genre: {selected.Genre}</h5></p>

                <div className="poster">
                    <img src={selected.Poster} />
                </div>
                <button className="exit" onClick={closedPopup}>Exit</button>
            </div>
        </section>
    )
}

export default Popup