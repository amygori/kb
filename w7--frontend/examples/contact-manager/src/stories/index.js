import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

import Login from '../components/Login'
import ContactList from '../components/ContactList'

const fakeHistory = {
  push: (url) => console.log("pushed", url),
  goBack: () => console.log("go back")
}

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role='img' aria-label='so cool'>
        😀 😎 👍 💯
      </span>
    </Button>
  ))

storiesOf('Login', module)
  .add('with onLogin', () => (
    <Login onLogin={action('onLogin')} />
  ))

storiesOf('ContactList', module)
  .add('with some fake contacts', () => (
    <ContactList contacts={[
      {id: '1', name: 'Alyssa', notes: 'I am **so glad** you asked about Storybook.'}
    ]} />
  ))
