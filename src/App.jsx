import { use, useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [randomItem, setRandomItem] = useState('');
  const [translation, setTranslation] = useState('');
  const [correct, setCorrect] = useState(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const finWords = ['moi', 'hyvä', 'kiitos'];
  const sweWords = ['hej', 'bra', 'tack']

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * finWords.length);
    setRandomItem(finWords[randomIndex]);
    setTranslation(sweWords[randomIndex]);
    setCorrect(null); // reset
    setInput(''); // reset
  };

  const compareInput = () => {
    const inputdata = input.toString().toLowerCase();
    if (inputdata === translation.toLowerCase()) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  };

  return (
    <div id="container">
      <div id="mainHeader">
        <h1>moi!</h1>
      </div>

      <h1>Finska Ord</h1>
      <ul>
        {data.map((data) => (
          <li key={data.id}>{data.finnish_word}</li>
        ))}
      </ul>


      {/* <button onClick={handleClick}>
        Slumpa ord
      </button>

      <p>Slumpat ord (finska): {randomItem}</p>

      <input
        type="text"
        placeholder="Skriv översättning"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={compareInput}>Checka svar</button> */}

      {/* {correct === true && <p>✅ Rätt svar!</p>
      {correct === false && <p>❌ Fel svar. Försök igen.</p>} */}
    </div>
  );
}

export default App