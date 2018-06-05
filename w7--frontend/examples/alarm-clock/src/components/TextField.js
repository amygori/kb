import React from 'react'
import PropTypes from 'prop-types'

class TextField extends React.Component {
  constructor () {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      errors: []
    }
  }

  handleChange (event) {
    const { validations, onChange } = this.props
    const value = event.target.value
    const errors = []

    if (validations) {
      validations.forEach(validation => {
        const msg = validation(value)
        if (msg) {
          errors.push(msg)
        }
      })
    }

    this.setState({errors: errors})
    if (errors.length === 0) {
      onChange(event)
    }
  }

  render () {
    const { name } = this.props
    const errors = this.state.errors
    return (
      <div className={'input-field ' + (errors.length > 0 ? 'input-invalid' : 'input-valid')}>
        <input name={name} type='text' onChange={this.handleChange} />
        {errors.map(error => <p className='input-hint'>{`${name} ${error}`}</p>)}
      </div>
    )
  }
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  validations: PropTypes.arrayOf(PropTypes.func)
}

export default TextField
