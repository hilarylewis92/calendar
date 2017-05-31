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
    const { value, name } = e.target
    let hoursMinutes = value.split(/[.:]/)
    let hours = parseInt(hoursMinutes[0], 10);
    let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    let time = hours * 60 + minutes

    this.setState({
      [name]: time
    })
  }

  updateState(e) {
    const { value, name } = e.target

    this.setState({
      [name]: value
    })
  }

  render() {
    const { events, title, start, end, location } = this.state

    return (
      <div className="AddEvent">
        Event: <input
          type='text'
          name='title'
          value={title}
          onChange={(e) => this.updateState(e)}
          />
        Start: <input
          type='time'
          name='start'
          value={start}
          onChange={(e) => this.convertTime(e)}
        />
        End: <input
          type='time'
          name='end'
          onChange={(e) => this.convertTime(e)}
        />
        Location: <input
          type='text'
          name='location'
          value={location}
          onChange={(e) => this.updateState(e)}
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
