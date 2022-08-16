import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Header.css";

function Header(props) {
    
    return (
        <div className="header">
            
            
            <span className="left"><FontAwesomeIcon icon="fa-solid fa-circle-info" onClick={() => props.showHelp(true)}/></span>
            <h1>
                <span className="green">Net</span><span className="gold">W<FontAwesomeIcon icon="fa-solid fa-circle-dollar" />rth</span>dle
            </h1>
            <span className="right"><FontAwesomeIcon icon="fa-solid fa-chart-simple" onClick={() => props.showStats(true)}/></span>
        </div>
    )
}

export default Header