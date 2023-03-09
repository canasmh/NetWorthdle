import GameTiles from "./GameTiles";
import { todaysDate } from "../Dates";
import { useSelector } from "react-redux";
import styled from "styled-components";

function GameBoard(props) {
    const theme = useSelector((state) => state.theme.theme)
    var guesses;
    if (localStorage.guesses) {
        if (localStorage.guesses.length === 0) {
            guesses = props.guesses
        } else {
            guesses = localStorage.guesses.split(",")
        }
    } else {
        guesses = props.guesses
    }
    // const guesses = localStorage.guesses.length === 0 ? props.guesses : localStorage.guesses.split(",");
    const currentGuess = props.currentGuess;

    const gameOver = localStorage.lastPlayed === todaysDate();

    const Board = styled.div`
     & {
        min-height: 15vh;
        max-height: 25vh;
        overflow-y: scroll;
        margin: 0.6rem auto;
        width: 90%;
        border: 2px solid ${theme.secondary};
        border-radius: 15px;

        @media only screen and (min-width: 600px) {
            width: 60%;
        }

        @media only screen and (min-width: 992px) {
            width: 75%;
            max-height: 28vh;
        }
    }
    `

    {console.log(`the tile classes are ${props.tileClasses}`)}

    return (
        <Board>
            <GameTiles guess={guesses.length > 0 ? guesses[0] : null} currentGuess={guesses.length === 0 ? currentGuess : null} setMoneyUnit={props.setMoneyUnit} disable={guesses.length > 0 || gameOver ? true : false} classes={props.tileClasses.firstRow} />
            <GameTiles guess={guesses.length > 1 ? guesses[1] : null} currentGuess={guesses.length === 1 ? currentGuess : null} setMoneyUnit={props.setMoneyUnit} disable={guesses.length > 1 || gameOver ? true : false} classes={props.tileClasses.secondRow} />
            <GameTiles guess={guesses.length > 2 ? guesses[2] : null} currentGuess={guesses.length === 2 ? currentGuess : null} setMoneyUnit={props.setMoneyUnit} disable={guesses.length > 2 || gameOver ? true : false} classes={props.tileClasses.thirdRow} />
            <GameTiles guess={guesses.length > 3 ? guesses[3] : null} currentGuess={guesses.length === 3 ? currentGuess : null} setMoneyUnit={props.setMoneyUnit} disable={guesses.length > 3 || gameOver ? true : false} classes={props.tileClasses.fourthRow} />
        </Board>
    )
}

export default GameBoard;