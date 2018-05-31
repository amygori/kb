import React, {Component} from 'react'
import 'shoelace-css/dist/shoelace.css'
import './App.css'
import textOptions from './textOptions'

import ShrinkOptions from './components/ShrinkOptions'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: '',
      options: []
    }

    this.setOption = this.setOption.bind(this)
  }

  updateText (event) {
    this.setState({text: event.target.value})
  }

  setOption (optionToChange, event) {
    const checked = event.target.checked
    let options = this.state.options.slice()
    if (checked) {
      options = options.concat(optionToChange)
    } else {
      options = options.filter(option => option !== optionToChange)
    }

    this.setState({
      options: options
    })
  }

  shrinkText () {
    let {text, options} = this.state

    if (!text) {
      return ''
    }

    let opObj
    options.forEach(option => {
      opObj = textOptions.find(o => o.id === option)
      if (opObj) {
        text = opObj.fn(text)
      }
    })

    return text
  }

  render () {
    const text = this.state.text
    const shrunkText = this.shrinkText()
    return (
      <div className='App container'>
        <h1>TweetShrink</h1>
        <div className='row'>
          <div className='col'>
            <textarea
              className='TextEntry-textbox'
              placeholder='What do you want to shrink?'
              onChange={this
                .updateText
                .bind(this)}
              value={text} />
          </div>
          <div className='col'>
            <div className='TextEntry-shrunk-text'>
              {shrunkText}
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            {text && `${text.length} characters`}
          </div>
          <div className='col'>
            {shrunkText && `${shrunkText.length} characters`}
          </div>
        </div>
        <ShrinkOptions textOptions={textOptions} onOptionChange={this.setOption} />
      </div>
    )
  }
}

export default App
