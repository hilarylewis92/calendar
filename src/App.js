import React, { Component } from 'react'
import Calendar from './components/Calendar'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='title'>Calendar</h1>
        <Calendar />
      </div>
    )
  }
}

export default App
