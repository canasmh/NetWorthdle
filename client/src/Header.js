import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import "./Header.css";


function Header() {
    return (
        <div className="header">
            <span className="left"><FontAwesomeIcon icon="fa-solid fa-circle-info" /></span>
            <h1>
                <span className="green">Net</span><span className="gold">W<FontAwesomeIcon icon="fa-solid fa-circle-dollar" />rth</span>dle</h1><span className="right"><FontAwesomeIcon icon="fa-solid fa-chart-simple" /></span>
        </div>
    )
}

export default Header