import { useState } from "react"

type CalculatorProps = {
    input1: number,
    input2: number
}

const Calculator = ({ input1, input2 }: CalculatorProps): JSX.Element => {
    const [output, setOutput] = useState(0)

    const handleAdd = (): void => {
        setOutput(input1 + input2)
    }

    const handleSubtract = (): void => {
        setOutput(input1 - input2)
    }

    const handleDivide = (): void => {
        setOutput(input1 / input2)
    }

    const handleMultiply = (): void => {
        setOutput(input1 * input2)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                <button onClick={() => handleAdd()}>+</button>
                <button onClick={() => handleSubtract()}>-</button>
                <button onClick={() => handleMultiply()}>*</button>
                <button onClick={() => handleDivide()}>/</button>
            </div>
            <div style={{ marginTop: '10px' }}>
                Result:  {output}
            </div>
        </div>
    )

}

function App() {
    const [input1, setInput1] = useState(0)
    const [input2, setInput2] = useState(0)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '10px' }}>
            <label style={{
                fontSize: '20px', fontWeight: 'bold'
            }}>Calculator</label>
            <label>Val1</label>
            <input onChange={(e) => setInput1(Number(e.target.value))} value={input1} />
            <label>Val2</label>
            <input onChange={(e) => setInput2(Number(e.target.value))} value={input2} />
            <Calculator input1={input1} input2={input2} />
        </div>
    )
}

export default App