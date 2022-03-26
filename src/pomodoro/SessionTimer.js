import React, {useEffect} from "react"
import {minutesToDuration, secondsToDuration} from "../utils/duration"




  // if (value > 0) {
  //   if (value <= 50) {
  //     right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
  //   } else {
  //     right.css('transform', 'rotate(180deg)')
  //     left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
  //   }
  // }



function percentageToDegrees(percentage) {
  return percentage / 100 * 360
}

function SessionTimer({session, focusDuration, breakDuration, isTimerRunning}){

  {/*If no session is running, the timer will be hidden from the page*/}
  if (session !== null){
    let dataValue = 100 - (100 * session.timeRemaining) / (session.label === "Focusing" ? focusDuration * 60: breakDuration * 60)
    // console.log("dataValue "+dataValue)

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

          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            {isTimerRunning ? null : <h1>PAUSED</h1>}
            <div className="progress mx-auto" data-value={dataValue}>
              {(dataValue <= 50) ?
                <>
                  <span className="progress-right">
                  <span className="progress-bar border-primary" style={{transform:'rotate('+(dataValue/100*360)+'deg)'}}></span>
                  </span>
                </>
                :
                <>
                  <span className="progress-right">
                  <span className="progress-bar border-primary" style={{transform:'rotate(180deg)'}}></span>
                  </span>
                  <span className="progress-left">
                  <span className="progress-bar border-primary" style={{transform:'rotate('+((dataValue-50)/100*360)+'deg)'}}></span>
                  </span>
                </>}
              <div
                className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                <div className="h2 font-weight-bold">
                  <p className="" data-testid="session-sub-title">
                    {secondsToDuration(session?.timeRemaining)} <br/> remaining
                  </p>
                </div>
              </div>
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
