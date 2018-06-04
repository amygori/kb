import React from 'react'
import { DateTime } from 'luxon'
import './Clock.css'

class Clock extends React.Component {
  render () {
    const currentTime = this.props.currentTime
    return (<div className='Clock'>
      {currentTime && currentTime.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}
    </div>)
  }
}

export default Clock
