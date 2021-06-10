import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate';


function App() {

  const [state, setState] = useState ( {
    s:'', // search query
    results:[], 
    selected: {}
  } );
  const [offset,setOffset] = useState(1);
  const [postsPerPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  // api url
  const apiurl = 'http://www.omdbapi.com/?apikey=7f581b67'
  
  //http://www.omdbapi.com/?i=tt3896198&apikey=7f581b67'
  //search function + axios library to help getting the data
  const search  = (e) => {
    if (e.key === "Enter") {
      axios(apiurl+ "&s=" + state.s).then(({data})=> {
        let results = data.Search;
        //updating the list of results with the current result 
        // and storing the informatin 
        setState(prevState => {
          return {...prevState, results: results}
        })
     //   const slice = results.slice(offset - 1, offset - 1 + postsPerPage)
        setPageCount(Math.ceil(results.length/postsPerPage))
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

  const Click = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
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
     <ReactPaginate
     previousLabel = {"Previous"}
     nextLabel = {"Next"}
     breakLabel={". . ."}
     breakClassName={"break-me"}
     onPageChange={Click}
     containerClassName={"pagination"}
     subContainerClassName={"pages pagination"}
    activeClassName={"active"}
     />
      </main>
    </div>
  );
}

export default App

    