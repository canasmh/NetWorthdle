import GameTiles from "./GameTiles";
import "./GameBoard.css"

function GameBoard(props) {

    const guesses = props.guesses;

    return (
        <div className="game-board">
            <GameTiles guess={guesses.length > 1 ? guesses[0] : null} />
            <GameTiles guess={guesses.length > 2 ? guesses[1] : null} />
            <GameTiles guess={guesses.length > 3 ? guesses[2] : null} />
            <GameTiles guess={guesses.length > 4 ? guesses[3] : null} />
            <GameTiles guess={guesses.length > 5 ? guesses[4] : null} />
        </div>
    )
}

export default GameBoard;