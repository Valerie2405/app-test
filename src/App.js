import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'
import axios from 'axios'
import React, 
 {useState} from 'react'
import ReactPagination from 'react-paginate';

/**
 * This is the function App where the request from the API is done
 * as well as where two different events are handled the input and page change
 * @returns the three main components: Search Bar component, Result Component,
 *          and Popup Component 
 */
function App() {
  const [state, setState] = useState ( {
    s:'', // search query
    results:[], 
    selected: {},
    totalResults : 0, // # of movies requeted from api
  } );


  // api url
  const apiurl = 'https://www.omdbapi.com/?apikey=7f581b67'

  /**
   * Search const using axios library to help get the movie data from the OIMBD api
   * @param {Event} e when user preses the enter key
   */
  const search  = (e) => {
    if (e.key === "Enter") {
      axios(apiurl+ "&s=" + state.s).then(({data})=> {
        let results = data.Search;
        //updating the list of results with the current result 
        // and storing the informatin 
        setState(prevState => {
          return {...prevState, results: results,totalResults:data.total_results}
        })
        console.log(data)
      });
    }
  }


//handle event: preserve what user types in search box
/**
 * const handles the users input by setting to previous state
 * to not over run the other state
 * @param {Event} e 
 */
  const handleInput = (e) => {
    let s = e.target.value;
    setState(prevState => {
      return {...prevState, s:s} 
    });
    
    console.log(state.s);
  }
  
  /**
   * updates the page when pagination is clicked
   * @param {pageNumber} pageNumber represents the page number one has clicked
   */
  const handlePageChange = (pageNumber) => {
    
    axios(apiurl+ "&s=" + state.s+"&page="+{pageNumber}).then(({data})=> {
      let results = data.Search;
      //updating the list of results with the current result 
      // and storing the informatin
      setState(prevState => {
        return {...prevState, results: results, currentPage:pageNumber}
      })
      console.log(data)
      console.log(pageNumber)
  })

}
 
  /**
   * handles when a movie is clicked
   * @param {id} id represents the imbd id
   */
  const openPopup= id => {
    axios(apiurl + "&i=" + id).then(({data}) => {
      let result = data;
      console.log(result);

      setState(prevState => {
        return {...prevState, selected: result}
      });
    });
  }
  /**
   * handles when exit button is clicked
   */
  const closedPopup = () => {
    setState(prevState => {
      return {...prevState, selected: {}}
    });
  }

 /**
  * returns the three main components
  *   search bar component
  *   result component
  *   popupcomponent
  * also handles the pagination
  */
  return (
    <div className="App">
      <header>
       <h1> Let's find your favorite Movie !</h1> 
      </header>
      <main> 
        <Search handleInput={handleInput} search = {search} />
        <Results results={state.results} openPopup={openPopup}/>

     {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closedPopup={closedPopup} /> : false}
     
     <ReactPagination
         previousLabel={"previous"}
         nextLabel={"next"}
         breakLabel={"..."}
         breakClassName={"break-me"}
         onPageChange={handlePageChange}
         activeClassName={"active"}
         containerClassName={"pagination"}
         />
      </main>
    </div>
  );

}

export default App

    