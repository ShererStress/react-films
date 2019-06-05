import React, { Component } from 'react';
import './App.css';
import FilmListing from './components/FilmListing.js';
import FilmDetails from './components/FilmDetails.js';
import filmData from "./TMDB.js";

class App extends Component {

  constructor(props) {
    super(props);

    this.handleFaveToggle = this.handleFaveToggle.bind(this);

    this.state = {
      filmData: filmData.films,
      faves: [],
      current: {}
    };
  }

  handleFaveToggle(film) {
    console.log(film);

    let favoritesCopy = this.state.faves.slice();
    let filmIndex = favoritesCopy.indexOf(film);
    if(filmIndex === -1) {
      //Add to array
      favoritesCopy.push(film);
    } else {
      favoritesCopy.splice(filmIndex,1);
    }
    this.setState({faves: favoritesCopy});
  };

  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing filmData={this.state.filmData} faves={this.state.faves} handleFaveToggle={this.handleFaveToggle}/>
          <FilmDetails filmData={this.state.filmData} current={this.state.current}/>
        </div>
      </div>
    );
  }
}

export default App;
