function id (idString) {
  return document.getElementById(idString)
}

id('add-book-button').addEventListener('click', function () {
  id('add-book-form').classList.remove('hidden')
  id('add-book-button').classList.add('hidden')
})

id('add-book-form').addEventListener('submit', function (event) {
  event.preventDefault()
  id('add-book-form').classList.add('hidden')
  id('add-book-button').classList.remove('hidden')
})
