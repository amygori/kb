import React from 'react'
import PropTypes from 'prop-types'
import './Spinner.css'

class Spinner extends React.Component {
  render () {
    const { isLoading, children } = this.props
    if (isLoading) {
      return (
        <div className='Spinner' />
      )
    } else {
      return children
    }
  }
}

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  spinnerStyle: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element)
}

export default Spinner
