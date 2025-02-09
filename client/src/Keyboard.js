import React from "react";
import { todaysDate } from './Dates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Keyboard.css";

function Keyboard(props) {

    // TODO: Make separate functions for the enter and delete buttons

    var gamePlayed;

    if (localStorage.lastPlayed === todaysDate()) {
        gamePlayed = true;
    } else {
        gamePlayed = false;
    }

    const [keyClass, setKeyClass] = React.useState(["", "", "", "", "", "", "", "", "", ""]);

    function updateKeys(keyClasses) {
        setKeyClass(keyClasses);
    }

    function setWon(gameStatus) {
        props.won(gameStatus);
    }

    function updateTiles(tileClasses) {
        if (props.nGuesses === 0) {
            props.setTileClasses((oldClasses) => {return {...oldClasses, firstRow: tileClasses}});
        } else if (props.nGuesses === 1) {
            props.setTileClasses((oldClasses) => {return {...oldClasses, secondRow: tileClasses}});
        } else if (props.nGuesses === 2) {
            props.setTileClasses((oldClasses) => {return {...oldClasses, thirdRow: tileClasses}});
        } else if (props.nGuesses === 3) {
            props.setTileClasses((oldClasses) => {return {...oldClasses, fourthRow: tileClasses}});
        } else {
            props.setTileClasses((oldClasses) => {return {...oldClasses, fifthRow: tileClasses}});
        }
    }

    function checkGuess(guess) {
        const netWorth = props.netWorth;
        var magnitude = netWorth.split(" ")[0];
        const unit = netWorth.split(" ")[1];
        var tileClasses = [];
        var keyClasses = keyClass;
        

        if (magnitude.length === 1) {
            magnitude = "00" + magnitude;
        } else if (magnitude.length === 2) {
            magnitude = "0" + magnitude;
        }

        for (let i=0; i < magnitude.length - 1; i++) {
            for (let j=0; j < magnitude.length; j++) {
                var index = parseInt(guess[j]);
                if (i === 0) {
                    if (magnitude[j] === guess[j]) {
                        tileClasses.push("correct");
                        keyClasses[index] = "correct";
                        // Remove character
                        magnitude = magnitude.slice(0, j) + "z" + magnitude.slice(j + 1);
                    } else if (magnitude.includes(guess[j])) {
                        tileClasses.push("present");

                        if (keyClasses[index] !== "correct") {
                            keyClasses[index] = "present";
                        }

                    } else {
                        tileClasses.push("absent");
                        if (keyClasses[index] !== "correct" && keyClasses[index] !== "present") {
                            keyClasses[index] = "absent";
                        }
                    }
                } else {
                    if (magnitude.includes(guess[j])) {
                        if (tileClasses[j] === "present") {
                            magnitude = magnitude.replace(guess[j], "z")
                        }

                    } else {
                        if (tileClasses[j] !== "correct") {
                            tileClasses[j] = "absent"
                        }
                    }
                }
            }
        }

        if (guess.includes(unit)) {
            tileClasses.push("correct");
        } else {
            tileClasses.push("absent");
        }

        updateTiles(tileClasses);
        updateKeys(keyClasses);

        var gameWon = true
        for (let k=0; k < tileClasses.length; k++) {
            if (tileClasses[k] !== "correct") {
                gameWon = false
            }
        }
        setWon(gameWon)
    }

    function updateCurrentGuess(event) {
        const id = event.target.id;
        const currentGuess = props.currentGuess;

        if (currentGuess.length < 3) {
            props.setCurrentGuess(oldGuess => oldGuess + id[1]);
        }
    }

    function deleteGuessEntry() {
        const currentGuess = props.currentGuess;
        if (currentGuess.length > 0) {
            props.setCurrentGuess(currentGuess.slice(0, currentGuess.length - 1));
        }
    }

    function enterGuess() {
        const currentGuess = props.currentGuess;
        const unit = props.moneyUnit;

        if (currentGuess.length < 3) {
            console.log("Not enough Entries");
        } else {
            // Check the guess
            checkGuess(currentGuess + " " + unit);

            // Add Guess to Guess list
            props.setGuesses(guesses => [...guesses, currentGuess + " " + unit]);

            // Reset Guess
            props.setCurrentGuess("");
            props.setMoneyUnit("thousand");
        }

    }
    
    return (
        <section className="keyboard">                                                                                                                                                                          
            <div className="keyboard-row">                                                                                                                                                                  
                <button className={"keyboard-button " + keyClass[1]} id="n1" onClick={!gamePlayed ? updateCurrentGuess : null}>1</button>                                                                                                  
                <button className={"keyboard-button " + keyClass[2]} id="n2" onClick={!gamePlayed ? updateCurrentGuess : null}>2</button>                                                                                                  
                <button className={"keyboard-button " + keyClass[3]} id="n3" onClick={!gamePlayed ? updateCurrentGuess : null}>3</button>                                                                                                  
            </div>                                                                                                                                                                                          
            <div className="keyboard-row">                                                                                                                                                                     
                <button className={"keyboard-button " + keyClass[4]} id="n4" onClick={!gamePlayed ? updateCurrentGuess : null}>4</button>                                                                                                  
                <button className={"keyboard-button " + keyClass[5]} id="n5" onClick={!gamePlayed ? updateCurrentGuess : null}>5</button>                                                                                                  
                <button className={"keyboard-button " + keyClass[6]} id="n6" onClick={!gamePlayed ? updateCurrentGuess : null}>6</button>                                                                                                  
            </div>                                                                                                                                                                                          
            <div className="keyboard-row">                                                                                                                                                                     
                <button className={"keyboard-button " + keyClass[7]} id="n7" onClick={!gamePlayed ? updateCurrentGuess : null}>7</button>                                                                                                  
                <button className={"keyboard-button " + keyClass[8]} id="n8" onClick={!gamePlayed ? updateCurrentGuess : null}>8</button>                                                                                                  
                <button className={"keyboard-button " + keyClass[9]} id="n9" onClick={!gamePlayed ? updateCurrentGuess : null}>9</button>                                                                                                  
            </div>                                                                                                                                                                                          
            <div className="keyboard-row">                                                                                                                                                                     
                <button className="keyboard-button" id="backspace" onClick={!gamePlayed ? deleteGuessEntry : null}><FontAwesomeIcon icon="fa-solid fa-delete-right" /></button>                                                                  
                <button className={"keyboard-button " + keyClass[0]} id="n0" onClick={!gamePlayed ? updateCurrentGuess : null}>0</button>                                                                                                  
                <button className="keyboard-button" id="enter" onClick={!gamePlayed ? enterGuess : null}><FontAwesomeIcon icon="fa-solid fa-arrow-turn-down-left" /></button>                                                                   
            </div>                                                                                                                                                                                          
        </section>
    )
}

export default Keyboard