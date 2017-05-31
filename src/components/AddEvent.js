import React, { Component } from 'react';

class AddEvent extends Component {
  constructor() {
    super()
    this.state = {
      event: '',
      start: '',
      end: '',
      location: '',
      events: []
    }
  }

  saveEvent(e) {
    const { event, start, end, location, events } = this.state
    const newEvent = { event, start, end, location }
    debugger
    events.push(newEvent)
  }

  render() {
    return (
      <div className="AddEvent">
        Event: <input
          type='text'
          onChange={(e) => this.setState({event: e.target.value})}
          />
        Start: <input
          type='text'
          onChange={(e) => this.setState({start: e.target.value})}
        />
        End: <input
          type='text'
          onChange={(e) => this.setState({end: e.target.value})}
        />
        Location: <input
          type='text'
          onChange={(e) => this.setState({location: e.target.value})}
        />
        <button
          onClick={(e) => this.saveEvent(e)}>
          Save Event
        </button>
      </div>
    );
  }
}

export default AddEvent;
