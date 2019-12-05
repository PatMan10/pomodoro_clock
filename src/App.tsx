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
//////  UI  ///////
import Setting from "./ui_components/Setting";

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

        <div id="clock">
          <div id="settings-container" className="blue-bg flex-row">
            <Setting
              name="break"
              value={5}
              incerement={() => console.log("++break")}
              decerement={() => console.log("--break")}
            />
            <Setting
              name="session"
              value={25}
              incerement={() => console.log("++session")}
              decerement={() => console.log("--session")}
            />
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
        </div>
      </main>
    );
  }
}

export default App;
