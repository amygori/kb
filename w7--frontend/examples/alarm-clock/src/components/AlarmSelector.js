import React from 'react'

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

export default AlarmSelector
