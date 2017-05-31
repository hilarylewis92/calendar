import React, { Component } from 'react';
import CalendarComponent from 'react-day-calendar';

class CalendarList extends Component {
  renderEvents() {

  }

  render() {
    const { events } = this.props

    return (
      <div className="CalendarList">
        <CalendarComponent start={9} end={21} events={[
            {start: 30, end: 150, title: 'Event 1', location: 'Barcelona'},
            {start: 540, end: 600, title: 'Event 2', location: 'Munich'},
            {start: 560, end: 620, title: 'Event 3', location: 'Berlin'},
            {start: 610, end: 670, title: 'Event 4', location: 'London'}
        ]}/>
      </div>
    );
  }
}

export default CalendarList;