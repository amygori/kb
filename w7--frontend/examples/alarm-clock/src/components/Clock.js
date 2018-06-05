import React from 'react'
import { DateTime } from 'luxon'
import './Clock.css'
import PropTypes from 'prop-types'

class Clock extends React.Component {
  render () {
    const currentTime = this.props.currentTime
    return (<div className='Clock'>
      {currentTime && currentTime.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}
    </div>)
  }
}

Clock.propTypes = {
  currentTime: PropTypes.instanceOf(DateTime)
}

export default Clock
