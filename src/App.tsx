import React from "react";
//////////////
import "./css/normalise.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/kickstart.css";
import "./css/animate.css";
import "./css/mobile.css";
import "./css/desktop.css";
/////////////
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
      <main className="flex-row-aiC-jcC">
        <h1>Clock</h1>
      </main>
    );
  }
}

export default App;
