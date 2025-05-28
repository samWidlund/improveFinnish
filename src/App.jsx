import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import FlipCard from './FlipCard.jsx';
import LoginPage from './LoginPage.jsx';

function App() {
  const [input, setInput] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [correctFinAnswer, setCorrectFinAnswer] = useState('');
  const [data, setData] = useState([]);
  const [randomSweWord, setRandomSweWord] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [enteredText, setEnteredText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  // fetch db data
  useEffect(() => {
    setLoading(true);
    axios.get(`${import.meta.env.VITE_API_URL}/data`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
        setLoading(false);
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

  // fetch input on enter key
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      console.log("Enter!");
      fetchInput();

      setEnteredText(""); // clear input field
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

  const handleGuestClick = () => {
    // code
  };

  // compare input when input changes
  useEffect(() => {
    if (input) {
      compareInput();
    }
  }, [input]);
 
  // loading screen
  if (loading) {
    return (
    <div className="flex flex-col h-screen justify-center items-center space-y-4">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      <span className="text-lg font-semibold">
        loading database<span className="typewriter-dots ml-1" />
      </span>
    </div>
    );
  }
  if (error) {
    return <div className="error">{error}</div>;
  }
    
    return (
        <div id="container" className='font-chewy'>
          
        <LoginPage onGuestClick={handleGuestClick} />          

          <div id="centerContainer">
            <FlipCard front={randomSweWord} back={correctFinAnswer} isFlipped={isFlipped} />

            {/* buttons */}
            <button className="btn btn-primary" onClick={() => setIsFlipped(f => !f)}>
              <p>flip card</p>
            </button>
            <button className="btn btn-primary"onClick={randomWord}>Slumpa ord</button>

              {/* input answer */}
              <div>
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
              </div>

              {/* input feedback */}
              <p>Ditt svar: {input}</p>
              {isCorrect === true && <p className='correct'>Rätt svar!</p>}
              {isCorrect === false && <p className='wrong'>Fel svar!</p>}
          </div>
      </div>
   );
}

export default App