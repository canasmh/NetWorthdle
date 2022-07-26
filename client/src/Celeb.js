import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Celeb() {

    return (
        <div>
            <h1>Celebrity Name</h1>
            <p>Occupation: First Occ, Second Occ, Third Occ</p>
            <Container>
                <Row>
                    <Col xsm={12}><p>Google Search: <a href="http://google.com/search?q=Dwayne+Johnson" target="_blank" rel="noreferrer">Manuel Canas</a></p></Col>
                </Row>
                <Row>
                    <Col xsm={6}><p>Birthday: June 26, 1996</p></Col>
                    <Col xsm={6}><p>Country of Origin: Colombia</p></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Celeb;