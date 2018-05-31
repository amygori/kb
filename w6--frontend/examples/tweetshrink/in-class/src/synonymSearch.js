import request from 'superagent'

function synonymSearch (text, callback) {
  const words = text
    .toLowerCase()
    .replace(/[^a-z-]/, ' ')
    .split(/\s+/)
  const longWords = words.filter(word => word.length >= 7)

  longWords.forEach(word => {
    request.get(`https://api.datamuse.com/words?rel_syn=${word}`)
      .then(res => res.body)
      .then(synonyms => {
        console.log(synonyms)
        synonyms.forEach(syn => {
          if (syn.word.length < word.length && syn.score > 400) {
            callback(word, syn.word)
          }
        })
      })
  })
}

export default synonymSearch
