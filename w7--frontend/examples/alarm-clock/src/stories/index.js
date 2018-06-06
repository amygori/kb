import React from 'react'
import 'shoelace-css/dist/shoelace.css'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'

import Clock from '../components/Clock'
import Spinner from '../components/Spinner'
import InputField from '../components/shoelace/InputField'
import AlarmForm from '../components/AlarmForm'
import { DateTime } from 'luxon'

addDecorator(story => (
  <div className='container'>
    {story()}
  </div>
))

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Clock', module)
  .add('with current time', () => <Clock currentTime={DateTime.local()} />)

storiesOf('Spinner', module)
  .add('with isLoading=true', () => (
    <Spinner isLoading>
      <h1>Hi!</h1>
    </Spinner>
  ))
  .add('with isLoading=false', () => (
    <Spinner isLoading={false}>
      <h1>Hi!</h1>
    </Spinner>
  ))

const isRequired = (value) => {
  if (!value.trim()) {
    return 'is required'
  }
}

storiesOf('InputField', module)
  .add('with minimal props', () => (<InputField name='username' />))
  .add('with onChange', () => (
    <InputField label='Username' name='username' onChange={action('field changed')} />))
  .add('with isRequired validation', () => (
    <InputField label='Username' name='username' validations={[isRequired]} onChange={action('field changed')} />))

storiesOf('AlarmForm', module)
  .add('default', () => (<AlarmForm onSave={action('form submitted')} />))
