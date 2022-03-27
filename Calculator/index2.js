// we make a class and this class ha a special method name constructor
// inside constructor we save 2 things as properties these beling to display part

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      // we call clear function as soon as new calculator object is created under this class
      this.clear()
    }

    // all operation 

// clearing previous written+ the operator+ whats currently written
// by making them an empty string
    clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
    }
  
    delete() {
        // convert to string and slice of all string
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
  
    appendNumber(number) {
        // if we click . and . already present the return would not allow us to add this dot
      if (number === '.' && this.currentOperand.includes('.')) return
      // concatination only possible with strings
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }
  
    chooseOperation(operation) {
        // if empty no string then we wont allow to gofurther
      if (this.currentOperand === '') return
      // if previous has something up we want rhe computing
      if (this.previousOperand !== '') {
        this.compute()
      }
      this.operation = operation
      // we move the current to prev display
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
    }
    // take numbers and oeration adn calculate it and display on output
    compute() {
        // let as we can update it
      let computation
      // pasre float converts str to number
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      // if is not a number(NAN) or current value then dont goahead
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case '*':
          computation = prev * current
          break
        case '÷':
          computation = prev / current
          break
          // else statement
        default:
            // we dont want to do any computation
          return
      }
      // after compyutation we want current to show result
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
    }
  
    getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }
  
    updateDisplay() {
      this.currentOperandTextElement.innerText =
        this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {
        this.previousOperandTextElement.innerText =
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else {
        this.previousOperandTextElement.innerText = ''
      }
    }
  }
  
//we put data inside bakcticks and use curlies  
  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const previousOperandTextElement = document.querySelector('[data-previous-operand]')
  const currentOperandTextElement = document.querySelector('[data-current-operand]')
// we need to store info so we make a class at start of prog
// now we intiate new object and pass in constructor arguments  
  const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      // we  update our prev and current operand displaty
      calculator.updateDisplay()
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  equalsButton.addEventListener('click', button => {
      // on click of - we call compute
    calculator.compute()
    calculator.updateDisplay()
  })
  
  allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })