import React from "react";

// var dateStr = new Date().toLocaleTimeString();

// function updateDate() {
//     this.setState({dateState: new Date().toLocaleTimeString()});
// }
export class LiveDate extends React.Component<any, any> {
  private timeout;
  constructor(props, state) {
    super(props, state);
    this.state = { dateState: new Date().toLocaleTimeString() };
  }

  dateTimer() {
    this.timeout = setInterval(() => {
      this.setState({ dateState: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidMount() {
    this.dateTimer();
  }

  /**
   * Cleaning up interval
   */
  componentWillUnmount() {
    if (this.timeout) {
      clearInterval(this.timeout);
    }
  }

  // We shouldn't update the state from the render method. It will render component infinite times.
  render() {
    return (
      <div>
        <h1>Live Date Demo</h1>
        <label> {this.state.dateState} </label>
      </div>
    );
  }
}
