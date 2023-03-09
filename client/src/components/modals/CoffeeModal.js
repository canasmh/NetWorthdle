import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from "react-redux";
import "./GameModals.css"

function BuyMeCoffee(props) {

  const theme = useSelector(state => state.theme.theme)

  const bottomBorder = {
    borderBottom: `1px solid ${theme.tertiary}`
  }

  const topBorder = {
    borderTop: `1px solid ${theme.tertiary}`
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="buy-me-a-coffee"
      contentClassName={`content-${theme.name}`}
      centered
    >
      <Modal.Header style={bottomBorder}>
        <Modal.Title id="buy-me-a-coffee">
          Thank you for playing
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="centered">About Me</h4>
        <p className="coffee-paragraph">
          Hello... <br /> <br />
          My name is Manny and I am currently working towards finishing my masters in astronomy. I am building a portfolio in hopes of getting a job in tech once I graduate. <br /> <br />
          If you would like to support me, you can do so by clicking the button below. <br /> <br />Thank you 😇
        </p>
      </Modal.Body>
      <Modal.Footer style={topBorder}>
        <Button onClick={props.onHide} variant="outline-light">No, thank you</Button>
        <Button className="coffee-button"><a href="https://www.buymeacoffee.com/canasmhw" target="__blank" className="coffee-link">Buy me a coffee</a></Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BuyMeCoffee;