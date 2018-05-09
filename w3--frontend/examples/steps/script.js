class StepCalculator {
  constructor (stepsArray) {
    if (stepsArray) {
      this.steps = stepsArray
    } else {
      this.steps = []
    }
  }

  setSteps (steps) {
    this.steps = steps
  }

  getTotal () {
    return this.steps.reduce(function (total, current) {
      return total + current
    })
  }

  getAverage () {
    if (this.steps.length > 0) {
      return this.getTotal() / this.steps.length
    }
  }

  getRemaining (goal) {
    var total = this.getTotal()
    if (goal > total) {
      return goal - total
    } else {
      return 0
    }
  }
}

class Field {
  constructor (inputNode) {
    this.input = inputNode
  }

  getValue () {
    if (!this.isEmpty()) {
      return parseInt(this.input.value, 10)
    }
  }

  isEmpty () {
    return (this.input.value == null ||
      this.input.value === '' ||
      typeof (this.input.value) === 'undefined')
  }
}

class Form {
  constructor (stepFields) {
    this.fields = stepFields
    this.calculator = new StepCalculator()

    var onChange = function () {
      this.update()
    }
    onChange = onChange.bind(this)

    this.fields.forEach(function (field) {
      field.input.addEventListener('change', onChange)
    })
  }

  update () {
    var steps = this.fields.map(function (field) {
      return field.getValue()
    })
    steps = steps.filter(function (value) {
      return typeof (value) === 'number'
    })

    this.calculator.setSteps(steps)

    document.getElementById('total-steps').innerText = this.calculator.getTotal()
    document.getElementById('average-steps').innerText = this.calculator.getAverage()
  }
}

var fieldIds = ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7']
var fields = fieldIds.map(function (id) {
  return new Field(document.getElementById(id))
})

var form = new Form(fields)
