import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./GameModals.css";

function GameHelp(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            How To Play
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <span className="centered">Enter a 3 digit number (from <strong>001</strong> to <strong>999</strong>) and an amount (i.e., <strong>Million</strong>).</span>
            <br />
            <br />
            <span className="green-bg">GREEN</span> means that the number and/or amount is in the correct spot
            <br />
            <br />
            <span className="yellow-bg">YELLOW</span> means that that number <em>is</em> present, but is not in the correct spot.
            <br />
            <br />
            <span className="gray-bg">GRAY</span> means that the number and/or amount is not present.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="outline-light">Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default GameHelp;