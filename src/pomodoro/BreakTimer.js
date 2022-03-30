import React from "react";
import {minutesToDuration} from "../utils/duration/index"

function BreakTimer({breakDuration,increaseBreak,decreaseBreak,disable}) {

    return (
        <div className="col">
          <div className="float-right">
        <div className="input-group input-group-lg mb-2">

              {/* Decrease Break Button */}
              <div className="input-group">
                <button
                  type="button"
                  className="btn btn-light"
                  data-testid="decrease-break"
                  onClick = {decreaseBreak}
                  disabled = {disable}
                >
                  <span className="oi oi-minus" />
                </button>

                <span className="input-group-text" data-testid="duration-break">
                Break: {minutesToDuration(breakDuration)}
                </span>

                {/* Increase Break Button */}
                <button
                  type="button"
                  className="btn btn-light"
                  data-testid="increase-break"
                  onClick = {increaseBreak}
                  disabled = {disable}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
            </div>
            </div>

    )
}

export default BreakTimer
