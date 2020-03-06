import React from 'react';
import { Result } from "./components/Result/Result";
import './App.css';

function App() {

  return (
    <div className="App">
      <header>
        <h1>Haystack</h1>
        <form id="search">
          <input id="q" type="text" name="q" />
          <input type="submit" value="Search" />
        </form>
      </header>
      <section id="filter">
        <ul>
          <li className="selected">All</li>
          <li>Documents</li>
          <li>Images</li>
          <li>Code</li>
        </ul>
      </section>
      <Result />
    </div>
  );
}

export default App;
