class Field {
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
    return this.input.value
  }
}

class NumberField extends Field {
  getValue () {
    return parseInt(this.input.value, 10)
  }
}

class Form {
  constructor () {
    var numberInput = document.getElementById('my-number')
    this.numberField = new NumberField(numberInput)

    var emailInput = document.getElementById('my-email')
    this.emailField = new Field(emailInput)

    this.fields = [this.numberField, this.emailField]
    var updateForm = this.updateForm.bind(this)

    this.fields.forEach(function (field) {
      // Polymorphism
      field.onChange(updateForm)
    })
  }

  updateForm () {
    this.fields.forEach(function (field) {
      field.clearErrorMsgs()
    })

    // get value of numberField
    var number = this.numberField.getValue()

    // check to see if numberField.input is >= 1 && <= 10
    if (number < 1) {
      this.numberField.markInvalid('Your number is less than 1')
    } else if (number > 10) {
      this.numberField.markInvalid('Your number is greater than 10')
    } else {
      this.numberField.markValid()
    }

    var email = this.emailField.getValue()

    if (email === '') {
      this.emailField.markInvalid('You must enter an email')
    } else if (!email.includes('@', 1)) {
      this.emailField.markInvalid('That does not look like an email')
    } else {
      this.emailField.markValid()
    }
  }
}

var form = new Form()
