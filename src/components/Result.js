import React from 'react'
/**
 * Component for one movie
 * @param {result} result represents one single film
 * @param {openPopup} openPopup takes in the movie's id 
 * @returns the title and poster for one movie
 */
function Result({result,openPopup}) {
    return (
        <div className="result" onClick={() => openPopup(result.imdbID)}>
            <img src ={result.Poster} />
            <figcaption>
                <h3 className="movieTitle">{result.Title}</h3>
            </figcaption>
        </div>
    )
}

export default Result