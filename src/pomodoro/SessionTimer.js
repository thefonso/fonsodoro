import React, {} from "react"
import {minutesToDuration, secondsToDuration} from "../utils/duration"
import classNames from "../utils/class-names";


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
            <div className="progress twenty-solid mx-auto" data-value={dataValue}>
              {(dataValue <= 50) ?
                <>
                  <span className="progress-right">
                  <span className={classNames({"progress-bar fat-line border-primary": session.label === "Focusing", "progress-bar fat-line border-danger": session.label !== "Focusing"})}
                        style={{transform:'rotate('+(dataValue/100*360)+'deg)'}}></span>
                  </span>
                </>
                :
                <>
                  <span className="progress-right">
                  <span className={classNames({"progress-bar fat-line border-primary": session.label === "Focusing", "progress-bar fat-line border-danger": session.label !== "Focusing"})}
                        style={{transform:'rotate(180deg)'}}></span>
                  </span>
                  <span className="progress-left">
                  <span className={classNames({"progress-bar fat-line border-primary": session.label === "Focusing", "progress-bar fat-line border-danger": session.label !== "Focusing"})}
                        style={{transform:'rotate('+((dataValue-50)/100*360)+'deg)'}}></span>
                  </span>
                </>}
              <div
                className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                <div className="h2 font-weight-bold">
                  <p className="" data-testid="session-sub-title">
                    {session.label === "Focusing"
                      ? `Focusing`
                      : `Break`
                    } <br/>
                    {secondsToDuration(session?.timeRemaining)} <br/>
                    {isTimerRunning ? null : <>PAUSED</>}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="row mb-2">
        <div className="col">
          <div className="progress mx-auto">
            <span className="progress-right">
              <span className="progress-bar thin-line border-white"
                    style={{transform:'rotate(180deg)'}}></span>
            </span>
            <span className="progress-left">
              <span className="progress-bar thin-line border-white"
                    style={{transform:'rotate(180deg)'}}></span>
            </span>
              <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                <div className="h2 font-weight-bold">
                  <p className="" data-testid="session-sub-title">
                    {focusDuration}:00 <br/> Focus
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }

}

export default SessionTimer
