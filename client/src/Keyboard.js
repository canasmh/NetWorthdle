import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Keyboard.css";

function Keyboard(props) {

    function updateCurrentGuess(event) {
        const id = event.target.id
        const parentId = event.target.parentElement.id
        const currentGuess = props.currentGuess
        const unit = props.moneyUnit

        if (id === "backspace" || parentId === "backspace") {
            if (currentGuess.length > 0) {
                props.setCurrentGuess(currentGuess.slice(0, currentGuess.length - 1))
            }

        } else if (id === "enter" || parentId === "enter") {
            if (currentGuess.length < 3) {
                console.log("Not enough Entries")
            } else {
                // Still need to check the guess

                // Add Guess to Guess list
                props.setGuesses(guesses => [...guesses, currentGuess + " " + unit])

                // Reset Guess
                props.setCurrentGuess("")
            }
        } else if (id === "") {
            console.log("Unaccounted ID")

        } else {
            if (currentGuess.length < 3) {
                props.setCurrentGuess(oldGuess => oldGuess + id[1])
            }

        }

    }
    
    return (
        <div className="keyboard">                                                                                                                                                                          
            <div className="keyboard-row">                                                                                                                                                                  
                <button className="keyboard-button" id="n1" onClick={updateCurrentGuess}>1</button>                                                                                                  
                <button className="keyboard-button" id="n2" onClick={updateCurrentGuess}>2</button>                                                                                                  
                <button className="keyboard-button" id="n3" onClick={updateCurrentGuess}>3</button>                                                                                                  
            </div>                                                                                                                                                                                          
            <div className="keyboard-row">                                                                                                                                                                     
                <button className="keyboard-button" id="n4" onClick={updateCurrentGuess}>4</button>                                                                                                  
                <button className="keyboard-button" id="n5" onClick={updateCurrentGuess}>5</button>                                                                                                  
                <button className="keyboard-button" id="n6" onClick={updateCurrentGuess}>6</button>                                                                                                  
            </div>                                                                                                                                                                                          
            <div className="keyboard-row">                                                                                                                                                                     
                <button className="keyboard-button" id="n7" onClick={updateCurrentGuess}>7</button>                                                                                                  
                <button className="keyboard-button" id="n8" onClick={updateCurrentGuess}>8</button>                                                                                                  
                <button className="keyboard-button" id="n9" onClick={updateCurrentGuess}>9</button>                                                                                                  
            </div>                                                                                                                                                                                          
            <div className="keyboard-row">                                                                                                                                                                     
                <button className="keyboard-button" id="backspace" onClick={updateCurrentGuess}><FontAwesomeIcon icon="fa-solid fa-delete-right" /></button>                                                                  
                <button className="keyboard-button" id="n0" onClick={updateCurrentGuess}>0</button>                                                                                                  
                <button className="keyboard-button" id="enter" onClick={updateCurrentGuess}><FontAwesomeIcon icon="fa-solid fa-arrow-turn-down-left" /></button>                                                                   
            </div>                                                                                                                                                                                          
        </div>
    )
}

export default Keyboard