import React from "react";
import Form from "react-bootstrap/Form";
import "./GameTiles.css"


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

        return (
            <Form>                                                                                                                                                                       
                <Form.Control bsPrefix="" type="text" value={!guess ? "" : guess[0]} placeholder="" readOnly />                                                                                                                                                                           
                <Form.Control bsPrefix="" type="text" value={!guess ? "" : guess[1]} placeholder="" readOnly />                                                                                                                                                                           
                <Form.Control bsPrefix="" type="text" value={!guess ? "" : guess[2]} placeholder="" readOnly />                                                                                                                                                                           
                <Form.Select bsPrefix="" aria-label="Default select example" onChange={changeUnit} readOnly disabled={props.disable}>                    
                        <option value="thousand">Thousand</option>                                                                                                                           
                        <option value="million">Million</option>                                                                                                                             
                        <option value="billion">Billion</option>                                                                                                                                 
                </Form.Select>                                                                                                                                                           
            </Form>)
    }

export default GameTiles
