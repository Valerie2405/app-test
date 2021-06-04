import Search from './components/Search'
import React, {useState} from 'react';

function App() {

  const [state, setState] = useState ( {
    s:'', // search query
    results:[], 
    selected: {}
  } );

  // api url
  const apiurl = '`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchParam}&r=json`'


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
        <Search handleInput={handleInput} />
      </main>
    </div>
  );
}

export default App
