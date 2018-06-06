import React from 'react'
import InputField from './shoelace/InputField'
import PropTypes from 'prop-types'
import Time from '../Time'

class AlarmForm extends React.Component {
  constructor () {
    super()
    this.state = {
      time: '',
      name: '',
      seconds: null
    }
  }

  handleChangeName = (event) => {
    const { value } = event.target

    this.setState({name: value})
  }

  handleChangeTime = (event) => {
    const { value } = event.target
    const [hour, minute] = value.split(':').map(num => parseInt(num, 10))
    const seconds = hour * 3600 + minute * 60

    this.setState({time: value, seconds: seconds})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { onSave } = this.props
    if (onSave) {
      onSave({time: new Time(this.state.seconds), name: this.state.name})
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputField label='Time' name='time' type='time' value={this.state.time} onChange={this.handleChangeTime} />
        <InputField label='Name' name='name' type='text' value={this.state.name} onChange={this.handleChangeName} />
        <button>Add Alarm</button>
      </form>
    )
  }
}

AlarmForm.propTypes = {
  onSave: PropTypes.func
}

export default AlarmForm
