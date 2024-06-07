import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('')
  const [operator, setOperator] = useState(null)
  const [previousValue, setPreviousValue] = useState(null)

  const handleNumberClick = (number) => {
    if (display === '0' || display === 'Error') {
      setDisplay(number.toString())
    } else {
      setDisplay(display + number.toString())
    }
  }

  const handleOperatorClick = (operator) => {
    setOperator(operator)
    setPreviousValue(parseFloat(display))
    setDisplay(display + ' ' + operator + ' ')
  }

  const handleEqualsClick = () => {
    const currentValue = parseFloat(display.split(' ')[2])
    if (isNaN(currentValue)) {
      setDisplay('Error')
      return
    }
    let result = 0
    switch (operator) {
      case '+':
        result = previousValue + currentValue
        break
      case '-':
        result = previousValue - currentValue
        break
      case '*':
        result = previousValue * currentValue
        break
      case '/':
        result = previousValue / currentValue
        break
      default:
        result = currentValue
        break
    }
    setDisplay(result.toString())
    setOperator(null)
    setPreviousValue(null)
  }

  const handleClearClick = () => {
    setDisplay('0')
    setOperator(null)
    setPreviousValue(null)
  }

  return (
    <div className='flex flex-col justify-between h-screen bg-gray-200'>
      <div className='flex justify-center mt-10 items-center'>
        <div className='max-w-md w-full border border-gray-300 p-8 rounded-lg bg-white shadow-lg'>
          <div className='text-3xl font-bold mb-4 text-gray-800'>{display}</div>
          <div className='grid grid-cols-4 gap-4'>
            <button className='btn' onClick={() => handleNumberClick('7')}>7</button>
            <button className='btn' onClick={() => handleNumberClick('8')}>8</button>
            <button className='btn' onClick={() => handleNumberClick('9')}>9</button>
            <button className='btn btn-orange' onClick={() => handleOperatorClick('/')}>/</button>
            <button className='btn' onClick={() => handleNumberClick('4')}>4</button>
            <button className='btn' onClick={() => handleNumberClick('5')}>5</button>
            <button className='btn' onClick={() => handleNumberClick('6')}>6</button>
            <button className='btn btn-orange' onClick={() => handleOperatorClick('*')}>*</button>
            <button className='btn' onClick={() => handleNumberClick('1')}>1</button>
            <button className='btn' onClick={() => handleNumberClick('2')}>2</button>
            <button className='btn' onClick={() => handleNumberClick('3')}>3</button>
            <button className='btn btn-orange' onClick={() => handleOperatorClick('-')}>-</button>
            <button className='btn btn-gray' onClick={() => handleClearClick()}>C</button>
            <button className='btn' onClick={() => handleNumberClick('0')}>0</button>
            <button className='btn btn-orange' onClick={() => handleEqualsClick()}>=</button>
            <button className='btn btn-orange' onClick={() => handleOperatorClick('+')}>+</button>
          </div>
        </div>
      </div>
      <footer className="text-center text-gray-500 text-sm p-4 mb-20">Design and developed by Vishal</footer>
    </div>
  )
}

export default App
