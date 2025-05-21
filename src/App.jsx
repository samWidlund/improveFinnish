import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [correctFinAnswer, setCorrectFinAnswer] = useState('');
  const [data, setData] = useState([]);
  const [randomSweWord, setRandomSweWord] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [enteredText, setEnteredText] = useState('');

  // fetch db data
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/data`)
      .then((response) => {
        setData(response.data);
        console.log("Successfully fetched data from database!");
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const randomWord = () => { 
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomWord = data[randomIndex];

    setRandomSweWord(randomWord.swedish_word.toLowerCase());
    setCorrectFinAnswer(randomWord.finnish_word.toLowerCase());

    // debugging
    console.log("------------------------");
    console.log("randomWord:", randomWord);
    console.log("randomIndex: " + randomIndex);
    console.log("Random swedish: " + randomWord.swedish_word);
    console.log("Random finnish: " + randomWord.finnish_word);
    console.log("------------------------");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      console.log("Enter!");
      fetchInput();

      setEnteredText("");
    }
  }

  // fetch input to lower case
  let inputLowerCase = '';
  const fetchInput = () => {
    inputLowerCase = inputValue.toLowerCase();
    setInput(inputLowerCase);
  };

  const compareInput = () => {
    if (input === correctFinAnswer) {
      setIsCorrect(true);
    }
    else {
      setIsCorrect(false);
    }
  }

  useEffect(() => {
    if (input) {
      compareInput();
    }
  }, [input]);

  return (
    <div id="container">
      <div id="centerContainer">
        <div id="mainHeader">
          <h1>moi!</h1>
        </div>
          <button onClick={randomWord}>Slumpa ord</button>
          <p>svenska: {randomSweWord}</p>
          <p>Finsk översättning: {correctFinAnswer}</p>

          <input
            type="text"
            value={enteredText}
            onChange={(e) => {
              setInputValue(e.target.value);
              setEnteredText(e.target.value);
            }}
            placeholder='finsktOrd'
            onKeyDown={handleKeyDown}
          />

          <p>Ditt svar: {input}</p>
          {isCorrect === true && <p className='correct'>Rätt svar!</p>}
          {isCorrect === false && <p className='wrong'>Fel svar!</p>}
      </div>
  </div>
  );
}

export default App