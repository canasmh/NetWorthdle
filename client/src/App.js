import './App.css';
import Celeb from './Celeb';
import GameBoard from './GameBoard';
import { todaysDate, yesterdaysDate } from './Dates';
import Header from './Header';
import Keyboard from './Keyboard';
import GameStats from './GameStats';
import GameHelp from './GameHelp';


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

  const [gameWon, setGameWon] = useState(false)
  const [statsShow, setStatsShow] = useState(false);
  const [helpShow, setHelpShow] = useState(false);

  function updatePlayedStatus() {
    setHelpShow(true);
    localStorage.setItem("userHasPlayed", "true");
    localStorage.setItem("gamesPlayed", "0")
    localStorage.setItem("firstGuess", "0")
    localStorage.setItem("secondGuess", "0")
    localStorage.setItem("thirdGuess", "0")
    localStorage.setItem("fourthGuess", "0")
    localStorage.setItem("fifthGuess", "0")
    localStorage.setItem("maxStreak", "0")
    localStorage.setItem("currentStreak", "0")
  }

  if (!localStorage.userHasPlayed) {
    // If first time playing, show game instructions
    setTimeout(updatePlayedStatus, 800)
  }

  return (
    <div className="app">
      <GameStats show={statsShow} onHide={() => setStatsShow(false)} netWorth={celebData.net_worth} name={celebData.name}/>
      <GameHelp show={helpShow} onHide={() => setHelpShow(false)}  />
      <Header showStats={setStatsShow} showHelp={setHelpShow}/>
      <Celeb celebData={celebData} />
      <GameBoard guesses={guesses} currentGuess={currentGuess} setMoneyUnit={setMoneyUnit} tileClasses={tileClasses}/>
      <Keyboard moneyUnit={moneyUnit} nGuesses={guesses.length} currentGuess={currentGuess} setGuesses={setGuesses} setCurrentGuess={setCurrentGuess} setTileClasses={setTileClasses} netWorth={celebData.net_worth} setMoneyUnit={setMoneyUnit}/>
    </div>
  );
}

export default App;
