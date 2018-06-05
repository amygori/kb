import React from 'react'
import { DateTime } from 'luxon'
import Time from '../Time'
import PropTypes from 'prop-types'

class AddAlarmButton extends React.Component {
  shouldComponentUpdate (nextProps) {
    return (this.props.label !== nextProps.label)
  }

  handleClick () {
    const { currentTime, addAlarm, seconds } = this.props
    const alarmTime = Time.fromDateTime(currentTime).plus(seconds)
    addAlarm(alarmTime, 'From button')
  }

  render () {
    const { label } = this.props
    return (
      <button onClick={() => this.handleClick()}>+ {label}</button>
    )
  }
}

AddAlarmButton.propTypes = {
  currentTime: PropTypes.instanceOf(DateTime),
  addAlarm: PropTypes.func.isRequired,
  seconds: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
}

export default AddAlarmButton
