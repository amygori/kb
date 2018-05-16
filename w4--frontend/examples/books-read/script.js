import request from 'superagent'

function id (idString) {
  return document.getElementById(idString)
}

id('add-book-button').addEventListener('click', function () {
  id('add-book-form').classList.remove('hidden')
  id('add-book-button').classList.add('hidden')
})

id('add-book-form').addEventListener('submit', function (event) {
  event.preventDefault()

  const title = id('title').value
  const authors = id('authors').value.split(/\s*,\s*/)
  const status = id('status').value

  request
    .post('https://books-api.glitch.me/api/books')
    .auth('clinton', 'password123')
    .send({
      title: title,
      authors: authors,
      status: status
    })
    .then(response => {
      console.log(response)
      id('add-book-form').reset()
      id('add-book-form').classList.add('hidden')
      id('add-book-button').classList.remove('hidden')
    })
    .catch((err) => {
      console.error(err)
    })
})
