import React from 'react'
/**
 * Search function 
 * @param {handleInput} handleInput handleinput method
 * @param {search} search search method
 * @returns film that was searched by user
 */
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
