import React from 'react'
import request from 'superagent'
import ContactList from './ContactList'

class ContactListContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      contacts: []
    }
  }

  componentDidMount () {
    const { username, password, onUnauthorized } = this.props
    request.get('http://localhost:8000/contacts')
      // .set('Authorization', `Bearer ${token}`)
      .auth(username, password)
      .then(res => this.setState({contacts: res.body}))
      .catch(() => {
        onUnauthorized('Username and password are not valid.')
      })
  }

  render () {
    return <ContactList contacts={this.state.contacts} />
  }
}

export default ContactListContainer
