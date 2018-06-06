import React, { Component } from 'react'
import request from 'superagent'
import uuid from 'uuid/v4'

import Container from './components/shoelace/Container'
import Time from './Time'
import AlarmForm from './components/AlarmForm'
import Dashboard from './components/Dashboard'

import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      alarms: [],
      alarmRinging: false,
      addingAlarm: false
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

  render () {
    return (
      <div className='App'>
        <Container>
          {this.state.addingAlarm
            ? <AlarmForm onSave={(alarm) => {
              this.addAlarm(alarm.time, alarm.name)
              this.setState({addingAlarm: false})
            }} />
            : <Dashboard
              alarms={this.state.alarms}
              addAlarm={this.addAlarm}
              deleteAlarm={this.deleteAlarm}
              showAlarmForm={(event) => this.setState({addingAlarm: true})}
            />
          }

        </Container>
      </div>
    )
  }
}

export default App
