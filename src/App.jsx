import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function compareInput(input) {
  const inputdata = input.toString().toLowerCase();

  if (inputdata == "test")
  {
    return("correct");
  }
}

function App() {
  const [name, setName] = useState('')
  const [inputValue, setInputValue] = useState('')

  return (
    <>
    <div id="container">

      <div id="mainHeader">
        <h1>moi!</h1>
      </div>
      <button onClick={() => setName(inputValue)}>
          setName
      </button>
      <div>
        <input type="text" onChange={(e) => setInputValue(e.target.value)}></input>
        <p>
          input is: {name} 
        </p>
        <p>
          result: {compareInput(name)}
        </p>
      </div>

    </div>
    </>
  )
}

export default App