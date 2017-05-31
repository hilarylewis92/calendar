import React, { Component } from 'react';
import AddEvent from './AddEvent'

class Calendar extends Component {

  render() {
    return (
      <div className="Calendar">
        <AddEvent />
      </div>
    );
  }
}

export default Calendar;
