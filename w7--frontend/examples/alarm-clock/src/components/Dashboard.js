/* global localStorage, Audio */

import React from 'react'
import PropTypes from 'prop-types'
import { DateTime } from 'luxon'
import { Link } from 'react-router-dom'

import Time from '../Time'
import Spinner from './Spinner'
import AlarmSelector from './AlarmSelector'
import Clock from './Clock'
import AddAlarmButton from './AddAlarmButton'
import Alarm from './Alarm'

import schoolBell from '../audio/school-bell.wav'
import fireAlarm from '../audio/school-fire-alarm.wav'
import shipBell from '../audio/ship-bell.wav'

const alarms = {
  schoolBell,
  fireAlarm,
  shipBell
}

class Dashboard extends React.Component {
  constructor () {
    super()
    this.state = {
      currentTime: null,
      alarmSound: ''
    }
  }

  componentDidMount () {
    const alarmSound = localStorage.alarmSound || 'shipBell'

    this.setState({
      alarmSound: alarmSound
    })

    this.setState({
      currentTime: DateTime.local()
    })
    this.intervalId = setInterval(() => {
      this.setState((prevState) => {
        return ({
          currentTime: prevState.currentTime.plus({seconds: 1})
        })
      })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
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
    const { alarms, addAlarm, deleteAlarm } = this.props

    return (
      <div className='Dashboard'>
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
              addAlarm={addAlarm} />
            <Link to='/add' className='button'>+ alarm</Link>
          </div>
          <div className='Alarms'>
            {alarms.map(alarm => (
              <Alarm
                key={alarm.id}
                id={alarm.id}
                time={alarm.time}
                name={alarm.name}
                ringAlarm={this.ringAlarm}
                deleteAlarm={deleteAlarm}
                currentTime={this.state.currentTime} />
            ))}
          </div>
        </Spinner>
      </div>
    )
  }
}

Dashboard.propTypes = {
  alarms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    time: PropTypes.instanceOf(Time).isRequired,
    name: PropTypes.string.isRequired
  })),
  showAlarmForm: PropTypes.func,
  addAlarm: PropTypes.func,
  deleteAlarm: PropTypes.func
}

export default Dashboard
