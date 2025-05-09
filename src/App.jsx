import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function compareInput(input) {
  if (input == "test")
  {
    return("correct");
  }
}

function App() {
  const [name, setName] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [returnValue , setReturnValue] = useState('')

  return (
    <>
    <div id="container">
      <div id="mainHeader">
        <h1>moi!</h1>
      </div>
      
      <div>
      <button onClick={() => setName(inputValue)}>
        setName
      </button>

      <button id="testing" onClick={compareInput(name)}>
        click
      </button>
      <p>
        is test true: {compareInput(name)}
      </p>


      <input type="text" onChange={(e) => setInputValue(e.target.value)}></input>
      <p>
        name is: {name} 
      </p>
      </div>
    </div>
    </>
  )
}

export default App
