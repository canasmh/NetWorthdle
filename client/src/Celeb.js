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
                    <Col md={4} xsm={12}>Google Search: <a href="google.com/search?q=Manuel+Canas">Manuel Canas</a></Col>
                    <Col md={4} xsm={6}>Birthday: June 26, 1996</Col>
                    
                    <Col md={4} xsm={6}>Country of Origin: Colombia</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Celeb;