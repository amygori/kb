function synonymSearch (text, callback) {
  const wordPairs = [
    ['purpose', 'use'],
    ['different', 'varied'],
    ['component', 'part']
  ]

  wordPairs.forEach(([word, synonym]) => {
    callback(word, synonym)
  })
}

export default synonymSearch
