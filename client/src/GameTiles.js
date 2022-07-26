import React from "react";
import Form from "react-bootstrap/Form";
import "./GameTiles.css"


function GameTiles() {
        return (
            <Form>                                                                                                                                                                       
                <Form.Control bsPrefix="" type="text" value="" placeholder="" readOnly />                                                                                                                                                                           
                <Form.Control bsPrefix="" type="text" value="" placeholder="" readOnly />                                                                                                                                                                           
                <Form.Control bsPrefix="" type="text" value="" placeholder="" readOnly />                                                                                                                                                                           
                <Form.Select bsPrefix="" aria-label="Default select example" readOnly>                    
                        <option value="thousand">Thousand</option>                                                                                                                           
                        <option value="million">Million</option>                                                                                                                             
                        <option value="billion">Billion</option>                                                                                                                                 
                </Form.Select>                                                                                                                                                           
            </Form>)
    }

export default GameTiles
