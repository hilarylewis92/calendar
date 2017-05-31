import React, { Component } from 'react';
import CalendarComponent from 'react-day-calendar';
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
