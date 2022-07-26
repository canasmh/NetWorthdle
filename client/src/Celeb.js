import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./Celeb.css"

function Celeb() {

    return (
        <div className="celeb-container">
            <h1><span className="gold">Manuel</span> Canas</h1>
            <p><strong>Occupation:</strong> Developer, Astrophysicist</p>
            <Container>
                <Row>
                    <Col xsm={12}><p><strong>Google Search:</strong> <a href="http://google.com/search?q=Dwayne+Johnson" target="_blank" rel="noreferrer">Manuel Canas</a></p></Col>
                </Row>
                <Row>
                    <Col xsm={6}><p><strong>Birthday:</strong> June 26, 1996</p></Col>
                    <Col xsm={6}><p><strong>Nationality:</strong> Colombia</p></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Celeb;