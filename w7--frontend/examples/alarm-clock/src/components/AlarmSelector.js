import React from 'react'
import PropTypes from 'prop-types'

class AlarmSelector extends React.Component {
  render () {
    const { changeAlarmSound, currentAlarmSound } = this.props

    return (<select onChange={changeAlarmSound} value={currentAlarmSound}>
      <option value='shipBell'>Ship Bell</option>
      <option value='schoolBell'>School Bell</option>
      <option value='fireAlarm'>Fire Alarm</option>
    </select>)
  }
}

AlarmSelector.propTypes = {
  changeAlarmSound: PropTypes.func.isRequired,
  currentAlarmSound: PropTypes.string.isRequired
}

export default AlarmSelector
