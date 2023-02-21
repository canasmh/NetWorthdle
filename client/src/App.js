import {React, useState, useEffect} from 'react';
import './App.css';
import Celeb from './Celeb';
import GameBoard from './GameBoard';
import BuyMeCoffee from './CoffeeModal';
import { todaysDate, yesterdaysDate } from './Dates';
import Header from './Header';
import Keyboard from './Keyboard';
import GameStats from './GameStats';
import GameHelp from './GameHelp';

function App() {

  const [celebData, setCelebData] = useState(null); // initialize celebrity data (an object)
  const [currentGuess, setCurrentGuess] = useState(""); // initialize current guess (i.e., 320 million)
  const [guesses, setGuesses] = useState([]); // list of guesses composed from final 'currentGuess' state
  const [moneyUnit, setMoneyUnit] = useState(""); // money unit (i.e., 'thousand')
  const [gameWon, setGameWon] = useState(false); 
  const [statsShow, setStatsShow] = useState(false); // show stats modal
  const [coffeeShow, setCoffeeShow] = useState(false); // show coffee modal
  const [helpShow, setHelpShow] = useState(false); // show instructions modal
  const [alreadyShowedStats, setAlreadyShowedStats] = useState(false);
  const [gamePlayChecked, setGamePlayChecked] = useState(false);
  const [tileClasses, setTileClasses] = useState({
    firstRow: [],
    secondRow: [],
    thirdRow: [],
    fourthRow: []
  });

  useEffect(() => {
    fetch("/get-celeb-data/" + todaysDate())
      .then((res) => res.json())
      .then((data) => setCelebData(data));
  }, []);


  function updatePlayedStatus() {
    setHelpShow(true);
    localStorage.setItem("userHasPlayed", "true");
    localStorage.setItem("gameWon", "false");
    localStorage.setItem("gamesPlayed", "0");
    localStorage.setItem("maxStreak", "0");
    localStorage.setItem("currentStreak", "0");
    localStorage.setItem("firstGuess", "");
    localStorage.setItem("secondGuess", "");
    localStorage.setItem("thirdGuess", "");
    localStorage.setItem("fourthGuess", "");
    localStorage.setItem("guesses", "");
    localStorage.setItem("wonOnFirst", "0");
    localStorage.setItem("wonOnSecond", "0");
    localStorage.setItem("wonOnThird", "0");
    localStorage.setItem("wonOnFourth", "0");
  }

  if (!gamePlayChecked) {
    if (!localStorage.userHasPlayed) {
      // If first time playing, show game instructions
      setTimeout(updatePlayedStatus, 800)
    } else if (localStorage.lastPlayed !== todaysDate()) {
      localStorage.setItem("gameWon", "false");
      localStorage.setItem("firstGuess", "");
      localStorage.setItem("secondGuess", "");
      localStorage.setItem("thirdGuess", "");
      localStorage.setItem("fourthGuess", "");
      localStorage.setItem("guesses", "");
    } else {
      setTileClasses({
        firstRow: localStorage.firstGuess.length !== 0 ? localStorage.firstGuess.split(",") : [],
        secondRow: localStorage.secondGuess.length !== 0 ? localStorage.secondGuess.split(",")  : [],
        thirdRow: localStorage.thirdGuess.length !== 0 ? localStorage.thirdGuess.split(",")  : [],
        fourthRow: localStorage.fourthGuess.length !== 0 ? localStorage.fourthGuess.split(",")  : []
      });
      setGuesses(localStorage.guesses.split(","))
    setGamePlayChecked(true);
    }
  }

  function setGameWonFalse() {
    setGameWon(false)
  }

  function setGuessesNone() {
    setGuesses([])
  }

  if (gameWon && localStorage.lastPlayed !== todaysDate()) {
    if (localStorage.lastPlayed === yesterdaysDate()) {
      localStorage.setItem("currentStreak", String(parseInt(localStorage.currentStreak) + 1));
    } else {
      localStorage.setItem("currentStreak", "1");
    }

    localStorage.setItem("firstGuess", tileClasses.firstRow);
    localStorage.setItem("secondGuess", tileClasses.secondRow);
    localStorage.setItem("thirdGuess", tileClasses.thirdRow);
    localStorage.setItem("fourthGuess", tileClasses.fourthRow);

    localStorage.setItem("gamesPlayed", String(parseInt(localStorage.gamesPlayed) + 1))
    localStorage.setItem("lastPlayed", todaysDate());
    localStorage.setItem("guesses", guesses)
    localStorage.setItem("gameWon", "true");

    if (guesses.length === 1) {
      localStorage.setItem("wonOnFirst", parseInt(localStorage.wonOnFirst) + 1)
    } else if (guesses.length === 2) {
      localStorage.setItem("wonOnSecond", parseInt(localStorage.wonOnSecond) + 1)
    } else if (guesses.length === 3) {
      localStorage.setItem("wonOnThird", parseInt(localStorage.wonOnThird) + 1)
    } else if (guesses.length === 4) {
      localStorage.setItem("wonOnFourth", parseInt(localStorage.wonOnFourth) + 1)
    } 
    setGameWonFalse();

  } else if (guesses.length === 4 && localStorage.lastPlayed !== todaysDate()) {

    if (localStorage.lastPlayed === yesterdaysDate()) {
      localStorage.setItem("currentStreak", String(parseInt(localStorage.currentStreak) + 1));
    } else {
      localStorage.setItem("currentStreak", "1");
    }

    localStorage.setItem("firstGuess", tileClasses.firstRow);
    localStorage.setItem("secondGuess", tileClasses.secondRow);
    localStorage.setItem("thirdGuess", tileClasses.thirdRow);
    localStorage.setItem("fourthGuess", tileClasses.fourthRow);

    localStorage.setItem("gamesPlayed", String(parseInt(localStorage.gamesPlayed) + 1))
    localStorage.setItem("lastPlayed", todaysDate());
    localStorage.setItem("guesses", guesses)
    setGuessesNone();
  }

  function gameOverShowStats() {
    setStatsShow(true)
  }


  if (!alreadyShowedStats && localStorage.lastPlayed === todaysDate()) {
    setAlreadyShowedStats(true);
    setTimeout(gameOverShowStats, 800);
  }

  if (parseInt(localStorage.currentStreak) > parseInt(localStorage.maxStreak)) {
    localStorage.setItem("maxStreak", localStorage.currentStreak)
  }

  return (
    <div className="app">
      <GameStats show={statsShow} onHide={() => setStatsShow(false)} netWorth={!celebData ? "Loading..." : celebData.net_worth} name={!celebData ? "Loading..." : celebData.name}/>
      <GameHelp show={helpShow} onHide={() => setHelpShow(false)}  />
      <BuyMeCoffee show={coffeeShow} onHide={() => setCoffeeShow(false)} />
      <Header showStats={setStatsShow} showHelp={setHelpShow} showCoffee={setCoffeeShow}/>
      <main>
        <Celeb name={!celebData ? "Loading..." : celebData.name} birthday={!celebData ? "Loading..." : celebData.birthday} occupation={!celebData ? "Loading..." : celebData.occupation} nationality={!celebData ? "Loading..." : celebData.nationality}/>
        <GameBoard guesses={guesses} currentGuess={currentGuess} setMoneyUnit={setMoneyUnit} tileClasses={tileClasses}/>
        <Keyboard moneyUnit={moneyUnit} nGuesses={guesses.length} currentGuess={currentGuess} setGuesses={setGuesses} setCurrentGuess={setCurrentGuess} setTileClasses={setTileClasses} netWorth={!celebData ? "Loading..." : celebData.net_worth} setMoneyUnit={setMoneyUnit} won={setGameWon}/>
      </main>
    </div>
  );
}

export default App;
