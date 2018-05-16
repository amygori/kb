import request from 'superagent'

function id (idString) {
  return document.getElementById(idString)
}

request
  .get('https://books-api.glitch.me/api/books')
  .auth('clinton', 'password123')
  .then(response => {
    const books = response.body.books
    updateSection('books-reading', books.filter(book => book.status === 'reading'))
    updateSection('books-toread', books.filter(book => book.status === 'toread'))
    updateSection('books-read', books.filter(book => book.status === 'read'))
  })

function updateSection (sectionId, books) {
  const section = id(sectionId)
  const tableBody = section.querySelector('tbody')
  tableBody.innerHTML = booksToHTML(books)
}

function booksToHTML (books) {
  return books.map(bookToHTML).join("")
}

function bookToHTML (book) {
  return `<tr>
    <td>${book.title}</td>
    <td>${book.authors.join(', ')}</td>
    <td>Actions</td>
  </tr>`
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
