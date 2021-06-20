import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'
import axios from 'axios'
import React, 
 {useState} from 'react'
import ReactPagination from 'react-paginate';


function App() {

  const [state, setState] = useState ( {
    s:'', // search query
    results:[], 
    selected: {},
    totalResults : 0, // # of movies requeted from api

  } );

  // api url
  const apiurl = 'https://www.omdbapi.com/?apikey=7f581b67'
  
  //http://www.omdbapi.com/?i=tt3896198&apikey=7f581b67'
  //search function + axios library to help getting the data
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
  const handleInput = (e) => {
    let s = e.target.value;

    //set to previous state to not over run the other state
    setState(prevState => {
      return {...prevState, s:s} // getting previous state to the current s
    });
    
    console.log(state.s);
  }
  
// method for when pagination links are clicked
  const handlePageChange = (pageNumber) => {
    const pageNumber1 = pageNumber + 1
    axios(apiurl+ "&s=" + state.s+"&page="+{pageNumber1}).then(({data})=> {
      let results = data.Search;
      //updating the list of results with the current result 
      // and storing the informatin
      setState(prevState => {
        return {...prevState, results: results, currentPage:pageNumber1}
      })
      console.log(data)
      console.log(pageNumber)
  })

}

  //handle popup
  const openPopup= id => {
    axios(apiurl + "&i=" + id).then(({data}) => {
      let result = data;
      console.log(result);

      setState(prevState => {
        return {...prevState, selected: result}
      });
    });
  }

  const closedPopup = () => {
    setState(prevState => {
      return {...prevState, selected: {}}
    });
  }


  /*
  main has three components:
  Search Bar component, Result Component, Popup Component (details) 
  */
 
  return (
    <div className="App">
      <header>
       <h1> Let's find you're favorite Movie !</h1> 
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
         />
      </main>
    </div>
  );

}

export default App

    