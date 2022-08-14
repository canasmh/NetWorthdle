import React from "react";
import Form from "react-bootstrap/Form";
import { todaysDate } from "./Dates";
import "./GameTiles.css";


function GameTiles(props) {

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
        }

        return (
            <Form>                                                                                                                                                                       
                <Form.Control bsPrefix={classes[0]} type="text" value={!guess ? "" : guess[0]} placeholder="" readOnly disabled={props.disable} />                                                                                                                                                              
                <Form.Control bsPrefix={classes[1]} type="text" value={!guess ? "" : guess[1]} placeholder="" readOnly disabled={props.disable} />  
                <Form.Control bsPrefix={classes[2]} type="text" value={!guess ? "" : guess[2]} placeholder="" readOnly disabled={props.disable} />
                <Form.Select bsPrefix={classes[3]} aria-label="Default select example" onChange={changeUnit} readOnly disabled={props.disable}>
                    {localStorage.lastPlayed === todaysDate()  && <option>{props.guess ? props.guess.slice(4, 5).toUpperCase() + props.guess.slice(5) : ""}</option>}
                    <option value="thousand">Thousand</option>                                                                                                                           
                    <option value="million">Million</option>                                                                                                                             
                    <option value="billion">Billion</option>                                                                                                                                 
                </Form.Select>                                                                                                                                                           
            </Form>)
    }

export default GameTiles
