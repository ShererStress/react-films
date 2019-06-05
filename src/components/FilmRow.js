import React, { Component } from 'react';
import FilmPoster from './FilmPoster.js';
import Fave from './Fave.js';

class FilmRow extends Component {

  constructor(props) {
    super(props);

    // this.handleDetailsClick = this.handleDetailsClick.bind(this);

  }

  handleDetailsClick(event, film) {
    console.log(`Fetching details for ${film}`);
  }


  render() {
    let yearData = (new Date(this.props.singleFilm.release_date)).getFullYear();
    return (
      <div onClick={ (e) => {
        this.handleDetailsClick(e, this.props.singleFilm.id)
      }}
         className="film-row">
        <FilmPoster posterPath={this.props.singleFilm.poster_path} />
        <div className="film-summary">
          <h1>TITLE: {this.props.singleFilm.title} </h1>
          <p>YEAR: {yearData}</p>
        </div>
        <Fave onFaveToggle={this.props.onFaveToggle} isFave={this.props.isFave}/>
      </div>
    );
  }
}

export default FilmRow;
