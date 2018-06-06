import React from 'react'
import 'csshake/dist/csshake-default.css'
import PropTypes from 'prop-types'

import './Alarm.css'
import { diffObject } from '../util'
import Time from '../Time'
import { DateTime } from 'luxon'

import { Link } from 'react-router-dom'


class Alarm extends React.Component {
  constructor () {
    super()
    this.state = {
      goingOff: false
    }
  }

  static getDerivedStateFromProps (props, state) {
    const currTime = Time.fromDateTime(props.currentTime)
    const secsDiff = currTime.compare(props.time)

    if (secsDiff === 0 && !state.goingOff) {
      return { goingOff: true }
    }

    return null
  }

  shouldComponentUpdate (nextProps, nextState) {
    const diffPropKeys = diffObject(this.props, nextProps)
    return (
      this.state !== nextState ||
      diffPropKeys.length !== 1 ||
      diffPropKeys[0] !== 'currentTime')
  }

  componentDidUpdate () {
    if (this.state.goingOff) {
      this.props.ringAlarm(true)
    }
  }

  render () {
    const { id, time, name, ringAlarm, deleteAlarm } = this.props
    if (this.state.goingOff) {
      return (<div className='Alarm Alarm--going-off shake shake-constant shake-constant--hover'
        onClick={(event) => { ringAlarm(false); this.setState({goingOff: false}) }}>
        <span>{time.toString()}</span> - <span>{name}</span>
      </div>)
    }
    return (
      <div className='Alarm row'>
        <div className='col-4'>{time.toString()}</div>
        <div className='col-4'>{name}</div>
        <div className='col-4'>
          <Link to={`/edit/${id}`} className='button'>Edit</Link>
          &nbsp;
          <button className='button-danger' onClick={event => deleteAlarm(id)}>Delete</button>
        </div>
      </div>
    )
  }
}

Alarm.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.instanceOf(Time).isRequired,
  deleteAlarm: PropTypes.func.isRequired,
  ringAlarm: PropTypes.func.isRequired,
  currentTime: PropTypes.instanceOf(DateTime)
}

export default Alarm
