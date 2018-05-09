var numberField = document.getElementById('my-number')

function markValid (numberField) {
  numberField.parentElement.classList.add('input-valid')
  numberField.parentElement.classList.remove('input-invalid')
}

function markInvalid (numberField, message) {
  numberField.parentElement.classList.remove('input-valid')
  numberField.parentElement.classList.add('input-invalid')

  var errorMsg = document.createElement('div')
  errorMsg.classList.add('input-hint', 'text-danger')
  errorMsg.innerText = message
  numberField.parentElement.appendChild(errorMsg)
}

numberField.addEventListener('input', function () {
  numberField.parentElement.querySelectorAll('.input-hint').forEach(function (el) {
    el.remove()
  })

  // get value of numberField
  var number = parseInt(numberField.value, 10)
  // check to see if numberField is >= 1 && <= 10
  if (number < 1) {
    markInvalid(numberField, 'Your number is less than 1')
  } else if (number > 10) {
    markInvalid(numberField, 'Your number is greater than 10')
  } else {
    markValid(numberField)
  }
})
