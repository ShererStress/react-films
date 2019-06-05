import React, { Component } from 'react';
import FilmRow from './FilmRow.js';

class FilmListing extends Component {
  render() {
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {this.props.filmData.map(function(film, index){
          return (
            <FilmRow singleFilm={film} key={film.id}/>
          )
        })}
      </div>
    );
  }
}

export default FilmListing;
