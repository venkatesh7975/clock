import { Component } from "react";
import "./index.css";

export default class Clock extends Component {
  state = { date: new Date() };

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick = () => {
    this.setState({
      date: new Date(),
    });
  };
  render() {
    const { date } = this.state;
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
