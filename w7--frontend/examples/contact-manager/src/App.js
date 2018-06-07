import React, { Component } from 'react'
import './App.css'
import Login from './components/Login'
import ContactListContainer from './components/ContactListContainer'

class App extends Component {
  constructor () {
    super()
    this.state = {
      username: window.localStorage.username,
      password: window.localStorage.password,
      error: null
    }

    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  isLoggedIn () {
    return this.state.username && this.state.password
  }

  logIn (username, password) {
    this.setState({
      username: username,
      password: password
    })

    window.localStorage.username = username
    window.localStorage.password = password
  }

  logOut (error) {
    this.setState({
      username: null,
      password: null,
      error: error
    })

    window.localStorage.username = null
    window.localStorage.password = null
  }

  render () {
    return (
      <div className='App'>
        <div style={{color: 'red'}}>{this.state.error}</div>
        {this.isLoggedIn()
          ? <ContactListContainer username={this.state.username}
            password={this.state.password}
            onUnauthorized={this.logOut} />
          : <Login onLogin={this.logIn} />
        }
      </div>
    )
  }
}

export default App
