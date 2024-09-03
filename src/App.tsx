import { useState } from "react"

type Calculations = "Add" | "Subtract" | "Divide" | "Multiply"

function App() {
  const [input, setInput] = useState('')
  const [firstOperand, setFirstOperand] = useState<number | null>(null)
  const [operator, setOperator] = useState<Calculations | null>(null)
  const [output, setOutput] = useState('')

  const handleNumberInput = (number: string) => {
    setInput((input) => input + number)
  }


  const handleOperatorSelection = (operator: Calculations) => {
    if (input !== '') {
      setFirstOperand(Number(input))
      setOperator(operator)
      setInput('');
    } else if (firstOperand !== null) {
      setOperator(operator)
    }
  }

  const handleCalculate = () => {
    if (firstOperand === null || operator === null || input === '') return

    const secondOperand = Number(input)
    let answer: number

    switch (operator) {
      case "Add":
        answer = firstOperand + secondOperand
        break;
      case "Subtract":
        answer = firstOperand - secondOperand
        break;
      case "Multiply":
        answer = firstOperand * secondOperand
        break;
      case "Divide":
        answer = firstOperand / secondOperand
        break;
    }
    setOutput(answer.toString())
    setInput('')
    setFirstOperand(null)
    setOperator(null)

  }

  const handleClear = () => {
    setOutput('')
    setInput('')
    setFirstOperand(null)
    setOperator(null)
  }

  return (
    <>
      <div>
        {firstOperand !== null ? `${firstOperand} ${operator} ${input}` : input}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        <button>0</button>
        <button onClick={() => setInput("1")}>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>.</button>
        <button>/</button>
        <button>*</button>
        <button>-</button>
        <button>+</button>
        <button onClick={() => handleCalculate}>=</button>
      </div>
    </>
  )

}

export default App