import React from "react"
import {minutesToDuration, secondsToDuration} from "../utils/duration"

function SessionTimer({session, focusDuration, breakDuration, isTimerRunning}){
    {/*If no session is running, the timer will be hidden from the page*/}
    if (session !== null){
        return (
            <div>
            <div className="row mb-2">
              <div className="col">
                <h2 data-testid="session-title">
                  {session.label === "Focusing"
                  ? `Focusing for ${minutesToDuration(focusDuration)} minutes`
                  : `On Break for ${minutesToDuration(breakDuration)} minutes`
                  }
                </h2>
                <p className="lead" data-testid="session-sub-title">
                  {secondsToDuration(session?.timeRemaining)} remaining
                </p>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
              {isTimerRunning ? null : <h1>PAUSED</h1>}
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow= {100 - (100 * session.timeRemaining) / (session.label === "Focusing" ? focusDuration * 60: breakDuration * 60)}
                    style={{ width: `${100 - (100 * session.timeRemaining) / (session.label === "Focusing" ? focusDuration * 60: breakDuration * 60)}%`  }}
                  />
                </div>
              </div>
            </div>
          </div>
        )
    } else {
        return null
    }

}

export default SessionTimer
