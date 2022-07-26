import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./Celeb.css"

function Celeb() {

    return (
        <div className="celeb-container">
            <h1 >Manuel Cañas</h1>
            <p>Occupation: Developer, Astrophysicist</p>
            <Container>
                <Row>
                    <Col xsm={12}><p>Google Search: <a href="http://google.com/search?q=Dwayne+Johnson" target="_blank" rel="noreferrer">Manuel Canas</a></p></Col>
                </Row>
                <Row>
                    <Col xsm={6}><p>Birthday: June 26, 1996</p></Col>
                    <Col xsm={6}><p>Nationality: Colombia</p></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Celeb;