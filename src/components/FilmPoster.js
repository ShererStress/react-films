import React, { Component } from 'react';

class Filmposter extends Component {
  render() {
    return (
      <div className="film-poster">
        <img src={"https://image.tmdb.org/t/p/w780/"+this.props.posterPath} alt="AAAA" />
      </div>
    );
  }
}

export default Filmposter;
