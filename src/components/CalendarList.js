import React, { Component } from 'react';
import CalendarComponent from 'react-day-calendar';

class CalendarList extends Component {
  renderEvents() {

  }

  render() {
    const { events } = this.props

    return (
      <div className="CalendarList">
        <CalendarComponent start={9} end={21} events={events}/>
      </div>
    );
  }
}

export default CalendarList;
