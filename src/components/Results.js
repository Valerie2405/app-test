import React from 'react'
import Result from './Result'

function Results({results}) {
    if(!results) {
        return <p>Sorry please try a different Movie Title :) </p>
    } 
    
    return (
        <section className="results">
            {results && results.map(result =>(
                <Result key={result.imdbID} result={result} />
            ))}
        </section>
    )
}

export default Results