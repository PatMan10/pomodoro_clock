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
  isRunning: boolean;
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
      timerName: "session",
      isRunning: false
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
    const {
      breakDuration,
      sessionDuration,
      minutes: curM,
      seconds: curS,
      timerName: curTN
    } = this.state;

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
      this.setState(
        {
          minutes,
          seconds,
          timerName
        },
        this.start
      );
    } else {
      if (seconds === 0) {
        --minutes;
        seconds = 59;
      } else {
        --seconds;
      }
      this.setState({
        minutes,
        seconds
      });
    }
  }

  incrementBreak() {
    const {
      breakDuration: curBD,
      minutes: curM,
      seconds: curS,
      timerName,
      isRunning
    } = this.state;

    if (curBD === 60 || isRunning) return;

    const newState = {
      breakDuration: curBD + 1,
      minutes: curM,
      seconds: curS
    };

    if (timerName === "break") {
      newState.minutes = newState.breakDuration;
      newState.seconds = 0;
    }
    this.setState(newState);
  }

  decrementBreak() {
    const {
      breakDuration: curBD,
      minutes: curM,
      seconds: curS,
      timerName,
      isRunning
    } = this.state;

    if (curBD === 1 || isRunning) return;

    const newState = {
      breakDuration: curBD - 1,
      minutes: curM,
      seconds: curS
    };

    if (timerName === "break") {
      newState.minutes = newState.breakDuration;
      newState.seconds = 0;
    }
    this.setState(newState);
  }

  incrementSession() {
    const {
      sessionDuration: curSD,
      minutes: curM,
      seconds: curS,
      timerName,
      isRunning
    } = this.state;

    if (curSD === 60 || isRunning) return;

    const newState = {
      sessionDuration: curSD + 1,
      minutes: curM,
      seconds: curS
    };

    if (timerName === "session") {
      newState.minutes = newState.sessionDuration;
      newState.seconds = 0;
    }
    this.setState(newState);
  }

  decrementSession() {
    const {
      sessionDuration: curSD,
      minutes: curM,
      seconds: curS,
      timerName,
      isRunning
    } = this.state;

    if (curSD === 1 || isRunning) return;

    const newState = {
      sessionDuration: curSD - 1,
      minutes: curM,
      seconds: curS
    };

    if (timerName === "session") {
      newState.minutes = newState.sessionDuration;
      newState.seconds = 0;
    }
    this.setState(newState);
  }

  start() {
    if (this.state.isRunning) return;

    console.log("start");
    this.setState(
      { isRunning: true },
      () => (this.interval = setInterval(this.decrementTimer, 1000))
    );
  }

  pause() {
    if (!this.state.isRunning) return;

    console.log("pause");
    clearInterval(this.interval);
    this.setState({ isRunning: false });
  }

  reset() {
    console.log("reset");
    clearInterval(this.interval);

    this.setState(({ sessionDuration }) => {
      let minutes = sessionDuration,
        seconds = 0,
        timerName = "session",
        isRunning = false;

      return { minutes, seconds, timerName, isRunning };
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
