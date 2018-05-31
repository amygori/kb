import React from 'react'

class Word extends React.Component {
  render () {
    const { word } = this.props
    return (
      <span>{word}</span>
    )
  }
}

class ShrunkText extends React.Component {
  render () {
    const {shrunkText} = this.props
    const words = shrunkText.split(/\s+/)

    return (
      <div className='TextEntry-shrunk-text'>
        {words.map((word, idx) => [<Word key={idx} word={word} />, ' '])}
      </div>
    )
  }
}

export default ShrunkText
