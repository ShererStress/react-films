import React, { Component } from 'react';

class Fave extends Component {

  constructor(props) {
    super(props);

    // this.handleClick = this.handleClick.bind(this);

    this.state = {
      // isFave: false,
    }

  }

  handleClick(thisEvent) {
    thisEvent.stopPropagation();

    this.props.onFaveToggle();

  }

  render() {

    let classAssignment;
    let iconData;
    if(this.props.isFave) {
      classAssignment = "film-row-fave remove_from_queue";
      iconData = "remove_from_queue";
    } else {
      classAssignment = "film-row-fave add_to_queue";
      iconData = "add_to_queue";
    }

    return (
      <div onClick={(e) => {
        this.handleClick(e)
      }} className={classAssignment}>
        <p className="material-icons">{iconData}</p>
      </div>
    )
  }
}

export default Fave;
