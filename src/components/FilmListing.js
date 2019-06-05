import React, { Component } from 'react';
import FilmRow from './FilmRow.js';

class FilmListing extends Component {

  constructor(props) {
    super(props);

    this.handleFilterClick = this.handleFilterClick.bind(this);

  }

  handleFilterClick(filter) {
    console.log(`setting message to ${filter}`);
  }

  render() {

    let allFilms = this.props.filmData.map(function(film, index){
      return (
        <FilmRow singleFilm={film} key={film.id}/>
      )
    });

    return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div className="film-list-filter">
          ALL
          <span className="section-count">{this.props.filmData.length}</span>
        </div>
        <div className="film-list-filter">
          FAVES
          <span className="section-count">0</span>
        </div>
      </div>
      <h3 onClick={this.handleFilterClick.bind(this, "AAA")}> FIUGFGISF </h3>

      {allFilms}
    </div>
    );
  }
}

export default FilmListing;
