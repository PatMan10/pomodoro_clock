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
import F from "./utils/Functions";
//import L from "./utils/Logger";
//////  UI  ///////
import Setting from "./ui_components/Setting";

interface State {
  breakDuration: number;
  sessionDuration: number;
  minutes: number;
  seconds: number;
  timerName: string;
}

class App extends React.Component<{}, State> {
  private interval: ReturnType<typeof setInterval>;

  constructor() {
    super({});
    this.state = {
      breakDuration: 1,
      sessionDuration: 1,
      minutes: 1,
      seconds: 0,
      timerName: "session"
    };
    this.interval = setTimeout(() => console.log("init interval"), 1000);
    this.decrementTimer = this.decrementTimer.bind(this);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementBreak = this.decrementBreak.bind(this);
    this.incrementSession = this.incrementSession.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
  }

  decrementTimer() {
    this.setState(
      ({
        breakDuration,
        sessionDuration,
        minutes: curM,
        seconds: curS,
        timerName: curTN
      }) => {
        let minutes = curM,
          seconds = curS,
          timerName = curTN;
        if (minutes === 0 && seconds === 0) {
          this.pause();
          if (timerName === "session") {
            timerName = "break";
            minutes = breakDuration;
          } else {
            timerName = "session";
            minutes = sessionDuration;
          }
          this.start();
        } else {
          if (seconds === 0) {
            --minutes;
            seconds = 59;
          } else {
            --seconds;
          }
        }
        return { minutes, seconds, timerName };
      }
    );
  }

  incrementBreak() {
    this.setState(({ breakDuration: curBD }) => ({
      breakDuration: curBD < 60 ? curBD + 1 : 60
    }));
  }

  decrementBreak() {
    this.setState(({ breakDuration: curBD }) => ({
      breakDuration: curBD > 0 ? curBD - 1 : 0
    }));
  }

  incrementSession() {
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
    this.interval = setInterval(this.decrementTimer, 1000);
  }

  pause() {
    console.log("pause");
    clearInterval(this.interval);
  }

  reset() {
    console.log("reset");
    clearInterval(this.interval);

    this.setState(({ breakDuration, sessionDuration, timerName }) => {
      let minutes,
        seconds = 0;
      if (timerName === "break") minutes = breakDuration;
      else minutes = sessionDuration;

      return { minutes, seconds };
    });
  }

  render() {
    const {
      breakDuration,
      sessionDuration,
      minutes,
      seconds,
      timerName
    } = this.state;
    const breakProps = {
      name: "break",
      value: breakDuration,
      increment: this.incrementBreak,
      decrement: this.decrementBreak
    };
    const sessionProps = {
      name: "session",
      value: sessionDuration,
      increment: this.incrementSession,
      decrement: this.decrementSession
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
            <label id="timer-label">{F.capitalise(timerName)}</label>
            <label id="time-left">
              {minutes}:
              {seconds < 10 ? "0".concat(seconds.toString()) : seconds}
            </label>
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
