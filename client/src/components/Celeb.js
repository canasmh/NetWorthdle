import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./Celeb.css"

function Celeb(props) {

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

    return (
        <section className="celeb-container">
            <h1>{name}</h1>
            <p><strong>Occupation: </strong>{occupation}</p>
            <Container>
                <Row>
                    <Col xsm={12}><p><strong>Google Search:</strong> <a href={query} target="_blank" rel="noreferrer">{name}</a></p></Col>
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