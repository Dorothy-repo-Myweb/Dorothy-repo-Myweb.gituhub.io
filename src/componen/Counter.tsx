import React from "react";

interface Istate {
  counter: number;
}
class Counter extends React.Component<{}, Istate> {
  state = {
    counter: 0,
  };

  handleClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };
  render() {
    const { counter } = this.state;
    return (
      <>
        <h1>{counter}</h1>
        <button type="button" onClick={this.handleClick}>
          Click me
        </button>
      </>
    );
  }
}
export default Counter;
