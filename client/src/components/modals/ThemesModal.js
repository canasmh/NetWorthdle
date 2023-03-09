import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ColorPalette from "../ColorPalette";
import themes from "../../themes/themeColors";
import { useSelector } from "react-redux";
import "./GameModals.css"

function ThemesModal(props) {
  const theme = useSelector((state) => state.theme.theme)

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
      aria-labelledby="select-theme"
      contentClassName={`content-${theme.name}`}
      centered
    >
      <Modal.Header style={bottomBorder}>
        <Modal.Title id="select-theme">
          Select a Theme
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p>We have a wide variety of themes that you can select. Preview each one to see which one works best for you!</p>
      {themes.map(theme => <ColorPalette key={theme.id} theme={theme}/>)}
      </Modal.Body>
      <Modal.Footer style={topBorder}>
        <Button onClick={props.onHide} variant="outline-light" >Done</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ThemesModal;