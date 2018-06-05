/* global localStorage, Audio */

import React, { Component } from 'react'
import request from 'superagent'
import { DateTime } from 'luxon'
import uuid from 'uuid/v4'

import Container from './components/shoelace/Container'
import Clock from './components/Clock'
import AddAlarmButton from './components/AddAlarmButton'
import AlarmSelector from './components/AlarmSelector'
import Alarm from './components/Alarm'
import Time from './Time'
import schoolBell from './audio/school-bell.wav'
import fireAlarm from './audio/school-fire-alarm.wav'
import shipBell from './audio/ship-bell.wav'
import Spinner from './components/Spinner'

import './App.css'

const alarms = {
  schoolBell,
  fireAlarm,
  shipBell
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentTime: null,
      alarms: [],
      alarmSound: '',
      alarmRinging: false
    }
  }

  componentDidMount () {
    const alarmSound = localStorage.alarmSound || 'shipBell'

    setTimeout(() => {
      this.setState({
        currentTime: DateTime.local(),
        alarmSound: alarmSound
      })
      this.intervalId = setInterval(() => {
        this.setState((prevState) => {
          return ({
            currentTime: prevState.currentTime.plus({seconds: 1})
          })
        })
      }, 1000)
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

  addAlarm = (time, name) => {
    const newId = uuid()
    this.setState(prevState => ({
      alarms: prevState.alarms.concat({
        id: newId,
        time: time,
        name: name
      })
    }))

    request.post('http://localhost:8000/alarms')
      .send({id: newId, time: time.seconds, name: name})
      .end()
  }

  deleteAlarm = (id) => {
    this.setState(prevState => ({
      alarms: prevState.alarms.filter(alarm => alarm.id !== id)
    }))
    request.delete(`http://localhost:8000/alarms/${id}`).end()
  }

  changeAlarmSound = (event) => {
    this.setState({
      alarmSound: event.target.value
    })
    localStorage.alarmSound = event.target.value
  }

  ringAlarm = (onOff) => {
    if (onOff && !this.state.alarmRinging) {
      this.setState({alarmRinging: true}, () => {
        const alarmSoundAudio = new Audio(alarms[this.state.alarmSound])
        this.lastAlarm = alarmSoundAudio
        alarmSoundAudio.play()
      })
    }
    if (!onOff) {
      if (this.lastAlarm) {
        this.lastAlarm.pause()
      }
      this.setState({alarmRinging: false})
    }
  }

  render () {
    return (
      <div className='App'>
        <Container>
          <Spinner isLoading={!this.state.currentTime}>
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
                label='3 secs'
                seconds={3}
                currentTime={this.state.currentTime}
                addAlarm={this.addAlarm} />
            </div>
            <div className='Alarms'>
              {this.state.alarms.map(alarm => (
                <Alarm
                  key={alarm.id}
                  id={alarm.id}
                  time={alarm.time}
                  name={alarm.name}
                  ringAlarm={this.ringAlarm}
                  deleteAlarm={this.deleteAlarm}
                  currentTime={this.state.currentTime} />
              ))}
            </div>
          </Spinner>
        </Container>
      </div>
    )
  }
}

export default App
