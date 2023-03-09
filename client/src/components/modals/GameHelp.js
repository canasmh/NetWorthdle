import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./GameModals.css";
import { useSelector } from "react-redux";

function GameHelp(props) {
    const theme = useSelector(state => state.theme.theme);
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
      setHover(true);
    }

    const handleMouseExit = () => {
      setHover(false);
    }

    const handleClick = () => {
      props.onHide();
      setHover(false);
    }
    const correct = {
      backgroundColor: theme.correct,
      display: 'inline-block',
      width: '6rem',
      height: '1.5rem'
    }

    const present = {
      backgroundColor: theme.present,
      display: 'inline-block',
      width: '6rem',
      height: '1.5rem'
    }

    const absent = {
      backgroundColor: theme.absent,
      display: 'inline-block',
      width: '6rem',
      height: '1.5rem'
    }

    const buttonOutline = {
      backgroundColor: !hover ? theme.primary : theme.tertiary,
      color: hover ? theme.primary : theme.tertiary,
      border: `1px solid ${hover ? theme.primary : theme.tertiary}`,
    }

    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        contentClassName={`content-${theme.name}`}
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
        </p>
        <p>
            <span style={correct}>&nbsp;</span> means that the number and/or amount is in the correct spot
        </p>
        <p>
            <span style={present}>&nbsp;</span> means that that number <em>is</em> present, but is not in the correct spot.
        </p>
        <p>
            <span style={absent}>&nbsp;</span> means that the number and/or amount is not present.
        </p>
        </Modal.Body>
        <Modal.Footer>
          <Button 
            onClick={handleClick} 
            style={buttonOutline} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseExit}>
              Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default GameHelp;