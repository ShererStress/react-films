import React, { Component } from 'react';

class FilmListing extends Component {
  render() {
    return (
      <div className="film-details" >
        <h1 className="section-title">DETAILS</h1>
        <h1> {this.props.current.title} </h1>
        <h3> {this.props.current.overview} </h3>
      </div>
    );
  }
}

export default FilmListing;
