import React from "react";
import {minutesToDuration} from "../utils/duration/index"

function BreakTimer({breakDuration,increaseBreak,decreaseBreak,disable}) {

    return (
        <div className="col">
          <div className="float-right">
        <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                Break Duration: {minutesToDuration(breakDuration)}
              </span>

              {/* Decrease Break Button */}
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick = {decreaseBreak}
                  disabled = {disable}
                >
                  <span className="oi oi-minus" />
                </button>

                {/* Increase Break Button */}
                <button
                  type="button"
                  className="btn btn-secondary"
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