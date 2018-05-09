var numberField = document.getElementById('my-number')

function markValid (numberField) {
  numberField.parentElement.classList.add('input-valid')
  numberField.parentElement.classList.remove('input-invalid')
}

function markInvalid (numberField) {
  numberField.parentElement.classList.remove('input-valid')
  numberField.parentElement.classList.add('input-invalid')

  var errorMsg = document.createElement('div')
  errorMsg.classList.add('input-hint', 'text-danger')
  errorMsg.innerText = 'Your number is bad'
  numberField.parentElement.appendChild(errorMsg)
}

numberField.addEventListener('input', function () {
  numberField.parentElement.querySelectorAll('.input-hint').forEach(function (el) {
    el.remove()
  })

  // get value of numberField
  var number = parseInt(numberField.value, 10)
  // check to see if numberField is >= 1 && <= 10
  if (number >= 1 && number <= 10) {
    // if so, add input-valid to the surrounding div
    markValid(numberField)
  } else {
    // if not, add input-invalid to the surrounding div
    markInvalid(numberField)
  }
})
