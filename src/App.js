import React, { Component } from 'react';
import './App.css';
import FilmListing from './components/FilmListing.js';
import FilmDetails from './components/FilmDetails.js';
import filmData from "./TMDB.js";

class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      filmData: filmData.films,
    };

  }

  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing filmData={this.state.filmData}/>
          <FilmDetails filmData={this.state.filmData}/>
        </div>
      </div>
    );
  }
}

export default App;
