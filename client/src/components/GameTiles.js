import React from "react";
import Form from "react-bootstrap/Form";
import { todaysDate } from "../Dates";
import { useSelector } from "react-redux";
import "./GameTiles.css";


function GameTiles(props) {
        const theme = useSelector((state) => state.theme.theme);

        var guess = !props.currentGuess ? props.guess : props.currentGuess;

        if (guess) {
            if (guess.length === 1) {
                guess += "  "
            } else if (guess.length === 2) {
                guess += " "
            }
        } else {
            guess = "   "
        }

        function changeUnit(event) {
            const newMoneyUnit = event.target.value;

            props.setMoneyUnit(newMoneyUnit)
        }
        var classes = ""
        if (props.classes.length === 0) {
            classes = "    "
        } else {
            classes = props.classes
            console.log(`the classes are: ${classes}`)
        }

        const borderStyle = {
            border: `1px solid ${theme.secondary}`
        }

        const guessClass = {
            correct: {
                backgroundColor: theme.correct,
                color: theme.correctText
            },
            present: {
                backgroundColor: theme.present,
                color: theme.presentText
            },
            absent: {
                backgroundColor: theme.absent,
                color: theme.absentText
            }
        }

        return (
            <Form>                                                                                                                                                                       
                <Form.Control style={{...guessClass[classes[0]], ...borderStyle}} type="text" value={!guess ? "" : guess[0]} placeholder="" readOnly disabled={props.disable} />                                                                                                                                                              
                <Form.Control style={{...guessClass[classes[1]], ...borderStyle}} type="text" value={!guess ? "" : guess[1]} placeholder="" readOnly disabled={props.disable} />  
                <Form.Control style={{...guessClass[classes[2]], ...borderStyle}} type="text" value={!guess ? "" : guess[2]} placeholder="" readOnly disabled={props.disable} />
                <Form.Select  style={{...guessClass[classes[3]], ...borderStyle}} aria-label="Default select example" onChange={changeUnit} readOnly disabled={props.disable}>
                    {localStorage.lastPlayed === todaysDate()  && <option>{props.guess ? props.guess.slice(4, 5).toUpperCase() + props.guess.slice(5) : ""}</option>}
                    <option value=""></option>
                    <option value="thousand">Thousand</option>                                                                                                                           
                    <option value="million">Million</option>                                                                                                                             
                    <option value="billion">Billion</option>                                                                                                                                 
                </Form.Select>                                                                                                                                                           
            </Form>)
    }

export default GameTiles
