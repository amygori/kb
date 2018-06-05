/* globals it */

import React from 'react'
import ReactDOM from 'react-dom'
import Clock from '../../components/Clock'
import { DateTime } from 'luxon'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Clock currentTime={DateTime.local()} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
