import React from 'react'

class AlarmSelector extends React.Component {
  render () {
    const { changeAlarmSound, currentAlarmSound } = this.props

    return (<select onChange={changeAlarmSound} value={currentAlarmSound}>
      <option value='ship-bell'>Ship Bell</option>
      <option value='school-bell'>School Bell</option>
      <option value='fire-alarm'>Fire Alarm</option>
    </select>)
  }
}

export default AlarmSelector
