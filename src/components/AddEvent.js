import React, { Component } from 'react';
import CalendarList from './CalendarList'

class AddEvent extends Component {
  constructor() {
    super()
    this.state = {
      event: '',
      start: 0,
      end: 0,
      location: '',
      events: []
    }
  }

  saveEvent(e) {
    const { event, start, end, location, events } = this.state
    let newEvent = events ? events: []
    newEvent.push({ event, start, end, location })
    this.setState({
      events: newEvent
    })
  }

  render() {
    const { events } = this.state

    return (
      <div className="AddEvent">
        Event: <input
          type='text'
          onChange={(e) => this.setState({event: e.target.value})}
          />
        Start: <input
          type='time'
          onChange={(e) => this.setState({start: parseInt(e.target.value)})}
        />
        End: <input
          type='time'
          onChange={(e) => this.setState({end: parseInt(e.target.value)})}
        />
        Location: <input
          type='text'
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
