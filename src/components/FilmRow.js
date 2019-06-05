import React, { Component } from 'react';
import FilmPoster from './FilmPoster.js';
import Fave from './Fave.js';

class FilmRow extends Component {
  render() {
    let yearData = (new Date(this.props.singleFilm.release_date)).getFullYear();
    return (
      <div className="film-row">
        <FilmPoster posterPath={this.props.singleFilm.poster_path} />
        <div className="film-summary">
          <h1>TITLE: {this.props.singleFilm.title} </h1>
          <p>YEAR: {yearData}</p>
        </div>
        <Fave />
      </div>
    );
  }
}

export default FilmRow;
