import React from "react"
import classNames from "../utils/class-names";

// this component needs text explaining style color property changes

function PlayStop ({isTimerRunning, playPause, stopReset, disableStop}) {
    return (
        <div className="col">
          <div className="btn-group btn-group-lg mb-2" role="group" aria-label="Timer controls">
            <button type="button"
                    className="btn btn-primary start_stop"
                    data-testid="play-pause"
                    title="Start or pause timer"
                    onClick={playPause}>
              { !isTimerRunning ? 'play' : 'pause'}
            </button>
            {/*<button className="btn btn-default start_stop" id="stop_all">stop</button>*/}
            <button type="button"
                    className= {classNames({ "btn btn-secondary start_stop": !isTimerRunning, "btn btn-danger start_stop": isTimerRunning,})}
                    data-testid="stop"
                    title="Stop the session"
                    onClick = {stopReset}
                    disabled = {disableStop}>
              stop
            </button>
          </div>
        </div>
    )
}

export default PlayStop
