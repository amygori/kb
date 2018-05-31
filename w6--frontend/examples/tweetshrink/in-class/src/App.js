import React, {Component} from 'react'
import 'shoelace-css/dist/shoelace.css'
import './App.css'
import textOptions from './textOptions'

import ShrunkText from './components/ShrunkText'
import ShrinkOptions from './components/ShrinkOptions'
import synonymSearch from './synonymSearch'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: '',
      options: [],
      textOptions: textOptions.slice()
    }

    this.setOption = this.setOption.bind(this)
    this.searchForSynonyms = this.searchForSynonyms.bind(this)
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

  searchForSynonyms () {
    synonymSearch(this.state.text, (origWord, synonym) => {
      this.setState(prevState => ({
        textOptions: prevState.textOptions.concat({
          id: `origWord-${origWord}-${synonym}`,
          label: `Replace "${origWord}" with "${synonym}"`,
          fn: text => text.replace(new RegExp(`\\b${origWord}\\b`), synonym)
        })
      }))
    })
  }

  shrinkText () {
    let {text, options} = this.state

    if (!text) {
      return ''
    }

    let opObj
    options.forEach(option => {
      opObj = this.state.textOptions.find(o => o.id === option)
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
            <ShrunkText shrunkText={shrunkText} />
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
        <div className='mar-b-sm mar-t-sm'>
          <button id='synonym-search' onClick={this.searchForSynonyms}>Search for synonyms</button>
        </div>
        <ShrinkOptions textOptions={this.state.textOptions} onOptionChange={this.setOption} />
      </div>
    )
  }
}

export default App
