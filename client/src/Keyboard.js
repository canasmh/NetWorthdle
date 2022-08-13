import React from "react";
import { todaysDate } from './Dates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Keyboard.css";

function Keyboard(props) {

    var gamePlayed;

    if (localStorage.lastPlayed === todaysDate()) {
        gamePlayed = true;
    } else {
        gamePlayed = false;
    }

    console.log(gamePlayed)

    const [keyClass, setKeyClass] = React.useState(["", "", "", "", "", "", "", "", "", ""]);

    function updateKeys(keyClasses) {
        setKeyClass(keyClasses);
    }

    function setWon(gameStatus) {
        props.won(gameStatus)
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
        const id = event.target.id
        const parentId = event.target.parentElement.id
        const currentGuess = props.currentGuess
        const unit = props.moneyUnit
        const enterButton = <path fill="currentColor" d="M137.4 438.6l-128-128c-12.5-12.5-12.5-32.75 0-45.25l128-127.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 256H432C440.8 256 448 248.8 448 240V64c0-17.67 14.31-32 32-32s32 14.33 32 32v176c0 44.11-35.88 80-80 80H109.3l73.38 73.37C188.9 399.6 192 407.8 192 415.1s-3.125 16.38-9.375 22.62C170.1 451.1 149.9 451.1 137.4 438.6z"></path>
        const deleteButton = <path fill="currentColor" d="M0 128C0 92.65 28.65 64 64 64H370.7C387.7 64 403.1 70.74 416 82.75L566.6 233.4C572.6 239.4 576 247.5 576 256C576 264.5 572.6 272.6 566.6 278.6L416 429.3C403.1 441.3 387.7 448 370.7 448H64C28.65 448 0 419.3 0 384V128zM143 208.1L190.1 255.1L143 303C133.7 312.4 133.7 327.6 143 336.1C152.4 346.3 167.6 346.3 176.1 336.1L223.1 289.9L271 336.1C280.4 346.3 295.6 346.3 304.1 336.1C314.3 327.6 314.3 312.4 304.1 303L257.9 255.1L304.1 208.1C314.3 199.6 314.3 184.4 304.1 175C295.6 165.7 280.4 165.7 271 175L223.1 222.1L176.1 175C167.6 165.7 152.4 165.7 143 175C133.7 184.4 133.7 199.6 143 208.1V208.1z"></path>

        if (id === "backspace" || parentId === "backspace" || event.target === deleteButton) {
            if (currentGuess.length > 0) {
                props.setCurrentGuess(currentGuess.slice(0, currentGuess.length - 1))
            }

        } else if (id === "enter" || parentId === "enter" || event.target === enterButton) {
            if (currentGuess.length < 3) {
                console.log("Not enough Entries")
            } else {
                // Check the guess
                checkGuess(currentGuess + " " + unit)

                // Add Guess to Guess list
                props.setGuesses(guesses => [...guesses, currentGuess + " " + unit])

                // Reset Guess
                props.setCurrentGuess("")
                props.setMoneyUnit("thousand")
            }
        } else if (id === "") {
            console.log(`Unaccounted ID: ${id}\nParent ID: ${parentId}`)
            console.log(event.target)

        } else {
            if (currentGuess.length < 3) {
                props.setCurrentGuess(oldGuess => oldGuess + id[1])
            }

        }

    }
    
    return (
        <div className="keyboard">                                                                                                                                                                          
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
                <button className="keyboard-button" id="backspace" onClick={!gamePlayed ? updateCurrentGuess : null}><FontAwesomeIcon icon="fa-solid fa-delete-right" /></button>                                                                  
                <button className={"keyboard-button " + keyClass[0]} id="n0" onClick={!gamePlayed ? updateCurrentGuess : null}>0</button>                                                                                                  
                <button className="keyboard-button" id="enter" onClick={!gamePlayed ? updateCurrentGuess : null}><FontAwesomeIcon icon="fa-solid fa-arrow-turn-down-left" /></button>                                                                   
            </div>                                                                                                                                                                                          
        </div>
    )
}

export default Keyboard