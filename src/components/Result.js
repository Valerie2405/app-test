import React from 'react'

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