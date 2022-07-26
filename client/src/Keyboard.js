import React from "react";
import "./Keyboard.css"

function Keyboard() {
    return (
        <div className="keyboard">                                                                                                                                                                          
            <div className="keyboard-row">                                                                                                                                                                  
                <button className="keyboard-button" id="n1">1</button>                                                                                                  
                <button className="keyboard-button" id="n2">2</button>                                                                                                  
                <button className="keyboard-button" id="n3">3</button>                                                                                                  
            </div>                                                                                                                                                                                          
            <div className="keyboard-row">                                                                                                                                                                     
                <button className="keyboard-button" id="n4">4</button>                                                                                                  
                <button className="keyboard-button" id="n5">5</button>                                                                                                  
                <button className="keyboard-button" id="n6">6</button>                                                                                                  
            </div>                                                                                                                                                                                          
            <div className="keyboard-row">                                                                                                                                                                     
                <button className="keyboard-button" id="n7">7</button>                                                                                                  
                <button className="keyboard-button" id="n8">8</button>                                                                                                  
                <button className="keyboard-button" id="n9">9</button>                                                                                                  
            </div>                                                                                                                                                                                          
            <div className="keyboard-row">                                                                                                                                                                     
                <button className="keyboard-button" id="backspace">Del</button>                                                                  
                <button className="keyboard-button" id="n0">0</button>                                                                                                  
                <button className="keyboard-button" id="enter">Ent</button>                                                                   
            </div>                                                                                                                                                                                          
        </div>
    )
}

export default Keyboard