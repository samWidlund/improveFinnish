import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const getRandomItem = (finWords) => {
  const randomIndex = Math.floor(Math.random() * finWords.length);
  return finWords[randomIndex];
}

function compareInput(input) {
  const inputdata = input.toString().toLowerCase();

  if (inputdata == "test")
  {
    return("correct");
  }
}

function App() {
  const [input, setInput] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [randomItem, setRandomItem] = useState('')

  const finWords = ['moi', 'hyvä', 'kiitos'];

  const handleClick = () => {
    setRandomItem(getRandomItem(finWords));
  };

  return (
    <>
  <div id="container">

      <div id="mainHeader">
        <h1>moi!</h1>
      </div>
      <button onClick={handleClick}>
        Slumpa ord
      </button>
      <p>
        Slumpat ord: {randomItem}
      </p>

      <button onClick={() => setInput(inputValue)}>
          setName
      </button>
      <div>
        <input type="text" onChange={(e) => setInputValue(e.target.value)}></input>
        <p>
          input is: {input} 
        </p>
        <p>
          result: {compareInput(input)}
        </p>
      </div>

    </div>
    </>
  )
}

export default App