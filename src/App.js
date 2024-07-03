import { Component } from "react";
import Clock from "./components/Clock";

import "./App.css";

export default class App extends Component {
  state = {
    showClock: false,
  };
  onToggleClock = () => {
    this.setState((prevState) => {
      const { showClock } = prevState;
      return {
        showClock: !showClock,
      };
    });
  };
  render() {
    const { showClock } = this.state;
    return (
      <div className="app-container">
        <button
          onClick={this.onToggleClock}
          type="button"
          className="toggle-button"
        >
          {showClock ? "Hide Clock" : "Show Clock"}
        </button>
        {showClock && <Clock />}
      </div>
    );
  }
}
