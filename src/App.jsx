import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [data, setData] = useState([]);

  // fetch db data
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/data`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // fetch input to lower case
  let inputLowerCase = '';
  const fetchInput = () => {
    inputLowerCase = inputValue.toLowerCase();
    setInput(inputLowerCase);
  };

  const compareInput = () => {
    const answer = data.find((item) => item.swedish_word === input)?.finnish_word.toLowerCase();
    setCorrectAnswer(answer || 'nonMatchingWord');
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

        <div id="words">
        <div>
          {data.map((row, i) => {
            console.log(row);
            return (
              <div key={i}>
                {row.swedish_word} - {row.finnish_word}
              </div>
            );
          })}
        </div>
        </div>
      </div>

      <button onClick={fetchInput}>Input svenska</button>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} placeholder='svensktOrd'/>
      <p>Input svenska: {input}</p>
      <p>Output finska: {correctAnswer}</p>
    </div>
  );
}

export default App