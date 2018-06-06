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

  static getDerivedStateFromProps (props, state) {
    const { alarm } = props
    if (alarm && !state.time && !state.name) {
      return {
        name: alarm.name,
        seconds: alarm.time.seconds,
        time: alarm.time.toString().substr(0, 5)
      }
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
    const history = this.props.history

    event.preventDefault()

    const { onSave } = this.props
    if (onSave) {
      onSave({time: new Time(this.state.seconds), name: this.state.name})
      history.push('/')
    }
  }

  render () {
    return (
      <div class='AlarmForm'>
        {this.props.title && <h1>{this.props.title}</h1>}
        <form onSubmit={this.handleSubmit}>
          <InputField label='Time' name='time' type='time' value={this.state.time} onChange={this.handleChangeTime} />
          <InputField label='Name' name='name' type='text' value={this.state.name} onChange={this.handleChangeName} />
          <button>Save</button>
        </form>
      </div>

    )
  }
}

AlarmForm.propTypes = {
  onSave: PropTypes.func,
  title: PropTypes.string
}

export default AlarmForm
