import React from 'react'
import 'csshake/dist/csshake-default.css'
import './Alarm.css'

import { diffObject } from '../util'
import Time from '../Time'

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

  render () {
    const { id, time, name, ringAlarm, deleteAlarm } = this.props
    if (this.state.goingOff) {
      return (<div className='Alarm Alarm--going-off shake shake-constant shake-constant--hover'
        onClick={(event) => { ringAlarm(false); this.setState({goingOff: false}) }}>
        <span>{time.toString()}</span> - <span>{name}</span>
      </div>)
    }
    return (
      <div className='Alarm'>
        <span>{time.toString()}</span> - <span>{name}</span>&nbsp;
        <button class='button-xs button-danger' onClick={event => deleteAlarm(id)}>&times;</button>
      </div>
    )
  }

  componentDidUpdate () {
    if (this.state.goingOff) {
      this.props.ringAlarm(true)
    }
  }
}

export default Alarm
