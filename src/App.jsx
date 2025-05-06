import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [inputValue, setInputValue] = useState('')
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setName(inputValue)}>
          setName
        </button>

        <input type="text" onChange={(e) => setInputValue(e.target.value)}></input>
        <p>
          name is: {name} 
        </p>
      </div>
    </>
  )
}

export default App
