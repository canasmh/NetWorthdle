import React from "react";
import Form from "react-bootstrap/Form";
import "./GameTiles.css"


function GameTiles(props) {

        const guess = props.guess;
        
        return (
            <Form>                                                                                                                                                                       
                <Form.Control bsPrefix="" type="text" value={!guess ? "" : guess[0]} placeholder="" readOnly />                                                                                                                                                                           
                <Form.Control bsPrefix="" type="text" value={!guess ? "" : guess[1]}  placeholder="" readOnly />                                                                                                                                                                           
                <Form.Control bsPrefix="" type="text" value={!guess ? "" : guess[2]}  placeholder="" readOnly />                                                                                                                                                                           
                <Form.Select bsPrefix="" aria-label="Default select example" readOnly>                    
                        <option value="thousand">Thousand</option>                                                                                                                           
                        <option value="million">Million</option>                                                                                                                             
                        <option value="billion">Billion</option>                                                                                                                                 
                </Form.Select>                                                                                                                                                           
            </Form>)
    }

export default GameTiles
