import React from "react";
//////  CSS  ////////
import "./css/normalise.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/kickstart.css";
import "./css/animate.css";
import "./css/mobile.css";
import "./css/desktop.css";
//////  UTILS  ///////
import C from "./utils/Constants";
import F from "./utils/Functions";
import L from "./utils/Logger";

interface State {}
class App extends React.Component<{}, State> {
  constructor() {
    super({});
    this.state = {};
  }

  render() {
    return (
      <main className="flex-col-aiC-jcC h-100vh">
        <h1>Pomodoro Clock</h1>

        <div id="settings-container" className="blue-bg flex-row">
          <div id="break-setting" className="flex-col-aiC">
            <label id="break-label">Break Length</label>
            <div id="break-controls" className="red-bg flex-row-aiC flex-jcSE">
              <i id="break-increment" className="fas fa-arrow-up"></i>
              <span id="break-length">5</span>
              <i id="break-decrement" className="fas fa-arrow-down"></i>
            </div>
          </div>

          <div id="session-setting" className="flex-col-aiC">
            <label id="session-label">Session Length</label>
            <div
              id="session-controls"
              className="red-bg flex-row-aiC flex-jcSE"
            >
              <i id="session-increment" className="fas fa-arrow-up"></i>
              <span id="session-length">25</span>
              <i id="session-decrement" className="fas fa-arrow-down"></i>
            </div>
          </div>
        </div>

        <div className="teal-bg flex-col-aiC">
          <label id="timer-label">Session</label>
          <label id="time-left">25:00</label>
        </div>

        <div>
          <i id="start" className="fas fa-play"></i>
          <i id="stop" className="fas fa-pause"></i>
          <i id="reset" className="fas fa-redo"></i>
        </div>
      </main>
    );
  }
}

export default App;
