import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import { updateTheme } from "../../redux/action-creators";
import "./GameModals.css"

function ThemesModal(props) {
  // const theme = useSelector((state) => state.theme.theme)
  const dispatch = useDispatch();
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="select-theme"
      centered
    >
      <Modal.Header>
        <Modal.Title id="select-theme">
          Select a Theme
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p>We have a wide variety of themes that you can select. Preview each one to see which one works best for you!</p>
          <button onClick={() => dispatch(updateTheme('original'))}>Original</button>
          <button onClick={() => dispatch(updateTheme('dark'))}>Dark</button>
          <button onClick={() => dispatch(updateTheme('light'))}>Light</button>
          <button onClick={() => dispatch(updateTheme('highContrast'))}>High Contrast</button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="outline-light">Done</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ThemesModal;