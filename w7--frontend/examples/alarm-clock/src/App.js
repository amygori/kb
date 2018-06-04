/* global localStorage */

import React, { Component } from 'react'
import request from 'superagent'
import { DateTime } from 'luxon'

import Container from './components/shoelace/Container'
import Clock from './components/Clock'
import AddAlarmButton from './components/AddAlarmButton'
import AlarmSelector from './components/AlarmSelector'
import Time from './Time'
import uuid from 'uuid/v4'

import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentTime: null,
      alarms: [],
      alarmSound: null
    }

    this.addAlarm = this.addAlarm.bind(this)
    this.changeAlarmSound = this.changeAlarmSound.bind(this)
  }

  addAlarm (time, name) {
    this.setState(prevState => ({
      alarms: prevState.alarms.concat({
        id: uuid(),
        time: time,
        name: name
      })
    }))
  }

  changeAlarmSound (event) {
    this.setState({
      alarmSound: event.target.value
    })
    localStorage.alarmSound = event.target.value
  }

  componentDidMount () {
    this.setState({
      currentTime: DateTime.local(),
      alarmSound: localStorage.alarmSound || 'ship-bell'
    })
    this.intervalId = setInterval(() => {
      this.setState((prevState) => {
        return ({
          currentTime: prevState.currentTime.plus({seconds: 1})
        })
      })
    }, 1000)

    request.get('http://localhost:8000/alarms')
      .then((res) => {
        return res.body
      })
      .then((alarms) => {
        return alarms.map(alarm => ({
          id: alarm.id,
          time: new Time(alarm.time),
          name: alarm.name
        }))
      })
      .then((alarms) => {
        this.setState({
          alarms: alarms
        })
      })
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
  }

  render () {
    return (
      <div className='App'>
        <Container>
          <div className='row row-end'>
            <div className='col-3'>
              <AlarmSelector
                currentAlarmSound={this.state.alarmSound}
                changeAlarmSound={this.changeAlarmSound} />
            </div>
          </div>
          <Clock currentTime={this.state.currentTime} />
          <div className='Buttons'>
            <AddAlarmButton
              label='10 secs'
              seconds={10}
              currentTime={this.state.currentTime}
              addAlarm={this.addAlarm} />
          </div>
          <div className='Alarms'>
            {this.state.alarms.map(alarm => (
              <div key={alarm.id} className='Alarm'>
                <span>{alarm.time.toString()}</span> - <span>{alarm.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    )
  }
}

export default App
