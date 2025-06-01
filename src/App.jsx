import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import FlipCard from './FlipCard.jsx';
import LoginPage from './LoginPage.jsx';
import MoiIntro from './MoiIntro.jsx';

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
  const [showLogin, setShowLogin] = useState(true);
  const [showIntro, setShowIntro] = useState(true);

  // handle login state
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    if (loginStatus === 'true') {
      setShowLogin(false);
    }
  }, []);

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
  }

  // fetch input on enter key
  function handleKeyDown(e) {
    if (e.key === "Enter") {
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

  const handleGuestClick = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem('isLoggedIn', 'true');
      setShowLogin(false);
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setShowLogin(true);
  };

  // compare input when input changes
  useEffect(() => {
    if (input) {
      compareInput();
    }
  }, [input]);

  // intro page
  if (showIntro) {
    return <MoiIntro setShowIntro={setShowIntro} timeOutS={1.6}/>;
  }
  
  // login page
  if (showLogin) {
    return <LoginPage setShowLogin={setShowLogin} onGuestClick={handleGuestClick} />;
  }

  // if backend/database not loaded, return loading screen
  if (loading) {
    return (
      <div className="flex flex-col h-screen justify-center items-center space-y-4 bg-background dark:bg-background-dark">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-600"></div>
        <span className="text-lg font-semibold text-label dark:text-label-dark">
          loading database<span className="typewriter-dots ml-1" />
        </span>
      </div>
    );
  }
  if (error) {
    return <div className="error text-error">{error}</div>;
  }

  return (
    <div id="container" className="font-chewy bg-background dark:bg-background-dark min-h-screen">
      {/* logout button */}
      <div className="absolute top-4 right-4">
        <button 
          onClick={handleLogout}
          className="btn btn-secondary px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg shadow-md border-none">
          Logout
        </button>
      </div>

      <div id="centerContainer" className="flex flex-col items-center justify-center mx-auto h-screen lg:py-10">
        <div className="flex flex-col items-start border-2 border-cardborder-dark p-8 rounded-lg bg-card dark:bg-card-dark gap-2 shadow-lg">
          <FlipCard front={randomSweWord} back={correctFinAnswer} isFlipped={isFlipped} />
          
          {/* buttons */}
          <button className="btn btn-primary" onClick={randomWord}>
            <p>Randomize word</p>
          </button>
          <button className="btn btn-primary" onClick={() => setIsFlipped(f => !f)}>
            <p>Flip card</p>
          </button>

          {/* input answer */}
          <div>
            <input
              className="input input-bordered w-full max-w-xs bg-inputbg dark:bg-inputbg-dark border-inputborder dark:border-inputborder-dark text-inputtext dark:text-inputtext-dark"
              type="text"
              value={enteredText}
              onChange={(e) => {
                setInputValue(e.target.value);
                setEnteredText(e.target.value);
              }}
              placeholder="finnishInput"
              onKeyDown={handleKeyDown}
            />
          </div>

          {/* input feedback */}
          <p className="text-label dark:text-label-dark">Input: {input}</p>
          {isCorrect === true && <p className="text-success">Correct!</p>}
          {isCorrect === false && <p className="text-error">Incorrect!</p>}
        </div>
      </div>
    </div>
  );
}

export default App