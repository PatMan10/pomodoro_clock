import React from "react";

interface State {}
class App extends React.Component<{}, State> {
  constructor() {
    super({});
    this.state = {};
  }

  render() {
    return (
      <main className="flex-row-jcC flex-aiC">
        <h1>Clock</h1>
      </main>
    );
  }
}

export default App;
