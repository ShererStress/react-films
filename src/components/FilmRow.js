import React, { Component } from 'react';

class FilmListing extends Component {
  render() {
    console.log();
    let yearData = (new Date(this.props.singleFilm.release_date)).getFullYear()
    return (
      <div className="film-row">
        <img src={"https://image.tmdb.org/t/p/w780/"+this.props.singleFilm.poster_path} alt="AAAA" />
        <div className="film-summary">
          <h1>TITLE {this.props.singleFilm.title} </h1>
          <p>YEAR: {yearData}</p>
        </div>

      </div>
    );
  }
}

export default FilmListing;
