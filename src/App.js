import Search from './components/Search'
import React from 'react';

function App() {
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
        <Search />
      </main>
    </div>
  );
}

export default App
