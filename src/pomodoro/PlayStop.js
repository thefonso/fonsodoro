import React from "react"
import classNames from "../utils/class-names";


function PlayStop ({isTimerRunning, playPause, stopReset, disableStop}) {
    return (
        <div className="col">
        <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
            <button
              type="button"
              className= {classNames({
                oi: true,
                "btn btn-secondary": !isTimerRunning,
                "btn btn-danger": isTimerRunning,
              })}
              data-testid="stop"
              title="Stop the session"
              onClick = {stopReset}
              disabled = {disableStop}
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
    )
}

export default PlayStop