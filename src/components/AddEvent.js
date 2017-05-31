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
          value={start}
          onChange={(e) => this.setState({start: e.target.value})}
        />
        End: <input
          type='time'
          value={end}
          onChange={(e) => this.setState({end: e.target.value})}
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
