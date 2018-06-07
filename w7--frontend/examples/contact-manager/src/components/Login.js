import React from 'react'

class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.onLogin(this.state.username, this.state.password)
  }

  render () {
    return (
      <div className='Login'>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div><input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleChange} /></div>
          <div><input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange} /></div>
          <div><button type='submit'>Log in</button></div>
        </form>
      </div>
    )
  }
}

export default Login
