import './App.css';
import Celeb from './Celeb';
import GameBoard from './GameBoard';
import Header from './Header';
import Keyboard from './Keyboard';

import { useState } from 'react';

function App() {

  const [celebData, setCelebData] = useState({
    "name": "Manuel Hernando Canas",
    "occupation": ["developer", "astrophysicist", "music listener"],
    "net_worth": "999 million",
    "birthday": "June 26, 1996",
    "nationality": "Colombia"
  })

  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [moneyUnit, setMoneyUnit] = useState("thousand");
  console.log(currentGuess, guesses)

  return (
    <div className="app">
      <Header />
      <Celeb celebData={celebData} />
      <GameBoard guesses={guesses} currentGuess={currentGuess} setMoneyUnit={setMoneyUnit}/>
      <Keyboard moneyUnit={moneyUnit} currentGuess={currentGuess} setGuesses={setGuesses} setCurrentGuess={setCurrentGuess} />
    </div>
  );
}

export default App;
