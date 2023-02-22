import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from "react-redux";
import styled from "styled-components";

function Header(props) {

    const theme = useSelector((state) => state.theme.theme)

    const green = {
        color: theme.correct
    }
    
    const gold = {
        color: theme.present
    }

    const Container = styled.header`
        border: 2px solid ${theme.secondary};
        border-left: none;
        border-right: none;
        margin: 10px auto;
        width: 80%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        & svg {
            font-size: 16px;
            cursor: pointer;

            @media only screen and (max-width: 320px) {
                font-size: 10px;
            }

            @media only screen and (min-width: 600px) {
                font-size: 28px;
            }
        }
    `

    const Heading = styled.h1`
        margin: 10px 0;
        font-size: 24px;
        font-weight: 600;
        ${'' /* display: inline-block; */}
        font-family: 'Roboto Slab', serif;

        & span svg.fa-circle-dollar {
            cursor: default;
        }

        @media only screen and (max-width: 320px) {
            font-size: 20px;
        }

        @media only screen and (min-width: 600px) {
            font-size: 40px;

            & span svg.fa-circle-dollar {
                font-size: 24px;
            }
        }

        @media only screen and (min-width: 992px) {
            font-size: 32px;

            & span svg.fa-circle-dollar {
                font-size: 20px;
            }
        }
    `
    
    return (
        <Container>
            <FontAwesomeIcon icon="fa-solid fa-circle-info" onClick={() => props.showHelp(true)}/>
            <FontAwesomeIcon icon="fa-solid fa-paint-roller" onClick={() => props.showThemes(true)}/>
            <Heading>
                <span style={green}>Net</span>
                <span style={gold}>W<FontAwesomeIcon icon="fa-solid fa-circle-dollar" />rth</span>
                dle
            </Heading>
            <FontAwesomeIcon icon="fa-solid fa-heart" onClick={() => props.showCoffee(true)}/>
            <FontAwesomeIcon icon="fa-solid fa-chart-simple" onClick={() => props.showStats(true)}/>
        </Container>
    )
        {/* <header className="header">
            <span className="left"><FontAwesomeIcon icon="fa-solid fa-circle-info" onClick={() => props.showHelp(true)}/><FontAwesomeIcon icon="fa-solid fa-paint-roller" onClick={() => props.showThemes(true)}/></span>
            <h1>
                <span className="green">Net</span><span className="gold">W<FontAwesomeIcon icon="fa-solid fa-circle-dollar" />rth</span>dle
            </h1>
            <span className="right"><FontAwesomeIcon icon="fa-solid fa-heart" onClick={() => props.showCoffee(true)}/><FontAwesomeIcon icon="fa-solid fa-chart-simple" onClick={() => props.showStats(true)}/></span>
        </header> */}
}

export default Header;