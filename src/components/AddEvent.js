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
      start: 0,
      end: 0,
      location: ''
    })
  }

  render() {
    const { events } = this.state

    return (
      <div className="AddEvent">
        Event: <input
          type='text'
          value={this.state.title}
          onChange={(e) => this.setState({title: e.target.value})}
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
          value={this.state.location}
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
