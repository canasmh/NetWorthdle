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
    "net_worth": "690 billion",
    "birthday": "June 26, 1996",
    "nationality": "Colombia"
  })

  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [moneyUnit, setMoneyUnit] = useState("thousand");
  const [tileClasses, setTileClasses] = useState({
    firstRow: [],
    secondRow: [],
    thirdRow: [],
    fourthRow: [],
    fifthRow: []
  });

  return (
    <div className="app">
      <Header />
      <Celeb celebData={celebData} />
      <GameBoard guesses={guesses} currentGuess={currentGuess} setMoneyUnit={setMoneyUnit} tileClasses={tileClasses}/>
      <Keyboard moneyUnit={moneyUnit} nGuesses={guesses.length} currentGuess={currentGuess} setGuesses={setGuesses} setCurrentGuess={setCurrentGuess} setTileClasses={setTileClasses} netWorth={celebData.net_worth} setMoneyUnit={setMoneyUnit}/>
    </div>
  );
}

export default App;
