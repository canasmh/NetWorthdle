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

  // TODO: Show stats if the game was already played that day.
  // TODO: Know which guess the user won on *if* they won... This is for the bar graph. 
  // TODO: Store game won in local storage. Also need to reset game won for a new day.

  const [gameWon, setGameWon] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [statsShow, setStatsShow] = useState(false);
  const [helpShow, setHelpShow] = useState(false);

  function updatePlayedStatus() {
    setHelpShow(true);
    localStorage.setItem("userHasPlayed", "true");
    localStorage.setItem("gameWon", "false");
    localStorage.setItem("gamesPlayed", "0");
    localStorage.setItem("firstGuess", "0");
    localStorage.setItem("secondGuess", "0");
    localStorage.setItem("thirdGuess", "0");
    localStorage.setItem("fourthGuess", "0");
    localStorage.setItem("fifthGuess", "0");
    localStorage.setItem("maxStreak", "0");
    localStorage.setItem("currentStreak", "0");
  }

  if (!localStorage.userHasPlayed) {
    // If first time playing, show game instructions
    setTimeout(updatePlayedStatus, 800)
  }

  if (guesses.length === 5) {
    setGameOver(true)
  }

  function gameOverShowStats() {
    localStorage.setItem("gamesPlayed", String(parseInt(localStorage.gamesPlayed) + 1))
    setStatsShow(true);
    if (gameWon) {
      setGameWon(false);
    }

    if (gameOver) {
      setGameOver(false)
    }
  }

  if (gameWon || gameOver) {
    if (localStorage.lastPlayed === yesterdaysDate() && localStorage.lastPlayed !== todaysDate()) {
      localStorage.setItem("currentStreak", String(parseInt(localStorage.currentStreak) + 1))
    } else {
      localStorage.setItem("currentStreak", "1")
    }
    localStorage.setItem("lastPlayed", todaysDate())
    localStorage.setItem("guesses", guesses)
    
    if (!statsShow) {
      setTimeout(gameOverShowStats, 800)
    }
  }

  if (parseInt(localStorage.currentStreak) > parseInt(localStorage.maxStreak)) {
    localStorage.setItem("maxStreak", localStorage.currentStreak)
  }

  return (
    <div className="app">
      <GameStats show={statsShow} onHide={() => setStatsShow(false)} netWorth={celebData.net_worth} name={celebData.name}/>
      <GameHelp show={helpShow} onHide={() => setHelpShow(false)}  />
      <Header showStats={setStatsShow} showHelp={setHelpShow}/>
      <Celeb celebData={celebData} />
      <GameBoard guesses={guesses} currentGuess={currentGuess} setMoneyUnit={setMoneyUnit} tileClasses={tileClasses}/>
      <Keyboard moneyUnit={moneyUnit} nGuesses={guesses.length} currentGuess={currentGuess} setGuesses={setGuesses} setCurrentGuess={setCurrentGuess} setTileClasses={setTileClasses} netWorth={celebData.net_worth} setMoneyUnit={setMoneyUnit} won={setGameWon}/>
    </div>
  );
}

export default App;
