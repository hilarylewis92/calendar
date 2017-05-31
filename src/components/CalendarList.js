import React, { Component } from 'react';
import CalendarComponent from 'react-day-calendar';

class CalendarList extends Component {
  render() {
    const { events } = this.props

    return (
      <div className="CalendarList">
        <CalendarComponent start={0} end={24} events={events}/>
      </div>
    );
  }
}

export default CalendarList;




<CalendarComponent start={0} end={24} events={[
  {start: 30, end: 120, title: 'Event 1', location: 'Barcelona'},
  {start: 150, end: 250, title: 'Event 2', location: 'Munich'},
  {start: 560, end: 620, title: 'Event 3', location: 'Berlin'},
  {start: 900, end: 700, title: 'Event 4', location: 'London'}
]}/>
