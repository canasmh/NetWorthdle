import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./GameModals.css";
import { todaysDate, timeTillTomorrow } from "./Dates";

function GameStats(props) {
  const [timer, setTimer] = React.useState({hours: null, minutes: null, seconds: null})
  var barWidths = [0, 0, 0, 0];
  setTimeout(() => {
    var time = timeTillTomorrow();
    setTimer({hours: String(time.hours).padStart(2, '0'), minutes: String(time.minutes).padStart(2, '0'), seconds: String(time.seconds).padStart(2, '0')})},
  1000)

  if (localStorage.wonOnFirst && localStorage.wonOnSecond && localStorage.wonOnThird && localStorage.wonOnFourth && localStorage.gamesPlayed !== 0) {
    var maxBar = 1;
    var compareArr = [parseInt(localStorage.wonOnFirst), parseInt(localStorage.wonOnSecond), parseInt(localStorage.wonOnThird), parseInt(localStorage.wonOnFourth)]
    for (let i = 0; i < barWidths.length; i++) {
      if (compareArr[i] > maxBar) {
        maxBar = compareArr[i]
      }
    }
    barWidths[0] = parseInt(localStorage.wonOnFirst) / maxBar * 90;
    barWidths[1] = parseInt(localStorage.wonOnSecond) / maxBar * 90;
    barWidths[2] = parseInt(localStorage.wonOnThird) / maxBar * 90;
    barWidths[3] = parseInt(localStorage.wonOnFourth) / maxBar * 90;

    
  }

  
  for (let i = 0; i < barWidths.length; i++) {
    if (barWidths[i] === 0) {
      barWidths[i] = 2;

    } 

  }

  return (

    

    <Modal
      {...props}
      size="md"
      aria-labelledby="gameStats"
      centered
    >
      <Modal.Header>
        <Modal.Title id="gameStats">
          <h4 className="title">{props.name}</h4>
          {localStorage.lastPlayed === todaysDate() && <p className="net-worth"><span className="gold">Net Worth:</span> <span className="green">${props.netWorth}</span></p>}
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
            
            <p className="stats-info">{!localStorage.gamesPlayed ? "loading.." : localStorage.gamesPlayed}</p>
          </Col>
          <Col  xsm={4}>
            
            <p className="stats-info">{!localStorage.currentStreak ? "loading.." : localStorage.currentStreak}</p>
          </Col>
          <Col xsm={4}>
            
            <p className="stats-info">{!localStorage.currentStreak ? "loading.." : localStorage.maxStreak}</p>
          </Col>
        </Row>
        
        <div className="stats-graph">
          <p>1</p><div className="stats-bar" style={{width: barWidths[0] + "%", backgroundColor: localStorage.guesses && localStorage.guesses.split(",").length === 1 ? "#5A8F7B" : "#373737"}}>{localStorage.wonOnFirst !== "0" ? localStorage.wonOnFirst : ""}</div>
          <br/>
          <p>2</p><div className="stats-bar" style={{width: barWidths[1] + "%", backgroundColor: localStorage.guesses && localStorage.guesses.split(",").length === 2 ? "#5A8F7B" : "#373737"}}>{localStorage.wonOnSecond !== "0" ? localStorage.wonOnSecond : ""}</div>
          <br/>
          <p>3</p><div className="stats-bar" style={{width: barWidths[2] + "%", backgroundColor: localStorage.guesses && localStorage.guesses.split(",").length === 3 ? "#5A8F7B" : "#373737"}}>{localStorage.wonOnThird !== "0" ? localStorage.wonOnThird : ""}</div>
          <br/>
          <p>4</p><div className="stats-bar" style={{width: barWidths[3] + "%", backgroundColor: localStorage.guesses && localStorage.guesses.split(",").length === 4 && localStorage.gameWon === "true" ? "#5A8F7B" : "#373737"}}>{localStorage.wonOnFourth !== "0" ? localStorage.wonOnFourth : ""}</div>
        </div>
        {localStorage.lastPlayed === todaysDate() &&
        <div className="timer">
        <hr className="timer-hr"></hr>
          <p>Play again in:</p>
          <p className="countdown-timer">{timer.hours}:{timer.minutes}:{timer.seconds}</p>
        <hr className="timer-hr"></hr>
        </div>}
      </Modal.Body>
      <Modal.Footer>
      
        <Button onClick={props.onHide} variant="outline-light">Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GameStats;