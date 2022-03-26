import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import FocusTimer from "./FocusTimer";
import BreakTimer from "./BreakTimer"
import PlayStop from "./PlayStop"
import SessionTimer from "./SessionTimer"


function nextTick(prevState) {
  const timeRemaining = Math.max(0, prevState.timeRemaining - 1);
  return {
    ...prevState,
    timeRemaining,
  };
}

function nextSession(focusDuration, breakDuration) {

  return (currentSession) => {
    if (currentSession.label === "Focusing") {
      return {
        label: "On Break",
        timeRemaining: breakDuration * 60,
      };
    }
    return {
      label: "Focusing",
      timeRemaining: focusDuration * 60,
    };
  };
}

function Pomodoro() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [session, setSession] = useState(null);
  const [focusDuration, setFocusDuration] = useState(5)
  const [breakDuration, setBreakDuration] = useState(1)
  const [disableBtn, setDisableBtn] = useState(false)
  const [disableStop, setDisableStop] = useState(true)

  function stopReset() {
    setIsTimerRunning(false)
    setSession(null)
    setFocusDuration(5)
    setBreakDuration(1)
    setDisableBtn(false)
    setDisableStop(true)
  }

  const increaseFocus = ()=> setFocusDuration((current) => Math.min(60, current + 5))
  const decreaseFocus = ()=> setFocusDuration((current) => Math.max(5, current - 5))
  const increaseBreak = ()=> setBreakDuration((current) => Math.min(15, current + 1))
  const decreaseBreak = ()=> setBreakDuration((current) => Math.max(1, current - 1))


  useInterval(() => {
      if (session.timeRemaining === 0) {
        new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
        return setSession(nextSession(focusDuration, breakDuration));
      }
      return setSession(nextTick);
    },
    isTimerRunning ? 1000 : null
  );

  /**
   * Called whenever the play/pause button is clicked.
   */
  function playPause() {
    setDisableBtn(true)
    setDisableStop(false)
    setIsTimerRunning((prevState) => {
      const nextState = !prevState;
      if (nextState) {
        setSession((prevStateSession) => {
          // If the timer is starting and the previous session is null,
          // start a focusing session.
          if (prevStateSession === null) {
            return {
              label: "Focusing",
              timeRemaining: focusDuration * 60,
            };
          }
          return prevStateSession;
        });
      }
      return nextState;
    });
  }


  return (
    <div className="pomodoro">
      <div className="row">
          <FocusTimer
          focusDuration = {focusDuration}
          increaseFocus = {increaseFocus}
          decreaseFocus = {decreaseFocus}
          disable = {disableBtn}
          />
          <BreakTimer
          breakDuration = {breakDuration}
          increaseBreak = {increaseBreak}
          decreaseBreak = {decreaseBreak}
          disable = {disableBtn}
          />
      </div>

      <SessionTimer
      session = {session}
      focusDuration = {focusDuration}
      breakDuration = {breakDuration}
      isTimerRunning = {isTimerRunning}/>

      <div className="row">
        <PlayStop
          isTimerRunning = {isTimerRunning}
          playPause = {playPause}
          stopReset = {stopReset}
          disableStop = {disableStop}
        />
      </div>
    </div>
  );
}

export default Pomodoro;
