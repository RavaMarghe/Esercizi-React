import { useState } from "react";

export function ClickCounter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrementButton() {
    setCounter((c) => c + 1);
  }

  function handleResetButton() {
    setCounter(initialValue);
  }

  return (
    <div>
      <h1>Button counter: {counter}</h1>
      <button onClick={handleIncrementButton}>Increment</button>
      <button onClick={handleResetButton}>Reset</button>
    </div>
  );
}

/*export class ClickCounter extends React.Component {

    state = {
        count: this.props.initialValue,
    };

    handleIncrementButton = (event) => {
        console.log(event)

        this.setState(() => {
            return {
                count: this.state.count + this.props.incrementBy,
            };
        })
    }

  render() {
    return <>
    <button onClick={this.handleIncrementButton}>Increment</button>
    <h1>Button counter: {this.state.count}</h1>
    </>;
  };
}

ClickCounter.defaultProps = {
    initialValue: 0,
    incrementBy: 1,
  };*/
