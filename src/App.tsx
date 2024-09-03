import { useState } from "react"

// Define the type for the possible calculation operations
type Calculations = "+" | "-" | "/" | "*"

function App() {
  // State to store the current input value
  const [input, setInput] = useState('')
  // State to store the first operand for the calculation
  const [firstOperand, setFirstOperand] = useState<number | null>(null)
  // const [secondOperand, setSecondOperand] = useState<number | null>(null)
  // State to store the selected operator
  const [operator, setOperator] = useState<Calculations | null>(null)
  // State to store the output/result of the calculation
  const [output, setOutput] = useState('')

  // Function to handle number button clicks
  const handleNumberInput = (number: string) => {
    // Append the clicked number to the current input
    setInput((currentInput) => currentInput + number)
  }

  // Function to handle operator button clicks
  const handleOperatorSelection = (operator: Calculations) => {
    if (input !== '') {
      // If there is an input, set it as the first operand and store the selected operator
      setFirstOperand(Number(input))
      setOperator(operator)
      // Clear the input for the next operand
      setInput('');
    } else if (firstOperand !== null) {
      // If there is no input but a first operand exists, just update the operator
      setOperator(operator)
    }
  }

  // Function to perform the calculation when the equals button is clicked
  const handleCalculate = () => {
    // Ensure all necessary values are present
    if (firstOperand === null || operator === null || input === '') return

    // Convert the current input to the second operand
    const secondOperand = Number(input)
    // setSecondOperand(secondOperand)
    let answer: number

    // Perform the calculation based on the selected operator
    switch (operator) {
      case "+":
        answer = firstOperand + secondOperand
        break;
      case "-":
        answer = firstOperand - secondOperand
        break;
      case "*":
        answer = firstOperand * secondOperand
        break;
      case "/":
        answer = firstOperand / secondOperand
        break;
    }
    // Set the result as the output and input and reset the input and operands
    setOutput(answer.toString())
    setInput(answer.toString())
    setFirstOperand(null)
    setOperator(null)
  }

  // Function to clear all inputs and outputs
  const handleClear = () => {
    setOutput('')
    setInput('')
    setFirstOperand(null)
    setOperator(null)
  }

  return (
    <>
      <div>
        {/* Display the current calculation or input */}
        {firstOperand !== null ? `${firstOperand} ${operator} ${input}` : input}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {/* Render number buttons */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <button key={number} onClick={() => handleNumberInput(number.toString())}>
            {number}
          </button>
        ))}
        {/* Render operator buttons */}
        <button onClick={() => handleOperatorSelection("+")}>+</button>
        <button onClick={() => handleOperatorSelection("-")}>-</button>
        <button onClick={() => handleOperatorSelection("*")}>*</button>
        <button onClick={() => handleOperatorSelection("/")}>/</button>
        {/* Render clear and equals buttons */}
        <button onClick={() => handleClear()}>Clear</button>
        <button onClick={() => handleCalculate()}>=</button>
        {/* Display the output */}
        {output}
      </div>
    </>
  )
}

export default App

