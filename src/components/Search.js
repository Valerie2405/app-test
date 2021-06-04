import React from 'react'

function Search({ handleInput, search }) {
    return(
        <section className="searchbox-wrap">
            <input 
            type="text" 
            placeholder="Search for your favorite movie here..." 
            className="searchbox" 
            //handles the input:
            onChange={handleInput}
            //when key is pressed function is started
            onKeyPress={search}
            />
            
        </section>
    )
}
export default Search;
