import React from 'react'

class AddAlarmForm extends React.Component {
  constructor () {
    super()
    this.state = {
      time: '',
      name: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { onAdd } = this.props
    if (onAdd) {
      onAdd({time: this.state.time, name: this.state.name})
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='input-field'>
          <label htmlFor='time'>Time</label>
          <input type='time' name='time' value={this.state.time} onChange={this.handleChange} />
        </div>

        <div className='input-field'>
          <label htmlFor='time'>Name</label>
          <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
        </div>

        <button>Add Alarm</button>
      </form>
    )
  }
}

export default AddAlarmForm
