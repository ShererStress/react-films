import React, { Component } from 'react';
import FilmRow from './FilmRow.js';

class FilmListing extends Component {

  constructor(props) {
    super(props);

    // this.handleFilterClick = this.handleFilterClick.bind(this);

    this.state = {
      filter: "all",
    }

  }

  handleFilterClick(event, filter) {
    this.setState({filter: filter})
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
        <div className={"film-list-filter "+(this.state.filter === "all"? "is-active" : "")} onClick={ (e) => {
          this.handleFilterClick(e, "all")
        }}>
          ALL
          <span className="section-count">{this.props.filmData.length}</span>
        </div>
        <div className={"film-list-filter "+(this.state.filter === "faves"? "is-active" : "")}  onClick={ (e) => {
          this.handleFilterClick(e, "faves")
        }}>
          FAVES
          <span className="section-count">0</span>
        </div>
      </div>
      {allFilms}
    </div>
    );
  }
}

export default FilmListing;
