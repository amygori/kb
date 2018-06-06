import React, { Component } from 'react'
import request from 'superagent'
import uuid from 'uuid/v4'

import Container from './components/shoelace/Container'
import Time from './Time'
import AlarmForm from './components/AlarmForm'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      alarms: [],
      alarmRinging: false
    }
  }

  componentDidMount () {
    request.get('http://localhost:8000/alarms')
      .then((res) => {
        return res.body
      })
      .then((alarms) => {
        return alarms.map(alarm => ({
          id: alarm.id,
          time: new Time(alarm.time),
          name: alarm.name
        }))
      })
      .then((alarms) => {
        this.setState({
          alarms: alarms
        })
      })
  }

  addAlarm = (time, name) => {
    const newId = uuid()
    this.setState(prevState => ({
      alarms: prevState.alarms.concat({
        id: newId,
        time: time,
        name: name
      })
    }))

    request.post('http://localhost:8000/alarms')
      .send({id: newId, time: time.seconds, name: name})
      .end()
  }

  deleteAlarm = (id) => {
    this.setState(prevState => ({
      alarms: prevState.alarms.filter(alarm => alarm.id !== id)
    }))
    request.delete(`http://localhost:8000/alarms/${id}`).end()
  }

  editAlarm = (id, editedAlarm) => {
    const alarm = this.state.alarms.find(alarm => alarm.id === id)
    alarm.name = editedAlarm.name
    alarm.time = editedAlarm.time

    request.put(`http://localhost:8000/alarms/${id}`)
      .send({name: alarm.name, time: alarm.time.seconds})
      .then(req => this.forceUpdate())
  }

  render () {
    return (
      <Router>
        <div className='App'>
          <Container>
            <Route exact path='/' render={() => (
              <Dashboard
                alarms={this.state.alarms}
                addAlarm={this.addAlarm}
                deleteAlarm={this.deleteAlarm}
                showAlarmForm={(event) => this.setState({addingAlarm: true})}
              />
            )} />
            <Route path='/add' render={(props) => (
              <AlarmForm
                title='Add Alarm'
                onSave={(alarm) => {
                  this.addAlarm(alarm.time, alarm.name)
                }} {...props} />
            )} />
            <Route path='/edit/:id' render={(props) => {
              const match = props.match
              const alarm = this.state.alarms.find(alarm => alarm.id === match.params.id)
              return <AlarmForm alarm={alarm}
                title='Edit Alarm'
                onSave={(editedAlarm) => {
                  this.editAlarm(alarm.id, editedAlarm)
                }} {...props} />
            }} />
          </Container>
        </div>
      </Router>
    )
  }
}

export default App
