import React from 'react'

function Search({ handleInput }) {
    return(
        <section className="searchbox-wrap">
            <input 
            type="text" 
            placeholder="Search for your favorite movie here..." 
            className="searchbox" 
            //handles the input:
            onChange={handleInput} />
        </section>
    )
}
export default Search;
