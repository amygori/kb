import React from 'react'
import showdown from 'showdown'

class ContactList extends React.Component {
  contactsWithBirthday (date) {
    return this.props.contacts.filter(contact => contact.birthday === date)
  }

  render () {
    const birthdayPeople = this.contactsWithBirthday('06/07')
    const converter = new showdown.Converter()

    return (
      <div>
        {birthdayPeople.length > 0 && (
          <div style={{backgroundColor: 'blue', color: 'white'}}>
            The following people have a birthday today! {birthdayPeople.map(p => p.name).join(', ')}
          </div>
        )}
        <h1>Contact List</h1>
        {this.props.contacts.map(contact => (
          <div key={contact.id}>
            <h3>{contact.name}</h3>
            <div dangerouslySetInnerHTML={{__html: converter.makeHtml(contact.notes)}} />
          </div>
        ))}
      </div>
    )
  }
}

export default ContactList
