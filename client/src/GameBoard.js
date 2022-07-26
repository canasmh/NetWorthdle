import GameTiles from "./GameTiles";
import "./GameBoard.css"

function GameBoard() {
    return (
        <div className="game-board">
            <GameTiles />
            <GameTiles />
            <GameTiles />
            <GameTiles />
            <GameTiles />
        </div>
    )
}

export default GameBoard;