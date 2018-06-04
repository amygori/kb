import React, { Component } from 'react'
import logo from './logo.svg'

import Container from './components/shoelace/Container'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Container>
          <header className='App-header'>
            <h1 className='App-title'>Welcome to React</h1>
          </header>
          <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Container>
      </div>
    )
  }
}

export default App
