import React from 'react'
import Result from './Result'

function Results({results,openPopup}) {
    if(!results) {
        return <p>Sorry please try a different Movie Title :) </p>
    } 
    
    return (
        <section className="results">
            {results && results.map(result =>(
                // each child so result should have their own unique key
                // using the imbID as their key 
                <Result key={result.imdbID} result={result} openPopup={openPopup} />
            ))}
        </section>
    )
}

export default Results