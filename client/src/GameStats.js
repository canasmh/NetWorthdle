import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./GameModals.css";

function GameStats(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4 className="title">{props.name}</h4>
            <p className="net-worth"><span className="gold">Net Worth:</span> <span className="green">{props.netWorth}</span></p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xsm={4}>
              <h5 className="title">Games Played</h5>
              
            </Col>
            <Col className="middle-col" xsm={4}>
              <h5 className="title">Current Streak</h5>
              
            </Col>
            <Col xsm={4}>
              <h5 className="title">Max <br />Streak</h5>
              
            </Col>
          </Row>
          <Row>
            <Col xsm={4}>
              
              <p className="stats-info">10</p>
            </Col>
            <Col  xsm={4}>
              
              <p className="stats-info">4</p>
            </Col>
            <Col xsm={4}>
              
              <p className="stats-info">5</p>
            </Col>
          </Row>
          <div className="stats-graph">
            <p>1</p><div className="stats-bar correct-bar" style={{width: "140px"}}></div>
            <br/>
            <p>2</p><div className="stats-bar" style={{width: "35px"}}></div>
            <br/>
            <p>3</p><div className="stats-bar" style={{width: "35px"}}></div>
            <br/>
            <p>4</p><div className="stats-bar" style={{width: "35px"}}></div>
            <br/>
            <p>5</p><div className="stats-bar" style={{width: "35px"}}></div>
            
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="outline-light">Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default GameStats;