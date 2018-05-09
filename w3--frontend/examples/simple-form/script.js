class NumberField {
  constructor (input) {
    this.input = input
  }

  markValid () {
    this.input.parentElement.classList.add('input-valid')
    this.input.parentElement.classList.remove('input-invalid')
  }

  markInvalid (message) {
    this.input.parentElement.classList.remove('input-valid')
    this.input.parentElement.classList.add('input-invalid')

    var errorMsg = document.createElement('div')
    errorMsg.classList.add('input-hint', 'text-danger')
    errorMsg.innerText = message
    this.input.parentElement.appendChild(errorMsg)
  }

  clearErrorMsgs () {
    this.input.parentElement.querySelectorAll('.input-hint').forEach(function (el) {
      el.remove()
    })
  }

  onChange (listenerFn) {
    this.input.addEventListener('input', listenerFn)
  }

  getValue () {
    return parseInt(this.input.value, 10)
  }
}

var numberInput = document.getElementById('my-number')
var numberField = new NumberField(numberInput)

numberField.onChange(function () {
  numberField.clearErrorMsgs()

  // get value of numberField
  var number = numberField.getValue()

  // check to see if numberField.input is >= 1 && <= 10
  if (number < 1) {
    numberField.markInvalid('Your number is less than 1')
  } else if (number > 10) {
    numberField.markInvalid('Your number is greater than 10')
  } else {
    numberField.markValid()
  }
})
