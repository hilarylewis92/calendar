import React, { Component } from 'react';
import CalendarList from './CalendarList'

class AddEvent extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      start: 0,
      end: 0,
      location: '',
      events: []
    }
  }

  saveEvent(e) {
    const { title, start, end, location, events } = this.state
    let newEvent = events ? events: []
    newEvent.push({ title, start, end, location })
    this.setState({
      events: newEvent
    })
    this.clearInput()
  }

  clearInput() {
    this.setState({
      title: '',
      start: '',
      end: '',
      location: ''
    })
  }

  convertTime(e) {
    const { value } = e.target
    let hoursMinutes = value.split(/[.:]/)
    let hours = parseInt(hoursMinutes[0], 10);
    let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    debugger
    return hours + minutes
  }

  render() {
    const { events, title, start, end, location } = this.state

    return (
      <div className="AddEvent">
        Event: <input
          type='text'
          value={title}
          onChange={(e) => this.setState({title: e.target.value})}
          />
        Start: <input
          type='time'
          onChange={(e) => this.convertTime(e)}
        />
        End: <input
          type='time'
          onChange={(e) => this.setState({end: parseInt(e.target.value)})}
        />
        Location: <input
          type='text'
          value={location}
          onChange={(e) => this.setState({location: e.target.value})}
        />
        <button
          onClick={(e) => this.saveEvent(e)}>
          Save Event
        </button>

        <CalendarList
          events={events}
        />

      </div>
    );
  }
}

export default AddEvent;
