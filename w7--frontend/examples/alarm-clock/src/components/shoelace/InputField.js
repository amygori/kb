import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class InputField extends React.Component {
  constructor () {
    super()
    this.state = {
      errors: []
    }
  }

  handleChange = (event) => {
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
    const { name, label, type, placeholder, value, showValid } = this.props
    const errors = this.state.errors
    return (
      // TODO use classnames here
      <div className={classnames({
        'input-field': true,
        'input-invalid': errors.length > 0,
        'input-valid': showValid && errors.length === 0
      })}>
        {label && <label htmlFor={name}>{label}</label>}
        <input name={name} type={type} placeholder={placeholder} onChange={this.handleChange} value={value} />
        {errors.map((error, idx) => <p key={idx} className='input-hint'>{`${name} ${error}`}</p>)}
      </div>
    )
  }
}

InputField.defaultProps = {
  type: 'text',
  showValid: false
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  validations: PropTypes.arrayOf(PropTypes.func),
  showValid: PropTypes.bool
}

export default InputField
