/* globals it */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import nock from 'nock'

nock('http://localhost:8000')
  .get('/alarms')
  .reply(200, [])

it('renders without crashing', (done) => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  // Do this to prevent request returning after unmount
  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(div)
    done()
  }, 10)
})
