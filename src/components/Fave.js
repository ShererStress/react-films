import React, { Component } from 'react';

class Fave extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(thisEvent) {
    console.log("CLICK INBOUND");
    thisEvent.stopPropagation();
  }

  render() {
    return (
      <div onClick={(e) => {
        this.handleClick(e)
      }} className="film-row-fave add_to_queue">
        <p className="material-icons">add_to_queue</p>
      </div>
    )
  }
}

export default Fave;
