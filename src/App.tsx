import React from "react";
//////  CSS  ////////
import "./css/normalise.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/kickstart.css";
import "./css/animate.css";
import "./css/mobile.css";
import "./css/desktop.css";
//////  UTILS  ///////
//import C from "./utils/Constants";
//import F from "./utils/Functions";
//import L from "./utils/Logger";
//////  UI  ///////
import Setting from "./ui_components/Setting";

interface State {
  breakDuration: number;
  sessionDuration: number;
}

class App extends React.Component<{}, State> {
  constructor() {
    super({});
    this.state = {
      breakDuration: 5,
      sessionDuration: 25
    };
  }

  incerementBreak() {
    this.setState(({ breakDuration: curBD }) => ({
      breakDuration: curBD < 60 ? curBD + 1 : 60
    }));
  }

  decrementBreak() {
    this.setState(({ breakDuration: curBD }) => ({
      breakDuration: curBD > 0 ? curBD - 1 : 0
    }));
  }

  incerementSession() {
    this.setState(({ sessionDuration: curSD }) => ({
      sessionDuration: curSD < 60 ? curSD + 1 : 60
    }));
  }

  decrementSession() {
    this.setState(({ sessionDuration: curSD }) => ({
      sessionDuration: curSD > 0 ? curSD - 1 : 0
    }));
  }

  start() {
    console.log("start");
  }

  pause() {
    console.log("pause");
  }

  reset() {
    console.log("reset");
  }

  render() {
    const { breakDuration, sessionDuration } = this.state;
    const breakProps = {
      name: "break",
      value: breakDuration,
      increment: () => this.incerementBreak(),
      decrement: () => this.decrementBreak()
    };
    const sessionProps = {
      name: "session",
      value: sessionDuration,
      increment: () => this.incerementSession(),
      decrement: () => this.decrementSession()
    };
    return (
      <main className="flex-col-aiC-jcC h-100vh">
        <h1>Pomodoro Clock</h1>

        <div id="clock" className="white-bg flex-col-aiC">
          <div id="clock-settings" className="blue-bg flex-row">
            <Setting {...breakProps} />
            <Setting {...sessionProps} />
          </div>

          <div id="clock-face" className="teal-bg flex-col-aiC">
            <label id="timer-label">Session</label>
            <label id="time-left">25:00</label>
          </div>

          <div id="clock-controls">
            <i
              id="start"
              className="fas fa-play"
              onClick={() => this.start()}
            ></i>
            <i
              id="pause"
              className="fas fa-pause"
              onClick={() => this.pause()}
            ></i>
            <i
              id="reset"
              className="fas fa-redo"
              onClick={() => this.reset()}
            ></i>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
