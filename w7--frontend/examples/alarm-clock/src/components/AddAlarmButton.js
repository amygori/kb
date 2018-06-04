import React from 'react'

class AddAlarmButton extends React.Component {
  handleClick () {
  }

  render () {
    const { label } = this.props
    return (
      <button onClick={() => this.props.addAlarm()}>+ {label}</button>
    )
  }
}

export default AddAlarmButton
