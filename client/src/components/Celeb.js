import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import styled from "styled-components";
import "./Celeb.css"

function Celeb(props) {
    const theme = useSelector((state) => state.theme.theme);
    const occ = props.occupation;
    const name = props.name;

    var occupation = "";
    var query;
    if (name !== "Loading...") {
        query = "http://google.com/search?q=" + name.split(' ').join('+')
    }
    

    for (let i = 0; i < occ.length; i++) {
        if (occ[i]) {
            occupation += occ[i]
        }

        if (i < occ.length - 1) {
            occupation += ", "
        }
    }

    const CelebLink = styled.a`
        &, &:visited, &:link {
            color: ${theme.present};
            text-decoration: none;
            font-family: 'Roboto Slab', serif;
            text-decoration: none;
            transition: color 0.1s ease-in;
        }

        &:hover {
            color: ${theme.secondary};
        }
    `

    return (
        <section className="celeb-container">
            <h2>{name}</h2>
            <p><strong>Occupation: </strong>{occupation}</p>
            <Container>
                <Row>
                    <Col xsm={12}><p><strong>Google Search:</strong> <CelebLink href={query} target="_blank" rel="noreferrer">{name}</CelebLink></p></Col>
                </Row>
                <Row>
                    <Col xsm={6}><p><strong>Birthday: </strong>{props.birthday}</p></Col>
                    <Col xsm={6}><p><strong>Nationality: </strong>{props.nationality}</p></Col>
                </Row>
            </Container>
        </section>
    )
}

export default Celeb;