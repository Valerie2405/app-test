import React from 'react'

function Result({result,openPopup}) {
    return (
        <div className="result" onClick={() => openPopup(result.imdbID)}>
            <img src ={result.Poster} />
            <h3>{result.Title}</h3>
            <h3>{result.Released}</h3>
            <h3>{result.Runtime}</h3>
            <h3>{result.Genre}</h3>
            <h3>{result.Director}</h3>
        </div>
    )
}

export default Result