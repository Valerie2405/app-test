import Search from './components/Search'
import Results from './components/Results'
import axios from 'axios'
import React, {useState} from 'react'

function App() {

  const [state, setState] = useState ( {
    s:'', // search query
    results:[], 
    selected: {}
  } );

  // api url
  const apiurl = 'http://www.omdbapi.com/?i=tt3896198&apikey=7f581b67'

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
        <Results results={state.results}/>
      </main>
    </div>
  );
}

export default App
