import React, { Component } from 'react'
import CalendarComponent from 'react-day-calendar'

class CalendarList extends Component {

  render() {
    const { events } = this.props

    return (
      <div className="CalendarList">
        <CalendarComponent start={0} end={24} events={events}/>
      </div>
    )
  }
}

export default CalendarList
