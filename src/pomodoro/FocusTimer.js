import React from "react";
import {minutesToDuration} from "../utils/duration/index"

function FocusTimer({focusDuration, increaseFocus, decreaseFocus, disable}) {
    return (
        <div className="col">
        <div className="input-group input-group-lg mb-2">
            <div className="input-group">
              <button
                type="button"
                className="btn btn-light"
                data-testid="decrease-focus"
                onClick = {decreaseFocus}
                disabled = {disable}
              >
                <span className="oi oi-minus" />
              </button>
              <span className="input-group-text" data-testid="duration-focus">
              Focus: {minutesToDuration(focusDuration)}
              </span>
              <button
                type="button"
                className="btn btn-light"
                data-testid="increase-focus"
                onClick = {increaseFocus}
                disabled = {disable}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
          </div>
    )
}



export default FocusTimer
