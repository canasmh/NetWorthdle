import GameTiles from "./GameTiles";
import "./GameBoard.css"

function GameBoard(props) {

    const guesses = props.guesses;
    const currentGuess = props.currentGuess;

    return (
        <div className="game-board">
            <GameTiles guess={guesses.length > 0 ? guesses[0] : null} currentGuess={guesses.length === 0 ? currentGuess : null} setMoneyUnit={props.setMoneyUnit} disable={guesses.length > 0 ? true : false} />
            <GameTiles guess={guesses.length > 1 ? guesses[1] : null} currentGuess={guesses.length === 1 ? currentGuess : null} setMoneyUnit={props.setMoneyUnit} disable={guesses.length > 1 ? true : false} />
            <GameTiles guess={guesses.length > 2 ? guesses[2] : null} currentGuess={guesses.length === 2 ? currentGuess : null} setMoneyUnit={props.setMoneyUnit} disable={guesses.length > 2 ? true : false} />
            <GameTiles guess={guesses.length > 3 ? guesses[3] : null} currentGuess={guesses.length === 3 ? currentGuess : null} setMoneyUnit={props.setMoneyUnit} disable={guesses.length > 3 ? true : false} />
            <GameTiles guess={guesses.length > 4 ? guesses[4] : null} currentGuess={guesses.length === 4 ? currentGuess : null} setMoneyUnit={props.setMoneyUnit} disable={guesses.length > 4 ? true : false} />
        </div>
    )
}

export default GameBoard;