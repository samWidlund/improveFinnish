import { use, useState } from 'react'
import './App.css'


const getRandomItem = (inputWord) => {
  const randomIndex = Math.floor(Math.random() * inputWord.length);
  return inputWord[randomIndex];
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
  const sweWords = ['hej', 'bra', 'tack']

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