import GameTiles from "./GameTiles";
import "./GameBoard.css"
import { todaysDate } from "./Dates";

function GameBoard(props) {

    if (localStorage.guesses) {
        if (localStorage.guesses.length === 0) {
            var guesses = props.guesses
        } else {
            var guesses = localStorage.guesses.split(",")
        }
    } else {
        var guesses = props.guesses
    }
    // const guesses = localStorage.guesses.length === 0 ? props.guesses : localStorage.guesses.split(",");
    const currentGuess = props.currentGuess;

    const gameOver = localStorage.lastPlayed === todaysDate();

    return (
        <div className="game-board">
            <GameTiles guess={guesses.length > 0 ? guesses[0] : null} currentGuess={guesses.length === 0 ? currentGuess : null} setMoneyUnit={props.setMoneyUnit} disable={guesses.length > 0 || gameOver ? true : false} classes={props.tileClasses.firstRow} />
            <GameTiles guess={guesses.length > 1 ? guesses[1] : null} currentGuess={guesses.length === 1 ? currentGuess : null} setMoneyUnit={props.setMoneyUnit} disable={guesses.length > 1 || gameOver ? true : false} classes={props.tileClasses.secondRow} />
            <GameTiles guess={guesses.length > 2 ? guesses[2] : null} currentGuess={guesses.length === 2 ? currentGuess : null} setMoneyUnit={props.setMoneyUnit} disable={guesses.length > 2 || gameOver ? true : false} classes={props.tileClasses.thirdRow} />
            <GameTiles guess={guesses.length > 3 ? guesses[3] : null} currentGuess={guesses.length === 3 ? currentGuess : null} setMoneyUnit={props.setMoneyUnit} disable={guesses.length > 3 || gameOver ? true : false} classes={props.tileClasses.fourthRow} />
            <GameTiles guess={guesses.length > 4 ? guesses[4] : null} currentGuess={guesses.length === 4 ? currentGuess : null} setMoneyUnit={props.setMoneyUnit} disable={guesses.length > 4 || gameOver ? true : false} classes={props.tileClasses.fifthRow} />
        </div>
    )
}

export default GameBoard;