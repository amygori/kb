import React from 'react'
import Time from '../Time'

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

export default AddAlarmButton
