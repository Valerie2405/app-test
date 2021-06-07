import React from 'react'

function Result({result}) {
    return (
        <div className="result">
            <img src ={result.Poster} />
            <h3>{result.Title}</h3>
            <h3>{result.Released}</h3>
            <h3>{result.Runtime}</h3>
            <h3>{result.Genre}</h3>
            <h3>{result.Directo}</h3>
        </div>
    )
}

export default Result